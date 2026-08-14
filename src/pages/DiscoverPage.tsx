import { Link } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage";

const discoverSections = [
  {
    title: "Crypto Exchanges",
    description:
      "Compare cryptocurrency exchanges, features, scores, fees, and supported products.",
    path: "/discover/exchanges",
  },
  {
    title: "Crypto Books",
    description:
      "Explore books about Bitcoin, cryptocurrency, investing, money, and financial psychology.",
    path: "/discover/books",
  },
  {
    title: "Analysis Websites",
    description:
      "Discover charting, market-data, research, and cryptocurrency analytics platforms.",
    path: "/discover/analysis-websites",
  },
];

export default function DiscoverPage() {
  return (
    <AnimatedPage>
      <div>
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Discover
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Explore useful crypto resources
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Browse curated exchanges, books, and analysis platforms in
            separate directories.
          </p>
        </div>

        {/* Discover sections */}
        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {discoverSections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              className="group rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-400/40"
            >
              <h2 className="text-2xl font-bold text-slate-950 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {section.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">
                {section.description}
              </p>

              <span className="mt-6 inline-block font-semibold text-blue-600 dark:text-blue-400">
                Explore →
              </span>
            </Link>
          ))}
        </section>
      </div>
    </AnimatedPage>
  );
}