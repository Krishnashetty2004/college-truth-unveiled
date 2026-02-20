import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, X, Briefcase, AlertCircle, SlidersHorizontal } from "lucide-react";
import { BrotherhoodGate } from "@/components/BrotherhoodGate";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { OpportunityCard, OpportunitySkeletonCard } from "@/components/OpportunityCard";
import { useOpportunities, useOpportunityFilters, type OpportunityFilters } from "@/hooks/useOpportunities";

const roleTypeLabels: Record<string, string> = {
  internship: "Internship",
  fresher: "Fresher",
  experienced: "Experienced",
  unknown: "Other",
};

const departmentLabels: Record<string, string> = {
  engineering: "Engineering",
  analytics: "Analytics",
  data_science: "Data Science",
  product: "Product",
  design: "Design",
  marketing: "Marketing",
  sales: "Sales",
  operations: "Operations",
  finance: "Finance",
  hr: "HR",
  research: "Research",
  security: "Security",
  other: "Other",
};

const Opportunities = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchInput, setSearchInput] = useState(searchParams.get("search") ?? "");
  const [debouncedSearch, setDebouncedSearch] = useState(searchInput);

  // Debounce search
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchInput), 300);
    return () => clearTimeout(t);
  }, [searchInput]);

  const filters: OpportunityFilters = useMemo(() => ({
    search: debouncedSearch || undefined,
    roleType: searchParams.get("roleType") || undefined,
    department: searchParams.get("department") || undefined,
    tier: searchParams.get("tier") || undefined,
    isIndia: searchParams.get("isIndia") === "true" ? true : undefined,
    isRemote: searchParams.get("isRemote") === "true" ? true : undefined,
    sort: (searchParams.get("sort") as OpportunityFilters["sort"]) || "recent",
    page: Number(searchParams.get("page")) || 1,
  }), [debouncedSearch, searchParams]);

  const { data, isLoading, isError, refetch } = useOpportunities(filters);
  const { data: filterOptions } = useOpportunityFilters();

  const setFilter = (key: string, value: string | boolean | null) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value !== null && value !== false && value !== "") {
        next.set(key, String(value));
      } else {
        next.delete(key);
      }
      next.delete("page"); // reset page on filter change
      return next;
    });
  };

  const activeFilterCount = [
    filters.roleType,
    filters.department,
    filters.tier,
    filters.isIndia,
    filters.isRemote,
  ].filter(Boolean).length;

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

  return (
    <BrotherhoodGate>
      {/* Header */}
      <header className="border-b border-border bg-muted/30 px-4 py-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3">
            <Briefcase className="h-8 w-8 text-primary" />
            <div>
              <h1 className="font-display text-3xl font-bold">Opportunities</h1>
              <p className="text-muted-foreground">
                {data?.total ?? "..."} jobs & internships at top companies
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
            placeholder="Search companies, roles, locations..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filters */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Select
            value={filters.roleType ?? "all"}
            onValueChange={(v) => setFilter("roleType", v === "all" ? null : v)}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Role Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              {filterOptions?.roleTypes.map((r) => (
                <SelectItem key={r} value={r}>
                  {roleTypeLabels[r] || r}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.department ?? "all"}
            onValueChange={(v) => setFilter("department", v === "all" ? null : v)}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {filterOptions?.departments.map((d) => (
                <SelectItem key={d} value={d}>
                  {departmentLabels[d] || d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.tier ?? "all"}
            onValueChange={(v) => setFilter("tier", v === "all" ? null : v)}
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Company Tier" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tiers</SelectItem>
              {filterOptions?.tiers.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* India Only checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="india-only"
              checked={filters.isIndia === true}
              onCheckedChange={(checked) => setFilter("isIndia", checked === true ? true : null)}
            />
            <Label htmlFor="india-only" className="text-sm cursor-pointer">
              India Only
            </Label>
          </div>

          {/* Remote Only checkbox */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="remote-only"
              checked={filters.isRemote === true}
              onCheckedChange={(checked) => setFilter("isRemote", checked === true ? true : null)}
            />
            <Label htmlFor="remote-only" className="text-sm cursor-pointer">
              Remote
            </Label>
          </div>

          {/* Sort */}
          <div className="ml-auto flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <Select
              value={filters.sort ?? "recent"}
              onValueChange={(v) => setFilter("sort", v)}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="company">Company A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {activeFilterCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1 text-muted-foreground">
              <X className="h-4 w-4" /> Clear {activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""}
            </Button>
          )}
        </div>

        {/* Results */}
        {isLoading ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <OpportunitySkeletonCard key={i} />
            ))}
          </div>
        ) : isError ? (
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <AlertCircle className="h-12 w-12 text-destructive" />
            <p className="text-muted-foreground">Failed to load opportunities.</p>
            <Button variant="outline" onClick={() => refetch()}>Retry</Button>
          </div>
        ) : data && data.opportunities.length === 0 ? (
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <Briefcase className="h-12 w-12 text-muted-foreground" />
            <p className="text-lg font-medium">No opportunities found</p>
            <p className="text-sm text-muted-foreground">Try adjusting your search or filters.</p>
            <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
          </div>
        ) : (
          <>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data!.opportunities.map((opportunity) => (
                <OpportunityCard key={opportunity.id} opportunity={opportunity} />
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
    </BrotherhoodGate>
  );
};

export default Opportunities;
