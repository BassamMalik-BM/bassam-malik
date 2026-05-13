import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <main className="section-padding">
      <div className="container-page">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            Terms & Conditions
          </p>

          <h1 className="text-4xl font-bold text-slate-950 dark:text-white">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Last updated: 2026
          </p>

          <div className="premium-card mt-8 space-y-7 leading-7 text-slate-600 dark:text-slate-300">
            <Section title="1. Acceptance of terms">
              By using Bassam Malik Education, you agree to these Terms &
              Conditions. If you do not agree, please do not use this website.
            </Section>

            <Section title="2. Educational content only">
              All content on this website is provided for educational and
              informational purposes only. Nothing on this website should be
              considered financial, investment, legal, or tax advice.
            </Section>

            <Section title="3. No guaranteed results">
              Crypto markets are volatile. This website does not promise profits,
              guaranteed outcomes, or specific trading results. You are responsible
              for your own decisions.
            </Section>

            <Section title="4. User responsibility">
              You should do your own research and consider your personal financial
              situation before making any trading decision.
            </Section>

            <Section title="5. Website tools">
              Calculators and resources on this website are estimates for learning
              and planning only. Results may not reflect real market conditions,
              fees, slippage, taxes, or other factors.
            </Section>

            <Section title="6. External links">
              This website may link to third-party websites or platforms. We are not
              responsible for their content, policies, or services.
            </Section>

            <Section title="7. Changes to terms">
              These Terms & Conditions may be updated from time to time. Continued
              use of the website means you accept the updated terms.
            </Section>
          </div>
        </motion.article>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-2 text-xl font-bold text-slate-950 dark:text-white">
        {title}
      </h2>
      <p>{children}</p>
    </section>
  );
}