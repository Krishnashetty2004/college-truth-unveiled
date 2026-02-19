import { MapPin, Building2, Clock, ExternalLink, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { Opportunity } from "@/hooks/useOpportunities";
import { getApplyRedirectUrl } from "@/hooks/useOpportunities";

interface OpportunityCardProps {
  opportunity: Opportunity;
}

const roleTypeColors: Record<string, string> = {
  internship: "bg-purple-500/10 text-purple-700 border-purple-500/30",
  fresher: "bg-emerald-500/10 text-emerald-700 border-emerald-500/30",
  experienced: "bg-blue-500/10 text-blue-700 border-blue-500/30",
  unknown: "bg-gray-500/10 text-gray-700 border-gray-500/30",
};

const tierColors: Record<string, string> = {
  "FAANG-tier": "bg-amber-500/10 text-amber-700 border-amber-500/30",
  "AI": "bg-violet-500/10 text-violet-700 border-violet-500/30",
  "Data/AI": "bg-violet-500/10 text-violet-700 border-violet-500/30",
  "Security": "bg-red-500/10 text-red-700 border-red-500/30",
  "Finance": "bg-green-500/10 text-green-700 border-green-500/30",
  "Database": "bg-cyan-500/10 text-cyan-700 border-cyan-500/30",
  "Cloud/API": "bg-sky-500/10 text-sky-700 border-sky-500/30",
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

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const handleApply = () => {
    const redirectUrl = getApplyRedirectUrl(opportunity.id);
    window.open(redirectUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-elevated hover:border-primary/30">
      <CardContent className="p-5">
        {/* Company & Title */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              <span className="text-sm font-medium text-muted-foreground truncate">
                {opportunity.company}
              </span>
            </div>
            <h3 className="mt-1 font-display text-base font-semibold leading-snug line-clamp-2">
              {opportunity.title}
            </h3>
          </div>
          {/* Apply count indicator */}
          {opportunity.apply_count > 0 && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3" />
              {opportunity.apply_count}
            </div>
          )}
        </div>

        {/* Location */}
        {opportunity.location && (
          <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
            <span className="truncate">{opportunity.location}</span>
          </div>
        )}

        {/* Badges */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <Badge
            variant="outline"
            className={roleTypeColors[opportunity.role_type] || roleTypeColors.unknown}
          >
            {opportunity.role_type === "unknown"
              ? "Job"
              : opportunity.role_type.charAt(0).toUpperCase() + opportunity.role_type.slice(1)}
          </Badge>
          <Badge variant="outline" className="capitalize">
            {departmentLabels[opportunity.department] || opportunity.department}
          </Badge>
          {opportunity.tier && (
            <Badge
              variant="outline"
              className={tierColors[opportunity.tier] || "bg-gray-500/10 text-gray-700 border-gray-500/30"}
            >
              {opportunity.tier}
            </Badge>
          )}
          {opportunity.is_india && (
            <Badge variant="secondary">India</Badge>
          )}
        </div>

        {/* Posted time & Apply */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {opportunity.posted_ago || "Recently"}
          </div>
          <Button
            size="sm"
            onClick={handleApply}
            className="gap-1.5"
          >
            Apply <ExternalLink className="h-3.5 w-3.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function OpportunitySkeletonCard() {
  return (
    <Card>
      <CardContent className="p-5 space-y-3">
        <div className="flex justify-between">
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-5 w-3/4" />
          </div>
        </div>
        <Skeleton className="h-4 w-1/2" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-14 rounded-full" />
        </div>
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-8 w-20 rounded-md" />
        </div>
      </CardContent>
    </Card>
  );
}
