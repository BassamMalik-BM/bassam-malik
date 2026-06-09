import { useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import LearnCard from "../components/LearnCard";
import { learnPosts } from "../data/learn";
import Breadcrumbs from '../components/Breadcrumbs';

const POSTS_PER_PAGE = 12;

export default function Learn() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = learnPosts.filter((post) => {
    const search = searchTerm.toLowerCase();

    return (
      post.title.toLowerCase().includes(search) ||
      post.description.toLowerCase().includes(search) ||
      post.category.toLowerCase().includes(search)
    );
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <AnimatedPage>
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-page">
          <Breadcrumbs />
          {/* HEADER + SEARCH */}
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                LEARN CRYPTO
              </p>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
                Learn crypto trading with clarity
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Beginner-friendly lessons designed to help you understand crypto
                trading, risk management, chart reading, trading psychology, and
                smarter decision-making without hype or confusion.
              </p>
            </div>

            {/* SEARCH BAR */}
            <div className="relative w-full lg:max-w-sm">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="search"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search lessons..."
                className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* SEARCH RESULT TEXT */}
          {searchTerm.trim() && (
            <p className="mb-6 text-sm font-medium text-slate-600 dark:text-slate-300">
              Showing{" "}
              <span className="font-bold text-slate-950 dark:text-white">
                {filteredPosts.length}
              </span>{" "}
              result{filteredPosts.length !== 1 ? "s" : ""} for{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                "{searchTerm}"
              </span>
            </p>
          )}

          {/* LEARN GRID */}
          {currentPosts.length > 0 ? (
            <>
              <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentPosts.map((post) => (
                  <LearnCard key={post.slug} post={post} />
                ))}
              </div>

              {/* PAGINATION */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() =>
                      setCurrentPage((page) => Math.max(page - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-400 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-blue-400"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  {Array.from({ length: totalPages }, (_, index) => {
                    const pageNumber = index + 1;
                    const isActive = currentPage === pageNumber;

                    return (
                      <button
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}
                        className={`h-11 w-11 rounded-xl text-sm font-bold transition ${
                          isActive
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                            : "border border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-blue-400"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}

                  <button
                    onClick={() =>
                      setCurrentPage((page) => Math.min(page + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-400 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-40 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-blue-400"
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
                Try searching for risk, journal, charts, support, or beginner.
              </p>
            </div>
          )}
        </div>
      </section>
    </AnimatedPage>
  );
}