import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { articles } from "../../data/articles";

const featuredSlugs = [
  "what-is-cryptocurrency",
  "what-is-bitcoin",
  "how-does-cryptocurrency-work",
  "what-is-ethereum",
  "what-is-a-crypto-wallet",
  "what-is-a-crypto-exchange",
  "what-is-spot-trading",
  "what-is-technical-analysis",
  "why-risk-management-matters",
  "keeping-crypto-safe",
];

export default function FeaturedGuides() {
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredArticles = featuredSlugs
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article): article is NonNullable<typeof article> =>
      Boolean(article)
    );

  if (!featuredArticles.length) return null;

  return (
    <section className="py-12 sm:py-14">
      <div className="container-page">
        {/* Header */}
        <div className="mb-9 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Featured Guides
            </p>

            <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Explore essential beginner lessons
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
              Start with some of the most useful lessons for understanding
              crypto, markets, trading, and risk.
            </p>
          </div>

          <Link
            to="/learn"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View all articles
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Desktop expanding carousel */}
        <div className="hidden h-[470px] gap-2 lg:flex">
          {featuredArticles.map((article, index) => {
            const active = activeIndex === index;

            return (
              <Link
                key={article.slug}
                to={`/learn/${article.category.slug}/${article.slug}`}
                onClick={(event) => {
                  if (!active) {
                    event.preventDefault();
                    setActiveIndex(index);
                  }
                }}
                className={`group relative min-w-0 overflow-hidden rounded-[1.5rem] border border-slate-200 shadow-lg transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] dark:border-white/10 ${
                  active
                    ? "flex-[10] opacity-100"
                    : "flex-[0.7] opacity-70 hover:opacity-100"
                }`}
              >
                {article.heroImage ? (
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    loading="lazy"
                    className={`h-full w-full object-cover transition duration-700 ${
                      active ? "scale-100" : "scale-110"
                    }`}
                  />
                ) : (
                  <div className="h-full w-full bg-slate-200 dark:bg-slate-900" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                {active ? (
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white xl:p-8">
                    <div className="mb-3 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em]">
                      <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-100 backdrop-blur-md">
                        {article.category.title}
                      </span>

                      <span className="text-white/70">
                        {article.readingTime}
                      </span>
                    </div>

                    <h3 className="line-clamp-2 max-w-3xl text-3xl font-bold leading-tight xl:text-4xl">
                      {article.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 max-w-2xl text-sm leading-7 text-white/70">
                      {article.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition group-hover:bg-blue-600 group-hover:text-white">
                      Read Article
                      <ArrowRight size={16} />
                    </span>
                  </div>
                ) : (
                  <div className="absolute inset-x-0 bottom-6 flex justify-center">
                    <p className="rotate-180 whitespace-nowrap [writing-mode:vertical-rl] text-xs font-bold uppercase tracking-[0.16em] text-white/75">
                      {article.category.title}
                    </p>
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile/tablet */}
        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          {featuredArticles.slice(0, 4).map((article) => (
            <Link
              key={article.slug}
              to={`/learn/${article.category.slug}/${article.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]"
            >
              {article.heroImage && (
                <div className="h-44 overflow-hidden">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-5">
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span className="text-blue-600 dark:text-blue-400">
                    {article.category.title}
                  </span>

                  <span>•</span>

                  <span>{article.readingTime}</span>
                </div>

                <h3 className="mt-3 text-lg font-bold leading-7 text-slate-950 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-6 hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-2">
            {featuredArticles.map((article, index) => (
              <button
                key={article.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${article.title}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-blue-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600"
                }`}
              />
            ))}
          </div>

          <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
            Select a guide to preview
          </p>
        </div>
      </div>
    </section>
  );
}