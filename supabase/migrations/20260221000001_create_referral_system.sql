-- Referral tracking system

-- Referral links table
CREATE TABLE IF NOT EXISTS referrals (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  referrer_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  ref_code TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Every click tracked
CREATE TABLE IF NOT EXISTS referral_clicks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ref_code TEXT REFERENCES referrals(ref_code) ON DELETE CASCADE,
  source TEXT DEFAULT 'direct', -- ig, wa, li, tw, tg, direct
  ip_hash TEXT,
  user_agent TEXT,
  clicked_at TIMESTAMPTZ DEFAULT now()
);

-- When a click becomes a signup
CREATE TABLE IF NOT EXISTS referral_conversions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ref_code TEXT REFERENCES referrals(ref_code) ON DELETE CASCADE,
  new_user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  converted_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes for fast lookups
CREATE INDEX IF NOT EXISTS idx_clicks_ref ON referral_clicks(ref_code);
CREATE INDEX IF NOT EXISTS idx_conversions_ref ON referral_conversions(ref_code);
CREATE INDEX IF NOT EXISTS idx_referrals_user ON referrals(referrer_id);

-- RLS policies
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_clicks ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_conversions ENABLE ROW LEVEL SECURITY;

-- Users can see their own referrals
CREATE POLICY "Users can view own referrals"
  ON referrals FOR SELECT
  USING (auth.uid() = referrer_id);

CREATE POLICY "Users can insert own referrals"
  ON referrals FOR INSERT
  WITH CHECK (auth.uid() = referrer_id);

-- Anyone can insert clicks (anonymous tracking)
CREATE POLICY "Anyone can insert clicks"
  ON referral_clicks FOR INSERT
  WITH CHECK (true);

-- Users can see clicks on their ref codes
CREATE POLICY "Users can view clicks on own refs"
  ON referral_clicks FOR SELECT
  USING (
    ref_code IN (SELECT ref_code FROM referrals WHERE referrer_id = auth.uid())
  );

-- Anyone can insert conversions (happens on signup)
CREATE POLICY "Anyone can insert conversions"
  ON referral_conversions FOR INSERT
  WITH CHECK (true);

-- Users can see conversions on their ref codes
CREATE POLICY "Users can view own conversions"
  ON referral_conversions FOR SELECT
  USING (
    ref_code IN (SELECT ref_code FROM referrals WHERE referrer_id = auth.uid())
  );
