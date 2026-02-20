-- =============================================
-- Campus Drives Table
-- =============================================

-- Create status enum
DO $$ BEGIN
  CREATE TYPE public.drive_status AS ENUM ('open', 'closed-recently', 'closed');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- Create urgency enum
DO $$ BEGIN
  CREATE TYPE public.drive_urgency AS ENUM ('hot', 'normal');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- Main campus_drives table
CREATE TABLE IF NOT EXISTS public.campus_drives (
  id TEXT PRIMARY KEY,
  company TEXT NOT NULL,
  program TEXT NOT NULL,
  role TEXT NOT NULL,
  status public.drive_status DEFAULT 'open',
  urgency public.drive_urgency DEFAULT 'normal',
  batch TEXT[] DEFAULT '{}',
  qualification TEXT,
  salary TEXT,
  locations TEXT,
  registration_open DATE,
  deadline TEXT,
  test_date TEXT,
  apply_url TEXT NOT NULL,
  career_url TEXT,
  eligibility TEXT,
  process TEXT,
  tags TEXT[] DEFAULT '{}',
  color TEXT DEFAULT '#666666',
  highlight TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.campus_drives ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Anyone can view active drives
DROP POLICY IF EXISTS "Anyone can view campus drives" ON public.campus_drives;
CREATE POLICY "Anyone can view campus drives" ON public.campus_drives
  FOR SELECT USING (is_active = true);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_campus_drives_company ON public.campus_drives(company);
CREATE INDEX IF NOT EXISTS idx_campus_drives_status ON public.campus_drives(status);
CREATE INDEX IF NOT EXISTS idx_campus_drives_urgency ON public.campus_drives(urgency);
CREATE INDEX IF NOT EXISTS idx_campus_drives_is_active ON public.campus_drives(is_active);

-- Grant access
GRANT SELECT ON public.campus_drives TO anon, authenticated;

-- Seed existing campus drives data
INSERT INTO public.campus_drives (id, company, program, role, status, urgency, batch, qualification, salary, locations, registration_open, deadline, test_date, apply_url, career_url, eligibility, process, tags, color, highlight)
VALUES
  ('infosys-off-campus-2026', 'Infosys', 'Off Campus Drive 2026 — Systems Engineer', 'Systems Engineer / AI-ML Engineer', 'open', 'hot', ARRAY['2024', '2025'], 'B.E / B.Tech / M.E / M.Tech / M.Sc / MCA', '₹3.6–5.5 LPA (SE) · ₹9.5 LPA (SP) · ₹6.25 LPA (DSE)', 'Mysuru, Pune, Bengaluru, Hyderabad, Chandigarh', '2026-01-01', 'Rolling', NULL, 'https://career.infosys.com/joblist', 'https://www.infosys.com/careers.html', 'Min 60% in X, XII · 65% in B.Tech · No standing arrears', 'Online Test (Adaptive) → Technical Interview → HR', ARRAY['mass-hiring', 'engineering', 'ai-ml'], '#007CC3', '20,000+ freshers planned for FY26 — Infosys doubling hiring'),

  ('infosys-springboard-pragati', 'Infosys', 'Springboard Pragati (Women in Tech)', 'AI/ML Mentorship → Fast-Track Hiring', 'closed-recently', 'normal', ARRAY['2024', '2025', '2026'], 'Any Degree (Women Only)', 'Free Upskilling → Priority Hiring Pipeline', 'Online (Pan India)', '2026-01-01', '2026-02-08', NULL, 'https://infyspringboard.onwingspan.com/', 'https://www.infosys.com/careers.html', 'Women only · Any degree · AI/ML interest · NOC required if enrolled', 'Registration → 2 Courses + 1 Certification → Selection', ARRAY['women-only', 'upskilling', 'ai-ml'], '#007CC3', 'Free AI/ML mentorship — completers get fast-tracked for Infosys hiring'),

  ('wipro-elite-fy26', 'Wipro', 'Elite Exclusive Hiring FY26', 'Project Engineer', 'open', 'normal', ARRAY['2025', '2026'], 'B.E / B.Tech (compulsory) / M.E / M.Tech (5-year integrated)', '₹3.5 LPA', 'Pan India', '2025-08-01', 'Rolling', NULL, 'https://careers.wipro.com/content/Early-Careers/?locale=en_US', 'https://careers.wipro.com/', '60% aggregate · 1 backlog allowed · Max 3-year gap · Full-time degree', 'Online Assessment → Business Discussion → HR → Pre-Skilling', ARRAY['mass-hiring', 'engineering'], '#3B1F8E', '10,000+ freshers targeted — includes mandatory pre-skilling training'),

  ('wipro-wilp-fy26', 'Wipro', 'Work Integrated Learning Program (WILP)', 'Project Engineer (with M.Tech/MBA while working)', 'open', 'normal', ARRAY['2024', '2025'], 'B.E / B.Tech / BCA / B.Sc', '₹3.5 LPA + Free Education (M.Tech/MBA)', 'Pan India', '2025-12-01', 'Rolling', NULL, 'https://careers.wipro.com/content/Early-Careers/?locale=en_US', 'https://careers.wipro.com/', 'Graduation completed · No backlogs · Full-time degree', 'Online Assessment → Business Discussion → HR → Pre-Skilling → LOI', ARRAY['work-and-learn', 'higher-education'], '#3B1F8E', 'Earn while you learn — get M.Tech/MBA free while working at Wipro'),

  ('capgemini-ase-2026', 'Capgemini', 'Off Campus Drive 2026 — Associate Software Engineer', 'Associate Software Engineer', 'open', 'hot', ARRAY['2024', '2025', '2026'], 'Bachelor''s / Master''s Degree (Engineering preferred)', '₹4–5 LPA', 'Chennai, Bangalore, Pune', '2026-02-01', 'Rolling', NULL, 'https://www.capgemini.com/in-en/careers/', 'https://www.capgemini.com/in-en/careers/', 'Engineering degree · Software development interest · CI/CD knowledge preferred', 'Online Assessment → Technical Interview → HR', ARRAY['mass-hiring', 'engineering', 'off-campus'], '#0070AD', 'Mass hiring for Associate Software Engineers across India'),

  ('accenture-ase-2026', 'Accenture', 'Off Campus Drive 2026 — Associate Software Engineer', 'Associate Software Engineer (ASE)', 'open', 'normal', ARRAY['2021', '2022', '2023', '2024', '2025'], 'B.E / B.Tech / M.E / M.Tech / MCA / M.Sc (All Branches)', '₹4.5–6 LPA', 'Bangalore, Chennai, Hyderabad, Pune, Mumbai, Kolkata, Indore, Jaipur', '2025-12-01', 'Rolling', NULL, 'https://www.accenture.com/in-en/careers', 'https://www.accenture.com/in-en/careers', 'Any year passout up to 2025 · All engineering branches · Integrated dual degree eligible', 'Mock Assessment → Behavioral + Cognitive → Technical → Communication → HR', ARRAY['mass-hiring', 'all-branches', 'multi-batch'], '#A100FF', 'Accepts 2021-2025 batches — widest batch window among top MNCs'),

  ('hcltech-get-2026', 'HCLTech', 'Off-Campus Drive 2026 — Graduate Engineer Trainee', 'Graduate Engineer Trainee / Service Desk Analyst', 'open', 'hot', ARRAY['2025'], 'B.E / B.Tech / MCA / M.Sc', '₹3.5–4.5 LPA (GET) · ₹10–13 LPA (Senior MT)', 'Bangalore, Chennai, Nagpur, Noida, Gurugram, Mumbai', '2026-01-18', '2026-02-22', 'Walk-in: Feb 21–22, 2026', 'https://www.hcltech.com/careers', 'https://www.hcltech.com/careers', '2025 batch · Min 60% throughout · 12-month service agreement · ₹50K bond', 'Registration → Online Assessment → Interview → Offer', ARRAY['walk-in', 'engineering', 'immediate-joining'], '#0074BA', 'Walk-in drive happening THIS WEEK — Feb 21-22 in Bangalore/Chennai/Nagpur'),

  ('deloitte-nla-2026', 'Deloitte', 'National Level Assessment (NLA) 2026', 'Analyst Trainee / Associate Analyst', 'open', 'normal', ARRAY['2024', '2025', '2026'], 'B.E / B.Tech / M.E / M.Tech / MCA / B.Sc / BCA / BBA / B.Com', '₹4.5–5 LPA (Analyst) · ₹6+ LPA (Consultant track)', 'Hyderabad, Bengaluru, Pune, Mumbai, Chennai', '2025-12-01', 'Rolling', NULL, 'https://apply.deloitte.com/', 'https://www2.deloitte.com/in/en/careers.html', 'Engineering + Non-Engineering both eligible · Good communication · Coding basics', 'Registration (NLA Portal) → Shortlisting → Online Assessment → Interview → Result', ARRAY['consulting', 'non-engineering-eligible', 'prestigious'], '#86BC25', 'Both engineers AND commerce/science grads can apply — rare for Big4'),

  ('ibm-ase-2026', 'IBM', 'Careers 2026 — Associate System Engineer', 'Associate System Engineer / Software Engineer Intern', 'open', 'normal', ARRAY['2024', '2025', '2026'], 'B.E / B.Tech (all branches) · Min 6 CGPA / 60%', '₹4.5–6 LPA', 'Kochi, Bangalore, Pune, Hyderabad', '2026-01-01', 'Rolling', NULL, 'https://www.ibm.com/careers', 'https://www.ibm.com/careers', 'CS/IT streams preferred · Fluent communication · Flexible location', 'Online Application → Assessment → Technical + HR Interview', ARRAY['product-company', 'engineering'], '#0530AD', 'Mainframe, Cloud, AI roles — strong technical foundation track'),

  ('tech-mahindra-2026', 'Tech Mahindra', 'Off Campus Drive 2026', 'Customer Support / Software Engineer Trainee', 'open', 'normal', ARRAY['2020', '2021', '2022', '2023', '2024', '2025', '2026'], 'Any Degree (All Branches)', '₹3.5–5 LPA', 'Kolkata, Noida, Pune, Hyderabad, Chennai', '2025-12-01', 'Rolling', NULL, 'https://careers.techmahindra.com/', 'https://careers.techmahindra.com/', 'Any graduate · 60% throughout · No backlogs · Age 18–28', 'Online Test → Technical + HR Interview → Offer', ARRAY['any-degree', 'multi-batch', 'walk-in-available'], '#C2002F', 'Widest eligibility — ANY degree, 2020-2026 batch, walk-ins available'),

  ('lt-get-2026', 'L&T', 'Graduate Engineer Trainee — FY26 Superset Drive', 'Graduate Engineer Trainee', 'open', 'normal', ARRAY['2025', '2026'], 'B.E / B.Tech (Core + CS/IT)', '₹6.33 LPA', 'Pan India (L&T project sites)', '2026-01-01', 'Rolling', NULL, 'https://app.joinsuperset.com/', 'https://www.larsentoubro.com/careers/', 'Min 60% / 6.75 CGPA · No backlogs · Full-time degree · 2-year ₹2L bond', 'Superset Registration → Technical Interview → HR → Offer', ARRAY['core-engineering', 'high-salary', 'bond'], '#003D6B', '₹6.33 LPA — highest among mass recruiters for freshers. 2-year bond applies'),

  ('ltimindtree-2026', 'LTIMindtree', 'Off Campus Drive 2026 — Associate Trainee', 'Associate Trainee', 'open', 'normal', ARRAY['2025', '2026'], 'B.E / B.Tech / MCA', '₹3.19 LPA', 'Pan India', '2026-02-05', 'Rolling', NULL, 'https://www.ltimindtree.com/careers/', 'https://www.ltimindtree.com/careers/', 'Engineering graduates · CS/IT preferred · Good communication', 'Online Assessment → Technical → HR', ARRAY['engineering', 'off-campus'], '#00457C', 'LTI + Mindtree merged entity — growing tech services company'),

  ('zoho-sde-2026', 'Zoho', 'Off Campus Drive 2026 — Software Developer', 'System Engineer / Software Developer / Application Security Engineer', 'open', 'normal', ARRAY['2024', '2025', '2026'], 'B.E / B.Tech / BCA / MCA / B.Sc / M.Sc', '₹5–8 LPA (varies by role)', 'Chennai, Tamil Nadu', '2026-01-15', 'Rolling', NULL, 'https://www.zoho.com/careers.html', 'https://www.zoho.com/careers.html', 'Strong DS/Algo · Java/C/C++ · Problem-solving · No degree % cutoff', 'Application → Aptitude Test → Advanced Programming → Technical Interview (2–3 rounds) → HR', ARRAY['product-company', 'dsa-heavy', 'no-bond'], '#D32011', 'Product company, no bond, Chennai-based — known for intense DSA interviews'),

  ('swiggy-asde-2026', 'Swiggy', 'Off Campus Drive 2026 — Associate SDE', 'Associate Software Development Engineer (Android/Backend)', 'open', 'normal', ARRAY['2024', '2025'], 'B.Tech / Bachelor''s Degree (CS/IT preferred)', '₹12–18 LPA (estimated)', 'Bengaluru', '2026-02-01', 'Rolling', NULL, 'https://careers.swiggy.com/', 'https://careers.swiggy.com/', 'B.Tech · Kotlin/Java for Android · Strong backend skills · API integration', 'Application → Online Coding → Technical Rounds (2–3) → HR', ARRAY['startup', 'high-salary', 'product-company'], '#FC8019', 'Startup CTC — significantly higher than service companies. Bangalore only'),

  ('amazon-sde1-2026', 'Amazon', 'Off Campus Drive 2026 — SDE-I', 'Software Development Engineer I', 'open', 'normal', ARRAY['2024', '2025'], 'B.Tech / M.Tech (CS/IT/ECE)', '₹20–30 LPA (estimated total comp)', 'Bengaluru, Hyderabad', '2026-02-10', 'Rolling', NULL, 'https://www.amazon.jobs/en/', 'https://www.amazon.jobs/en/', 'Strong DSA · System Design basics · One OOP language · Problem solving', 'Online Assessment (2 coding + 1 workstyle) → Phone Screen → Onsite (4 rounds)', ARRAY['faang', 'high-salary', 'product-company'], '#FF9900', 'FAANG-level CTC — ₹20-30 LPA total. Intense bar raiser interviews'),

  ('mphasis-trainee-2026', 'Mphasis', 'Off Campus Drive 2026 — Junior Trainee', 'Junior Trainee', 'open', 'normal', ARRAY['2024', '2025'], 'Any Degree', '₹3–4 LPA', 'Bengaluru, Chennai, Pune', '2026-02-15', 'Rolling', NULL, 'https://careers.mphasis.com/', 'https://careers.mphasis.com/', 'Any graduate · Good communication · Flexible shifts', 'Online Assessment → Interview → Offer', ARRAY['any-degree', 'off-campus'], '#2D2E83', 'Any degree eligible — good for non-engineers breaking into IT'),

  ('superset-career-fair-2026', 'Superset', 'Graduate Virtual Career Fair 2026', 'Multiple Roles (50+ companies)', 'open', 'hot', ARRAY['2024', '2025'], 'Any Graduate', '₹3–10 LPA (varies by company)', 'Virtual (Pan India)', '2026-01-01', 'Rolling', NULL, 'https://app.joinsuperset.com/', 'https://joinsuperset.com/', 'Any graduate · 2024/2025 batch · Register on Superset platform', 'Register → Complete Profile → Apply to companies → Assessment → Interview', ARRAY['multi-company', 'virtual-fair', 'any-degree'], '#6C5CE7', '50+ companies on one platform — L&T, Cognizant, HCLTech all hire through Superset')

ON CONFLICT (id) DO UPDATE SET
  company = EXCLUDED.company,
  program = EXCLUDED.program,
  role = EXCLUDED.role,
  status = EXCLUDED.status,
  urgency = EXCLUDED.urgency,
  batch = EXCLUDED.batch,
  qualification = EXCLUDED.qualification,
  salary = EXCLUDED.salary,
  locations = EXCLUDED.locations,
  deadline = EXCLUDED.deadline,
  apply_url = EXCLUDED.apply_url,
  eligibility = EXCLUDED.eligibility,
  highlight = EXCLUDED.highlight,
  updated_at = now();

-- Summary: Created campus_drives table and seeded 17 drives
