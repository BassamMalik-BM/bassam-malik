import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, TrendingUp } from "lucide-react";

export default function CompoundGrowthCalculator() {
  const [startingAmount, setStartingAmount] = useState("");
  const [monthlyContribution, setMonthlyContribution] = useState("0");
  const [monthlyGrowth, setMonthlyGrowth] = useState("");
  const [months, setMonths] = useState("");

  const result = useMemo(() => {
    const start = Number(startingAmount);
    const contribution = Number(monthlyContribution);
    const growth = Number(monthlyGrowth);
    const totalMonths = Number(months);

    if (!start || !growth || !totalMonths) {
      return null;
    }

    let portfolio = start;
    let invested = start;

    for (let i = 0; i < totalMonths; i++) {
      portfolio += contribution;
      invested += contribution;

      portfolio *= 1 + growth / 100;
    }

    const profit = portfolio - invested;
    const growthPercent = (profit / invested) * 100;

    return {
      portfolio,
      invested,
      profit,
      growthPercent,
    };
  }, [startingAmount, monthlyContribution, monthlyGrowth, months]);

  return (
    <main className="section-padding">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <Link
            to="/calculators"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
          >
            <ArrowLeft size={18} />
            Back to Calculators
          </Link>

          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
              Crypto Trading Calculator
            </p>

            <h1 className="text-4xl font-bold text-slate-950 dark:text-white">
              Compound Growth Calculator
            </h1>

            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Estimate how steady growth and regular contributions may affect
              your portfolio over time.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <section className="premium-card space-y-5">
              <InputField
                label="Starting Amount"
                value={startingAmount}
                onChange={setStartingAmount}
                placeholder="Example: 1000"
              />

              <InputField
                label="Monthly Contribution (Optional)"
                value={monthlyContribution}
                onChange={setMonthlyContribution}
                placeholder="Example: 100"
              />

              <InputField
                label="Monthly Growth (%)"
                value={monthlyGrowth}
                onChange={setMonthlyGrowth}
                placeholder="Example: 5"
              />

              <InputField
                label="Number of Months"
                value={months}
                onChange={setMonths}
                placeholder="Example: 12"
              />
            </section>

            <section className="premium-card">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <TrendingUp size={26} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                    Result
                  </h2>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Your estimated portfolio growth.
                  </p>
                </div>
              </div>

              {result ? (
                <div className="space-y-4">
                  <ResultItem
                    label="Final Portfolio Value"
                    value={`$${result.portfolio.toFixed(2)}`}
                  />

                  <ResultItem
                    label="Total Invested"
                    value={`$${result.invested.toFixed(2)}`}
                  />

                  <ResultItem
                    label="Estimated Profit"
                    value={`$${result.profit.toFixed(2)}`}
                  />

                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-500/20 dark:bg-emerald-500/10">
                    <p className="text-sm text-emerald-700 dark:text-emerald-300">
                      Estimated Growth
                    </p>

                    <strong className="mt-2 block text-3xl text-emerald-700 dark:text-emerald-300">
                      {result.growthPercent.toFixed(2)}%
                    </strong>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
                  Enter values to estimate portfolio growth.
                </div>
              )}
            </section>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-100">
            This calculator provides estimated growth for educational purposes
            only and does not predict future market performance.
          </div>
        </motion.div>
      </div>
    </main>
  );
}

type InputFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

function InputField({
  label,
  value,
  placeholder,
  onChange,
}: InputFieldProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
      {label}

      <input
        type="number"
        min="0"
        step="any"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="input-field"
      />
    </label>
  );
}

function ResultItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
      <span className="text-sm text-slate-500 dark:text-slate-400">
        {label}
      </span>

      <strong className="text-lg text-slate-950 dark:text-white">
        {value}
      </strong>
    </div>
  );
}