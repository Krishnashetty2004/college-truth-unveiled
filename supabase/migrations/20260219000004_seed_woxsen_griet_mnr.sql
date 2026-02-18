-- =====================================================
-- SEED: Woxsen University, GRIET, MNR University
-- Hyderabad's Private College Scene - Unfiltered
-- =====================================================

-- =====================================================
-- ADD COLLEGES
-- =====================================================

INSERT INTO colleges (name, short_name, city, state, type, ownership, tier, website, established_year, student_population, is_active)
SELECT 'Woxsen University', 'Woxsen', 'Hyderabad', 'Telangana', 'management', 'private', 'tier_2', 'https://woxsen.edu.in', 2014, 3500, true
WHERE NOT EXISTS (SELECT 1 FROM colleges WHERE short_name = 'Woxsen');

INSERT INTO colleges (name, short_name, city, state, type, ownership, tier, website, established_year, student_population, is_active)
SELECT 'Gokaraju Rangaraju Institute of Engineering and Technology', 'GRIET', 'Hyderabad', 'Telangana', 'engineering', 'private', 'tier_2', 'https://www.griet.ac.in', 1997, 6000, true
WHERE NOT EXISTS (SELECT 1 FROM colleges WHERE short_name = 'GRIET');

INSERT INTO colleges (name, short_name, city, state, type, ownership, tier, website, established_year, student_population, is_active)
SELECT 'MNR Degree & PG College', 'MNR', 'Hyderabad', 'Telangana', 'arts', 'private', 'tier_3', 'https://www.mnruniversity.edu.in', 1988, 4000, true
WHERE NOT EXISTS (SELECT 1 FROM colleges WHERE short_name = 'MNR');

-- =====================================================
-- WOXSEN UNIVERSITY STORIES
-- =====================================================

-- Confession Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Hooked up with my groupmate during B-school trip to Goa. Now we''re co-founders.',
  'woxsen business trip to goa. 3rd year. we were supposed to study ''hospitality industry''. what we studied was each other. started as ''let''s share a cab to baga''. ended with ''let''s share a startup idea''. we pitched to investors 6 months later. they asked how we met. we said ''networking event''. technically not a lie? we raised 50 lakhs. we are still together. our investors don''t know. our parents don''t know. woxsen placement cell thinks we''re their success story. WE ARE BUT NOT FOR THE REASONS THEY THINK. every linkedin post about our ''professional journey'' is a lie by omission.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 450)::int
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

-- Dating Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Rich kid asked me out with a drone proposal in the quad. I said no. On camera.',
  'woxsen has MONEY okay. this guy from BBA - his dad owns like 3 malls or something. he liked me. i thought we were just friends. one random tuesday, a DRONE appears during lunch. playing our ''song'' (we didn''t have a song???). it drops a banner asking me out. 200 people watching. i panicked. i said ''bro i have a boyfriend''. I DID NOT HAVE A BOYFRIEND. the drone footage went viral in the batch. he transferred to another section. his dad apparently called the dean asking why ''his son was humiliated''. the dean called me. I had to explain i was single but just not interested. most awkward conversation of my life.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 500)::int
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

-- Professor Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Finance professor trades crypto during lecture. Shows us his portfolio. It''s down 80%.',
  'dr. mehta. teaches corporate finance. talks about ''risk management'' and ''diversification''. one day his laptop connected to the projector accidentally. BINANCE WAS OPEN. his portfolio was on screen for 10 seconds before he alt-tabbed. in those 10 seconds we saw: he had invested in 12 different shitcoins, he was down 4.7 lakhs, he had a stop-loss set at a level that already triggered. someone screenshotted. it''s now the batch whatsapp group icon. he still teaches risk management. nobody has the heart to tell him. we just nod when he says ''never invest emotionally''.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 550)::int
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

