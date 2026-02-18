-- Migration: Add fun rating columns (Girls, Boys) and update vibe_tag constraint
-- Run date: 2026-02-18

-- Add fun rating columns
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS rating_girls smallint;
ALTER TABLE reviews ADD COLUMN IF NOT EXISTS rating_boys smallint;

-- Drop old constraint and add updated one with new vibe options
ALTER TABLE reviews DROP CONSTRAINT IF EXISTS valid_vibe_tag;
ALTER TABLE reviews ADD CONSTRAINT valid_vibe_tag CHECK (
  vibe_tag IS NULL OR vibe_tag IN (
    'actually_good', 'mid_af', 'avoid', 'overrated',
    'paisa_barbaad', 'party_school', 'nerd_paradise',
    'placement_king', 'run_away', 'boring', 'circus', 'hidden_gem',
    'hot_girls', 'hot_boys', 'dating_scene', 'rich_kids'
  )
);
