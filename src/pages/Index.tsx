import { ChevronRight, Star, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="Write a Review → Get Access to 2,700+ Jobs"
        description="Rate your college anonymously. Get instant access to 2,700+ fresher jobs, internships & campus drives from TCS, Infosys, Wipro & more."
        url="/"
      />

      <div className="min-h-screen flex flex-col">
        {/* Hero - Above the fold */}
        <main className="flex-1 flex items-center justify-center px-6 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8">
                <Briefcase className="h-4 w-4" />
                2,700+ jobs waiting for you
              </div>

              {/* Main headline */}
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
                Write a college review.
                <br />
                <span className="text-primary">Get access to jobs.</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-lg mx-auto">
                Rate your college anonymously. Unlock 2,700+ fresher jobs, internships & campus placement drives.
              </p>

              {/* CTA */}
              <div className="mt-10">
                <Link to="/auth">
                  <Button
                    size="lg"
                    className="gap-2 rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Get Started — It's Free
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <p className="mt-3 text-sm text-muted-foreground">
                  Takes 2 minutes · 100% anonymous
                </p>
              </div>
            </motion.div>

            {/* How it works */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
            >
              <div className="rounded-xl border border-border bg-card/50 p-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold mb-4">
                  1
                </div>
                <h3 className="font-semibold text-lg">Sign in</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Quick Google sign-in. Your identity stays hidden.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card/50 p-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold mb-4">
                  2
                </div>
                <h3 className="font-semibold text-lg">Rate your college</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share honest review. Help juniors make better choices.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card/50 p-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold mb-4">
                  3
                </div>
                <h3 className="font-semibold text-lg">Access jobs</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Browse 2,700+ fresher jobs & apply directly.
                </p>
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                200+ colleges
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                TCS, Infosys, Wipro & more
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                No paid rankings
              </div>
            </motion.div>
          </div>
        </main>

        {/* Minimal footer */}
        <footer className="border-t border-border py-6 px-6">
          <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} RateMyCollege by{" "}
              <a href="https://plutas.in/landing.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                Plutas Labs
              </a>
            </p>
            <div className="flex items-center gap-4">
              <Link to="/terms" className="hover:text-foreground">Terms</Link>
              <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
              <a
                href="https://wa.me/917780185418?text=Hi%20Plutas%20Labs!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-400"
              >
                Help
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
