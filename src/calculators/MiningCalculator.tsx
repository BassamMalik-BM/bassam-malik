import { useMemo, useState } from "react";

import CalculatorShell from "../components/calculators/CalculatorShell";
import CalculatorGrid from "../components/calculators/CalculatorGrid";
import CalculatorCard from "../components/calculators/CalculatorCard";
import CalculatorInput from "../components/calculators/CalculatorInput";
import MainResult from "../components/calculators/MainResult";
import ResultRow from "../components/calculators/ResultRow";
import EmptyResult from "../components/calculators/EmptyResult";

export default function MiningCalculator() {
  const [dailyRevenue, setDailyRevenue] = useState("8");
  const [powerWatts, setPowerWatts] = useState("1500");
  const [electricityCost, setElectricityCost] = useState("0.10");
  const [hardwareCost, setHardwareCost] = useState("2000");

  const result = useMemo(() => {
    const revenue = Number(dailyRevenue);
    const watts = Number(powerWatts);
    const electricity = Number(electricityCost);
    const hardware = Number(hardwareCost);

    if (
      revenue < 0 ||
      watts < 0 ||
      electricity < 0 ||
      hardware < 0
    ) {
      return null;
    }

    const dailyKwh = (watts * 24) / 1000;
    const dailyElectricityCost = dailyKwh * electricity;
    const dailyProfit = revenue - dailyElectricityCost;
    const monthlyProfit = dailyProfit * 30;
    const annualProfit = dailyProfit * 365;

    const breakEvenDays =
      dailyProfit > 0 ? hardware / dailyProfit : null;

    return {
      dailyKwh,
      dailyElectricityCost,
      dailyProfit,
      monthlyProfit,
      annualProfit,
      breakEvenDays,
    };
  }, [
    dailyRevenue,
    powerWatts,
    electricityCost,
    hardwareCost,
  ]);

  return (
    <CalculatorShell
      category="Crypto"
      title="Mining Profitability Calculator"
      description="Estimate basic mining profitability using expected revenue, power consumption, electricity cost, and hardware cost."
    >
      <CalculatorGrid>
        <CalculatorCard
          title="Mining Assumptions"
          description="Enter your estimated daily mining revenue and operating costs."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <CalculatorInput
              label="Daily Mining Revenue"
              value={dailyRevenue}
              onChange={setDailyRevenue}
              prefix="$"
            />

            <CalculatorInput
              label="Power Consumption"
              value={powerWatts}
              onChange={setPowerWatts}
              suffix="W"
            />

            <CalculatorInput
              label="Electricity Cost"
              value={electricityCost}
              onChange={setElectricityCost}
              prefix="$"
            />

            <CalculatorInput
              label="Hardware Cost"
              value={hardwareCost}
              onChange={setHardwareCost}
              prefix="$"
            />
          </div>
        </CalculatorCard>

        <CalculatorCard title="Result">
          {result ? (
            <div className="space-y-5">
              <MainResult
                label="Daily Profit"
                value={formatCurrency(result.dailyProfit)}
              />

              <ResultRow
                label="Daily Electricity"
                value={formatCurrency(
                  result.dailyElectricityCost,
                )}
              />

              <ResultRow
                label="Monthly Profit"
                value={formatCurrency(result.monthlyProfit)}
              />

              <ResultRow
                label="Annual Profit"
                value={formatCurrency(result.annualProfit)}
              />

              <ResultRow
                label="Daily Energy Use"
                value={`${formatNumber(result.dailyKwh)} kWh`}
              />

              <ResultRow
                label="Estimated Break Even"
                value={
                  result.breakEvenDays
                    ? `${Math.ceil(result.breakEvenDays)} days`
                    : "Not profitable"
                }
              />
            </div>
          ) : (
            <EmptyResult />
          )}
        </CalculatorCard>
      </CalculatorGrid>

      <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/70 p-5 text-sm leading-7 text-slate-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-slate-300">
        Mining revenue changes with cryptocurrency price, network difficulty,
        pool fees, hardware efficiency, uptime, and other factors. This is a
        simplified planning calculator.
      </div>
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