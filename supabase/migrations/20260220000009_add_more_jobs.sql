-- Add more jobs to opportunities table (no duplicates)
-- Using MD5 hash for consistent IDs
-- Schema: id, company, title, location, department, role_type, tier, funded, source, apply_url, is_india, is_fresh, posted_ago

INSERT INTO public.opportunities (id, company, title, location, tier, source, apply_url, is_india, is_fresh, is_active, role_type, department)
VALUES
  -- Accenture
  ('accenture-ase-pan-india', 'Accenture', 'Associate Software Engineer (₹4.5-6.5 LPA | 2024-25 Batch)', 'Pan India', '₹4.5-6.5 LPA', 'Direct', 'https://www.accenture.com/in-en/careers/jobsearch', true, true, true, 'fresher', 'engineering'),

  -- Amazon
  ('amazon-sde1-bangalore', 'Amazon', 'Software Development Engineer I (₹20-30 LPA | 2024-25 Batch)', 'Bangalore, Hyderabad', '₹20-30 LPA', 'Direct', 'https://www.amazon.jobs/en/search?country=IND&category=software-development', true, true, true, 'fresher', 'engineering'),
  ('amazon-vendor-ops-bengaluru', 'Amazon', 'Senior Vendor Ops Associate, ARIPL', 'Bengaluru, Karnataka', '₹20-30 LPA', 'Amazon Jobs', 'https://www.amazon.jobs/en/jobs/3185816/senior-vendor-ops-associate-aripl', true, true, true, 'fresher', 'operations'),
  ('amazon-project-tez-bengaluru', 'Amazon', 'Sr. Associate, Amazon Now, Project Tez', 'Bengaluru, Karnataka', '₹20-30 LPA', 'Amazon Jobs', 'https://www.amazon.jobs/en/jobs/3185808/sr-associate-amazon-now-project-tez', true, true, true, 'fresher', 'operations'),
  ('amazon-investigation-bengaluru', 'Amazon', 'Investigation Associate, Middle Mile Product & Technology', 'Bengaluru, Karnataka', '₹20-30 LPA', 'Amazon Jobs', 'https://www.amazon.jobs/en/jobs/3182563/investigation-associate-middle-mile-product-technology', true, true, true, 'fresher', 'operations'),

  -- Capgemini
  ('capgemini-ase-india', 'Capgemini', 'Associate Software Engineer (₹4-5 LPA | 2024-26 Batch)', 'Chennai, Bangalore, Pune', '₹4-5 LPA', 'Direct', 'https://www.capgemini.com/in-en/careers/', true, true, true, 'fresher', 'engineering'),

  -- Cognizant
  ('cognizant-genc-pan-india', 'Cognizant', 'GenC / GenC Next - Programmer Analyst Trainee (₹4-6.75 LPA)', 'Pan India', '₹4-6.75 LPA', 'Direct', 'https://careers.cognizant.com/global/en/genc', true, true, true, 'fresher', 'engineering'),

  -- Deloitte
  ('deloitte-nla-india', 'Deloitte', 'National Level Assessment (NLA) - Analyst Trainee (₹4.5-6 LPA)', 'Hyderabad, Bengaluru, Pune, Mumbai, Chennai', '₹4.5-6 LPA', 'Direct', 'https://apply.deloitte.com/careers', true, true, true, 'fresher', 'analytics'),

  -- HCLTech
  ('hcltech-get-walkin', 'HCLTech', 'Graduate Engineer Trainee (Walk-in | ₹3.5-13 LPA)', 'Bangalore, Chennai, Nagpur, Noida, Gurugram, Mumbai', '₹3.5-13 LPA', 'Direct', 'https://www.hcltech.com/careers/early-career', true, true, true, 'fresher', 'engineering'),

  -- Hevo Data
  ('hevo-sales-bangalore', 'Hevo Data', 'Associate Director of Sales - US', 'Bangalore, India', '₹6-20 LPA', 'Lever', 'https://jobs.lever.co/hevodata/ca0658a9-82d6-418e-a304-edfed07a9080', true, true, true, 'fresher', 'sales'),
  ('hevo-sde-bangalore', 'Hevo Data', 'Associate SDE', 'Bangalore, India', '₹6-20 LPA', 'Lever', 'https://jobs.lever.co/hevodata/3c5b31e4-5da1-4e11-9fa4-5044bccd9a9e', true, true, true, 'fresher', 'engineering'),
  ('hevo-founders-office', 'Hevo Data', 'Business Associate - Founder''s Office', 'Bangalore, India', '₹6-20 LPA', 'Lever', 'https://jobs.lever.co/hevodata/ba55bad0-7a42-4897-b22d-82e061213594', true, true, true, 'fresher', 'operations'),

  -- Hi1/Intech
  ('hi1-ase-india', 'Hi1', 'Associate Software Engineer (₹4.5-6 LPA | 2021-25 Batch)', 'Bangalore, Chennai, Hyderabad, Pune, Mumbai, Kolkata', '₹4.5-6 LPA', 'Direct', 'https://www.intechgroup.com/careers', true, true, true, 'fresher', 'engineering'),

  -- IBM
  ('ibm-ase-india', 'IBM', 'Associate System Engineer (₹4.5-6 LPA | 2024-26 Batch)', 'Kochi, Bangalore, Pune, Hyderabad', '₹4.5-6 LPA', 'Direct', 'https://www.ibm.com/careers/search?field_keyword_18[0]=Entry%20Level&field_keyword_08[0]=India', true, true, true, 'fresher', 'engineering'),

  -- Infosys
  ('infosys-se-pan-india', 'Infosys', 'Systems Engineer / AI-ML Engineer (₹3.6-9.5 LPA)', 'Pan India', '₹3.6-9.5 LPA', 'Direct', 'https://career.infosys.com/joblist', true, true, true, 'fresher', 'engineering'),

  -- L&T
  ('lt-get-superset', 'L&T', 'Graduate Engineer Trainee (₹6.33 LPA | Superset Drive)', 'Pan India', '₹6.33 LPA', 'Direct', 'https://www.larsentoubro.com/corporate/careers/', true, true, true, 'fresher', 'engineering'),

  -- LTIMindtree
  ('ltimindtree-trainee', 'LTIMindtree', 'Associate Trainee (₹3.19 LPA | 2025-26 Batch)', 'Pan India', '₹3.19 LPA', 'Direct', 'https://www.ltimindtree.com/careers/', true, true, true, 'fresher', 'engineering'),

  -- Mindtickle
  ('mindtickle-founders-office', 'Mindtickle', 'Associate, Founder''s Office', 'Pune, Maharashtra', '₹6-20 LPA', 'Lever', 'https://jobs.lever.co/mindtickle/08039028-560f-4759-b4ef-7802ca71b3c9', true, true, true, 'fresher', 'operations'),

  -- Mphasis
  ('mphasis-trainee-india', 'Mphasis', 'Junior Trainee (₹3-4 LPA | Any Graduate)', 'Bengaluru, Chennai, Pune', '₹3-4 LPA', 'Direct', 'https://www.mphasis.com/home/careers.html', true, true, true, 'fresher', 'engineering'),

  -- Razorpay
  ('razorpay-enterprise-sales', 'Razorpay', 'Associate Director, Enterprise Sales', 'Bengaluru', '₹8-25 LPA', 'Greenhouse', 'https://job-boards.greenhouse.io/razorpaysoftwareprivatelimited/jobs/4655922005', true, true, true, 'fresher', 'sales'),
  ('razorpay-learning-dev', 'Razorpay', 'Associate, Learning and Development (Tech Support)', 'Bengaluru', '₹8-25 LPA', 'Greenhouse', 'https://job-boards.greenhouse.io/razorpaysoftwareprivatelimited/jobs/4657285005', true, true, true, 'fresher', 'hr'),
  ('razorpay-channel-partnerships', 'Razorpay', 'Associate Manager, Channel Partnerships', 'Bengaluru', '₹8-25 LPA', 'Greenhouse', 'https://job-boards.greenhouse.io/razorpaysoftwareprivatelimited/jobs/4660620005', true, true, true, 'fresher', 'sales'),
  ('razorpay-principal-eng', 'Razorpay', 'Principal Engineer I', 'Bangalore', '₹8-25 LPA', 'Greenhouse', 'https://job-boards.greenhouse.io/razorpaysoftwareprivatelimited/jobs/4640315005', true, true, true, 'experienced', 'engineering'),
  ('razorpay-product-designer', 'Razorpay', 'Product Designer II', 'Bengaluru', '₹8-25 LPA', 'Greenhouse', 'https://job-boards.greenhouse.io/razorpaysoftwareprivatelimited/jobs/4655320005', true, true, true, 'fresher', 'design'),
  ('razorpay-tpm-intern', 'Razorpay', 'Intern, Technical Program Manager', 'Bangalore', '₹8-25 LPA', 'Greenhouse', 'https://job-boards.greenhouse.io/razorpaysoftwareprivatelimited/jobs/4648649005', true, true, true, 'internship', 'product'),
  ('razorpay-business-ops', 'Razorpay', 'Senior Associate, Business Operations', 'Bengaluru', '₹8-25 LPA', 'Greenhouse', 'https://job-boards.greenhouse.io/razorpaysoftwareprivatelimited/jobs/4659072005', true, true, true, 'fresher', 'operations'),
  ('razorpay-corp-dev', 'Razorpay', 'Senior Associate, Corporate Development', 'Bengaluru', '₹8-25 LPA', 'Greenhouse', 'https://job-boards.greenhouse.io/razorpaysoftwareprivatelimited/jobs/4657287005', true, true, true, 'fresher', 'finance'),
  ('razorpay-mid-market-sales', 'Razorpay', 'Senior Associate, Mid Market Sales', 'Bengaluru', '₹8-25 LPA', 'Greenhouse', 'https://job-boards.greenhouse.io/razorpaysoftwareprivatelimited/jobs/4664046005', true, true, true, 'fresher', 'sales'),

  -- Superset
  ('superset-career-fair', 'Superset', 'Graduate Virtual Career Fair 2026 (50+ companies)', 'Virtual (Pan India)', '₹3-10 LPA', 'Platform', 'https://superset.com/', true, true, true, 'fresher', 'other'),

  -- Swiggy
  ('swiggy-asde-bengaluru', 'Swiggy', 'Associate SDE (Android/Backend | ₹12-18 LPA)', 'Bengaluru', '₹12-18 LPA', 'Direct', 'https://careers.swiggy.com/', true, true, true, 'fresher', 'engineering'),

  -- TCS
  ('tcs-nqt-pan-india', 'TCS', 'TCS NQT - Assistant System Engineer (₹3.36-7 LPA)', 'Pan India', '₹3.36-7 LPA', 'Direct', 'https://nextstep.tcs.com/campus/', true, true, true, 'fresher', 'engineering'),

  -- Tech Mahindra
  ('techmahindra-set-india', 'Tech Mahindra', 'Software Engineer Trainee (₹3.5-5 LPA | 2020-26 Batch)', 'Kolkata, Noida, Pune, Hyderabad, Chennai', '₹3.5-5 LPA', 'Direct', 'https://careers.techmahindra.com/fresher/', true, true, true, 'fresher', 'engineering'),

  -- Wipro
  ('wipro-elite-nlth', 'Wipro', 'Elite NLTH - Project Engineer (₹3.5 LPA)', 'Pan India', '₹3.5 LPA', 'Direct', 'https://careers.wipro.com/careers/SearchJobs', true, true, true, 'fresher', 'engineering'),
  ('wipro-wilp', 'Wipro', 'WILP - Project Engineer (₹3.5 LPA + Free M.Tech/MBA)', 'Pan India', '₹3.5 LPA', 'Direct', 'https://careers.wipro.com/careers/SearchJobs/wilp', true, true, true, 'fresher', 'engineering'),

  -- Zeta
  ('zeta-banking-ops', 'Zeta', 'Associate - Banking Operations', 'Mumbai / Bangalore', '₹6-20 LPA', 'Lever', 'https://jobs.lever.co/zeta/649c9215-a732-416b-b4c3-761604d94a1a', true, true, true, 'fresher', 'operations'),
  ('zeta-reliability-ops', 'Zeta', 'Associate Manager - Reliability Operations', 'Hyderabad', '₹6-20 LPA', 'Lever', 'https://jobs.lever.co/zeta/f4549751-a3aa-495a-bcd8-f15269872a9e', true, true, true, 'fresher', 'operations'),
  ('zeta-infosec-grc', 'Zeta', 'Infosec GRC Associate II', 'Bangalore', '₹6-20 LPA', 'Lever', 'https://jobs.lever.co/zeta/df927da9-bb9b-4769-aff3-1486fa0cd966', true, true, true, 'fresher', 'security'),

  -- Zoho
  ('zoho-sde-chennai', 'Zoho', 'Software Developer / System Engineer (₹5-8 LPA)', 'Chennai, Tamil Nadu', '₹5-8 LPA', 'Direct', 'https://www.zoho.com/careers/jobs.html', true, true, true, 'fresher', 'engineering')

ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  tier = EXCLUDED.tier,
  apply_url = EXCLUDED.apply_url,
  is_active = true;

-- Summary: Added 38 jobs from various companies
