import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  RotateCcw,
  Star,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";

type TradeResult = "Win" | "Loss" | "Break Even";
type Confidence = "Low" | "Medium" | "High";

type JournalEntry = {
  id: string;
  date: string;
  asset: string;
  buyPrice: string;
  sellPrice: string;
  tradeResult: TradeResult;
  confidence: Confidence;
  rating: string;
  reason: string;
  emotion: string;
  outcome: string;
  lesson: string;
};

const storageKey = "bassam-trading-journal-v2";

const emptyEntry = {
  date: "",
  asset: "",
  buyPrice: "",
  sellPrice: "",
  tradeResult: "Win" as TradeResult,
  confidence: "Medium" as Confidence,
  rating: "7",
  reason: "",
  emotion: "",
  outcome: "",
  lesson: "",
};

export default function TradingJournalTemplate() {
  const [formData, setFormData] = useState(emptyEntry);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [showResetModal, setShowResetModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(entries));
  }, [entries]);

  const stats = useMemo(() => {
    const total = entries.length;
    const wins = entries.filter((entry) => entry.tradeResult === "Win").length;
    const losses = entries.filter((entry) => entry.tradeResult === "Loss").length;
    const breakEven = entries.filter(
      (entry) => entry.tradeResult === "Break Even"
    ).length;

    const averageRating =
      total > 0
        ? entries.reduce((sum, entry) => sum + Number(entry.rating || 0), 0) /
          total
        : 0;

    return {
      total,
      wins,
      losses,
      breakEven,
      averageRating,
    };
  }, [entries]);

  const estimatedProfitLoss = useMemo(() => {
    const buy = Number(formData.buyPrice);
    const sell = Number(formData.sellPrice);

    if (!buy || !sell) return null;

    const difference = sell - buy;
    const percent = (difference / buy) * 100;

    return {
      difference,
      percent,
      isProfit: difference >= 0,
    };
  }, [formData.buyPrice, formData.sellPrice]);

  const updateField = <K extends keyof typeof emptyEntry>(
    field: K,
    value: (typeof emptyEntry)[K]
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const addEntry = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.date || !formData.asset || !formData.reason) {
      alert("Please fill date, asset, and reason before saving.");
      return;
    }

    const newEntry: JournalEntry = {
      id: crypto.randomUUID(),
      ...formData,
    };

    setEntries((current) => [newEntry, ...current]);
    setFormData(emptyEntry);
  };

  const confirmDelete = () => {
    if (!deleteId) return;

    setEntries((current) => current.filter((entry) => entry.id !== deleteId));
    setDeleteId(null);
  };

  const resetJournal = () => {
    setEntries([]);
    setShowResetModal(false);
  };

  return (
    <main className="section-padding">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            to="/resources"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-300"
          >
            <ArrowLeft size={18} />
            Back to Resources
          </Link>

          <section className="premium-card mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
              Interactive Trading Tool
            </p>

            <h1 className="text-4xl font-bold text-slate-950 dark:text-white">
              Trading Journal Template
            </h1>

            <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
              Track your decisions, emotions, results, and lessons so you can
              improve with structure instead of guessing.
            </p>
          </section>

          <section className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <StatCard label="Total Entries" value={String(stats.total)} />
            <StatCard label="Wins" value={String(stats.wins)} tone="positive" />
            <StatCard label="Losses" value={String(stats.losses)} tone="negative" />
            <StatCard label="Break Even" value={String(stats.breakEven)} />
            <StatCard
              label="Avg. Discipline"
              value={`${stats.averageRating.toFixed(1)}/10`}
            />
          </section>

          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <form onSubmit={addEntry} className="premium-card space-y-5">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300">
                  <BookOpen size={26} />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                    Add Journal Entry
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Save the details that matter most.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <InputField
                  label="Date"
                  type="date"
                  value={formData.date}
                  onChange={(value) => updateField("date", value)}
                />

                <InputField
                  label="Asset / Coin"
                  value={formData.asset}
                  onChange={(value) => updateField("asset", value)}
                  placeholder="Example: BTC"
                />

                <InputField
                  label="Buy Price"
                  value={formData.buyPrice}
                  onChange={(value) => updateField("buyPrice", value)}
                  placeholder="Example: 65000"
                />

                <InputField
                  label="Sell Price"
                  value={formData.sellPrice}
                  onChange={(value) => updateField("sellPrice", value)}
                  placeholder="Example: 68000"
                />

                <SelectField
                  label="Trade Result"
                  value={formData.tradeResult}
                  onChange={(value) =>
                    updateField("tradeResult", value as TradeResult)
                  }
                  options={["Win", "Loss", "Break Even"]}
                />

                <SelectField
                  label="Confidence Before Decision"
                  value={formData.confidence}
                  onChange={(value) =>
                    updateField("confidence", value as Confidence)
                  }
                  options={["Low", "Medium", "High"]}
                />
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
                How well did you follow your plan? ({formData.rating}/10)
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.rating}
                  onChange={(event) => updateField("rating", event.target.value)}
                  className="accent-emerald-500"
                />
              </label>

              {estimatedProfitLoss && (
                <div
                  className={`rounded-2xl border p-4 ${
                    estimatedProfitLoss.isProfit
                      ? "border-emerald-200 bg-emerald-50 dark:border-emerald-500/20 dark:bg-emerald-500/10"
                      : "border-red-200 bg-red-50 dark:border-red-500/20 dark:bg-red-500/10"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold ${
                      estimatedProfitLoss.isProfit
                        ? "text-emerald-700 dark:text-emerald-300"
                        : "text-red-700 dark:text-red-300"
                    }`}
                  >
                    Estimated price change:{" "}
                    {estimatedProfitLoss.isProfit ? "+" : ""}
                    {estimatedProfitLoss.difference.toFixed(2)} (
                    {estimatedProfitLoss.percent.toFixed(2)}%)
                  </p>
                </div>
              )}

              <TextArea
                label="Why did you enter?"
                value={formData.reason}
                onChange={(value) => updateField("reason", value)}
                placeholder="Example: price reacted from support and volume increased..."
              />

              <TextArea
                label="Emotion before decision"
                value={formData.emotion}
                onChange={(value) => updateField("emotion", value)}
                placeholder="Example: calm, nervous, rushed, confident..."
              />

              <TextArea
                label="Outcome"
                value={formData.outcome}
                onChange={(value) => updateField("outcome", value)}
                placeholder="Example: small profit, small loss, exited early..."
              />

              <TextArea
                label="Lesson learned"
                value={formData.lesson}
                onChange={(value) => updateField("lesson", value)}
                placeholder="Example: wait for confirmation before buying..."
              />

              <button type="submit" className="button-primary w-full">
                Save Journal Entry
              </button>
            </form>

            <section className="premium-card">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-950 dark:text-white">
                    Saved Entries
                  </h2>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Saved locally on this device.
                  </p>
                </div>

                {entries.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowResetModal(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300 dark:hover:bg-red-500/20"
                  >
                    <RotateCcw size={16} />
                    Clear All
                  </button>
                )}
              </div>

              <div className="mt-6 space-y-4">
                {entries.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
                    No journal entries yet. Add your first entry to begin.
                  </div>
                ) : (
                  entries.map((entry) => (
                    <article
                      key={entry.id}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="mb-2 flex flex-wrap items-center gap-2">
                            <h3 className="font-bold text-slate-950 dark:text-white">
                              {entry.asset}
                            </h3>
                            <ResultBadge result={entry.tradeResult} />
                          </div>

                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {entry.date}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => setDeleteId(entry.id)}
                          className="rounded-xl p-2 text-red-600 transition hover:bg-red-50 dark:text-red-300 dark:hover:bg-red-500/10"
                          aria-label="Delete journal entry"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="mt-4 grid gap-3 text-sm">
                        <div className="grid gap-3 sm:grid-cols-2">
                          {entry.buyPrice && (
                            <InfoRow label="Buy" value={entry.buyPrice} />
                          )}
                          {entry.sellPrice && (
                            <InfoRow label="Sell" value={entry.sellPrice} />
                          )}
                          <InfoRow label="Confidence" value={entry.confidence} />
                          <InfoRow label="Rating" value={`${entry.rating}/10`} />
                        </div>

                        <InfoRow label="Reason" value={entry.reason} />
                        {entry.emotion && (
                          <InfoRow label="Emotion" value={entry.emotion} />
                        )}
                        {entry.outcome && (
                          <InfoRow label="Outcome" value={entry.outcome} />
                        )}
                        {entry.lesson && (
                          <InfoRow label="Lesson" value={entry.lesson} />
                        )}
                      </div>
                    </article>
                  ))
                )}
              </div>
            </section>
          </div>
        </motion.div>
      </div>

      {(deleteId || showResetModal) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-slate-950"
          >
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
              {showResetModal ? "Clear all entries?" : "Delete entry?"}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {showResetModal
                ? "Are you sure you want to clear all journal entries? This action cannot be undone."
                : "Are you sure you want to delete this journal entry? This action cannot be undone."}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  setDeleteId(null);
                  setShowResetModal(false);
                }}
                className="rounded-2xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={showResetModal ? resetJournal : confirmDelete}
                className="rounded-2xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                {showResetModal ? "Clear All" : "Delete"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}

function StatCard({
  label,
  value,
  tone = "neutral",
}: {
  label: string;
  value: string;
  tone?: "neutral" | "positive" | "negative";
}) {
  const toneClass =
    tone === "positive"
      ? "text-emerald-600 dark:text-emerald-300"
      : tone === "negative"
      ? "text-red-600 dark:text-red-300"
      : "text-slate-950 dark:text-white";

  return (
    <div className="premium-card">
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <p className={`mt-2 text-3xl font-bold ${toneClass}`}>{value}</p>
    </div>
  );
}

function ResultBadge({ result }: { result: TradeResult }) {
  const classes =
    result === "Win"
      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300"
      : result === "Loss"
      ? "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-300"
      : "bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-slate-300";

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold ${classes}`}>
      {result}
    </span>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="input-field"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="input-field"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        rows={3}
        className="input-field resize-none"
      />
    </label>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="font-semibold text-slate-700 dark:text-slate-200">
        {label}:{" "}
      </span>
      <span className="text-slate-600 dark:text-slate-300">{value}</span>
    </div>
  );
}