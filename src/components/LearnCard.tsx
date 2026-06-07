import { Link } from 'react-router-dom';
import type { LearnPost } from '../types';

type LearnCardProps = {
  post: LearnPost;
};

export default function LearnCard({ post }: LearnCardProps) {
  return (
    <Link
      to={`/learn/${post.slug}`}
      className="block h-full"
    >
      <article className="premium-card flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            {post.category}
          </span>

          <span className="text-slate-500 dark:text-slate-400">
            {post.readingTime}
          </span>
        </div>

        <h3 className="line-clamp-3 text-xl font-bold text-slate-950 dark:text-white">
          {post.title}
        </h3>

        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {post.description}
        </p>
      </article>
    </Link>
  );
}