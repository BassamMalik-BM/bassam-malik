import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import AnimatedPage from "../components/AnimatedPage";
import { articles } from "../data/articles";

const categories = [
  { title: "Crypto Basics", slug: "crypto-basics" },
  { title: "Bitcoin", slug: "bitcoin" },
  { title: "Ethereum", slug: "ethereum" },
  { title: "Blockchain", slug: "blockchain" },
  { title: "Wallets", slug: "wallets" },
  { title: "Exchanges", slug: "exchanges" },
  { title: "Trading", slug: "trading" },
  { title: "Technical Analysis", slug: "technical-analysis" },
  { title: "Risk Management", slug: "risk-management" },
  { title: "Trading Psychology", slug: "trading-psychology" },
  { title: "Crypto Security", slug: "crypto-security" },
  { title: "Market", slug: "market" },
  { title: "Comparisons", slug: "comparisons" },
  { title: "Indicators", slug: "indicators" },
];

export default function LearnCategories() {
  const categoriesWithCounts = categories.map((category) => ({
    ...category,
    count: articles.filter(
      (article) => article.category.slug === category.slug,
    ).length,
  }));

  return (
    <AnimatedPage>
      <div>
        {/* Header */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Learn
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
            Browse Categories
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Choose a topic to explore beginner-friendly crypto lessons in a
            structured way.
          </p>
        </div>

        {/* Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoriesWithCounts.map((category) => (
            <Link
              key={category.slug}
              to={`/learn/${category.slug}`}
              className="premium-card group flex min-h-[180px] flex-col justify-between"
            >
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
                  {category.count} article
                  {category.count !== 1 ? "s" : ""}
                </p>

                <h2 className="text-2xl font-bold text-slate-950 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {category.title}
                </h2>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-blue-400">
                View Articles
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}