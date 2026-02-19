-- Brutal, honest stories for Tier 2/3 colleges
-- Categories: campus_life, placement_experience, hostel_life, ragging, fest_culture, faculty_stories, admission_journey, funny, horror, inspirational, confession, other

-- =============================================
-- LPU - LOVELY PROFESSIONAL UNIVERSITY
-- =============================================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'LPU is basically a small city with its own ecosystem and PROBLEMS',
  'bhai let me tell you about LPU. 50,000 students. FIFTY THOUSAND. you are not a student, you are a number. your ID is your identity. the "lovely" in LPU is the biggest irony because there is NOTHING lovely about fighting 6000 students for placement. HR sees your resume: "LPU? next." they dont even read further. and the fees? 4-5 lakh per year for what? so i can sit in a classroom with 200 other hopeless souls while the professor reads from PPT that was made in 2015? the only thing LPU is good at is marketing. their ads show foreign students and labs that 99% of students never enter. we have our own "Phagwara market" which is basically survival of the fittest - dodging autowallas who think you are made of money because "LPU wala hai, paisa hoga." admission counselor showed me one campus, i got allotted to a different one 3 km away. classic LPU.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  892
FROM colleges c WHERE c.short_name = 'LPU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'The REAL reason South Indians come to LPU - Instagram mountains, not education',
  'okay this is brutal but someone has to say it. 70% of south indian students in LPU are here for ONE reason - proximity to shimla, manali, dharamshala. bro i have batchmates who have been to kasol more times than they have been to class. their instagram bio says "exploring the unexplored" but they havent explored the library once. every weekend group of malyalis, telugus heading to mountains. "bro 2 din ka trip, attendance adjust kar dena" is the most common sentence. and the irony - they come from states with 90% literacy to a state where our guard says "padhai karlo beta, job milna mushkil hai." im not saying all south indians, but BRO the amount of reels i see with "punjabi vibes in himachal" captions from chennai kids is HILARIOUS. best part? they fail in exams and tell parents "north indian professors are biased." no bhai, you were biased towards MOUNTAINS.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  1247
FROM colleges c WHERE c.short_name = 'LPU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'LPU placement reality: The 8 LPA scam they dont tell you about',
  'LPU marketing: "highest package 3 crore!" reality: thats 1 student out of 50,000. average? 3.5 LPA if youre lucky. the "8 LPA median salary" they advertise includes international placements in USD converted to INR. most of us are fighting for 18k/month Infosys roles that even tier 3 colleges get. the TPP (Training Placement Program) thing is genius level scam - pay extra 80k for "special placement training" and you get to sit in placements 1 day before others. wow. 1 day advantage for 80k. and the companies that come? mostly ed-tech (RIP), BPOs, and mass recruiters who will hire anyone with a pulse. that one TCS ninja who got placed becomes the poster boy for next 5 years of marketing. rest of us adjusting with whatever we get. "scope hai LPU mein" is the biggest lie after "demonetization will end corruption."',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  2341
FROM colleges c WHERE c.short_name = 'LPU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Confession: I spent more on Phagwara "chai" than on textbooks',
  'anonymous confession because my parents will kill me. in 4 years of LPU i have spent approximately 2.5 lakh on things outside campus. "things" includes - chai tapri sessions that became chai + cigarette + other stuff, trips to chandigarh every 2 weeks for "project work" (read: sector 17 timepass), the famous phagwara "nightlife" which is basically sitting in cars near GT road because theres literally nothing else to do, and lets not forget the "special" trips to that area near railway crossing which every LPU student knows about but nobody talks about. my CGPA is 5.2. my instagram followers are 5.2k. priorities were clear from day 1. when placement cell asks "any skills?" i want to say "i know every dhaba owner in 20km radius by name." but i write "team player" instead. LPU taught me life skills they dont mention in brochure.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  1893
FROM colleges c WHERE c.short_name = 'LPU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'LPU hostel: 75% attendance policy means we became expert liars',
  'the 75% attendance policy at LPU has created an entire generation of creative liars. "mummy i was in library" - i was in chandigarh. "sir stomach upset" - hangover. "medical emergency" - didnt sleep because valorant. the biometric system is so strict that we have WhatsApp groups just for attendance proxy jugaad. "bhai 8:50 ki class mein proxy maar de, mein 10 baje aaunga" is routine. faculty knows, we know they know, they know we know they know. still we pretend. hostel life is basically surviving on maggi because mess food is a biological weapon. AC hostels cost 1.5 lakh extra per year for what is essentially a window AC that works 40% of the time. and the CURFEW - 10 PM for girls, guards who think they are CBI officers. one friend got caught sneaking out and her parents got a call before she could even reach GT road. big brother is watching, always.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  1567
