import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Lock, Users, Briefcase, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useHasWrittenReview } from "@/hooks/useHasWrittenReview";

interface BrotherhoodGateProps {
  children: React.ReactNode;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// Decorative divider
const Divider = () => (
  <svg
    className="mx-auto my-12 h-6 w-6 text-foreground/20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export function BrotherhoodGate({ children }: BrotherhoodGateProps) {
  const { hasReview, isLoading } = useHasWrittenReview();

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-foreground/20 border-t-foreground" />
          <p className="mt-4 text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // If user has written a review, show the content
  if (hasReview) {
    return <>{children}</>;
  }

  // Otherwise, show the brotherhood gate
  return (
    <article className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center"
      >
        {/* Lock icon */}
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-foreground/10 bg-card">
          <Lock className="h-7 w-7 text-foreground/60" strokeWidth={1.5} />
        </div>

        <p className="text-sm tracking-widest text-muted-foreground uppercase">
          The Brotherhood
        </p>

        <h1 className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
          One Review Unlocks<br />
          <em>Everything</em>
        </h1>
      </motion.div>

      <Divider />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p className="text-lg leading-relaxed text-foreground/80">
          You're about to access something valuable — <strong>2,700+ jobs and internships</strong> that
          most students never find. Campus drives from TCS, Infosys, Wipro, Cognizant, and dozens more.
          Direct apply links. No middlemen.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
          But first, we ask one thing.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-foreground/80">
          <em>Write an honest review of your college.</em> Share the truth that helped you — or
          would have helped you — make a better decision. The WiFi that never works. The professor
          who changed your life. The hostel food that tests your will.
        </p>
      </motion.div>

      <Divider />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-center"
      >
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-foreground/10 bg-card">
          <Users className="h-5 w-5 text-foreground/60" strokeWidth={1.5} />
        </div>

        <p className="font-display text-xl italic text-foreground/70">
          "This is how we build something real.<br />
          Not by taking, but by giving first."
        </p>

        <p className="mt-6 text-base leading-relaxed text-foreground/80">
          Your review helps the next student. Their review helped you find this page.
          We call it <strong>the Brotherhood</strong>.
        </p>
      </motion.div>

      <Divider />

      {/* What they'll unlock */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="rounded-xl border border-border bg-card/50 p-6"
      >
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
          What You'll Unlock
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
              <Briefcase className="h-4 w-4 text-foreground/70" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-medium">2,700+ Jobs & Internships</p>
              <p className="text-sm text-muted-foreground">Direct apply links, no middlemen</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
              <Building2 className="h-4 w-4 text-foreground/70" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-medium">Campus Drives 2026</p>
              <p className="text-sm text-muted-foreground">TCS, Infosys, Wipro & more</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-12 text-center"
      >
        <Link to="/colleges">
          <Button
            size="lg"
            className="group gap-3 rounded-full bg-foreground px-8 py-6 text-base font-medium text-background shadow-lg transition-all hover:bg-foreground/90 hover:shadow-xl"
          >
            Write My Review
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </Link>
        <p className="mt-4 text-sm text-muted-foreground">
          Find your college and share your experience
        </p>
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-16 text-center text-sm text-muted-foreground"
      >
        Already wrote a review? It might be under review by our team.<br />
        Reviews are typically approved within 24 hours.
      </motion.p>
    </article>
  );
}