-- Placement Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Placement cell said 25 LPA average. Actual average is 8 LPA. They counted founder''s salary.',
  'woxsen placement stats are CREATIVE. they said 25 LPA highest. what they didn''t say: that was a guy whose DAD gave him a job at his own company. they said average is 12 LPA. what they didn''t say: they excluded anyone who took more than 6 months to get placed. they said 100% placement. what they didn''t say: they count unpaid internships. i confronted placement cell. they said ''all data is technically accurate''. TECHNICALLY. bro i came here for MBA thinking i''ll make bank. i''m making 7 LPA. woxsen made 20 lakhs off me. who''s the real MBA here.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 600)::int
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

-- Hostel Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Woxsen hostel has a swimming pool. Also has snakes near the swimming pool. Pick your adventure.',
  'the campus is BEAUTIFUL. like genuinely one of the best in india. what the brochure doesn''t show: it''s literally in the middle of nowhere. there''s a forest. forests have wildlife. wildlife includes: snakes (saw 3), scorpions (roommate found one in his shoe), peacocks (actually pretty), wild boars (actually terrifying). one night security found a cobra near the pool. they called forest department. we couldn''t use pool for a MONTH. my parents paid 4 lakhs for this ''luxury hostel experience''. the luxury is being close to nature. TOO close.',
  'hostel_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 480)::int
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

-- =====================================================
-- GRIET STORIES
-- =====================================================

-- Confession Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Started a fake dating profile as the ''GRIET anonymous crusher''. 47 people confessed to me.',
  'made an instagram page called griet.confessions. said i''m a ''mystery student'' collecting love stories. 47 people DMd me their crushes, relationship problems, and VERY personal details. i know that the CR of CSE-B is cheating on his girlfriend. i know that a professor is dating an ex-student. i know that two people in the same friend group like each other. I HAVE TOO MUCH POWER. i wanted to reveal myself and write a blog about ''campus romance''. now i realize i''d literally be murdered. i''m taking these secrets to my grave. also if you''re reading this and you DMd that page - no i didn''t screenshot anything (i did).',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 520)::int
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

-- Dating Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'We dated for 2 years in GRIET. Everyone knew except our parents. Including the watchman.',
  'griet has STRICT rules about boys and girls talking. so we developed a whole system. coded language in class (''library'' meant terrace, ''canteen'' meant parking lot). our friends would cover for us. EVEN THE WATCHMAN KNEW. bro would see us holding hands behind the workshop and just look away. one day he gave us a thumbs up. legend. we thought we were so sneaky until convocation. my mom met his mom. turns out THEY knew the whole time. moms always know. they were just waiting to see if we were ''serious''. we got engaged last month. watchman bhaiya got a wedding invite.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 490)::int
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

-- Professor Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Our CAD professor plays PUBG with students. He''s actually cracked. K/D ratio 4.2.',
  'engineering drawing was boring until we discovered our professor plays PUBG. someone saw his phone during break. we asked him. he tried to deny. we showed him we knew his username. he gave up. NOW HE PLAYS WITH US. friday nights are squad matches with sir. he''s actually insane - better than most of us. carries the team regularly. his callouts are in pure telugu. ''VAADU POCHINODIKI POH!'' while clutching 1v3. best part: if you squad with him and win, he gives you 2 extra marks in internals. educational institution btw.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 580)::int
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

-- Ragging Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Senior made me propose to a tree. Now I''m dating his sister. Universe has a sense of humor.',
  '2019. freshers week. seniors were doing ''interaction''. one guy - typical pelli choopulu hero type - made me propose to a tree in front of everyone. i had to say ''i love you'' to a neem tree 10 times. humiliating. fast forward 2 years. i match with a girl on bumble. we meet. her BROTHER is the same senior. he didn''t recognize me at first. i reminded him. his face went through all stages of grief. we''re together now. he has to be nice to me. i bring up the tree incident at every family gathering. his parents think it''s hilarious. he does not. karma.',
  'ragging',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 530)::int
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

