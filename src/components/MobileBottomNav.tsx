import { useState, useEffect } from "react";
import { Home, GraduationCap, BookOpen, User, Menu, BarChart3, GitCompare, Search, LogIn, Briefcase } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { supabase } from "@/integrations/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import SearchDialog from "@/components/SearchDialog";

const MobileBottomNav = () => {
  const location = useLocation();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const mainNavItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/colleges", icon: GraduationCap, label: "Colleges" },
    { to: "/stories", icon: BookOpen, label: "Stories" },
    { to: user ? "/profile" : "/auth", icon: user ? User : LogIn, label: user ? "Profile" : "Sign In" },
  ];

  const moreNavItems = [
    { to: "/opportunities", icon: Briefcase, label: "Jobs & Internships" },
    { to: "/rankings", icon: BarChart3, label: "Rankings" },
    { to: "/compare", icon: GitCompare, label: "Compare" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-sm"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex h-16 items-center justify-around px-2">
        {mainNavItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex min-w-[64px] flex-col items-center justify-center gap-1 rounded-lg px-3 py-2 transition-colors ${
              isActive(item.to)
                ? "text-primary"
                : "text-muted-foreground"
            }`}
          >
            <item.icon className="h-5 w-5" strokeWidth={isActive(item.to) ? 2 : 1.5} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        ))}

        {/* More button with Sheet */}
        <Sheet open={isMoreOpen} onOpenChange={setIsMoreOpen}>
          <SheetTrigger asChild>
            <button
              className={`flex min-w-[64px] flex-col items-center justify-center gap-1 rounded-lg px-3 py-2 transition-colors ${
                isMoreOpen ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
              <span className="text-[10px] font-medium">More</span>
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-2xl pb-8">
            <SheetHeader className="pb-4">
              <SheetTitle>More Options</SheetTitle>
            </SheetHeader>
            <div className="grid gap-2">
              {/* Search */}
              <div className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted transition-colors">
                <Search className="h-5 w-5 text-muted-foreground" />
                <SearchDialog
                  iconOnly={false}
                  triggerClassName="flex-1 text-left text-sm font-medium"
                  triggerLabel="Search colleges, stories..."
                />
              </div>

              {/* More nav items */}
              {moreNavItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMoreOpen(false)}
                  className={`flex items-center gap-3 rounded-lg p-3 transition-colors ${
                    isActive(item.to)
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  }`}
                >
                  <item.icon className="h-5 w-5" strokeWidth={1.5} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};

export default MobileBottomNav;
