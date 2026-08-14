import { Link, Navigate, useParams } from "react-router-dom";

import AnimatedPage from "../components/AnimatedPage";
import { articles } from "../data/articles";

export default function LearnCategory() {
  const { category } = useParams();

  const categoryArticles = articles.filter(
    (article) => article.category.slug === category,
  );

  if (!category || categoryArticles.length === 0) {
    return <Navigate to="/learn/categories" replace />;
  }

  const categoryTitle = categoryArticles[0].category.title;

  return (
    <AnimatedPage>
      <div>
        {/* Header */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Learn Category
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
            {categoryTitle}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Explore beginner-friendly articles about{" "}
            {categoryTitle.toLowerCase()}.
          </p>
        </div>

        {/* Articles */}
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categoryArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/learn/${article.category.slug}/${article.slug}`}
              className="premium-card group flex flex-col"
            >
              {article.heroImage && (
                <div className="mb-5 overflow-hidden rounded-2xl">
                  <img
                    src={article.heroImage}
                    alt={article.title}
                    loading="lazy"
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  {article.category.title}
                </span>

                <span>{article.readingTime}</span>
              </div>

              <h2 className="text-xl font-bold leading-8 text-slate-950 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {article.title}
              </h2>

              <p className="mt-4 line-clamp-3 leading-7 text-slate-600 dark:text-slate-300">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}