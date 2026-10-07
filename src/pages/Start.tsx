import { Link } from "react-router-dom";
import {
  BookOpen,
  ShieldCheck,
  Wallet,
  BarChart3,
  ArrowRight,
  CircleAlert,
  FileText,
  Calculator,
  ClipboardCheck,
  Search,
  Brain,
} from "lucide-react";

import SEO from "../components/SEO";
import { articles } from "../data/articles";
import { resources } from "../data/resources";

function getArticleLink(slug: string) {
  const article = articles.find((item) => item.slug === slug);

  return article
    ? `/learn/${article.category.slug}/${article.slug}`
    : "/learn";
}

const steps = [
  {
    title: "Understand cryptocurrency and Bitcoin",
    description:
      "Start with what cryptocurrency is, why Bitcoin exists, and how these ideas fit together.",
    icon: BookOpen,
    articleSlug: "what-is-cryptocurrency",
    relatedLabel: "Learn about Bitcoin",
    relatedSlug: "what-is-bitcoin",
  },
  {
    title: "Learn how wallets work",
    description:
      "Understand wallets, public and private keys, and how people access cryptocurrency on a blockchain.",
    icon: Wallet,
    articleSlug: "what-is-a-crypto-wallet",
    relatedLabel: "How crypto wallets work",
    relatedSlug: "how-crypto-wallets-work",
  },
  {
    title: "Build your security knowledge",
    description:
      "Learn about account protection, wallet safety, phishing, and common scams before handling cryptocurrency.",
    icon: ShieldCheck,
    articleSlug: "keeping-crypto-safe",
    relatedLabel: "Common crypto scams",
    relatedSlug: "common-crypto-scams",
  },
  {
    title: "Understand market basics",
    description:
      "Learn what market capitalization means, why prices move, and how volatility affects crypto markets.",
    icon: BarChart3,
    articleSlug: "what-is-market-capitalization",
    relatedLabel: "Understand crypto volatility",
    relatedSlug: "what-is-crypto-volatility",
  },
  {
    title: "Learn risk management first",
    description:
      "Understand risk, position sizing, and risk-to-reward ratios before exploring trading decisions.",
    icon: ClipboardCheck,
    articleSlug: "why-risk-management-matters",
    relatedLabel: "What is position sizing?",
    relatedSlug: "what-is-position-sizing",
  },
  {
    title: "Recognise emotional trading habits",
    description:
      "Learn how fear, hype, and impulsive decisions can affect your judgement. Build a process before acting.",
    icon: Brain,
    articleSlug: "why-emotional-trading-is-dangerous",
    relatedLabel: "What is FOMO in trading?",
    relatedSlug: "what-is-fomo-in-trading",
  },
];

const practicalResources = [
  {
    title: "Tools and checklists",
    description:
      "Explore the security checklist, trading checklist, trade plan builder, journal, and other tools.",
    icon: ClipboardCheck,
    link: "/tools",
    label: "Explore tools",
  },
  {
    title: "Planning calculators",
    description:
      "Explore position size, risk/reward, profit and loss, and other calculators using practice examples.",
    icon: Calculator,
    link: "/calculators",
    label: "Explore calculators",
  },
  {
    title: "Research directories",
    description:
      "Browse exchange information, crypto books, and analysis websites as you develop your research process.",
    icon: Search,
    link: "/discover",
    label: "Explore Discover",
  },
];

const mistakes = [
  "Buying before understanding what you are buying",
  "Following hype or guaranteed-profit claims",
  "Ignoring account and wallet security",
  "Trading without a plan or risk limits",
  "Making decisions out of fear or excitement",
  "Risking money you cannot afford to lose",
];

