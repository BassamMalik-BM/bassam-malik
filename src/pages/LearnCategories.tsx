import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import { learnPosts } from "../data/learn";
import Breadcrumbs from '../components/Breadcrumbs';

function slugify(text: string) {
  return text.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
}

export default function LearnCategories() {
  const categories = Array.from(
    new Set(learnPosts.map((post) => post.category))
  ).map((category) => ({
    name: category,
    count: learnPosts.filter((post) => post.category === category).length,
    slug: slugify(category),
  }));

  return (
    <AnimatedPage>
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-page">
          <Breadcrumbs />
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Learn Categories
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              Explore Learn Topics
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Browse beginner-friendly lessons by topic, from market basics and
              risk management to trading psychology and chart education.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/learn/category/${category.slug}`}
                className="premium-card group flex h-full flex-col text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                  {category.name}
                </h2>

                <p className="mt-3 text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {category.count} lesson{category.count !== 1 ? "s" : ""}
                </p>

                <span className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  View Lessons
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}