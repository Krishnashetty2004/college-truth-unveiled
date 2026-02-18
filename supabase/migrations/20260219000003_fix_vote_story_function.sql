-- Drop existing vote_story function (has wrong return type)
DROP FUNCTION IF EXISTS vote_story(uuid, uuid, smallint);
DROP FUNCTION IF EXISTS vote_story(uuid, uuid);

-- Create vote_story function (Reddit-style voting)
CREATE OR REPLACE FUNCTION vote_story(p_story_id uuid, p_user_id uuid, p_vote_type smallint)
RETURNS jsonb AS $$
DECLARE
  v_existing_vote smallint;
  v_result jsonb;
BEGIN
  -- Get existing vote
  SELECT vote_type INTO v_existing_vote
  FROM helpful_votes
  WHERE story_id = p_story_id AND user_id = p_user_id;

  IF v_existing_vote IS NOT NULL THEN
    IF v_existing_vote = p_vote_type THEN
      -- Same vote = remove vote (toggle off)
      DELETE FROM helpful_votes WHERE story_id = p_story_id AND user_id = p_user_id;
      -- Update counts
      IF p_vote_type = 1 THEN
        UPDATE college_stories SET upvote_count = GREATEST(upvote_count - 1, 0) WHERE id = p_story_id;
      ELSE
        UPDATE college_stories SET downvote_count = GREATEST(downvote_count - 1, 0) WHERE id = p_story_id;
      END IF;
      v_result := jsonb_build_object('vote', 0);
    ELSE
      -- Different vote = switch vote
      UPDATE helpful_votes SET vote_type = p_vote_type WHERE story_id = p_story_id AND user_id = p_user_id;
      IF p_vote_type = 1 THEN
        UPDATE college_stories SET upvote_count = upvote_count + 1, downvote_count = GREATEST(downvote_count - 1, 0) WHERE id = p_story_id;
      ELSE
        UPDATE college_stories SET upvote_count = GREATEST(upvote_count - 1, 0), downvote_count = downvote_count + 1 WHERE id = p_story_id;
      END IF;
      v_result := jsonb_build_object('vote', p_vote_type);
    END IF;
  ELSE
    -- New vote
    INSERT INTO helpful_votes (user_id, story_id, vote_type) VALUES (p_user_id, p_story_id, p_vote_type);
    IF p_vote_type = 1 THEN
      UPDATE college_stories SET upvote_count = upvote_count + 1 WHERE id = p_story_id;
    ELSE
      UPDATE college_stories SET downvote_count = downvote_count + 1 WHERE id = p_story_id;
    END IF;
    v_result := jsonb_build_object('vote', p_vote_type);
  END IF;

  -- Get updated counts
  SELECT jsonb_build_object(
    'vote', COALESCE((v_result->>'vote')::int, 0),
    'upvotes', upvote_count,
    'downvotes', downvote_count
  ) INTO v_result FROM college_stories WHERE id = p_story_id;

  RETURN v_result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
