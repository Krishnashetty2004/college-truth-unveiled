-- Ensure all jobs are active
UPDATE public.opportunities
SET is_active = true
WHERE is_active IS NULL OR is_active = false;

-- Set default to true for future inserts
ALTER TABLE public.opportunities
ALTER COLUMN is_active SET DEFAULT true;
