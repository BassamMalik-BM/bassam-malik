import { useMemo, useState } from "react";

import CalculatorShell from "../components/calculators/CalculatorShell";
import CalculatorGrid from "../components/calculators/CalculatorGrid";
import CalculatorCard from "../components/calculators/CalculatorCard";
import CalculatorInput from "../components/calculators/CalculatorInput";
import MainResult from "../components/calculators/MainResult";
import ResultRow from "../components/calculators/ResultRow";
import EmptyResult from "../components/calculators/EmptyResult";

export default function PercentageCalculator() {
  const [oldValue, setOldValue] = useState("100");
  const [newValue, setNewValue] = useState("125");

  const result = useMemo(() => {
    const oldNumber = Number(oldValue);
    const newNumber = Number(newValue);

    if (oldNumber === 0 || !Number.isFinite(oldNumber) || !Number.isFinite(newNumber)) {
      return null;
    }

    const difference = newNumber - oldNumber;
    const percentageChange = (difference / Math.abs(oldNumber)) * 100;

    return {
      difference,
      percentageChange,
    };
  }, [oldValue, newValue]);

  return (
    <CalculatorShell
      category="Trading"
      title="Percentage Calculator"
      description="Calculate the percentage change between an original value and a new value."
    >
      <CalculatorGrid>
        <CalculatorCard
          title="Values"
          description="Enter the original value and the new value."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <CalculatorInput
              label="Original Value"
              value={oldValue}
              onChange={setOldValue}
              min="-999999999"
            />

            <CalculatorInput
              label="New Value"
              value={newValue}
              onChange={setNewValue}
              min="-999999999"
            />
          </div>
        </CalculatorCard>

        <CalculatorCard title="Result">
          {result ? (
            <div className="space-y-5">
              <MainResult
                label="Percentage Change"
                value={`${formatNumber(result.percentageChange)}%`}
              />

              <ResultRow
                label="Difference"
                value={formatNumber(result.difference)}
              />

              <ResultRow
                label="Direction"
                value={
                  result.difference > 0
                    ? "Increase"
                    : result.difference < 0
                      ? "Decrease"
                      : "No Change"
                }
              />
            </div>
          ) : (
            <EmptyResult message="The original value cannot be zero." />
          )}
        </CalculatorCard>
      </CalculatorGrid>
    </CalculatorShell>
  );
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 4,
  }).format(value);
}