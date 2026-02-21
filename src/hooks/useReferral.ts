import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  trackReferralClick,
  trackConversion,
  createReferral,
  getUserRefCode,
  getReferralStats,
  getShareUrls,
} from "@/utils/referral";

// Track click on app load - fails silently
export function useTrackReferralClick() {
  useEffect(() => {
    try {
      trackReferralClick();
    } catch (e) {
      // Fail silently - don't break the app
    }
  }, []);
}

// Handle referral setup for authenticated users - fails silently
export function useReferralSetup() {
  useEffect(() => {
    const setupReferral = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session?.user) return;

        const userId = session.user.id;
        const email = session.user.email || "";

        // Check if user already has a ref code
        const existingCode = await getUserRefCode(userId);

        if (!existingCode) {
          // New user - track conversion and create their ref code
          await trackConversion(userId).catch(() => {});
          await createReferral(userId, email).catch(() => {});
        }
      } catch (e) {
        // Fail silently - don't break the app
      }
    };

    setupReferral();

    // Also listen for auth changes (new signups)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      try {
        if (event === "SIGNED_IN" && session?.user) {
          const existingCode = await getUserRefCode(session.user.id);

          if (!existingCode) {
            await trackConversion(session.user.id).catch(() => {});
            await createReferral(session.user.id, session.user.email || "").catch(() => {});
          }
        }
      } catch (e) {
        // Fail silently
      }
    });

    return () => subscription.unsubscribe();
  }, []);
}

// Get user's referral data
export function useUserReferral() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<{
    refCode: string;
    clicks: number;
    signups: number;
    shareUrls: ReturnType<typeof getShareUrls>;
  } | null>(null);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session?.user) {
          setLoading(false);
          return;
        }

        const data = await getReferralStats(session.user.id);

        if (data) {
          setStats({
            ...data,
            shareUrls: getShareUrls(data.refCode),
          });
        }
      } catch (e) {
        // Fail silently
      }

      setLoading(false);
    };

    loadStats();
  }, []);

  return { loading, stats };
}
