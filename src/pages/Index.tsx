import { ChevronRight, Shield, Eye, TrendingUp, Users, Search, GraduationCap, MessageSquare, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const stats = [
  { label: "Colleges Ranked", value: "200+" },
  { label: "Cities Covered", value: "10" },
  { label: "Rating Categories", value: "12" },
  { label: "100% Anonymous", value: "Always" },
];

const categories = [
  "Placements", "Faculty", "Curriculum", "Hostel", "Food", "WiFi",
  "Infrastructure", "Campus Life", "Safety", "Location", "Admin", "Value for Money",
];

const features = [
  {
    icon: Shield,
    title: "Anonymous & Safe",
    desc: "Google sign-in, anonymous alias. Your identity is never exposed.",
  },
  {
    icon: Eye,
    title: "Proof-Based Reviews",
    desc: "Attach photos of hostels, food, classrooms. Real proof, not promises.",
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Rankings",
    desc: "AI detects fake reviews, generates trust-weighted scores.",
  },
  {
    icon: Users,
    title: "Student-First. Always.",
    desc: "We never take money from colleges. Our loyalty is to students.",
  },
];

const cities = [
  "Hyderabad", "Bangalore", "Delhi-NCR", "Chennai", "Mumbai",
  "Pune", "Kolkata", "Vizag", "Ahmedabad", "Jaipur",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pl-14">
      <Navbar />

      {/* Hero — Terrain-inspired centered minimal */}
      <section className="flex min-h-screen flex-col items-center justify-center px-4">
        <div className="max-w-[600px] text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="font-display text-3xl leading-snug tracking-tight md:text-4xl lg:text-[2.75rem]"
          >
            RateMyCollege is India's first anonymous, proof-based college review platform.
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="mt-10"
          >
            <Link to="/colleges">
              <Button
                variant="outline"
                className="group gap-3 rounded-lg border-border bg-card px-6 py-3 text-sm font-medium shadow-card transition-all hover:shadow-elevated"
              >
                Explore Colleges
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats — minimal row */}
      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-display text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 12 Categories */}
      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-center text-2xl md:text-3xl">
            Rate Across 12 Categories
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm text-muted-foreground">
            From placements to WiFi speed, hostel quality to canteen food — every detail matters.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat, i) => (
              <motion.span
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                viewport={{ once: true }}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs font-medium transition-colors hover:bg-accent"
              >
                {cat}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-center text-2xl md:text-3xl">
            Why Students Trust Us
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card">
                  <f.icon className="h-4 w-4 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="border-t border-border px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl md:text-3xl">
            10 Major Cities
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            200+ colleges across India's biggest education hubs.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {cities.map((city) => (
              <Link
                key={city}
                to={`/colleges?city=${encodeURIComponent(city)}`}
                className="group flex items-center gap-1 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium transition-all hover:shadow-elevated"
              >
                {city}
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-4 py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-2xl md:text-3xl">
            Your review could save someone from a wrong decision.
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm text-muted-foreground">
            Every honest review helps the next batch of students make better choices.
          </p>
          <div className="mt-8">
            <Link to="/colleges">
              <Button
                variant="outline"
                className="group gap-3 rounded-lg border-border bg-card px-6 py-3 text-sm font-medium shadow-card transition-all hover:shadow-elevated"
              >
                Write a Review — It's Anonymous
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <span className="font-display text-lg">RateMyCollege</span>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                India's first anonymous, AI-verified college review platform.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Explore</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link to="/colleges" className="text-foreground/70 hover:text-foreground transition-colors">Colleges</Link></li>
                <li><Link to="/rankings" className="text-foreground/70 hover:text-foreground transition-colors">Rankings</Link></li>
                <li><Link to="/compare" className="text-foreground/70 hover:text-foreground transition-colors">Compare</Link></li>
                <li><Link to="/stories" className="text-foreground/70 hover:text-foreground transition-colors">Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Community</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link to="/colleges" className="text-foreground/70 hover:text-foreground transition-colors">Write a Review</Link></li>
                <li><Link to="/stories" className="text-foreground/70 hover:text-foreground transition-colors">Campus Stories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Legal</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link to="/terms" className="text-foreground/70 hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link to="/privacy" className="text-foreground/70 hover:text-foreground transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} RateMyCollege. We never take money from colleges.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
