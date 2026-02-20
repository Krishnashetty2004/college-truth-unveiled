-- Add is_seeded flag to differentiate marketing content from real users
-- Seeded content (upvotes < 1000) will be deprioritized after launch

-- 1. Add is_seeded column
ALTER TABLE public.college_stories
ADD COLUMN IF NOT EXISTS is_seeded BOOLEAN DEFAULT false;

-- 2. Mark all existing stories as seeded (pre-launch content)
UPDATE public.college_stories
SET is_seeded = true
WHERE is_seeded IS NULL OR is_seeded = false;

-- 3. New stories will default to is_seeded = false (real users)
ALTER TABLE public.college_stories
ALTER COLUMN is_seeded SET DEFAULT false;

-- 4. Create index for efficient sorting (real users first)
CREATE INDEX IF NOT EXISTS idx_stories_seeded_engagement
ON public.college_stories(is_seeded ASC, upvote_count DESC, comment_count DESC, created_at DESC);

-- 5. Also add to reviews table for consistency
ALTER TABLE public.reviews
ADD COLUMN IF NOT EXISTS is_seeded BOOLEAN DEFAULT false;

UPDATE public.reviews
SET is_seeded = true
WHERE is_seeded IS NULL OR is_seeded = false;

ALTER TABLE public.reviews
ALTER COLUMN is_seeded SET DEFAULT false;

CREATE INDEX IF NOT EXISTS idx_reviews_seeded
ON public.reviews(is_seeded ASC, created_at DESC);

-- Summary:
-- - All existing content marked as is_seeded = true
-- - New user content will have is_seeded = false
-- - Sorting: real users (is_seeded=false) first, then seeded content by engagement
