
-- Full-text search indexes
ALTER TABLE public.colleges ADD COLUMN IF NOT EXISTS fts tsvector 
  GENERATED ALWAYS AS (
    setweight(to_tsvector('english', coalesce(name, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(short_name, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(city, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(state, '')), 'B')
  ) STORED;

CREATE INDEX IF NOT EXISTS idx_colleges_fts ON public.colleges USING gin(fts);

ALTER TABLE public.college_stories ADD COLUMN IF NOT EXISTS fts tsvector
  GENERATED ALWAYS AS (
    setweight(to_tsvector('english', coalesce(title, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(content, '')), 'B')
  ) STORED;

CREATE INDEX IF NOT EXISTS idx_stories_fts ON public.college_stories USING gin(fts);

ALTER TABLE public.professors ADD COLUMN IF NOT EXISTS fts tsvector
  GENERATED ALWAYS AS (
    setweight(to_tsvector('english', coalesce(name, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(department, '')), 'B')
  ) STORED;

CREATE INDEX IF NOT EXISTS idx_professors_fts ON public.professors USING gin(fts);

-- Universal search function
CREATE OR REPLACE FUNCTION public.search_all(search_query text, result_limit integer DEFAULT 10)
RETURNS json
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
DECLARE
  q tsquery;
  result json;
BEGIN
  q := plainto_tsquery('english', search_query);
  
  SELECT json_build_object(
    'colleges', (
      SELECT coalesce(json_agg(row_to_json(c)), '[]'::json)
      FROM (
        SELECT id, name, short_name, city, state, type, tier, ai_overall_score,
               ts_rank(fts, q) as rank
        FROM colleges
        WHERE fts @@ q AND is_active = true
        ORDER BY ts_rank(fts, q) DESC
        LIMIT result_limit
      ) c
    ),
    'stories', (
      SELECT coalesce(json_agg(row_to_json(s)), '[]'::json)
      FROM (
        SELECT id, title, category, upvote_count, comment_count, created_at,
               ts_rank(fts, q) as rank
        FROM college_stories
        WHERE fts @@ q AND status = 'published'
        ORDER BY ts_rank(fts, q) DESC
        LIMIT result_limit
      ) s
    ),
    'professors', (
      SELECT coalesce(json_agg(row_to_json(p)), '[]'::json)
      FROM (
        SELECT id, name, department, college_id, total_reviews, ai_overall_score,
               ts_rank(fts, q) as rank
        FROM professors
        WHERE fts @@ q
        ORDER BY ts_rank(fts, q) DESC
        LIMIT result_limit
      ) p
    )
  ) INTO result;
  
  RETURN result;
END;
$function$;
