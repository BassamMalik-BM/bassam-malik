import { ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import AnimatedPage from "../../components/AnimatedPage";
import Breadcrumbs from "../../components/Breadcrumbs";
import { calculators } from "../../data/calculators";

import Calculator from "../calculators/Calculator";
import TradeSizeCalculator from "../calculators/TradeSizeCalculator";
import RiskRewardCalculator from "../calculators/RiskRewardCalculator";
import ProfitCalculator from "../calculators/ProfitCalculator";
import CompoundGrowthCalculator from "../calculators/CompoundGrowthCalculator";
import BreakEvenCalculator from "../calculators/BreakEvenCalculator";

export default function CalculatorsDetail() {
  const { slug } = useParams();

  const calculator = calculators.find((item) => item.slug === slug);

  if (!calculator) return <Navigate to="/calculators" replace />;

  const relatedCalculators = calculators
    .filter((item) => item.slug !== calculator.slug)
    .slice(0, 5);

  return (
    <AnimatedPage>
      <section className="section-padding">
        <div className="container-page">
          <Breadcrumbs />

          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              {calculator.slug === "calculator" ? (
                <Calculator />
              ) : calculator.slug === "trade-size" ? (
                <TradeSizeCalculator />
              ) : calculator.slug === "risk-reward" ? (
                <RiskRewardCalculator />
              ) : calculator.slug === "profit" ? (
                <ProfitCalculator />
              ) : calculator.slug === "compound-growth" ? (
                <CompoundGrowthCalculator />
              ) : calculator.slug === "break-even" ? (
                <BreakEvenCalculator />
              ) : (
                <Navigate to="/calculators" replace />
              )}
            </div>

            <aside>
              <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-navy-900">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  Related Calculators
                </h3>

                <div className="mt-5 divide-y divide-slate-200 dark:divide-white/10">
                  {relatedCalculators.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/calculators/${item.slug}`}
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="text-sm font-semibold leading-6 text-slate-700 transition group-hover:text-blue-600 dark:text-slate-300 dark:group-hover:text-blue-300">
                        {item.title}
                      </span>

                      <ArrowRight
                        size={16}
                        className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-300"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}