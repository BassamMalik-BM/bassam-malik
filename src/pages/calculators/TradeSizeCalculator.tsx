import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TradeSizeCalculator() {
  const [accountBalance, setAccountBalance] = useState("");
  const [riskPercent, setRiskPercent] = useState("1");
  const [entryPrice, setEntryPrice] = useState("");
  const [stopPrice, setStopPrice] = useState("");

  const result = useMemo(() => {
    const balance = Number(accountBalance);
    const risk = Number(riskPercent);
    const entry = Number(entryPrice);
    const stop = Number(stopPrice);

    if (!balance || !risk || !entry || !stop || entry === stop) {
      return null;
    }

    const riskAmount = balance * (risk / 100);
    const priceDifference = Math.abs(entry - stop);
    const units = riskAmount / priceDifference;
    const tradeValue = units * entry;

    return {
      riskAmount,
      priceDifference,
      units,
      tradeValue,
    };
  }, [accountBalance, riskPercent, entryPrice, stopPrice]);

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
              Trade Size Calculator
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Estimate trade size based on your account balance, risk percentage, entry price, and stop level.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <section className="premium-card space-y-5">
              <InputField
                label="Account Balance"
                value={accountBalance}
                onChange={setAccountBalance}
                placeholder="Example: 1000"
              />

              <InputField
                label="Risk Per Trade (%)"
                value={riskPercent}
                onChange={setRiskPercent}
                placeholder="Example: 1"
              />

              <InputField
                label="Entry Price"
                value={entryPrice}
                onChange={setEntryPrice}
                placeholder="Example: 65000"
              />

              <InputField
                label="Stop Level"
                value={stopPrice}
                onChange={setStopPrice}
                placeholder="Example: 64000"
              />
            </section>

            <section className="premium-card">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                    Result
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Your estimated trade planning numbers.
                  </p>
                </div>
              </div>

              {result ? (
                <div className="space-y-4">
                  <ResultItem label="Amount at Risk" value={`$${result.riskAmount.toFixed(2)}`} />
                  <ResultItem label="Price Difference" value={`$${result.priceDifference.toFixed(2)}`} />
                  <ResultItem label="Estimated Units" value={result.units.toFixed(6)} />
                  <ResultItem label="Estimated Trade Value" value={`$${result.tradeValue.toFixed(2)}`} />
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
                  Enter your values to see the result. This calculator is for educational planning only.
                </div>
              )}
            </section>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-100">
            This tool does not predict market direction. It only helps you estimate risk before making a buy or sell decision.
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

function InputField({ label, value, placeholder, onChange }: InputFieldProps) {
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

function ResultItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
      <span className="text-sm text-slate-500 dark:text-slate-400">{label}</span>
      <strong className="text-lg text-slate-950 dark:text-white">{value}</strong>
    </div>
  );
}