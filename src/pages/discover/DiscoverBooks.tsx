import BookCard from "../../components/discover/books/BookCard";
import { books } from "../../data/discover/books";

export default function DiscoverBooks() {
  return (
    <div className="space-y-12">
      {/* Page header */}
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Discover
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
          Crypto Books
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
          Explore cryptocurrency books based on difficulty, readability,
          practical value, depth, and beginner suitability.
        </p>
      </header>

      {/* Book list */}
      <section>
        <div className="space-y-6">
          {books.map((book) => (
            <BookCard
              key={book.slug}
              book={book}
            />
          ))}
        </div>
      </section>
    </div>
  );
}