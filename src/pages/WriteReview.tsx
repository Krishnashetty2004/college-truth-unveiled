import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Loader2, ArrowLeft, Star, ImagePlus, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Constants } from "@/integrations/supabase/types";
import type { User } from "@supabase/supabase-js";

const REVIEWER_TYPES = Constants.public.Enums.reviewer_type;
const MAX_IMAGES = 5;

const ratingCategories = [
  { key: "rating_faculty", label: "Faculty" },
  { key: "rating_placement", label: "Placements" },
  { key: "rating_infrastructure", label: "Infrastructure" },
  { key: "rating_campus_life", label: "Campus Life" },
  { key: "rating_hostel", label: "Hostel" },
  { key: "rating_food", label: "Food" },
  { key: "rating_wifi", label: "WiFi" },
  { key: "rating_curriculum", label: "Curriculum" },
  { key: "rating_admin", label: "Administration" },
  { key: "rating_safety", label: "Safety" },
  { key: "rating_location", label: "Location" },
  { key: "rating_value_for_money", label: "Value for Money" },
] as const;

const WriteReview = () => {
  const { collegeId } = useParams<{ collegeId: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [advice, setAdvice] = useState("");
  const [course, setCourse] = useState("");
  const [department, setDepartment] = useState("");
  const [reviewerType, setReviewerType] = useState<string>("current_student");
  const [admissionYear, setAdmissionYear] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeImage = (idx: number) => {
    setImages((prev) => prev.filter((_, i) => i !== idx));
    setImagePreviews((prev) => prev.filter((_, i) => i !== idx));
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

      const { data, error } = await supabase
        .from("reviews")
        .insert({
          college_id: collegeId!,
          user_id: user!.id,
          title,
          content,
          pros: pros || null,
          cons: cons || null,
          advice: advice || null,
          course: course || null,
          department: department || null,
          reviewer_type: reviewerType as any,
          admission_year: admissionYear ? parseInt(admissionYear) : null,
          graduation_year: graduationYear ? parseInt(graduationYear) : null,
          overall_rating: overallRating,
          ...Object.fromEntries(
            Object.entries(ratings).map(([k, v]) => [k, v])
          ),
        })
        .select("id")
        .single();
      if (error) throw error;

      // Upload images if any
      if (images.length > 0) {
        let uploadedCount = 0;
        for (let i = 0; i < images.length; i++) {
          const img = images[i];
          const ext = img.name.split(".").pop();
          const path = `${user!.id}/${data.id}/${Date.now()}.${ext}`;
          const { error: uploadErr } = await supabase.storage
            .from("review-images")
            .upload(path, img, { contentType: img.type });
          if (uploadErr) {
            console.error("Image upload failed:", uploadErr.message);
            continue;
          }
          const { data: urlData } = supabase.storage
            .from("review-images")
            .getPublicUrl(path);
          await supabase.from("review_images").insert({
            review_id: data.id,
            image_url: urlData.publicUrl,
            display_order: i,
            image_type: "photo",
          });
          uploadedCount++;
        }
        if (uploadedCount > 0) {
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

  return (
    <div className="min-h-screen bg-background pl-14">
      <Navbar />
      <header className="border-b border-border px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <button onClick={() => navigate(-1)} className="mb-3 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-3 w-3" /> Back
          </button>
          <h1 className="font-display text-2xl">Write a Review</h1>
          {college && (
            <p className="mt-1 text-sm text-muted-foreground">
              for {college.short_name || college.name}
            </p>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-8">
        <div className="space-y-6">
          {/* Reviewer info */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label className="text-xs">I am a</Label>
              <Select value={reviewerType} onValueChange={setReviewerType}>
                <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                <SelectContent>
                  {REVIEWER_TYPES.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs">Course / Branch</Label>
              <Input value={course} onChange={(e) => setCourse(e.target.value)} placeholder="e.g. B.Tech CSE" className="mt-1" />
            </div>
            <div>
              <Label className="text-xs">Department</Label>
              <Input value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="e.g. Computer Science" className="mt-1" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Admission Year</Label>
                <Input type="number" value={admissionYear} onChange={(e) => setAdmissionYear(e.target.value)} placeholder="2021" className="mt-1" />
              </div>
              <div>
                <Label className="text-xs">Graduation Year</Label>
                <Input type="number" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} placeholder="2025" className="mt-1" />
              </div>
            </div>
          </div>

          {/* Ratings */}
          <div>
            <h2 className="font-display text-lg mb-4">Ratings</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {ratingCategories.map((cat) => (
                <div key={cat.key} className="rounded-lg border border-border bg-card p-3">
                  <div className="flex items-center justify-between mb-2">
                    <Label className="text-xs">{cat.label}</Label>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-warning fill-warning" />
                      <span className="text-xs font-bold">{ratings[cat.key] || 0}/5</span>
                    </div>
                  </div>
                  <Slider
                    value={[ratings[cat.key] || 0]}
                    onValueChange={([v]) => setRating(cat.key, v)}
                    min={0}
                    max={5}
                    step={1}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Written review */}
          <div className="space-y-4">
            <div>
              <Label className="text-xs">Review Title</Label>
              <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Sum it up in one line" className="mt-1" maxLength={200} />
            </div>
            <div>
              <Label className="text-xs">Detailed Review</Label>
              <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Share your honest experience..." rows={6} className="mt-1" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label className="text-xs">Pros</Label>
                <Textarea value={pros} onChange={(e) => setPros(e.target.value)} placeholder="What's good?" rows={3} className="mt-1" />
              </div>
              <div>
                <Label className="text-xs">Cons</Label>
                <Textarea value={cons} onChange={(e) => setCons(e.target.value)} placeholder="What's bad?" rows={3} className="mt-1" />
              </div>
            </div>
            <div>
              <Label className="text-xs">Advice for prospective students</Label>
              <Textarea value={advice} onChange={(e) => setAdvice(e.target.value)} placeholder="What would you tell someone considering this college?" rows={3} className="mt-1" />
            </div>
          </div>

          {/* Image upload */}
          <div>
            <Label className="text-xs">Add Photos <span className="text-muted-foreground">(optional, max {MAX_IMAGES}) — hostel, mess, classrooms etc</span></Label>
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
              accept="image/jpeg,image/png,image/webp"
              multiple
              className="hidden"
              onChange={handleImageSelect}
            />
          </div>

          <Button
            onClick={() => mutation.mutate()}
            disabled={!title.trim() || !content.trim() || mutation.isPending}
            className="w-full"
            size="lg"
          >
            {mutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
            {mutation.isPending ? "Submitting..." : "Submit Review Anonymously"}
          </Button>
          {mutation.isError && (
            <p className="text-sm text-destructive text-center">
              {(mutation.error as Error).message}
            </p>
          )}
          <p className="text-xs text-muted-foreground text-center">
            Your identity is always protected. Reviews go through AI moderation before publishing.
          </p>
        </div>
      </main>
    </div>
  );
};

export default WriteReview;
