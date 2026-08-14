import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { tools } from "../../data/tools";

export default function ToolsPage() {
  return (
    <div>
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Tools
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
          Practical tools for better crypto decisions
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          Use structured tools to plan trades, review decisions, manage
          holdings, organize research, improve security, and build better
          investing habits.
        </p>
      </div>

      <section className="mt-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <article
              key={tool.slug}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-400/30"
            >
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  {tool.category}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
                  {tool.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {tool.description}
                </p>

                <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Best for:
                  </span>{" "}
                  {tool.bestFor}
                </p>
              </div>

              <Link
                to={`/tools/${tool.slug}`}
                className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Open Tool
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}