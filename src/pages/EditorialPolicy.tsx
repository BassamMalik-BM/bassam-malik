import AnimatedPage from "../components/AnimatedPage";
import SEO from "../components/SEO";

export default function EditorialPolicy() {
  return (
    <>
      <SEO
        title="Editorial Policy"
        description="Learn how Bassam Malik researches, writes, reviews, updates, and presents educational cryptocurrency content."
      />

      <AnimatedPage>
        <article className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Editorial Policy
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              How content is created on Bassam Malik
            </h1>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              This editorial policy explains how educational content is
              researched, written, reviewed, updated, and presented to support
              accuracy, clarity, transparency, and responsible learning.
            </p>
          </div>

          {/* Content */}
          <div className="premium-card space-y-10 p-8 sm:p-10">
            <Section title="Our mission">
              Bassam Malik exists to make cryptocurrency and trading education
              easier to understand for beginners. The goal is to simplify
              complex topics into clear, practical, and structured lessons
              without relying on hype, unrealistic promises, or unnecessary
              technical language.
            </Section>

            <Section title="How content is researched">
              Articles, lessons, guides, directory pages, and educational
              resources are researched using relevant and credible sources.
              Depending on the topic, this may include official documentation,
              project websites, exchange documentation, regulatory information,
              market-data providers, established research platforms, and other
              reliable educational sources.
            </Section>

            <Section title="Source selection">
              Preference is given to primary or authoritative sources whenever
              they are available. For technical topics, official documentation
              is generally preferred over secondary summaries. When discussing
              platforms, products, fees, features, or services, information may
              be checked against the provider's own published materials.
            </Section>

            <Section title="Accuracy and review">
              Content is reviewed before publication for factual accuracy,
              clarity, consistency, and readability. Cryptocurrency markets,
              platform features, regulations, fees, and industry practices can
              change quickly, so some pages may be updated when important
              information changes or when newer and more reliable information
              becomes available.
            </Section>

            <Section title="Beginner-first approach">
              Content is written primarily for people who are still learning.
              This means explaining important terms, avoiding unnecessary
              jargon, breaking larger ideas into smaller steps, and focusing on
              understanding before encouraging users to take action.
            </Section>

            <Section title="Educational separation">
              Educational articles are kept separate from recommendation and
              directory content. Learn pages are intended to explain concepts,
              while Discover pages may compare or review exchanges, books,
              analysis websites, and other resources. This separation helps
              readers distinguish education from product or resource
              recommendations.
            </Section>

            <Section title="No hype policy">
              Bassam Malik does not aim to create fear, urgency, FOMO, or
              unrealistic expectations. Content should not suggest guaranteed
              profits, certain price targets, effortless wealth, or risk-free
              trading. The editorial approach favors discipline, patience, risk
              awareness, and responsible decision-making.
            </Section>

            <Section title="Scores and directory reviews">
              Directory scores are based on defined criteria relevant to each
              resource. For example, an exchange may be evaluated based on
              security, fees, liquidity, features, and beginner-friendliness,
              while a book may be evaluated on readability, depth, practical
              value, and suitability for beginners. Scores are editorial
              assessments and may change as products or information change.
            </Section>

            <Section title="Affiliate relationships">
              Some pages may contain affiliate or referral links. When an
              eligible user signs up or makes a purchase through such a link,
              Bassam Malik may receive compensation at no additional cost to
              the user. Affiliate relationships should be disclosed clearly and
              should not change the criteria used to evaluate a resource.
            </Section>

            <Section title="Independence and transparency">
              Educational conclusions, ratings, and recommendations should be
              based on the usefulness and relevance of the resource rather than
              solely on commercial relationships. Sponsored content,
              partnerships, or other material relationships should be clearly
              identified when applicable.
            </Section>

            <Section title="Corrections and updates">
              If an error is identified, reasonable efforts will be made to
              correct it. Articles and directory pages may also be updated to
              reflect changes in technology, platform features, fees, security
              practices, regulations, or other important information.
            </Section>

            <Section title="AI-assisted workflows">
              Technology and AI tools may be used to assist with research,
              drafting, organization, editing, or quality checks. However,
              published material should still be reviewed for clarity,
              accuracy, usefulness, consistency, and alignment with the
              editorial standards of Bassam Malik.
            </Section>

            <Section title="Risk and financial advice">
              All content on Bassam Malik is intended for educational and
              informational purposes only. Nothing published on the website
              should be considered financial, investment, legal, tax, or
              personalized advice. Readers remain responsible for their own
              research and decisions.
            </Section>

            <Section title="Contact and feedback">
              Readers who notice an error, outdated information, unclear
              explanation, or another editorial issue may contact Bassam Malik
              through the Contact page. Constructive feedback may be used to
              improve existing content and future educational resources.
            </Section>
          </div>
        </article>
      </AnimatedPage>
    </>
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
      <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
        {title}
      </h2>

      <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
        {children}
      </p>
    </section>
  );
}