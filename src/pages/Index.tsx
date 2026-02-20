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

// Decorative divider SVG
const Divider = () => (
  <svg
    className="mx-auto my-16 h-8 w-8 text-foreground/20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    <path d="M12 2L12 22M2 12L22 12M4 4L20 20M20 4L4 20" />
  </svg>
);

const Index = () => {
  return (
    <>
      <SEO
        title="Anonymous College Reviews & Jobs for Freshers"
        description="India's first anonymous college review platform. 200+ colleges rated across 12 categories. 2,700+ jobs & internships for freshers. Proof-based reviews by real students."
        url="/"
      />

      {/* Letter-style content */}
      <article className="mx-auto max-w-2xl px-6 py-24 md:py-32">

        {/* Opening */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={0}
          className="text-center"
        >
          <p className="text-sm tracking-widest text-muted-foreground uppercase">
            A Letter to Students
          </p>
          <h1 className="mt-8 font-display text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
            The Truth About<br />
            <em>Your College</em>
          </h1>
        </motion.header>

        <Divider />

        {/* Section 1 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
        >
          <h2 className="font-display text-2xl italic md:text-3xl">
            The Promise They Made
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            Every college brochure tells the same story. <em>World-class faculty. Industry connections.
            100% placements.</em> The photographs show pristine labs and smiling students.
            The numbers promise a future worth the fee.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            But somewhere between the glossy pages and the reality of cold hostel food at 7 AM,
            the truth gets lost. Students discover too late that the "placement cell" is one
            overworked coordinator with an Excel sheet.
          </p>
        </motion.section>

        <Divider />

        {/* Section 2 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
        >
          <h2 className="font-display text-2xl italic md:text-3xl">
            We Built Something Different
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            RateMyCollege exists because we believe students deserve the truth before
            they commit four years and lakhs of rupees to an institution. Not marketing.
            Not paid rankings. Just honest accounts from people who lived it.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            We don't take money from colleges. Our loyalty is to students, not institutions.
            Every review is anonymous, verified, and comes from real students with real experiences.
          </p>

          {/* Stats inline */}
          <div className="mt-10 grid grid-cols-2 gap-6 border-y border-border py-8 md:grid-cols-4">
            {[
              { value: "200+", label: "Colleges" },
              { value: "10", label: "Cities" },
              { value: "12", label: "Categories" },
              { value: "100%", label: "Anonymous" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl md:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <Divider />

        {/* Section 3 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
        >
          <h2 className="font-display text-2xl italic md:text-3xl">
            What We Rate
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            We go beyond the obvious. Yes, we track placements and faculty quality.
            But we also care about the things that shape your daily life —
            the WiFi that cuts out during online exams, the hostel warden who
            locks gates at 8 PM, the canteen food that tests your immunity.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Placements", "Faculty", "Curriculum", "Hostel", "Food", "WiFi",
              "Infrastructure", "Campus Life", "Safety", "Location", "Admin", "Value for Money"
            ].map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-border px-4 py-2 text-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </motion.section>

        <Divider />

        {/* Section 4 - Jobs */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
        >
          <h2 className="font-display text-2xl italic md:text-3xl">
            Beyond Reviews
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            College is just the beginning. We've curated <strong>2,700+ jobs and internships</strong> from
            companies that actually hire freshers. No middlemen skimming your first salary.
            No consultancies charging for "placement assistance." Just direct apply links
            to real opportunities.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            TCS, Infosys, Wipro, Cognizant, and dozens more — we track their campus drives
            so you never miss a deadline.
          </p>
        </motion.section>

        <Divider />

        {/* Section 5 - Cities */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
        >
          <h2 className="font-display text-2xl italic md:text-3xl">
            Across India
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            From the tech corridors of Bangalore to the engineering hubs of Hyderabad,
            from the campuses of Delhi-NCR to the institutes of Chennai — we're mapping
            the truth about colleges in every major city.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Hyderabad", "Bangalore", "Delhi-NCR", "Chennai", "Mumbai",
              "Pune", "Kolkata", "Vizag", "Ahmedabad", "Jaipur"
            ].map((city) => (
              <Link
                key={city}
                to={`/colleges?city=${encodeURIComponent(city)}`}
                className="group inline-flex items-center gap-1 text-foreground/70 underline underline-offset-4 decoration-foreground/30 hover:text-foreground hover:decoration-foreground transition-colors"
              >
                {city}
                <ChevronRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </div>
        </motion.section>

        <Divider />

        {/* CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={1}
          className="text-center"
        >
          <h2 className="font-display text-2xl md:text-3xl">
            Your review could save someone<br />
            <em>from a wrong decision.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-foreground/80">
            Every honest review helps the next batch of students make better choices.
            Sign in anonymously. Share your truth.
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
              Free access to all features
            </p>
          </div>
        </motion.section>

        {/* Signature */}
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
          className="mt-24 border-t border-border pt-12 text-center"
        >
          <p className="font-display text-xl italic text-foreground/60">
            "We don't take money from colleges.<br />
            Our loyalty is to students, not institutions."
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            Built by{" "}
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
        <nav className="mt-16 flex flex-wrap justify-center gap-6 text-sm">
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