-- Placement Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Got placed at TCS. Rejected it for a startup. Startup died. Now at TCS.',
  'campus placements 2022. tcs came. 3.6 lpa. i got selected. felt like i was too good for mass recruitment. rejected it for a ''exciting fintech startup'' i found on linkedin. they promised equity, learning, and ''disruption''. what i got: 3 months salary (late), zero equity (legal issues), and trauma (free). startup shut down. i went back to tcs off-campus drive. got selected again. same salary. same role. same everything. the HR lady recognized me. she smiled and said ''welcome back''. i have never felt smaller. now i just do my 9-5 and don''t dream anymore.',
  'placement_experience',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 470)::int
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

-- Fest Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'College fest had a kissing booth. Management found out. Principal resigned.',
  'GRIET fest 2023. some genius from event committee set up a ''kissing booth'' as a joke. except people actually used it. photos went viral. parents complained. management investigated. turns out: principal had approved the stall layout without reading it properly. some parent with connections filed an RTI. media got involved. principal ''resigned for personal reasons'' a month later. the students who ran the booth are legends now. they graduated before any action could be taken. we don''t talk about fest 2023 in official meetings but we DEFINITELY talk about it everywhere else.',
  'fest_culture',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 650)::int
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

-- =====================================================
-- MNR UNIVERSITY STORIES
-- =====================================================

-- Confession Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'I cheated on every exam for 3 years. Teachers knew. They just didn''t care.',
  'mnr degree college. ba economics. 3 years. i did not study a single day. not exaggerating. EVERY exam was open book - we just didn''t tell anyone. teachers would announce ''exam tomorrow''. we''d ask ''which topics sir?'' they''d say ''everything'' and wink. THE WINK. that meant bring your notes. some teachers would literally walk out of the room during exams. one sir said ''i''m going for tea, 15 minutes'' and left. he came back in 45 minutes. on purpose. i graduated with 72%. i probably deserve 30%. but who''s checking? i work in a bank now. the irony.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 540)::int
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

-- Dating Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Dated 3 people from the same class simultaneously. They found out. Started a group chat without me.',
  'listen. it wasn''t planned okay. first one was during orientation. second was during fresher''s party. third was during a group project. i thought i was being smart by never posting on social media. what i didn''t account for: they all knew each other. one day i see them having coffee together. WITHOUT ME. i walk up. they all smile. sweetly. too sweetly. one of them says ''we were just talking about you''. they showed me the group chat. it was called ''MNR ka casanova''. 3 months of screenshots. i had to buy them lunch for a MONTH as apology. we''re all still friends somehow. none of them are dating me.',
  'confession',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 510)::int
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

-- Professor Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Our economics professor runs a tea stall outside college. Best chai in Kukatpally.',
  'sir teaches microeconomics. also owns ''ramu tea point'' outside the college gate. he uses his own tea stall as a case study. literally. ''demand and supply - when it rains, chai demand goes up. i increase price by 2 rupees. this is dynamic pricing.'' we thought it was just examples. then we saw him at the stall. in an apron. making cutting chai. now we all buy chai from him before his class. he gives us 1 rupee discount. calls it ''student concession''. gives us extra marks if we help during rush hour. this man understood passive income before linkedin discovered it.',
  'faculty_stories',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 560)::int
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

-- Horror Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'The old building is haunted. Security guard quit after seeing a woman in white. Twice.',
  'mnr has this old building. ''heritage block'' they call it. nobody uses it after 6pm. security guard - raju bhaiya - he told us why. first time: he was doing rounds at 11pm. saw a woman in white sari standing at the end of corridor. he called out. she didn''t respond. he walked closer. she WALKED INTO THE WALL. second time: he heard crying from the girls'' bathroom. bathroom was locked. from inside. he called for backup. they broke the door. bathroom was empty. tap was running. he quit the next day. new security refuses to patrol that building. college said they''re ''renovating''. it''s been 3 years. no renovation.',
  'horror',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 490)::int
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

