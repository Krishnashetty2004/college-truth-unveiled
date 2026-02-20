import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Loader2, Star, ImagePlus, X, ChevronRight, Check, Search, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import type { User } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import { SEO } from "@/components/SEO";

// Vibe options
const VIBE_OPTIONS = [
  { value: "actually_good", emoji: "🔥", label: "Actually Good" },
  { value: "mid_af", emoji: "😐", label: "Mid AF" },
  { value: "avoid", emoji: "💀", label: "Avoid" },
  { value: "overrated", emoji: "🎭", label: "Overrated" },
  { value: "paisa_barbaad", emoji: "💸", label: "Paisa Barbaad" },
  { value: "party_school", emoji: "🎉", label: "Party School" },
  { value: "nerd_paradise", emoji: "📚", label: "Nerd Paradise" },
  { value: "placement_king", emoji: "💼", label: "Placement King" },
  { value: "beautiful_girls", emoji: "👩", label: "Beautiful Girls" },
  { value: "beautiful_boys", emoji: "👨", label: "Beautiful Boys" },
  { value: "hidden_gem", emoji: "✨", label: "Hidden Gem" },
  { value: "boring", emoji: "😴", label: "Boring AF" },
] as const;

const MAX_VIBES = 5;

// Quick tags
const QUICK_TAGS = [
  "#PlacementScam", "#GoodVibes", "#Ragging", "#Hostel10/10", "#MessFood💀",
  "#WiFiDead", "#ProfsSleep", "#Avoid", "#PartyMode", "#StudyOnly", "#Worth",
];

// Rating categories
const RATING_CATEGORIES = [
  { key: "rating_placement", label: "Placements", hint: "Will you get a job?" },
  { key: "rating_faculty", label: "Faculty", hint: "Do profs actually teach?" },
  { key: "rating_campus_life", label: "Vibes", hint: "Campus life & social scene" },
  { key: "rating_value_for_money", label: "Worth it?", hint: "Value for the fees" },
  { key: "rating_food", label: "Food", hint: "Mess & canteen quality" },
  { key: "rating_hostel", label: "Hostel", hint: "Living conditions" },
  { key: "rating_wifi", label: "WiFi", hint: "Internet speed & reliability" },
  { key: "rating_infrastructure", label: "Infrastructure", hint: "Labs, library, classrooms" },
  { key: "rating_safety", label: "Safety", hint: "Campus security & safety" },
  { key: "rating_location", label: "Location", hint: "Connectivity & surroundings" },
] as const;

// Course options
const COURSE_OPTIONS = [
  "B.Tech / B.E.", "M.Tech / M.E.", "BBA", "MBA", "B.Com", "M.Com",
  "BA", "MA", "B.Sc", "M.Sc", "BCA", "MCA", "MBBS", "BDS", "LLB",
  "B.Arch", "B.Pharm", "PhD", "Other",
];

// Department options
const DEPARTMENT_OPTIONS = [
  "Computer Science / IT", "Electronics / ECE", "Mechanical", "Civil",
  "Electrical", "Chemical", "Biotechnology", "Management", "Commerce",
  "Arts / Humanities", "Science", "Medicine", "Law", "Architecture", "Other",
];

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

