import { useMemo, useState } from "react";

import ToolShell from "../components/tools/ToolShell";
import ToolCard from "../components/tools/ToolCard";
import ToolInput from "../components/tools/ToolInput";
import ToolSelect from "../components/tools/ToolSelect";
import ToolTextarea from "../components/tools/ToolTextarea";
import ToolStat from "../components/tools/ToolStat";

type TradeDirection = "Long" | "Short";

export default function TradePlanBuilder() {
  const [asset, setAsset] = useState("");
  const [direction, setDirection] = useState<TradeDirection>("Long");
  const [timeframe, setTimeframe] = useState("4H");

  const [entryCondition, setEntryCondition] = useState("");
  const [entryZone, setEntryZone] = useState("");
  const [invalidation, setInvalidation] = useState("");
  const [target, setTarget] = useState("");

  const [thesis, setThesis] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [executionPlan, setExecutionPlan] = useState("");
  const [managementPlan, setManagementPlan] = useState("");
  const [avoidConditions, setAvoidConditions] = useState("");
  const [notes, setNotes] = useState("");

  const completedFields = useMemo(() => {
    const requiredFields = [
      asset,
      entryCondition,
      invalidation,
      target,
      thesis,
      executionPlan,
    ];

    return requiredFields.filter((field) => field.trim()).length;
  }, [
    asset,
    entryCondition,
    invalidation,
    target,
    thesis,
    executionPlan,
  ]);

  const totalRequiredFields = 6;

  const completionPercent =
    (completedFields / totalRequiredFields) * 100;

  const planReady =
    completedFields === totalRequiredFields;

  function clearPlan() {
    setAsset("");
    setDirection("Long");
    setTimeframe("4H");

    setEntryCondition("");
    setEntryZone("");
    setInvalidation("");
    setTarget("");

    setThesis("");
    setConfirmation("");
    setExecutionPlan("");
    setManagementPlan("");
    setAvoidConditions("");
    setNotes("");
  }

  return (
    <ToolShell
      category="Planning"
      title="Trade Plan Builder"
      description="Create a structured plan for a potential trade before entering it, including your thesis, entry conditions, invalidation, target, execution approach, and management rules."
    >
      <div className="space-y-8">
        {/* Overview */}
        <section className="grid gap-4 sm:grid-cols-3">
          <ToolStat
            label="Required Fields"
            value={`${completedFields}/${totalRequiredFields}`}
          />

          <ToolStat
            label="Plan Progress"
            value={`${completionPercent.toFixed(0)}%`}
          />

          <ToolStat
            label="Plan Status"
            value={planReady ? "Ready" : "Incomplete"}
            description={
              planReady
                ? "The main planning fields are complete."
                : "Complete the core trade-plan fields before considering entry."
            }
          />
        </section>

        {/* Market setup */}
        <ToolCard
          title="Trade Setup"
          description="Define the basic structure of the potential trade."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ToolInput
              label="Asset"
              value={asset}
              onChange={setAsset}
              placeholder="BTC, ETH, SOL..."
            />

            <ToolSelect
              label="Direction"
              value={direction}
              onChange={(value) =>
                setDirection(value as TradeDirection)
              }
              options={[
                {
                  label: "Long",
                  value: "Long",
                },
                {
                  label: "Short",
                  value: "Short",
                },
              ]}
            />

            <ToolSelect
              label="Timeframe"
              value={timeframe}
              onChange={setTimeframe}
              options={[
                {
                  label: "15 Minutes",
                  value: "15M",
                },
                {
                  label: "1 Hour",
                  value: "1H",
                },
                {
                  label: "4 Hours",
                  value: "4H",
                },
                {
                  label: "Daily",
                  value: "1D",
                },
                {
                  label: "Weekly",
                  value: "1W",
                },
              ]}
            />

            <ToolInput
              label="Entry Zone / Level"
              value={entryZone}
              onChange={setEntryZone}
              placeholder="Example: 62,000 - 63,000"
            />

            <ToolInput
              label="Invalidation Level"
              value={invalidation}
              onChange={setInvalidation}
              placeholder="Price or condition"
            />

            <ToolInput
              label="Target / Exit Area"
              value={target}
              onChange={setTarget}
              placeholder="Planned target"
            />
          </div>
        </ToolCard>

        {/* Thesis */}
        <ToolCard
          title="Trade Thesis"
          description="Explain why the trade idea exists before thinking about execution."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <ToolTextarea
              label="Why does this trade make sense?"
              value={thesis}
              onChange={setThesis}
              placeholder="Describe the market structure, trend, level, pattern, or other reasoning behind the idea..."
              rows={6}
            />

            <ToolTextarea
              label="What confirmation do you want to see?"
              value={confirmation}
              onChange={setConfirmation}
              placeholder="Example: reclaim of support, breakout confirmation, candle close, volume reaction..."
              rows={6}
            />
          </div>
        </ToolCard>

        {/* Entry condition */}
        <ToolCard
          title="Entry Conditions"
          description="Define what must happen before the trade is actually entered."
        >
          <ToolTextarea
            label="Entry Trigger"
            value={entryCondition}
            onChange={setEntryCondition}
            placeholder="Describe the exact condition that would allow you to enter..."
            rows={5}
          />

          <div className="mt-6">
            <ToolTextarea
              label="When should this trade be avoided?"
              value={avoidConditions}
              onChange={setAvoidConditions}
              placeholder="Example: major news event, weak confirmation, price already extended, market structure changes..."
              rows={5}
            />
          </div>
        </ToolCard>

        {/* Execution */}
        <ToolCard
          title="Execution & Management"
          description="Plan how you intend to execute and manage the position if the setup becomes valid."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <ToolTextarea
              label="Execution Plan"
              value={executionPlan}
              onChange={setExecutionPlan}
              placeholder="Example: wait for confirmation, use a limit order, avoid chasing price..."
              rows={6}
            />

            <ToolTextarea
              label="Trade Management Plan"
              value={managementPlan}
              onChange={setManagementPlan}
              placeholder="Describe how you plan to manage the position after entry..."
              rows={6}
            />
          </div>
        </ToolCard>

        {/* Notes */}
        <ToolCard
          title="Additional Notes"
          description="Add any context that does not belong in the core trade plan."
        >
          <ToolTextarea
            label="Notes"
            value={notes}
            onChange={setNotes}
            placeholder="Market context, observations, reminders, or anything else relevant..."
            rows={6}
          />
        </ToolCard>

        {/* Summary */}
        <ToolCard
          title="Trade Plan Summary"
          description="Review the main parts of your plan before deciding whether the setup deserves further consideration."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <SummaryItem
              label="Asset"
              value={asset || "Not defined"}
            />

            <SummaryItem
              label="Direction"
              value={direction}
            />

            <SummaryItem
              label="Timeframe"
              value={timeframe}
            />

            <SummaryItem
              label="Entry Zone"
              value={entryZone || "Not defined"}
            />

            <SummaryItem
              label="Invalidation"
              value={invalidation || "Not defined"}
            />

            <SummaryItem
              label="Target"
              value={target || "Not defined"}
            />
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Plan completion
              </p>

              <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                {completionPercent.toFixed(0)}%
              </p>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                style={{
                  width: `${completionPercent}%`,
                }}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={clearPlan}
            className="mt-8 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-blue-500/30 dark:hover:text-blue-400"
          >
            Clear Plan
          </button>
        </ToolCard>

        {/* Notice */}
        <div
          className={`rounded-2xl border p-5 text-sm leading-7 ${
            planReady
              ? "border-emerald-200 bg-emerald-50/70 text-slate-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-slate-300"
              : "border-blue-200 bg-blue-50/70 text-slate-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-slate-300"
          }`}
        >
          {planReady
            ? "The main planning fields are complete. A complete plan does not guarantee a successful trade, but it helps separate a structured idea from an impulsive decision."
            : "The plan is still incomplete. Define the core reasoning, entry condition, invalidation, target, and execution approach before treating the setup as a structured trade idea."}
        </div>
      </div>
    </ToolShell>
  );
}

function SummaryItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-2 break-words font-semibold text-slate-950 dark:text-white">
        {value}
      </p>
    </div>
  );
}