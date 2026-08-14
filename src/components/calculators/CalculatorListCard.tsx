import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import type { CalculatorData } from "../../data/calculators";

type CalculatorListCardProps = {
  calculator: CalculatorData;
};

export default function CalculatorListCard({
  calculator,
}: CalculatorListCardProps) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-400/30">
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {calculator.category}
        </p>

        <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white">
          {calculator.title}
        </h2>

        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
          {calculator.description}
        </p>

        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            Best for:
          </span>{" "}
          {calculator.bestFor}
        </p>
      </div>

      <Link
        to={`/calculators/${calculator.slug}`}
        className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        Open Calculator
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}