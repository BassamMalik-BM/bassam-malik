import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import LearnCard from "../components/LearnCard";
import { learnPosts } from "../data/learn";

function slugify(text: string) {
  return text.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
}

export default function LearnCategory() {
  const { category } = useParams();

  const categoryName = Array.from(
    new Set(learnPosts.map((post) => post.category))
  ).find((item) => slugify(item) === category);

  if (!categoryName) return <Navigate to="/learn/categories" replace />;

  const posts = learnPosts.filter((post) => post.category === categoryName);

  return (
    <AnimatedPage>
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-page">
          <Link
            to="/learn/categories"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            <ArrowLeft size={17} /> Back to Categories
          </Link>

          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Learn Category
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              {categoryName}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Explore beginner-friendly lessons in {categoryName.toLowerCase()}.
            </p>
          </div>

          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <LearnCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}