FROM colleges c WHERE c.short_name = 'LPU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'The Ashok Mittal cult and why we are all just revenue streams',
  'bro the way LPU treats Ashok Mittal (chancellor) is INSANE. his birthday is basically a festival. his photos are EVERYWHERE. events start with his video message. we joke that LPU stands for "Lovely Property of mittal Uncle." but jokes aside, this man has built an empire. and we are the product. every semester there is a new fee - lab fee, development fee, maintenance fee, exam fee, "innovation" fee. you fail a subject? pay again. want to improve grade? pay. want transcript? pay and wait 3 months. the business model is genius - get students from small towns who have no other option, charge them premium, give them average education, blame them when they dont get placed. rinse and repeat 50,000 times. still we come because "campus is big" and "foreign students hai" and "scope hai." we are all clowns in mittals circus.',
  'other',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  2156
FROM colleges c WHERE c.short_name = 'LPU' LIMIT 1;

-- =============================================
-- CHANDIGARH UNIVERSITY
-- =============================================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'CU is LPU with better marketing and stricter parents (admin)',
  'joined CU thinking it would be different from LPU. its not. same mass recruitment model, same 40,000 students, same broken dreams. but CU has RULES. oh god the rules. girls cant go out on weekdays. boys have separate hostels that might as well be in different planets. the "mohali" in address sounds fancy until you realize its basically village area with one mall 10 km away. the hard water here is so hard that my hair has given up on life. 6 months and i look 10 years older. mess food is russian roulette - sometimes edible, sometimes youre running to medical. and the traffic to enter campus in morning? 15-20 minutes just at gate because 40,000 students, 1 main entrance. galaxy brain planning. but hey, we have nice buildings for photos.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  1345
FROM colleges c WHERE c.short_name = 'CU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'The MMS scandal aftermath: How CU handled it like champions (of PR)',
  'everyone knows what happened. the incident that broke the internet. and how did CU respond? deleted every social media comment, threatened legal action against "rumor spreaders," and sent emails to parents saying "false allegations." PR team worked overtime. within a month, new promotional videos dropped featuring happy students. placements season came and everyone forgot. this is how institutions work in India - crisis? PR. scandal? PR. students suffering? believe it or not, also PR. im not here to discuss what happened, but how it was HANDLED is a masterclass in reputation management. the guard who was supposed to watch? transferred. the students who spoke up? "counseled." life moved on. the hard water still destroys our hair and the mess food still destroys our stomach. some things never change.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  3456
FROM colleges c WHERE c.short_name = 'CU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Why I recommend CU: Location. Only location. Thats it.',
  'here is my unbiased review after 3 years. pros: chandigarh is 20 mins away and chandigarh is AMAZING. sector 17, elante mall, sukhna lake - life exists outside campus. thats it. thats the pro. cons: everything else. the TPP program scam (pay extra for "guaranteed" placement - guarantee void if company decides to hire 5 people instead of 500). the faculty who treat attendance like life and death but cant explain basic concepts. the hostels where 4 people share room meant for 2. the wifi that works when it wants to. the "international collaborations" that mean nothing for your degree. the alumni network that is basically a WhatsApp group with job forwards. the "research culture" which is profs publishing papers with student names for free labor. i could go on. but sector 17 chai at 10 PM makes it bearable.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  1678
FROM colleges c WHERE c.short_name = 'CU' LIMIT 1;

-- =============================================
-- CHITKARA UNIVERSITY
-- =============================================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Chitkara: The only university where your parents get more updates than you',
  'chitkara has an app. this app sends notification to PARENTS for every class you miss. EVERY. SINGLE. CLASS. miss 8 AM lecture because you slept late? papa ko pata chal gaya. bunk for chai? mummy calling in 10 minutes. this is not university, this is an extension of school. we pay 5+ lakh per year to be treated like children. the irony is they market themselves as "preparing students for industry" - bro which industry has your parents getting attendance reports? the hostel has CCTV everywhere except bathrooms (i hope). security guards have more power than faculty. caught with opposite gender after 6 PM? character certificate gone. this is not education, this is surveillance with extra steps.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  987
