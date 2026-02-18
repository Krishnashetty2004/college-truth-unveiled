-- RUN THIS IN SUPABASE SQL EDITOR: https://supabase.com/dashboard/project/fthxmfanwxsgnavibclc/sql/new

-- INSERT COLLEGES
INSERT INTO colleges (name, short_name, city, state, type, ownership, tier, website, established_year, student_population, is_active)
VALUES
  ('Woxsen University', 'Woxsen', 'Hyderabad', 'Telangana', 'management', 'private', 'tier_2', 'https://woxsen.edu.in', 2014, 3500, true),
  ('Gokaraju Rangaraju Institute of Engineering and Technology', 'GRIET', 'Hyderabad', 'Telangana', 'engineering', 'private', 'tier_2', 'https://www.griet.ac.in', 1997, 6000, true),
  ('MNR Degree & PG College', 'MNR', 'Hyderabad', 'Telangana', 'arts', 'private', 'tier_3', 'https://www.mnruniversity.edu.in', 1988, 4000, true);

-- WOXSEN STORIES
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'Hooked up with my groupmate during B-school trip to Goa. Now we''re co-founders.', 'woxsen business trip to goa. 3rd year. we were supposed to study ''hospitality industry''. what we studied was each other. started as ''let''s share a cab to baga''. ended with ''let''s share a startup idea''. we pitched to investors 6 months later. they asked how we met. we said ''networking event''. technically not a lie? we raised 50 lakhs. we are still together. our investors don''t know. our parents don''t know. woxsen placement cell thinks we''re their success story. WE ARE BUT NOT FOR THE REASONS THEY THINK.', 'confession', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 487
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'Rich kid asked me out with a drone proposal in the quad. I said no. On camera.', 'woxsen has MONEY okay. this guy from BBA - his dad owns like 3 malls or something. he liked me. i thought we were just friends. one random tuesday, a DRONE appears during lunch. playing our ''song'' (we didn''t have a song???). it drops a banner asking me out. 200 people watching. i panicked. i said ''bro i have a boyfriend''. I DID NOT HAVE A BOYFRIEND. the drone footage went viral in the batch. he transferred to another section. his dad apparently called the dean asking why ''his son was humiliated''. most awkward conversation of my life.', 'campus_life', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 534
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'Finance professor trades crypto during lecture. Shows us his portfolio. It''s down 80%.', 'dr. mehta. teaches corporate finance. talks about ''risk management'' and ''diversification''. one day his laptop connected to the projector accidentally. BINANCE WAS OPEN. his portfolio was on screen for 10 seconds before he alt-tabbed. in those 10 seconds we saw: he had invested in 12 different shitcoins, he was down 4.7 lakhs, he had a stop-loss set at a level that already triggered. someone screenshotted. it''s now the batch whatsapp group icon. he still teaches risk management. nobody has the heart to tell him.', 'faculty_stories', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 612
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'Placement cell said 25 LPA average. Actual average is 8 LPA. They counted founder''s salary.', 'woxsen placement stats are CREATIVE. they said 25 LPA highest. what they didn''t say: that was a guy whose DAD gave him a job at his own company. they said average is 12 LPA. what they didn''t say: they excluded anyone who took more than 6 months to get placed. i confronted placement cell. they said ''all data is technically accurate''. TECHNICALLY. bro i came here for MBA thinking i''ll make bank. i''m making 7 LPA. woxsen made 20 lakhs off me. who''s the real MBA here.', 'placement_experience', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 678
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'Woxsen hostel has a swimming pool. Also has snakes near the swimming pool. Pick your adventure.', 'the campus is BEAUTIFUL. like genuinely one of the best in india. what the brochure doesn''t show: it''s literally in the middle of nowhere. there''s a forest. forests have wildlife. wildlife includes: snakes (saw 3), scorpions (roommate found one in his shoe), peacocks (actually pretty), wild boars (actually terrifying). one night security found a cobra near the pool. they called forest department. we couldn''t use pool for a MONTH. my parents paid 4 lakhs for this ''luxury hostel experience''. the luxury is being close to nature. TOO close.', 'hostel_life', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 445
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

