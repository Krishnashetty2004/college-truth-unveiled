-- Remove duplicate college entries
-- Keep the first entry (oldest created_at) for each short_name, delete the rest

DELETE FROM colleges a
USING colleges b
WHERE a.short_name = b.short_name
  AND a.created_at > b.created_at;

-- If created_at is same, use id comparison as tiebreaker
DELETE FROM colleges a
USING colleges b
WHERE a.short_name = b.short_name
  AND a.created_at = b.created_at
  AND a.id::text > b.id::text;

-- Verify no duplicates remain
SELECT short_name, COUNT(*) as count
FROM colleges
GROUP BY short_name
HAVING COUNT(*) > 1;
