import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { SEO } from "@/components/SEO";
import { ArrowBigUp, ArrowBigDown, MessageCircle, ArrowLeft, Send, Reply, Loader2, ImageIcon, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ShareStoryCard from "@/components/ShareStoryCard";
import { motion } from "framer-motion";
import type { Tables } from "@/integrations/supabase/types";
import type { User } from "@supabase/supabase-js";

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

type CommentWithAlias = Tables<"story_comments"> & {
  anonymous_alias?: string;
  replies?: CommentWithAlias[];
};

function timeAgo(dateStr: string | null | undefined) {
  if (!dateStr) return "just now";

  try {
    // Parse ISO 8601 date string (handles both Z and +00:00 formats)
    const date = new Date(dateStr);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

    // Handle invalid dates
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

function CommentItem({
  comment,
  depth,
  user,
  onReply,
  replyingTo,
  replyContent,
  setReplyContent,
  onSubmitReply,
  isSubmitting,
}: {
  comment: CommentWithAlias;
  depth: number;
  user: User | null;
  onReply: (id: string | null) => void;
  replyingTo: string | null;
  replyContent: string;
  setReplyContent: (v: string) => void;
  onSubmitReply: () => void;
  isSubmitting: boolean;
}) {
  const aliasInitial = (comment.anonymous_alias || "A")[0].toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${depth > 0 ? "ml-6 border-l-2 border-border pl-4" : ""}`}
    >
      <div className="py-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Avatar className="h-5 w-5">
            <AvatarFallback className="text-[10px] bg-primary/10 text-primary">
              {aliasInitial}
            </AvatarFallback>
          </Avatar>
          <span className="font-medium text-foreground">{comment.anonymous_alias || "Anonymous"}</span>
          <span>·</span>
          <span>{timeAgo(comment.created_at)}</span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed">{comment.content}</p>
        <div className="mt-2 flex items-center gap-3">
          {user && depth < 3 && (
            <button
              onClick={() => onReply(replyingTo === comment.id ? null : comment.id)}
              className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              <Reply className="h-3 w-3" />
              Reply
            </button>
          )}
        </div>

        {replyingTo === comment.id && (
          <div className="mt-3 flex gap-2">
            <Textarea
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              placeholder="Write a reply..."
              className="min-h-[60px] text-sm"
              rows={2}
            />
            <Button
              size="sm"
              onClick={onSubmitReply}
              disabled={!replyContent.trim() || isSubmitting}
              className="self-end"
            >
              {isSubmitting ? <Loader2 className="h-3 w-3 animate-spin" /> : <Send className="h-3 w-3" />}
            </Button>
          </div>
        )}
      </div>

      {comment.replies?.map((reply) => (
        <CommentItem
          key={reply.id}
          comment={reply}
          depth={depth + 1}
          user={user}
          onReply={onReply}
          replyingTo={replyingTo}
          replyContent={replyContent}
          setReplyContent={setReplyContent}
          onSubmitReply={onSubmitReply}
          isSubmitting={isSubmitting}
        />
      ))}
    </motion.div>
  );
}

const StoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [user, setUser] = useState<User | null>(null);
  const [commentText, setCommentText] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState("");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null));
    return () => subscription.unsubscribe();
  }, []);

  // Realtime subscription for comments only (votes handled by mutation)
  useEffect(() => {
    if (!id) return;

    const channel = supabase
      .channel(`story-comments-${id}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "story_comments",
          filter: `story_id=eq.${id}`,
        },
        () => {
          // Refetch comments when any change happens
          queryClient.invalidateQueries({ queryKey: ["story-comments", id] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [id, queryClient]);

  const { data: story, isLoading: storyLoading } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("college_stories")
        .select("*, downvote_count, colleges(id, name, short_name)")
        .eq("id", id!)
        .single();
      if (error) throw error;
      return data as StoryWithCollege;
    },
    enabled: !!id,
  });

  // Fetch story images from storage - use thumbnail_url from story record
  // Images are stored at userId/storyId/filename — we read them via the thumbnail stored on the story.
  // For additional images, list from the story's own subfolder using user_id from the story.
  const { data: storyImages } = useQuery({
    queryKey: ["story-images", id, story?.user_id],
    queryFn: async () => {
      if (!id || !story?.user_id) return [];
      // Only list files under the specific user+story folder — prevents cross-user leakage
      const folderPath = `${story.user_id}/${id}`;
      const { data } = await supabase.storage.from("story-images").list(folderPath);
      if (!data) return [];
      return data.map((f) => {
        const { data: urlData } = supabase.storage
          .from("story-images")
          .getPublicUrl(`${folderPath}/${f.name}`);
        return urlData.publicUrl;
      });
    },
    enabled: !!id && !!story?.user_id,
  });

  // Get user's vote type: 1 = upvoted, -1 = downvoted, 0 = no vote
  const { data: userVote } = useQuery({
    queryKey: ["user-vote", user?.id, id],
    queryFn: async () => {
      const { data } = await supabase
        .from("helpful_votes")
        .select("vote_type")
        .eq("user_id", user!.id)
        .eq("story_id", id!)
        .maybeSingle();
      return (data?.vote_type as number) || 0;
    },
    enabled: !!user && !!id,
  });

  const { data: comments, isLoading: commentsLoading } = useQuery({
    queryKey: ["story-comments", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("story_comments")
        .select("*")
        .eq("story_id", id!)
        .order("created_at", { ascending: true });
      if (error) throw error;

      // Fetch all unique user aliases in parallel (not N+1 serial loop)
      const userIds = [...new Set((data || []).map((c) => c.user_id))];
      const aliasMap: Record<string, string> = {};
      if (userIds.length > 0) {
        const aliasResults = await Promise.all(
          userIds.map((uid) =>
            supabase.rpc("get_anonymous_alias", { _user_id: uid }).then(({ data: alias }) => ({ uid, alias }))
          )
        );
        aliasResults.forEach(({ uid, alias }) => {
          if (alias) aliasMap[uid] = alias;
        });
      }

      const enriched: CommentWithAlias[] = (data || []).map((c) => ({
        ...c,
        anonymous_alias: aliasMap[c.user_id] || "Anonymous",
      }));

      const map = new Map<string, CommentWithAlias>();
      const roots: CommentWithAlias[] = [];
      enriched.forEach((c) => { c.replies = []; map.set(c.id, c); });
      enriched.forEach((c) => {
        if (c.parent_comment_id && map.has(c.parent_comment_id)) {
          map.get(c.parent_comment_id)!.replies!.push(c);
        } else {
          roots.push(c);
        }
      });
      return roots;
    },
    enabled: !!id,
  });

  const voteMutation = useMutation({
    mutationFn: async (voteType: number) => {
      const { data, error } = await supabase.rpc("vote_story", {
        p_story_id: id!,
        p_user_id: user!.id,
        p_vote_type: voteType,
      });
      if (error) throw error;
      return data as { vote: number; upvotes: number; downvotes: number };
    },
    onSuccess: (data) => {
      // Update story with actual server values
      const currentStory = queryClient.getQueryData<StoryWithCollege>(["story", id]);
      if (currentStory) {
        queryClient.setQueryData(["story", id], {
          ...currentStory,
          upvote_count: data.upvotes,
          downvote_count: data.downvotes,
        });
      }
      // Update user vote state
      queryClient.setQueryData(["user-vote", user?.id, id], data.vote);
    },
  });

  const commentMutation = useMutation({
    mutationFn: async ({ content, parentId }: { content: string; parentId?: string }) => {
      const { error } = await supabase.from("story_comments").insert({
        story_id: id!,
        user_id: user!.id,
        content,
        parent_comment_id: parentId || null,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      setCommentText("");
      setReplyContent("");
      setReplyingTo(null);
      queryClient.invalidateQueries({ queryKey: ["story-comments", id] });
      queryClient.invalidateQueries({ queryKey: ["story", id] });
    },
  });

  const handleUpvote = () => {
    if (!user) { navigate("/auth"); return; }
    voteMutation.mutate(1); // 1 = upvote
  };

  const handleDownvote = () => {
    if (!user) { navigate("/auth"); return; }
    voteMutation.mutate(-1); // -1 = downvote
  };

  const handleComment = () => {
    if (!user) { navigate("/auth"); return; }
    if (!commentText.trim()) return;
    commentMutation.mutate({ content: commentText.trim() });
  };

  const handleReply = () => {
    if (!replyContent.trim() || !replyingTo) return;
    commentMutation.mutate({ content: replyContent.trim(), parentId: replyingTo });
  };

  const catInfo = story ? (categoryLabels[story.category] || categoryLabels.other) : null;

  if (storyLoading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 space-y-4">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  if (!story) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <p className="font-display text-xl">Story not found</p>
        <Button variant="outline" className="mt-4" asChild>
          <Link to="/stories">← Back to Stories</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={story.title}
        description={`${story.content.slice(0, 150)}${story.content.length > 150 ? "..." : ""}`}
        url={`/stories/${story.id}`}
        type="article"
        publishedTime={story.created_at || undefined}
        story={{
          title: story.title,
          category: catInfo?.label || "Story",
          createdAt: story.created_at || new Date().toISOString(),
        }}
      />

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setLightboxSrc(null)}
        >
          <img
            src={lightboxSrc}
            alt=""
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <main className="mx-auto max-w-3xl px-4 py-8">
        <Link to="/stories" className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-3 w-3" /> Back to Stories
        </Link>

        {/* Story */}
        <article className="rounded-xl border border-border bg-card p-6">
          <div className="flex gap-4">
            {/* Vote column - Reddit style */}
            <div className="flex flex-col items-center gap-0.5 pt-1">
              <button
                onClick={handleUpvote}
                disabled={voteMutation.isPending}
                className={`rounded p-1 transition-colors ${userVote === 1 ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
                title="Upvote"
              >
                <ArrowBigUp className={`h-6 w-6 ${userVote === 1 ? "fill-primary" : ""}`} />
              </button>
              <span className={`text-sm font-bold tabular-nums ${userVote === 1 ? "text-primary" : userVote === -1 ? "text-destructive" : ""}`}>
                {(story.upvote_count || 0) - ((story as any).downvote_count || 0)}
              </span>
              <button
                onClick={handleDownvote}
                disabled={voteMutation.isPending}
                className={`rounded p-1 transition-colors ${userVote === -1 ? "text-destructive" : "text-muted-foreground hover:text-destructive"}`}
                title="Downvote"
              >
                <ArrowBigDown className={`h-6 w-6 ${userVote === -1 ? "fill-destructive" : ""}`} />
              </button>
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                {catInfo && (
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                    {catInfo.emoji} {catInfo.label}
                  </Badge>
                )}
                {story.colleges && (
                  <Link to={`/colleges/${story.colleges.id}`} className="font-medium text-primary hover:underline">
                    {story.colleges.short_name || story.colleges.name}
                  </Link>
                )}
                <span>·</span>
                <span>{timeAgo(story.created_at)}</span>
              </div>

              <h1 className="mt-3 font-display text-xl font-semibold leading-tight">{story.title}</h1>
              <div className="mt-4 text-sm leading-relaxed whitespace-pre-wrap">{story.content}</div>

              {/* Story images */}
              {storyImages && storyImages.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {storyImages.map((url, i) => (
                    <button
                      key={i}
                      onClick={() => setLightboxSrc(url)}
                      className="relative h-28 w-36 overflow-hidden rounded-lg border border-border hover:opacity-90 transition-opacity"
                    >
                      <img src={url} alt={`Story image ${i + 1}`} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-colors">
                        <ImageIcon className="h-4 w-4 text-white opacity-0 group-hover:opacity-100" />
                      </div>
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4">
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-3.5 w-3.5" />
                  {story.comment_count} comments
                </span>
                <button
                  onClick={() => setShowShareModal(true)}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  <Instagram className="h-3.5 w-3.5" />
                  Share Story
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Comment box */}
        <div className="mt-6 rounded-xl border border-border bg-card p-4">
          <h2 className="font-display text-sm font-medium mb-3">
            {user ? "Drop a comment" : "Sign in to comment"}
          </h2>
          {user ? (
            <div className="flex gap-2">
              <Textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="What's on your mind?"
                className="min-h-[70px] text-sm"
                rows={3}
              />
              <Button
                onClick={handleComment}
                disabled={!commentText.trim() || commentMutation.isPending}
                className="self-end"
              >
                {commentMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </div>
          ) : (
            <Button variant="outline" size="sm" asChild>
              <Link to="/auth">Sign in</Link>
            </Button>
          )}
        </div>

        {/* Comments list */}
        <div className="mt-6 space-y-1">
          <h2 className="font-display text-sm font-medium mb-4">
            Comments {story.comment_count > 0 && `(${story.comment_count})`}
          </h2>
          {commentsLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="py-3 space-y-2">
                <Skeleton className="h-3 w-1/4" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))
          ) : comments && comments.length > 0 ? (
            comments.map((c) => (
              <CommentItem
                key={c.id}
                comment={c}
                depth={0}
                user={user}
                onReply={setReplyingTo}
                replyingTo={replyingTo}
                replyContent={replyContent}
                setReplyContent={setReplyContent}
                onSubmitReply={handleReply}
                isSubmitting={commentMutation.isPending}
              />
            ))
          ) : (
            <p className="py-8 text-center text-sm text-muted-foreground">No comments yet. Be the first!</p>
          )}
        </div>
      </main>

      {/* Instagram Share Modal */}
      <ShareStoryCard
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        story={{
          id: story.id,
          title: story.title,
          content: story.content,
          category: story.category,
          upvote_count: story.upvote_count,
          downvote_count: (story as any).downvote_count,
        }}
        collegeName={story.colleges?.short_name || story.colleges?.name || "Anonymous College"}
      />
    </>
  );
};

export default StoryDetail;
