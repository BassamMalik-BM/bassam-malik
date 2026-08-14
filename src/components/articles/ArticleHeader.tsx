import { CalendarDays, Clock } from "lucide-react";
import type { ArticleData } from "../../data/articles/articleTypes";

type ArticleHeaderProps = {
  article: ArticleData;
};

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="mb-10">
      {/* Meta */}
      <div className="mb-5 flex flex-wrap items-center gap-4 text-sm">
        <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
          {article.category.title}
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} />
          {article.readingTime}
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <CalendarDays size={16} />
          Updated {article.updatedAt}
        </span>
      </div>

      {/* Title */}
      <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-5xl lg:text-6xl">
        {article.title}
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600 dark:text-slate-300">
        {article.description}
      </p>

      {/* Hero Image */}
      {article.heroImage && (
        <div className="mt-10 overflow-hidden rounded-3xl">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full object-cover"
            loading="eager"
          />
        </div>
      )}

      {/* Divider */}
      <div className="mt-10 h-px bg-gradient-to-r from-blue-600/30 via-slate-200 to-transparent dark:via-white/10" />
    </header>
  );
}