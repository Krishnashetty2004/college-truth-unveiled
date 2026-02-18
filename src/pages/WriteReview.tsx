import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, ArrowLeft, Star, ImagePlus, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import type { User } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";

// Vibe options - the meme-style selector (multi-select, max 5)
const VIBE_OPTIONS = [
  { value: "actually_good", emoji: "🔥", label: "Actually Good" },
  { value: "mid_af", emoji: "😐", label: "Mid AF" },
  { value: "avoid", emoji: "💀", label: "Avoid" },
  { value: "overrated", emoji: "🎭", label: "Overrated" },
  { value: "paisa_barbaad", emoji: "💸", label: "Paisa Barbaad" },
  { value: "party_school", emoji: "🎉", label: "Party School" },
  { value: "nerd_paradise", emoji: "📚", label: "Nerd Paradise" },
  { value: "placement_king", emoji: "💼", label: "Placement King" },
  { value: "run_away", emoji: "🏃", label: "Run Away" },
  { value: "boring", emoji: "😴", label: "Boring AF" },
  { value: "circus", emoji: "🤡", label: "Circus" },
  { value: "hidden_gem", emoji: "✨", label: "Hidden Gem" },
  { value: "hot_girls", emoji: "👩‍🦰", label: "Hot Girls" },
  { value: "hot_boys", emoji: "👨", label: "Hot Boys" },
  { value: "dating_scene", emoji: "💕", label: "Dating Scene" },
  { value: "rich_kids", emoji: "💎", label: "Rich Kids" },
] as const;

const MAX_VIBES = 5;

// Quick tags for chip selection
const QUICK_TAGS = [
  "#RichKids", "#Baddies", "#PlacementScam", "#GoodVibes", "#Ragging",
  "#Hostel10/10", "#MessFood💀", "#WiFiDead", "#ProfsSleep", "#Avoid",
  "#PartyMode", "#StudyOnly", "#NightLife", "#Boring", "#Worth",
];

// Key rating categories with fun ones
const RATING_CATEGORIES = [
  { key: "rating_placement", label: "Placements", hint: "Will you get a job?" },
  { key: "rating_faculty", label: "Faculty", hint: "Do profs actually teach?" },
  { key: "rating_campus_life", label: "Vibes", hint: "Campus life & social scene" },
  { key: "rating_value_for_money", label: "Worth it?", hint: "Value for the fees" },
  { key: "rating_girls", label: "Girls", hint: "How's the scene? 👀" },
  { key: "rating_boys", label: "Boys", hint: "How's the scene? 👀" },
  { key: "rating_food", label: "Food", hint: "Mess & canteen quality" },
  { key: "rating_hostel", label: "Hostel", hint: "Living conditions" },
] as const;

