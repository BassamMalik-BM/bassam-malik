import { useMemo, useState } from "react";

import CalculatorShell from "../components/calculators/CalculatorShell";
import CalculatorGrid from "../components/calculators/CalculatorGrid";
import CalculatorCard from "../components/calculators/CalculatorCard";
import CalculatorInput from "../components/calculators/CalculatorInput";
import MainResult from "../components/calculators/MainResult";
import ResultRow from "../components/calculators/ResultRow";
import EmptyResult from "../components/calculators/EmptyResult";

export default function ProfitLossCalculator() {
  const [entryPrice, setEntryPrice] = useState("100");
  const [exitPrice, setExitPrice] = useState("110");
  const [quantity, setQuantity] = useState("10");

  const result = useMemo(() => {
    const entry = Number(entryPrice);
    const exit = Number(exitPrice);
    const qty = Number(quantity);

    if (entry <= 0 || exit <= 0 || qty <= 0) {
      return null;
    }

    const pnl = (exit - entry) * qty;
    const invested = entry * qty;
    const finalValue = exit * qty;
    const pnlPercent = ((exit - entry) / entry) * 100;

    return {
      pnl,
      invested,
      finalValue,
      pnlPercent,
    };
  }, [entryPrice, exitPrice, quantity]);

  return (
    <CalculatorShell
      category="Trading"
      title="Profit & Loss Calculator"
      description="Estimate the potential profit or loss of a position using entry price, exit price, and quantity."
    >
      <CalculatorGrid>
        <CalculatorCard
          title="Position Details"
          description="Enter your entry price, exit price, and number of units."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <CalculatorInput
              label="Entry Price"
              value={entryPrice}
              onChange={setEntryPrice}
              prefix="$"
            />

            <CalculatorInput
              label="Exit Price"
              value={exitPrice}
              onChange={setExitPrice}
              prefix="$"
            />

            <CalculatorInput
              label="Quantity"
              value={quantity}
              onChange={setQuantity}
            />
          </div>
        </CalculatorCard>

        <CalculatorCard title="Result">
          {result ? (
            <div className="space-y-5">
              <MainResult
                label={result.pnl >= 0 ? "Estimated Profit" : "Estimated Loss"}
                value={formatCurrency(result.pnl)}
              />

              <ResultRow
                label="Initial Value"
                value={formatCurrency(result.invested)}
              />

              <ResultRow
                label="Final Value"
                value={formatCurrency(result.finalValue)}
              />

              <ResultRow
                label="P/L %"
                value={`${formatNumber(result.pnlPercent)}%`}
              />
            </div>
          ) : (
            <EmptyResult />
          )}
        </CalculatorCard>
      </CalculatorGrid>
    </CalculatorShell>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(value);
}