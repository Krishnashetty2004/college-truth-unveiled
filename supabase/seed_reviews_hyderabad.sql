-- Seed Reviews for Hyderabad Colleges
-- Total: ~200 reviews across 38 colleges
-- Vibes: Biryani > Mess, Tech Bros, HITEC City dreams, Traffic, Telugu vs Hindi

-- ============================================
-- TIER 1 COLLEGES - Honest Praise (4-5 stars)
-- ============================================

-- IIT Hyderabad Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Worth every drop of sweat', 'Bhai IIT tag ke liye itna padhna pada, ab yahan aake aur padhai. But placements dekh ke sab worth it lagta hai. 25 LPA average, kuch log 50+ bhi nikal lete hain. Campus Kandi mein hai - shahar se door, but facilities world class. Biryani ke liye Gachibowli jaana padta hai.',
'alumni', 2020, 4.5, 5, 5, 4, 5, 3, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth', '#GoodVibes']
FROM colleges c WHERE c.short_name = 'IIT-H' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Pressure cooker hai, but gold nikalta hai', 'Mental health ka dhyan rakhna yahan. Competition insane hai. But jo network milta hai, kahin nahi milega. Professors research-focused hain, padhate bhi accha hain. Hostel mein AC hai, mess ka khana decent. HITEC City 30 min door hai internships ke liye.',
'current_student', 2022, 4.2, 4, 5, 4, 5, 3, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes']
FROM colleges c WHERE c.short_name = 'IIT-H' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Campus location sucks, everything else 10/10', 'Kandi mein college hai - nearest civilization 20km door. But inside campus sab hai - gym, pool, everything. Placements mein Google, Microsoft, Amazon sab aate hain. Gender ratio bekar hai but getting better. Telangana ki garmi maar daalti hai.',
'current_student', 2021, 4.3, 5, 5, 3, 5, 2, 4, 'nerd_paradise', ARRAY['#PlacementKing', '#Worth']
FROM colleges c WHERE c.short_name = 'IIT-H' LIMIT 1;

-- IIIT Hyderabad Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Coding ka temple hai yeh jagah', 'Agar coding pasand hai toh heaven hai. Har jagah competitive programming ho rahi hai. Placements mein average 25 LPA, top packages 1 Cr+. Gachibowli mein hai toh city access easy. But social life zero - sab apne laptops mein ghuse rehte hain.',
'alumni', 2019, 4.6, 5, 5, 3, 5, 2, 4, 'nerd_paradise', ARRAY['#PlacementKing', '#StudyOnly']
FROM colleges c WHERE c.short_name = 'IIIT-H' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Research mein best, parties mein worst', 'Research culture amazing hai. Professors internationally recognized hain. But yahan aakar expect mat karo ki college life milegi. Sab padhai mein doobe rehte hain. Dating scene? Bhai coding competition hai yahan, dating nahi.',
'current_student', 2022, 4.4, 5, 5, 2, 5, 2, 3, 'nerd_paradise', ARRAY['#StudyOnly', '#Worth']
FROM colleges c WHERE c.short_name = 'IIIT-H' LIMIT 1;

-- BITS Hyderabad Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'BITS culture + Hyderabad = Perfect combo', 'Shamirpet mein campus hai - peaceful but boring. BITS culture amazing hai - no attendance, full freedom. Fests mein poora Hyderabad aata hai. Placements solid, PS1 PS2 mein real industry exposure. Fees thoda zyada hai but worth it.',
'alumni', 2020, 4.3, 4, 4, 5, 4, 3, 4, 'actually_good', ARRAY['#GoodVibes', '#PartyMode', '#Worth']
FROM colleges c WHERE c.short_name = 'BITS Hyd' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Freedom hai, responsibility bhi', 'No attendance policy means you can bunk but you''ll suffer later. Peer learning culture strong hai. Night canteen mein 3 AM tak padhai aur gossip dono hoti hai. Placements 15-20 LPA average. Only issue - campus city se bohot door.',
'current_student', 2021, 4.1, 4, 4, 4, 4, 3, 4, 'party_school', ARRAY['#GoodVibes', '#NightLife']
FROM colleges c WHERE c.short_name = 'BITS Hyd' LIMIT 1;

