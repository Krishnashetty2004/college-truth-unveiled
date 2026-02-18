-- Add downvote_count to reviews table
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS downvote_count INTEGER DEFAULT 0;

-- Create vote_review function (Reddit-style voting)
CREATE OR REPLACE FUNCTION vote_review(p_review_id uuid, p_user_id uuid, p_vote_type smallint)
RETURNS jsonb AS $$
DECLARE
  v_existing_vote smallint;
  v_result jsonb;
BEGIN
  -- Get existing vote
  SELECT vote_type INTO v_existing_vote
  FROM helpful_votes
  WHERE review_id = p_review_id AND user_id = p_user_id;

  IF v_existing_vote IS NOT NULL THEN
    IF v_existing_vote = p_vote_type THEN
      -- Same vote = remove vote (toggle off)
      DELETE FROM helpful_votes WHERE review_id = p_review_id AND user_id = p_user_id;
      -- Update counts
      IF p_vote_type = 1 THEN
        UPDATE reviews SET helpful_count = GREATEST(helpful_count - 1, 0) WHERE id = p_review_id;
      ELSE
        UPDATE reviews SET downvote_count = GREATEST(downvote_count - 1, 0) WHERE id = p_review_id;
      END IF;
      v_result := jsonb_build_object('vote', 0);
    ELSE
      -- Different vote = switch vote
      UPDATE helpful_votes SET vote_type = p_vote_type WHERE review_id = p_review_id AND user_id = p_user_id;
      IF p_vote_type = 1 THEN
        UPDATE reviews SET helpful_count = helpful_count + 1, downvote_count = GREATEST(downvote_count - 1, 0) WHERE id = p_review_id;
      ELSE
        UPDATE reviews SET helpful_count = GREATEST(helpful_count - 1, 0), downvote_count = downvote_count + 1 WHERE id = p_review_id;
      END IF;
      v_result := jsonb_build_object('vote', p_vote_type);
    END IF;
  ELSE
    -- New vote
    INSERT INTO helpful_votes (user_id, review_id, vote_type) VALUES (p_user_id, p_review_id, p_vote_type);
    IF p_vote_type = 1 THEN
      UPDATE reviews SET helpful_count = helpful_count + 1 WHERE id = p_review_id;
    ELSE
      UPDATE reviews SET downvote_count = downvote_count + 1 WHERE id = p_review_id;
    END IF;
    v_result := jsonb_build_object('vote', p_vote_type);
  END IF;

  -- Get updated counts
  SELECT jsonb_build_object(
    'vote', COALESCE((v_result->>'vote')::int, 0),
    'upvotes', helpful_count,
    'downvotes', downvote_count
  ) INTO v_result FROM reviews WHERE id = p_review_id;

  RETURN v_result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
