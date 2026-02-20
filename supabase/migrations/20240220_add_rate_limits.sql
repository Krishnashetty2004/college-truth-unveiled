-- Rate Limiting & Security Migration
-- Run this in Supabase SQL Editor

-- ============================================
-- 1. Create rate_limits table
-- ============================================
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  action_type TEXT NOT NULL, -- 'review', 'story', 'comment', 'report', 'vote'
  ip_address INET,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast lookups
CREATE INDEX IF NOT EXISTS idx_rate_limits_user_action
ON public.rate_limits(user_id, action_type, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_rate_limits_ip
ON public.rate_limits(ip_address, action_type, created_at DESC);

-- Auto-cleanup old records (older than 24 hours)
CREATE INDEX IF NOT EXISTS idx_rate_limits_cleanup
ON public.rate_limits(created_at);

-- ============================================
-- 2. Rate limit check function
-- ============================================
CREATE OR REPLACE FUNCTION check_rate_limit(
  p_user_id UUID,
  p_action_type TEXT,
  p_max_requests INT,
  p_window_minutes INT
) RETURNS BOOLEAN AS $$
DECLARE
  request_count INT;
BEGIN
  -- Count requests in the time window
  SELECT COUNT(*) INTO request_count
  FROM public.rate_limits
  WHERE user_id = p_user_id
    AND action_type = p_action_type
    AND created_at > NOW() - (p_window_minutes || ' minutes')::INTERVAL;

  -- Return true if under limit
  RETURN request_count < p_max_requests;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 3. Record rate limit hit function
-- ============================================
CREATE OR REPLACE FUNCTION record_rate_limit(
  p_user_id UUID,
  p_action_type TEXT
) RETURNS VOID AS $$
BEGIN
  INSERT INTO public.rate_limits (user_id, action_type)
  VALUES (p_user_id, p_action_type);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 4. Review submission rate limit trigger
-- ============================================
CREATE OR REPLACE FUNCTION check_review_rate_limit()
RETURNS TRIGGER AS $$
BEGIN
  -- Check: max 5 reviews per hour
  IF NOT check_rate_limit(NEW.user_id, 'review', 5, 60) THEN
    RAISE EXCEPTION 'Rate limit exceeded. Maximum 5 reviews per hour.';
  END IF;

  -- Record this request
  PERFORM record_rate_limit(NEW.user_id, 'review');

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Apply trigger to reviews table
DROP TRIGGER IF EXISTS review_rate_limit_trigger ON public.reviews;
CREATE TRIGGER review_rate_limit_trigger
  BEFORE INSERT ON public.reviews
  FOR EACH ROW
  EXECUTE FUNCTION check_review_rate_limit();

-- ============================================
-- 5. Story submission rate limit trigger
-- ============================================
CREATE OR REPLACE FUNCTION check_story_rate_limit()
RETURNS TRIGGER AS $$
BEGIN
  -- Check: max 3 stories per hour
  IF NOT check_rate_limit(NEW.user_id, 'story', 3, 60) THEN
    RAISE EXCEPTION 'Rate limit exceeded. Maximum 3 stories per hour.';
  END IF;

  PERFORM record_rate_limit(NEW.user_id, 'story');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS story_rate_limit_trigger ON public.college_stories;
CREATE TRIGGER story_rate_limit_trigger
  BEFORE INSERT ON public.college_stories
  FOR EACH ROW
  EXECUTE FUNCTION check_story_rate_limit();

-- ============================================
-- 6. Comment rate limit trigger
-- ============================================
CREATE OR REPLACE FUNCTION check_comment_rate_limit()
RETURNS TRIGGER AS $$
BEGIN
  -- Check: max 20 comments per hour
  IF NOT check_rate_limit(NEW.user_id, 'comment', 20, 60) THEN
    RAISE EXCEPTION 'Rate limit exceeded. Maximum 20 comments per hour.';
  END IF;

  PERFORM record_rate_limit(NEW.user_id, 'comment');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS comment_rate_limit_trigger ON public.story_comments;
CREATE TRIGGER comment_rate_limit_trigger
  BEFORE INSERT ON public.story_comments
  FOR EACH ROW
  EXECUTE FUNCTION check_comment_rate_limit();

-- ============================================
-- 7. Report rate limit trigger
-- ============================================
CREATE OR REPLACE FUNCTION check_report_rate_limit()
RETURNS TRIGGER AS $$
BEGIN
  -- Check: max 10 reports per hour
  IF NOT check_rate_limit(NEW.user_id, 'report', 10, 60) THEN
    RAISE EXCEPTION 'Rate limit exceeded. Maximum 10 reports per hour.';
  END IF;

  PERFORM record_rate_limit(NEW.user_id, 'report');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS report_rate_limit_trigger ON public.reports;
CREATE TRIGGER report_rate_limit_trigger
  BEFORE INSERT ON public.reports
  FOR EACH ROW
  EXECUTE FUNCTION check_report_rate_limit();

-- ============================================
-- 8. Vote rate limit trigger
-- ============================================
CREATE OR REPLACE FUNCTION check_vote_rate_limit()
RETURNS TRIGGER AS $$
BEGIN
  -- Check: max 50 votes per hour
  IF NOT check_rate_limit(NEW.user_id, 'vote', 50, 60) THEN
    RAISE EXCEPTION 'Rate limit exceeded. Maximum 50 votes per hour.';
  END IF;

  PERFORM record_rate_limit(NEW.user_id, 'vote');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS vote_rate_limit_trigger ON public.helpful_votes;
CREATE TRIGGER vote_rate_limit_trigger
  BEFORE INSERT ON public.helpful_votes
  FOR EACH ROW
  EXECUTE FUNCTION check_vote_rate_limit();

-- ============================================
-- 9. Cleanup old rate limit records (cron job)
-- ============================================
-- Run this as a scheduled function or cron job
CREATE OR REPLACE FUNCTION cleanup_rate_limits()
RETURNS VOID AS $$
BEGIN
  DELETE FROM public.rate_limits
  WHERE created_at < NOW() - INTERVAL '24 hours';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================
-- 10. RLS Policies for rate_limits table
-- ============================================
ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Only allow service role to access rate_limits
CREATE POLICY "Service role only" ON public.rate_limits
  FOR ALL
  USING (auth.role() = 'service_role');

-- ============================================
-- 11. Content length validation trigger
-- ============================================
CREATE OR REPLACE FUNCTION validate_content_length()
RETURNS TRIGGER AS $$
BEGIN
  -- Reviews: 50-5000 characters
  IF TG_TABLE_NAME = 'reviews' THEN
    IF LENGTH(NEW.content) < 50 THEN
      RAISE EXCEPTION 'Review content must be at least 50 characters.';
    END IF;
    IF LENGTH(NEW.content) > 5000 THEN
      RAISE EXCEPTION 'Review content cannot exceed 5000 characters.';
    END IF;
  END IF;

  -- Stories: 100-10000 characters
  IF TG_TABLE_NAME = 'college_stories' THEN
    IF LENGTH(NEW.content) < 100 THEN
      RAISE EXCEPTION 'Story content must be at least 100 characters.';
    END IF;
    IF LENGTH(NEW.content) > 10000 THEN
      RAISE EXCEPTION 'Story content cannot exceed 10000 characters.';
    END IF;
  END IF;

  -- Comments: 1-2000 characters
  IF TG_TABLE_NAME = 'story_comments' THEN
    IF LENGTH(NEW.content) < 1 THEN
      RAISE EXCEPTION 'Comment cannot be empty.';
    END IF;
    IF LENGTH(NEW.content) > 2000 THEN
      RAISE EXCEPTION 'Comment cannot exceed 2000 characters.';
    END IF;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply content validation triggers
DROP TRIGGER IF EXISTS validate_review_content ON public.reviews;
CREATE TRIGGER validate_review_content
  BEFORE INSERT OR UPDATE ON public.reviews
  FOR EACH ROW
  EXECUTE FUNCTION validate_content_length();

DROP TRIGGER IF EXISTS validate_story_content ON public.college_stories;
CREATE TRIGGER validate_story_content
  BEFORE INSERT OR UPDATE ON public.college_stories
  FOR EACH ROW
  EXECUTE FUNCTION validate_content_length();

DROP TRIGGER IF EXISTS validate_comment_content ON public.story_comments;
CREATE TRIGGER validate_comment_content
  BEFORE INSERT OR UPDATE ON public.story_comments
  FOR EACH ROW
  EXECUTE FUNCTION validate_content_length();

-- ============================================
-- DONE! Summary of rate limits:
-- ============================================
-- Reviews: 5 per hour
-- Stories: 3 per hour
-- Comments: 20 per hour
-- Reports: 10 per hour
-- Votes: 50 per hour
-- ============================================