-- ISB Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'1 year mein career change guaranteed', 'MBA yahan se karo toh life set. 35 LPA average placement, consulting aur finance mein top roles. Network invaluable hai - alumni har jagah hain. Gachibowli campus world-class. Only con - 40 lakh fees. ROI positive hai if you crack good package.',
'alumni', 2022, 4.8, 5, 5, 4, 4, 4, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth', '#RichKids']
FROM colleges c WHERE c.short_name = 'ISB' LIMIT 1;

-- NALSAR Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Law school mein best in India', 'Shamirpet mein campus, IIT ke paas. Legal education ka Harvard bolo toh galat nahi. Moot court competitions mein always top. Placements mein top law firms aati hain - 15-20 LPA starting. Campus life vibrant hai, debates daily hoti hain.',
'alumni', 2019, 4.5, 5, 5, 4, 5, 4, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes']
FROM colleges c WHERE c.short_name = 'NALSAR' LIMIT 1;

-- UoH Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Research heaven hai Central University', 'Campus huge hai - deer bhi ghoomte hain. Science departments strong hain, especially Physics aur Chemistry. Placements average but research opportunities amazing. Fees nominal - value for money 100%. Political awareness high hai campus mein.',
'alumni', 2020, 4.0, 4, 3, 4, 5, 3, 3, 'hidden_gem', ARRAY['#Worth', '#GoodVibes']
FROM colleges c WHERE c.short_name = 'UoH' LIMIT 1;

-- NIFT Hyderabad Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Fashion ka IIT hai bhai', 'Creative log ka paradise. Industry connections strong hain. Placements mein top fashion brands aati hain. Campus chota hai but well-maintained. Peer group talented hai - inspiration daily milti hai. Only issue - non-creative subjects bore karti hain.',
'current_student', 2021, 4.2, 4, 4, 4, 4, 5, 4, 'actually_good', ARRAY['#Baddies', '#GoodVibes']
FROM colleges c WHERE c.short_name = 'NIFT Hyd' LIMIT 1;

-- ============================================
-- TIER 2 COLLEGES - Mixed Reality (2.5-4 stars)
-- ============================================

-- CBIT Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Gandipet location mein hidden gem', 'Hyderabad ke best private engineering colleges mein se ek. Placements decent - 8-12 LPA average for CS. Faculty mixed hai but overall okay. Gandipet lake ke paas hai toh weekend trips easy. Management strict hai but discipline seekhate hain.',
'alumni', 2020, 3.5, 3, 4, 4, 4, 3, 3, 'hidden_gem', ARRAY['#GoodVibes', '#Worth']
FROM colleges c WHERE c.short_name = 'CBIT' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Accha hai, great nahi', 'CS aur ECE mein placements theek hain, baaki branches mein struggle. Lab facilities outdated hain thoda. Campus life decent - fests mein maza aata hai. City se door hai toh late night hangouts mushkil. Overall VFM hai agar state quota se aaye ho.',
'current_student', 2022, 3.3, 3, 3, 3, 4, 3, 3, 'mid_af', ARRAY['#GoodVibes']
FROM colleges c WHERE c.short_name = 'CBIT' LIMIT 1;

-- VNR VJIET Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Bachpan ka Raj placement dreams', 'Kukatpally mein hai - hostel students ke liye convenient. Placements mein 6-10 LPA milta hai if you''re in CS. Faculty kuch acche hain, kuch sirf attendance lete hain. Canteen ka biryani surprisingly good hai. Management thoda conservative hai.',
'alumni', 2021, 3.4, 3, 3, 3, 4, 3, 3, 'mid_af', ARRAY['#Worth']
FROM colleges c WHERE c.short_name = 'VNR VJIET' LIMIT 1;

-- JNTUH Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Government college vibes - chill but no placements', 'Fees kam hai, expectations bhi kam rakho. Placements almost non-existent for core branches. CS wale khud se prepare karke nikaal lete hain. Campus huge hai, Kukatpally mein. Political scene thoda hai. Self-study karna padega yahan.',
'alumni', 2020, 2.8, 2, 2, 3, 4, 3, 3, 'mid_af', ARRAY['#Avoid']
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Degree milegi, job guarantee nahi', 'JNTU ki affiliated colleges se better hai main campus. But placements ke liye self-effort 100% chahiye. Labs outdated hain. Library acchi hai. Canteen sasta hai. If you''re self-motivated, you can make it work. Otherwise waste.',
'current_student', 2022, 2.6, 2, 2, 3, 4, 2, 3, 'overrated', ARRAY['#Avoid']
FROM colleges c WHERE c.short_name = 'JNTUH' LIMIT 1;

