import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Flame, Clock, TrendingUp, MessageCircle, ArrowBigUp, ArrowBigDown, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/Navbar";
import CreateStoryDialog from "@/components/CreateStoryDialog";
import { Constants } from "@/integrations/supabase/types";
import { motion } from "framer-motion";
import type { Tables } from "@/integrations/supabase/types";
import type { User } from "@supabase/supabase-js";

type SortMode = "hot" | "new" | "top";

const STORY_CATEGORIES = Constants.public.Enums.story_category;

const categoryLabels: Record<string, { label: string; emoji: string }> = {
  campus_life: { label: "Campus Life", emoji: "🏫" },
  placement_experience: { label: "Placement Horror", emoji: "💼" },
  hostel_life: { label: "Hostel Life", emoji: "🏠" },
  ragging: { label: "Ragging Truth", emoji: "⚠️" },
  fest_culture: { label: "Fest Culture", emoji: "🎪" },
  faculty_stories: { label: "Professor Tea", emoji: "☕" },
  admission_journey: { label: "Admission Journey", emoji: "🎯" },
  funny: { label: "Funny AF", emoji: "😂" },
  horror: { label: "Horror Stories", emoji: "😱" },
  inspirational: { label: "Inspirational", emoji: "✨" },
  confession: { label: "Confessions", emoji: "🔥" },
  other: { label: "Other", emoji: "💬" },
};

type StoryWithCollege = Tables<"college_stories"> & {
  colleges: { id: string; name: string; short_name: string | null } | null;
};

function useStories(sort: SortMode, category?: string) {
  return useQuery({
    queryKey: ["stories", sort, category],
    queryFn: async () => {
      let query = supabase
        .from("college_stories")
        .select("*, colleges(id, name, short_name)")
        .eq("status", "published");

      if (category) {
        query = query.eq("category", category as any);
      }

      if (sort === "new") {
        query = query.order("created_at", { ascending: false });
      } else if (sort === "top") {
        query = query.order("upvote_count", { ascending: false });
      } else {
        query = query.order("upvote_count", { ascending: false }).order("created_at", { ascending: false });
      }

      query = query.limit(30);

      const { data, error } = await query;
      if (error) throw error;
      return data as StoryWithCollege[];
    },
  });
}

function useUserVotes(user: User | null, storyIds: string[]) {
  return useQuery({
    queryKey: ["user-votes", user?.id, storyIds],
    queryFn: async () => {
      if (!user || storyIds.length === 0) return new Set<string>();
      const { data } = await supabase
        .from("helpful_votes")
        .select("story_id")
        .eq("user_id", user.id)
        .in("story_id", storyIds);
      return new Set((data || []).map((v) => v.story_id).filter(Boolean) as string[]);
    },
    enabled: !!user && storyIds.length > 0,
  });
}

function timeAgo(dateStr: string) {
  const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (seconds < 60) return "just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
  return `${Math.floor(seconds / 604800)}w ago`;
}