FROM colleges c WHERE c.short_name = 'Chitkara' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Chitkara placement: Good if you want to go abroad, trash if you want India',
  'here is the chitkara secret nobody tells you. the "95% placement" includes everyone who went for MS abroad. yes. you pay for PTE/GRE coaching here, they help with applications, you leave india, they count it as "placement." genius. for actual india placements? its the same infosys/wipro/cognizant that every college gets. package? 3.5-4.5 LPA. the "7 LPA average" includes those earning in USD converted to INR. standard private university math. but credit where due - if you want to go abroad, chitkara actually helps. SOP review, university shortlisting, visa guidance. they have cracked the "export students" model. just dont expect miracles if you want to stay in india. you will be competing with IIT/NIT guys for same jobs with "Chitkara" on your resume. guess who wins.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  756
FROM colleges c WHERE c.short_name = 'Chitkara' LIMIT 1;

-- =============================================
-- GTU - GUJARAT TECHNOLOGICAL UNIVERSITY
-- =============================================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'GTU: Where 5 lakh students share one website that crashes every exam',
  'GTU is not a university. GTU is an examination body that also pretends to care about education. 500+ affiliated colleges, 5 lakh students, and ONE portal for everything. result day? website crashes 47 times. enrollment? website crashes. downloading hall ticket? believe it or not, website crashes. the syllabus hasnt been updated since 2018 for most branches. we are learning technologies that companies stopped using 5 years ago. but GTU doesnt care because GTU is busy conducting exams. EXAM IS LIFE. internal exam, external exam, practical exam, viva exam. you graduate not with knowledge but with PTSD of exam halls. the colleges under GTU range from "actually decent" to "literally a building with chairs." same degree, wildly different experiences. quality control? whats that?',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  2345
FROM colleges c WHERE c.short_name = 'GTU' LIMIT 1;

-- =============================================
-- PARUL UNIVERSITY
-- =============================================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Parul University: Vadodara fever dream',
  'parul is HUGE. like unnecessarily huge. different campuses, different colleges, different planets. you can walk 20 minutes and still be in parul. the good thing? fees are reasonable compared to LPU/CU. the bad thing? you get what you pay for. faculty is hit or miss - some are actually good, most are reading from 10 year old notes. hostel is far from main campus, so you need vehicle. vadodara itself is chill city, not overly expensive, good food scene. placement is average - same IT service companies, same 3-4 LPA packages. but atleast parul doesnt pretend to be IIT. they know what they are, they price accordingly. respect for honesty. still, if you have option for GTU engineering college, take that instead. parul is plan B university and thats okay.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  567
FROM colleges c WHERE c.short_name = 'Parul' LIMIT 1;

-- =============================================
-- MARWADI UNIVERSITY (Rajkot)
-- =============================================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Marwadi University: Gujarati business family values applied to education',
  'marwadi university is what happens when gujarati business mindset meets education. everything is about "value." minimum investment, maximum marketing. the campus looks great in photos - clean, modern buildings. reality? AC works in admin block, not in classrooms. labs have equipment from 2010. library has books but no one reads them. the saving grace is rajkot itself - cheap city, good food, friendly people. hostel life is decent, not too strict. faculty is mix of young enthusiastic teachers and old uncles reading newspapers in staff room. placement? IT companies come for 3-3.5 LPA roles. mechanical/civil students struggle. entrepreneurship cell is active because gujaratis gonna gujarati. if you are from saurashtra region and cant afford ahmedabad colleges, marwadi is fine. just keep expectations real.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  432
FROM colleges c WHERE c.short_name = 'Marwadi' LIMIT 1;

-- =============================================
-- MANIPAL UNIVERSITY JAIPUR (MUJ)
-- =============================================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'MUJ: Paying Manipal fees for Jaipur education',
  'let me be real. MUJ exists because Manipal wanted to expand without expanding Manipal. so they created a "manipal experience" in jaipur at "manipal prices" but with "local management." the brand name attracts students, the reality disappoints them. comparing MUJ to MAHE Manipal is like comparing Fogg to Axe - same concept, different execution. campus is nice, new buildings, good infrastructure. faculty? mostly hired locally, not the legendary Manipal professors. placements are decent but nowhere near MAHE level. the "manipal alumni network" technically includes you but practically? MUJ is the step-child nobody talks about at family gatherings. fees are 12+ lakh for 4 years. for that money in jaipur, you expected more. you got a brand name and disappointment.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  1234
