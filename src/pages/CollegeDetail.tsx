import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import {
  MapPin, Calendar, Users, Globe, ArrowLeft, Star,
  GraduationCap, MessageSquare, TrendingUp, AlertCircle,
  BookOpen, ArrowBigUp, ChevronRight,
} from "lucide-react";

type College = Tables<"colleges">;
type Review = Tables<"reviews">;
type Story = Tables<"college_stories">;

const RATING_CATEGORIES = [
  { key: "avg_placement", label: "Placements" },
  { key: "avg_faculty", label: "Faculty" },
  { key: "avg_curriculum", label: "Curriculum" },
  { key: "avg_hostel", label: "Hostel" },
  { key: "avg_food", label: "Food" },
  { key: "avg_wifi", label: "WiFi" },
  { key: "avg_infrastructure", label: "Infrastructure" },
  { key: "avg_campus_life", label: "Campus Life" },
  { key: "avg_safety", label: "Safety" },
  { key: "avg_location", label: "Location" },
  { key: "avg_admin", label: "Administration" },
  { key: "avg_value_for_money", label: "Value for Money" },
] as const;

const tierLabel = (t: string) =>
  t === "tier_1" ? "Tier 1" : t === "tier_2" ? "Tier 2" : "Tier 3";

const tierColor = (t: string) =>
  t === "tier_1"
    ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/30"
    : t === "tier_2"
    ? "bg-blue-500/10 text-blue-700 border-blue-500/30"
    : "bg-orange-500/10 text-orange-700 border-orange-500/30";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function RatingBar({ label, value }: { label: string; value: number | null }) {
  const v = value ? Number(value) : 0;
  const pct = (v / 5) * 100;
  return (
    <div className="flex items-center gap-3">
      <span className="w-32 shrink-0 text-sm text-muted-foreground">{label}</span>
      <Progress value={pct} className="h-2 flex-1" />
      <span className="w-8 text-right text-sm font-medium">
        {v > 0 ? v.toFixed(1) : "—"}
      </span>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h4 className="font-display font-semibold">{review.title}</h4>
            <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
              <Badge variant="secondary" className="capitalize text-xs">
                {review.reviewer_type.replace("_", " ")}
              </Badge>
              {review.course && <span>• {review.course}</span>}
              {review.department && <span>• {review.department}</span>}
            </div>
          </div>
          {review.overall_rating && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/5">
              <span className="font-display text-sm font-bold text-primary">
                {Number(review.overall_rating).toFixed(1)}
              </span>
            </div>
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {review.content}
        </p>

        {(review.pros || review.cons) && (
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {review.pros && (
              <div className="rounded-lg bg-emerald-500/5 p-3">
                <p className="text-xs font-medium text-emerald-700">Pros</p>
                <p className="mt-1 text-xs text-muted-foreground">{review.pros}</p>
              </div>
            )}
            {review.cons && (
              <div className="rounded-lg bg-red-500/5 p-3">
                <p className="text-xs font-medium text-red-700">Cons</p>
                <p className="mt-1 text-xs text-muted-foreground">{review.cons}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span>{new Date(review.created_at).toLocaleDateString()}</span>
          <span>{review.helpful_count} found helpful</span>
        </div>
      </CardContent>
    </Card>
  );
}

const CollegeDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: college, isLoading, isError } = useQuery({
    queryKey: ["college", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("colleges")
        .select("*")
        .eq("id", id!)
        .single();
      if (error) throw error;
      return data as College;
    },
    enabled: !!id,
  });

  const { data: reviews } = useQuery({
    queryKey: ["college-reviews", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .eq("college_id", id!)
        .eq("status", "published")
        .order("created_at", { ascending: false })
        .limit(20);
      if (error) throw error;
      return data as Review[];
    },
    enabled: !!id,
  });

  const { data: collegeStories } = useQuery({
    queryKey: ["college-stories", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("college_stories")
        .select("*")
        .eq("college_id", id!)
        .eq("status", "published")
        .order("upvote_count", { ascending: false })
        .limit(5);
      if (error) throw error;
      return data as Story[];
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pl-14">
        <Navbar />
        <div className="container mx-auto max-w-5xl px-4 py-8 space-y-6">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-5 w-48" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Skeleton className="h-64" />
            <Skeleton className="h-64" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !college) {
    return (
      <div className="min-h-screen bg-background pl-14">
        <Navbar />
        <div className="container mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-20 text-center">
          <AlertCircle className="h-12 w-12 text-destructive" />
          <p className="text-lg font-medium">College not found</p>
          <Link to="/colleges">
            <Button variant="outline">Back to Directory</Button>
          </Link>
        </div>
      </div>
    );
  }

  const score = college.ai_overall_score ? Number(college.ai_overall_score) : null;

  return (
    <div className="min-h-screen bg-background pl-14">
      <Navbar />

      {/* Back link + header */}
      <header className="border-b border-border bg-muted/30 px-4 py-8">
        <div className="container mx-auto max-w-5xl">
          <Link
            to="/colleges"
            className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Directory
          </Link>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="font-display text-2xl font-bold sm:text-3xl">
                {college.name}
              </h1>
              {college.short_name && (
                <p className="mt-1 text-lg text-muted-foreground">{college.short_name}</p>
              )}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Badge variant="outline" className={tierColor(college.tier)}>
                  {tierLabel(college.tier)}
                </Badge>
                <Badge variant="outline" className="capitalize">{college.type}</Badge>
                <Badge variant="secondary" className="capitalize">{college.ownership}</Badge>
              </div>
            </div>

            {/* Score */}
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-4 border-primary/30 bg-primary/5">
              {score && score > 0 ? (
                <span className="font-display text-2xl font-bold text-primary">
                  {score.toFixed(1)}
                </span>
              ) : (
                <span className="text-xs text-muted-foreground text-center">No score</span>
              )}
            </div>
          </div>

          {/* Meta info */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" /> {college.city}, {college.state}
            </span>
            {college.established_year && (
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> Est. {college.established_year}
              </span>
            )}
            {college.student_population && (
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" /> {college.student_population.toLocaleString()} students
              </span>
            )}
            {college.website && (
              <a
                href={college.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-primary hover:underline"
              >
                <Globe className="h-4 w-4" /> Website
              </a>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left column: Ratings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Ratings breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Star className="h-5 w-5 text-primary" />
                  Ratings Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {college.total_reviews === 0 ? (
                  <p className="py-4 text-center text-sm text-muted-foreground">
                    No reviews yet. Be the first to rate this college!
                  </p>
                ) : (
                  RATING_CATEGORIES.map((cat) => (
                    <RatingBar
                      key={cat.key}
                      label={cat.label}
                      value={college[cat.key] as number | null}
                    />
                  ))
                )}
              </CardContent>
            </Card>

            {/* AI Summary */}
            {college.ai_summary && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    AI Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {college.ai_summary}
                  </p>
                  {college.ai_pros && college.ai_pros.length > 0 && (
                    <div className="rounded-lg bg-emerald-500/5 p-3">
                      <p className="text-xs font-medium text-emerald-700">Strengths</p>
                      <ul className="mt-1 list-disc pl-4 text-xs text-muted-foreground">
                        {college.ai_pros.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </div>
                  )}
                  {college.ai_cons && college.ai_cons.length > 0 && (
                    <div className="rounded-lg bg-red-500/5 p-3">
                      <p className="text-xs font-medium text-red-700">Weaknesses</p>
                      <ul className="mt-1 list-disc pl-4 text-xs text-muted-foreground">
                        {college.ai_cons.map((c, i) => <li key={i}>{c}</li>)}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Reviews */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Reviews ({college.total_reviews})
                </h2>
                <Link to={`/colleges/${id}/review`}>
                  <Button size="sm">Write a Review</Button>
                </Link>
              </div>

              {reviews && reviews.length > 0 ? (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center gap-3 py-12 text-center">
                    <GraduationCap className="h-10 w-10 text-muted-foreground" />
                    <p className="text-sm font-medium">No reviews yet</p>
                    <p className="text-xs text-muted-foreground">
                      Be the first to share your experience at {college.short_name || college.name}!
                    </p>
                    <Link to={`/colleges/${id}/review`}>
                      <Button size="sm" variant="outline">Write a Review</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* College Stories */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Stories from {college.short_name || college.name}
                </h2>
                <Link to={`/stories`}>
                  <Button size="sm" variant="ghost" className="text-xs gap-1">
                    View all <ChevronRight className="h-3 w-3" />
                  </Button>
                </Link>
              </div>

              {collegeStories && collegeStories.length > 0 ? (
                <div className="space-y-3">
                  {collegeStories.map((story) => {
                    const catInfo: Record<string, string> = {
                      campus_life: "🏫", placement_experience: "💼", hostel_life: "🏠",
                      ragging: "⚠️", fest_culture: "🎪", faculty_stories: "☕",
                      admission_journey: "🎯", funny: "😂", horror: "😱",
                      inspirational: "✨", confession: "🔥", other: "💬",
                    };
                    return (
                      <Card key={story.id} className="transition-all hover:shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="flex flex-col items-center gap-0.5 pt-0.5">
                              <ArrowBigUp className="h-4 w-4 text-muted-foreground" />
                              <span className="text-xs font-bold">{story.upvote_count}</span>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <span>{catInfo[story.category] || "💬"} {story.category.replace("_", " ")}</span>
                              </div>
                              <h4 className="mt-1 font-display text-sm font-medium line-clamp-1">{story.title}</h4>
                              <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">{story.content}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center gap-2 py-8 text-center">
                    <BookOpen className="h-8 w-8 text-muted-foreground" />
                    <p className="text-sm font-medium">No stories yet</p>
                    <p className="text-xs text-muted-foreground">
                      Got a wild story from {college.short_name || college.name}? Share it anonymously!
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-medium capitalize">{college.type}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ownership</span>
                  <span className="font-medium capitalize">{college.ownership}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tier</span>
                  <span className="font-medium">{tierLabel(college.tier)}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Reviews</span>
                  <span className="font-medium">{college.total_reviews}</span>
                </div>
                {college.ai_trend && (
                  <>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Trend</span>
                      <span className="font-medium">{college.ai_trend}</span>
                    </div>
                  </>
                )}
                {college.ai_best_for && (
                  <>
                    <Separator />
                    <div>
                      <span className="text-muted-foreground">Best For</span>
                      <p className="mt-1 font-medium">{college.ai_best_for}</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <Link to={`/colleges/${id}/review`} className="block">
              <Button className="w-full bg-gradient-primary hover:opacity-90">
                Write a Review
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CollegeDetail;
