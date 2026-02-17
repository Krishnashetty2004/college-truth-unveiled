import { Star, Shield, Eye, TrendingUp, Users, Search, ChevronRight, GraduationCap, MessageSquare, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const stats = [
  { label: "Colleges Ranked", value: "200+", icon: GraduationCap },
  { label: "Cities Covered", value: "10", icon: TrendingUp },
  { label: "Rating Categories", value: "12", icon: BarChart3 },
  { label: "100% Anonymous", value: "Always", icon: Shield },
];

const categories = [
  "Placements", "Faculty", "Curriculum", "Hostel", "Food", "WiFi",
  "Infrastructure", "Campus Life", "Safety", "Location", "Admin", "Value for Money",
];

const features = [
  {
    icon: Shield,
    title: "Anonymous & Safe",
    desc: "Google sign-in, anonymous alias. Your identity is never exposed. Rate freely without fear.",
  },
  {
    icon: Eye,
    title: "Proof-Based Reviews",
    desc: "Attach photos of hostels, food, classrooms. Real proof, not empty promises.",
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Rankings",
    desc: "OpenAI detects fake reviews, generates trust-weighted scores. No college can game the system.",
  },
  {
    icon: Users,
    title: "Student-First. Always.",
    desc: "We never take money from colleges. Ever. Our only loyalty is to students seeking the truth.",
  },
];

const cities = [
  "Hyderabad", "Bangalore", "Delhi-NCR", "Chennai", "Mumbai",
  "Pune", "Kolkata", "Vizag", "Ahmedabad", "Jaipur",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
              <Star className="h-5 w-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold">RateMyCollege</span>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <Link to="/colleges" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Colleges
            </Link>
            <Link to="/rankings" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Rankings
            </Link>
            <Link to="/compare" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Compare
            </Link>
            <Link to="/stories" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Stories
            </Link>
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero px-4 py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(245,58%,51%,0.3),_transparent_50%)]" />
        <div className="container relative mx-auto max-w-5xl text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm"
          >
            <Shield className="h-4 w-4" />
            India's First Anonymous College Review Platform
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            The Truth About
            <br />
            <span className="text-secondary">
              Your College
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl"
          >
            Anonymous, proof-based, AI-verified reviews across 12 categories.
            No college can pay to hide the truth here.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link to="/colleges">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-base font-semibold px-8">
                <Search className="h-5 w-5" />
                Find Your College
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2 text-base">
                <MessageSquare className="h-5 w-5" />
                Write a Review
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
            className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-secondary" />
                <p className="font-display text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 12 Categories */}
      <section className="border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-display text-center text-3xl font-bold md:text-4xl">
            Rate Across <span className="text-gradient-primary">12 Categories</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            From placements to WiFi speed, hostel quality to canteen food — every detail matters.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <motion.span
                key={cat}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-card transition-colors hover:border-primary hover:bg-accent"
              >
                {cat}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-display text-center text-3xl font-bold md:text-4xl">
            Why Students <span className="text-gradient-primary">Trust Us</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-elevated hover:border-primary/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="border-t border-border bg-muted/50 px-4 py-20">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Covering <span className="text-gradient-primary">10 Major Cities</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            200+ colleges across India's biggest education hubs.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <Link
                key={city}
                to={`/colleges?city=${encodeURIComponent(city)}`}
                className="group flex items-center gap-1 rounded-lg border border-border bg-card px-5 py-3 font-medium shadow-card transition-all hover:border-primary hover:shadow-elevated"
              >
                {city}
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-hero px-4 py-20 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Your Review Could Save Someone
            <br />
            <span className="text-secondary">From a Wrong Decision</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Every honest review helps the next batch of students make better choices. 
            Share your experience anonymously.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link to="/auth">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8">
                Write a Review — It's Anonymous
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-12">
        <div className="container mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <span className="font-display text-lg font-bold">RateMyCollege</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                India's first anonymous, AI-verified college review platform.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold">Explore</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><Link to="/colleges" className="hover:text-foreground">Colleges</Link></li>
                <li><Link to="/rankings" className="hover:text-foreground">Rankings</Link></li>
                <li><Link to="/compare" className="hover:text-foreground">Compare</Link></li>
                <li><Link to="/stories" className="hover:text-foreground">Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold">Community</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><Link to="/auth" className="hover:text-foreground">Write a Review</Link></li>
                <li><Link to="/professors" className="hover:text-foreground">Professor Reviews</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold">Legal</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link to="/content-policy" className="hover:text-foreground">Content Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} RateMyCollege. We never take money from colleges.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
