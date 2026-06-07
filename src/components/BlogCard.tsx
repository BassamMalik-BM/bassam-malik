import { Link } from "react-router-dom";
import type { BlogPost } from "../types";

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/blogs/${post.slug}`}
      className="block h-full"
    >
      <article className="premium-card flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        {/* Category + Reading Time */}
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            {post.category}
          </span>

          <span className="text-slate-500 dark:text-slate-400">
            {post.readingTime}
          </span>
        </div>

        {/* Hero Image */}
        <img
          src={post.image}
          alt={post.title}
          className="aspect-video w-full rounded-2xl object-cover"
          loading="lazy"
        />

        {/* Title */}
        <h3 className="mt-5 line-clamp-2 text-xl font-bold text-slate-950 dark:text-white">
          {post.title}
        </h3>

        {/* Description */}
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {post.description}
        </p>
      </article>
    </Link>
  );
}