FROM colleges c WHERE c.short_name = 'MUJ' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'MUJ hostel life: South Delhi kids discovering real India',
  'MUJ hostels are where south delhi kids learn that life exists outside GK2 and Saket. watching them struggle with "no AC rooms" and "shared bathrooms" is entertainment. "bro pani mein kya hai yaar, itna hard" - welcome to rajasthan bro. the hostel food is actually decent compared to other colleges but these kids compare it to their home food and cry. campus is in dehmi kalan - basically village 30 mins from jaipur city. nearest decent mall is 40 mins. so you have these ferrari-dreaming kids stuck in fortuner-budget situation, surrounded by rajasthani dhaba food and camel sightings. the culture shock is real. but honestly? it builds character. by 4th year they are adjusted, eating dal baati, speaking hindi with rajasthani accent. transformation complete.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  1567
FROM colleges c WHERE c.short_name = 'MUJ' LIMIT 1;

-- =============================================
-- THAPAR INSTITUTE
-- =============================================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Thapar: The only good college in Punjab and we never let anyone forget it',
  'thapar students have one personality trait: telling everyone they go to thapar. "bro IIT nahi mila par thapar toh hai." we are the IIT rejects who made it work. the inferiority-superiority complex is REAL. campus is nice, patiala is boring but peaceful, faculty is actually good. placements? better than most private universities, worse than NITs. the "deemed university" tag hurts sometimes but we cope by looking down on LPU and CU students. hostel life is chill, not too many rules. academics are tough - this aint your mass promotion university, you actually have to study. food scene outside campus is great - patiala has amazing non-veg. overall? if you couldnt crack JEE for good NIT, thapar is solid backup. just dont expect silicon valley at graduation.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  1789
FROM colleges c WHERE c.short_name = 'Thapar' LIMIT 1;

-- =============================================
-- NIRMA UNIVERSITY
-- =============================================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Nirma: Gujaratis flexing on other Gujaratis since 2003',
  'nirma university is where gujarati parents send kids when IIT didnt happen but theyre too proud for "normal" college. its the "we have iim-a at home" of engineering. campus is massive, infrastructure is genuinely good, faculty is mix of excellent and meh. the student population is 90% gujju so if you are outsider, prepare for "su che bhai" becoming your greeting. placements are solid - good companies come, packages range from 6-15 LPA for decent students. the location near ahmedabad is perfect - city is close, food is great, costs are reasonable. only problem? nirma students think they are IIT. the confidence is unmatched. but hey, fake it till you make it right? overall one of the better private options in western india.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  1456
FROM colleges c WHERE c.short_name = 'Nirma' LIMIT 1;

-- =============================================
-- MDU ROHTAK
-- =============================================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'MDU: Government college struggles with haryanvi twist',
  'MDU rohtak is peak haryana experience. the university where "padhai" and "pehelwani" have equal weightage. campus is old, buildings are older, mindset is oldest. infrastructure belongs to different era. computer labs have pentium 4 machines in 2024. library has books from when our parents were students. but you know what? its government, fees are basically nothing, and degree is recognized everywhere. the haryanvi culture is intense - everyone speaks in that accent within 1 semester. food in mess? roti sabzi dal repeat. nutrition science at its peak. placement cell exists but mostly for formality. you come to MDU for the degree, not the education. and thats okay. not everyone needs silicon valley. some just need sarkari naukri eligibility.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  876
FROM colleges c WHERE c.short_name = 'MDU' LIMIT 1;

-- =============================================
-- RGPV BHOPAL
-- =============================================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'RGPV: 4 lakh students, 1 broken website, infinite frustration',
  'RGPV makes GTU look organized. 4 lakh students across MP, one university controlling everything, and administration that moves at speed of government babu on monday morning. result dates are suggestions, not commitments. "result aane wala hai" has been said for 3 months straight. the affiliated colleges range from NIT-level to "what is engineering?" level. same degree certificate. beautiful system. if you are in good college under RGPV (like UIT or MANIT), life is fine. if you are in some random college in tier 3 MP city, god help you. the syllabus mentions technologies that companies have forgotten. practical labs have equipment from industrial revolution. but RGPV students are survivors. they learn on youtube, crack placements somehow, and complain about RGPV to their graves. its tradition.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  1234
FROM colleges c WHERE c.short_name = 'RGPV' LIMIT 1;

-- =============================================
-- ADDITIONAL FUNNY STORIES
-- =============================================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'How LPU students explain their college to relatives',
  'relative: "beta kaun si university hai?" me: "LPU, punjab mein hai" relative: "achha lovely. lovely toh TV pe aata hai ad" me: (dying inside) "haan wohi" relative: "bohot achha hai sunne mein. foreign students bhi aate hain na?" me: "haan" relative: "placement bhi achha hai?" me: (thinking about 3.2 LPA infosys offer) "best hai" relative: "kitna package mila?" me: "confidential hai" (actually embarrassing hai) relative: "beta tera future bright hai" me: (future is just a TCS NQT away) "thank you" this conversation happens 47 times every vacation. we have become professional liars. LPU training working perfectly.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  3421
