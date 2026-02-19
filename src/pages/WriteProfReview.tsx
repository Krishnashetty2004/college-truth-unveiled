import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Loader2, ArrowLeft, Star } from "lucide-react";
import { Constants } from "@/integrations/supabase/types";
import type { User } from "@supabase/supabase-js";

const PROFESSOR_TAGS = Constants.public.Enums.professor_tag;

const tagLabels: Record<string, string> = {
  tough_grader: "Tough Grader",
  easy_grader: "Easy Grader",
  inspirational: "Inspirational",
  boring: "Boring",
  reads_from_slides: "Reads from Slides",
  industry_experience: "Industry Experience",
  research_focused: "Research Focused",
  helpful: "Helpful",
  unapproachable: "Unapproachable",
  clear_explanations: "Clear Explanations",
  assigns_lots_of_homework: "Lots of Homework",
  test_heavy: "Test Heavy",
  extra_credit: "Extra Credit",
  flexible_deadlines: "Flexible Deadlines",
};

const WriteProfReview = () => {
  const { professorId } = useParams<{ professorId: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [comment, setComment] = useState("");
  const [courseTaught, setCourseTaught] = useState("");
  const [yearTaken, setYearTaken] = useState("");
  const [wouldTakeAgain, setWouldTakeAgain] = useState(true);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [ratings, setRatings] = useState({
    rating_teaching: 0,
    rating_knowledge: 0,
    rating_grading: 0,
    rating_approachability: 0,
    rating_punctuality: 0,
  });
  const [difficulty, setDifficulty] = useState(3);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session?.user) navigate("/auth");
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => setUser(session?.user ?? null));
    return () => subscription.unsubscribe();
  }, [navigate]);

  const { data: professor } = useQuery({
    queryKey: ["professor", professorId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("professors")
        .select("id, name, department, colleges(name, short_name)")
        .eq("id", professorId!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!professorId,
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const overall = Object.values(ratings).reduce((a, b) => a + b, 0) / 5;
      const { data, error } = await supabase
        .from("professor_reviews")
        .insert({
          professor_id: professorId!,
          user_id: user!.id,
          comment: comment || null,
          course_taught: courseTaught || null,
          year_taken: yearTaken ? parseInt(yearTaken) : null,
          would_take_again: wouldTakeAgain,
          difficulty_level: difficulty,
          overall_rating: overall,
          tags: selectedTags.length > 0 ? selectedTags as any : null,
          ...ratings,
        })
        .select("id")
        .single();
      if (error) throw error;

      supabase.functions.invoke("moderate-content", {
        body: { type: "professor_review", id: data.id },
      }).catch(console.error);

      return data;
    },
    onSuccess: () => navigate(-1),
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const ratingItems = [
    { key: "rating_teaching", label: "Teaching Quality" },
    { key: "rating_knowledge", label: "Subject Knowledge" },
    { key: "rating_grading", label: "Fair Grading" },
    { key: "rating_approachability", label: "Approachability" },
    { key: "rating_punctuality", label: "Punctuality" },
  ] as const;

  const allRated = Object.values(ratings).every((v) => v > 0);

  return (
    <>
      <header className="border-b border-border px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <button onClick={() => navigate(-1)} className="mb-3 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3 w-3" /> Back
          </button>
          <h1 className="font-display text-2xl">Rate a Professor</h1>
          {professor && (
            <p className="mt-1 text-sm text-muted-foreground">
              {professor.name} · {professor.department}
            </p>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-8 space-y-6">
        {/* Ratings */}
        <div className="grid gap-4 sm:grid-cols-2">
          {ratingItems.map((item) => (
            <div key={item.key} className="rounded-lg border border-border bg-card p-3">
              <div className="flex items-center justify-between mb-2">
                <Label className="text-xs">{item.label}</Label>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-warning fill-warning" />
                  <span className="text-xs font-bold">{ratings[item.key]}/5</span>
                </div>
              </div>
              <Slider
                value={[ratings[item.key]]}
                onValueChange={([v]) => setRatings((p) => ({ ...p, [item.key]: v }))}
                min={0} max={5} step={1}
              />
            </div>
          ))}
          <div className="rounded-lg border border-border bg-card p-3">
            <div className="flex items-center justify-between mb-2">
              <Label className="text-xs">Difficulty Level</Label>
              <span className="text-xs font-bold">{difficulty}/5</span>
            </div>
            <Slider value={[difficulty]} onValueChange={([v]) => setDifficulty(v)} min={1} max={5} step={1} />
          </div>
        </div>

        {/* Would take again */}
        <div className="flex items-center justify-between rounded-lg border border-border bg-card p-3">
          <Label className="text-xs">Would you take this professor again?</Label>
          <Switch checked={wouldTakeAgain} onCheckedChange={setWouldTakeAgain} />
        </div>

        {/* Tags */}
        <div>
          <Label className="text-xs mb-2 block">Tags (select all that apply)</Label>
          <div className="flex flex-wrap gap-1.5">
            {PROFESSOR_TAGS.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer text-xs"
                onClick={() => toggleTag(tag)}
              >
                {tagLabels[tag] || tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label className="text-xs">Course Taught</Label>
            <Input value={courseTaught} onChange={(e) => setCourseTaught(e.target.value)} placeholder="e.g. Data Structures" className="mt-1" />
          </div>
          <div>
            <Label className="text-xs">Year Taken</Label>
            <Input type="number" value={yearTaken} onChange={(e) => setYearTaken(e.target.value)} placeholder="2024" className="mt-1" />
          </div>
        </div>

        <div>
          <Label className="text-xs">Comments</Label>
          <Textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Share your experience with this professor..." rows={5} className="mt-1" />
        </div>

        <Button
          onClick={() => mutation.mutate()}
          disabled={!allRated || mutation.isPending}
          className="w-full"
          size="lg"
        >
          {mutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
          {mutation.isPending ? "Submitting..." : "Submit Rating Anonymously"}
        </Button>
        {mutation.isError && (
          <p className="text-sm text-destructive text-center">{(mutation.error as Error).message}</p>
        )}
      </main>
    </>
  );
};

export default WriteProfReview;
