
-- Unique constraint to prevent double voting
ALTER TABLE helpful_votes 
ADD CONSTRAINT helpful_votes_user_story_unique 
UNIQUE (user_id, story_id);

-- Atomic vote toggle function
CREATE OR REPLACE FUNCTION toggle_story_vote(p_story_id uuid, p_user_id uuid)
RETURNS json AS $$
DECLARE
  existing_vote_id uuid;
  new_count integer;
BEGIN
  SELECT id INTO existing_vote_id 
  FROM helpful_votes 
  WHERE story_id = p_story_id AND user_id = p_user_id;
  
  IF existing_vote_id IS NOT NULL THEN
    DELETE FROM helpful_votes WHERE id = existing_vote_id;
    UPDATE college_stories SET upvote_count = GREATEST(upvote_count - 1, 0) 
    WHERE id = p_story_id RETURNING upvote_count INTO new_count;
    RETURN json_build_object('voted', false, 'count', new_count);
  ELSE
    INSERT INTO helpful_votes (user_id, story_id) VALUES (p_user_id, p_story_id);
    UPDATE college_stories SET upvote_count = upvote_count + 1 
    WHERE id = p_story_id RETURNING upvote_count INTO new_count;
    RETURN json_build_object('voted', true, 'count', new_count);
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;
