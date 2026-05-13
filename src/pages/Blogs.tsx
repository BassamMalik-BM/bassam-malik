import { useState } from "react";
import { Search } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../data/blogs";

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const search = searchTerm.toLowerCase();

    return (
      post.title.toLowerCase().includes(search) ||
      post.description.toLowerCase().includes(search) ||
      post.category.toLowerCase().includes(search)
    );
  });

  return (
    <AnimatedPage>
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-page">
          {/* HEADER + SEARCH */}
          <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                Blog Library
              </p>

              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
                Beginner crypto education without noise
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Explore clear lessons about crypto trading, risk management,
                trading journals, chart reading, and safer decision-making.
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
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search blogs..."
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

          {/* BLOG GRID */}
          {filteredPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="premium-card text-center">
              <p className="text-lg font-semibold text-slate-950 dark:text-white">
                No blogs found
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