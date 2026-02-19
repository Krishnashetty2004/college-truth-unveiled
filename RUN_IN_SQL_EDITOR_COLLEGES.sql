-- =============================================
-- RUN THIS IN SUPABASE SQL EDITOR
-- 61 Tier 2/3 colleges from Gujarat, Punjab, Haryana,
-- Rajasthan, MP, Telangana/AP, Maharashtra, Karnataka
-- =============================================

-- GUJARAT - Rajkot
INSERT INTO colleges (name, short_name, city, state, type, ownership, tier, website, established_year, student_population, is_active) VALUES
('Saurashtra University', 'SU Rajkot', 'Rajkot', 'Gujarat', 'university', 'government', 'tier_2', 'https://saurashtrauniversity.edu', 1967, 150000, true),
('Marwadi University', 'Marwadi', 'Rajkot', 'Gujarat', 'engineering', 'private', 'tier_2', 'https://marwadiuniversity.ac.in', 2013, 8000, true),
('RK University', 'RKU', 'Rajkot', 'Gujarat', 'university', 'private', 'tier_2', 'https://rku.ac.in', 2009, 10000, true),
('Atmiya University', 'Atmiya', 'Rajkot', 'Gujarat', 'university', 'private', 'tier_2', 'https://atmiyauni.ac.in', 2016, 6000, true),
('Darshan University', 'Darshan', 'Rajkot', 'Gujarat', 'engineering', 'private', 'tier_3', 'https://darshanuniversity.ac.in', 2017, 4000, true),
('LDRP Institute of Technology and Research', 'LDRP-ITR', 'Gandhinagar', 'Gujarat', 'engineering', 'private', 'tier_2', 'https://ldrp.ac.in', 1997, 3000, true);

-- GUJARAT - Rest
INSERT INTO colleges (name, short_name, city, state, type, ownership, tier, website, established_year, student_population, is_active) VALUES
('Gujarat Technological University', 'GTU', 'Ahmedabad', 'Gujarat', 'university', 'government', 'tier_1', 'https://gtu.ac.in', 2007, 500000, true),
('Parul University', 'Parul', 'Vadodara', 'Gujarat', 'university', 'private', 'tier_2', 'https://paruluniversity.ac.in', 2009, 35000, true),
('Charotar University of Science and Technology', 'CHARUSAT', 'Anand', 'Gujarat', 'university', 'private', 'tier_2', 'https://charusat.ac.in', 2009, 12000, true),
('Dharmsinh Desai University', 'DDU', 'Nadiad', 'Gujarat', 'engineering', 'deemed', 'tier_2', 'https://ddu.ac.in', 1968, 5000, true),
('Ganpat University', 'Ganpat', 'Mehsana', 'Gujarat', 'university', 'private', 'tier_2', 'https://ganpatuniversity.ac.in', 2005, 15000, true),
('Uka Tarsadia University', 'UTU', 'Surat', 'Gujarat', 'university', 'private', 'tier_2', 'https://utu.ac.in', 2011, 8000, true),
('Veer Narmad South Gujarat University', 'VNSGU', 'Surat', 'Gujarat', 'university', 'government', 'tier_2', 'https://vnsgu.ac.in', 1965, 120000, true),
('Sardar Patel University', 'SPU', 'Vallabh Vidyanagar', 'Gujarat', 'university', 'government', 'tier_2', 'https://spuvvn.edu', 1955, 100000, true),
('Nirma University', 'Nirma', 'Ahmedabad', 'Gujarat', 'university', 'private', 'tier_1', 'https://nirmauni.ac.in', 2003, 10000, true);

