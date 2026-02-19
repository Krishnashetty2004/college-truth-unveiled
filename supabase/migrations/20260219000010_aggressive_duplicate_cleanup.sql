-- Aggressive duplicate cleanup for ALL colleges
-- This will remove ALL duplicates, keeping only the first entry (by created_at, then by id)

-- Step 1: Create a temp table with the IDs we want to KEEP (one per short_name)
CREATE TEMP TABLE colleges_to_keep AS
SELECT DISTINCT ON (short_name) id
FROM colleges
ORDER BY short_name, created_at ASC, id ASC;

-- Step 2: Delete all colleges NOT in the keep list
DELETE FROM colleges
WHERE id NOT IN (SELECT id FROM colleges_to_keep);

-- Step 3: Also handle duplicates by name (in case short_name is different but name is same)
CREATE TEMP TABLE colleges_to_keep_by_name AS
SELECT DISTINCT ON (name) id
FROM colleges
ORDER BY name, created_at ASC, id ASC;

DELETE FROM colleges
WHERE id NOT IN (SELECT id FROM colleges_to_keep_by_name);

-- Step 4: Verify - this should return empty (no duplicates)
DO $$
DECLARE
    dup_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO dup_count
    FROM (
        SELECT short_name, COUNT(*) as cnt
        FROM colleges
        GROUP BY short_name
        HAVING COUNT(*) > 1
    ) dups;

    IF dup_count > 0 THEN
        RAISE NOTICE 'WARNING: % duplicate short_names still exist', dup_count;
    ELSE
        RAISE NOTICE 'SUCCESS: No duplicate colleges found';
    END IF;
END $$;

-- Show final count
SELECT
    'Total colleges: ' || COUNT(*)::text as status,
    'Cities: ' || COUNT(DISTINCT city)::text as cities,
    'States: ' || COUNT(DISTINCT state)::text as states
FROM colleges;
