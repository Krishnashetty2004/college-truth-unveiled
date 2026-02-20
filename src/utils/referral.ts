import { supabase } from "@/integrations/supabase/client";

const REF_CODE_KEY = "ref_code";
const REF_SOURCE_KEY = "ref_source";

// Track referral click on page load
export async function trackReferralClick() {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get("r");
  const source = params.get("src") || "direct";

  if (ref) {
    // Store for later (signup might happen later)
    localStorage.setItem(REF_CODE_KEY, ref);
    localStorage.setItem(REF_SOURCE_KEY, source);

    // Log the click (don't await - fire and forget)
    supabase
      .from("referral_clicks")
      .insert({
        ref_code: ref,
        source: source,
        user_agent: navigator.userAgent,
      })
      .then(() => {})
      .catch(() => {});

    // Clean URL without reload
    const url = new URL(window.location.href);
    url.searchParams.delete("r");
    url.searchParams.delete("src");
    window.history.replaceState({}, "", url.pathname + url.search);
  }
}

// Generate ref code for a user
export function generateRefCode(email: string): string {
  const prefix = email.split("@")[0].replace(/[^a-zA-Z0-9]/g, "").slice(0, 8).toLowerCase();
  const suffix = Math.random().toString(36).slice(2, 6);
  return `${prefix}_${suffix}`;
}

// Create referral entry for new user
export async function createReferral(userId: string, email: string): Promise<string | null> {
  const refCode = generateRefCode(email);

  const { error } = await supabase.from("referrals").insert({
    referrer_id: userId,
    ref_code: refCode,
  });

  if (error) {
    console.error("Failed to create referral:", error);
    return null;
  }

  return refCode;
}

// Track conversion (call after signup)
export async function trackConversion(newUserId: string) {
  const refCode = localStorage.getItem(REF_CODE_KEY);

  if (refCode) {
    await supabase.from("referral_conversions").insert({
      ref_code: refCode,
      new_user_id: newUserId,
    });

    // Clean up
    localStorage.removeItem(REF_CODE_KEY);
    localStorage.removeItem(REF_SOURCE_KEY);
  }
}

// Get user's referral code
export async function getUserRefCode(userId: string): Promise<string | null> {
  const { data, error } = await supabase
    .from("referrals")
    .select("ref_code")
    .eq("referrer_id", userId)
    .single();

  if (error || !data) return null;
  return data.ref_code;
}

// Get referral stats for a user
export async function getReferralStats(userId: string) {
  const { data: referral } = await supabase
    .from("referrals")
    .select("ref_code")
    .eq("referrer_id", userId)
    .single();

  if (!referral) return null;

  const { count: clicks } = await supabase
    .from("referral_clicks")
    .select("*", { count: "exact", head: true })
    .eq("ref_code", referral.ref_code);

  const { count: signups } = await supabase
    .from("referral_conversions")
    .select("*", { count: "exact", head: true })
    .eq("ref_code", referral.ref_code);

  return {
    refCode: referral.ref_code,
    clicks: clicks || 0,
    signups: signups || 0,
  };
}

// Generate share URLs
export function getShareUrls(refCode: string) {
  const baseUrl = "https://ratemycollege.vertexhq.in";
  const refUrl = `${baseUrl}/?r=${refCode}`;

  return {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      `Check real college reviews and live hiring drives 👇\n${refUrl}&src=wa`
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      `${refUrl}&src=tw`
    )}&text=${encodeURIComponent("Your placement cell won't show you this")}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(
      `${refUrl}&src=tg`
    )}&text=${encodeURIComponent("Real college reviews + fresher hiring drives")}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      `${refUrl}&src=li`
    )}`,
    instagram: `${refUrl}&src=ig`, // Copy to clipboard
    direct: refUrl,
  };
}