FROM colleges c WHERE c.short_name = 'LPU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'LPU One View vs Reality - A tragedy in screenshots',
  'LPU shows ONE VIEW app to parents: "see we track everything, your child is studying" what parents see: child attended 8 AM class, sitting in library, good grades reality: friend marked proxy, library pic is from orientation, grades are scaled so everyone passes. the app is basically advanced lying with extra steps. "one view" should be renamed "one lie." best part is when parents call because app showed you missed class but you were actually IN class because biometric failed. then you have to convince them that app is lying while also maintaining that app never lies. schrodinger''s attendance. we live in a simulation and LPU IT team designed it. buggy but functional enough to fool parents. thats the LPU education - not engineering, but engineering the truth.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  2567
FROM colleges c WHERE c.short_name = 'LPU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Things you can buy with LPU 4-year fees vs what you actually get',
  'LPU fees for 4 years: approximately 15-18 lakhs. what you could buy: a decent sedan car, 1BHK in tier 2 city downpayment, startup funding, world tour twice, bitcoin in 2020 (would be 5 crore now), actual IIT coaching + hostel for 4 years. what you actually get: degree that HR ignores, hostel room with 3 other depressed humans, mess food that builds immunity, exposure to phagwara''s finest culture, 75% attendance PTSD, friends who will relate to your trauma forever, instagram followers from south india, proxy expertise that actually helps in corporate life, bargaining skills (autowallas are tough), survival instincts. honestly when you list it like this, LPU is actually value for money. its not education, its life training.',
  'funny',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  4123
FROM colleges c WHERE c.short_name = 'LPU' LIMIT 1;

-- =============================================
-- CONFESSION STORIES
-- =============================================

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'I applied to 47 companies from LPU, got rejected from 46, here is what I learned',
  'final year, placement season. applied to every company that came. TCS - rejected after interview. Infosys - rejected after assessment. Wipro - rejected (still dont know why). Cognizant - rejected. Accenture - rejected. smaller companies - rejected. mass recruiters - rejected. i was applying at 2 AM, refreshing portal at 8 AM, crying at 11 PM. CGPA was 7.2, not bad. communication was decent. still rejected. then i analyzed - same resume, same "team player" "quick learner" bs everyone writes. changed approach. built actual project (took 2 months). put github link. company 47 - small startup, 4.5 LPA. they actually looked at project. got selected. lesson: LPU placement cell cant help you. you help yourself. that project mattered more than 4 years of attendance.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  2891
FROM colleges c WHERE c.short_name = 'LPU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'I lied to my parents about LPU for 4 years and I feel terrible',
  'when i joined LPU i told my parents everything was great. placements are amazing, professors are best, hostel is comfortable. all lies. i didnt want them to feel bad for spending so much money. every semester when i went home, i had stories prepared. "this company came, that package was offered, my friend got 12 LPA." half truths and full lies. they were so proud. showed my LPU ID to relatives like trophy. meanwhile i was struggling with backlog, horrible placement prospects, and depression that nobody knew about. 4th year reality hit - 3.5 LPA offer after begging. had to tell parents the truth. mummy cried, not because of package, but because i had been hiding pain for 4 years. if you are reading this and doing same thing - talk to your parents. they understand more than you think. the lie hurts more than the truth.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  5678
FROM colleges c WHERE c.short_name = 'LPU' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Chandigarh University literally saved my life and I mean it',
  'trigger warning: mental health. i came to CU from small town after JEE failure. first year was hell. no friends, cant speak english properly, everyone seemed smarter, cooler, richer. i stopped eating, stopped attending class, stopped caring. hostel room felt like prison. one day decided to end it. was researching methods when roommate came back early. he saw my phone. didnt judge, didnt lecture. just sat with me whole night. next day he took me to counselling cell (yes CU has one, not many know). that counselor aunty literally saved me. 6 months of sessions, medication, slow recovery. now in final year, have friends, average CGPA but alive. CU has problems - many. but that one counselor, that one roommate, that one night - i owe them everything. if you are struggling, please talk to someone. hostels have more broken souls than we admit.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  8901
FROM colleges c WHERE c.short_name = 'CU' LIMIT 1;

-- Done! Added brutal/honest stories for tier 2/3 colleges
