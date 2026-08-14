import CalculatorListCard from "../../components/calculators/CalculatorListCard";
import { calculators } from "../../data/calculators";

export default function CalculatorsPage() {
  return (
    <div>
      {/* Header */}
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Calculators
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
          Practical crypto and trading calculators
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          Use simple calculators to plan trades, manage risk, understand
          potential outcomes, and explore long-term investing scenarios.
        </p>
      </div>

      {/* Calculators */}
      <section className="mt-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calculator) => (
            <CalculatorListCard
              key={calculator.slug}
              calculator={calculator}
            />
          ))}
        </div>
      </section>
    </div>
  );
}