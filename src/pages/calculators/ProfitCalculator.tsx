import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ProfitCalculator() {
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [investment, setInvestment] = useState("");
  const [feePercent, setFeePercent] = useState("0");

  const result = useMemo(() => {
    const buy = Number(buyPrice);
    const sell = Number(sellPrice);
    const amount = Number(investment);
    const fee = Number(feePercent);

    if (!buy || !sell || !amount) {
      return null;
    }

    const coinsBought = amount / buy;
    const grossFinalValue = coinsBought * sell;

    const feeCost = grossFinalValue * (fee / 100);
    const finalValue = grossFinalValue - feeCost;

    const profitLoss = finalValue - amount;
    const percentage = (profitLoss / amount) * 100;

    return {
      feeCost,
      finalValue,
      profitLoss,
      percentage,
      isProfit: profitLoss >= 0,
    };
  }, [buyPrice, sellPrice, investment, feePercent]);

  return (
    <main className="section-padding">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl"
        >
          <Link to="/calculators"
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
              Profit Calculator
            </h1>

            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Estimate possible profit or loss after buying and selling crypto.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <section className="premium-card space-y-5">
              <InputField
                label="Buy Price"
                value={buyPrice}
                onChange={setBuyPrice}
                placeholder="Example: 60000"
              />

              <InputField
                label="Sell Price"
                value={sellPrice}
                onChange={setSellPrice}
                placeholder="Example: 65000"
              />

              <InputField
                label="Investment Amount"
                value={investment}
                onChange={setInvestment}
                placeholder="Example: 1000"
              />

              <InputField
                label="Trading Fee (%) Optional"
                value={feePercent}
                onChange={setFeePercent}
                placeholder="Example: 0.1"
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
                    Your estimated profit or loss.
                  </p>
                </div>
              </div>

              {result ? (
                <div className="space-y-4">
                  <ResultItem
                    label="Final Value"
                    value={`$${result.finalValue.toFixed(2)}`}
                  />

                  <ResultItem
                    label="Fee Cost"
                    value={`$${result.feeCost.toFixed(2)}`}
                  />

                  <ResultItem
                    label="Profit / Loss Percentage"
                    value={`${result.percentage.toFixed(2)}%`}
                  />

                  <div
                    className={`rounded-2xl border p-5 ${
                      result.isProfit
                        ? "border-emerald-200 bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/10"
                        : "border-red-200 bg-red-50 dark:border-red-500/20 dark:bg-red-500/10"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        result.isProfit
                          ? "text-emerald-700 dark:text-emerald-300"
                          : "text-red-700 dark:text-red-300"
                      }`}
                    >
                      Estimated Profit / Loss
                    </p>

                    <strong
                      className={`mt-2 block text-3xl ${
                        result.isProfit
                          ? "text-emerald-700 dark:text-emerald-300"
                          : "text-red-700 dark:text-red-300"
                      }`}
                    >
                      {result.isProfit ? "+" : "-"}$
                      {Math.abs(result.profitLoss).toFixed(2)}
                    </strong>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
                  Enter values to estimate profit or loss.
                </div>
              )}
            </section>
          </div>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-100">
            This calculator is for educational purposes only and does not guarantee any outcome.
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