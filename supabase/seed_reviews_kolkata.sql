-- Seed Reviews for Kolkata Colleges
-- Kolkata themes: Culture capital, Food (roshogolla, fish), Intellectual vibes, Durga Puja, Victoria Memorial, Adda culture, Tram nostalgia

-- =============================================
-- TIER 1 COLLEGES (Rating: 4-5 stars, Intellectual Pride)
-- =============================================

-- IIT Kharagpur (ec4c3e33-60aa-4353-b92d-b94f22d35578)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('ec4c3e33-60aa-4353-b92d-b94f22d35578', '00000000-0000-0000-0000-000000000000', 'OG IIT, sabse bada campus', 'IIT KGP ka campus itna bada hai ki cycle mandatory. 2100 acres mein sab kuch hai - golf course bhi. Placements 20-40 LPA, top ones 1 Cr+. Kolkata se 120km door but worth it.', 'alumni', 2020, 4.7, 5, 5, 5, 5, 2, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth', '#GoodVibes']),
('ec4c3e33-60aa-4353-b92d-b94f22d35578', '00000000-0000-0000-0000-000000000000', 'IIT ka MIT', 'KGP is oldest and arguably best IIT for certain departments. Spring Fest legendary. Hostel life defines you. Far from city but campus is a city itself.', 'current_student', 2022, 4.6, 5, 5, 5, 5, 2, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes', '#PlacementKing']),
('ec4c3e33-60aa-4353-b92d-b94f22d35578', '00000000-0000-0000-0000-000000000000', 'Illumination aur placements', 'KGP Illumination during pujas is magical. But academics is real magic - research output top notch. Alumni network strongest among all IITs.', 'alumni', 2019, 4.8, 5, 5, 5, 5, 2, 4, 'nerd_paradise', ARRAY['#PlacementKing', '#Worth']),
('ec4c3e33-60aa-4353-b92d-b94f22d35578', '00000000-0000-0000-0000-000000000000', 'Campus se bahar nikalne ki zaroorat nahi', 'Everything inside campus - hospital, police station, schools, markets. Mini city hai. 5 years engineering nikalna mushkil but memories lifelong.', 'current_student', 2021, 4.5, 5, 5, 5, 5, 2, 4, 'party_school', ARRAY['#GoodVibes', '#Worth']),
('ec4c3e33-60aa-4353-b92d-b94f22d35578', '00000000-0000-0000-0000-000000000000', 'JEE mein rank acchi lao, KGP aao', 'Best infrastructure among IITs. Research facilities world-class. Startups emerging from here. Distance se mat daro, life set hogi.', 'alumni', 2020, 4.7, 5, 5, 5, 5, 2, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth']);

-- IIM Calcutta (18f26e9e-d830-47a8-8e2c-2ec7bb101dee)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('18f26e9e-d830-47a8-8e2c-2ec7bb101dee', '00000000-0000-0000-0000-000000000000', 'First IIM, still best for finance', 'IIM-C is finance heavyweight. Joka campus historic. Placements 25-40 LPA, finance roles even higher. Kolkata culture adds to experience.', 'alumni', 2020, 4.7, 5, 5, 4, 5, 3, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth', '#GoodVibes']),
('18f26e9e-d830-47a8-8e2c-2ec7bb101dee', '00000000-0000-0000-0000-000000000000', 'Case studies aur rosogolla', 'IIM-C workload is legendary. Sleep is myth here. But placements make it worth it. Kolkata food is bonus during breaks.', 'current_student', 2022, 4.6, 5, 5, 4, 5, 3, 4, 'nerd_paradise', ARRAY['#Worth', '#PlacementKing']),
('18f26e9e-d830-47a8-8e2c-2ec7bb101dee', '00000000-0000-0000-0000-000000000000', 'MBA ka IIT', 'IIM-C peer group is exceptional. Quant focus makes finance placements strong. Alumni network in banking, consulting unmatched.', 'alumni', 2019, 4.8, 5, 5, 4, 5, 3, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth']),
('18f26e9e-d830-47a8-8e2c-2ec7bb101dee', '00000000-0000-0000-0000-000000000000', 'CAT crack karo, life set karo', 'Joka mein 2 saal, life mein 40 saal sorted. Network priceless. Struggle real but ROI unbeatable.', 'current_student', 2021, 4.5, 5, 5, 4, 5, 3, 4, 'actually_good', ARRAY['#Worth', '#PlacementKing']);

-- ISI Kolkata (70545117-cf12-423a-a895-76717b3b70d8)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('70545117-cf12-423a-a895-76717b3b70d8', '00000000-0000-0000-0000-000000000000', 'Statistics ka temple', 'ISI is where statistics was shaped. Mahalanobis legacy. Research output globally recognized. Placements in quant, analytics insane.', 'alumni', 2020, 4.8, 5, 5, 4, 5, 2, 4, 'nerd_paradise', ARRAY['#PlacementKing', '#Worth', '#Research']),
('70545117-cf12-423a-a895-76717b3b70d8', '00000000-0000-0000-0000-000000000000', 'Data science pioneers', 'Before data science was cool, ISI was doing it. Faculty legends in their fields. Small batch means personal attention. Quant firms line up.', 'current_student', 2022, 4.7, 5, 5, 4, 5, 2, 4, 'nerd_paradise', ARRAY['#Worth', '#PlacementKing']),
('70545117-cf12-423a-a895-76717b3b70d8', '00000000-0000-0000-0000-000000000000', 'Hidden gem for math lovers', 'ISI entrance is tough but if you crack it, youre sorted. B.Stat, M.Stat graduates highly sought. Research career or industry - both options open.', 'alumni', 2019, 4.9, 5, 5, 4, 5, 2, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth']);

-- NUJS Kolkata (8bd9b929-20fb-43ca-82de-5d50d521d6dd)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('8bd9b929-20fb-43ca-82de-5d50d521d6dd', '00000000-0000-0000-0000-000000000000', 'NLU in City of Joy', 'NUJS is among top NLUs. Salt Lake campus decent. Kolkata culture adds to experience. Placements in top law firms consistent.', 'alumni', 2020, 4.4, 4, 4, 4, 4, 4, 3, 'actually_good', ARRAY['#Worth', '#PlacementKing', '#GoodVibes']),
('8bd9b929-20fb-43ca-82de-5d50d521d6dd', '00000000-0000-0000-0000-000000000000', 'Law school with soul', 'NUJS debates are intense. Moot court culture strong. Kolkata mein law school means High Court access easy. Worth the CLAT struggle.', 'current_student', 2022, 4.3, 4, 4, 4, 4, 4, 3, 'actually_good', ARRAY['#Worth', '#GoodVibes']),
('8bd9b929-20fb-43ca-82de-5d50d521d6dd', '00000000-0000-0000-0000-000000000000', 'East India ka best NLU', 'NUJS is clearly best law school in eastern India. Alumni network growing. Corporate law placements strong.', 'alumni', 2019, 4.5, 4, 4, 4, 4, 4, 3, 'hidden_gem', ARRAY['#PlacementKing', '#Worth']);

-- Jadavpur University (d9de4891-4cbb-44b0-aae5-dac62883d9f4)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('d9de4891-4cbb-44b0-aae5-dac62883d9f4', '00000000-0000-0000-0000-000000000000', 'Bengal ka pride', 'JU is more than a college - its an institution. Engineering and arts both strong. Fees nominal, output exceptional. Adda culture defines JU.', 'alumni', 2020, 4.5, 4, 4, 5, 5, 4, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes', '#PlacementKing']),
('d9de4891-4cbb-44b0-aae5-dac62883d9f4', '00000000-0000-0000-0000-000000000000', 'Government college done right', 'JU placements compete with top NITs. Campus vibe intellectual. Canteen mein chai aur debate - classic combo. Worth every WBJEE rank.', 'current_student', 2022, 4.4, 4, 4, 5, 5, 4, 4, 'party_school', ARRAY['#GoodVibes', '#Worth']),
('d9de4891-4cbb-44b0-aae5-dac62883d9f4', '00000000-0000-0000-0000-000000000000', 'Engineer aur intellectual dono', 'JU produces well-rounded individuals. Technical skills plus cultural awareness. Alumni in every field. Kolkata culture shapes you here.', 'alumni', 2019, 4.6, 4, 4, 5, 5, 4, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes']),
('d9de4891-4cbb-44b0-aae5-dac62883d9f4', '00000000-0000-0000-0000-000000000000', 'Durga Puja + exams = JU life', 'JU during pujas is different experience. Pandal hopping mandatory. But academics serious. Balance seekho yahan.', 'current_student', 2021, 4.3, 4, 4, 5, 5, 4, 4, 'party_school', ARRAY['#NightLife', '#GoodVibes']);

-- Presidency University (e9a44525-3e5c-4a5f-8c98-e8eba3461c6a)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('e9a44525-3e5c-4a5f-8c98-e8eba3461c6a', '00000000-0000-0000-0000-000000000000', 'Intellectual capital of Bengal', 'Presidency has produced Nobel laureates, Prime Ministers. College Street location iconic. Not for placements but for pure academics and research.', 'alumni', 2020, 4.4, 5, 3, 5, 5, 4, 4, 'nerd_paradise', ARRAY['#Worth', '#GoodVibes']),
('e9a44525-3e5c-4a5f-8c98-e8eba3461c6a', '00000000-0000-0000-0000-000000000000', 'Where legends studied', 'Subhas Chandra Bose, Satyajit Ray - alumni list is insane. Heritage building, intellectual discussions. If academia is goal, Presidency is it.', 'current_student', 2022, 4.3, 5, 3, 5, 5, 4, 4, 'nerd_paradise', ARRAY['#GoodVibes']),
('e9a44525-3e5c-4a5f-8c98-e8eba3461c6a', '00000000-0000-0000-0000-000000000000', 'Not for job seekers', 'Presidency is for researchers, civil servants, academicians. Corporate placements not focus. Know what youre getting into.', 'alumni', 2019, 4.5, 5, 3, 5, 5, 4, 4, 'nerd_paradise', ARRAY['#Worth']);

-- IIEST Shibpur (91249bab-72a2-4620-ac05-4bb1f14a2579)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('91249bab-72a2-4620-ac05-4bb1f14a2579', '00000000-0000-0000-0000-000000000000', 'Formerly BE College, forever legacy', 'IIEST (BE College) is Asias first technical institution. Heritage campus at Howrah. Placements improving after IIEST status. Worth considering.', 'alumni', 2020, 4.2, 4, 4, 4, 5, 3, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes', '#PlacementKing']),
('91249bab-72a2-4620-ac05-4bb1f14a2579', '00000000-0000-0000-0000-000000000000', 'History meets modernity', 'BE College ka campus historic. After becoming IIEST, funding improved. Placements 8-15 LPA now. Growing reputation.', 'current_student', 2022, 4.1, 4, 4, 4, 5, 3, 4, 'hidden_gem', ARRAY['#Worth', '#GoodVibes']),
('91249bab-72a2-4620-ac05-4bb1f14a2579', '00000000-0000-0000-0000-000000000000', 'Institute of National Importance now', 'IIEST tag helped. Fees still low, placements better. Howrah location accessible. Worth for government engineering aspirants.', 'alumni', 2019, 4.3, 4, 4, 4, 5, 3, 4, 'actually_good', ARRAY['#PlacementKing', '#Worth']);

-- St. Xaviers Kolkata (e4315c43-ce15-4d28-ac9b-9ae180dd8f93)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('e4315c43-ce15-4d28-ac9b-9ae180dd8f93', '00000000-0000-0000-0000-000000000000', 'Park Street prestige', 'Xaviers Kolkata at Park Street - prime location. Arts and science strong. Cultural capital of Kolkata colleges. Xavotsav legendary.', 'alumni', 2020, 4.3, 4, 3, 5, 5, 4, 4, 'party_school', ARRAY['#GoodVibes', '#NightLife', '#Worth']),
('e4315c43-ce15-4d28-ac9b-9ae180dd8f93', '00000000-0000-0000-0000-000000000000', 'Kolkata elite vibes', 'Xaviers has that old money charm. Alumni include industrialists, artists. Not for corporate placements but for all-round development.', 'current_student', 2022, 4.2, 4, 3, 5, 5, 4, 4, 'party_school', ARRAY['#GoodVibes', '#RichKids']),
('e4315c43-ce15-4d28-ac9b-9ae180dd8f93', '00000000-0000-0000-0000-000000000000', 'Heritage and culture', 'Xaviers building itself is heritage. Park Street access means food and fun. Academics solid for further studies.', 'alumni', 2019, 4.4, 4, 3, 5, 5, 4, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes']);

-- Calcutta University (3456c373-e553-4b48-9586-5d769aaccc41)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('3456c373-e553-4b48-9586-5d769aaccc41', '00000000-0000-0000-0000-000000000000', 'First modern university of Asia', 'CU has historic significance. Multiple campuses, varied quality. Research departments strong. Not for placements but academics solid.', 'alumni', 2020, 3.8, 4, 3, 4, 5, 4, 4, 'hidden_gem', ARRAY['#Worth', '#GoodVibes']),
('3456c373-e553-4b48-9586-5d769aaccc41', '00000000-0000-0000-0000-000000000000', 'Parent university legacy', 'CU affiliated colleges many. Main campus for PG and research. CSIR, NET prep culture strong. Worth for academic careers.', 'current_student', 2022, 3.7, 4, 3, 4, 5, 4, 4, 'nerd_paradise', ARRAY['#Worth']);

-- =============================================
-- TIER 2 COLLEGES (Rating: 2.5-4 stars, Mixed Experience)
-- =============================================

-- Heritage Institute (c8e1d002-ce15-4c3c-bc91-fc8c1f60f796)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('c8e1d002-ce15-4c3c-bc91-fc8c1f60f796', '00000000-0000-0000-0000-000000000000', 'Private engineering in Kolkata', 'HIT is among better private options in Bengal. Placements decent for state. Anandapur campus accessible. Worth if JU/IIEST nahi mila.', 'alumni', 2020, 3.4, 3, 3, 3, 3, 3, 4, 'mid_af', ARRAY['#Worth', '#GoodVibes']),
('c8e1d002-ce15-4c3c-bc91-fc8c1f60f796', '00000000-0000-0000-0000-000000000000', 'Better than most private', 'HIT above average for Bengal private colleges. Faculty okay, placements improving. Self-effort needed but platform exists.', 'current_student', 2022, 3.3, 3, 3, 3, 3, 3, 4, 'mid_af', ARRAY['#Worth']),
('c8e1d002-ce15-4c3c-bc91-fc8c1f60f796', '00000000-0000-0000-0000-000000000000', 'Kolkata private option', 'If government nahi mila, HIT acceptable. Placements mass companies but consistent. Infrastructure decent.', 'alumni', 2019, 3.2, 3, 3, 3, 3, 3, 4, 'mid_af', ARRAY['#Worth']);

-- IEM (38431195-0194-4b78-8f8a-bc0e79609c01)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('38431195-0194-4b78-8f8a-bc0e79609c01', '00000000-0000-0000-0000-000000000000', 'Salt Lake engineering', 'IEM in Salt Lake, IT hub nearby. Placements average but improving. New campus good. Worth considering.', 'alumni', 2020, 3.3, 3, 3, 3, 3, 3, 4, 'mid_af', ARRAY['#Worth']),
('38431195-0194-4b78-8f8a-bc0e79609c01', '00000000-0000-0000-0000-000000000000', 'Private college standard', 'IEM is typical private college. Self-study mandatory. Placements happen if you prepare. Location convenient.', 'current_student', 2022, 3.2, 3, 3, 3, 3, 3, 4, 'mid_af', ARRAY['#Worth']),
('38431195-0194-4b78-8f8a-bc0e79609c01', '00000000-0000-0000-0000-000000000000', 'Salt Lake proximity helps', 'IT companies nearby means internship easy. College itself average. Use location wisely.', 'alumni', 2019, 3.1, 3, 3, 3, 3, 3, 4, 'mid_af', ARRAY['#Worth']);

-- MAKAUT (a4864b26-44e8-4361-8718-185061b020a6)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('a4864b26-44e8-4361-8718-185061b020a6', '00000000-0000-0000-0000-000000000000', 'Bengal technical university', 'MAKAUT (formerly WBUT) affiliates most Bengal engineering colleges. Quality varies by college. Research at main campus okay.', 'alumni', 2020, 3.0, 3, 2, 3, 4, 3, 3, 'mid_af', ARRAY['#Worth']),
('a4864b26-44e8-4361-8718-185061b020a6', '00000000-0000-0000-0000-000000000000', 'State university basics', 'MAKAUT for PG and research. Industry placements not focus. GATE/NET prep environment exists.', 'current_student', 2022, 2.9, 3, 2, 3, 4, 3, 3, 'mid_af', ARRAY['#Worth']);

-- =============================================
-- TIER 3 COLLEGES (Rating: 1-2.5 stars, BRUTAL)
-- =============================================

-- Techno India (90c26354-3bfc-4249-8730-826e56c8d251)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('90c26354-3bfc-4249-8730-826e56c8d251', '00000000-0000-0000-0000-000000000000', 'Techno group ka jhol', 'Techno India multiple campuses hain - quality varies wildly. Salt Lake one okay-ish, others avoid. Placements fake numbers show karte hain.', 'alumni', 2020, 2.0, 2, 2, 2, 2, 3, 3, 'paisa_barbaad', ARRAY['#Avoid', '#PlacementScam']),
('90c26354-3bfc-4249-8730-826e56c8d251', '00000000-0000-0000-0000-000000000000', 'Marketing se dhoka', 'Ads mein world class dikhate hain. Reality - faculty turnover high, labs outdated, placements struggle. Better options in Kolkata.', 'current_student', 2022, 1.9, 2, 2, 2, 2, 3, 3, 'paisa_barbaad', ARRAY['#Avoid']),
('90c26354-3bfc-4249-8730-826e56c8d251', '00000000-0000-0000-0000-000000000000', 'Self study karke nikal lo', 'If stuck in Techno, self-study is only option. College placement cell wont help much. Online courses better investment.', 'alumni', 2019, 1.8, 2, 2, 2, 2, 3, 3, 'paisa_barbaad', ARRAY['#Avoid', '#PlacementScam']);

-- NIT Kolkata - Note: This seems misplaced as Tier 3, but following data
-- Actually this might be a data issue - NIT should be Tier 1/2. Will write neutral reviews.
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('1cff769f-54ee-4263-9f19-0df0f9bd439c', '00000000-0000-0000-0000-000000000000', 'New NIT, growing', 'NIT establishment in Kolkata is recent. Growing institution, building reputation. Give it time to establish.', 'alumni', 2020, 3.0, 3, 3, 3, 4, 3, 3, 'mid_af', ARRAY['#Worth']),
('1cff769f-54ee-4263-9f19-0df0f9bd439c', '00000000-0000-0000-0000-000000000000', 'NIT tag with new campus', 'Being NIT helps. Campus developing. Faculty recruitment ongoing. Potential is there, execution in progress.', 'current_student', 2022, 2.9, 3, 3, 3, 4, 3, 3, 'hidden_gem', ARRAY['#Worth']),
('1cff769f-54ee-4263-9f19-0df0f9bd439c', '00000000-0000-0000-0000-000000000000', 'Wait and watch', 'New NIT so early to judge. Infrastructure developing. JEE rank wale can consider if branch good.', 'alumni', 2019, 3.1, 3, 3, 3, 4, 3, 3, 'mid_af', ARRAY['#Worth']);

-- TMSL (25e50bf5-e2a9-4df0-b2c6-ffa789a534bb)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('25e50bf5-e2a9-4df0-b2c6-ffa789a534bb', '00000000-0000-0000-0000-000000000000', 'Techno Management affiliated', 'TMSL is Techno group management school. Similar issues - marketing vs reality gap. Placements not matching claims.', 'alumni', 2020, 2.1, 2, 2, 2, 2, 3, 3, 'paisa_barbaad', ARRAY['#Avoid']),
('25e50bf5-e2a9-4df0-b2c6-ffa789a534bb', '00000000-0000-0000-0000-000000000000', 'Management degree mill', 'TMSL gives degree, placement struggle yours. Better MBA options in Kolkata exist. Self-research before joining.', 'current_student', 2022, 2.0, 2, 2, 2, 2, 3, 3, 'paisa_barbaad', ARRAY['#Avoid']),
('25e50bf5-e2a9-4df0-b2c6-ffa789a534bb', '00000000-0000-0000-0000-000000000000', 'Consider alternatives', 'IIM-C nahi mila toh other options dekho - XIMB, XLRI better than TMSL. Dont settle for mediocrity.', 'alumni', 2019, 1.9, 2, 2, 2, 2, 3, 3, 'paisa_barbaad', ARRAY['#Avoid']);
