-- Add thumbnail_url column to college_stories for displaying story thumbnails in feed
ALTER TABLE public.college_stories ADD COLUMN IF NOT EXISTS thumbnail_url text;
