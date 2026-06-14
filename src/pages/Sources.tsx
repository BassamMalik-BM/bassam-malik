import AnimatedPage from "../components/AnimatedPage";
import Breadcrumbs from "../components/Breadcrumbs";

const sections = [
  {
    title: "Official Sources",
    content:
      "We prefer official project websites, exchange education pages, blockchain documentation, whitepapers, and platform help centers when explaining core crypto concepts.",
  },
  {
    title: "Market Data Platforms",
    content:
      "For market-related education, we may review public data from platforms such as CoinMarketCap, CoinGecko, TradingView, blockchain explorers, and other widely used market research tools.",
  },
  {
    title: "Educational Review",
    content:
      "Blogs and educational content are written by Bassam Malik after reviewing credible sources, public documentation, and beginner-relevant market education material.",
  },
  {
    title: "No Blind Copying",
    content:
      "We do not aim to copy or republish third-party content. Information is reviewed, simplified, and explained in original beginner-friendly language for learning purposes.",
  },
];

export default function Sources() {
  return (
    <AnimatedPage>
      <section className="section-padding">
        <div className="container-page">
          <Breadcrumbs />

          <div className="mx-auto max-w-6xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
              Transparency
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Sources
            </h1>

            <p className="mt-6 max-w-5xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              This page explains how Bassam Malik reviews information before
              publishing beginner-friendly crypto education, guides, and learning
              resources.
            </p>

            <div className="premium-card mt-10 p-8 sm:p-10">
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                How We Review Information
              </h2>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Content on Bassam Malik is written for educational purposes.
                Before publishing, topics are reviewed using credible public
                sources, official documentation, market education resources, and
                commonly referenced crypto data platforms. The goal is to explain
                ideas clearly for beginners, not to provide financial advice.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="premium-card p-8 transition duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    {section.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="premium-card mt-10 p-8">
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                Important Note
              </h3>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Even when information is reviewed carefully, crypto markets can
                change quickly. Readers should always verify details from
                official sources, compare multiple references, and make their own
                responsible decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}