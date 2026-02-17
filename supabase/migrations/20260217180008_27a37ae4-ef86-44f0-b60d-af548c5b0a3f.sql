
CREATE OR REPLACE FUNCTION public.update_story_comment_count()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE college_stories SET comment_count = comment_count + 1 WHERE id = NEW.story_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE college_stories SET comment_count = GREATEST(comment_count - 1, 0) WHERE id = OLD.story_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$function$;

CREATE TRIGGER trg_update_story_comment_count
AFTER INSERT OR DELETE ON public.story_comments
FOR EACH ROW
EXECUTE FUNCTION public.update_story_comment_count();
