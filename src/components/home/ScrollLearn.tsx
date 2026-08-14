import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

import { articles } from "../../data/articles";

const featuredSlugs = [
  "what-is-cryptocurrency",
  "what-is-bitcoin",
  "what-is-ethereum",
  "what-is-spot-trading",
];

export default function ScrollLearn() {
  const featuredArticles = featuredSlugs
    .map((slug) =>
      articles.find((article) => article.slug === slug)
    )
    .filter(
      (
        article
      ): article is NonNullable<typeof article> =>
        Boolean(article)
    );

  return (
    <section className="py-14 sm:py-16">
      <div className="container-page">
        {/* HEADER */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
              Learn
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Start with the fundamentals
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
              Beginner-friendly lessons to help you understand crypto,
              markets, trading, and risk step by step.
            </p>
          </div>

          <Link
            to="/learn"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Explore all lessons
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* ARTICLES */}
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredArticles.map((article) => (
            <article
              key={article.slug}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-blue-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30"
            >
              {/* IMAGE */}
              {article.heroImage && (
                <Link
                  to={`/learn/${article.category.slug}/${article.slug}`}
                  className="block h-44 overflow-hidden"
                >
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </Link>
              )}

              {/* CONTENT */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-xs font-semibold">
                  <span className="text-blue-600 dark:text-blue-400">
                    {article.category.title}
                  </span>

                  <span className="text-slate-300 dark:text-slate-600">
                    •
                  </span>

                  <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <BookOpen size={13} />
                    {article.readingTime}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold leading-7 text-slate-950 dark:text-white">
                  {article.title}
                </h3>

                <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {article.description}
                </p>

                <Link
                  to={`/learn/${article.category.slug}/${article.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition group-hover:gap-3 dark:text-blue-400"
                >
                  Read lesson
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}