-- GITAM Hyderabad Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Deemed university trying hard', 'Campus new hai, facilities decent. Placements improving every year - 5-8 LPA average. Management invests in infrastructure. Faculty quality inconsistent. Vizag campus ka name carry karta hai. Worth it if you didn''t get better options.',
'alumni', 2021, 3.2, 3, 3, 3, 3, 3, 3, 'mid_af', ARRAY['#GoodVibes']
FROM colleges c WHERE c.short_name = 'GITAM Hyd' LIMIT 1;

-- Osmania University Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Historical legacy, modern problems', 'Campus heritage beautiful hai. But infrastructure crumbling. Placements minimal - UPSC preparation popular hai. Fees negligible. Political scene strong. Good for those who want to self-study for competitive exams. Not for job seekers.',
'alumni', 2020, 2.8, 3, 2, 3, 5, 3, 3, 'overrated', ARRAY['#Worth']
FROM colleges c WHERE c.short_name = 'OU' LIMIT 1;

-- ICFAI/IBS Reviews (already have stories, add reviews)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'MBA mill hai, quality questionable', 'Fees 20 lakh, placements mein 6-8 LPA. ROI negative hai clear. Marketing mein acche hain - reality alag hai. Campus Hyderabad mein hai which is plus. Some good faculty but mostly average. Don''t expect IIM level education for IIM level fees.',
'alumni', 2021, 2.5, 2, 2, 3, 2, 3, 3, 'paisa_barbaad', ARRAY['#PlacementScam', '#Avoid']
FROM colleges c WHERE c.short_name = 'ICFAI/IBS' LIMIT 1;

-- MU (Mahindra University) Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'New but promising, fees dekh ke rona aa jayega', 'Campus Bahadurpally mein - world class facilities. Faculty IIT/IIM background se. But 20+ lakh fees engineering ke liye? Placements first batch ka just hua - decent. Rich kids ka school lag sakta hai. Quality education but cost prohibitive.',
'current_student', 2022, 3.5, 4, 3, 4, 2, 4, 4, 'mid_af', ARRAY['#RichKids', '#GoodVibes']
FROM colleges c WHERE c.short_name = 'MU' LIMIT 1;

-- VCE (Vasavi) Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Ibrahimbagh ki shaan, placements mein average', 'Old established college. CS mein placements okay - 6-8 LPA. Other branches struggle. Faculty senior hai - some good, some outdated. Campus city mein hai which is convenient. Conservative management. Decent for state quota admission.',
'alumni', 2020, 3.0, 3, 3, 3, 3, 3, 3, 'mid_af', ARRAY['#GoodVibes']
FROM colleges c WHERE c.short_name = 'VCE' LIMIT 1;

-- ============================================
-- TIER 3 COLLEGES - Brutal Reality (1-2.5 stars)
-- ============================================

-- SNIST Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Ghatkesar mein 4 saal waste', 'Bhai city se 30km door hai. Placement cell sirf excel mein data dikhata hai. Real placements? 20% bhi nahi. Faculty attendance leke chale jaate. Lab mein computer 2012 ke hain. Hostel mein WiFi naam ka hai. Bus service unreliable. Mat aao.',
'alumni', 2021, 1.8, 2, 1, 2, 2, 2, 2, 'avoid', ARRAY['#PlacementScam', '#Avoid', '#WiFiDead']
FROM colleges c WHERE c.short_name = 'SNIST' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'99% placement ka jhooth', 'Website pe 99% placement likhte hain. Reality - sirf mass recruiters aate hain 3 LPA wale. Agar coding khud se seekho toh nikal sakte ho. College ka koi contribution nahi. Fees 5 lakh liye, kya diya? Sirf attendance pressure.',
'current_student', 2022, 1.5, 1, 1, 2, 1, 2, 2, 'circus', ARRAY['#PlacementScam', '#Avoid', '#MessFood💀']
FROM colleges c WHERE c.short_name = 'SNIST' LIMIT 1;

