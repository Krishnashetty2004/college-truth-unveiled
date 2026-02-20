import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface ReviewStatus {
  hasReview: boolean;
  isLoading: boolean;
  reviewCount: number;
}

export function useHasWrittenReview(): ReviewStatus {
  const [hasReview, setHasReview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    async function checkReviewStatus() {
      try {
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
          setIsLoading(false);
          return;
        }

        // Check if user has any published reviews
        const { count, error } = await supabase
          .from("reviews")
          .select("*", { count: "exact", head: true })
          .eq("user_id", user.id)
          .eq("status", "published");

        if (error) {
          console.error("Error checking review status:", error);
          setIsLoading(false);
          return;
        }

        const reviewCount = count || 0;
        setReviewCount(reviewCount);
        setHasReview(reviewCount > 0);
        setIsLoading(false);
      } catch (err) {
        console.error("Error in useHasWrittenReview:", err);
        setIsLoading(false);
      }
    }

    checkReviewStatus();
  }, []);

  return { hasReview, isLoading, reviewCount };
}