export default function Start() {
  return (
    <div>
      <SEO
        title="Start Here: A Beginner’s Guide to Crypto"
        description="Follow a beginner roadmap through crypto fundamentals, wallets, security, market basics, risk management, and trading psychology. Explore free PDF guides and practical resources."
        path="/start-here"
      />

      {/* Introduction */}
      <section className="mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-300">
          Start Here
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-950 dark:text-white md:text-5xl">
          New to crypto?
          <span className="mt-2 block gradient-text">
            Build your foundation first.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
          Start with the basics, learn how to stay secure, and
          understand risk before exploring trading. Follow the
          roadmap below at your own pace.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to={getArticleLink("what-is-cryptocurrency")}
            className="button-primary gap-2"
          >
            Read your first lesson
            <ArrowRight size={17} aria-hidden="true" />
          </Link>

          <Link to="/learn" className="button-secondary">
            Browse all lessons
          </Link>
        </div>
      </section>

      {/* Beginner roadmap */}
      <section
        aria-labelledby="roadmap-heading"
        className="mt-16 sm:mt-20"
      >
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Your learning path
          </p>

          <h2
            id="roadmap-heading"
            className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white"
          >
            Start with these six steps
          </h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            Work through these topics in order. You do not need
            to buy cryptocurrency or place a trade to learn.
          </p>
        </div>

        <ol className="grid list-none gap-6 md:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <li
                key={step.articleSlug}
                className="premium-card flex flex-col"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <Icon size={22} aria-hidden="true" />
                  </div>

                  <span className="text-sm font-bold text-blue-600 dark:text-blue-300">
                    Step {index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>

                <div className="mt-6 flex flex-col items-start gap-3 border-t border-slate-200 pt-5 dark:border-white/10">
                  <Link
                    to={getArticleLink(step.articleSlug)}
                    className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:underline dark:text-blue-300"
                  >
                    Read the lesson
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>

                  <Link
                    to={getArticleLink(step.relatedSlug)}
                    className="text-sm font-medium text-slate-600 hover:text-blue-600 hover:underline dark:text-slate-300 dark:hover:text-blue-300"
                  >
                    {step.relatedLabel}
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      {/* PDF guides — populated from resource data */}
      {resources.length > 0 && (
        <section
          aria-labelledby="pdf-guides-heading"
          className="mt-16 sm:mt-20"
        >
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Read online or offline
              </p>

              <h2
                id="pdf-guides-heading"
                className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white"
              >
                Explore the PDF guides
              </h2>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Use these guides alongside your lessons. Open a
                preview or visit Resources to download a copy.
              </p>
            </div>

            <Link
              to="/resources"
              className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:underline dark:text-blue-300"
            >
              View all resources
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {resources.map((resource) => (
              <Link
                key={resource.id}
                to={`/resources?${new URLSearchParams({
                  pdf: resource.filename,
                }).toString()}`}
                className="premium-card group flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                  <FileText size={22} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                    {resource.level} · PDF guide
                  </p>

                  <h3 className="text-lg font-bold leading-7 text-slate-950 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-300">
                    {resource.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {resource.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-300">
                    Read PDF
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Practical resources */}
      <section
        aria-labelledby="practice-heading"
        className="mt-16 sm:mt-20"
      >
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Apply what you learn
          </p>

          <h2
            id="practice-heading"
            className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white"
          >
            Build a practical learning process
          </h2>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
            Once the fundamentals feel familiar, explore tools
            for organising research and practising planning.
            Calculator results are estimates, not predictions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {practicalResources.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.link}
                className="premium-card flex flex-col"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                  <Icon size={24} aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>

                <Link
                  to={item.link}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 hover:underline dark:text-blue-300"
                >
                  {item.label}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* Common mistakes */}
      <section
        aria-labelledby="mistakes-heading"
        className="mt-16 sm:mt-20"
      >
        <div className="premium-card">
          <h2
            id="mistakes-heading"
            className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white"
          >
            Common beginner mistakes to avoid
          </h2>

          <ul className="mt-8 grid list-none gap-4 md:grid-cols-2">
            {mistakes.map((mistake) => (
              <li
                key={mistake}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4 dark:border-white/10"
              >
                <CircleAlert
                  size={19}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400"
                />

                <span className="leading-6 text-slate-700 dark:text-slate-300">
                  {mistake}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-16 sm:mt-20">
        <div className="rounded-[2rem] border border-blue-500/10 bg-white/80 px-6 py-10 text-center shadow-xl backdrop-blur dark:bg-white/[0.04] sm:px-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
            Take your next step at your own pace
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
            Revisit topics whenever you need to. Use the Learn
            page’s search and category filters to find your next
            lesson, or save a PDF guide for later.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/learn" className="button-primary gap-2">
              Explore lessons
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link
              to="/resources"
              className="button-secondary gap-2"
            >
              Browse PDF guides
              <FileText size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}