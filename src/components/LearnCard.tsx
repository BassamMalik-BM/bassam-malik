import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types';

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="premium-card flex h-full flex-col">
      <div className="mb-5 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wide">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">{post.category}</span>
        <span className="text-slate-500 dark:text-slate-400">{post.readingTime}</span>
      </div>
      <h3 className="text-xl font-bold text-slate-950 dark:text-white">{post.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{post.description}</p>
      <Link to={`/blogs/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400">
        Read More <ArrowRight size={16} />
      </Link>
    </article>
  );
}