-- Funny Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Canteen uncle has a PhD. Gave up academia to make samosas. No regrets, he says.',
  'mnr canteen. we all know ramesh uncle. makes the best samosas in kukatpally. one day i saw a certificate behind his counter. PhD in Chemistry. CHEMISTRY. i asked him about it. he said he worked in a pharma company for 15 years. hated every moment. his wife passed away. he reassessed life. decided to make samosas because ''food makes people happy. molecules don''t.'' he makes more money now than he did as a scientist. works 6 hours instead of 12. customers love him. he''s happier. sometimes he explains the maillard reaction while frying samosas. knowledge doesn''t go waste, he says.',
  'inspirational',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 620)::int
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

-- Campus Life Story
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT
  'Attendance below 65%? Just bring biryani for the HOD. Works every time.',
  'mnr has this unwritten rule. if your attendance is critically low (like mine - 47%), you have two options: 1) beg and make promises, or 2) bring biryani to the HOD. i tried option 1 first. got a lecture. tried option 2. brought paradise biryani. family pack. the HOD looked at me. looked at the biryani. stamped my form. no questions asked. next semester i was smart. bought the biryani EARLY. maintained a healthy relationship with HOD sir. graduated with dignity. others think i had connections. my only connection was chicken biryani. special with extra mirchi.',
  'campus_life',
  c.id,
  '00000000-0000-0000-0000-000000000000'::uuid,
  'published',
  floor(random() * 300 + 530)::int
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

-- =====================================================
-- REVIEWS - WOXSEN UNIVERSITY
-- =====================================================

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Campus is fire, placements are mid, fees are criminal',
'Okay so Woxsen looks like a goddamn resort. Instagram worthy af. The infrastructure is genuinely world-class - smart classrooms, sports facilities, even a golf course (who even plays golf??). BUT. The placements? Bro they show you 25 LPA but that''s like 2 people whose dads own companies. Average is around 6-8 LPA for BBA/MBA. For the 20 lakh fee you pay, ROI is questionable. Faculty is actually decent - many from industry background. But some courses feel like they''re making it up as they go. Worth it if parents are paying and you want the ''experience''. Not worth it if you''re taking a loan.',
'alumni', 2020, 2024, 'BBA', 'Business Administration', 3.5, 4, 3, 5, 5, 2, 4, 5, 'published', floor(random() * 50 + 30)::int
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Rich kid paradise. Middle class kids struggle to fit in.',
'I''ll be honest - there''s a HUGE class divide here. Kids rolling in with BMWs while some of us taking college bus. The culture can feel alienating if you''re not from money. Fests are expensive, trips are expensive, even hanging out is expensive. Academically it''s fine, international collaborations are real, some good faculty. But the social scene is dominated by whose dad is richer. If you''re here on scholarship or loan, be prepared to feel out of place sometimes. That said, academics don''t discriminate and some rich kids are genuinely nice. Just... different world.',
'current_student', 2022, NULL, 'MBA', 'Management', 3.2, 4, 3, 4, 5, 2, 4, 5, 'published', floor(random() * 50 + 40)::int
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Design school is actually underrated. Good profs, better exposure.',
'Did my degree in design here and honestly no complaints. The design faculty is solid - actual industry practitioners teaching us. Got internships through college connections at decent studios. Campus is perfect for creative work - inspiring architecture, good labs. The only L is the location - middle of nowhere so client meetings mean 2 hour commute to city. Placements for design are decent, 4-7 LPA range which is normal for freshers in design. If you''re specifically looking at design education, Woxsen is underrated. Better than many ''design institutes'' tbh.',
'alumni', 2019, 2023, 'B.Des', 'Design', 4.0, 4, 4, 4, 5, 3, 4, 5, 'published', floor(random() * 50 + 25)::int
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

