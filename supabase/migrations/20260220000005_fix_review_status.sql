-- Fix review status: publish directly, no "under_review"

-- 1. Change default status to "published"
ALTER TABLE public.reviews
ALTER COLUMN status SET DEFAULT 'published';

-- 2. Update any existing "under_review" reviews to "published"
UPDATE public.reviews
SET status = 'published'
WHERE status = 'under_review';

-- Summary:
-- - Reviews now publish immediately (status = "published" by default)
-- - Existing "under_review" reviews are now published
-- - AI moderation can still flag as "held" or "rejected" if needed
