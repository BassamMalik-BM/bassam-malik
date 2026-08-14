import { Link, useParams } from "react-router-dom";
import BookScore from "../../components/discover/books/BookScore";
import { getBookBySlug } from "../../data/discover/books";

export default function DiscoverBookPage() {
  const { slug } = useParams<{ slug: string }>();
  const book = getBookBySlug(slug);

  if (!book) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-950 dark:text-white">
          Book not found
        </h1>

        <Link
          to="/discover/books"
          className="mt-8 inline-block font-medium text-blue-600 transition hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View all books
        </Link>
      </section>
    );
  }

  const scoreItems = [
    {
      label: "Beginner Friendly",
      score: book.score.beginnerFriendly,
    },
    {
      label: "Readability",
      score: book.score.readability,
    },
    {
      label: "Practical Value",
      score: book.score.practicalValue ?? book.score.value ?? 0,
    },
    {
      label: "Depth",
      score: book.score.depth,
    },
  ];

  const keyTakeaways = book.keyTakeaways ?? [];
  const whoShouldRead = book.whoShouldRead ?? [];
  const whoShouldSkip = book.whoShouldSkip ?? [];

  return (
    <div className="space-y-14 text-slate-950 dark:text-white">
      {/* Hero */}
      <section>
        <div className="grid gap-10 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
          <div className="flex shrink-0 items-center justify-center">
            <img
              src={book.coverImage}
              alt={`${book.title} book cover`}
              className="h-auto max-h-72 w-auto max-w-52 object-contain"
              decoding="async"
              draggable={false}
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              {book.author}
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              {book.title}
            </h1>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              {book.tagline}
            </p>

            <p className="mt-6 max-w-3xl leading-8 text-slate-600 dark:text-slate-400">
              {book.description}
            </p>
          </div>

          <BookScore score={book.score.overall} />
        </div>
      </section>

      {/* Affiliate disclosure */}
      {book.affiliateDisclosure && (
        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-50/70 p-5 dark:border-emerald-400/20 dark:bg-emerald-400/5">
          <p className="font-semibold text-emerald-600 dark:text-emerald-300">
            Affiliate disclosure
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {book.affiliateDisclosure}
          </p>
        </section>
      )}

      {/* Score breakdown */}
      <section>
        <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
          Score breakdown
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {scoreItems.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition-colors dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none"
            >
              <div className="flex justify-between gap-4">
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {item.label}
                </span>

                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {item.score.toFixed(1)}
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-emerald-500"
                  style={{
                    width: `${Math.min(
                      Math.max(item.score * 10, 0),
                      100,
                    )}%`,
                  }}
                />
              </div>

              <p className="mt-3 text-xs text-slate-500">
                {item.score.toFixed(1)} out of 10
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pros and cons */}
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-emerald-500/25 bg-emerald-50/70 p-8 dark:border-emerald-500/20 dark:bg-emerald-500/5">
          <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
            Pros
          </h2>

          <ul className="mt-6 space-y-4">
            {book.pros.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
              >
                <span className="mt-0.5 font-bold text-emerald-600 dark:text-emerald-400">
                  ✓
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/60 p-8 dark:border-white/10 dark:bg-white/[0.03]">
          <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-300">
            Cons
          </h2>

          <ul className="mt-6 space-y-4">
            {book.cons.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
              >
                <span className="mt-0.5 font-bold text-slate-600 dark:text-slate-400">
                  —
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key takeaways */}
      {keyTakeaways.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
            Key takeaways
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {keyTakeaways.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:shadow-none"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-emerald-600 dark:text-emerald-400">
                    ✓
                  </span>

                  <span>{item}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Reader suitability */}
      {(whoShouldRead.length > 0 || whoShouldSkip.length > 0) && (
        <section className="grid gap-8 lg:grid-cols-2">
          {whoShouldRead.length > 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Who should read it?
              </h2>

              <ul className="mt-6 space-y-4">
                {whoShouldRead.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <span className="mt-0.5 text-emerald-600 dark:text-emerald-400">
                      ✓
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {whoShouldSkip.length > 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Who may want to skip it?
              </h2>

              <ul className="mt-6 space-y-4">
                {whoShouldSkip.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <span className="mt-0.5 text-slate-600 dark:text-slate-400">
                      —
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Purchase CTA */}
      {book.purchaseUrl && (
        <section className="rounded-3xl border border-blue-500/25 bg-blue-50/70 p-8 dark:border-blue-500/20 dark:bg-blue-500/10">
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                View {book.title}
              </h2>

              <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
                Check the current price, format, availability, and seller
                information before purchasing.
              </p>
            </div>

            <a
              href={book.purchaseUrl}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700 dark:hover:bg-blue-500"
            >
              Buy Book
            </a>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Last updated:{" "}
          <time dateTime={book.updatedAt}>
            {new Date(`${book.updatedAt}T00:00:00`).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            )}
          </time>
        </p>

        <Link
          to="/discover/books"
          className="font-medium text-blue-600 transition hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View all books
        </Link>
      </footer>
    </div>
  );
}