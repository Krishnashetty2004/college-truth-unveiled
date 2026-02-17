import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PenLine, Loader2 } from "lucide-react";
import { Constants } from "@/integrations/supabase/types";
import type { User } from "@supabase/supabase-js";

const STORY_CATEGORIES = Constants.public.Enums.story_category;

const categoryLabels: Record<string, string> = {
  campus_life: "🏫 Campus Life",
  placement_experience: "💼 Placement Horror",
  hostel_life: "🏠 Hostel Life",
  ragging: "⚠️ Ragging Truth",
  fest_culture: "🎪 Fest Culture",
  faculty_stories: "☕ Professor Tea",
  admission_journey: "🎯 Admission Journey",
  funny: "😂 Funny AF",
  horror: "😱 Horror Stories",
  inspirational: "✨ Inspirational",
  confession: "🔥 Confessions",
  other: "💬 Other",
};

export default function CreateStoryDialog() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<string>("other");
  const [collegeId, setCollegeId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => setUser(session?.user ?? null));
    return () => subscription.unsubscribe();
  }, []);

  const { data: colleges } = useQuery({
    queryKey: ["colleges-list"],
    queryFn: async () => {
      const { data } = await supabase
        .from("colleges")
        .select("id, name, short_name")
        .eq("is_active", true)
        .order("name");
      return data || [];
    },
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase
        .from("college_stories")
        .insert({
          title,
          content,
          category: category as any,
          college_id: collegeId,
          user_id: user!.id,
        })
        .select("id")
        .single();
      if (error) throw error;

      // Trigger AI moderation in background
      supabase.functions.invoke("moderate-content", {
        body: { type: "story", id: data.id },
      }).catch(console.error);

      return data;
    },
    onSuccess: (data) => {
      setOpen(false);
      setTitle("");
      setContent("");
      setCategory("other");
      setCollegeId("");
      navigate(`/stories/${data.id}`);
    },
  });

  const handleSubmit = () => {
    if (!user) { navigate("/auth"); return; }
    if (!title.trim() || !content.trim() || !collegeId) return;
    mutation.mutate();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-1.5">
          <PenLine className="h-3.5 w-3.5" />
          Post Story
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display">Drop a Story</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          <div>
            <Label htmlFor="college" className="text-xs">College</Label>
            <Select value={collegeId} onValueChange={setCollegeId}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select college" />
              </SelectTrigger>
              <SelectContent>
                {colleges?.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.short_name || c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="category" className="text-xs">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {STORY_CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {categoryLabels[cat] || cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="title" className="text-xs">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give it a spicy title..."
              maxLength={200}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="content" className="text-xs">Story</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Spill the tea... It's completely anonymous."
              rows={6}
              className="mt-1"
            />
          </div>
          <Button
            onClick={handleSubmit}
            disabled={!title.trim() || !content.trim() || !collegeId || mutation.isPending}
            className="w-full"
          >
            {mutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
            {mutation.isPending ? "Posting..." : "Post Anonymously"}
          </Button>
          {mutation.isError && (
            <p className="text-xs text-destructive text-center">
              {(mutation.error as Error).message}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
