-- Migration: Add vibe_tag and quick_tags columns for simplified reviews
-- Run date: 2026-02-18

-- Add vibe_tag column for the meme-style selector
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS vibe_tag text;

-- Add quick_tags array column for hashtag chips
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS quick_tags text[];

-- Add constraint for valid vibe tags
ALTER TABLE reviews ADD CONSTRAINT valid_vibe_tag CHECK (
  vibe_tag IS NULL OR vibe_tag IN (
    'actually_good', 'mid_af', 'avoid', 'overrated',
    'paisa_barbaad', 'party_school', 'nerd_paradise',
    'placement_king', 'run_away', 'boring', 'circus', 'hidden_gem'
  )
);
