import { useEffect, useState } from "react";
import { GraduationCap, BarChart3, GitCompare, BookOpen, LogIn, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import SearchDialog from "@/components/SearchDialog";
import { supabase } from "@/integrations/supabase/client";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import logoImg from "@/assets/logo.jpeg";

const baseNavItems = [
  { to: "/colleges", icon: GraduationCap, label: "Colleges" },
  { to: "/rankings", icon: BarChart3, label: "Rankings" },
  { to: "/compare", icon: GitCompare, label: "Compare" },
  { to: "/stories", icon: BookOpen, label: "Stories" },
];

const Navbar = () => {
  const location = useLocation();
  const [user, setUser] = useState<SupabaseUser | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const authItem = user
    ? { to: "/profile", icon: User, label: "Profile" }
    : { to: "/auth", icon: LogIn, label: "Sign In" };

  const navItems = [...baseNavItems, authItem];

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed left-0 top-0 z-50 flex h-screen w-14 flex-col items-center justify-center gap-3 py-8"
    >
      <Link to="/" title="Home" className="group relative mb-1 flex h-10 w-10 items-center justify-center">
        <img src={logoImg} alt="RateMyCollege" className="h-9 w-9 rounded-lg object-cover" />
        <span className="pointer-events-none absolute left-12 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
          Home
        </span>
      </Link>
      <SearchDialog />
      {navItems.map((item) => {
        const isActive = location.pathname === item.to ||
          (item.to === "/profile" && location.pathname === "/profile");
        return (
          <Link
            key={item.to}
            to={item.to}
            title={item.label}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-foreground/10 text-foreground"
                : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
            }`}
          >
            <item.icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
            <span className="pointer-events-none absolute left-12 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
              {item.label}
            </span>
          </Link>
        );
      })}
    </motion.nav>
  );
};

export default Navbar;
