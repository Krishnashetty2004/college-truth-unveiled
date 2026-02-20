-- Fix seeded upvotes to be under 1000
-- Real user votes will add on top of these base numbers

-- Update all seeded stories to have realistic upvote counts (100-999)
UPDATE public.college_stories
SET upvote_count = floor(random() * 900 + 100)::int,  -- Random between 100-999
    downvote_count = floor(random() * 50 + 5)::int,   -- Random between 5-54
    comment_count = floor(random() * 30 + 1)::int     -- Random between 1-30
WHERE is_seeded = true;

-- Also fix seeded reviews
UPDATE public.reviews
SET helpful_count = floor(random() * 100 + 10)::int  -- Random between 10-109
WHERE is_seeded = true;

-- Summary:
-- - Seeded stories: upvotes 100-999, downvotes 5-54, comments 1-30
-- - Seeded reviews: helpful 10-109
-- - Real user votes will add on top of these base numbers
