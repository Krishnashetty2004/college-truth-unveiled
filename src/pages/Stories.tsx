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
  thumbnail_url?: string | null;
};

function useStories(sort: SortMode, category?: string) {
  return useQuery({
    queryKey: ["stories", sort, category],
    queryFn: async () => {
      let query = (supabase as any)
        .from("college_stories")
        .select("*, colleges(id, name, short_name)")
        .eq("status", "published");

      if (category) {
        query = query.eq("category", category);
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
      return (data ?? []) as StoryWithCollege[];
    },
  });
}

// Returns a map of storyId -> voteType (1 = upvote, -1 = downvote)
function useUserVotes(user: User | null, storyIds: string[]) {
  return useQuery({
    queryKey: ["user-votes", user?.id, storyIds],
    queryFn: async () => {
      if (!user || storyIds.length === 0) return new Map<string, number>();
      const { data } = await supabase
        .from("helpful_votes")
        .select("story_id, vote_type")
        .eq("user_id", user.id)
        .in("story_id", storyIds);
      const map = new Map<string, number>();
      (data || []).forEach((v) => {
        if (v.story_id) map.set(v.story_id, v.vote_type || 1);
      });
      return map;
    },
    enabled: !!user && storyIds.length > 0,
  });
}

function timeAgo(dateStr: string | null | undefined) {
  if (!dateStr) return "just now";
  try {
    const date = new Date(dateStr);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    if (isNaN(seconds) || seconds < 0) return "just now";
    if (seconds < 5) return "just now";
    if (seconds < 60) return `${seconds}s ago`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
    return `${Math.floor(seconds / 604800)}w ago`;
  } catch {
    return "just now";
  }
}

function StoryCard({
  story,
  index,
  userVote,
  onVote,
  isVoting,
}: {
  story: StoryWithCollege;
  index: number;
  userVote: number; // 1 = upvoted, -1 = downvoted, 0 = no vote
  onVote: (storyId: string, voteType: number) => void;
  isVoting: boolean;
}) {
  const catInfo = categoryLabels[story.category] || categoryLabels.other;
  const storyUrl = `${window.location.origin}/stories/${story.id}`;
  const shareText = `${story.title} — RateMyCollege`;

  const handleWhatsAppShare = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      `https://wa.me/?text=${encodeURIComponent(shareText + "\n" + storyUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleTwitterShare = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(storyUrl)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
      className="group rounded-xl border border-border bg-card p-4 transition-all hover:shadow-elevated"
    >
      <div className="flex gap-3">
        {/* Content */}
        <div className="min-w-0 flex-1">
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

          {/* Mobile thumbnail - below text */}
          {story.thumbnail_url && (
            <Link to={`/stories/${story.id}`} className="block mt-2 sm:hidden">
              <img
                src={story.thumbnail_url}
                alt=""
                className="w-full h-24 object-cover rounded-lg"
              />
            </Link>
          )}

          {/* Bottom action bar: votes + comments + share */}
          <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <button
                onClick={() => onVote(story.id, 1)}
                disabled={isVoting}
                className={`rounded p-0.5 transition-colors ${
                  userVote === 1 ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                <ArrowBigUp className={`h-4 w-4 ${userVote === 1 ? "fill-primary" : ""}`} />
              </button>
              <span className={`font-bold ${userVote === 1 ? "text-primary" : userVote === -1 ? "text-destructive" : ""}`}>
                {(story.upvote_count || 0) - ((story as any).downvote_count || 0)}
              </span>
              <button
                onClick={() => onVote(story.id, -1)}
                disabled={isVoting}
                className={`rounded p-0.5 transition-colors ${
                  userVote === -1 ? "text-destructive" : "text-muted-foreground hover:text-destructive"
                }`}
              >
                <ArrowBigDown className={`h-4 w-4 ${userVote === -1 ? "fill-destructive" : ""}`} />
              </button>
            </div>
            <Link to={`/stories/${story.id}`} className="flex items-center gap-1 transition-colors hover:text-foreground">
              <MessageCircle className="h-3.5 w-3.5" />
              {story.comment_count} comments
            </Link>
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={handleWhatsAppShare}
                className="text-[#25D366] hover:opacity-80 transition-opacity"
                title="Share on WhatsApp"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
              <button
                onClick={handleTwitterShare}
                className="hover:opacity-80 transition-opacity"
                title="Share on X"
              >
                <span className="text-sm font-bold">𝕏</span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop thumbnail - right side */}
        {story.thumbnail_url && (
          <Link to={`/stories/${story.id}`} className="hidden sm:block flex-shrink-0">
            <img
              src={story.thumbnail_url}
              alt=""
              className="w-16 h-16 object-cover rounded-lg"
            />
          </Link>
        )}
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
    mutationFn: async ({ storyId, voteType }: { storyId: string; voteType: number }) => {
      const { data, error } = await supabase.rpc("vote_story", {
        p_story_id: storyId,
        p_user_id: user!.id,
        p_vote_type: voteType,
      });
      if (error) throw error;
      return { ...data, storyId } as { vote: number; upvotes: number; downvotes: number; storyId: string };
    },
    onSuccess: (data) => {
      // Update story with actual server values
      const currentStories = queryClient.getQueryData<StoryWithCollege[]>(["stories", sort, activeCategory]);
      if (currentStories) {
        queryClient.setQueryData(
          ["stories", sort, activeCategory],
          currentStories.map((s) =>
            s.id === data.storyId
              ? { ...s, upvote_count: data.upvotes, downvote_count: data.downvotes }
              : s
          )
        );
      }
      // Update user votes map
      const currentVotes = queryClient.getQueryData<Map<string, number>>(["user-votes", user?.id, storyIds]);
      if (currentVotes) {
        const newVotes = new Map(currentVotes);
        if (data.vote === 0) {
          newVotes.delete(data.storyId);
        } else {
          newVotes.set(data.storyId, data.vote);
        }
        queryClient.setQueryData(["user-votes", user?.id, storyIds], newVotes);
      }
    },
  });

  const handleVote = (storyId: string, voteType: number) => {
    if (!user) {
      navigate("/auth");
      return;
    }
    voteMutation.mutate({ storyId, voteType });
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
                userVote={votedSet?.get(story.id) ?? 0}
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
