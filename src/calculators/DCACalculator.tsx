import { useMemo, useState } from "react";

import CalculatorShell from "../components/calculators/CalculatorShell";
import CalculatorGrid from "../components/calculators/CalculatorGrid";
import CalculatorCard from "../components/calculators/CalculatorCard";
import CalculatorInput from "../components/calculators/CalculatorInput";
import MainResult from "../components/calculators/MainResult";
import ResultRow from "../components/calculators/ResultRow";
import EmptyResult from "../components/calculators/EmptyResult";

export default function DCACalculator() {
  const [initialInvestment, setInitialInvestment] = useState("1000");
  const [monthlyInvestment, setMonthlyInvestment] = useState("200");
  const [annualReturn, setAnnualReturn] = useState("8");
  const [years, setYears] = useState("5");

  const result = useMemo(() => {
    const initial = Number(initialInvestment);
    const monthly = Number(monthlyInvestment);
    const rate = Number(annualReturn);
    const duration = Number(years);

    if (
      initial < 0 ||
      monthly < 0 ||
      duration <= 0 ||
      rate <= -100
    ) {
      return null;
    }

    const months = duration * 12;
    const monthlyRate = rate / 100 / 12;

    let value = initial;

    for (let month = 0; month < months; month++) {
      value *= 1 + monthlyRate;
      value += monthly;
    }

    const contributed = initial + monthly * months;
    const growth = value - contributed;

    return {
      value,
      contributed,
      growth,
      months,
    };
  }, [
    initialInvestment,
    monthlyInvestment,
    annualReturn,
    years,
  ]);

  return (
    <CalculatorShell
      category="Investing"
      title="DCA Calculator"
      description="Estimate how recurring monthly investments could accumulate over time using an assumed annual return."
    >
      <CalculatorGrid>
        <CalculatorCard
          title="Investment Details"
          description="Enter your starting investment, monthly contribution, return assumption, and time horizon."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <CalculatorInput
              label="Initial Investment"
              value={initialInvestment}
              onChange={setInitialInvestment}
              prefix="$"
            />

            <CalculatorInput
              label="Monthly Investment"
              value={monthlyInvestment}
              onChange={setMonthlyInvestment}
              prefix="$"
            />

            <CalculatorInput
              label="Annual Return"
              value={annualReturn}
              onChange={setAnnualReturn}
              suffix="%"
              step="0.1"
              min="-99"
            />

            <CalculatorInput
              label="Years"
              value={years}
              onChange={setYears}
              step="1"
            />
          </div>
        </CalculatorCard>

        <CalculatorCard title="Result">
          {result ? (
            <div className="space-y-5">
              <MainResult
                label="Estimated Value"
                value={formatCurrency(result.value)}
              />

              <ResultRow
                label="Total Contributed"
                value={formatCurrency(result.contributed)}
              />

              <ResultRow
                label="Estimated Growth"
                value={formatCurrency(result.growth)}
              />

              <ResultRow
                label="Investment Period"
                value={`${result.months} months`}
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