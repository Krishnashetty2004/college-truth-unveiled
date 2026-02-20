import { useState, useMemo } from "react";
import { ExternalLink, Calendar, MapPin, GraduationCap, Flame, Clock, Building2, Filter, X, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SEO } from "@/components/SEO";
import { campusDrivesData, type CampusDrive } from "@/data/campusDrives";
import { motion } from "framer-motion";

const tagLabels: Record<string, string> = {
  "mass-hiring": "Mass Hiring",
  "engineering": "Engineering",
  "non-engineering": "Non-Engineering",
  "arts-commerce": "Arts/Commerce",
  "science-graduates": "Science Grads",
  "ai-ml": "AI/ML",
  "women-only": "Women Only",
  "upskilling": "Upskilling",
  "campus": "Campus",
  "off-campus": "Off-Campus",
  "work-and-learn": "Work & Learn",
  "higher-education": "Higher Ed",
  "all-branches": "All Branches",
  "multi-batch": "Multi-Batch",
  "walk-in": "Walk-in",
  "immediate-joining": "Immediate",
  "consulting": "Consulting",
  "non-engineering-eligible": "Non-Eng Eligible",
  "prestigious": "Prestigious",
  "product-company": "Product Co.",
  "core-engineering": "Core Eng",
  "high-salary": "High Salary",
  "bond": "Bond",
  "dsa-heavy": "DSA Heavy",
  "no-bond": "No Bond",
  "startup": "Startup",
  "faang": "FAANG",
  "any-degree": "Any Degree",
  "multi-company": "Multi-Company",
  "virtual-fair": "Virtual Fair",
};

