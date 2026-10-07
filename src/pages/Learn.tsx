import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

import AnimatedPage from "../components/AnimatedPage";
import CategoryFilter from "../components/CategoryFilter";
import SEO from "../components/SEO";
import { articles } from "../data/articles";

const POSTS_PER_PAGE = 12;

// Build categories from article data so counts stay up to date.
const categories = Array.from(
  new Set(articles.map((article) => article.category.slug)),
).map((slug) => {
  const matchingArticles = articles.filter(
    (article) => article.category.slug === slug,
  );

  return {
    slug,
    title: matchingArticles[0].category.title,
    count: matchingArticles.length,
  };
});

const paginationButtonClass =
  "flex h-11 w-11 items-center justify-center rounded-xl border " +
  "border-slate-200 bg-white text-slate-700 transition " +
  "hover:border-blue-400 hover:text-blue-600 " +
  "disabled:cursor-not-allowed disabled:opacity-40 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 " +
  "dark:border-white/10 dark:bg-navy-900 dark:text-slate-300 " +
  "dark:hover:text-blue-400";

export default function Learn() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchTerm = searchParams.get("q") ?? "";

  const selectedCategories = useMemo(
    () =>
      Array.from(new Set(searchParams.getAll("category"))).filter(
        (slug) =>
          categories.some((category) => category.slug === slug),
      ),
    [searchParams],
  );

  const categoryTitles = categories
    .filter((category) =>
      selectedCategories.includes(category.slug),
    )
    .map((category) => category.title)
    .join(", ");

  const filteredArticles = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(article.category.slug);

      const matchesSearch =
        !search ||
        article.title.toLowerCase().includes(search) ||
        article.description.toLowerCase().includes(search) ||
        article.category.title.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategories]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredArticles.length / POSTS_PER_PAGE),
  );

  const requestedPage = Number(searchParams.get("page") ?? "1");

  const currentPage = Math.min(
    Number.isSafeInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1,
    totalPages,
  );

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  const hasFilters = Boolean(
    searchTerm.length > 0 || searchParams.has("category"),
  );

  function updateSearch(value: string) {
    setSearchParams(
      (previousParams) => {
        const nextParams = new URLSearchParams(previousParams);

        if (value) {
          nextParams.set("q", value);
        } else {
          nextParams.delete("q");
        }

        nextParams.delete("page");

        return nextParams;
      },
      { replace: true },
    );
  }

  function updateCategories(selected: string[]) {
    setSearchParams((previousParams) => {
      const nextParams = new URLSearchParams(previousParams);

      nextParams.delete("category");
      nextParams.delete("page");

      selected.forEach((slug) => {
        nextParams.append("category", slug);
      });

      return nextParams;
    });
  }

  function clearFilters() {
    setSearchParams((previousParams) => {
      const nextParams = new URLSearchParams(previousParams);

      nextParams.delete("q");
      nextParams.delete("category");
      nextParams.delete("page");

      return nextParams;
    });
  }

  function changePage(page: number) {
    const nextPage = Math.min(Math.max(page, 1), totalPages);

    setSearchParams((previousParams) => {
      const nextParams = new URLSearchParams(previousParams);

      if (nextPage === 1) {
        nextParams.delete("page");
      } else {
        nextParams.set("page", String(nextPage));
      }

      return nextParams;
    });
  }

  return (
    <AnimatedPage>
      <SEO
        title="Learn Crypto for Beginners"
        description="Explore beginner-friendly lessons on cryptocurrency, Bitcoin, wallets, security, trading, and risk management. Search articles or browse by topic."
        path="/learn"
      />

      <div>
        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Learn Crypto
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
            Learn crypto with clarity
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Explore beginner-friendly crypto lessons. Search for a
            topic or select one or more categories to find your
            next article.
          </p>
        </div>

        {/* Search and category filters */}
        <div className="mb-6 grid gap-5 md:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <label
              htmlFor="learn-search"
              className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
            >
              Search articles
            </label>

            <div className="relative">
              <Search
                size={20}
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="learn-search"
                type="search"
                value={searchTerm}
                onChange={(event) =>
                  updateSearch(event.target.value)
                }
                placeholder="Search Bitcoin, wallets, trading..."
                className="w-full rounded-2xl border border-slate-200 bg-white/80 py-4 pl-12 pr-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-navy-900/80 dark:text-white dark:placeholder:text-slate-500"
              />
            </div>
          </div>

          <CategoryFilter
            categories={categories}
            selected={selectedCategories}
            totalArticles={articles.length}
            onChange={updateCategories}
          />
        </div>

        {/* Results and reset */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <p
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="min-w-0 break-words text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            <span className="font-bold text-slate-950 dark:text-white">
              {filteredArticles.length}
            </span>{" "}
            {filteredArticles.length === 1 ? "article" : "articles"}

            {categoryTitles && (
              <>
                {" "}in{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {categoryTitles}
                </span>
              </>
            )}

            {searchTerm.trim() && (
              <>
                {" "}matching{" "}
                <span className="font-semibold text-slate-950 dark:text-white">
                  “{searchTerm.trim()}”
                </span>
              </>
            )}
          </p>

          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="shrink-0 rounded-lg px-3 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-blue-400 dark:hover:bg-blue-500/10"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Articles */}
        {currentArticles.length > 0 ? (
          <>
            <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
              {currentArticles.map((article) => (
                <Link
                  key={`${article.category.slug}/${article.slug}`}
                  to={`/learn/${article.category.slug}/${article.slug}`}
                  className="premium-card group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
              <nav
                aria-label="Article pagination"
                className="mt-12 flex flex-wrap items-center justify-center gap-2"
              >
                <button
                  type="button"
                  aria-label="Previous page"
                  onClick={() => changePage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={paginationButtonClass}
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>

                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;
                  const isActive = currentPage === pageNumber;

                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      aria-label={`Page ${pageNumber}`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => changePage(pageNumber)}
                      className={
                        isActive
                          ? "flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          : `${paginationButtonClass} text-sm font-bold`
                      }
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                <button
                  type="button"
                  aria-label="Next page"
                  onClick={() => changePage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={paginationButtonClass}
                >
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </nav>
            )}
          </>
        ) : (
          <div className="premium-card py-12 text-center">
            <p className="text-lg font-semibold text-slate-950 dark:text-white">
              No articles found
            </p>

            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Try another keyword or change your selected categories.
            </p>

            {hasFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Show all articles
              </button>
            )}
          </div>
        )}
      </div>
    </AnimatedPage>
  );
}