function StoryCard({
  story,
  index,
  hasVoted,
  onVote,
  isVoting,
}: {
  story: StoryWithCollege;
  index: number;
  hasVoted: boolean;
  onVote: (storyId: string) => void;
  isVoting: boolean;
}) {
  const catInfo = categoryLabels[story.category] || categoryLabels.other;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className="group rounded-xl border border-border bg-card p-4 transition-all hover:shadow-elevated"
    >
      {/* Content */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <Badge variant="outline" className="text-[10px] px-1.5 py-0">
            {catInfo.emoji} {catInfo.label}
          </Badge>
          {story.colleges && (
            <Link
              to={`/colleges/${story.colleges.id}`}
              className="font-medium text-primary hover:underline"
            >
              {story.colleges.short_name || story.colleges.name}
            </Link>
          )}
          <span>·</span>
          <span>{timeAgo(story.created_at)}</span>
        </div>

        <Link to={`/stories/${story.id}`} className="block">
          <h3 className="mt-1.5 font-display text-sm font-medium leading-snug line-clamp-2 hover:text-primary transition-colors">
            {story.title}
          </h3>
        </Link>

        <p className="mt-1 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
          {story.content}
        </p>

        {/* Bottom action bar: votes + comments inline */}
        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <button
              onClick={() => onVote(story.id)}
              disabled={isVoting}
              className={`rounded p-0.5 transition-colors ${
                hasVoted ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ArrowBigUp className={`h-4 w-4 ${hasVoted ? "fill-primary" : ""}`} />
            </button>
            <span className={`font-bold ${hasVoted ? "text-primary" : ""}`}>
              {story.upvote_count}
            </span>
            <button className="rounded p-0.5 text-muted-foreground transition-colors hover:text-foreground">
              <ArrowBigDown className="h-4 w-4" />
            </button>
          </div>
          <Link to={`/stories/${story.id}`} className="flex items-center gap-1 transition-colors hover:text-foreground">
            <MessageCircle className="h-3.5 w-3.5" />
            {story.comment_count} comments
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

const Stories = () => {
  const [sort, setSort] = useState<SortMode>("hot");
  const [activeCategory, setActiveCategory] = useState<string>();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const { data: stories, isLoading, isError } = useStories(sort, activeCategory);
  const storyIds = (stories || []).map((s) => s.id);
  const { data: votedSet } = useUserVotes(user, storyIds);

  const voteMutation = useMutation({
    mutationFn: async (storyId: string) => {
      const { data, error } = await supabase.rpc("toggle_story_vote", {
        p_story_id: storyId,
        p_user_id: user!.id,
      });
      if (error) throw error;
      return data as { voted: boolean; count: number };
    },
    onMutate: async (storyId) => {
      // Optimistic update
      await queryClient.cancelQueries({ queryKey: ["stories"] });
      const prev = queryClient.getQueryData<StoryWithCollege[]>(["stories", sort, activeCategory]);
      if (prev) {
        const wasVoted = votedSet?.has(storyId);
        queryClient.setQueryData(
          ["stories", sort, activeCategory],
          prev.map((s) =>
            s.id === storyId
              ? { ...s, upvote_count: s.upvote_count + (wasVoted ? -1 : 1) }
              : s
          )
        );
      }
      return { prev };
    },
    onError: (_err, _storyId, context) => {
      if (context?.prev) {
        queryClient.setQueryData(["stories", sort, activeCategory], context.prev);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      queryClient.invalidateQueries({ queryKey: ["user-votes"] });
    },
  });

  const handleVote = (storyId: string) => {
    if (!user) {
      navigate("/auth");
      return;
    }
    voteMutation.mutate(storyId);
  };

  const sortOptions: { key: SortMode; label: string; icon: typeof Flame }[] = [
    { key: "hot", label: "Hot", icon: Flame },
    { key: "new", label: "New", icon: Clock },
    { key: "top", label: "Top", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-background pl-14">
      <Navbar />

      <header className="border-b border-border px-4 py-10">
        <div className="mx-auto max-w-3xl flex items-start justify-between">
          <div>
            <h1 className="font-display text-3xl">Stories</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Raw, unfiltered, anonymous. Professor tea, campus confessions, placement horror, and everything in between.
            </p>
          </div>
          <CreateStoryDialog />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-6">
        {/* Sort tabs */}
        <div className="flex items-center gap-1 rounded-lg border border-border bg-card p-1 w-fit">
          {sortOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSort(opt.key)}
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                sort === opt.key
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <opt.icon className="h-3.5 w-3.5" />
              {opt.label}
            </button>
          ))}
        </div>

        {/* Category pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveCategory(undefined)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
              !activeCategory
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-card hover:bg-accent"
            }`}
          >
            All
          </button>
          {STORY_CATEGORIES.map((cat) => {
            const info = categoryLabels[cat] || categoryLabels.other;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-card hover:bg-accent"
                }`}
              >
                {info.emoji} {info.label}
              </button>
            );
          })}
        </div>

        {/* Stories feed */}
        <div className="mt-6 space-y-3">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                <div className="flex flex-col items-center gap-1">
                  <Skeleton className="h-5 w-5" />
                  <Skeleton className="h-4 w-6" />
                  <Skeleton className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-3 w-1/3" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-3 w-1/4" />
                </div>
              </div>
            ))
          ) : isError ? (
            <div className="py-16 text-center">
              <AlertCircle className="mx-auto h-10 w-10 text-destructive" />
              <p className="mt-3 text-sm text-muted-foreground">Failed to load stories.</p>
            </div>
          ) : stories && stories.length > 0 ? (
            stories.map((story, i) => (
              <StoryCard
                key={story.id}
                story={story}
                index={i}
                hasVoted={votedSet?.has(story.id) ?? false}
                onVote={handleVote}
                isVoting={voteMutation.isPending}
              />
            ))
          ) : (
            <div className="py-16 text-center">
              <p className="font-display text-xl">No stories yet</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Be the first to drop a story. It's completely anonymous — go wild.
              </p>
              <Button variant="outline" className="mt-4" asChild>
                <Link to="/auth">Sign in to post</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Stories;
