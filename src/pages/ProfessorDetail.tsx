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
  ArrowLeft, Star, GraduationCap, AlertCircle, ThumbsUp,
  BarChart3, Users, BookOpen,
} from "lucide-react";

type Professor = Tables<"professors">;
type ProfessorReview = Tables<"professor_reviews">;
type College = Pick<Tables<"colleges">, "id" | "name" | "short_name">;

const TAG_LABELS: Record<string, string> = {
  tough_grader: "😤 Tough Grader",
  easy_grader: "😌 Easy Grader",
  inspirational: "✨ Inspirational",
  boring: "😴 Boring",
  reads_from_slides: "📄 Reads from Slides",
  industry_experience: "🏭 Industry Experience",
  research_focused: "🔬 Research Focused",
  helpful: "🙌 Helpful",
  unapproachable: "🚪 Unapproachable",
  clear_explanations: "💡 Clear Explanations",
  assigns_lots_of_homework: "📚 Lots of Homework",
  test_heavy: "📝 Test Heavy",
  extra_credit: "⭐ Extra Credit",
  flexible_deadlines: "🕐 Flexible Deadlines",
};

function RatingBar({ label, value }: { label: string; value: number | null }) {
  const v = value ? Number(value) : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="w-36 shrink-0 text-sm text-muted-foreground">{label}</span>
      <Progress value={(v / 5) * 100} className="h-2 flex-1" />
      <span className="w-8 text-right text-sm font-medium">
        {v > 0 ? v.toFixed(1) : "—"}
      </span>
    </div>
  );
}

const ProfessorDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data: professor, isLoading, isError } = useQuery({
    queryKey: ["professor", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("professors")
        .select("*")
        .eq("id", id!)
        .single();
      if (error) throw error;
      return data as Professor;
    },
    enabled: !!id,
  });

  const { data: college } = useQuery({
    queryKey: ["professor-college", professor?.college_id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("colleges")
        .select("id, name, short_name")
        .eq("id", professor!.college_id)
        .single();
      if (error) throw error;
      return data as College;
    },
    enabled: !!professor?.college_id,
  });

  const { data: reviews } = useQuery({
    queryKey: ["professor-reviews", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("professor_reviews")
        .select("*")
        .eq("professor_id", id!)
        .eq("status", "published")
        .order("created_at", { ascending: false })
        .limit(30);
      if (error) throw error;
      return data as ProfessorReview[];
    },
    enabled: !!id,
  });

  // Compute tag frequency from reviews
  const tagCounts: Record<string, number> = {};
  reviews?.forEach((r) => {
    r.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  const topTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  // Compute avg ratings from reviews
  const avgRatings = reviews && reviews.length > 0
    ? {
        teaching: reviews.reduce((s, r) => s + r.rating_teaching, 0) / reviews.length,
        knowledge: reviews.reduce((s, r) => s + r.rating_knowledge, 0) / reviews.length,
        approachability: reviews.reduce((s, r) => s + r.rating_approachability, 0) / reviews.length,
        grading: reviews.reduce((s, r) => s + r.rating_grading, 0) / reviews.length,
        punctuality: reviews.reduce((s, r) => s + r.rating_punctuality, 0) / reviews.length,
      }
    : null;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pl-14">
        <Navbar />
        <div className="container mx-auto max-w-4xl px-4 py-8 space-y-6">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-5 w-48" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Skeleton className="h-56" />
            <Skeleton className="h-56" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !professor) {
    return (
      <div className="min-h-screen bg-background pl-14">
        <Navbar />
        <div className="container mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-20 text-center">
          <AlertCircle className="h-12 w-12 text-destructive" />
          <p className="text-lg font-medium">Professor not found</p>
          <Button variant="outline" onClick={() => history.back()}>Go Back</Button>
        </div>
      </div>
    );
  }

  const score = professor.ai_overall_score ? Number(professor.ai_overall_score) : null;
  const wouldTakeAgain = professor.would_take_again_pct ? Number(professor.would_take_again_pct) : null;

  return (
    <div className="min-h-screen bg-background pl-14">
      <Navbar />

      <header className="border-b border-border bg-muted/30 px-4 py-8">
        <div className="container mx-auto max-w-4xl">
          {college && (
            <Link
              to={`/colleges/${college.id}`}
              className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> {college.short_name || college.name}
            </Link>
          )}

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="font-display text-2xl font-bold sm:text-3xl">{professor.name}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                {professor.designation && <span className="font-medium text-foreground">{professor.designation}</span>}
                {professor.department && <Badge variant="secondary">{professor.department}</Badge>}
                {college && (
                  <Link to={`/colleges/${college.id}`} className="text-primary hover:underline">
                    {college.short_name || college.name}
                  </Link>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              {score && score > 0 && (
                <div className="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-full border-4 border-primary/30 bg-primary/5">
                  <span className="font-display text-2xl font-bold text-primary">{score.toFixed(1)}</span>
                  <span className="text-[10px] text-muted-foreground">/ 5</span>
                </div>
              )}
            </div>
          </div>

          {/* Quick stats */}
          <div className="mt-4 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{professor.total_reviews} reviews</span>
            </div>
            {wouldTakeAgain !== null && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <ThumbsUp className="h-4 w-4" />
                <span>{Math.round(wouldTakeAgain)}% would take again</span>
              </div>
            )}
            {professor.avg_difficulty !== null && Number(professor.avg_difficulty) > 0 && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <BarChart3 className="h-4 w-4" />
                <span>Difficulty: {Number(professor.avg_difficulty).toFixed(1)}/5</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Rating breakdown */}
            {avgRatings && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Star className="h-5 w-5 text-primary" />
                    Rating Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <RatingBar label="Teaching Quality" value={avgRatings.teaching} />
                  <RatingBar label="Knowledge" value={avgRatings.knowledge} />
                  <RatingBar label="Approachability" value={avgRatings.approachability} />
                  <RatingBar label="Grading Fairness" value={avgRatings.grading} />
                  <RatingBar label="Punctuality" value={avgRatings.punctuality} />
                </CardContent>
              </Card>
            )}

            {/* Reviews */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Student Reviews ({professor.total_reviews})
                </h2>
                <Link to={`/professors/${id}/review`}>
                  <Button size="sm">Rate this Professor</Button>
                </Link>
              </div>

              {reviews && reviews.length > 0 ? (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            {review.course_taught && (
                              <p className="text-sm font-medium">{review.course_taught}</p>
                            )}
                            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                              {review.year_taken && <span>Year: {review.year_taken}</span>}
                              {review.would_take_again !== null && (
                                <Badge
                                  variant={review.would_take_again ? "default" : "secondary"}
                                  className="text-xs"
                                >
                                  {review.would_take_again ? "✓ Would take again" : "✗ Wouldn't take again"}
                                </Badge>
                              )}
                              {review.difficulty_level && (
                                <span>Difficulty: {review.difficulty_level}/5</span>
                              )}
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

                        {review.comment && (
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {review.comment}
                          </p>
                        )}

                        {review.tags && review.tags.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1">
                            {review.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {TAG_LABELS[tag] || tag}
                              </Badge>
                            ))}
                          </div>
                        )}

                        <p className="mt-3 text-xs text-muted-foreground">
                          {new Date(review.created_at).toLocaleDateString()}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="flex flex-col items-center gap-3 py-12 text-center">
                    <GraduationCap className="h-10 w-10 text-muted-foreground" />
                    <p className="text-sm font-medium">No reviews yet</p>
                    <p className="text-xs text-muted-foreground">
                      Be the first to rate {professor.name}!
                    </p>
                    <Link to={`/professors/${id}/review`}>
                      <Button size="sm" variant="outline">Rate this Professor</Button>
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Tag cloud */}
            {topTags.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Student Tags</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {topTags.map(([tag, count]) => (
                    <Badge key={tag} variant="secondary" className="text-xs gap-1">
                      {TAG_LABELS[tag] || tag}
                      <span className="opacity-60">×{count}</span>
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                {professor.department && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Department</span>
                      <span className="font-medium">{professor.department}</span>
                    </div>
                    <Separator />
                  </>
                )}
                {professor.designation && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Designation</span>
                      <span className="font-medium">{professor.designation}</span>
                    </div>
                    <Separator />
                  </>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reviews</span>
                  <span className="font-medium">{professor.total_reviews}</span>
                </div>
              </CardContent>
            </Card>

            <Link to={`/professors/${id}/review`} className="block">
              <Button className="w-full">Rate this Professor</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfessorDetail;
