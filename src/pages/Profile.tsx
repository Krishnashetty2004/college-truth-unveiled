import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  User, LogOut, Star, BookOpen, Edit3, Save, X, GraduationCap,
} from "lucide-react";
import type { User as SupabaseUser } from "@supabase/supabase-js";

type Profile = Tables<"profiles">;
type Review = Tables<"reviews">;
type Story = Tables<"college_stories">;

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 10 }, (_, i) => CURRENT_YEAR - i);

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    course: "",
    department: "",
    admission_year: "",
    graduation_year: "",
    college_id: "",
  });

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
        return;
      }
      setUser(session.user);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/auth");
        return;
      }
      setUser(session.user);
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const { data: profileData, isLoading: profileLoading } = useQuery<Profile>({
    queryKey: ["profile", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", user!.id)
        .single();
      if (error) throw error;
      return data as Profile;
    },
    enabled: !!user,
  });

  const profile = profileData as Profile | undefined;

  // Sync profile data into form when loaded
  useEffect(() => {
    if (profile) {
      setFormData({
        course: profile.course || "",
        department: profile.department || "",
        admission_year: profile.admission_year?.toString() || "",
        graduation_year: profile.graduation_year?.toString() || "",
        college_id: profile.college_id || "",
      });
    }
  }, [profile]);

  const { data: colleges } = useQuery({
    queryKey: ["colleges-list"],
    queryFn: async () => {
      const { data } = await supabase
        .from("colleges")
        .select("id, name, short_name")
        .eq("is_active", true)
        .order("name")
        .limit(200);
      return data || [];
    },
  });

  const { data: myReviews } = useQuery({
    queryKey: ["my-reviews", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("reviews")
        .select("id, title, overall_rating, status, created_at, college_id")
        .eq("user_id", user!.id)
        .order("created_at", { ascending: false })
        .limit(20);
      if (error) throw error;
      return data as Pick<Review, "id" | "title" | "overall_rating" | "status" | "created_at" | "college_id">[];
    },
    enabled: !!user,
  });

  const { data: myStories } = useQuery({
    queryKey: ["my-stories", user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("college_stories")
        .select("id, title, category, upvote_count, status, created_at")
        .eq("user_id", user!.id)
        .order("created_at", { ascending: false })
        .limit(20);
      if (error) throw error;
      return data as Pick<Story, "id" | "title" | "category" | "upvote_count" | "status" | "created_at">[];
    },
    enabled: !!user,
  });

  const updateMutation = useMutation({
    mutationFn: async () => {
      const updates: Partial<Profile> = {
        course: formData.course || null,
        department: formData.department || null,
        admission_year: formData.admission_year ? parseInt(formData.admission_year) : null,
        graduation_year: formData.graduation_year ? parseInt(formData.graduation_year) : null,
        college_id: formData.college_id || null,
      };
      const { error } = await supabase
        .from("profiles")
        .update(updates)
        .eq("user_id", user!.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
      setEditing(false);
      toast({ title: "Profile updated!" });
    },
    onError: (err: Error) => {
      toast({ title: "Update failed", description: err.message, variant: "destructive" });
    },
  });

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (!user || profileLoading) {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-8 space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-40" />
        <Skeleton className="h-60" />
      </div>
    );
  }

  const statusColor = (s: string) =>
    s === "published" ? "default" : s === "held" ? "destructive" : "secondary";

  return (
    <>
      <header className="border-b border-border bg-muted/30 px-4 py-8">
        <div className="container mx-auto max-w-3xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20">
              <User className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="font-display text-xl font-bold">
                {profile?.anonymous_alias || "Anonymous User"}
              </h1>
              <p className="text-sm text-muted-foreground">{user.email}</p>
              <Badge variant="secondary" className="mt-1 text-xs capitalize">
                {profile?.verification_tier?.replace("_", " ") || "unverified"}
              </Badge>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleSignOut} className="gap-2">
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-4 py-8 space-y-6">
        {/* Profile Info */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              Academic Profile
            </CardTitle>
            {!editing ? (
              <Button variant="ghost" size="sm" onClick={() => setEditing(true)} className="gap-1">
                <Edit3 className="h-3.5 w-3.5" /> Edit
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" onClick={() => setEditing(false)}>
                  <X className="h-3.5 w-3.5" />
                </Button>
                <Button size="sm" onClick={() => updateMutation.mutate()} disabled={updateMutation.isPending} className="gap-1">
                  <Save className="h-3.5 w-3.5" /> Save
                </Button>
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            {editing ? (
              <>
                <div className="space-y-1.5">
                  <Label>College</Label>
                  <Select
                    value={formData.college_id}
                    onValueChange={(v) => setFormData((p) => ({ ...p, college_id: v }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your college" />
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
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label>Course / Program</Label>
                    <Input
                      value={formData.course}
                      onChange={(e) => setFormData((p) => ({ ...p, course: e.target.value }))}
                      placeholder="e.g. B.Tech CSE"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Department</Label>
                    <Input
                      value={formData.department}
                      onChange={(e) => setFormData((p) => ({ ...p, department: e.target.value }))}
                      placeholder="e.g. Computer Science"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Admission Year</Label>
                    <Select
                      value={formData.admission_year}
                      onValueChange={(v) => setFormData((p) => ({ ...p, admission_year: v }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {YEARS.map((y) => (
                          <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Graduation Year</Label>
                    <Select
                      value={formData.graduation_year}
                      onValueChange={(v) => setFormData((p) => ({ ...p, graduation_year: v }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {YEARS.concat(Array.from({ length: 5 }, (_, i) => CURRENT_YEAR + i + 1)).map((y) => (
                          <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2 text-sm">
                <div>
                  <span className="text-muted-foreground">College</span>
                  <p className="mt-0.5 font-medium">
                    {colleges?.find((c) => c.id === profile?.college_id)?.name || "Not set"}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground">Course</span>
                  <p className="mt-0.5 font-medium">{profile?.course || "Not set"}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Department</span>
                  <p className="mt-0.5 font-medium">{profile?.department || "Not set"}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Batch</span>
                  <p className="mt-0.5 font-medium">
                    {profile?.admission_year && profile?.graduation_year
                      ? `${profile.admission_year} – ${profile.graduation_year}`
                      : profile?.admission_year || profile?.graduation_year || "Not set"}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground">Reputation Score</span>
                  <p className="mt-0.5 font-medium">{profile?.reputation_score || 0}</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Total Reviews</span>
                  <p className="mt-0.5 font-medium">{profile?.review_count || 0}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* My Reviews */}
        <div>
          <h2 className="mb-3 font-display text-lg font-semibold flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            My Reviews ({myReviews?.length || 0})
          </h2>
          {myReviews && myReviews.length > 0 ? (
            <div className="space-y-2">
              {myReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-sm truncate">{review.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(review.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 ml-4">
                      {review.overall_rating && (
                        <span className="text-sm font-bold text-primary">
                          {Number(review.overall_rating).toFixed(1)}★
                        </span>
                      )}
                      <Badge variant={statusColor(review.status)} className="capitalize text-xs">
                        {review.status.replace("_", " ")}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center gap-3 py-10 text-center">
                <Star className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm font-medium">No reviews yet</p>
                <Link to="/colleges">
                  <Button size="sm" variant="outline">Explore Colleges</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>

        <Separator />

        {/* My Stories */}
        <div>
          <h2 className="mb-3 font-display text-lg font-semibold flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            My Stories ({myStories?.length || 0})
          </h2>
          {myStories && myStories.length > 0 ? (
            <div className="space-y-2">
              {myStories.map((story) => (
                <Card key={story.id} className="hover:shadow-sm transition-all">
                  <CardContent className="p-4">
                    <Link to={`/stories/${story.id}`} className="flex items-center justify-between">
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-sm truncate">{story.title}</p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {story.category.replace("_", " ")} · {new Date(story.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 ml-4">
                        <span className="text-xs text-muted-foreground">▲ {story.upvote_count}</span>
                        <Badge variant={story.status === "published" ? "default" : "secondary"} className="capitalize text-xs">
                          {story.status}
                        </Badge>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center gap-3 py-10 text-center">
                <BookOpen className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm font-medium">No stories yet</p>
                <Link to="/stories">
                  <Button size="sm" variant="outline">Browse Stories</Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </>
  );
};

export default Profile;
