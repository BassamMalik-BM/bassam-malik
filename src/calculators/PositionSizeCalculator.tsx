import { useMemo, useState } from "react";

import CalculatorShell from "../components/calculators/CalculatorShell";
import CalculatorGrid from "../components/calculators/CalculatorGrid";
import CalculatorCard from "../components/calculators/CalculatorCard";
import CalculatorInput from "../components/calculators/CalculatorInput";
import MainResult from "../components/calculators/MainResult";
import ResultRow from "../components/calculators/ResultRow";
import EmptyResult from "../components/calculators/EmptyResult";

export default function PositionSizeCalculator() {
  const [accountSize, setAccountSize] = useState("10000");
  const [riskPercent, setRiskPercent] = useState("1");
  const [entryPrice, setEntryPrice] = useState("100");
  const [stopLossPrice, setStopLossPrice] = useState("95");

  const result = useMemo(() => {
    const account = Number(accountSize);
    const risk = Number(riskPercent);
    const entry = Number(entryPrice);
    const stop = Number(stopLossPrice);

    if (
      account <= 0 ||
      risk <= 0 ||
      entry <= 0 ||
      stop <= 0 ||
      entry === stop
    ) {
      return null;
    }

    const riskAmount = account * (risk / 100);
    const stopDistance = Math.abs(entry - stop);
    const stopDistancePercent = (stopDistance / entry) * 100;
    const positionUnits = riskAmount / stopDistance;
    const positionValue = positionUnits * entry;

    return {
      riskAmount,
      stopDistance,
      stopDistancePercent,
      positionUnits,
      positionValue,
    };
  }, [accountSize, riskPercent, entryPrice, stopLossPrice]);

  return (
    <CalculatorShell
      category="Risk Management"
      title="Position Size Calculator"
      description="Calculate an appropriate trade size based on account balance, risk percentage, entry price, and stop-loss price."
    >
      <CalculatorGrid>
        <CalculatorCard
          title="Trade Details"
          description="Enter the values you plan to use for your trade."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <CalculatorInput
              label="Account Size"
              value={accountSize}
              onChange={setAccountSize}
              prefix="$"
            />

            <CalculatorInput
              label="Risk Per Trade"
              value={riskPercent}
              onChange={setRiskPercent}
              suffix="%"
              step="0.1"
            />

            <CalculatorInput
              label="Entry Price"
              value={entryPrice}
              onChange={setEntryPrice}
              prefix="$"
            />

            <CalculatorInput
              label="Stop Loss Price"
              value={stopLossPrice}
              onChange={setStopLossPrice}
              prefix="$"
            />
          </div>
        </CalculatorCard>

        <CalculatorCard title="Result">
          {result ? (
            <div className="space-y-5">
              <MainResult
                label="Position Value"
                value={formatCurrency(result.positionValue)}
              />

              <ResultRow
                label="Risk Amount"
                value={formatCurrency(result.riskAmount)}
              />

              <ResultRow
                label="Position Units"
                value={formatNumber(result.positionUnits)}
              />

              <ResultRow
                label="Stop Distance"
                value={formatCurrency(result.stopDistance)}
              />

              <ResultRow
                label="Stop Distance %"
                value={`${formatNumber(result.stopDistancePercent)}%`}
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
    maximumFractionDigits: 4,
  }).format(value);
}