-- CMR Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'CMR ka C stands for Circus', 'Multiple campuses hai, sab equally bekar. Faculty mostly fresher hain jo khud seekh rahe. Placements mein BPO aur support roles milte hain. Fees zyada, output zero. Management sirf paisa dekhti hai. Campus mein fests bhi boring.',
'alumni', 2020, 1.6, 1, 1, 2, 1, 2, 2, 'circus', ARRAY['#PlacementScam', '#Avoid']
FROM colleges c WHERE c.short_name = 'CMR' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Degree lelo, skills YouTube se', 'Engineering kiya yahan, coding YouTube se seekhi, job LinkedIn se mili. College ka kya contribution? Attendance lena aur exam lena. Labs mein practical nahi hota. Professors syllabus bhi complete nahi karte. Waste of 4 years.',
'alumni', 2021, 1.4, 1, 1, 2, 1, 2, 2, 'paisa_barbaad', ARRAY['#Avoid', '#PlacementScam']
FROM colleges c WHERE c.short_name = 'CMR' LIMIT 1;

-- CVR Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Vastunagar ka vasool nahi hua', 'Location remote hai - Ibrahimpatnam. Placement cell exists on paper. Real jobs? Hunt karo khud. Faculty mein 2-3 acche hain, baaki timepass. Hostel food health hazard. WiFi speed se fast walking hoti hai. Regret hai admission liya.',
'alumni', 2021, 1.7, 2, 1, 2, 2, 2, 2, 'run_away', ARRAY['#Avoid', '#MessFood💀', '#WiFiDead']
FROM colleges c WHERE c.short_name = 'CVR' LIMIT 1;

-- MRCET Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'MR kya hai? Money Required', 'Fees badh gayi, quality gir gayi. Placements mein mass recruiters - TCS, Wipro 3.5 LPA. Product companies? Dream dekho bas. Infrastructure old hai. Faculty turnover high - har semester naye professors. Regret ki feeling daily.',
'alumni', 2020, 1.8, 2, 2, 2, 2, 2, 2, 'paisa_barbaad', ARRAY['#PlacementScam', '#Avoid']
FROM colleges c WHERE c.short_name = 'MRCET' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Expectations vs Reality = -100', 'Brochure mein jo dikhaate hain vs jo milta hai - zameen aasmaan ka farak. Lab equipment non-functional. Library mein books 90s ki. Canteen overpriced. Only positive - some seniors helped with placements guidance. College ne nahi, seniors ne.',
'current_student', 2022, 1.6, 1, 2, 2, 1, 2, 2, 'circus', ARRAY['#Avoid']
FROM colleges c WHERE c.short_name = 'MRCET' LIMIT 1;

-- MGIT Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Gandhi naam liya, gandhi nahi diya', 'Placement brochure mein 90%+ likha hai. Reality check karo - wo service-based companies count karte hain 3 LPA wali. Gandipet location toh acchi hai but college bekar. Faculty mostly absent rehti hai. Self-study only option.',
'alumni', 2021, 1.9, 2, 2, 2, 2, 2, 2, 'overrated', ARRAY['#PlacementScam']
FROM colleges c WHERE c.short_name = 'MGIT' LIMIT 1;

-- IARE Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Dundigal mein 4 saal jail', 'Campus Dundigal mein hai - literally middle of nowhere. Nearest restaurant 10km. Hostel compulsory hai. WiFi sirf naam ka. Placements mein struggle - khud se prepare karo. Management strict hai - feels like school, not college.',
'alumni', 2020, 2.0, 2, 2, 2, 2, 2, 2, 'run_away', ARRAY['#Avoid', '#WiFiDead']
FROM colleges c WHERE c.short_name = 'IARE' LIMIT 1;

INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Aerospace naam pe fraud', 'Aerospace engineering ka course hai but labs mein kuch nahi. Simulator 2005 ka hai. Industry connections zero. Placements mein IT companies hi aati hain - aerospace mein koi nahi. False advertising at its best.',
'current_student', 2022, 1.5, 1, 1, 2, 1, 2, 2, 'circus', ARRAY['#PlacementScam', '#Avoid']
FROM colleges c WHERE c.short_name = 'IARE' LIMIT 1;

