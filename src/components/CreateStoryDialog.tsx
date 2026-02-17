import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PenLine, Loader2, ImagePlus, X } from "lucide-react";
import { Constants } from "@/integrations/supabase/types";
import type { User } from "@supabase/supabase-js";

const STORY_CATEGORIES = Constants.public.Enums.story_category;
const MIN_CONTENT_LENGTH = 100;
const MAX_IMAGES = 3;

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
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
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

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const remaining = MAX_IMAGES - images.length;
    const toAdd = files.slice(0, remaining);
    setImages((prev) => [...prev, ...toAdd]);
    toAdd.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setImagePreviews((prev) => [...prev, ev.target?.result as string]);
      };
      reader.readAsDataURL(file);
    });
    // reset input
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
    setImagePreviews((prev) => prev.filter((_, i) => i !== idx));
  };

  const mutation = useMutation({
    mutationFn: async () => {
      setUploadError(null);
      // 1. Insert story
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

      // 2. Upload images if any
      if (images.length > 0) {
        let firstImageUrl: string | null = null;
        for (let i = 0; i < images.length; i++) {
          const img = images[i];
          const ext = img.name.split(".").pop();
          const path = `${user!.id}/${data.id}/${Date.now()}.${ext}`;
          const { error: uploadErr } = await supabase.storage
            .from("story-images")
            .upload(path, img, { contentType: img.type });
          if (uploadErr) {
            console.error("Image upload failed:", uploadErr.message);
            continue;
          }
          // Save first image URL as thumbnail
          if (i === 0) {
            const { data: urlData } = supabase.storage
              .from("story-images")
              .getPublicUrl(path);
            firstImageUrl = urlData.publicUrl;
          }
        }
        // Update story with thumbnail_url
        if (firstImageUrl) {
          await (supabase as any)
            .from("college_stories")
            .update({ thumbnail_url: firstImageUrl })
            .eq("id", data.id);
        }
      }

      // 3. Trigger AI moderation in background
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
      setImages([]);
      setImagePreviews([]);
      navigate(`/stories/${data.id}`);
    },
  });

  const handleSubmit = () => {
    if (!user) { navigate("/auth"); return; }
    if (!title.trim() || !content.trim() || !collegeId) return;
    if (content.trim().length < MIN_CONTENT_LENGTH) return;
    mutation.mutate();
  };

  const contentLength = content.trim().length;
  const contentTooShort = contentLength > 0 && contentLength < MIN_CONTENT_LENGTH;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="gap-1.5">
          <PenLine className="h-3.5 w-3.5" />
          Post Story
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
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
            <div className="flex items-center justify-between mb-1">
              <Label htmlFor="content" className="text-xs">Story</Label>
              <span className={`text-[10px] tabular-nums ${contentTooShort ? "text-destructive" : "text-muted-foreground"}`}>
                {contentLength}/{MIN_CONTENT_LENGTH} min chars
              </span>
            </div>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Spill the tea... It's completely anonymous. (min 100 characters)"
              rows={6}
              className={contentTooShort ? "border-destructive focus-visible:ring-destructive" : ""}
            />
            {contentTooShort && (
              <p className="mt-1 text-[11px] text-destructive">
                Need {MIN_CONTENT_LENGTH - contentLength} more characters to post.
              </p>
            )}
          </div>

          {/* Image upload */}
          <div>
            <Label className="text-xs">Add Photos <span className="text-muted-foreground">(optional, max {MAX_IMAGES})</span></Label>
            <div className="mt-1.5 flex flex-wrap gap-2">
              {imagePreviews.map((src, i) => (
                <div key={i} className="relative h-20 w-20 rounded-lg overflow-hidden border border-border">
                  <img src={src} alt="" className="h-full w-full object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(i)}
                    className="absolute top-0.5 right-0.5 rounded-full bg-background/80 p-0.5 text-foreground hover:bg-destructive hover:text-white transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              {images.length < MAX_IMAGES && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="h-20 w-20 rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center gap-1 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  <ImagePlus className="h-5 w-5" />
                  <span className="text-[10px]">Add</span>
                </button>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              multiple
              className="hidden"
              onChange={handleImageSelect}
            />
          </div>

          <Button
            onClick={handleSubmit}
            disabled={
              !title.trim() ||
              !content.trim() ||
              !collegeId ||
              contentTooShort ||
              mutation.isPending
            }
            className="w-full"
          >
            {mutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
            {mutation.isPending ? "Posting..." : "Post Anonymously"}
          </Button>
          {(mutation.isError || uploadError) && (
            <p className="text-xs text-destructive text-center">
              {uploadError || (mutation.error as Error).message}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
