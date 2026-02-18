-- Seed Reviews for Mumbai Colleges
-- Mumbai themes: Local train survival, Rent > Fees, "Sapne bade, room chota", Marine Drive therapy, Bollywood dreams, Hustle culture

-- =============================================
-- TIER 1 COLLEGES (Rating: 4-5 stars, Worth the Struggle)
-- =============================================

-- IIT Bombay (617d19bf-f4d1-4cd7-9347-a1fa631c31dc)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('617d19bf-f4d1-4cd7-9347-a1fa631c31dc', '00000000-0000-0000-0000-000000000000', 'IIT Bombay - where legends are made', 'Powai lake ke kinare padhai, Marine Drive pe stress relief. Placements 30-60 LPA normal hai. Campus life legendary - Mood Indigo, TechFest world famous. But pressure cooker hai, mental health ka dhyan rakhna.', 'alumni', 2020, 4.8, 5, 5, 5, 5, 3, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth', '#GoodVibes']),
('617d19bf-f4d1-4cd7-9347-a1fa631c31dc', '00000000-0000-0000-0000-000000000000', 'Best campus in a city', 'IIT-B campus is oasis in Mumbai chaos. Powai views, deer, lakes - sab hai. Academic pressure intense but facilities match. Alumni network unbeatable. Mumbai placements additional bonus.', 'current_student', 2022, 4.7, 5, 5, 5, 5, 3, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes', '#PlacementKing']),
('617d19bf-f4d1-4cd7-9347-a1fa631c31dc', '00000000-0000-0000-0000-000000000000', 'JEE suffering worth it', 'JEE ke 2 saal se zyada mushkil yahan 4 saal nahi lagte. Once you survive, youre set for life. Quant firms, Google, Microsoft - sab line mein rehte hain. Network priceless.', 'alumni', 2019, 4.9, 5, 5, 5, 5, 3, 4, 'nerd_paradise', ARRAY['#PlacementKing', '#Worth']),
('617d19bf-f4d1-4cd7-9347-a1fa631c31dc', '00000000-0000-0000-0000-000000000000', 'Mood Indigo memories', 'Fests here are unmatched. Celebrities aate hain, sponsors line mein hote hain. But academics bhi serious hai. Balance seekho - thats the IIT-B way.', 'current_student', 2021, 4.6, 5, 5, 5, 5, 3, 4, 'party_school', ARRAY['#NightLife', '#GoodVibes', '#Worth']),
('617d19bf-f4d1-4cd7-9347-a1fa631c31dc', '00000000-0000-0000-0000-000000000000', 'Research to riches', 'PhD or MTech here and youre sorted. Industry connections strong, research funding available. Professors globally recognized. Worth every struggle.', 'alumni', 2018, 4.8, 5, 5, 5, 5, 3, 4, 'nerd_paradise', ARRAY['#Worth', '#PlacementKing', '#Research']);

-- VJTI (a39f5b9a-b775-4335-a45a-97081e423408)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('a39f5b9a-b775-4335-a45a-97081e423408', '00000000-0000-0000-0000-000000000000', 'Mumbai ka government engineering pride', 'VJTI is OG. Matunga mein heritage campus, alumni everywhere. Placements 8-15 LPA, top ones 25+. Fees minimal, output maximum. Local train crowd mein VJTIians dhundh loge.', 'alumni', 2020, 4.3, 4, 4, 4, 5, 3, 4, 'actually_good', ARRAY['#Worth', '#PlacementKing', '#GoodVibes']),
('a39f5b9a-b775-4335-a45a-97081e423408', '00000000-0000-0000-0000-000000000000', 'Heritage meets placements', 'VJTI ka building hi inspire karta hai. 150 years ka legacy. Faculty experienced, placement record consistent. Mumbai location bonus - internships everywhere.', 'current_student', 2022, 4.2, 4, 4, 4, 5, 3, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes']),
('a39f5b9a-b775-4335-a45a-97081e423408', '00000000-0000-0000-0000-000000000000', 'Government college + Mumbai = Gold', 'Fees almost nothing, placements compete with private. Mumbai mein rehke engineering - better combination nahi milega. Dadar station 10 min.', 'alumni', 2019, 4.4, 4, 4, 4, 5, 3, 4, 'hidden_gem', ARRAY['#PlacementKing', '#Worth']),
('a39f5b9a-b775-4335-a45a-97081e423408', '00000000-0000-0000-0000-000000000000', 'VJ spirit never dies', 'College ho ya alumni meet - VJTI wale everywhere. Network strong, hiring referrals easy. Worth every local train journey.', 'current_student', 2021, 4.1, 4, 4, 4, 5, 3, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes']);

-- SPIT (04285828-8714-48e5-a964-f2d38b8d2b05)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('04285828-8714-48e5-a964-f2d38b8d2b05', '00000000-0000-0000-0000-000000000000', 'Andheri ka tech gem', 'SPIT in Andheri - central Mumbai location. Placements strong for private college. Faculty supportive, infrastructure good. Worth considering over tier 2 options.', 'alumni', 2020, 4.0, 4, 4, 4, 4, 3, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes', '#PlacementKing']),
('04285828-8714-48e5-a964-f2d38b8d2b05', '00000000-0000-0000-0000-000000000000', 'Coding culture growing', 'SPIT students are competitive. Placements in Amazon, Microsoft not rare. Campus compact but facilities good. Western line access easy.', 'current_student', 2022, 3.9, 4, 4, 4, 4, 3, 4, 'actually_good', ARRAY['#Worth', '#PlacementKing']),
('04285828-8714-48e5-a964-f2d38b8d2b05', '00000000-0000-0000-0000-000000000000', 'Private college done right', 'SPIT shows private colleges can deliver. Placements consistent, faculty care, labs updated. Mumbai central location is cherry on top.', 'alumni', 2019, 4.1, 4, 4, 4, 4, 3, 4, 'hidden_gem', ARRAY['#Worth', '#GoodVibes']);

-- ICT Mumbai (8e1731b0-50b0-4b44-9647-db169101186e)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('8e1731b0-50b0-4b44-9647-db169101186e', '00000000-0000-0000-0000-000000000000', 'Chemical engineering ka IIT', 'ICT (UDCT purana naam) is legendary for chemical. Placements 15-25 LPA, pharma companies fight for ICTians. Campus Matunga mein historic. Worth if chemical interest hai.', 'alumni', 2020, 4.4, 5, 5, 4, 5, 3, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth']),
('8e1731b0-50b0-4b44-9647-db169101186e', '00000000-0000-0000-0000-000000000000', 'Research excellence', 'ICT research output rivals IITs. Faculty world-class in chemical sciences. PhD here means global recognition. Government college perks.', 'current_student', 2022, 4.3, 5, 5, 4, 5, 3, 4, 'nerd_paradise', ARRAY['#Worth', '#Research']),
('8e1731b0-50b0-4b44-9647-db169101186e', '00000000-0000-0000-0000-000000000000', 'Pharma industry loves ICT', 'Every pharma company wants ICT grads. Placements easy, packages good. Campus life decent, Mumbai access excellent.', 'alumni', 2019, 4.5, 5, 5, 4, 5, 3, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth']);

-- NMIMS (8f8874a6-c3fb-49a3-b12f-15f22c97dca3)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('8f8874a6-c3fb-49a3-b12f-15f22c97dca3', '00000000-0000-0000-0000-000000000000', 'Mumbai ka private university king', 'NMIMS MBA is respected. Placements 15-25 LPA. Vile Parle campus in heart of Mumbai. Fees high but ROI positive. Network strong.', 'alumni', 2020, 4.2, 4, 4, 4, 3, 4, 4, 'actually_good', ARRAY['#PlacementKing', '#Worth', '#GoodVibes']),
('8f8874a6-c3fb-49a3-b12f-15f22c97dca3', '00000000-0000-0000-0000-000000000000', 'Multiple programs, consistent quality', 'NMIMS has MBA, engineering, pharmacy - all decent. Brand name helps. Mumbai location means internship opportunities endless.', 'current_student', 2022, 4.1, 4, 4, 4, 3, 4, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes']),
('8f8874a6-c3fb-49a3-b12f-15f22c97dca3', '00000000-0000-0000-0000-000000000000', 'MBA worth the investment', 'Fees heavy but placements deliver. Mumbai network access is bonus. Campus small but central. Good choice for serious MBA aspirants.', 'alumni', 2019, 4.0, 4, 4, 4, 3, 4, 4, 'actually_good', ARRAY['#PlacementKing', '#Worth']);

-- JBIMS (7e0b0894-e415-47ca-962b-b9980c28d10b)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('7e0b0894-e415-47ca-962b-b9980c28d10b', '00000000-0000-0000-0000-000000000000', 'MBA ka government gem', 'JBIMS fees almost nothing, placements match top 10 Bschools. Churchgate location iconic. Government college with private college outcomes.', 'alumni', 2020, 4.5, 4, 5, 4, 5, 4, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth', '#GoodVibes']),
('7e0b0894-e415-47ca-962b-b9980c28d10b', '00000000-0000-0000-0000-000000000000', 'ROI unbeatable', '15k fees, 15 LPA+ placements. Do the math. Peer group diverse - working professionals add value. Mumbai corporate world right outside.', 'current_student', 2022, 4.4, 4, 5, 4, 5, 4, 4, 'actually_good', ARRAY['#Worth', '#PlacementKing']),
('7e0b0894-e415-47ca-962b-b9980c28d10b', '00000000-0000-0000-0000-000000000000', 'Churchgate MBA dreams', 'Marine Drive ke paas MBA - life set. Alumni network legendary. Finance roles in Mumbai easy after JBIMS.', 'alumni', 2019, 4.6, 4, 5, 4, 5, 4, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth']);

-- Xaviers Mumbai (5045821e-4298-4b7f-b8cd-0fa8687ed80f)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('5045821e-4298-4b7f-b8cd-0fa8687ed80f', '00000000-0000-0000-0000-000000000000', 'Mumbai ki intellectual hub', 'Xaviers CST campus iconic. Arts, commerce legendary. Cultural festivals famous. Not for corporate placements but for overall development. Alumni include celebrities.', 'alumni', 2020, 4.3, 4, 3, 5, 5, 4, 4, 'party_school', ARRAY['#GoodVibes', '#NightLife', '#Worth']),
('5045821e-4298-4b7f-b8cd-0fa8687ed80f', '00000000-0000-0000-0000-000000000000', 'Bollywood dreams start here', 'Xaviers has produced actors, directors, journalists. If media/arts your goal, no better place. Campus vibe unmatched.', 'current_student', 2022, 4.2, 4, 3, 5, 5, 4, 4, 'party_school', ARRAY['#GoodVibes', '#Baddies']),
('5045821e-4298-4b7f-b8cd-0fa8687ed80f', '00000000-0000-0000-0000-000000000000', 'South Mumbai prestige', 'Xaviers name carries weight. CST area heritage feel. Even if career mein direct help nahi, personality development guaranteed.', 'alumni', 2019, 4.1, 4, 3, 5, 5, 4, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes']);

-- NM College (a1c879ff-4582-4112-9a88-cd0e847cca81)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('a1c879ff-4582-4112-9a88-cd0e847cca81', '00000000-0000-0000-0000-000000000000', 'Commerce powerhouse', 'NM College Vile Parle is CA factory. BCom here means foundation set. Campus small but network big. Alumni in finance everywhere.', 'alumni', 2020, 4.0, 4, 4, 4, 5, 4, 3, 'actually_good', ARRAY['#Worth', '#PlacementKing']),
('a1c879ff-4582-4112-9a88-cd0e847cca81', '00000000-0000-0000-0000-000000000000', 'CA aspirants paradise', 'NM + CA coaching = solid combo. Seniors help, faculty guide. Mumbai mein CA firms internship easy. Worth the effort.', 'current_student', 2022, 3.9, 4, 4, 4, 5, 4, 3, 'nerd_paradise', ARRAY['#Worth']),
('a1c879ff-4582-4112-9a88-cd0e847cca81', '00000000-0000-0000-0000-000000000000', 'Commerce foundation', 'If BCom plan hai, NM is solid. Western line accessible. Campus activities decent. Worth considering.', 'alumni', 2019, 4.1, 4, 4, 4, 5, 4, 3, 'hidden_gem', ARRAY['#Worth', '#GoodVibes']);

-- GLC Mumbai (0e50aa52-64cf-4697-aa9d-09179cb1d693)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('0e50aa52-64cf-4697-aa9d-09179cb1d693', '00000000-0000-0000-0000-000000000000', 'Government Law College legacy', 'GLC Churchgate is historic. Fees minimal, output maximum. Alumni in judiciary everywhere. Moot court culture strong.', 'alumni', 2020, 4.2, 4, 4, 4, 5, 4, 4, 'actually_good', ARRAY['#Worth', '#PlacementKing']),
('0e50aa52-64cf-4697-aa9d-09179cb1d693', '00000000-0000-0000-0000-000000000000', 'Marine Drive break between classes', 'GLC location is dream. Study law, destress at Marine Drive. Alumni network helps placements. Government college value unmatched.', 'current_student', 2022, 4.1, 4, 4, 4, 5, 4, 4, 'hidden_gem', ARRAY['#Worth', '#GoodVibes']),
('0e50aa52-64cf-4697-aa9d-09179cb1d693', '00000000-0000-0000-0000-000000000000', 'Law mein budget champion', 'Agar NLSIU nahi mila, GLC is amazing. Churchgate mein law degree - Mumbai courts right there. Practical exposure excellent.', 'alumni', 2019, 4.3, 4, 4, 4, 5, 4, 4, 'actually_good', ARRAY['#PlacementKing', '#Worth']);

-- GMC Mumbai (f9594c46-35cf-4c92-a225-de88ea0ab84e)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('f9594c46-35cf-4c92-a225-de88ea0ab84e', '00000000-0000-0000-0000-000000000000', 'KEM hospital training', 'Grant Medical College with KEM hospital - exposure unmatched. Cases variety you wont see anywhere. Government fees, world-class training.', 'alumni', 2019, 4.4, 5, 4, 3, 5, 3, 3, 'actually_good', ARRAY['#Worth', '#PlacementKing']),
('f9594c46-35cf-4c92-a225-de88ea0ab84e', '00000000-0000-0000-0000-000000000000', 'MBBS in Maximum City', 'Mumbai mein medical - cases unlimited. KEM mein surgical exposure legendary. Hostel tough but knowledge priceless.', 'current_student', 2021, 4.3, 5, 4, 3, 5, 3, 3, 'nerd_paradise', ARRAY['#Worth']),
('f9594c46-35cf-4c92-a225-de88ea0ab84e', '00000000-0000-0000-0000-000000000000', 'Medical legend status', 'GMC alumni are legends. Network helps throughout career. Mumbai practice opportunities abundant. Worth the NEET struggle.', 'alumni', 2018, 4.5, 5, 4, 3, 5, 3, 3, 'actually_good', ARRAY['#PlacementKing', '#Worth']);

-- =============================================
-- TIER 2 COLLEGES (Rating: 2.5-4 stars, Hustle to Survive)
-- =============================================

-- DJSCE (2522a8ce-b43f-4a57-83f4-930f7591db94)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('2522a8ce-b43f-4a57-83f4-930f7591db94', '00000000-0000-0000-0000-000000000000', 'DJ Sanghvi decent option', 'Vile Parle mein engineering. Placements improving, faculty okay. Not VJTI level but worth considering. Western line accessible.', 'alumni', 2020, 3.5, 3, 3, 4, 3, 3, 4, 'mid_af', ARRAY['#Worth', '#GoodVibes']),
('2522a8ce-b43f-4a57-83f4-930f7591db94', '00000000-0000-0000-0000-000000000000', 'Private college standard', 'Fees high but Mumbai location compensates. Placements mass companies mostly. Self-study for better outcomes.', 'current_student', 2022, 3.4, 3, 3, 4, 3, 3, 4, 'mid_af', ARRAY['#Worth']),
('2522a8ce-b43f-4a57-83f4-930f7591db94', '00000000-0000-0000-0000-000000000000', 'Mumbai engineering backup', 'If government colleges nahi mile, DJSCE works. Placements happen, internships easy in Mumbai. Just hustle needed.', 'alumni', 2019, 3.3, 3, 3, 4, 3, 3, 4, 'mid_af', ARRAY['#Worth']);

-- Somaiya (fc08d03f-0bd3-458a-9d4c-3b76ba568007)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('fc08d03f-0bd3-458a-9d4c-3b76ba568007', '00000000-0000-0000-0000-000000000000', 'Somaiya ecosystem', 'Vidyavihar campus has engineering, management, pharmacy - all under one roof. Placements decent, campus big. Worth exploring.', 'alumni', 2020, 3.6, 3, 3, 4, 3, 3, 4, 'mid_af', ARRAY['#Worth', '#GoodVibes']),
('fc08d03f-0bd3-458a-9d4c-3b76ba568007', '00000000-0000-0000-0000-000000000000', 'Multi-discipline campus', 'Somaiya gives university feel. Engineering okay, MBA decent. Central Mumbai location helps. Self-effort for placements needed.', 'current_student', 2022, 3.5, 3, 3, 4, 3, 3, 4, 'mid_af', ARRAY['#Worth']),
('fc08d03f-0bd3-458a-9d4c-3b76ba568007', '00000000-0000-0000-0000-000000000000', 'Vidyavihar advantage', 'Central line, Ghatkopar nearby. Campus decent, facilities okay. Not exceptional but reliable. Somaiya brand has recognition.', 'alumni', 2019, 3.4, 3, 3, 4, 3, 3, 4, 'mid_af', ARRAY['#Worth']);

-- TSEC (df911d63-4b5c-407d-b142-7ede0e22e197)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('df911d63-4b5c-407d-b142-7ede0e22e197', '00000000-0000-0000-0000-000000000000', 'Thadomal Bandra option', 'TSEC in Bandra - premium location. Placements average but location helps networking. Western suburbs accessible.', 'alumni', 2020, 3.4, 3, 3, 4, 3, 3, 4, 'mid_af', ARRAY['#Worth', '#GoodVibes']),
('df911d63-4b5c-407d-b142-7ede0e22e197', '00000000-0000-0000-0000-000000000000', 'Bandra perks', 'College okay, Bandra location is real asset. Internships, networking - all easy. Just need to hustle beyond curriculum.', 'current_student', 2022, 3.3, 3, 3, 4, 3, 3, 4, 'mid_af', ARRAY['#Worth']),
('df911d63-4b5c-407d-b142-7ede0e22e197', '00000000-0000-0000-0000-000000000000', 'Location > College', 'TSEC academics average but Bandra mein rehke contacts bante hain. Use location wisely for better career outcomes.', 'alumni', 2019, 3.2, 3, 3, 4, 3, 3, 4, 'mid_af', ARRAY['#GoodVibes']);

-- KC College (35c12914-54f6-45a9-88d2-0e6bb30ffd31)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('35c12914-54f6-45a9-88d2-0e6bb30ffd31', '00000000-0000-0000-0000-000000000000', 'Churchgate arts hub', 'KC College for arts and commerce. South Mumbai elite vibes. Cultural scene strong. Not for placements but personality building.', 'alumni', 2020, 3.5, 3, 3, 5, 4, 4, 4, 'party_school', ARRAY['#GoodVibes', '#NightLife']),
('35c12914-54f6-45a9-88d2-0e6bb30ffd31', '00000000-0000-0000-0000-000000000000', 'SoBo college life', 'KC gives that SoBo experience. Marine Drive walking distance. Cultural fests famous. Good for overall development.', 'current_student', 2022, 3.4, 3, 3, 5, 4, 4, 4, 'party_school', ARRAY['#GoodVibes']),
('35c12914-54f6-45a9-88d2-0e6bb30ffd31', '00000000-0000-0000-0000-000000000000', 'Heritage location premium', 'Old Mumbai college charm. Churchgate station steps away. Experience unique, career mein self-effort needed.', 'alumni', 2019, 3.3, 3, 3, 5, 4, 4, 4, 'party_school', ARRAY['#GoodVibes', '#NightLife']);

-- HR College (69f13c8f-ad43-423c-9d22-9f38fe874d8a)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('69f13c8f-ad43-423c-9d22-9f38fe874d8a', '00000000-0000-0000-0000-000000000000', 'Churchgate commerce', 'HR College decent for BCom. South Mumbai location helps. Cultural scene exists. CA prep alongside possible.', 'alumni', 2020, 3.3, 3, 3, 4, 4, 4, 3, 'mid_af', ARRAY['#Worth', '#GoodVibes']),
('69f13c8f-ad43-423c-9d22-9f38fe874d8a', '00000000-0000-0000-0000-000000000000', 'Commerce foundation', 'HR for commerce is okay. Faculty decent, facilities average. Mumbai advantages make up for gaps.', 'current_student', 2022, 3.2, 3, 3, 4, 4, 4, 3, 'mid_af', ARRAY['#Worth']);

-- Jai Hind (6fe9a729-13c6-48af-b5eb-0126704ba58e)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('6fe9a729-13c6-48af-b5eb-0126704ba58e', '00000000-0000-0000-0000-000000000000', 'Churchgate trio member', 'Jai Hind part of South Mumbai college scene. Arts and commerce focus. Cultural vibes strong. Career mein self-build needed.', 'alumni', 2020, 3.2, 3, 3, 4, 4, 4, 3, 'mid_af', ARRAY['#GoodVibes']),
('6fe9a729-13c6-48af-b5eb-0126704ba58e', '00000000-0000-0000-0000-000000000000', 'SoBo college experience', 'Location premium, education average. Make use of Mumbai connections. Self-networking important.', 'current_student', 2022, 3.1, 3, 3, 4, 4, 4, 3, 'mid_af', ARRAY['#GoodVibes']);

-- FRCRCE (311ddef4-e0d5-459f-9dff-619548944f7b)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('311ddef4-e0d5-459f-9dff-619548944f7b', '00000000-0000-0000-0000-000000000000', 'Bandra engineering', 'FR Crce in Bandra - location excellent. Engineering average but Mumbai perks available. Self-study essential.', 'alumni', 2020, 3.3, 3, 3, 4, 3, 3, 4, 'mid_af', ARRAY['#Worth']),
('311ddef4-e0d5-459f-9dff-619548944f7b', '00000000-0000-0000-0000-000000000000', 'Western suburbs option', 'If you want engineering in western Mumbai, FRCRCE works. Placements average, location saves.', 'current_student', 2022, 3.2, 3, 3, 4, 3, 3, 4, 'mid_af', ARRAY['#Worth']);

-- MPSTME (d3f328d9-39ab-4f5e-ad86-6055c91be760)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('d3f328d9-39ab-4f5e-ad86-6055c91be760', '00000000-0000-0000-0000-000000000000', 'NMIMS engineering wing', 'MPSTME part of NMIMS. Brand name helps. Placements decent for BTech. Vile Parle location accessible.', 'alumni', 2020, 3.4, 3, 3, 4, 3, 3, 4, 'mid_af', ARRAY['#Worth', '#GoodVibes']),
('d3f328d9-39ab-4f5e-ad86-6055c91be760', '00000000-0000-0000-0000-000000000000', 'NMIMS umbrella benefits', 'Being part of NMIMS ecosystem helps. Placements cross-pollinate sometimes. Worth if BTech with management flavor wanted.', 'current_student', 2022, 3.3, 3, 3, 4, 3, 3, 4, 'mid_af', ARRAY['#Worth']);

-- DJS (e747d9b0-ddb1-45bb-b1d5-96d547678e51)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('e747d9b0-ddb1-45bb-b1d5-96d547678e51', '00000000-0000-0000-0000-000000000000', 'Another DJ option', 'DJ Sanghvi group college. Quality similar to DJSCE. Western suburbs engineering option. Self-effort needed.', 'alumni', 2020, 3.2, 3, 3, 3, 3, 3, 4, 'mid_af', ARRAY['#Worth']),
('e747d9b0-ddb1-45bb-b1d5-96d547678e51', '00000000-0000-0000-0000-000000000000', 'Vile Parle engineering', 'Standard Mumbai private engineering. Nothing exceptional. Location helps, education average. Placements mass companies.', 'current_student', 2022, 3.1, 3, 3, 3, 3, 3, 4, 'mid_af', ARRAY['#Worth']);

-- =============================================
-- TIER 3 COLLEGES (Rating: 1-2.5 stars, BRUTAL)
-- =============================================

-- Rizvi (de3ea094-d3f4-460d-863b-699230423237)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('de3ea094-d3f4-460d-863b-699230423237', '00000000-0000-0000-0000-000000000000', 'Bandra mein but quality nahi', 'Rizvi ka location premium - Bandra mein. But education quality meh. Placements struggle real. Better options available in Mumbai.', 'alumni', 2020, 2.2, 2, 2, 3, 2, 3, 3, 'mid_af', ARRAY['#Avoid']),
('de3ea094-d3f4-460d-863b-699230423237', '00000000-0000-0000-0000-000000000000', 'Location cant save education', 'Yes Bandra mein hai. But faculty quality, infrastructure, placements - sab average. Self-study mandatory for decent career.', 'current_student', 2022, 2.1, 2, 2, 3, 2, 3, 3, 'mid_af', ARRAY['#Avoid']),
('de3ea094-d3f4-460d-863b-699230423237', '00000000-0000-0000-0000-000000000000', 'Premium location, basic education', 'Rizvi charges for location essentially. Education quality doesnt match. Consider other options in Mumbai.', 'alumni', 2019, 2.0, 2, 2, 3, 2, 3, 3, 'mid_af', ARRAY['#Avoid']),
('de3ea094-d3f4-460d-863b-699230423237', '00000000-0000-0000-0000-000000000000', 'Marketing > Substance', 'College markets well but delivers less. Placements fake numbers show. Faculty turnover high. Save yourself.', 'current_student', 2023, 1.9, 2, 2, 3, 2, 3, 3, 'paisa_barbaad', ARRAY['#Avoid', '#PlacementScam']);
