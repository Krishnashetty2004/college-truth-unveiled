import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Search, X, Plus, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts";

const RATING_KEYS = [
  { key: "avg_placement", label: "Placements" },
  { key: "avg_faculty", label: "Faculty" },
  { key: "avg_curriculum", label: "Curriculum" },
  { key: "avg_hostel", label: "Hostel" },
  { key: "avg_food", label: "Food" },
  { key: "avg_wifi", label: "WiFi" },
  { key: "avg_infrastructure", label: "Infra" },
  { key: "avg_campus_life", label: "Campus" },
  { key: "avg_safety", label: "Safety" },
  { key: "avg_location", label: "Location" },
  { key: "avg_admin", label: "Admin" },
  { key: "avg_value_for_money", label: "Value" },
] as const;

const COLORS = ["hsl(220, 25%, 30%)", "hsl(18, 50%, 48%)", "hsl(152, 40%, 38%)"];

function useCollegeSearch(search: string) {
  return useQuery({
    queryKey: ["college-search", search],
    queryFn: async () => {
      if (!search || search.length < 2) return [];
      const { data, error } = await supabase
        .from("colleges")
        .select("id, name, short_name, city, state, tier, type")
        .or(`name.ilike.%${search}%,short_name.ilike.%${search}%`)
        .limit(8);
      if (error) throw error;
      return data;
    },
    enabled: search.length >= 2,
  });
}

function useCollegeDetails(ids: string[]) {
  return useQuery({
    queryKey: ["college-compare", ids],
    queryFn: async () => {
      if (ids.length === 0) return [];
      const { data, error } = await supabase
        .from("colleges")
        .select("*")
        .in("id", ids);
      if (error) throw error;
      return data;
    },
    enabled: ids.length > 0,
  });
}

const Compare = () => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const { data: searchResults } = useCollegeSearch(searchInput);
  const { data: colleges } = useCollegeDetails(selectedIds);

  const addCollege = (id: string) => {
    if (selectedIds.length < 3 && !selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id]);
    }
    setSearchInput("");
    setShowSearch(false);
  };

  const removeCollege = (id: string) => {
    setSelectedIds(selectedIds.filter((i) => i !== id));
  };

  const radarData = useMemo(() => {
    if (!colleges || colleges.length === 0) return [];
    return RATING_KEYS.map((rk) => {
      const entry: any = { category: rk.label };
      colleges.forEach((c, i) => {
        entry[c.short_name || c.name.slice(0, 15)] = Number((c as any)[rk.key]) || 0;
      });
      return entry;
    });
  }, [colleges]);

  const collegeNames = colleges?.map((c) => c.short_name || c.name.slice(0, 15)) || [];

  return (
    <>
      <header className="border-b border-border px-4 py-10">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-3xl">Compare</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Pick 2-3 colleges. See all 12 ratings side by side.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        {/* Selected colleges + add button */}
        <div className="flex flex-wrap items-center gap-3">
          {colleges?.map((c) => (
            <div key={c.id} className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
              <span className="text-sm font-medium">{c.short_name || c.name}</span>
              <button onClick={() => removeCollege(c.id)} className="text-muted-foreground hover:text-foreground">
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}

          {selectedIds.length < 3 && (
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="flex items-center gap-2 rounded-lg border border-dashed border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
              >
                <Plus className="h-4 w-4" />
                Add college {selectedIds.length > 0 ? `(${3 - selectedIds.length} left)` : ""}
              </button>

              {showSearch && (
                <div className="absolute left-0 top-full z-20 mt-2 w-80 rounded-xl border border-border bg-card p-3 shadow-elevated">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      autoFocus
                      placeholder="Search colleges..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      className="pl-8 text-sm"
                    />
                  </div>
                  {searchResults && searchResults.length > 0 && (
                    <div className="mt-2 max-h-48 space-y-1 overflow-y-auto">
                      {searchResults
                        .filter((r) => !selectedIds.includes(r.id))
                        .map((r) => (
                          <button
                            key={r.id}
                            onClick={() => addCollege(r.id)}
                            className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm transition-colors hover:bg-accent"
                          >
                            <div>
                              <p className="font-medium">{r.name}</p>
                              <p className="text-xs text-muted-foreground">{r.city}, {r.state}</p>
                            </div>
                            <Plus className="h-3.5 w-3.5 text-muted-foreground" />
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Empty state */}
        {selectedIds.length === 0 && (
          <div className="mt-20 text-center">
            <p className="font-display text-xl">Select colleges to compare</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Add 2–3 colleges to see them head-to-head across all 12 categories.
            </p>
          </div>
        )}

        {/* Radar Chart */}
        {colleges && colleges.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10"
          >
            <h2 className="font-display text-lg mb-4">Radar Comparison</h2>
            <div className="rounded-xl border border-border bg-card p-4">
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(40, 10%, 75%)" />
                  <PolarAngleAxis dataKey="category" tick={{ fontSize: 11, fill: "hsl(30, 8%, 45%)" }} />
                  <PolarRadiusAxis domain={[0, 10]} tick={{ fontSize: 10 }} />
                  {collegeNames.map((name, i) => (
                    <Radar
                      key={name}
                      name={name}
                      dataKey={name}
                      stroke={COLORS[i]}
                      fill={COLORS[i]}
                      fillOpacity={0.15}
                      strokeWidth={2}
                    />
                  ))}
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        )}

        {/* Side-by-side ratings */}
        {colleges && colleges.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <h2 className="font-display text-lg mb-4">Category Breakdown</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 text-left text-xs font-medium text-muted-foreground">Category</th>
                    {colleges.map((c) => (
                      <th key={c.id} className="py-3 text-center text-xs font-medium">
                        {c.short_name || c.name.slice(0, 20)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RATING_KEYS.map((rk) => {
                    const scores = colleges.map((c) => Number((c as any)[rk.key]) || 0);
                    const maxScore = Math.max(...scores);

                    return (
                      <tr key={rk.key} className="border-b border-border/50">
                        <td className="py-3 text-muted-foreground">{rk.label}</td>
                        {colleges.map((c, i) => {
                          const score = scores[i];
                          const isWinner = score > 0 && score === maxScore && scores.filter((s) => s === maxScore).length === 1;
                          return (
                            <td key={c.id} className="py-3 text-center">
                              <span className={`font-display text-base ${isWinner ? "font-bold" : ""}`}>
                                {score > 0 ? score.toFixed(1) : "—"}
                              </span>
                              {isWinner && <span className="ml-1 text-xs">👑</span>}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                  {/* Overall */}
                  <tr className="border-t-2 border-border">
                    <td className="py-3 font-medium">Overall AI Score</td>
                    {colleges.map((c) => {
                      const score = Number(c.ai_overall_score) || 0;
                      return (
                        <td key={c.id} className="py-3 text-center">
                          <span className="font-display text-lg font-bold">
                            {score > 0 ? score.toFixed(1) : "—"}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* College detail links */}
        {colleges && colleges.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {colleges.map((c) => (
              <Link
                key={c.id}
                to={`/colleges/${c.id}`}
                className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                View {c.short_name || c.name} details
                <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Compare;
