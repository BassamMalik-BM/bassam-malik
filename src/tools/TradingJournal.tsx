import { useMemo, useState } from "react";

import ToolShell from "../components/tools/ToolShell";
import ToolCard from "../components/tools/ToolCard";
import ToolInput from "../components/tools/ToolInput";
import ToolSelect from "../components/tools/ToolSelect";
import ToolTextarea from "../components/tools/ToolTextarea";
import ToolStat from "../components/tools/ToolStat";
import EmptyToolState from "../components/tools/EmptyToolState";

type TradeDirection = "Long" | "Short";
type TradeOutcome = "Win" | "Loss" | "Breakeven";

type JournalEntry = {
  id: number;
  asset: string;
  direction: TradeDirection;
  entryPrice: string;
  exitPrice: string;
  quantity: string;
  date: string;
  setup: string;
  reason: string;
  emotion: string;
  lesson: string;
  outcome: TradeOutcome;
};

export default function TradingJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  const [asset, setAsset] = useState("");
  const [direction, setDirection] = useState<TradeDirection>("Long");
  const [entryPrice, setEntryPrice] = useState("");
  const [exitPrice, setExitPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [setup, setSetup] = useState("");
  const [reason, setReason] = useState("");
  const [emotion, setEmotion] = useState("");
  const [lesson, setLesson] = useState("");
  const [outcome, setOutcome] = useState<TradeOutcome>("Win");

  const stats = useMemo(() => {
    const totalTrades = entries.length;
    const wins = entries.filter((entry) => entry.outcome === "Win").length;
    const losses = entries.filter((entry) => entry.outcome === "Loss").length;
    const breakeven = entries.filter(
      (entry) => entry.outcome === "Breakeven",
    ).length;

    const winRate =
      totalTrades > 0 ? (wins / totalTrades) * 100 : 0;

    return {
      totalTrades,
      wins,
      losses,
      breakeven,
      winRate,
    };
  }, [entries]);

  function addEntry() {
    if (!asset.trim() || !date) return;

    const newEntry: JournalEntry = {
      id: Date.now(),
      asset: asset.trim(),
      direction,
      entryPrice,
      exitPrice,
      quantity,
      date,
      setup: setup.trim(),
      reason: reason.trim(),
      emotion: emotion.trim(),
      lesson: lesson.trim(),
      outcome,
    };

    setEntries((current) => [newEntry, ...current]);

    setAsset("");
    setDirection("Long");
    setEntryPrice("");
    setExitPrice("");
    setQuantity("");
    setDate("");
    setSetup("");
    setReason("");
    setEmotion("");
    setLesson("");
    setOutcome("Win");
  }

  function deleteEntry(id: number) {
    setEntries((current) =>
      current.filter((entry) => entry.id !== id),
    );
  }

  return (
    <ToolShell
      category="Tracking"
      title="Trading Journal"
      description="Record completed trades, review your decision-making, identify recurring mistakes, and build better trading discipline over time."
    >
      <div className="space-y-8">
        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <ToolStat
            label="Total Trades"
            value={stats.totalTrades}
          />

          <ToolStat
            label="Wins"
            value={stats.wins}
          />

          <ToolStat
            label="Losses"
            value={stats.losses}
          />

          <ToolStat
            label="Breakeven"
            value={stats.breakeven}
          />

          <ToolStat
            label="Win Rate"
            value={`${stats.winRate.toFixed(1)}%`}
          />
        </section>

        {/* Add trade */}
        <ToolCard
          title="Add Completed Trade"
          description="Record what happened after a trade is finished. Use the Trade Plan Builder before entering a future trade."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <ToolInput
              label="Asset"
              value={asset}
              onChange={setAsset}
              placeholder="BTC, ETH, SOL..."
            />

            <ToolInput
              label="Trade Date"
              value={date}
              onChange={setDate}
              type="date"
            />

            <ToolSelect
              label="Direction"
              value={direction}
              onChange={(value) =>
                setDirection(value as TradeDirection)
              }
              options={[
                { label: "Long", value: "Long" },
                { label: "Short", value: "Short" },
              ]}
            />

            <ToolSelect
              label="Outcome"
              value={outcome}
              onChange={(value) =>
                setOutcome(value as TradeOutcome)
              }
              options={[
                { label: "Win", value: "Win" },
                { label: "Loss", value: "Loss" },
                { label: "Breakeven", value: "Breakeven" },
              ]}
            />

            <ToolInput
              label="Entry Price"
              value={entryPrice}
              onChange={setEntryPrice}
              type="number"
              prefix="$"
            />

            <ToolInput
              label="Exit Price"
              value={exitPrice}
              onChange={setExitPrice}
              type="number"
              prefix="$"
            />

            <ToolInput
              label="Quantity"
              value={quantity}
              onChange={setQuantity}
              type="number"
            />

            <ToolInput
              label="Setup Used"
              value={setup}
              onChange={setSetup}
              placeholder="Breakout, pullback, support retest..."
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ToolTextarea
              label="Why did you take this trade?"
              value={reason}
              onChange={setReason}
              placeholder="Describe the reasoning behind the trade..."
              rows={4}
            />

            <ToolTextarea
              label="Emotions during the trade"
              value={emotion}
              onChange={setEmotion}
              placeholder="Calm, impatient, fearful, confident..."
              rows={4}
            />
          </div>

          <div className="mt-6">
            <ToolTextarea
              label="Lesson Learned"
              value={lesson}
              onChange={setLesson}
              placeholder="What would you repeat or change next time?"
              rows={4}
            />
          </div>

          <button
            type="button"
            onClick={addEntry}
            disabled={!asset.trim() || !date}
            className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-blue-500"
          >
            Add to Journal
          </button>
        </ToolCard>

        {/* Journal entries */}
        <ToolCard
          title="Journal Entries"
          description="Review previous trades and focus on the reasoning, emotions, and lessons behind each result."
        >
          {entries.length === 0 ? (
            <EmptyToolState
              title="No trades recorded yet"
              message="Add your first completed trade above to start building your trading journal."
            />
          ) : (
            <div className="space-y-5">
              {entries.map((entry) => (
                <article
                  key={entry.id}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-6 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                          {entry.asset}
                        </h3>

                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                          {entry.direction}
                        </span>

                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                          {entry.outcome}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                        {entry.date}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => deleteEntry(entry.id)}
                      className="text-sm font-semibold text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <MiniStat
                      label="Entry"
                      value={
                        entry.entryPrice
                          ? `$${entry.entryPrice}`
                          : "—"
                      }
                    />

                    <MiniStat
                      label="Exit"
                      value={
                        entry.exitPrice
                          ? `$${entry.exitPrice}`
                          : "—"
                      }
                    />

                    <MiniStat
                      label="Quantity"
                      value={entry.quantity || "—"}
                    />

                    <MiniStat
                      label="Setup"
                      value={entry.setup || "—"}
                    />
                  </div>

                  {(entry.reason ||
                    entry.emotion ||
                    entry.lesson) && (
                    <div className="mt-6 grid gap-5 lg:grid-cols-3">
                      <JournalNote
                        title="Reason"
                        text={entry.reason}
                      />

                      <JournalNote
                        title="Emotions"
                        text={entry.emotion}
                      />

                      <JournalNote
                        title="Lesson"
                        text={entry.lesson}
                      />
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </ToolCard>
      </div>
    </ToolShell>
  );
}

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-4 dark:bg-white/[0.03]">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-2 font-semibold text-slate-800 dark:text-slate-200">
        {value}
      </p>
    </div>
  );
}

function JournalNote({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-950 dark:text-white">
        {title}
      </p>

      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {text || "No notes added."}
      </p>
    </div>
  );
}