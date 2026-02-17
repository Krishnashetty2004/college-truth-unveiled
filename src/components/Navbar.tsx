import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
            <Star className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-xl font-bold">RateMyCollege</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <NavLink
            to="/colleges"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeClassName="text-foreground"
          >
            Colleges
          </NavLink>
          <NavLink
            to="/rankings"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeClassName="text-foreground"
          >
            Rankings
          </NavLink>
          <NavLink
            to="/compare"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeClassName="text-foreground"
          >
            Compare
          </NavLink>
          <NavLink
            to="/stories"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeClassName="text-foreground"
          >
            Stories
          </NavLink>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/auth">
            <Button variant="outline" size="sm">Sign In</Button>
          </Link>
          <Link to="/colleges">
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
              Browse Colleges
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
