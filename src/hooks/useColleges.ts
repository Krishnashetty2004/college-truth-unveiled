import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type College = Tables<"colleges">;

export interface CollegeFilters {
  search?: string;
  city?: string;
  type?: string;
  ownership?: string;
  tier?: string;
  page?: number;
}

const PAGE_SIZE = 20;

async function fetchColleges(filters: CollegeFilters) {
  const page = filters.page ?? 1;
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  let query = supabase
    .from("colleges")
    .select("*", { count: "exact" })
    .eq("is_active", true)
    .order("name", { ascending: true });

  if (filters.search) {
    query = query.or(
      `name.ilike.%${filters.search}%,short_name.ilike.%${filters.search}%`
    );
  }
  if (filters.city) query = query.eq("city", filters.city);
  if (filters.type) query = query.eq("type", filters.type as any);
  if (filters.ownership) query = query.eq("ownership", filters.ownership as any);
  if (filters.tier) query = query.eq("tier", filters.tier as any);

  query = query.range(from, to);

  const { data, error, count } = await query;
  if (error) throw error;

  return {
    colleges: data as College[],
    total: count ?? 0,
    totalPages: Math.ceil((count ?? 0) / PAGE_SIZE),
    page,
  };
}

export function useColleges(filters: CollegeFilters) {
  return useQuery({
    queryKey: ["colleges", filters],
    queryFn: () => fetchColleges(filters),
    placeholderData: (prev) => prev,
  });
}
