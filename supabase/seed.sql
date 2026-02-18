-- Seed Stories (using college short_names to lookup IDs)
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'The WiFi password is mallareddy123 and has been since 2015',
  'bhai i am not joking. the hostel wifi password is literally mallareddy123 and nobody has changed it in 9 years. i asked the warden why — he said chairman sir suggested it. the CHAIRMAN personally chose the wifi password. it connects at 0.3 mbps. i use my hotspot for everything.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  347
FROM colleges c WHERE c.short_name = 'MRU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'IIIT-H student built AI that solves JNTUH papers, entire faculty panicked',
  'a 3rd year student at iiit-h trained an LLM specifically on 15 years of JNTUH question papers. it could predict exam questions with 73% accuracy. he shared it in the batch group. within 48 hours it reached 40,000 students across telangana.',
  'inspirational',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  567
FROM colleges c WHERE c.short_name = 'IIIT-H' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  '3am: entire BITS hostel sings Pehla Nasha, security bhai joins in',
  'it started with one room in the C wing. 3am. someone started playing pehla nasha on guitar. by the second verse, the next room had opened their door. by the chorus, the corridor was singing. by the end of the song, all 6 floors of the hostel were on their balconies.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  623
FROM colleges c WHERE c.short_name = 'BITS Hyd' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'ISB professor fell asleep during his OWN lecture. 40 lakh course.',
  'dr. subramaniam. corporate strategy. module 4. he was mid-sentence explaining porters five forces. his head dropped. the clicker fell from his hand. the room — 60 MBA students who collectively paid 240 crores in fees — sat in absolute silence for 3 minutes.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  534
FROM colleges c WHERE c.short_name = 'ISB' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'IISc student found a cobra in the lab, finished the experiment anyway',
  'spectroscopy lab. 4th floor. priya opened a cabinet under the workbench and found a cobra. medium-sized. clearly confused. she closed the cabinet, stood up, told the lab assistant there is a snake in cabinet 4, and continued running her experiment.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  589
FROM colleges c WHERE c.short_name = 'IISc' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'RVCE student rejected Goldman Sachs for startup. It worked.',
  'placement season 2019. goldman sachs was on campus. vivek got through all rounds. offer: 28 LPA. he declined. placement cell called his parents. his parents called him 11 times. he declined anyway. started a fintech startup. 2024: acquired for 8 figures.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  612
FROM colleges c WHERE c.short_name = 'RVCE' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'JNTUH regulation saga: 4 years in a discontinued regulation',
  'joined in 2018 under R16 regulation. in 2020 they said R18 is starting. in 2021 they said actually R18 is merged with R20. in 2022 they said R16 is being phased out. we graduated in 2022 still under R16 which was officially discontinued.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  445
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Results portal crashed for 3 days, students did puja at the server room',
  'JNTUH results were supposed to release at 11am. portal crashed at 10:59am. stayed down for 3 days. on day 2, a group of students came to the campus with flowers, camphor and a pandit. they did a full puja outside the server room.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  512
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Professor threw chalk, bullseye on the CCTV camera',
  'anurag university. mam was ANGRY. student was sleeping in the back row. she grabbed the chalk and hurled it. direct hit on the CCTV camera. it tilted. the feed went blank. for approximately 4 seconds, there was complete silence. then 60 students started slow clapping.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  467
FROM colleges c WHERE c.short_name = 'Anurag' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Entire IIM-B batch ghosted a professor for a full semester',
  'prof. ramanathan taught business ethics. nobody went to class after week 3. not a single student. he continued teaching to an empty room for 11 weeks. recorded his lectures. uploaded them. marked everyones attendance manually present.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  578
FROM colleges c WHERE c.short_name = 'IIM-B' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'PES hostel room drone project: security thought it was a weapon',
  'room 412. three of us spent 3 months building a fully functional delivery drone in our hostel room. we tested it in the corridor at 2am. a security guard saw it, screamed, pressed the panic button, and the entire hostel was evacuated for 45 minutes.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  556
FROM colleges c WHERE c.short_name = 'PES' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'AIT canteen aunty is more famous than any professor here',
  'i have forgotten the name of my operating systems professor. i will NEVER forget rani aunty from the AIT canteen. she knows every students order by heart. she gives credit to broke students at month-end. she attended 3 student weddings.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  489
FROM colleges c WHERE c.short_name = 'AIT Blr' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'REVA management sends motivational texts at 6am EVERY SINGLE DAY',
  '6:00am. every morning. a text from the college management. Good morning! Today is a new opportunity to shine. Remember: YOUR FUTURE IS IN YOUR HANDS! i have received 743 of these messages. i have read 0 of them since week 2.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  445
FROM colleges c WHERE c.short_name = 'REVA' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'NID Ahmedabad: rejected 3 times, got in on 4th attempt, worth every rejection',
  'i applied to NID four times. the first three times i didnt even pass the preliminary screening. the fourth time i spent 6 months redesigning every single project in my portfolio from scratch. being at NID is like breathing different air.',
  'inspirational',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  478
FROM colleges c WHERE c.short_name = 'NID' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'VIT placement cell proudly announces 3 LPA package as achievement',
  'mass recruitment drive happened. TCS came. 3 LPA package. placement cell sent an official email celebrating record number of placements. 2000 students placed at 3 LPA. they called it a historic achievement. the email had confetti graphics.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  389
FROM colleges c WHERE c.short_name = 'VIT' LIMIT 1;
