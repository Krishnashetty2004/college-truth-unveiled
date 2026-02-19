import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <h1 className="font-display text-3xl font-bold">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: February 19, 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-foreground/80">
          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">1. Our Privacy Commitment</h2>
            <p>
              RateMyCollege is built on a foundation of student anonymity. We collect the minimum data necessary to operate the platform. We never expose your identity to colleges, employers, or the public.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">2. What We Collect</h2>
            <div className="rounded-lg border border-border overflow-hidden">
            <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="p-3 text-left font-medium">Data</th>
                    <th className="p-3 text-left font-medium">Why</th>
                    <th className="p-3 text-left font-medium">Exposed Publicly?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="p-3">Google Account email</td>
                    <td className="p-3 text-muted-foreground">Authentication, prevent duplicates</td>
                    <td className="p-3 text-destructive font-medium">No</td>
                  </tr>
                  <tr>
                    <td className="p-3">Anonymous alias</td>
                    <td className="p-3 text-muted-foreground">Display on reviews/comments</td>
                    <td className="p-3 text-primary font-medium">Yes (alias only)</td>
                  </tr>
                  <tr>
                    <td className="p-3">College, course, year</td>
                    <td className="p-3 text-muted-foreground">Context for your reviews</td>
                    <td className="p-3 text-destructive font-medium">No</td>
                  </tr>
                  <tr>
                    <td className="p-3">Review/story content</td>
                    <td className="p-3 text-muted-foreground">Platform content</td>
                    <td className="p-3 text-primary font-medium">Yes (anonymous)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">3. Anonymous Aliases</h2>
            <p>
              When you sign in for the first time, our system automatically generates a random alias (e.g., "Bold Fox #7823"). This alias is what other users see on your reviews and comments. Your real name is never used or displayed.
            </p>
            <p>
              The link between your Google email and your anonymous alias exists only in our secure database and is never shared. Even we cannot de-anonymize your contributions in any publicly accessible way.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">4. AI Processing</h2>
            <p>
              All reviews and stories are processed by our AI moderation system to detect spam, fake content, and harmful material. Your content is sent to our AI model for analysis. The AI model does not store your content beyond the immediate processing request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">5. Data Sharing</h2>
            <p>We do not sell your data. We do not share your personal information with:</p>
            <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
              <li>Colleges or educational institutions</li>
              <li>Employers or recruiters</li>
              <li>Advertising networks</li>
              <li>Any third parties for commercial purposes</li>
            </ul>
            <p className="mt-2">
              We may disclose data if required by a valid court order under Indian law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">6. Data Retention</h2>
            <p>
              Your account data is retained as long as your account exists. Published reviews and stories may be retained for platform integrity even after account deletion (as anonymous content without any link to your identity).
            </p>
            <p>
              To request deletion of your account and associated data, email us at{" "}
              <a href="mailto:privacy@ratemycollege.in" className="text-primary hover:underline">
                privacy@ratemycollege.in
              </a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">7. Cookies & Local Storage</h2>
            <p>
              We use browser local storage to maintain your login session. We do not use third-party advertising cookies or tracking pixels.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">8. Security</h2>
            <p>
              We use industry-standard encryption for data in transit (HTTPS) and at rest. Access to the database is restricted to authorized services only. Your authentication is handled by Google's OAuth 2.0 system — we never handle your Google password.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-lg font-semibold text-foreground">9. Contact</h2>
            <p>
              For privacy concerns or data deletion requests:{" "}
              <a href="mailto:privacy@ratemycollege.in" className="text-primary hover:underline">
                privacy@ratemycollege.in
              </a>
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
          {" · "}
          <Link to="/" className="hover:text-foreground">Home</Link>
        </div>
      </div>
    </>
  );
};

export default Privacy;