function DriveCard({ drive, index }: { drive: CampusDrive; index: number }) {
  const isHot = drive.urgency === "hot";
  const isClosed = drive.status === "closed-recently" || drive.status === "closed";

  const deadlineDate = drive.deadline !== "Rolling" && drive.deadline !== "Ongoing"
    ? new Date(drive.deadline)
    : null;
  const isDeadlineSoon = deadlineDate && (deadlineDate.getTime() - Date.now()) < 7 * 24 * 60 * 60 * 1000;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className={`overflow-hidden transition-all hover:shadow-elevated ${isClosed ? "opacity-60" : ""}`}>
        <CardContent className="p-0">
          {/* Company header bar */}
          <div
            className="flex items-center justify-between px-4 py-2"
            style={{ backgroundColor: drive.color + "15" }}
          >
            <div className="flex items-center gap-2">
              <span
                className="font-bold text-sm"
                style={{ color: drive.color }}
              >
                {drive.company}
              </span>
              {isHot && !isClosed && (
                <Badge className="bg-orange-500 text-white text-[10px] px-1.5 py-0 gap-0.5">
                  <Flame className="h-3 w-3" /> HOT
                </Badge>
              )}
              {isClosed && (
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                  Closed
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              {drive.batch.map((b) => (
                <Badge key={b} variant="outline" className="text-[10px] px-1.5 py-0">
                  {b}
                </Badge>
              ))}
            </div>
          </div>

          <div className="p-4 space-y-3">
            {/* Title & Role */}
            <div>
              <h3 className="font-display text-base font-semibold leading-snug">
                {drive.program}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">{drive.role}</p>
            </div>

            {/* Highlight */}
            <div className="flex items-start gap-2 rounded-lg bg-primary/5 p-2.5 border border-primary/10">
              <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-foreground leading-relaxed">{drive.highlight}</p>
            </div>

            {/* Key Info Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <span className="font-medium text-foreground">💰</span>
                <span className="truncate">{drive.salary}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span className="truncate">{drive.locations}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <GraduationCap className="h-3 w-3" />
                <span className="truncate">{drive.qualification}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span className={isDeadlineSoon ? "text-orange-600 font-medium" : ""}>
                  {drive.deadline === "Rolling" || drive.deadline === "Ongoing"
                    ? drive.deadline
                    : `Due: ${new Date(drive.deadline).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}`
                  }
                </span>
              </div>
            </div>

            {/* Eligibility */}
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Eligibility:</span> {drive.eligibility}
            </p>

            {/* Process */}
            <p className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Process:</span> {drive.process}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {drive.tags.slice(0, 4).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0">
                  {tagLabels[tag] || tag}
                </Badge>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-2 pt-1">
              <a href={drive.applyUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button
                  size="sm"
                  className="w-full gap-1"
                  style={{ backgroundColor: drive.color }}
                  disabled={isClosed}
                >
                  Apply Now <ExternalLink className="h-3 w-3" />
                </Button>
              </a>
              <a href={drive.careerUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="gap-1">
                  Careers <ChevronRight className="h-3 w-3" />
                </Button>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const CampusDrives = () => {
  const [batchFilter, setBatchFilter] = useState<string>("all");
  const [companyFilter, setCompanyFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("open");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  // Get unique companies
  const companies = useMemo(() => {
    const set = new Set(campusDrivesData.drives.map((d) => d.company));
    return Array.from(set).sort();
  }, []);

  // Get unique batches
  const batches = useMemo(() => {
    const set = new Set(campusDrivesData.drives.flatMap((d) => d.batch));
    return Array.from(set).sort().reverse();
  }, []);

  // Filter drives
  const filteredDrives = useMemo(() => {
    return campusDrivesData.drives.filter((drive) => {
      if (batchFilter !== "all" && !drive.batch.includes(batchFilter)) return false;
      if (companyFilter !== "all" && drive.company !== companyFilter) return false;
      if (statusFilter === "open" && drive.status !== "open") return false;
      if (statusFilter === "closed" && drive.status === "open") return false;
      if (typeFilter === "engineering" && !drive.tags.some(t => ["engineering", "mass-hiring", "product-company", "faang"].includes(t))) return false;
      if (typeFilter === "non-engineering" && !drive.tags.some(t => ["non-engineering", "arts-commerce", "any-degree", "non-engineering-eligible"].includes(t))) return false;
      return true;
    });
  }, [batchFilter, companyFilter, statusFilter, typeFilter]);

  // Sort: hot first, then by deadline
  const sortedDrives = useMemo(() => {
    return [...filteredDrives].sort((a, b) => {
      // Hot drives first
      if (a.urgency === "hot" && b.urgency !== "hot") return -1;
      if (b.urgency === "hot" && a.urgency !== "hot") return 1;
      // Then by deadline (earlier first)
      if (a.deadline === "Rolling" && b.deadline !== "Rolling") return 1;
      if (b.deadline === "Rolling" && a.deadline !== "Rolling") return -1;
      return 0;
    });
  }, [filteredDrives]);

  const activeFilterCount = [
    batchFilter !== "all",
    companyFilter !== "all",
    statusFilter !== "open",
    typeFilter !== "all",
  ].filter(Boolean).length;

  const clearFilters = () => {
    setBatchFilter("all");
    setCompanyFilter("all");
    setStatusFilter("open");
    setTypeFilter("all");
  };

  return (
    <>
      <SEO
        title="Campus Drives 2026"
        description={`${campusDrivesData.openDrives} open campus drives from TCS, Infosys, Wipro, Cognizant & more. Apply for fresher jobs at top MNCs. Updated ${campusDrivesData.lastUpdated}.`}
        url="/campus-drives"
      />

      {/* Header */}
      <header className="border-b border-border bg-muted/30 px-4 py-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
              <h1 className="font-display text-3xl font-bold">Campus Drives 2026</h1>
              <p className="text-muted-foreground">
                {campusDrivesData.openDrives} open drives · Updated {new Date(campusDrivesData.lastUpdated).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-4 py-6">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Select value={batchFilter} onValueChange={setBatchFilter}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Batch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Batches</SelectItem>
              {batches.map((b) => (
                <SelectItem key={b} value={b}>{b} Batch</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={companyFilter} onValueChange={setCompanyFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Company" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Companies</SelectItem>
              {companies.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="non-engineering">Non-Engineering</SelectItem>
            </SelectContent>
          </Select>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="open">Open Only</SelectItem>
              <SelectItem value="all">All Drives</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
            </SelectContent>
          </Select>

          {activeFilterCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1 text-muted-foreground">
              <X className="h-4 w-4" /> Clear
            </Button>
          )}

          <div className="ml-auto text-sm text-muted-foreground">
            {sortedDrives.length} drive{sortedDrives.length !== 1 ? "s" : ""}
          </div>
        </div>

        {/* Hot drives banner */}
        {sortedDrives.some(d => d.urgency === "hot") && (
          <div className="mb-6 rounded-lg bg-orange-500/10 border border-orange-500/20 p-3 flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-500" />
            <span className="text-sm font-medium text-orange-700">
              {sortedDrives.filter(d => d.urgency === "hot").length} hot drives with urgent deadlines — apply ASAP!
            </span>
          </div>
        )}

        {/* Drives Grid */}
        {sortedDrives.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sortedDrives.map((drive, i) => (
              <DriveCard key={drive.id} drive={drive} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <Building2 className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-4 font-display text-lg">No drives match your filters</p>
            <p className="mt-2 text-sm text-muted-foreground">Try adjusting your filters to see more results.</p>
            <Button variant="outline" className="mt-4" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Footer note */}
        <div className="mt-10 rounded-lg border border-border bg-card p-4 text-center">
          <p className="text-sm text-muted-foreground">
            💡 <span className="font-medium text-foreground">Pro tip:</span> Register on{" "}
            <a href="https://app.joinsuperset.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Superset
            </a>
            {" "}— many companies like L&T, Cognizant, HCLTech hire exclusively through it.
          </p>
        </div>
      </main>
    </>
  );
};

export default CampusDrives;
