import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background pl-14">
      <Navbar />
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <h1 className="font-display text-3xl font-bold">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: January 2025</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground/80">
          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By accessing or using RateMyCollege ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">2. Anonymity & Identity</h2>
            <p>
              RateMyCollege uses Google Sign-In solely to prevent spam and duplicate reviews. Upon registration, you are assigned a randomly generated anonymous alias (e.g., "Swift Eagle #4201"). Your real name, email address, and identity are never displayed publicly on the Platform.
            </p>
            <p>
              We do not sell, share, or reveal your identity to colleges, employers, or any third parties. Your anonymity is a core commitment of this platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">3. User Content</h2>
            <p>
              You are solely responsible for the content you post, including reviews, stories, and comments. By submitting content, you grant RateMyCollege a non-exclusive, royalty-free license to display and distribute your content on the Platform.
            </p>
            <p>You agree NOT to post content that:</p>
            <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
              <li>Contains false factual claims about specific individuals</li>
              <li>Is defamatory, harassing, or constitutes hate speech</li>
              <li>Contains personal identifying information of other individuals</li>
              <li>Is spam, promotional content, or advertising</li>
              <li>Violates any applicable Indian law</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">4. Content Moderation</h2>
            <p>
              All user-submitted content is reviewed by our AI moderation system before publication. Content flagged as potentially harmful, fake, or defamatory may be held for manual review or rejected. We reserve the right to remove any content that violates these Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">5. Independence from Colleges</h2>
            <p>
              RateMyCollege operates independently. We do not accept payment from educational institutions for favorable reviews or rankings. Our ratings and scores are derived entirely from student-submitted reviews.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">6. Disclaimer of Warranties</h2>
            <p>
              The Platform is provided "as is." We do not guarantee the accuracy, completeness, or usefulness of any content posted by users. Reviews reflect the personal opinions of individual students and should not be the sole basis for any academic or career decision.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms. Users who repeatedly post fake, defamatory, or harmful content will be permanently banned from the Platform.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">9. Contact</h2>
            <p>
              For questions about these Terms, please contact us at{" "}
              <a href="mailto:legal@ratemycollege.in" className="text-primary hover:underline">
                legal@ratemycollege.in
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
          {" · "}
          <Link to="/" className="hover:text-foreground">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;
