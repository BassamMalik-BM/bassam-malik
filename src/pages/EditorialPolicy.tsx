import AnimatedPage from "../components/AnimatedPage";
import SEO from "../components/SEO";

export default function EditorialPolicy() {
  return (
    <AnimatedPage>
      <SEO
        title="Editorial Policy | Bassam Malik"
        description="Learn how content is researched, written, reviewed, and updated on Bassam Malik."
        path="/editorial-policy"
      />

      <section className="section-padding">
        <div className="container-page max-w-4xl">
          {/* HERO */}
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Editorial Policy
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              How content is created on Bassam Malik
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              This editorial policy explains how educational content is
              researched, written, reviewed, and updated to maintain accuracy,
              clarity, and beginner safety.
            </p>
          </div>

          {/* CONTENT */}
          <div className="premium-card p-8 sm:p-10 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Our mission
              </h2>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Bassam Malik exists to make crypto education easier for
                beginners. The goal is to simplify complex topics into clear,
                practical, and beginner-friendly lessons without hype or
                unrealistic promises.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                How content is researched
              </h2>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Every article, lesson, and guide is researched using trusted
                industry sources before publication. This includes official
                documentation, educational platforms, market data providers, and
                recognized crypto research sources.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Accuracy and review
              </h2>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Content is reviewed before publishing to ensure accuracy,
                clarity, and consistency. When market structures or industry
                standards change, content may be updated to reflect newer
                information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Beginner-first approach
              </h2>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Content is written for beginners. This means avoiding
                unnecessary complexity, reducing jargon where possible, and
                focusing on understanding before action.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                No hype policy
              </h2>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Bassam Malik does not publish content designed to create fear,
                urgency, or unrealistic expectations. Educational content is
                created with a focus on discipline, patience, and responsible
                decision-making.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Independence and transparency
              </h2>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Educational content is created independently. Any future
                partnerships, sponsorships, or affiliate relationships will be
                clearly disclosed for transparency.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Risk disclaimer
              </h2>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                All content on Bassam Malik is educational only and should not
                be considered financial advice. Readers should always do their
                own research and make responsible decisions based on their own
                financial situation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}