// Star Rating Component
const StarRating = ({
  value,
  onChange,
  label,
  hint
}: {
  value: number;
  onChange: (v: number) => void;
  label: string;
  hint: string;
}) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <span className="text-sm font-medium">{label}</span>
        <p className="text-xs text-muted-foreground">{hint}</p>
      </div>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            className="p-0.5 transition-transform hover:scale-110"
          >
            <Star
              className={cn(
                "h-6 w-6 transition-colors",
                (hovered || value) >= star
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground/30"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const WriteReview = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  // Simplified state
  const [vibeTags, setVibeTags] = useState<string[]>([]);
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [content, setContent] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [reviewerType, setReviewerType] = useState<string>("current_student");
  const [year, setYear] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = (ev) => setImagePreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview("");
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const toggleVibe = (vibe: string) => {
    setVibeTags(prev => {
      if (prev.includes(vibe)) {
        return prev.filter(v => v !== vibe);
      }
      if (prev.length >= MAX_VIBES) {
        return prev; // Don't add more than MAX_VIBES
      }
      return [...prev, vibe];
    });
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (!session?.user) navigate("/auth");
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const { data: college } = useQuery({
    queryKey: ["college", collegeId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("colleges")
        .select("id, name, short_name")
        .eq("id", collegeId!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!collegeId,
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const overallRating = Object.values(ratings).length > 0
        ? Object.values(ratings).reduce((a, b) => a + b, 0) / Object.values(ratings).length
        : null;

      // Generate a short title from the vibe tags
      const vibeLabels = vibeTags.map(v => VIBE_OPTIONS.find(opt => opt.value === v)?.label).filter(Boolean);
      const vibeLabel = vibeLabels.length > 0 ? vibeLabels.slice(0, 2).join(" + ") : "Review";
      const title = `${vibeLabel} - ${content.slice(0, 50)}${content.length > 50 ? '...' : ''}`;

      const { data, error } = await supabase
        .from("reviews")
        .insert({
          college_id: collegeId!,
          user_id: user!.id,
          title,
          content,
          reviewer_type: reviewerType as any,
          admission_year: year ? parseInt(year) : null,
          overall_rating: overallRating,
          vibe_tag: vibeTags.length > 0 ? vibeTags[0] : null, // Primary vibe for backwards compat
          quick_tags: [...selectedTags, ...vibeTags.slice(1)].length > 0 ? [...selectedTags, ...vibeTags.slice(1)] : null,
          ...Object.fromEntries(
            Object.entries(ratings).map(([k, v]) => [k, v])
          ),
        })
        .select("id")
        .single();
      if (error) throw error;

      // Upload image if any
      if (image) {
        const ext = image.name.split(".").pop();
        const path = `${user!.id}/${data.id}/${Date.now()}.${ext}`;
        const { error: uploadErr } = await supabase.storage
          .from("review-images")
          .upload(path, image, { contentType: image.type });
        if (!uploadErr) {
          const { data: urlData } = supabase.storage
            .from("review-images")
            .getPublicUrl(path);
          await supabase.from("review_images").insert([{
            review_id: data.id,
            image_url: urlData.publicUrl,
            display_order: 0,
            image_type: "other" as const,
          }]);
          await supabase
            .from("reviews")
            .update({ has_images: true })
            .eq("id", data.id);
        }
      }

      // Trigger AI moderation
      supabase.functions.invoke("moderate-content", {
        body: { type: "review", id: data.id },
      }).catch(console.error);

      return data;
    },
    onSuccess: () => {
      navigate(`/colleges/${collegeId}`);
    },
  });

  const setRating = (key: string, value: number) => {
    setRatings((prev) => ({ ...prev, [key]: value }));
  };

  const isValid = vibeTags.length > 0 && Object.keys(ratings).length >= 1;
  const charCount = content.length;
  const maxChars = 280;

  return (
    <div className="min-h-screen bg-background pl-14">
      <Navbar />
      <header className="border-b border-border px-4 py-6">
        <div className="mx-auto max-w-lg">
          <button onClick={() => navigate(-1)} className="mb-3 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3 w-3" /> Back
          </button>
          <h1 className="font-display text-xl">Rate {college?.short_name || college?.name || "College"}</h1>
          <p className="text-xs text-muted-foreground mt-1">Takes 30 seconds. Be honest, stay anonymous.</p>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 py-6">
        <div className="space-y-6">

          {/* Vibe Selector - Multi-select */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-medium">This college is...</h2>
              <span className={cn(
                "text-xs",
                vibeTags.length >= MAX_VIBES ? "text-primary font-medium" : "text-muted-foreground"
              )}>
                {vibeTags.length}/{MAX_VIBES} selected
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {VIBE_OPTIONS.map((vibe) => {
                const isSelected = vibeTags.includes(vibe.value);
                const isDisabled = !isSelected && vibeTags.length >= MAX_VIBES;
                return (
                  <button
                    key={vibe.value}
                    type="button"
                    onClick={() => toggleVibe(vibe.value)}
                    disabled={isDisabled}
                    className={cn(
                      "flex flex-col items-center justify-center p-2.5 rounded-xl border-2 transition-all",
                      isSelected
                        ? "border-primary bg-primary/10 scale-105"
                        : isDisabled
                          ? "border-border/50 opacity-40 cursor-not-allowed"
                          : "border-border hover:border-muted-foreground/50 hover:bg-muted/50"
                    )}
                  >
                    <span className="text-xl mb-0.5">{vibe.emoji}</span>
                    <span className="text-[9px] font-medium text-center leading-tight">{vibe.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Star Ratings */}
          <div className="rounded-xl border border-border bg-card p-4">
            <h2 className="text-sm font-medium mb-2">Quick Ratings</h2>
            <div className="divide-y divide-border">
              {RATING_CATEGORIES.map((cat) => (
                <StarRating
                  key={cat.key}
                  value={ratings[cat.key] || 0}
                  onChange={(v) => setRating(cat.key, v)}
                  label={cat.label}
                  hint={cat.hint}
                />
              ))}
            </div>
          </div>

          {/* Tweet-style Review */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-medium">Spill the tea</h2>
              <span className={cn(
                "text-xs",
                charCount > maxChars ? "text-destructive" : "text-muted-foreground"
              )}>
                {charCount}/{maxChars}
              </span>
            </div>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value.slice(0, maxChars))}
              placeholder="Real talk about this college... 🍵"
              rows={3}
              maxLength={maxChars}
              className="resize-none"
            />
          </div>

          {/* Quick Tags */}
          <div>
            <h2 className="text-sm font-medium mb-2">Add tags <span className="text-muted-foreground font-normal">(optional)</span></h2>
            <div className="flex flex-wrap gap-2">
              {QUICK_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                    selectedTags.includes(tag)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Simplified Metadata */}
          <div className="flex gap-3">
            <div className="flex-1">
              <Select value={reviewerType} onValueChange={setReviewerType}>
                <SelectTrigger className="text-xs">
                  <SelectValue placeholder="I am a..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current_student">Student</SelectItem>
                  <SelectItem value="alumni">Alumni</SelectItem>
                  <SelectItem value="faculty">Faculty</SelectItem>
                  <SelectItem value="parent">Parent</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="text-xs">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018].map((y) => (
                    <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Single Photo Upload */}
          <div>
            {imagePreview ? (
              <div className="relative inline-block">
                <img src={imagePreview} alt="" className="h-24 w-24 rounded-xl object-cover border border-border" />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 rounded-full bg-destructive p-1 text-white shadow-md"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-dashed border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors text-sm"
              >
                <ImagePlus className="h-4 w-4" />
                Add proof 📸
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={handleImageSelect}
            />
          </div>

          {/* Submit Button */}
          <Button
            onClick={() => mutation.mutate()}
            disabled={!isValid || mutation.isPending}
            className="w-full text-base py-6"
            size="lg"
          >
            {mutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : "🚀"}
            {mutation.isPending ? "Posting..." : "Submit Anonymously"}
          </Button>

          {mutation.isError && (
            <p className="text-sm text-destructive text-center">
              {(mutation.error as Error).message}
            </p>
          )}

          <p className="text-[10px] text-muted-foreground text-center">
            Your identity is protected. Reviews are moderated before publishing.
          </p>
        </div>
      </main>
    </div>
  );
};

export default WriteReview;
