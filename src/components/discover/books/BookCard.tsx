import { Link } from "react-router-dom";
import type { BookData } from "../../../data/discover/books";
import BookScore from "./BookScore";

interface BookCardProps {
  book: BookData;
}

export default function BookCard({
  book,
}: BookCardProps) {
  const difficulty =
    book.difficulty ??
    book.level ??
    "Difficulty not specified";

  const topics =
    book.topics ??
    book.keyTopics ??
    [];

  const purchaseUrl =
    book.purchaseUrl ??
    book.whereToBuy?.[0]?.url;

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-white/10 dark:bg-slate-950/80 dark:shadow-none">
      <div className="flex flex-col gap-6 p-6 lg:flex-row lg:items-center lg:p-8">
        <div className="flex min-w-0 flex-1 gap-5">
          <div className="h-44 w-32 shrink-0">
            <img
              src={book.coverImage}
              alt={`${book.title} book cover`}
              className="h-full w-full object-contain object-center"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              {book.author}
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">
              {book.title}
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
              {book.tagline}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300">
                {difficulty}
              </span>

              {topics.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300"
                >
                  {topic}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
              <span className="font-semibold text-slate-950 dark:text-white">
                Best for:
              </span>{" "}
              {book.bestFor.join(", ")}
            </p>
          </div>
        </div>

        <BookScore score={book.score.overall} />

        <div className="flex gap-3 sm:flex-row lg:flex-col">
          {purchaseUrl && (
            <a
              href={purchaseUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="flex-1 rounded-xl bg-blue-600 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700 dark:text-white dark:hover:bg-blue-500 lg:flex-none"
            >
              Buy Book
            </a>
          )}

          <Link
            to={`/discover/books/${book.slug}`}
            className="flex-1 rounded-xl border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5 lg:flex-none"
          >
            Learn More
          </Link>
        </div>
      </div>
    </article>
  );
}