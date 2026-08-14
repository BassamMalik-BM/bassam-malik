import { useMemo, useState } from "react";

import CalculatorShell from "../components/calculators/CalculatorShell";
import CalculatorGrid from "../components/calculators/CalculatorGrid";
import CalculatorCard from "../components/calculators/CalculatorCard";
import CalculatorInput from "../components/calculators/CalculatorInput";
import MainResult from "../components/calculators/MainResult";
import ResultRow from "../components/calculators/ResultRow";
import EmptyResult from "../components/calculators/EmptyResult";

export default function StakingCalculator() {
  const [amount, setAmount] = useState("1000");
  const [annualRate, setAnnualRate] = useState("5");
  const [days, setDays] = useState("365");

  const result = useMemo(() => {
    const principal = Number(amount);
    const rate = Number(annualRate);
    const duration = Number(days);

    if (principal < 0 || rate < 0 || duration <= 0) {
      return null;
    }

    const rewards =
      principal * (rate / 100) * (duration / 365);

    const total = principal + rewards;

    return {
      rewards,
      total,
    };
  }, [amount, annualRate, days]);

  return (
    <CalculatorShell
      category="Crypto"
      title="Staking Calculator"
      description="Estimate potential staking rewards based on the amount staked, annual reward rate, and staking period."
    >
      <CalculatorGrid>
        <CalculatorCard
          title="Staking Details"
          description="Enter the amount, estimated annual reward rate, and staking duration."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <CalculatorInput
              label="Amount Staked"
              value={amount}
              onChange={setAmount}
            />

            <CalculatorInput
              label="Annual Reward Rate"
              value={annualRate}
              onChange={setAnnualRate}
              suffix="%"
              step="0.1"
            />

            <CalculatorInput
              label="Staking Period"
              value={days}
              onChange={setDays}
              suffix="days"
              step="1"
            />
          </div>
        </CalculatorCard>

        <CalculatorCard title="Result">
          {result ? (
            <div className="space-y-5">
              <MainResult
                label="Estimated Rewards"
                value={formatNumber(result.rewards)}
              />

              <ResultRow
                label="Starting Amount"
                value={formatNumber(Number(amount))}
              />

              <ResultRow
                label="Estimated Total"
                value={formatNumber(result.total)}
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

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 6,
  }).format(value);
}