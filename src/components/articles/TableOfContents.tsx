import { useEffect, useState } from "react";

type TableOfContentsItem = {
  id: string;
  title: string;
};

type TableOfContentsProps = {
  items: TableOfContentsItem[];
};

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[0]?.id || "");

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  if (!items.length) return null;

  return (
    <nav className="rounded-3xl border border-slate-200/70 bg-white/40 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-navy-900/40">
      <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
        Table of Contents
      </h3>

      <div className="relative mt-6 space-y-5 border-l border-slate-200 pl-5 dark:border-white/10">
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleClick(event, item.id)}
              className={`group relative block text-sm leading-6 transition ${
                isActive
                  ? "font-semibold text-blue-600 dark:text-blue-400"
                  : "font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              }`}
            >
              <span
                className={`absolute -left-[25px] top-2 h-2.5 w-2.5 rounded-full border transition ${
                  isActive
                    ? "border-blue-600 bg-blue-600 dark:border-blue-400 dark:bg-blue-400"
                    : "border-slate-300 bg-white group-hover:border-blue-600 dark:border-slate-600 dark:bg-navy-950 dark:group-hover:border-blue-400"
                }`}
              />

              {item.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
}