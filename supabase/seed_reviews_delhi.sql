-- Seed Reviews for Delhi Colleges
-- Delhi themes: North vs South campus, DU cutoff trauma, Metro crowd, Winter fog bunking, Momos > Everything, Competition ego

-- =============================================
-- TIER 1 COLLEGES (Rating: 4-5 stars, Proud but Competitive)
-- =============================================

-- IIT Delhi (441199f4-ad52-497e-8c2e-d6115e3d6ccd)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('441199f4-ad52-497e-8c2e-d6115e3d6ccd', '00000000-0000-0000-0000-000000000000', 'IIT-D mein life set hai', 'Hauz Khas mein campus, Delhi metro se connected. Placements 30-50 LPA normal. Startup culture strong - many founders from here. Campus compact but quality dense. Winter mein fog = bunking.', 'alumni', 2020, 4.7, 5, 5, 4, 5, 3, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth', '#GoodVibes']),
('441199f4-ad52-497e-8c2e-d6115e3d6ccd', '00000000-0000-0000-0000-000000000000', 'Delhi advantage with IIT tag', 'IIT-D gives you Delhi NCR access + IIT brand. Internships easy, startups nearby, alumni network everywhere. Metro connectivity excellent. Only con - Delhi pollution.', 'current_student', 2022, 4.6, 5, 5, 4, 5, 3, 4, 'actually_good', ARRAY['#Worth', '#PlacementKing']),
('441199f4-ad52-497e-8c2e-d6115e3d6ccd', '00000000-0000-0000-0000-000000000000', 'Startup capital of IITs', 'IIT-D produces founders like no other IIT. Ecosystem is there - investors, mentors, peers who understand. Placements mein consulting, quant sab aate hain.', 'alumni', 2019, 4.8, 5, 5, 4, 5, 3, 4, 'nerd_paradise', ARRAY['#PlacementKing', '#Worth']),
('441199f4-ad52-497e-8c2e-d6115e3d6ccd', '00000000-0000-0000-0000-000000000000', 'Rendezvous to placements', 'Campus fests are good, Rendezvous famous. But competition bhi intense - everyone is topper. Mental health awareness growing but pressure real.', 'current_student', 2021, 4.5, 5, 5, 4, 5, 3, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes']),
('441199f4-ad52-497e-8c2e-d6115e3d6ccd', '00000000-0000-0000-0000-000000000000', 'Best IIT for corporate placements', 'Delhi location means finance, consulting recruiters prefer IIT-D. Campus compact but Hauz Khas Village nearby for breaks. Worth the JEE struggle.', 'alumni', 2020, 4.7, 5, 5, 4, 5, 3, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth', '#NightLife']);

-- IIIT Delhi (e6c6d43b-0dc2-4f7c-9b71-c9397bb4e761)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('e6c6d43b-0dc2-4f7c-9b71-c9397bb4e761', '00000000-0000-0000-0000-000000000000', 'CS ka powerhouse', 'IIIT-D is pure CS focused. Okhla campus new but growing. Placements rival IITs - 20-30 LPA common. Faculty active in research. Worth if CS is your goal.', 'alumni', 2020, 4.4, 5, 5, 3, 4, 2, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth']),
('e6c6d43b-0dc2-4f7c-9b71-c9397bb4e761', '00000000-0000-0000-0000-000000000000', 'Coding culture intense', 'Everyone codes here. Competitive programming, open source, projects - sab hota hai. Campus small but focused. Placements Amazon, Google - regular.', 'current_student', 2022, 4.3, 5, 5, 3, 4, 2, 4, 'nerd_paradise', ARRAY['#Worth', '#PlacementKing']),
('e6c6d43b-0dc2-4f7c-9b71-c9397bb4e761', '00000000-0000-0000-0000-000000000000', 'Better than most NITs', 'IIIT-D placements beat many NITs. State university hai but quality IIT level. Delhi location helps networking. Research opportunities good.', 'alumni', 2019, 4.5, 5, 5, 3, 4, 2, 4, 'hidden_gem', ARRAY['#PlacementKing', '#Worth']),
('e6c6d43b-0dc2-4f7c-9b71-c9397bb4e761', '00000000-0000-0000-0000-000000000000', 'CS mein career set', 'If pure CS interest hai, IIIT-D > many IITs for curriculum relevance. Industry connections strong. Internships easy in Delhi NCR.', 'current_student', 2021, 4.2, 5, 5, 3, 4, 2, 4, 'nerd_paradise', ARRAY['#Worth', '#PlacementKing']);

-- JNU (7d53a33e-439a-4db0-a160-f7afd52cf329)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('7d53a33e-439a-4db0-a160-f7afd52cf329', '00000000-0000-0000-0000-000000000000', 'Intellectual capital of India', 'JNU is not for corporate jobs. Its for thinkers, researchers, activists. Campus is forest, discussions are fire. Fees nominal, education priceless. Not everyones cup of tea.', 'alumni', 2020, 4.3, 5, 2, 5, 5, 4, 4, 'nerd_paradise', ARRAY['#GoodVibes', '#Worth']),
('7d53a33e-439a-4db0-a160-f7afd52cf329', '00000000-0000-0000-0000-000000000000', 'Research aur debate', 'JNU mein adda culture legendary. Hostel mein 3 AM debates on politics, philosophy. PhD here is respected globally. Just dont expect placements - thats not the point.', 'current_student', 2022, 4.2, 5, 2, 5, 5, 4, 4, 'nerd_paradise', ARRAY['#GoodVibes']),
('7d53a33e-439a-4db0-a160-f7afd52cf329', '00000000-0000-0000-0000-000000000000', 'Not for everyone', 'JNU suits specific personality. If you want corporate career, wrong choice. If you want academic career, research, civil services - best choice.', 'alumni', 2019, 4.4, 5, 2, 5, 5, 4, 4, 'hidden_gem', ARRAY['#Worth', '#GoodVibes']);

-- SRCC (ddd9afc1-37f0-4f9d-bf10-e720d53ba70e)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('ddd9afc1-37f0-4f9d-bf10-e720d53ba70e', '00000000-0000-0000-0000-000000000000', 'Commerce ka IIT', 'SRCC 99% cutoff matlab kuch toh hai. Placements 10-15 LPA for BCom grads. Network legendary - alumni in finance everywhere. North campus DU pride.', 'alumni', 2020, 4.5, 4, 5, 5, 5, 4, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth', '#GoodVibes']),
('ddd9afc1-37f0-4f9d-bf10-e720d53ba70e', '00000000-0000-0000-0000-000000000000', 'Crossroads fest aur placements', 'SRCC ka cultural scene lit hai. But academics bhi top. Investment banking, consulting - sab recruit karte hain. Worth the 12th board struggle.', 'current_student', 2022, 4.4, 4, 5, 5, 5, 4, 4, 'party_school', ARRAY['#NightLife', '#PlacementKing']),
('ddd9afc1-37f0-4f9d-bf10-e720d53ba70e', '00000000-0000-0000-0000-000000000000', 'Network is everything', 'SRCC alumni help blindly. One message on LinkedIn and doors open. Campus small but memories big. Hudson Cafe mein padhai aur pyaar dono.', 'alumni', 2019, 4.6, 4, 5, 5, 5, 4, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes', '#PlacementKing']);

-- LSR (f1f009e2-236a-448c-ab8e-db96de115eb5)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('f1f009e2-236a-448c-ab8e-db96de115eb5', '00000000-0000-0000-0000-000000000000', 'Women empowerment HQ', 'LSR produces leaders. All women college but confidence alag level. Placements corporate aur NGO dono mein strong. South campus pride.', 'alumni', 2020, 4.4, 4, 4, 5, 5, 5, 0, 'actually_good', ARRAY['#Baddies', '#Worth', '#GoodVibes']),
('f1f009e2-236a-448c-ab8e-db96de115eb5', '00000000-0000-0000-0000-000000000000', 'Safe space for growth', 'LSR environment nurturing hai. Faculty supportive, peers ambitious. Lajpat Nagar markets nearby for breaks. Tarang fest famous.', 'current_student', 2022, 4.3, 4, 4, 5, 5, 5, 0, 'actually_good', ARRAY['#Baddies', '#GoodVibes']),
('f1f009e2-236a-448c-ab8e-db96de115eb5', '00000000-0000-0000-0000-000000000000', 'DU mein best women college', 'Miranda close competition but LSR slightly ahead. Both amazing choices. Campus life vibrant, academics strong.', 'alumni', 2019, 4.5, 4, 4, 5, 5, 5, 0, 'actually_good', ARRAY['#Worth', '#Baddies']);

-- Miranda (c741029c-ce95-425b-91f7-0cba92b1ed80)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('c741029c-ce95-425b-91f7-0cba92b1ed80', '00000000-0000-0000-0000-000000000000', 'North campus queen', 'Miranda House is DU legend. Heritage, culture, academics - sab top. All women college with strong alumni. Fests are famous across Delhi.', 'alumni', 2020, 4.4, 4, 4, 5, 5, 5, 0, 'actually_good', ARRAY['#Baddies', '#GoodVibes', '#Worth']),
('c741029c-ce95-425b-91f7-0cba92b1ed80', '00000000-0000-0000-0000-000000000000', 'Heritage building, modern thinking', 'Miranda ka building itself inspires. Faculty legendary, seniors helpful. North campus cafe culture nearby. Best DU experience.', 'current_student', 2022, 4.3, 4, 4, 5, 5, 5, 0, 'party_school', ARRAY['#GoodVibes', '#Baddies']),
('c741029c-ce95-425b-91f7-0cba92b1ed80', '00000000-0000-0000-0000-000000000000', 'DU cutoff worth it', 'High cutoff but justified. Quality education, amazing campus life, strong network. Tempest fest brings all Delhi together.', 'alumni', 2019, 4.5, 4, 4, 5, 5, 5, 0, 'actually_good', ARRAY['#Worth', '#Baddies', '#GoodVibes']);

-- St. Stephens (60d1b07b-5d4a-4cc7-a4b1-2ca12effd8ac)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('60d1b07b-5d4a-4cc7-a4b1-2ca12effd8ac', '00000000-0000-0000-0000-000000000000', 'Elite of the elite', 'St. Stephens is DU royalty. Interview se admission, not just marks. Campus has different vibe - intellectual, cultured. Alumni include ministers, diplomats.', 'alumni', 2020, 4.5, 5, 4, 5, 5, 4, 4, 'actually_good', ARRAY['#RichKids', '#Worth', '#GoodVibes']),
('60d1b07b-5d4a-4cc7-a4b1-2ca12effd8ac', '00000000-0000-0000-0000-000000000000', 'Heritage college vibes', 'Walking in Stephens campus feels different. History everywhere. Academics rigorous, peers ambitious. Not for everyone but if you fit, best experience.', 'current_student', 2022, 4.4, 5, 4, 5, 5, 4, 4, 'nerd_paradise', ARRAY['#GoodVibes', '#Worth']),
('60d1b07b-5d4a-4cc7-a4b1-2ca12effd8ac', '00000000-0000-0000-0000-000000000000', 'Civil services factory', 'Stephens produces IAS/IFS officers regularly. Debating culture strong. If administration career goal, perfect choice.', 'alumni', 2019, 4.6, 5, 4, 5, 5, 4, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes']);

-- Hindu College (d78e437a-c647-44bc-a926-22d6b4c89b8b)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('d78e437a-c647-44bc-a926-22d6b4c89b8b', '00000000-0000-0000-0000-000000000000', 'DU ka all-rounder', 'Hindu College balances academics and culture perfectly. Mecca fest legendary. Both boys and girls - diverse environment. North campus life at its best.', 'alumni', 2020, 4.3, 4, 4, 5, 5, 4, 4, 'party_school', ARRAY['#GoodVibes', '#NightLife', '#Worth']),
('d78e437a-c647-44bc-a926-22d6b4c89b8b', '00000000-0000-0000-0000-000000000000', 'Mecca aur chai', 'Hindu mein fest culture next level. But academics bhi solid. Faculty experienced, peer group competitive. Worth every percentage point in cutoff.', 'current_student', 2022, 4.2, 4, 4, 5, 5, 4, 4, 'party_school', ARRAY['#NightLife', '#GoodVibes']),
('d78e437a-c647-44bc-a926-22d6b4c89b8b', '00000000-0000-0000-0000-000000000000', 'Complete college experience', 'Hindu gives you DU experience in totality - studies, fests, debates, drama, romance. Kamla Nagar mein golgappe included.', 'alumni', 2019, 4.4, 4, 4, 5, 5, 4, 4, 'party_school', ARRAY['#Worth', '#GoodVibes', '#NightLife']);

-- Hansraj (6392640c-4dd2-4a73-8fc4-9d32f9d7b3e6)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('6392640c-4dd2-4a73-8fc4-9d32f9d7b3e6', '00000000-0000-0000-0000-000000000000', 'Science ka stronghold', 'Hansraj for science is solid. Physics, Chemistry departments strong. Campus green, location prime. Johnnie Walker fest famous.', 'alumni', 2020, 4.1, 4, 3, 4, 5, 3, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes']),
('6392640c-4dd2-4a73-8fc4-9d32f9d7b3e6', '00000000-0000-0000-0000-000000000000', 'North campus academics', 'Hansraj academics underrated. Research opportunities good. Campus life exists, fests are decent. Worth for serious science students.', 'current_student', 2022, 4.0, 4, 3, 4, 5, 3, 4, 'nerd_paradise', ARRAY['#Worth']),
('6392640c-4dd2-4a73-8fc4-9d32f9d7b3e6', '00000000-0000-0000-0000-000000000000', 'DU science at its best', 'If BSc plan hai, Hansraj excellent choice. CSIR, GATE prep culture strong. Alumni in research positions worldwide.', 'alumni', 2019, 4.2, 4, 3, 4, 5, 3, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes']);

-- AIIMS Delhi (5d4138f9-98ae-4674-becb-942e4445e158)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('5d4138f9-98ae-4674-becb-942e4445e158', '00000000-0000-0000-0000-000000000000', 'Medical ka Mount Everest', 'AIIMS Delhi is THE medical college. Free education, world-class exposure. Cases complexity you wont see anywhere. Struggle real but outcome legendary.', 'alumni', 2019, 4.9, 5, 5, 4, 5, 3, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth']),
('5d4138f9-98ae-4674-becb-942e4445e158', '00000000-0000-0000-0000-000000000000', 'NEET struggle worth it', 'AIIMS Delhi mein admission = life set. Clinical exposure unmatched, faculty legends, peers all toppers. Just survive the workload.', 'current_student', 2021, 4.8, 5, 5, 4, 5, 3, 4, 'nerd_paradise', ARRAY['#Worth', '#PlacementKing']),
('5d4138f9-98ae-4674-becb-942e4445e158', '00000000-0000-0000-0000-000000000000', 'Doctor banna hai toh AIIMS', 'No comparison exists. Free education, stipend, best training. Campus life tough but alumni network priceless. Medicine ka IIT.', 'alumni', 2018, 4.9, 5, 5, 4, 5, 3, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth']);

-- FMS Delhi (4714b965-13a2-4e83-b8d0-1507334726c7)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('4714b965-13a2-4e83-b8d0-1507334726c7', '00000000-0000-0000-0000-000000000000', 'MBA ka ROI king', 'FMS fees 2 lakh, placements 25 lakh. Do the math. DU campus, Delhi location. Best value MBA in India, hands down.', 'alumni', 2020, 4.7, 4, 5, 4, 5, 4, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth', '#GoodVibes']),
('4714b965-13a2-4e83-b8d0-1507334726c7', '00000000-0000-0000-0000-000000000000', 'Government MBA excellence', 'FMS proves government institutions can deliver. Peer group diverse - working professionals add value. Campus small but network huge.', 'current_student', 2022, 4.6, 4, 5, 4, 5, 4, 4, 'actually_good', ARRAY['#Worth', '#PlacementKing']),
('4714b965-13a2-4e83-b8d0-1507334726c7', '00000000-0000-0000-0000-000000000000', 'CAT worth it for FMS', 'FMS competes with IIMs on placements. Delhi location means finance, consulting right there. Alumni help generously.', 'alumni', 2019, 4.8, 4, 5, 4, 5, 4, 4, 'placement_king', ARRAY['#PlacementKing', '#Worth']);

-- NLU Delhi (9be4044f-9f66-453a-803a-516616863def)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('9be4044f-9f66-453a-803a-516616863def', '00000000-0000-0000-0000-000000000000', 'Delhi mein law school', 'NLU Delhi Dwarka campus new but growing. Delhi location advantage over other NLUs. Placements in top law firms. Rising fast.', 'alumni', 2020, 4.2, 4, 4, 4, 4, 4, 3, 'actually_good', ARRAY['#Worth', '#PlacementKing']),
('9be4044f-9f66-453a-803a-516616863def', '00000000-0000-0000-0000-000000000000', 'Capital city law school', 'Being in Delhi means Supreme Court, High Court accessible. Internships easy, moot courts frequent. Faculty experienced.', 'current_student', 2022, 4.1, 4, 4, 4, 4, 4, 3, 'hidden_gem', ARRAY['#Worth', '#GoodVibes']),
('9be4044f-9f66-453a-803a-516616863def', '00000000-0000-0000-0000-000000000000', 'CLAT option after NLSIU', 'If NLSIU nahi mila, NLU Delhi excellent. Delhi advantages compensate for newer campus. Growing reputation.', 'alumni', 2019, 4.3, 4, 4, 4, 4, 4, 3, 'actually_good', ARRAY['#PlacementKing', '#Worth']);

-- IIFT (9a75dbeb-507b-491d-9b7e-fdc15158e6fb)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('9a75dbeb-507b-491d-9b7e-fdc15158e6fb', '00000000-0000-0000-0000-000000000000', 'International trade specialists', 'IIFT for those interested in international business. Government institute, Delhi location. Placements in export-import, consulting strong.', 'alumni', 2020, 4.2, 4, 4, 4, 4, 3, 4, 'actually_good', ARRAY['#Worth', '#PlacementKing']),
('9a75dbeb-507b-491d-9b7e-fdc15158e6fb', '00000000-0000-0000-0000-000000000000', 'Niche MBA option', 'IIFT is specialized - international trade focus. If thats your interest, perfect. General management, consider IIMs.', 'current_student', 2022, 4.1, 4, 4, 4, 4, 3, 4, 'hidden_gem', ARRAY['#Worth']);

-- NIFT Delhi (394d100e-7033-4a5f-8903-e18a812ac68a)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('394d100e-7033-4a5f-8903-e18a812ac68a', '00000000-0000-0000-0000-000000000000', 'Fashion capital ka fashion school', 'NIFT Delhi in Hauz Khas - creative hub. Industry connections strong, placements in top brands. Delhi fashion week exposure.', 'alumni', 2020, 4.3, 4, 4, 5, 4, 5, 3, 'actually_good', ARRAY['#Baddies', '#GoodVibes', '#Worth']),
('394d100e-7033-4a5f-8903-e18a812ac68a', '00000000-0000-0000-0000-000000000000', 'Creative careers start here', 'NIFT gives portfolio, industry exposure, placements. Hauz Khas Village nearby for inspiration. Best for fashion career aspirants.', 'current_student', 2022, 4.2, 4, 4, 5, 4, 5, 3, 'actually_good', ARRAY['#GoodVibes', '#Baddies']);

-- JMI (49060c08-80ae-4f62-8966-9dbd09cf48c6)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('49060c08-80ae-4f62-8966-9dbd09cf48c6', '00000000-0000-0000-0000-000000000000', 'Central university excellence', 'Jamia has multiple strong departments. Architecture, Mass Comm famous. Green campus, diverse environment. Value for money excellent.', 'alumni', 2020, 4.0, 4, 3, 4, 5, 4, 4, 'actually_good', ARRAY['#Worth', '#GoodVibes']),
('49060c08-80ae-4f62-8966-9dbd09cf48c6', '00000000-0000-0000-0000-000000000000', 'Underrated in Delhi', 'Jamia competes with DU in many departments. Campus beautiful, fees nominal. Journalism school famous. Worth exploring.', 'current_student', 2022, 3.9, 4, 3, 4, 5, 4, 4, 'hidden_gem', ARRAY['#Worth']);

-- =============================================
-- TIER 2 COLLEGES (Rating: 2.5-4 stars, Hustle Required)
-- =============================================

-- DTU (1ac5d97d-d4aa-4755-b26b-8fa72dadb585)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('1ac5d97d-d4aa-4755-b26b-8fa72dadb585', '00000000-0000-0000-0000-000000000000', 'DCE legacy continues', 'DTU (DCE purana naam) still strong. Placements 10-20 LPA for CS. Campus Rohini mein, metro connected. Government college with good output.', 'alumni', 2020, 3.9, 4, 4, 4, 5, 3, 4, 'actually_good', ARRAY['#Worth', '#PlacementKing']),
('1ac5d97d-d4aa-4755-b26b-8fa72dadb585', '00000000-0000-0000-0000-000000000000', 'Better than most NITs', 'DTU placements beat many NITs. Delhi location helps internships. Engifest famous. Worth the JEE Mains grind.', 'current_student', 2022, 3.8, 4, 4, 4, 5, 3, 4, 'mid_af', ARRAY['#Worth', '#GoodVibes']),
('1ac5d97d-d4aa-4755-b26b-8fa72dadb585', '00000000-0000-0000-0000-000000000000', 'Delhi engineering pride', 'Along with NSUT, DTU is Delhi engineering pride. Government fees, decent placements. Rohini mein life set.', 'alumni', 2019, 4.0, 4, 4, 4, 5, 3, 4, 'hidden_gem', ARRAY['#PlacementKing', '#Worth']);

-- NSUT (39f57736-2ea9-436c-adb8-8b0cde446072)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('39f57736-2ea9-436c-adb8-8b0cde446072', '00000000-0000-0000-0000-000000000000', 'Formerly NSIT, still strong', 'NSUT (NSIT purana) in Dwarka. Placements improving, campus new. Government college with potential. Growing reputation.', 'alumni', 2020, 3.7, 4, 4, 4, 5, 3, 4, 'mid_af', ARRAY['#Worth', '#GoodVibes']),
('39f57736-2ea9-436c-adb8-8b0cde446072', '00000000-0000-0000-0000-000000000000', 'Dwarka engineering', 'NSUT campus Dwarka mein convenient. Placements 8-15 LPA range. Coding culture growing. Worth considering.', 'current_student', 2022, 3.6, 4, 4, 4, 5, 3, 4, 'mid_af', ARRAY['#Worth']),
('39f57736-2ea9-436c-adb8-8b0cde446072', '00000000-0000-0000-0000-000000000000', 'DTU ki competition', 'NSUT competes with DTU now. Some departments better, some not. Overall solid Delhi engineering option.', 'alumni', 2019, 3.8, 4, 4, 4, 5, 3, 4, 'hidden_gem', ARRAY['#Worth', '#PlacementKing']);

-- Amity (4414f05c-1019-4ae7-a264-b3bd0421e93f)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('4414f05c-1019-4ae7-a264-b3bd0421e93f', '00000000-0000-0000-0000-000000000000', 'Private university with reach', 'Amity is everywhere but Noida is flagship. Infrastructure impressive, placements average. Fees high, expectations manage karo.', 'alumni', 2020, 3.2, 3, 3, 4, 2, 4, 4, 'mid_af', ARRAY['#RichKids', '#GoodVibes']),
('4414f05c-1019-4ae7-a264-b3bd0421e93f', '00000000-0000-0000-0000-000000000000', 'Campus impressive, results mixed', 'Amity campus dekh ke parents khush. Reality - self-effort needed for good placements. Some courses better than others.', 'current_student', 2022, 3.1, 3, 3, 4, 2, 4, 4, 'mid_af', ARRAY['#Worth']),
('4414f05c-1019-4ae7-a264-b3bd0421e93f', '00000000-0000-0000-0000-000000000000', 'If money not issue', 'Amity works if you cant get government colleges. Infrastructure definitely good. Just placements arent proportional to fees.', 'alumni', 2019, 3.0, 3, 3, 4, 2, 4, 4, 'overrated', ARRAY['#Worth']);

-- Bennett (61029ee5-8b45-4667-8f6f-3e984b528daf)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('61029ee5-8b45-4667-8f6f-3e984b528daf', '00000000-0000-0000-0000-000000000000', 'Times Group university', 'Bennett backed by Times Group - media connections strong. Greater Noida campus new. Journalism, media courses good. Engineering developing.', 'alumni', 2020, 3.3, 3, 3, 4, 3, 4, 4, 'mid_af', ARRAY['#Worth', '#GoodVibes']),
('61029ee5-8b45-4667-8f6f-3e984b528daf', '00000000-0000-0000-0000-000000000000', 'New university potential', 'Bennett is young but growing. Industry connections being built. Worth for media/journalism. Engineering wait and watch.', 'current_student', 2022, 3.2, 3, 3, 4, 3, 4, 4, 'mid_af', ARRAY['#Worth']);

-- GGSIPU (a50c6004-82ca-44e4-9f8b-c4640dec0742)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('a50c6004-82ca-44e4-9f8b-c4640dec0742', '00000000-0000-0000-0000-000000000000', 'IPU affiliated variety', 'GGSIPU has many affiliated colleges - quality varies. Some good (USICT), some average. Research before joining specific college.', 'alumni', 2020, 3.0, 3, 3, 3, 4, 3, 4, 'mid_af', ARRAY['#Worth']),
('a50c6004-82ca-44e4-9f8b-c4640dec0742', '00000000-0000-0000-0000-000000000000', 'Delhi state university', 'IPU gives Delhi quota advantage. Fees reasonable for state university. Placements depend on specific college and branch.', 'current_student', 2022, 2.9, 3, 3, 3, 4, 3, 4, 'mid_af', ARRAY['#Worth']);

-- Pearl Academy (0d2c6fbb-6d5f-4b95-bb9b-b0aa7cb9f00f)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('0d2c6fbb-6d5f-4b95-bb9b-b0aa7cb9f00f', '00000000-0000-0000-0000-000000000000', 'Design and fashion focus', 'Pearl Academy for creative careers. Fashion, design courses okay. Not NIFT level but alternative. Fees high for output.', 'alumni', 2020, 3.1, 3, 3, 4, 2, 4, 3, 'mid_af', ARRAY['#Worth', '#Baddies']),
('0d2c6fbb-6d5f-4b95-bb9b-b0aa7cb9f00f', '00000000-0000-0000-0000-000000000000', 'Private design option', 'If NIFT nahi mila, Pearl is backup. Industry connections exist. Self-portfolio building important.', 'current_student', 2022, 3.0, 3, 3, 4, 2, 4, 3, 'mid_af', ARRAY['#Worth']);

-- =============================================
-- TIER 3 COLLEGES (Rating: 1-2.5 stars, BRUTAL)
-- =============================================

-- Galgotias (1e5fb4bb-b011-445d-a6ec-36560ea0cc2d)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('1e5fb4bb-b011-445d-a6ec-36560ea0cc2d', '00000000-0000-0000-0000-000000000000', 'Greater Noida ka Greater disappointment', 'Galgotias campus dekh ke aate hain, reality mein rote hain. Faculty turnover crazy, placements fake numbers. Better stay home and learn online.', 'alumni', 2020, 1.8, 2, 2, 2, 2, 3, 3, 'paisa_barbaad', ARRAY['#Avoid', '#PlacementScam']),
('1e5fb4bb-b011-445d-a6ec-36560ea0cc2d', '00000000-0000-0000-0000-000000000000', 'Marketing world class, education zero', 'Ad mein MIT dikhate hain, reality mein struggle. Greater Noida mein phas jaoge, career bhi. Mass recruiters only.', 'current_student', 2022, 1.7, 2, 2, 2, 2, 3, 3, 'paisa_barbaad', ARRAY['#Avoid', '#Scam']),
('1e5fb4bb-b011-445d-a6ec-36560ea0cc2d', '00000000-0000-0000-0000-000000000000', 'Regret guaranteed', 'Save your parents money. Galgotias se better options hain same fees mein. Self-study karo, online courses karo - better ROI.', 'alumni', 2019, 1.6, 2, 2, 2, 1, 3, 3, 'paisa_barbaad', ARRAY['#Avoid', '#PlacementScam']);

-- LPU (de77eea8-ee83-42ab-9724-b5ffe76a2949)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('de77eea8-ee83-42ab-9724-b5ffe76a2949', '00000000-0000-0000-0000-000000000000', 'Lovely naam, education painful', 'LPU ka campus huge hai - literally. Education quality inversely proportional to campus size. Jalandhar mein Delhi ka branch promote karte hain.', 'alumni', 2020, 2.0, 2, 2, 3, 2, 3, 4, 'paisa_barbaad', ARRAY['#Avoid', '#PlacementScam']),
('de77eea8-ee83-42ab-9724-b5ffe76a2949', '00000000-0000-0000-0000-000000000000', 'Quantity over quality', 'LPU admits everyone. Everyone. Quality control zero. Some good students self-study and do well. College contribution minimal.', 'current_student', 2022, 1.9, 2, 2, 3, 2, 3, 4, 'paisa_barbaad', ARRAY['#Avoid']),
('de77eea8-ee83-42ab-9724-b5ffe76a2949', '00000000-0000-0000-0000-000000000000', 'Degree mill certified', 'LPU gives degree, thats it. Skills? Zero. Network? Zero. Better options exist. Save yourself.', 'alumni', 2019, 1.8, 2, 2, 3, 2, 3, 4, 'paisa_barbaad', ARRAY['#Avoid', '#PlacementScam']);

-- Sharda (695197d4-2cf6-4b82-9e51-a4d03bc6e4a6)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('695197d4-2cf6-4b82-9e51-a4d03bc6e4a6', '00000000-0000-0000-0000-000000000000', 'Greater Noida disaster', 'Sharda University ka naam sunke mat aao. Infrastructure dikhaate hain, education nahi dete. Placements struggle real.', 'alumni', 2020, 2.0, 2, 2, 2, 2, 3, 3, 'paisa_barbaad', ARRAY['#Avoid', '#PlacementScam']),
('695197d4-2cf6-4b82-9e51-a4d03bc6e4a6', '00000000-0000-0000-0000-000000000000', 'Campus tour trap', 'Campus visit karoge toh impress ho jaoge. 4 saal baad realize hoga ki building acchi thi, teachers nahi.', 'current_student', 2022, 1.9, 2, 2, 2, 2, 3, 3, 'paisa_barbaad', ARRAY['#Avoid']),
('695197d4-2cf6-4b82-9e51-a4d03bc6e4a6', '00000000-0000-0000-0000-000000000000', 'Better invest elsewhere', 'Sharda ki fees se coaching + diploma karo. Better career outcome guaranteed. University degree ka value nahi.', 'alumni', 2019, 1.8, 2, 2, 2, 2, 3, 3, 'paisa_barbaad', ARRAY['#Avoid', '#Scam']);

-- SRM Delhi (e06f3e05-0ccf-4044-a186-12411aeb201c)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('e06f3e05-0ccf-4044-a186-12411aeb201c', '00000000-0000-0000-0000-000000000000', 'SRM brand diluted', 'SRM Chennai is okay, SRM Delhi NCR is different story. Franchise model problems. Quality not consistent with main campus.', 'alumni', 2020, 2.2, 2, 2, 2, 2, 3, 3, 'mid_af', ARRAY['#Avoid']),
('e06f3e05-0ccf-4044-a186-12411aeb201c', '00000000-0000-0000-0000-000000000000', 'Brand name nahi bachata', 'SRM naam se mat aao. Delhi NCR campus different hai Chennai se. Placements not same level. Self-effort mandatory.', 'current_student', 2022, 2.1, 2, 2, 2, 2, 3, 3, 'mid_af', ARRAY['#Avoid']),
('e06f3e05-0ccf-4044-a186-12411aeb201c', '00000000-0000-0000-0000-000000000000', 'Confusion in SRM campuses', 'Too many SRM campuses. Quality varies wildly. Delhi NCR one is not the best. Research before joining.', 'alumni', 2019, 2.0, 2, 2, 2, 2, 3, 3, 'mid_af', ARRAY['#Avoid']);

-- Manav Rachna (0a7cebf0-ba15-4ad9-b64a-7006d0743ce4)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('0a7cebf0-ba15-4ad9-b64a-7006d0743ce4', '00000000-0000-0000-0000-000000000000', 'Faridabad mein phas gaya', 'Manav Rachna Faridabad mein hai - far from Delhi. Quality average at best. Placements mass companies only. Better options nearby.', 'alumni', 2020, 2.1, 2, 2, 2, 2, 3, 3, 'mid_af', ARRAY['#Avoid']),
('0a7cebf0-ba15-4ad9-b64a-7006d0743ce4', '00000000-0000-0000-0000-000000000000', 'Average private college', 'Nothing special about Manav Rachna. Just another engineering college. Self-study for any decent outcome.', 'current_student', 2022, 2.0, 2, 2, 2, 2, 3, 3, 'mid_af', ARRAY['#Avoid']),
('0a7cebf0-ba15-4ad9-b64a-7006d0743ce4', '00000000-0000-0000-0000-000000000000', 'Location disadvantage', 'Faridabad not ideal for internships or networking. Inside college nothing exciting. Average all around.', 'alumni', 2019, 2.2, 2, 2, 2, 2, 3, 3, 'mid_af', ARRAY['#Avoid']);

-- BVP Delhi (57707314-6db0-44c4-89dd-577b880ceb6e)
INSERT INTO reviews (college_id, user_id, title, content, reviewer_type, admission_year, overall_rating, rating_faculty, rating_placement, rating_campus_life, rating_value_for_money, rating_girls, rating_boys, vibe_tag, quick_tags) VALUES
('57707314-6db0-44c4-89dd-577b880ceb6e', '00000000-0000-0000-0000-000000000000', 'BVP Delhi branch', 'Bharati Vidyapeeth ka Delhi campus. Pune main hai, Delhi satellite. Quality not same. Placements struggle.', 'alumni', 2020, 2.2, 2, 2, 2, 2, 3, 3, 'mid_af', ARRAY['#Avoid']),
('57707314-6db0-44c4-89dd-577b880ceb6e', '00000000-0000-0000-0000-000000000000', 'Franchise problem', 'BVP name but Delhi campus different experience. Infrastructure okay but teaching quality varies. Self-effort needed.', 'current_student', 2022, 2.1, 2, 2, 2, 2, 3, 3, 'mid_af', ARRAY['#Avoid']),
('57707314-6db0-44c4-89dd-577b880ceb6e', '00000000-0000-0000-0000-000000000000', 'Better options in Delhi', 'With IPU options available, BVP Delhi doesnt make sense. Consider government options first.', 'alumni', 2019, 2.0, 2, 2, 2, 2, 3, 3, 'mid_af', ARRAY['#Avoid']);