-- PUNJAB
INSERT INTO colleges (name, short_name, city, state, type, ownership, tier, website, established_year, student_population, is_active) VALUES
('Lovely Professional University', 'LPU', 'Jalandhar', 'Punjab', 'university', 'private', 'tier_2', 'https://lpu.in', 2005, 50000, true),
('Chandigarh University', 'CU', 'Mohali', 'Punjab', 'university', 'private', 'tier_2', 'https://cuchd.in', 2012, 45000, true),
('Chitkara University', 'Chitkara', 'Rajpura', 'Punjab', 'university', 'private', 'tier_2', 'https://chitkara.edu.in', 2002, 15000, true),
('CT University', 'CTU', 'Ludhiana', 'Punjab', 'university', 'private', 'tier_3', 'https://ctuniversity.in', 2018, 8000, true),
('Punjabi University', 'PU Patiala', 'Patiala', 'Punjab', 'university', 'government', 'tier_2', 'https://punjabiuniversity.ac.in', 1962, 80000, true),
('Guru Nanak Dev University', 'GNDU', 'Amritsar', 'Punjab', 'university', 'government', 'tier_2', 'https://gndu.ac.in', 1969, 70000, true),
('DAV University', 'DAV', 'Jalandhar', 'Punjab', 'university', 'private', 'tier_2', 'https://davuniversity.org', 2013, 6000, true),
('IK Gujral Punjab Technical University', 'PTU', 'Jalandhar', 'Punjab', 'university', 'government', 'tier_2', 'https://ptu.ac.in', 1997, 300000, true),
('Thapar Institute of Engineering and Technology', 'Thapar', 'Patiala', 'Punjab', 'engineering', 'deemed', 'tier_1', 'https://thapar.edu', 1956, 10000, true),
('RIMT University', 'RIMT', 'Mandi Gobindgarh', 'Punjab', 'university', 'private', 'tier_3', 'https://rimt.ac.in', 2017, 5000, true);

-- HARYANA
INSERT INTO colleges (name, short_name, city, state, type, ownership, tier, website, established_year, student_population, is_active) VALUES
('Maharshi Dayanand University', 'MDU', 'Rohtak', 'Haryana', 'university', 'government', 'tier_2', 'https://mdu.ac.in', 1976, 150000, true),
('GD Goenka University', 'GD Goenka', 'Gurugram', 'Haryana', 'university', 'private', 'tier_2', 'https://gdgoenkauniversity.com', 2013, 5000, true),
('Amity University Gurugram', 'Amity Gurugram', 'Gurugram', 'Haryana', 'university', 'private', 'tier_2', 'https://amity.edu/gurugram', 2010, 8000, true),
('BML Munjal University', 'BMU', 'Gurugram', 'Haryana', 'university', 'private', 'tier_2', 'https://bmu.edu.in', 2014, 3000, true),
('Sharda University', 'Sharda', 'Greater Noida', 'Uttar Pradesh', 'university', 'private', 'tier_2', 'https://sharda.ac.in', 2009, 20000, true);

-- RAJASTHAN
INSERT INTO colleges (name, short_name, city, state, type, ownership, tier, website, established_year, student_population, is_active) VALUES
('Manipal University Jaipur', 'MUJ', 'Jaipur', 'Rajasthan', 'university', 'private', 'tier_2', 'https://jaipur.manipal.edu', 2011, 12000, true),
('JECRC University', 'JECRC', 'Jaipur', 'Rajasthan', 'university', 'private', 'tier_2', 'https://jecrcuniversity.edu.in', 2012, 8000, true),
('Amity University Jaipur', 'Amity Jaipur', 'Jaipur', 'Rajasthan', 'university', 'private', 'tier_2', 'https://amity.edu/jaipur', 2008, 10000, true),
('Mody University', 'Mody', 'Laxmangarh', 'Rajasthan', 'university', 'private', 'tier_2', 'https://modyuniversity.ac.in', 1998, 6000, true),
('Banasthali Vidyapith', 'Banasthali', 'Banasthali', 'Rajasthan', 'university', 'deemed', 'tier_2', 'https://banasthali.org', 1935, 15000, true),
('Malaviya National Institute of Technology', 'MNIT Jaipur', 'Jaipur', 'Rajasthan', 'engineering', 'government', 'tier_1', 'https://mnit.ac.in', 1963, 5000, true),
('University of Rajasthan', 'UoR', 'Jaipur', 'Rajasthan', 'university', 'government', 'tier_2', 'https://uniraj.ac.in', 1947, 200000, true),
('Poornima University', 'Poornima', 'Jaipur', 'Rajasthan', 'university', 'private', 'tier_3', 'https://poornima.edu.in', 2012, 8000, true);