-- =====================================================
-- REVIEWS - GRIET
-- =====================================================

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Solid engineering college. Not IIT but gets the job done.',
'Came here through EAMCET with an okay rank. 4 years done. Placements are real - got into TCS through campus. Many batchmates in Infosys, Wipro, Accenture. Some cracked product companies too. Faculty is mixed - some gems who actually care, some who read from slides. Labs are okay, could be better. The college really pushes competitive coding which helped. Fests are fun, good clubs to join. Location in Bachupally is convenient. If you''re getting CSE or ECE here, it''s worth it. Other branches? Placement support is weaker.',
'alumni', 2019, 2023, 'B.Tech CSE', 'Computer Science', 3.7, 3, 4, 4, 3, 4, 3, 3, 'published', floor(random() * 50 + 35)::int
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Strict AF but it works. Management doesn''t play around.',
'GRIET is STRICT. Like really strict. Attendance matters, dress code enforced, phones can get confiscated. Coming from an easy-going school this was a shock. BUT - looking back, this discipline helped. Forced me to actually study. The anti-ragging cell is active, seniors can''t trouble you much. Academic pressure is real but manageable. The Gokaraju family is very involved - you''ll see them around campus. Good thing is they actually invest in the college. New buildings, updated labs. If you need structure to succeed, GRIET provides it.',
'current_student', 2021, NULL, 'B.Tech ECE', 'Electronics', 3.5, 3, 4, 3, 4, 4, 3, 3, 'published', floor(random() * 50 + 28)::int
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Mechanical/Civil? Skip this college. Only CS/ECE worth it.',
'Real talk - GRIET only makes sense for CSE and maybe ECE. I did Mechanical. Placement support? Almost zero. Companies that come? Mostly for CS kids. Core companies visiting? Maybe 2-3 the whole year. Faculty teaches well but what''s the point when there''s no job at the end? Half my batchmates did MBA or learned coding to switch. Should''ve just done CSE from a lower-tier college tbh. The fee is same for all branches but outcomes are VERY different. If you''re not in CSE, think twice.',
'alumni', 2018, 2022, 'B.Tech Mechanical', 'Mechanical Engineering', 2.5, 3, 2, 3, 3, 2, 3, 3, 'published', floor(random() * 50 + 45)::int
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

-- =====================================================
-- REVIEWS - MNR UNIVERSITY
-- =====================================================

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Chill college for chill people. No pressure, no placements either.',
'MNR is what it is - a basic degree college in Kukatpally. Don''t come here expecting IIT level anything. What you get: affordable fees, chill environment, teachers who don''t torture you, easy passing. What you don''t get: placements (you''re on your own), great infrastructure, or bragging rights. Perfect for: people who just need a degree, those preparing for other exams (UPSC, banking, etc.), or if you just want 3 years of minimal stress. I did my BA here while preparing for government jobs. Served its purpose.',
'alumni', 2019, 2022, 'BA Economics', 'Arts', 2.8, 3, 1, 3, 2, 4, 2, 2, 'published', floor(random() * 50 + 20)::int
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Commerce department is actually decent. CA/CMA coaching nearby helps.',
'Did B.Com here. The commerce faculty is better than expected. Many teachers are CAs themselves. The location in Kukatpally is actually good - tons of CA coaching centers nearby. Many of us would attend college in morning, coaching in evening. College was flexible with attendance if you told them you''re preparing for CA. Several from my batch cleared CA/CMA. If you''re doing B.Com as a stepping stone to CA, MNR isn''t bad. Infrastructure is meh but at this fee, can''t complain.',
'alumni', 2018, 2021, 'B.Com', 'Commerce', 3.2, 4, 2, 3, 2, 4, 2, 2, 'published', floor(random() * 50 + 32)::int
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Just a degree mill. But an honest one at least.',
'MNR doesn''t pretend to be something it''s not. It''s a basic degree college. Classes happen, exams happen, degrees get handed out. No fancy promises of placements or ''world-class education''. Fees are low, expectations are low, outcomes match. The good thing? No false advertising. You know what you''re signing up for. Some teachers are surprisingly passionate. Library exists. Computer lab exists (with ancient computers but still). If you need an affordable degree and have other plans (family business, further studies abroad, competitive exams), MNR does the job without burning your pocket.',
'alumni', 2017, 2020, 'BBA', 'Business Administration', 2.5, 3, 1, 2, 2, 4, 2, 2, 'published', floor(random() * 50 + 18)::int
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;
