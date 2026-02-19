import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search as SearchIcon, GraduationCap, BookOpen, User, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

type SearchResults = {
  colleges: { id: string; name: string; short_name: string | null; city: string; state: string; type: string; tier: string; rank: number }[];
  stories: { id: string; title: string; category: string; upvote_count: number; rank: number }[];
  professors: { id: string; name: string; department: string | null; college_id: string; rank: number }[];
};

interface SearchDialogProps {
  triggerClassName?: string;
  triggerLabel?: string;
  iconOnly?: boolean;
}

export default function SearchDialog({ triggerClassName, triggerLabel, iconOnly = true }: SearchDialogProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data: results, isLoading } = useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("search_all", {
        search_query: query,
        result_limit: 5,
      });
      if (error) throw error;
      return data as unknown as SearchResults;
    },
    enabled: query.length >= 2,
    staleTime: 1000,
  });

  const goTo = (path: string) => {
    setOpen(false);
    setQuery("");
    navigate(path);
  };

  const hasResults = results && (results.colleges.length > 0 || results.stories.length > 0 || results.professors.length > 0);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {iconOnly ? (
          <button className="group relative flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-all duration-200 hover:bg-foreground/5 hover:text-foreground">
            <SearchIcon className="h-[18px] w-[18px]" strokeWidth={1.5} />
            <span className="pointer-events-none absolute left-12 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
              Search
            </span>
          </button>
        ) : (
          <button className={triggerClassName}>
            {triggerLabel || "Search"}
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg p-0 gap-0 overflow-hidden">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <SearchIcon className="h-4 w-4 text-muted-foreground shrink-0" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search colleges, stories, professors..."
            className="border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          <AnimatePresence mode="wait">
            {query.length < 2 ? (
              <p className="p-6 text-center text-sm text-muted-foreground">Type at least 2 characters to search</p>
            ) : isLoading ? (
              <p className="p-6 text-center text-sm text-muted-foreground">Searching...</p>
            ) : !hasResults ? (
              <p className="p-6 text-center text-sm text-muted-foreground">No results found for "{query}"</p>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-2">
                {results.colleges.length > 0 && (
                  <div>
                    <p className="px-4 py-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Colleges</p>
                    {results.colleges.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => goTo(`/colleges/${c.id}`)}
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-accent"
                      >
                        <GraduationCap className="h-4 w-4 text-muted-foreground shrink-0" />
                        <div className="min-w-0">
                          <p className="font-medium truncate">{c.short_name || c.name}</p>
                          <p className="text-xs text-muted-foreground">{c.city}, {c.state}</p>
                        </div>
                        <Badge variant="outline" className="ml-auto text-[10px] shrink-0">{c.tier.replace("_", " ")}</Badge>
                      </button>
                    ))}
                  </div>
                )}
                {results.stories.length > 0 && (
                  <div>
                    <p className="px-4 py-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Stories</p>
                    {results.stories.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => goTo(`/stories/${s.id}`)}
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-accent"
                      >
                        <BookOpen className="h-4 w-4 text-muted-foreground shrink-0" />
                        <p className="font-medium truncate">{s.title}</p>
                      </button>
                    ))}
                  </div>
                )}
                {results.professors.length > 0 && (
                  <div>
                    <p className="px-4 py-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Professors</p>
                    {results.professors.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => goTo(`/colleges/${p.college_id}`)}
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-accent"
                      >
                        <User className="h-4 w-4 text-muted-foreground shrink-0" />
                        <div className="min-w-0">
                          <p className="font-medium truncate">{p.name}</p>
                          {p.department && <p className="text-xs text-muted-foreground">{p.department}</p>}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
