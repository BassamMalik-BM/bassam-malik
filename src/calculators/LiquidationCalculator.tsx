import { useMemo, useState } from "react";

import CalculatorShell from "../components/calculators/CalculatorShell";
import CalculatorGrid from "../components/calculators/CalculatorGrid";
import CalculatorCard from "../components/calculators/CalculatorCard";
import CalculatorInput from "../components/calculators/CalculatorInput";
import MainResult from "../components/calculators/MainResult";
import ResultRow from "../components/calculators/ResultRow";
import EmptyResult from "../components/calculators/EmptyResult";

export default function LiquidationCalculator() {
  const [entryPrice, setEntryPrice] = useState("100");
  const [leverage, setLeverage] = useState("10");
  const [direction, setDirection] = useState<"long" | "short">("long");

  const result = useMemo(() => {
    const entry = Number(entryPrice);
    const lev = Number(leverage);

    if (entry <= 0 || lev <= 1) {
      return null;
    }

    const movePercent = 1 / lev;

    const liquidationPrice =
      direction === "long"
        ? entry * (1 - movePercent)
        : entry * (1 + movePercent);

    const distance = Math.abs(entry - liquidationPrice);
    const distancePercent = (distance / entry) * 100;

    return {
      liquidationPrice,
      distance,
      distancePercent,
    };
  }, [entryPrice, leverage, direction]);

  return (
    <CalculatorShell
      category="Trading"
      title="Liquidation Calculator"
      description="Estimate a simplified liquidation price based on entry price, leverage, and position direction."
    >
      <CalculatorGrid>
        <CalculatorCard
          title="Leveraged Position"
          description="This is a simplified educational estimate. Real exchange liquidation formulas can differ."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <CalculatorInput
              label="Entry Price"
              value={entryPrice}
              onChange={setEntryPrice}
              prefix="$"
            />

            <CalculatorInput
              label="Leverage"
              value={leverage}
              onChange={setLeverage}
              suffix="x"
              step="1"
            />
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Position Direction
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setDirection("long")}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  direction === "long"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 bg-white/70 text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
                }`}
              >
                Long
              </button>

              <button
                type="button"
                onClick={() => setDirection("short")}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  direction === "short"
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 bg-white/70 text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
                }`}
              >
                Short
              </button>
            </div>
          </div>
        </CalculatorCard>

        <CalculatorCard title="Estimated Result">
          {result ? (
            <div className="space-y-5">
              <MainResult
                label="Estimated Liquidation"
                value={formatCurrency(result.liquidationPrice)}
              />

              <ResultRow
                label="Price Distance"
                value={formatCurrency(result.distance)}
              />

              <ResultRow
                label="Distance %"
                value={`${formatNumber(result.distancePercent)}%`}
              />
            </div>
          ) : (
            <EmptyResult message="Enter an entry price and leverage greater than 1x." />
          )}
        </CalculatorCard>
      </CalculatorGrid>

      <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/70 p-5 text-sm leading-7 text-slate-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-slate-300">
        This calculator uses a simplified leverage-based estimate. Actual
        liquidation prices vary by exchange, maintenance margin, fees,
        funding, collateral type, and position settings.
      </div>
    </CalculatorShell>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 4,
  }).format(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(value);
}