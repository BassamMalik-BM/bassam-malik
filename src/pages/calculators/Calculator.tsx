import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calculator as CalculatorIcon } from "lucide-react";

const buttons = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+",
];

export default function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (value: string) => {
    if (value === "=") {
      try {
        const sanitized = display.replace(/[^0-9+\-*/.()]/g, "");
        const result = Function(`"use strict"; return (${sanitized})`)();

        if (Number.isFinite(result)) {
          setDisplay(String(result));
        } else {
          setDisplay("Error");
        }
      } catch {
        setDisplay("Error");
      }

      return;
    }

    if (display === "Error") {
      setDisplay(value);
      return;
    }

    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const deleteLast = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  return (
    <main className="section-padding">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl"
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
              Calculator
            </h1>

            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Use this simple calculator for quick trading-related calculations.
            </p>
          </div>

          <section className="premium-card">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                <CalculatorIcon size={26} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                  Basic Calculator
                </h2>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Add, subtract, multiply, and divide.
                </p>
              </div>
            </div>

            <div className="mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-right text-3xl font-bold text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white">
              {display || "0"}
            </div>

            <div className="mb-3 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={clearDisplay}
                className="rounded-2xl bg-red-100 px-4 py-3 font-semibold text-red-700 transition hover:bg-red-200 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20"
              >
                Clear
              </button>

              <button
                type="button"
                onClick={deleteLast}
                className="rounded-2xl bg-slate-100 px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/20"
              >
                Delete
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {buttons.map((button) => (
                <button
                  key={button}
                  type="button"
                  onClick={() => handleClick(button)}
                  className={`rounded-2xl px-4 py-4 text-lg font-bold transition ${
                    button === "="
                      ? "bg-emerald-500 text-white hover:bg-emerald-600"
                      : ["+", "-", "*", "/"].includes(button)
                      ? "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:hover:bg-blue-500/20"
                      : "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                  }`}
                >
                  {button}
                </button>
              ))}
            </div>
          </section>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-blue-900 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-100">
            This calculator is for simple arithmetic only. Use the dedicated calculators for risk, reward, profit, and growth estimates.
          </div>
        </motion.div>
      </div>
    </main>
  );
}