-- Anurag Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Ghatkesar ki sabse badi mistake', 'Yahan aake realize hua ki acche college mein effort karna chahiye tha. Placements mein sirf service companies. Faculty ka syllabus bhi complete nahi hota. Labs mein equipment kaam nahi karta. Canteen expensive and bad quality.',
'alumni', 2021, 1.7, 2, 1, 2, 2, 2, 2, 'paisa_barbaad', ARRAY['#Avoid', '#PlacementScam']
FROM colleges c WHERE c.short_name = 'Anurag' LIMIT 1;

-- MLRIT Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'ML naam mein hai, Machine Learning padhai mein nahi', 'Dundigal mein ek aur college. Same story - fake placement stats, below average faculty, outdated curriculum. AI/ML course hai but professors ko bhi nahi aata. Infrastructure average. Only saving grace - some motivated batchmates.',
'alumni', 2020, 1.8, 2, 1, 2, 2, 2, 2, 'overrated', ARRAY['#Avoid', '#PlacementScam']
FROM colleges c WHERE c.short_name = 'MLRIT' LIMIT 1;

-- MREC Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Malla Reddy empire ka ek aur victim', 'Malla Reddy group ki colleges sab same hain - quantity over quality. Placements mein mass hiring companies. Faculty young but inexperienced. Labs exist on paper. Campus spread out hai but maintenance poor. Avoid if possible.',
'alumni', 2021, 1.6, 1, 2, 2, 2, 2, 2, 'circus', ARRAY['#Avoid', '#PlacementScam']
FROM colleges c WHERE c.short_name = 'MREC' LIMIT 1;

-- MRITS Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'IT naam mein hai, IT jobs nahi', 'Malla Reddy IT School but IT placements minimal. Mostly BPO aur support roles. Campus Hyderabad mein hai which is only plus. Faculty okay hai kuch. Management paisa focused. If you have better options, take them.',
'alumni', 2020, 2.0, 2, 2, 2, 2, 2, 2, 'mid_af', ARRAY['#Avoid']
FROM colleges c WHERE c.short_name = 'MRITS' LIMIT 1;

-- MRU Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'University naam diya, college level bhi nahi', 'Deemed university status hai but infrastructure college level bhi nahi. Multiple courses offer karte hain, koi bhi properly nahi padhate. Placements struggle hai. Fees university level, education below average.',
'alumni', 2021, 1.5, 1, 1, 2, 1, 2, 2, 'paisa_barbaad', ARRAY['#Avoid', '#PlacementScam']
FROM colleges c WHERE c.short_name = 'MRU' LIMIT 1;

-- MCET Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Medchal mein college, skills mein zero', 'Location door hai - Medchal. Transportation issue. College infrastructure basic. Placements mein mass recruiters - 3-3.5 LPA. Faculty mein mix hai. Overall, agar EAMCET rank acchi nahi aayi toh yahi option bach ta hai. Sad reality.',
'alumni', 2020, 1.9, 2, 2, 2, 2, 2, 2, 'mid_af', ARRAY['#Avoid']
FROM colleges c WHERE c.short_name = 'MCET' LIMIT 1;

-- GCET Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Government college, private problems', 'Government fees but government attitude. Placements almost zero. Infrastructure crumbling. Faculty mein government job mentality - no motivation. Only good for those preparing for GATE or government exams. Job seekers avoid.',
'alumni', 2021, 2.0, 2, 1, 2, 3, 2, 2, 'boring', ARRAY['#Avoid']
FROM colleges c WHERE c.short_name = 'GCET' LIMIT 1;

-- MRCP (Pharmacy) Reviews
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags)
SELECT c.id, '00000000-0000-0000-0000-000000000000'::uuid,
'Pharmacy padhne aaye, pharma mein job nahi', 'B.Pharm kiya yahan. Placements mein medical representatives ki jobs mostly. R&D roles? Very rare. Labs okay hain but practical exposure kam. Better to go to established pharmacy institutes if serious about career.',
'alumni', 2020, 2.2, 2, 2, 2, 2, 3, 2, 'mid_af', ARRAY['#Avoid']
FROM colleges c WHERE c.short_name = 'MRCP' LIMIT 1;