-- GRIET STORIES
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'Started a fake dating profile as the ''GRIET anonymous crusher''. 47 people confessed to me.', 'made an instagram page called griet.confessions. said i''m a ''mystery student'' collecting love stories. 47 people DMd me their crushes, relationship problems, and VERY personal details. i know that the CR of CSE-B is cheating on his girlfriend. i know that a professor is dating an ex-student. I HAVE TOO MUCH POWER. i wanted to reveal myself and write a blog about ''campus romance''. now i realize i''d literally be murdered. i''m taking these secrets to my grave.', 'confession', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 523
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'We dated for 2 years in GRIET. Everyone knew except our parents. Including the watchman.', 'griet has STRICT rules about boys and girls talking. so we developed a whole system. coded language in class (''library'' meant terrace, ''canteen'' meant parking lot). our friends would cover for us. EVEN THE WATCHMAN KNEW. bro would see us holding hands behind the workshop and just look away. one day he gave us a thumbs up. legend. we thought we were so sneaky until convocation. my mom met his mom. turns out THEY knew the whole time. moms always know. they were just waiting to see if we were ''serious''. we got engaged last month. watchman bhaiya got a wedding invite.', 'campus_life', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 498
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'Our CAD professor plays PUBG with students. He''s actually cracked. K/D ratio 4.2.', 'engineering drawing was boring until we discovered our professor plays PUBG. someone saw his phone during break. we asked him. he tried to deny. we showed him we knew his username. he gave up. NOW HE PLAYS WITH US. friday nights are squad matches with sir. he''s actually insane - better than most of us. carries the team regularly. his callouts are in pure telugu. ''VAADU POCHINODIKI POH!'' while clutching 1v3. best part: if you squad with him and win, he gives you 2 extra marks in internals.', 'faculty_stories', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 634
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'Senior made me propose to a tree. Now I''m dating his sister. Universe has a sense of humor.', '2019. freshers week. seniors were doing ''interaction''. one guy - typical pelli choopulu hero type - made me propose to a tree in front of everyone. i had to say ''i love you'' to a neem tree 10 times. humiliating. fast forward 2 years. i match with a girl on bumble. we meet. her BROTHER is the same senior. he didn''t recognize me at first. i reminded him. his face went through all stages of grief. we''re together now. he has to be nice to me. i bring up the tree incident at every family gathering. karma.', 'ragging', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 567
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'Got placed at TCS. Rejected it for a startup. Startup died. Now at TCS.', 'campus placements 2022. tcs came. 3.6 lpa. i got selected. felt like i was too good for mass recruitment. rejected it for a ''exciting fintech startup'' i found on linkedin. they promised equity, learning, and ''disruption''. what i got: 3 months salary (late), zero equity (legal issues), and trauma (free). startup shut down. i went back to tcs off-campus drive. got selected again. same salary. same role. the HR lady recognized me. she smiled and said ''welcome back''. i have never felt smaller.', 'placement_experience', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 489
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'College fest had a kissing booth. Management found out. Principal resigned.', 'GRIET fest 2023. some genius from event committee set up a ''kissing booth'' as a joke. except people actually used it. photos went viral. parents complained. management investigated. turns out: principal had approved the stall layout without reading it properly. some parent with connections filed an RTI. media got involved. principal ''resigned for personal reasons'' a month later. the students who ran the booth are legends now. they graduated before any action could be taken.', 'fest_culture', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 712
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

-- MNR STORIES
INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'I cheated on every exam for 3 years. Teachers knew. They just didn''t care.', 'mnr degree college. ba economics. 3 years. i did not study a single day. not exaggerating. EVERY exam was open book - we just didn''t tell anyone. teachers would announce ''exam tomorrow''. we''d ask ''which topics sir?'' they''d say ''everything'' and wink. THE WINK. that meant bring your notes. some teachers would literally walk out of the room during exams. one sir said ''i''m going for tea, 15 minutes'' and left. he came back in 45 minutes. on purpose. i graduated with 72%. i probably deserve 30%.', 'confession', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 543
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'Dated 3 people from the same class simultaneously. They found out. Started a group chat without me.', 'listen. it wasn''t planned okay. first one was during orientation. second was during fresher''s party. third was during a group project. i thought i was being smart by never posting on social media. what i didn''t account for: they all knew each other. one day i see them having coffee together. WITHOUT ME. i walk up. they all smile. sweetly. too sweetly. one of them says ''we were just talking about you''. they showed me the group chat. it was called ''MNR ka casanova''. 3 months of screenshots. i had to buy them lunch for a MONTH as apology.', 'confession', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 512
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'Our economics professor runs a tea stall outside college. Best chai in Kukatpally.', 'sir teaches microeconomics. also owns ''ramu tea point'' outside the college gate. he uses his own tea stall as a case study. literally. ''demand and supply - when it rains, chai demand goes up. i increase price by 2 rupees. this is dynamic pricing.'' we thought it was just examples. then we saw him at the stall. in an apron. making cutting chai. now we all buy chai from him before his class. he gives us 1 rupee discount. calls it ''student concession''. gives us extra marks if we help during rush hour.', 'faculty_stories', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 589
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'The old building is haunted. Security guard quit after seeing a woman in white. Twice.', 'mnr has this old building. ''heritage block'' they call it. nobody uses it after 6pm. security guard - raju bhaiya - he told us why. first time: he was doing rounds at 11pm. saw a woman in white sari standing at the end of corridor. he called out. she didn''t respond. he walked closer. she WALKED INTO THE WALL. second time: he heard crying from the girls'' bathroom. bathroom was locked. from inside. he called for backup. they broke the door. bathroom was empty. tap was running. he quit the next day.', 'horror', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 467
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'Canteen uncle has a PhD. Gave up academia to make samosas. No regrets, he says.', 'mnr canteen. we all know ramesh uncle. makes the best samosas in kukatpally. one day i saw a certificate behind his counter. PhD in Chemistry. CHEMISTRY. i asked him about it. he said he worked in a pharma company for 15 years. hated every moment. his wife passed away. he reassessed life. decided to make samosas because ''food makes people happy. molecules don''t.'' he makes more money now than he did as a scientist. works 6 hours instead of 12. sometimes he explains the maillard reaction while frying samosas.', 'inspirational', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 645
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

