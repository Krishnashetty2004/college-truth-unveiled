import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Trophy, TrendingUp, ChevronRight, Utensils, Wifi, Building2, GraduationCap, Shield, MapPin, BookOpen, Users, Heart, DollarSign, Headphones } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import { Constants } from "@/integrations/supabase/types";
import { motion } from "framer-motion";

type RankingCategory = {
  key: string;
  label: string;
  icon: typeof Trophy;
  dbColumn: string;
  emoji: string;
};

const RANKING_CATEGORIES: RankingCategory[] = [
  { key: "overall", label: "Overall Best", icon: Trophy, dbColumn: "ai_overall_score", emoji: "🏆" },
  { key: "placement", label: "Best Placements", icon: TrendingUp, dbColumn: "avg_placement", emoji: "💼" },
  { key: "faculty", label: "Best Faculty", icon: GraduationCap, dbColumn: "avg_faculty", emoji: "👨‍🏫" },
  { key: "food", label: "Best Food", icon: Utensils, dbColumn: "avg_food", emoji: "🍛" },
  { key: "hostel", label: "Best Hostel", icon: Building2, dbColumn: "avg_hostel", emoji: "🏠" },
  { key: "wifi", label: "Best WiFi", icon: Wifi, dbColumn: "avg_wifi", emoji: "📶" },
  { key: "infrastructure", label: "Best Infrastructure", icon: Building2, dbColumn: "avg_infrastructure", emoji: "🏗️" },
  { key: "campus_life", label: "Most Fun Campus", icon: Heart, dbColumn: "avg_campus_life", emoji: "🎉" },
  { key: "safety", label: "Safest Campus", icon: Shield, dbColumn: "avg_safety", emoji: "🛡️" },
  { key: "location", label: "Best Location", icon: MapPin, dbColumn: "avg_location", emoji: "📍" },
  { key: "curriculum", label: "Best Curriculum", icon: BookOpen, dbColumn: "avg_curriculum", emoji: "📚" },
  { key: "value", label: "Best Value for Money", icon: DollarSign, dbColumn: "avg_value_for_money", emoji: "💰" },
  { key: "admin", label: "Best Administration", icon: Headphones, dbColumn: "avg_admin", emoji: "🏛️" },
];

const CITIES = [
  "Hyderabad", "Bangalore", "Delhi", "Chennai", "Mumbai",
  "Pune", "Kolkata", "Vizag", "Ahmedabad", "Jaipur",
];

const TYPES = Constants.public.Enums.college_type;
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

function useRankings(category: string, city?: string, type?: string) {
  const cat = RANKING_CATEGORIES.find((c) => c.key === category)!;

  return useQuery({
    queryKey: ["rankings", category, city, type],
    queryFn: async () => {
      let query = supabase
        .from("colleges")
        .select("id, name, short_name, city, state, tier, type, ownership, total_reviews, ai_overall_score, avg_placement, avg_faculty, avg_food, avg_hostel, avg_wifi, avg_infrastructure, avg_campus_life, avg_safety, avg_location, avg_curriculum, avg_value_for_money, avg_admin")
        .eq("is_active", true)
        .order(cat.dbColumn, { ascending: false })
        .limit(10);

      if (city) query = query.eq("city", city);
      if (type) query = query.eq("type", type as any);

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });
}

const Rankings = () => {
  const [activeCategory, setActiveCategory] = useState("overall");
  const [cityFilter, setCityFilter] = useState<string>();
  const [typeFilter, setTypeFilter] = useState<string>();

  const { data: colleges, isLoading } = useRankings(activeCategory, cityFilter, typeFilter);
  const activeCat = RANKING_CATEGORIES.find((c) => c.key === activeCategory)!;

  const getScore = (college: any) => {
    const val = college[activeCat.dbColumn];
    return val ? Number(val) : 0;
  };

  return (
    <div className="min-h-screen bg-background pl-14">
      <Navbar />

      <header className="border-b border-border px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-3xl">Rankings</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Category-specific top-10 lists. Who's actually the best — and worst.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {RANKING_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                activeCategory === cat.key
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card hover:bg-accent"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Select value={cityFilter ?? "all"} onValueChange={(v) => setCityFilter(v === "all" ? undefined : v)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              {CITIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>

          <Select value={typeFilter ?? "all"} onValueChange={(v) => setTypeFilter(v === "all" ? undefined : v)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {TYPES.map((t) => <SelectItem key={t} value={t}>{capitalize(t)}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Active category header */}
        <div className="mt-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-lg">
            {activeCat.emoji}
          </div>
          <div>
            <h2 className="font-display text-xl">{activeCat.label}</h2>
            <p className="text-xs text-muted-foreground">Top 10 colleges</p>
          </div>
        </div>

        {/* Rankings list */}
        <div className="mt-6 space-y-3">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <Skeleton className="h-8 w-8 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-3 w-1/3" />
                </div>
                <Skeleton className="h-6 w-12" />
              </div>
            ))
          ) : colleges && colleges.length > 0 ? (
            colleges.map((college, i) => {
              const score = getScore(college);
              const maxScore = getScore(colleges[0]) || 10;

              return (
                <motion.div
                  key={college.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/colleges/${college.id}`}
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:shadow-elevated"
                  >
                    {/* Rank */}
                    <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      i === 0 ? "bg-yellow-500/20 text-yellow-700" :
                      i === 1 ? "bg-gray-400/20 text-gray-600" :
                      i === 2 ? "bg-orange-500/20 text-orange-700" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {i + 1}
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-sm font-medium leading-snug line-clamp-1 group-hover:text-primary transition-colors">
                        {college.name}
                      </p>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{college.city}</span>
                        <span>·</span>
                        <span className="capitalize">{college.type}</span>
                        <span>·</span>
                        <span>{college.total_reviews} reviews</span>
                      </div>
                      {/* Score bar */}
                      <div className="mt-2">
                        <Progress value={maxScore > 0 ? (score / maxScore) * 100 : 0} className="h-1.5" />
                      </div>
                    </div>

                    {/* Score */}
                    <div className="flex-shrink-0 text-right">
                      <span className="font-display text-lg font-bold">
                        {score > 0 ? score.toFixed(1) : "—"}
                      </span>
                      <p className="text-[10px] text-muted-foreground">/10</p>
                    </div>

                    <ChevronRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              );
            })
          ) : (
            <div className="py-16 text-center">
              <p className="font-display text-lg">No rankings yet</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Colleges need reviews before they appear in rankings. Be the first to review!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Rankings;