const Contribute = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [step, setStep] = useState(1); // 1: College, 2: Review

  // College selection
  const [collegeSearch, setCollegeSearch] = useState("");
  const [selectedCollege, setSelectedCollege] = useState<{ id: string; name: string; city: string } | null>(null);
  const [collegeOpen, setCollegeOpen] = useState(false);

  // Profile details
  const [course, setCourse] = useState("");
  const [courseOther, setCourseOther] = useState("");
  const [department, setDepartment] = useState("");
  const [departmentOther, setDepartmentOther] = useState("");
  const [admissionYear, setAdmissionYear] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [reviewerType, setReviewerType] = useState("current_student");

  // Review content
  const [vibeTags, setVibeTags] = useState<string[]>([]);
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [content, setContent] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auth check
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

  // Fetch colleges for search
  const { data: colleges, isLoading: collegesLoading } = useQuery({
    queryKey: ["colleges-search", collegeSearch],
    queryFn: async () => {
      const query = supabase
        .from("colleges")
        .select("id, name, short_name, city")
        .eq("is_active", true)
        .order("name")
        .limit(20);

      if (collegeSearch) {
        query.or(`name.ilike.%${collegeSearch}%,short_name.ilike.%${collegeSearch}%,city.ilike.%${collegeSearch}%`);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
    enabled: collegeOpen,
  });

  // Check if user already has a review
  const { data: existingProfile } = useQuery({
    queryKey: ["user-profile-contribute", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("college_id, course, department, admission_year, graduation_year")
        .eq("user_id", user!.id)
        .single();
      if (error && error.code !== "PGRST116") throw error;
      return data;
    },
    enabled: !!user,
  });

  // Pre-fill from existing profile
  useEffect(() => {
    if (existingProfile) {
      if (existingProfile.course) setCourse(existingProfile.course);
      if (existingProfile.department) setDepartment(existingProfile.department);
      if (existingProfile.admission_year) setAdmissionYear(existingProfile.admission_year.toString());
      if (existingProfile.graduation_year) setGraduationYear(existingProfile.graduation_year.toString());
    }
  }, [existingProfile]);

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

  const toggleVibe = (vibe: string) => {
    setVibeTags(prev => {
      if (prev.includes(vibe)) return prev.filter(v => v !== vibe);
      if (prev.length >= MAX_VIBES) return prev;
      return [...prev, vibe];
    });
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const setRating = (key: string, value: number) => {
    setRatings(prev => ({ ...prev, [key]: value }));
  };

  // Submit mutation
  const mutation = useMutation({
    mutationFn: async () => {
      if (!selectedCollege || !user) throw new Error("Missing data");

      const finalCourse = course === "Other" ? courseOther : course;
      const finalDepartment = department === "Other" ? departmentOther : department;

      // 1. Update profile with college info
      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          college_id: selectedCollege.id,
          course: finalCourse || null,
          department: finalDepartment || null,
          admission_year: admissionYear ? parseInt(admissionYear) : null,
          graduation_year: graduationYear ? parseInt(graduationYear) : null,
        })
        .eq("user_id", user.id);

      if (profileError) throw profileError;

      // 2. Create review
      const overallRating = Object.values(ratings).length > 0
        ? Object.values(ratings).reduce((a, b) => a + b, 0) / Object.values(ratings).length
        : null;

      const vibeLabels = vibeTags.map(v => VIBE_OPTIONS.find(opt => opt.value === v)?.label).filter(Boolean);
      const vibeLabel = vibeLabels.length > 0 ? vibeLabels.slice(0, 2).join(" + ") : "Review";
      const title = `${vibeLabel} - ${content.slice(0, 50)}${content.length > 50 ? '...' : ''}`;

      const { data: reviewData, error: reviewError } = await supabase
        .from("reviews")
        .insert({
          college_id: selectedCollege.id,
          user_id: user.id,
          title,
          content,
          reviewer_type: reviewerType as any,
          admission_year: admissionYear ? parseInt(admissionYear) : null,
          graduation_year: graduationYear ? parseInt(graduationYear) : null,
          course: finalCourse || null,
          department: finalDepartment || null,
          overall_rating: overallRating,
          status: "published" as const,
          ...Object.fromEntries(Object.entries(ratings)),
        })
        .select("id")
        .single();

      if (reviewError) throw reviewError;

      // 3. Upload image if any
      if (image && reviewData) {
        const ext = image.name.split(".").pop();
        const path = `${user.id}/${reviewData.id}/${Date.now()}.${ext}`;
        const { error: uploadErr } = await supabase.storage
          .from("review-images")
          .upload(path, image, { contentType: image.type });
        if (!uploadErr) {
          const { data: urlData } = supabase.storage
            .from("review-images")
            .getPublicUrl(path);
          await supabase.from("review_images").insert([{
            review_id: reviewData.id,
            image_url: urlData.publicUrl,
            display_order: 0,
            image_type: "other" as const,
          }]);
          await supabase
            .from("reviews")
            .update({ has_images: true })
            .eq("id", reviewData.id);
        }
      }

      // 4. Trigger AI moderation
      if (reviewData) {
        supabase.functions.invoke("moderate-content", {
          body: { type: "review", id: reviewData.id },
        }).catch(console.error);
      }

      return reviewData;
    },
    onSuccess: () => {
      navigate("/opportunities");
    },
  });

  const minChars = 50;
  const charCount = content.length;

  // Validation
  const isStep1Valid = selectedCollege && course && admissionYear;
  const isStep2Valid = vibeTags.length > 0 && Object.keys(ratings).length >= 1 && charCount >= minChars;

  return (
    <>
      <SEO
        title="Share Your College Experience"
        description="Write an anonymous review of your college and unlock access to 2,700+ jobs and internships."
        url="/contribute"
      />

      <article className="mx-auto max-w-xl px-6 py-12 md:py-16">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            Join the Brotherhood
          </p>
          <h1 className="mt-4 font-display text-3xl leading-tight tracking-tight md:text-4xl">
            Share Your Truth,<br />
            <em>Unlock Opportunities</em>
          </h1>
          <p className="mt-4 text-muted-foreground">
            One honest review opens doors to 2,700+ jobs & internships
          </p>
        </motion.header>

        {/* Progress */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className={cn(
            "flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium transition-colors",
            step >= 1 ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
          )}>
            {step > 1 ? <Check className="h-4 w-4" /> : "1"}
          </div>
          <div className={cn("h-px w-12", step > 1 ? "bg-foreground" : "bg-border")} />
          <div className={cn(
            "flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium transition-colors",
            step >= 2 ? "bg-foreground text-background" : "bg-muted text-muted-foreground"
          )}>
            2
          </div>
        </div>

        {/* Step 1: College & Profile */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-display text-lg mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Your College
              </h2>

              {/* College Search */}
              <Popover open={collegeOpen} onOpenChange={setCollegeOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-full justify-between h-auto py-3",
                      !selectedCollege && "text-muted-foreground"
                    )}
                  >
                    {selectedCollege ? (
                      <div className="text-left">
                        <p className="font-medium">{selectedCollege.name}</p>
                        <p className="text-xs text-muted-foreground">{selectedCollege.city}</p>
                      </div>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Search className="h-4 w-4" />
                        Search your college...
                      </span>
                    )}
                    <ChevronRight className="h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-0" align="start">
                  <Command>
                    <CommandInput
                      placeholder="Type college name or city..."
                      value={collegeSearch}
                      onValueChange={setCollegeSearch}
                    />
                    <CommandList>
                      <CommandEmpty>
                        {collegesLoading ? "Searching..." : "No college found."}
                      </CommandEmpty>
                      <CommandGroup>
                        {colleges?.map((college) => (
                          <CommandItem
                            key={college.id}
                            value={college.name}
                            onSelect={() => {
                              setSelectedCollege({
                                id: college.id,
                                name: college.short_name || college.name,
                                city: college.city,
                              });
                              setCollegeOpen(false);
                            }}
                          >
                            <div>
                              <p className="font-medium">{college.short_name || college.name}</p>
                              <p className="text-xs text-muted-foreground">{college.city}</p>
                            </div>
                            {selectedCollege?.id === college.id && (
                              <Check className="ml-auto h-4 w-4" />
                            )}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Profile Details */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <h2 className="font-display text-lg">Your Details</h2>
              <p className="text-sm text-muted-foreground -mt-2">
                This info stays in your profile. Fill once, never again.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <Select value={course} onValueChange={setCourse}>
                  <SelectTrigger>
                    <SelectValue placeholder="Course / Program *" />
                  </SelectTrigger>
                  <SelectContent>
                    {COURSE_OPTIONS.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={department} onValueChange={setDepartment}>
                  <SelectTrigger>
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    {DEPARTMENT_OPTIONS.map((d) => (
                      <SelectItem key={d} value={d}>{d}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {(course === "Other") && (
                  <Input
                    value={courseOther}
                    onChange={(e) => setCourseOther(e.target.value)}
                    placeholder="Enter your course..."
                  />
                )}

                {(department === "Other") && (
                  <Input
                    value={departmentOther}
                    onChange={(e) => setDepartmentOther(e.target.value)}
                    placeholder="Enter your department..."
                  />
                )}

                <Select value={admissionYear} onValueChange={setAdmissionYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Admission Year *" />
                  </SelectTrigger>
                  <SelectContent>
                    {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016].map((y) => (
                      <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={graduationYear} onValueChange={setGraduationYear}>
                  <SelectTrigger>
                    <SelectValue placeholder="Graduation Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {[2028, 2027, 2026, 2025, 2024, 2023, 2022, 2021, 2020].map((y) => (
                      <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={reviewerType} onValueChange={setReviewerType}>
                  <SelectTrigger>
                    <SelectValue placeholder="I am a..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="current_student">Current Student</SelectItem>
                    <SelectItem value="alumni">Alumni</SelectItem>
                    <SelectItem value="parent">Parent</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full py-6 text-base"
              disabled={!isStep1Valid}
              onClick={() => setStep(2)}
            >
              Continue to Review
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}

        {/* Step 2: Review */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Selected College Card */}
            <div className="rounded-xl border border-border bg-card/50 p-4 flex items-center justify-between">
              <div>
                <p className="font-medium">{selectedCollege?.name}</p>
                <p className="text-sm text-muted-foreground">{selectedCollege?.city} · {course}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
                Change
              </Button>
            </div>

            {/* Vibe Selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-medium">This college is... *</h2>
                <span className={cn(
                  "text-xs",
                  vibeTags.length >= MAX_VIBES ? "text-primary font-medium" : "text-muted-foreground"
                )}>
                  {vibeTags.length}/{MAX_VIBES}
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

            {/* Ratings */}
            <div className="rounded-xl border border-border bg-card p-4">
              <h2 className="text-sm font-medium mb-2">Rate these (at least 1) *</h2>
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

            {/* Review Content */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-medium">Your honest review *</h2>
                <span className={cn(
                  "text-xs",
                  charCount < minChars ? "text-orange-500" : "text-green-500"
                )}>
                  {charCount}/{minChars} min
                </span>
              </div>
              <Textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Real talk about this college... What should juniors know? The good, the bad, the truth."
                rows={5}
                className="resize-none"
              />
            </div>

            {/* Tags */}
            <div>
              <h2 className="text-sm font-medium mb-2">Add tags (optional)</h2>
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

            {/* Image Upload */}
            <div>
              {imagePreview ? (
                <div className="relative inline-block">
                  <img src={imagePreview} alt="" className="h-24 w-24 rounded-xl object-cover border border-border" />
                  <button
                    type="button"
                    onClick={() => { setImage(null); setImagePreview(""); }}
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
                  Add proof (optional)
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

            {/* Submit */}
            <Button
              size="lg"
              className="w-full py-6 text-base"
              disabled={!isStep2Valid || mutation.isPending}
              onClick={() => mutation.mutate()}
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit & Unlock Opportunities
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            {mutation.isError && (
              <p className="text-sm text-destructive text-center">
                {(mutation.error as Error).message}
              </p>
            )}

            <p className="text-xs text-muted-foreground text-center">
              Your identity stays anonymous. Reviews are moderated before publishing.
            </p>
          </motion.div>
        )}
      </article>
    </>
  );
};

export default Contribute;
