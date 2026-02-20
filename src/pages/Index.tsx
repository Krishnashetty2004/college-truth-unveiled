import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Divider = () => (
  <div className="my-16 flex items-center justify-center gap-4">
    <div className="h-px w-12 bg-border" />
    <span className="text-2xl">✦</span>
    <div className="h-px w-12 bg-border" />
  </div>
);

const Index = () => {
  return (
    <>
      <SEO
        title="Anonymous College Reviews & Jobs for Freshers"
        description="India's first anonymous college review platform. 200+ colleges rated across 12 categories. 2,700+ jobs & internships for freshers. Proof-based reviews by real students."
        url="/"
      />

      <article className="mx-auto max-w-2xl px-6 py-20 md:py-28">

        {/* Hero */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0}
          className="text-center"
        >
          <p className="text-sm tracking-wide text-muted-foreground">
            by students, for students
          </p>
          <h1 className="mt-6 font-display text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Real talk about<br />
            <em>your college.</em>
          </h1>
          <p className="mt-6 text-lg text-foreground/80">
            No BS. No paid rankings. Just honest reviews from people who actually lived it.
          </p>
        </motion.header>

        <Divider />

        {/* The Problem */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
        >
          <h2 className="font-display text-2xl md:text-3xl">
            Bro, we've all been there.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Remember when you were choosing colleges? The brochures looked amazing.
            <em> "World-class faculty. 100% placements. State-of-the-art infrastructure."</em>
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            Then you joined and realized the WiFi doesn't work, the mess food is
            basically a survival test, and that "placement cell" is one guy with
            an Excel sheet who's never online.
          </p>

          <blockquote className="mt-8 border-l-4 border-foreground/20 pl-6 italic text-foreground/70">
            "Bhai kash kisi ne pehle bataya hota..."
          </blockquote>
        </motion.section>

        <Divider />

        {/* What We Do */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
        >
          <h2 className="font-display text-2xl md:text-3xl">
            That's why we built this.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            <strong>RateMyCollege</strong> is where you share the real stuff — the things
            colleges don't put in brochures. The hostel that floods every monsoon.
            The professor who changed your life. The canteen uncle who gives extra samosa.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            Your honest review helps the next batch make better choices. It's like
            being the senior you wish you had.
          </p>

          <div className="mt-10 rounded-xl border border-border bg-card/50 p-6">
            <p className="text-center font-display text-xl italic text-foreground/70">
              "We don't take money from colleges.<br />
              Our loyalty is to students. Always."
            </p>
          </div>
        </motion.section>

        <Divider />

        {/* Stats */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { value: "200+", label: "Colleges" },
              { value: "10", label: "Cities" },
              { value: "12", label: "Categories" },
              { value: "100%", label: "Anonymous" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <Divider />

        {/* What We Rate */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
        >
          <h2 className="font-display text-2xl md:text-3xl">
            We rate the stuff that actually matters.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Not just placements and faculty (though yeah, those too). We care about
            the things that make your 4 years bearable — or unbearable.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Placements", "Faculty", "Curriculum", "Hostel", "Food", "WiFi",
              "Infrastructure", "Campus Life", "Safety", "Location", "Admin", "Value for Money"
            ].map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm"
              >
                {cat}
              </span>
            ))}
          </div>

          <blockquote className="mt-8 border-l-4 border-foreground/20 pl-6 italic text-foreground/70">
            "Finally someone asking the real questions — how's the WiFi at 2 AM?" 😂
          </blockquote>
        </motion.section>

        <Divider />

        {/* Jobs Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
        >
          <h2 className="font-display text-2xl md:text-3xl">
            Jobs & internships? We got you.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            We know the struggle. Placement season is chaos. That's why we track
            <strong> 2,700+ opportunities</strong> from companies that actually hire freshers.
            TCS, Infosys, Wipro, Cognizant — all the big ones.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            No consultancy fees. No middlemen. Just direct apply links, updated fast
            so you never miss a deadline.
          </p>

          <div className="mt-8 rounded-xl border border-border bg-card/50 p-6">
            <p className="font-medium">What you get:</p>
            <ul className="mt-3 space-y-2 text-foreground/80">
              <li>✓ Campus drives from top MNCs — updated daily</li>
              <li>✓ Direct apply links — no middlemen</li>
              <li>✓ Fresher-friendly roles — you're not competing with 5-year folks</li>
              <li>✓ Deadline alerts — never miss an application</li>
            </ul>
          </div>

          <blockquote className="mt-8 border-l-4 border-foreground/20 pl-6 italic text-foreground/70">
            "Got my first job through a link I found here. Forever grateful." 🙏
          </blockquote>
        </motion.section>

        <Divider />

        {/* Cities */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
        >
          <h2 className="font-display text-2xl md:text-3xl">
            From Hyderabad to Delhi, we're everywhere.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            200+ colleges across India's biggest education hubs. Find your city,
            find the truth.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Hyderabad", "Bangalore", "Delhi-NCR", "Chennai", "Mumbai",
              "Pune", "Kolkata", "Vizag", "Ahmedabad", "Jaipur"
            ].map((city) => (
              <Link
                key={city}
                to={`/colleges?city=${encodeURIComponent(city)}`}
                className="group inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-sm transition-all hover:bg-foreground hover:text-background"
              >
                {city}
                <ChevronRight className="h-3 w-3 opacity-50 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </motion.section>

        <Divider />

        {/* Brotherhood CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
          className="text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl">
            Help a junior out.<br />
            <em>Write your review.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-foreground/80">
            Think about it — if someone had told you the truth before you joined,
            would you have made a different choice?
          </p>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-foreground/80">
            Be that someone for the next batch. Share your story. It takes 2 minutes.
          </p>

          <div className="mt-10">
            <Link to="/auth">
              <Button
                size="lg"
                className="group gap-3 rounded-full bg-foreground px-8 py-6 text-base font-medium text-background shadow-lg transition-all hover:bg-foreground/90 hover:shadow-xl"
              >
                Sign in with Google
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Free forever. 100% anonymous. No spam, promise.
            </p>
          </div>

          <blockquote className="mx-auto mt-12 max-w-md border-l-4 border-foreground/20 pl-6 text-left italic text-foreground/70">
            "Wrote my first review yesterday. Felt good knowing some random junior
            won't make the same mistake I did."
          </blockquote>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
          className="mt-20 border-t border-border pt-12 text-center"
        >
          <p className="font-display text-xl italic text-foreground/60">
            Built by students who wished this existed when they were choosing colleges.
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            Made with ❤️ by{" "}
            <a
              href="https://www.plutas.in/landing.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Plutas Labs
            </a>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} RateMyCollege
          </p>
        </motion.footer>

        {/* Quick Links */}
        <nav className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
          <Link to="/colleges" className="text-foreground/60 hover:text-foreground transition-colors">
            Colleges
          </Link>
          <Link to="/campus-drives" className="text-foreground/60 hover:text-foreground transition-colors">
            Campus Drives
          </Link>
          <Link to="/opportunities" className="text-foreground/60 hover:text-foreground transition-colors">
            Jobs
          </Link>
          <Link to="/rankings" className="text-foreground/60 hover:text-foreground transition-colors">
            Rankings
          </Link>
          <Link to="/stories" className="text-foreground/60 hover:text-foreground transition-colors">
            Stories
          </Link>
          <Link to="/terms" className="text-foreground/60 hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link to="/privacy" className="text-foreground/60 hover:text-foreground transition-colors">
            Privacy
          </Link>
        </nav>
      </article>
    </>
  );
};

export default Index;
