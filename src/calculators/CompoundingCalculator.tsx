import { useMemo, useState } from "react";

import CalculatorShell from "../components/calculators/CalculatorShell";
import CalculatorGrid from "../components/calculators/CalculatorGrid";
import CalculatorCard from "../components/calculators/CalculatorCard";
import CalculatorInput from "../components/calculators/CalculatorInput";
import MainResult from "../components/calculators/MainResult";
import ResultRow from "../components/calculators/ResultRow";
import EmptyResult from "../components/calculators/EmptyResult";

export default function CompoundingCalculator() {
  const [principal, setPrincipal] = useState("5000");
  const [annualRate, setAnnualRate] = useState("8");
  const [years, setYears] = useState("10");
  const [compoundsPerYear, setCompoundsPerYear] = useState("12");

  const result = useMemo(() => {
    const p = Number(principal);
    const rate = Number(annualRate);
    const duration = Number(years);
    const compounds = Number(compoundsPerYear);

    if (
      p < 0 ||
      duration <= 0 ||
      compounds <= 0 ||
      rate <= -100
    ) {
      return null;
    }

    const finalValue =
      p *
      Math.pow(
        1 + rate / 100 / compounds,
        compounds * duration,
      );

    const growth = finalValue - p;

    return {
      finalValue,
      growth,
    };
  }, [principal, annualRate, years, compoundsPerYear]);

  return (
    <CalculatorShell
      category="Investing"
      title="Compounding Calculator"
      description="Estimate how an investment could grow when returns are repeatedly reinvested over time."
    >
      <CalculatorGrid>
        <CalculatorCard
          title="Growth Assumptions"
          description="Enter the starting amount, annual return, duration, and compounding frequency."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <CalculatorInput
              label="Starting Amount"
              value={principal}
              onChange={setPrincipal}
              prefix="$"
            />

            <CalculatorInput
              label="Annual Return"
              value={annualRate}
              onChange={setAnnualRate}
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

            <CalculatorInput
              label="Compounds Per Year"
              value={compoundsPerYear}
              onChange={setCompoundsPerYear}
              step="1"
            />
          </div>
        </CalculatorCard>

        <CalculatorCard title="Result">
          {result ? (
            <div className="space-y-5">
              <MainResult
                label="Estimated Value"
                value={formatCurrency(result.finalValue)}
              />

              <ResultRow
                label="Starting Amount"
                value={formatCurrency(Number(principal))}
              />

              <ResultRow
                label="Estimated Growth"
                value={formatCurrency(result.growth)}
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