INSERT INTO college_stories (title, content, category, college_id, user_id, status, upvote_count)
SELECT 'Attendance below 65%? Just bring biryani for the HOD. Works every time.', 'mnr has this unwritten rule. if your attendance is critically low (like mine - 47%), you have two options: 1) beg and make promises, or 2) bring biryani to the HOD. i tried option 1 first. got a lecture. tried option 2. brought paradise biryani. family pack. the HOD looked at me. looked at the biryani. stamped my form. no questions asked. next semester i was smart. bought the biryani EARLY. maintained a healthy relationship with HOD sir. graduated with dignity. my only connection was chicken biryani.', 'campus_life', c.id, '00000000-0000-0000-0000-000000000000'::uuid, 'published', 534
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

-- WOXSEN REVIEWS
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Campus is fire, placements are mid, fees are criminal',
'Okay so Woxsen looks like a goddamn resort. Instagram worthy af. The infrastructure is genuinely world-class - smart classrooms, sports facilities, even a golf course (who even plays golf??). BUT. The placements? Bro they show you 25 LPA but that''s like 2 people whose dads own companies. Average is around 6-8 LPA for BBA/MBA. For the 20 lakh fee you pay, ROI is questionable. Faculty is actually decent - many from industry background. Worth it if parents are paying. Not worth it if you''re taking a loan.',
'alumni', 2020, 2024, 'BBA', 'Business Administration', 3.5, 4, 3, 5, 5, 2, 4, 5, 'published', 38
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Rich kid paradise. Middle class kids struggle to fit in.',
'I''ll be honest - there''s a HUGE class divide here. Kids rolling in with BMWs while some of us taking college bus. The culture can feel alienating if you''re not from money. Fests are expensive, trips are expensive, even hanging out is expensive. Academically it''s fine, international collaborations are real, some good faculty. But the social scene is dominated by whose dad is richer. If you''re here on scholarship or loan, be prepared to feel out of place sometimes.',
'current_student', 2022, NULL, 'MBA', 'Management', 3.2, 4, 3, 4, 5, 2, 4, 5, 'published', 45
FROM colleges c WHERE c.short_name = 'Woxsen' LIMIT 1;

-- GRIET REVIEWS
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Solid engineering college. Not IIT but gets the job done.',
'Came here through EAMCET with an okay rank. 4 years done. Placements are real - got into TCS through campus. Many batchmates in Infosys, Wipro, Accenture. Some cracked product companies too. Faculty is mixed - some gems who actually care, some who read from slides. Labs are okay, could be better. The college really pushes competitive coding which helped. Fests are fun. If you''re getting CSE or ECE here, it''s worth it.',
'alumni', 2019, 2023, 'B.Tech CSE', 'Computer Science', 3.7, 3, 4, 4, 3, 4, 3, 3, 'published', 42
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Strict AF but it works. Management doesn''t play around.',
'GRIET is STRICT. Like really strict. Attendance matters, dress code enforced, phones can get confiscated. Coming from an easy-going school this was a shock. BUT - looking back, this discipline helped. Forced me to actually study. The anti-ragging cell is active, seniors can''t trouble you much. Academic pressure is real but manageable. The Gokaraju family is very involved. Good thing is they actually invest in the college.',
'current_student', 2021, NULL, 'B.Tech ECE', 'Electronics', 3.5, 3, 4, 3, 4, 4, 3, 3, 'published', 35
FROM colleges c WHERE c.short_name = 'GRIET' LIMIT 1;

-- MNR REVIEWS
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Chill college for chill people. No pressure, no placements either.',
'MNR is what it is - a basic degree college in Kukatpally. Don''t come here expecting IIT level anything. What you get: affordable fees, chill environment, teachers who don''t torture you, easy passing. What you don''t get: placements (you''re on your own), great infrastructure, or bragging rights. Perfect for: people who just need a degree, those preparing for other exams (UPSC, banking, etc.), or if you just want 3 years of minimal stress.',
'alumni', 2019, 2022, 'BA Economics', 'Arts', 2.8, 3, 1, 3, 2, 4, 2, 2, 'published', 28
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, graduation_year, course, department, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_infrastructure, rating_value_for_money, rating_food, rating_hostel, status, helpful_count)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Commerce department is actually decent. CA/CMA coaching nearby helps.',
'Did B.Com here. The commerce faculty is better than expected. Many teachers are CAs themselves. The location in Kukatpally is actually good - tons of CA coaching centers nearby. Many of us would attend college in morning, coaching in evening. College was flexible with attendance if you told them you''re preparing for CA. Several from my batch cleared CA/CMA. If you''re doing B.Com as a stepping stone to CA, MNR isn''t bad.',
'alumni', 2018, 2021, 'B.Com', 'Commerce', 3.2, 4, 2, 3, 2, 4, 2, 2, 'published', 33
FROM colleges c WHERE c.short_name = 'MNR' LIMIT 1;

SELECT 'Done! Added 3 colleges, 17 stories, and 6 reviews.' as result;
