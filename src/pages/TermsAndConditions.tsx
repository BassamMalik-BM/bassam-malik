import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-6xl"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
        Terms & Conditions
      </p>

      <h1 className="text-4xl font-bold text-slate-950 dark:text-white sm:text-5xl">
        Terms & Conditions
      </h1>

      <p className="mt-4 text-slate-600 dark:text-slate-300">
        Last updated: 2026
      </p>

      <div className="premium-card mt-8 space-y-8 leading-8 text-slate-600 dark:text-slate-300">
        <Section title="1. Acceptance of terms">
          By accessing or using Bassam Malik Education, you agree to be bound
          by these Terms & Conditions and any policies referenced on this
          website. If you do not agree with these terms, you should stop using
          the website. These terms apply to visitors, readers, and users of the
          educational content, tools, calculators, directories, and other
          resources available on the site.
        </Section>

        <Section title="2. Educational content only">
          All content published on this website is provided for educational and
          informational purposes only. Articles, guides, calculators, tools,
          exchange comparisons, book recommendations, analysis resources, and
          other materials are designed to help users understand cryptocurrency
          and related topics. Nothing on this website should be considered
          financial, investment, trading, legal, tax, accounting, or
          professional advice.
        </Section>

        <Section title="3. No guaranteed results">
          Cryptocurrency and financial markets involve significant risk and can
          be highly volatile. Bassam Malik Education does not guarantee profits,
          investment returns, trading performance, price movements, or any
          particular outcome. Historical performance, examples, calculations,
          scores, and educational illustrations should not be interpreted as a
          promise of future results.
        </Section>

        <Section title="4. User responsibility">
          You are responsible for your own financial decisions, research, risk
          management, account security, and use of third-party platforms.
          Before making any investment or trading decision, you should evaluate
          your personal financial circumstances, experience, risk tolerance,
          and objectives. Where appropriate, you should seek advice from a
          qualified professional.
        </Section>

        <Section title="5. Website tools and calculators">
          Calculators, checklists, planners, educational tools, and similar
          resources on this website are provided for learning and general
          planning purposes. Results are estimates and may not reflect real
          market prices, trading fees, spreads, slippage, liquidation rules,
          taxes, exchange-specific calculations, funding costs, or other
          factors. You should verify important calculations independently
          before relying on them.
        </Section>

        <Section title="6. Directory scores and recommendations">
          Exchange scores, book ratings, analysis website reviews, and other
          directory information reflect editorial assessments based on the
          criteria described on the website. These scores and recommendations
          may change over time as platforms, products, pricing, security
          practices, or available features change. A high score or positive
          review does not guarantee that a product or service is suitable for
          every user.
        </Section>

        <Section title="7. Affiliate links and compensation">
          Some links on Bassam Malik Education may be affiliate or referral
          links. If you use an eligible link to create an account or make a
          purchase, the website may receive compensation at no additional cost
          to you. Affiliate relationships do not remove your responsibility to
          independently research a product, service, exchange, book, or
          platform before using it.
        </Section>

        <Section title="8. External websites and services">
          This website may contain links to exchanges, analytics platforms,
          booksellers, social media services, and other third-party websites.
          These services are operated independently and may have their own
          terms, fees, privacy policies, availability rules, and security
          practices. Bassam Malik Education is not responsible for third-party
          content, services, losses, outages, or business practices.
        </Section>

        <Section title="9. Accuracy and availability">
          Reasonable efforts are made to keep information clear and useful, but
          cryptocurrency markets, regulations, fees, platform features, and
          other information can change quickly. We do not guarantee that every
          page will always be complete, current, error-free, or available
          without interruption.
        </Section>

        <Section title="10. Intellectual property">
          Unless otherwise stated, original written content, website design
          elements, educational materials, graphics, and other original
          resources published on Bassam Malik Education are protected by
          applicable intellectual property laws. Content may not be copied,
          republished, sold, or redistributed in a misleading or unauthorized
          manner.
        </Section>

        <Section title="11. Changes to these terms">
          These Terms & Conditions may be revised as the website grows, new
          features are introduced, or legal and operational requirements
          change. The updated version will be published on this page. Continued
          use of the website after an update means you accept the revised
          terms.
        </Section>

        <Section title="12. Contact">
          If you have questions about these Terms & Conditions, website
          content, or the use of any resource provided on Bassam Malik
          Education, you may contact us through the Contact page.
        </Section>
      </div>
    </motion.article>
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
      <h2 className="text-xl font-bold text-slate-950 dark:text-white">
        {title}
      </h2>

      <p className="mt-2">{children}</p>
    </section>
  );
}