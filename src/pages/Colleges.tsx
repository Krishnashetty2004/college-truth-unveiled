import { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Search, X, GraduationCap, MapPin, Users, Calendar, ChevronRight, AlertCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useColleges, type CollegeFilters, type College } from "@/hooks/useColleges";
import { Constants } from "@/integrations/supabase/types";

const CITIES = [
  "Hyderabad", "Bangalore", "Delhi", "Chennai", "Mumbai",
  "Pune", "Kolkata", "Vizag", "Ahmedabad", "Jaipur",
];

const TYPES = Constants.public.Enums.college_type;
const OWNERSHIPS = Constants.public.Enums.college_ownership;
const TIERS = Constants.public.Enums.college_tier;

const tierLabel = (t: string) =>
  t === "tier_1" ? "Tier 1" : t === "tier_2" ? "Tier 2" : "Tier 3";

const tierColor = (t: string) =>
  t === "tier_1"
    ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/30"
    : t === "tier_2"
    ? "bg-blue-500/10 text-blue-700 border-blue-500/30"
    : "bg-orange-500/10 text-orange-700 border-orange-500/30";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function CollegeCard({ college }: { college: College }) {
  const score = college.ai_overall_score ? Number(college.ai_overall_score) : null;

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-elevated hover:border-primary/30">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-base font-semibold leading-snug line-clamp-2">
              {college.name}
            </h3>
            {college.short_name && (
              <p className="mt-0.5 text-sm text-muted-foreground">{college.short_name}</p>
            )}
          </div>
          {/* Score circle */}
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/5">
            {score && score > 0 ? (
              <span className="font-display text-sm font-bold text-primary">{score.toFixed(1)}</span>
            ) : (
              <span className="text-[10px] text-muted-foreground text-center leading-tight">N/A</span>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="mt-3 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          {college.city}, {college.state}
        </div>

        {/* Badges */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Badge variant="outline" className={tierColor(college.tier)}>
            {tierLabel(college.tier)}
          </Badge>
          <Badge variant="outline" className="capitalize">
            {college.type}
          </Badge>
          <Badge variant="secondary" className="capitalize">
            {college.ownership}
          </Badge>
        </div>

        {/* Meta row */}
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          {college.established_year && (
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" /> Est. {college.established_year}
            </span>
          )}
          {college.student_population && (
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" /> {college.student_population.toLocaleString()}
            </span>
          )}
          <span className="flex items-center gap-1">
            {college.total_reviews} review{college.total_reviews !== 1 ? "s" : ""}
          </span>
        </div>

        {/* CTA */}
        <Link
          to={`/colleges/${college.id}`}
          className="mt-4 flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View Details <ChevronRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}

function SkeletonCard() {
  return (
    <Card>
      <CardContent className="p-5 space-y-3">
        <div className="flex justify-between">
          <div className="space-y-2 flex-1">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/3" />
          </div>
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
        <Skeleton className="h-4 w-1/2" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-14 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
    </Card>
  );
}

const Colleges = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchInput, setSearchInput] = useState(searchParams.get("search") ?? "");
  const [debouncedSearch, setDebouncedSearch] = useState(searchInput);

  // Debounce search
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchInput), 300);
    return () => clearTimeout(t);
  }, [searchInput]);

  const filters: CollegeFilters = useMemo(() => ({
    search: debouncedSearch || undefined,
    city: searchParams.get("city") || undefined,
    type: searchParams.get("type") || undefined,
    ownership: searchParams.get("ownership") || undefined,
    tier: searchParams.get("tier") || undefined,
    page: Number(searchParams.get("page")) || 1,
  }), [debouncedSearch, searchParams]);

  const { data, isLoading, isError, refetch } = useColleges(filters);

  const setFilter = (key: string, value: string | null) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) {
        next.set(key, value);
      } else {
        next.delete(key);
      }
      next.delete("page"); // reset page on filter change
      return next;
    });
  };

  const activeFilterCount = [filters.city, filters.type, filters.ownership, filters.tier].filter(Boolean).length;

  const clearFilters = () => {
    setSearchParams({});
    setSearchInput("");
  };

  const goToPage = (p: number) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (p > 1) next.set("page", String(p));
      else next.delete("page");
      return next;
    });
  };

  const cityFilter = filters.city;
  const seoTitle = cityFilter ? `Colleges in ${cityFilter}` : "College Directory";
  const seoDescription = cityFilter
    ? `Browse and compare colleges in ${cityFilter}. Read anonymous student reviews across 12 categories.`
    : "Browse 200+ colleges across India's top education cities. Read anonymous student reviews and find your perfect college.";

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        url={cityFilter ? `/colleges?city=${cityFilter}` : "/colleges"}
      />

      {/* Header */}
      <header className="border-b border-border bg-muted/30 px-4 py-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            <div>
              <h1 className="font-display text-3xl font-bold">College Directory</h1>
              <p className="text-muted-foreground">
                Browse {data?.total ?? "..."} colleges across India's top education cities
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search colleges by name..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filters */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Select
            value={filters.city ?? "all"}
            onValueChange={(v) => setFilter("city", v === "all" ? null : v)}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              {CITIES.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.type ?? "all"}
            onValueChange={(v) => setFilter("type", v === "all" ? null : v)}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {TYPES.map((t) => (
                <SelectItem key={t} value={t}>{capitalize(t)}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.ownership ?? "all"}
            onValueChange={(v) => setFilter("ownership", v === "all" ? null : v)}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="All Ownership" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ownership</SelectItem>
              {OWNERSHIPS.map((o) => (
                <SelectItem key={o} value={o}>{capitalize(o)}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.tier ?? "all"}
            onValueChange={(v) => setFilter("tier", v === "all" ? null : v)}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="All Tiers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tiers</SelectItem>
              {TIERS.map((t) => (
                <SelectItem key={t} value={t}>{tierLabel(t)}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {activeFilterCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1 text-muted-foreground">
              <X className="h-4 w-4" /> Clear {activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""}
            </Button>
          )}
        </div>

        {/* Results */}
        {isLoading ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : isError ? (
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <AlertCircle className="h-12 w-12 text-destructive" />
            <p className="text-muted-foreground">Failed to load colleges.</p>
            <Button variant="outline" onClick={() => refetch()}>Retry</Button>
          </div>
        ) : data && data.colleges.length === 0 ? (
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <GraduationCap className="h-12 w-12 text-muted-foreground" />
            <p className="text-lg font-medium">No colleges found</p>
            <p className="text-sm text-muted-foreground">Try adjusting your search or filters.</p>
            <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
          </div>
        ) : (
          <>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data!.colleges.map((college) => (
                <CollegeCard key={college.id} college={college} />
              ))}
            </div>

            {/* Pagination */}
            {data && data.totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={data.page <= 1}
                  onClick={() => goToPage(data.page - 1)}
                >
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {data.page} of {data.totalPages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={data.page >= data.totalPages}
                  onClick={() => goToPage(data.page + 1)}
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </main>
    </>
  );
};

export default Colleges;
