import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Opportunity {
  id: string;
  company: string;
  title: string;
  location: string | null;
  department: string;
  role_type: string;
  tier: string | null;
  funded: string | null;
  source: string | null;
  is_india: boolean;
  is_remote: boolean;
  is_fresh: boolean;
  posted_ago: string | null;
  updated_at: string | null;
  view_count: number;
  apply_count: number;
  created_at: string;
}

export interface OpportunityFilters {
  search?: string;
  roleType?: string;
  department?: string;
  tier?: string;
  isIndia?: boolean;
  isRemote?: boolean;
  sort?: "recent" | "company" | "popular";
  page?: number;
}

const PAGE_SIZE = 30;

async function fetchOpportunities(filters: OpportunityFilters) {
  const page = filters.page ?? 1;
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  // Query from the public view (which hides apply_url)
  let query = supabase
    .from("opportunities_public")
    .select("*", { count: "exact" });

  // Search filter - search in company and title
  if (filters.search) {
    query = query.or(
      `company.ilike.%${filters.search}%,title.ilike.%${filters.search}%,location.ilike.%${filters.search}%`
    );
  }

  // Role type filter
  if (filters.roleType && filters.roleType !== "all") {
    query = query.eq("role_type", filters.roleType);
  }

  // Department filter
  if (filters.department && filters.department !== "all") {
    query = query.eq("department", filters.department);
  }

  // Tier filter
  if (filters.tier && filters.tier !== "all") {
    query = query.eq("tier", filters.tier);
  }

  // India only filter
  if (filters.isIndia === true) {
    query = query.eq("is_india", true);
  }

  // Remote only filter
  if (filters.isRemote === true) {
    query = query.eq("is_remote", true);
  }

  // Sorting
  switch (filters.sort) {
    case "company":
      query = query.order("company", { ascending: true });
      break;
    case "popular":
      query = query.order("apply_count", { ascending: false });
      break;
    case "recent":
    default:
      query = query.order("updated_at", { ascending: false, nullsFirst: false });
      break;
  }

  // Pagination
  query = query.range(from, to);

  const { data, error, count } = await query;
  if (error) throw error;

  return {
    opportunities: (data as Opportunity[]) ?? [],
    total: count ?? 0,
    totalPages: Math.ceil((count ?? 0) / PAGE_SIZE),
    page,
  };
}

export function useOpportunities(filters: OpportunityFilters) {
  return useQuery({
    queryKey: ["opportunities", filters],
    queryFn: () => fetchOpportunities(filters),
    placeholderData: (prev) => prev,
  });
}

// Helper to get unique values for filters
export function useOpportunityFilters() {
  return useQuery({
    queryKey: ["opportunity-filters"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("opportunities_public")
        .select("tier, department, role_type");

      if (error) throw error;

      const tiers = [...new Set(data?.map((d) => d.tier).filter(Boolean))].sort();
      const departments = [...new Set(data?.map((d) => d.department).filter(Boolean))].sort();
      const roleTypes = [...new Set(data?.map((d) => d.role_type).filter(Boolean))].sort();

      return { tiers, departments, roleTypes };
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
}

// Get Supabase URL for apply redirect
export function getApplyRedirectUrl(opportunityId: string): string {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  return `${supabaseUrl}/functions/v1/apply-redirect?id=${encodeURIComponent(opportunityId)}`;
}
