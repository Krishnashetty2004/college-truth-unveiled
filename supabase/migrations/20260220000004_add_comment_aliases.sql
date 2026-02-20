-- Add anonymous_alias column to story_comments for seeded comments
ALTER TABLE public.story_comments
ADD COLUMN IF NOT EXISTS anonymous_alias TEXT;

-- Generate random aliases for seeded comments
DO $$
DECLARE
    comment_rec RECORD;
    adjectives TEXT[] := ARRAY[
        'Shadow', 'Cyber', 'Silent', 'Cosmic', 'Neon', 'Midnight', 'Thunder', 'Crystal',
        'Blazing', 'Frozen', 'Golden', 'Silver', 'Dark', 'Bright', 'Swift', 'Brave',
        'Noble', 'Fierce', 'Mystic', 'Stellar', 'Lunar', 'Solar', 'Storm', 'Iron',
        'Steel', 'Amber', 'Crimson', 'Azure', 'Jade', 'Onyx', 'Phantom', 'Rogue',
        'Savage', 'Wild', 'Rapid', 'Clever', 'Witty', 'Chill', 'Chaos', 'Zen'
    ];
    animals TEXT[] := ARRAY[
        'Lion', 'Wolf', 'Tiger', 'Eagle', 'Hawk', 'Falcon', 'Phoenix', 'Dragon',
        'Panther', 'Jaguar', 'Cobra', 'Viper', 'Shark', 'Bear', 'Fox', 'Raven',
        'Owl', 'Leopard', 'Lynx', 'Puma', 'Cheetah', 'Scorpion', 'Mantis', 'Spider',
        'Hornet', 'Raptor', 'Griffin', 'Hydra', 'Kraken', 'Titan', 'Ninja', 'Samurai',
        'Knight', 'Warrior', 'Hunter', 'Ranger', 'Rebel', 'Wizard', 'Sage', 'Ghost'
    ];
    random_alias TEXT;
    random_number INT;
BEGIN
    -- Update all seeded comments with random aliases
    FOR comment_rec IN
        SELECT id FROM public.story_comments WHERE is_seeded = true
    LOOP
        random_number := floor(random() * 9000 + 1000)::int; -- 4 digit number
        random_alias := adjectives[1 + floor(random() * array_length(adjectives, 1))::int]
                        || ' '
                        || animals[1 + floor(random() * array_length(animals, 1))::int]
                        || ' #'
                        || random_number::text;

        UPDATE public.story_comments
        SET anonymous_alias = random_alias
        WHERE id = comment_rec.id;
    END LOOP;
END $$;

-- Summary:
-- - Added anonymous_alias column to story_comments
-- - Generated aliases like "Shadow Lion #8917", "Cyber Wolf #4523" for seeded comments
-- - Real user comments will use the existing get_anonymous_alias function