-- MADHYA PRADESH
INSERT INTO colleges (name, short_name, city, state, type, ownership, tier, website, established_year, student_population, is_active) VALUES
('Medi-Caps University', 'Medi-Caps', 'Indore', 'Madhya Pradesh', 'university', 'private', 'tier_2', 'https://medicaps.ac.in', 2000, 8000, true),
('Prestige Institute of Management', 'PIMR', 'Indore', 'Madhya Pradesh', 'management', 'private', 'tier_2', 'https://prestigeuniversity.in', 1994, 5000, true),
('Shri Vaishnav Vidyapeeth Vishwavidyalaya', 'SVVV', 'Indore', 'Madhya Pradesh', 'university', 'private', 'tier_2', 'https://svvv.edu.in', 2015, 10000, true),
('Rajiv Gandhi Proudyogiki Vishwavidyalaya', 'RGPV', 'Bhopal', 'Madhya Pradesh', 'university', 'government', 'tier_2', 'https://rgpv.ac.in', 1998, 400000, true),
('Jabalpur Engineering College', 'JEC', 'Jabalpur', 'Madhya Pradesh', 'engineering', 'government', 'tier_2', 'https://jecjabalpur.ac.in', 1947, 3000, true),
('IPS Academy', 'IPS', 'Indore', 'Madhya Pradesh', 'engineering', 'private', 'tier_2', 'https://ipsacademy.org', 1999, 6000, true);

-- TELANGANA / ANDHRA PRADESH
INSERT INTO colleges (name, short_name, city, state, type, ownership, tier, website, established_year, student_population, is_active) VALUES
('Malla Reddy University', 'MRU', 'Hyderabad', 'Telangana', 'university', 'private', 'tier_2', 'https://mallareddyuniversity.ac.in', 2020, 15000, true),
('GITAM University', 'GITAM', 'Visakhapatnam', 'Andhra Pradesh', 'university', 'deemed', 'tier_2', 'https://gitam.edu', 1980, 25000, true),
('KL University', 'KLU', 'Vijayawada', 'Andhra Pradesh', 'university', 'deemed', 'tier_2', 'https://kluniversity.in', 1980, 20000, true),
('SRM University AP', 'SRM AP', 'Amaravati', 'Andhra Pradesh', 'university', 'private', 'tier_2', 'https://srmap.edu.in', 2017, 8000, true),
('VIT-AP University', 'VIT-AP', 'Amaravati', 'Andhra Pradesh', 'university', 'private', 'tier_2', 'https://vitap.ac.in', 2017, 10000, true),
('Vignan University', 'Vignan', 'Guntur', 'Andhra Pradesh', 'university', 'deemed', 'tier_2', 'https://vignan.ac.in', 1997, 12000, true),
('Amrita Vishwa Vidyapeetham Amaravati', 'Amrita AP', 'Amaravati', 'Andhra Pradesh', 'university', 'deemed', 'tier_2', 'https://amrita.edu', 2015, 5000, true);

-- MAHARASHTRA
INSERT INTO colleges (name, short_name, city, state, type, ownership, tier, website, established_year, student_population, is_active) VALUES
('MIT World Peace University', 'MIT-WPU', 'Pune', 'Maharashtra', 'university', 'private', 'tier_2', 'https://mitwpu.edu.in', 2017, 15000, true),
('Symbiosis International University', 'Symbiosis', 'Pune', 'Maharashtra', 'university', 'deemed', 'tier_1', 'https://siu.edu.in', 2002, 20000, true),
('DY Patil University', 'DY Patil', 'Pune', 'Maharashtra', 'university', 'deemed', 'tier_2', 'https://dypatil.edu', 2003, 18000, true),
('Savitribai Phule Pune University', 'SPPU', 'Pune', 'Maharashtra', 'university', 'government', 'tier_1', 'https://unipune.ac.in', 1949, 400000, true),
('Visvesvaraya National Institute of Technology', 'VNIT', 'Nagpur', 'Maharashtra', 'engineering', 'government', 'tier_1', 'https://vnit.ac.in', 1960, 5000, true),
('Shivaji University', 'SUK', 'Kolhapur', 'Maharashtra', 'university', 'government', 'tier_2', 'https://unishivaji.ac.in', 1962, 250000, true);

-- KARNATAKA
INSERT INTO colleges (name, short_name, city, state, type, ownership, tier, website, established_year, student_population, is_active) VALUES
('Manipal Academy of Higher Education', 'MAHE', 'Manipal', 'Karnataka', 'university', 'deemed', 'tier_1', 'https://manipal.edu', 1953, 30000, true),
('SDM College of Engineering and Technology', 'SDMCET', 'Dharwad', 'Karnataka', 'engineering', 'private', 'tier_2', 'https://sdmcet.ac.in', 1979, 4000, true),
('KLE Technological University', 'KLE Tech', 'Hubli', 'Karnataka', 'university', 'private', 'tier_2', 'https://kletech.ac.in', 2015, 6000, true);

-- Done! 61 colleges added
SELECT COUNT(*) as total_colleges FROM colleges;
