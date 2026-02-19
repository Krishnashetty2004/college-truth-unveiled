-- =============================================
-- Opportunities Table - Jobs & Internships
-- =============================================

-- Create job_type enum
DO $$ BEGIN
  CREATE TYPE public.job_type AS ENUM ('internship', 'fresher', 'experienced', 'unknown');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- Create department enum
DO $$ BEGIN
  CREATE TYPE public.job_department AS ENUM (
    'engineering', 'analytics', 'data_science', 'product',
    'design', 'marketing', 'sales', 'operations',
    'finance', 'hr', 'research', 'security', 'other'
  );
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- Main opportunities table
CREATE TABLE IF NOT EXISTS public.opportunities (
  id TEXT PRIMARY KEY,
  company TEXT NOT NULL,
  title TEXT NOT NULL,
  location TEXT,
  department public.job_department DEFAULT 'other',
  role_type public.job_type DEFAULT 'unknown',
  tier TEXT,
  funded TEXT,
  source TEXT,
  apply_url TEXT NOT NULL,
  is_india BOOLEAN DEFAULT false,
  is_fresh BOOLEAN DEFAULT true,
  posted_ago TEXT,
  updated_at TIMESTAMPTZ,
  scraped_at TIMESTAMPTZ,
  view_count INTEGER DEFAULT 0,
  apply_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;

-- RLS Policies
DROP POLICY IF EXISTS "Anyone can view opportunities" ON public.opportunities;
CREATE POLICY "Anyone can view opportunities" ON public.opportunities
  FOR SELECT USING (is_active = true);

DROP POLICY IF EXISTS "Admins can manage opportunities" ON public.opportunities;
CREATE POLICY "Admins can manage opportunities" ON public.opportunities
  FOR ALL TO authenticated
  USING (public.is_admin_or_moderator(auth.uid()));

-- Indexes for efficient filtering
CREATE INDEX IF NOT EXISTS idx_opportunities_company ON public.opportunities(company);
CREATE INDEX IF NOT EXISTS idx_opportunities_role_type ON public.opportunities(role_type);
CREATE INDEX IF NOT EXISTS idx_opportunities_is_india ON public.opportunities(is_india);
CREATE INDEX IF NOT EXISTS idx_opportunities_tier ON public.opportunities(tier);
CREATE INDEX IF NOT EXISTS idx_opportunities_department ON public.opportunities(department);
CREATE INDEX IF NOT EXISTS idx_opportunities_is_active ON public.opportunities(is_active);
CREATE INDEX IF NOT EXISTS idx_opportunities_updated_at ON public.opportunities(updated_at DESC);

-- Public view that HIDES apply_url from frontend
DROP VIEW IF EXISTS public.opportunities_public;
CREATE VIEW public.opportunities_public AS
SELECT
  id,
  company,
  title,
  location,
  department,
  role_type,
  tier,
  funded,
  source,
  is_india,
  is_fresh,
  posted_ago,
  updated_at,
  view_count,
  apply_count,
  created_at
FROM public.opportunities
WHERE is_active = true;

-- Grant select on view to anon and authenticated
GRANT SELECT ON public.opportunities_public TO anon, authenticated;

-- Function to get apply URL (for edge function use only)
CREATE OR REPLACE FUNCTION public.get_opportunity_apply_url(opportunity_id TEXT)
RETURNS TEXT
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT apply_url FROM opportunities WHERE id = opportunity_id AND is_active = true;
$$;

-- Function to increment apply count
CREATE OR REPLACE FUNCTION public.increment_apply_count(opportunity_id TEXT)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE opportunities SET apply_count = apply_count + 1 WHERE id = opportunity_id;
$$;
