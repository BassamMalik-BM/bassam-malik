import { useMemo, useState } from "react";

import CalculatorShell from "../components/calculators/CalculatorShell";
import CalculatorGrid from "../components/calculators/CalculatorGrid";
import CalculatorCard from "../components/calculators/CalculatorCard";
import CalculatorInput from "../components/calculators/CalculatorInput";
import MainResult from "../components/calculators/MainResult";
import ResultRow from "../components/calculators/ResultRow";
import EmptyResult from "../components/calculators/EmptyResult";

export default function RiskRewardCalculator() {
  const [entryPrice, setEntryPrice] = useState("100");
  const [stopLoss, setStopLoss] = useState("95");
  const [targetPrice, setTargetPrice] = useState("110");

  const result = useMemo(() => {
    const entry = Number(entryPrice);
    const stop = Number(stopLoss);
    const target = Number(targetPrice);

    if (entry <= 0 || stop <= 0 || target <= 0 || entry === stop) {
      return null;
    }

    const risk = Math.abs(entry - stop);
    const reward = Math.abs(target - entry);

    if (risk === 0) return null;

    const ratio = reward / risk;
    const riskPercent = (risk / entry) * 100;
    const rewardPercent = (reward / entry) * 100;

    return {
      risk,
      reward,
      ratio,
      riskPercent,
      rewardPercent,
    };
  }, [entryPrice, stopLoss, targetPrice]);

  return (
    <CalculatorShell
      category="Risk Management"
      title="Risk/Reward Calculator"
      description="Compare the potential risk and reward of a trade using your entry, stop loss, and profit target."
    >
      <CalculatorGrid>
        <CalculatorCard
          title="Trade Setup"
          description="Enter the planned entry, stop loss, and target price."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <CalculatorInput
              label="Entry Price"
              value={entryPrice}
              onChange={setEntryPrice}
              prefix="$"
            />

            <CalculatorInput
              label="Stop Loss"
              value={stopLoss}
              onChange={setStopLoss}
              prefix="$"
            />

            <CalculatorInput
              label="Target Price"
              value={targetPrice}
              onChange={setTargetPrice}
              prefix="$"
            />
          </div>
        </CalculatorCard>

        <CalculatorCard title="Result">
          {result ? (
            <div className="space-y-5">
              <MainResult
                label="Risk / Reward"
                value={`1 : ${formatNumber(result.ratio)}`}
              />

              <ResultRow
                label="Risk"
                value={formatCurrency(result.risk)}
              />

              <ResultRow
                label="Reward"
                value={formatCurrency(result.reward)}
              />

              <ResultRow
                label="Risk %"
                value={`${formatNumber(result.riskPercent)}%`}
              />

              <ResultRow
                label="Reward %"
                value={`${formatNumber(result.rewardPercent)}%`}
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