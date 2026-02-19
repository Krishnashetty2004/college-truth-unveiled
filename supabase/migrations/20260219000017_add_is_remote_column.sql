-- Add is_remote column to opportunities table
ALTER TABLE public.opportunities ADD COLUMN IF NOT EXISTS is_remote BOOLEAN DEFAULT false;

-- Create index for efficient filtering
CREATE INDEX IF NOT EXISTS idx_opportunities_is_remote ON public.opportunities(is_remote);

-- Update the public view to include is_remote
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
  is_remote,
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
