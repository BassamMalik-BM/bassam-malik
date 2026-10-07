import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type Category = {
  slug: string;
  title: string;
  count: number;
};

type CategoryFilterProps = {
  categories: Category[];
  selected: string[];
  totalArticles: number;
  onChange: (selected: string[]) => void;
};

export default function CategoryFilter({
  categories,
  selected,
  totalArticles,
  onChange,
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) return;

    function handleOutsideClick(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !containerRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  function toggleCategory(slug: string) {
    onChange(
      selected.includes(slug)
        ? selected.filter((item) => item !== slug)
        : [...selected, slug],
    );
  }

  const selectedTitle = categories.find(
    (category) => category.slug === selected[0],
  )?.title;

  const buttonLabel =
    selected.length === 0
      ? `All categories (${totalArticles})`
      : selected.length === 1
        ? selectedTitle ?? "1 category selected"
        : `${selected.length} categories selected`;

  return (
    <div
      ref={containerRef}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <span className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300">
        Categories
      </span>

      <button
        ref={buttonRef}
        type="button"
        aria-label={`Filter by categories: ${buttonLabel}`}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left text-sm font-medium text-slate-700 outline-none transition focus-visible:border-blue-400 focus-visible:ring-4 focus-visible:ring-blue-500/10 dark:border-white/10 dark:bg-navy-900 dark:text-white"
      >
        <span className="min-w-0 truncate">{buttonLabel}</span>

        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          id={panelId}
          className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-navy-900"
        >
          <div className="border-b border-slate-200 p-3 dark:border-white/10">
            <label className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:text-white dark:hover:bg-white/5">
              <input
                type="checkbox"
                checked={selected.length === 0}
                onChange={() => onChange([])}
                className="h-4 w-4 shrink-0 accent-blue-600"
              />

              All categories ({totalArticles})
            </label>

            <p className="mt-1 px-2 text-xs text-slate-500 dark:text-slate-400">
              Choose one or more topics.
            </p>
          </div>

          <fieldset className="max-h-72 overflow-y-auto p-3">
            <legend className="sr-only">Select categories</legend>

            {categories.map((category) => (
              <label
                key={category.slug}
                className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2.5 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
              >
                <input
                  type="checkbox"
                  checked={selected.includes(category.slug)}
                  onChange={() => toggleCategory(category.slug)}
                  className="h-4 w-4 shrink-0 accent-blue-600"
                />

                <span className="flex-1">{category.title}</span>

                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {category.count}
                </span>
              </label>
            ))}
          </fieldset>

          <div className="flex items-center justify-between gap-3 border-t border-slate-200 p-3 dark:border-white/10">
            <button
              type="button"
              disabled={selected.length === 0}
              onClick={() => onChange([])}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40 dark:text-blue-400 dark:hover:bg-blue-500/10"
            >
              Clear
            </button>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                buttonRef.current?.focus();
              }}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}