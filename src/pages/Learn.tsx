import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import AnimatedPage from "../components/AnimatedPage";
import { articles } from "../data/articles";

const POSTS_PER_PAGE = 12;

export default function Learn() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredArticles = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    if (!search) return articles;

    return articles.filter((article) => {
      return (
        article.title.toLowerCase().includes(search) ||
        article.description.toLowerCase().includes(search) ||
        article.category.title.toLowerCase().includes(search)
      );
    });
  }, [searchTerm]);

  const totalPages = Math.ceil(
    filteredArticles.length / POSTS_PER_PAGE,
  );

  const startIndex =
    (currentPage - 1) * POSTS_PER_PAGE;

  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <AnimatedPage>
      <div>
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Learn Crypto
            </p>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              Learn crypto with clarity
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Browse all beginner-friendly crypto articles, or explore
              by category if you want a more structured path.
            </p>

            <Link
              to="/learn/categories"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition hover:text-blue-700 dark:text-blue-400"
            >
              Browse categories
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Search */}
          <div className="relative w-full">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search articles..."
              className="w-full rounded-2xl border border-slate-200 bg-white/80 py-4 pl-12 pr-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-navy-900/80 dark:text-white dark:placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Search results count */}
        {searchTerm.trim() && (
          <p className="mb-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            Showing{" "}
            <span className="font-bold text-slate-950 dark:text-white">
              {filteredArticles.length}
            </span>{" "}
            result
            {filteredArticles.length !== 1 ? "s" : ""} for{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              "{searchTerm}"
            </span>
          </p>
        )}

        {/* Articles */}
        {currentArticles.length > 0 ? (
          <>
            <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentArticles.map((article) => (
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  onClick={() =>
                    setCurrentPage((page) =>
                      Math.max(page - 1, 1),
                    )
                  }
                  disabled={currentPage === 1}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-400 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-navy-900 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <ChevronLeft size={18} />
                </button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => {
                    const pageNumber = index + 1;
                    const isActive =
                      currentPage === pageNumber;

                    return (
                      <button
                        key={pageNumber}
                        onClick={() =>
                          setCurrentPage(pageNumber)
                        }
                        className={`h-11 w-11 rounded-xl text-sm font-bold transition ${
                          isActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                            : "border border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-navy-900 dark:text-slate-300 dark:hover:text-blue-400"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  },
                )}

                <button
                  onClick={() =>
                    setCurrentPage((page) =>
                      Math.min(page + 1, totalPages),
                    )
                  }
                  disabled={currentPage === totalPages}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-400 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-navy-900 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="premium-card text-center">
            <p className="text-lg font-semibold text-slate-950 dark:text-white">
              Not found
            </p>

            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Try searching for Bitcoin, wallets, trading, risk, or
              blockchain.
            </p>
          </div>
        )}
      </div>
    </AnimatedPage>
  );
}