-- Migration: Reddit-style voting system
-- Run date: 2026-02-18

-- Add downvote_count to college_stories
ALTER TABLE college_stories ADD COLUMN IF NOT EXISTS downvote_count integer DEFAULT 0;

-- Add vote_type column to helpful_votes (1 = upvote, -1 = downvote)
ALTER TABLE helpful_votes ADD COLUMN IF NOT EXISTS vote_type smallint DEFAULT 1;

-- Add constraint for valid vote types
ALTER TABLE helpful_votes DROP CONSTRAINT IF EXISTS valid_vote_type;
ALTER TABLE helpful_votes ADD CONSTRAINT valid_vote_type CHECK (vote_type IN (1, -1));

-- Drop old function
DROP FUNCTION IF EXISTS toggle_story_vote(uuid, uuid);

-- Create new Reddit-style vote function
-- Returns: { vote: 0|1|-1, upvotes: number, downvotes: number }
-- vote: 0 = removed, 1 = upvoted, -1 = downvoted
CREATE OR REPLACE FUNCTION vote_story(p_story_id uuid, p_user_id uuid, p_vote_type smallint)
RETURNS json AS $$
DECLARE
  existing_vote record;
  new_upvotes integer;
  new_downvotes integer;
BEGIN
  -- Get existing vote if any
  SELECT id, vote_type INTO existing_vote
  FROM helpful_votes
  WHERE story_id = p_story_id AND user_id = p_user_id;

  IF existing_vote.id IS NOT NULL THEN
    IF existing_vote.vote_type = p_vote_type THEN
      -- Same vote type: remove vote (toggle off)
      DELETE FROM helpful_votes WHERE id = existing_vote.id;

      IF p_vote_type = 1 THEN
        UPDATE college_stories SET upvote_count = GREATEST(upvote_count - 1, 0) WHERE id = p_story_id;
      ELSE
        UPDATE college_stories SET downvote_count = GREATEST(downvote_count - 1, 0) WHERE id = p_story_id;
      END IF;

      SELECT upvote_count, downvote_count INTO new_upvotes, new_downvotes FROM college_stories WHERE id = p_story_id;
      RETURN json_build_object('vote', 0, 'upvotes', new_upvotes, 'downvotes', new_downvotes);
    ELSE
      -- Different vote type: switch vote
      UPDATE helpful_votes SET vote_type = p_vote_type WHERE id = existing_vote.id;

      IF p_vote_type = 1 THEN
        -- Switching from downvote to upvote
        UPDATE college_stories
        SET upvote_count = upvote_count + 1,
            downvote_count = GREATEST(downvote_count - 1, 0)
        WHERE id = p_story_id;
      ELSE
        -- Switching from upvote to downvote
        UPDATE college_stories
        SET upvote_count = GREATEST(upvote_count - 1, 0),
            downvote_count = downvote_count + 1
        WHERE id = p_story_id;
      END IF;

      SELECT upvote_count, downvote_count INTO new_upvotes, new_downvotes FROM college_stories WHERE id = p_story_id;
      RETURN json_build_object('vote', p_vote_type, 'upvotes', new_upvotes, 'downvotes', new_downvotes);
    END IF;
  ELSE
    -- No existing vote: create new vote
    INSERT INTO helpful_votes (user_id, story_id, vote_type) VALUES (p_user_id, p_story_id, p_vote_type);

    IF p_vote_type = 1 THEN
      UPDATE college_stories SET upvote_count = upvote_count + 1 WHERE id = p_story_id;
    ELSE
      UPDATE college_stories SET downvote_count = downvote_count + 1 WHERE id = p_story_id;
    END IF;

    SELECT upvote_count, downvote_count INTO new_upvotes, new_downvotes FROM college_stories WHERE id = p_story_id;
    RETURN json_build_object('vote', p_vote_type, 'upvotes', new_upvotes, 'downvotes', new_downvotes);
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;
