import { useMemo, useState } from "react";

import ToolShell from "../components/tools/ToolShell";
import ToolCard from "../components/tools/ToolCard";
import ToolInput from "../components/tools/ToolInput";
import ToolSelect from "../components/tools/ToolSelect";
import ToolTextarea from "../components/tools/ToolTextarea";
import ToolStat from "../components/tools/ToolStat";

type AllocationItem = {
  id: number;
  name: string;
  percentage: number;
};

export default function InvestmentPlanner() {
  const [goal, setGoal] = useState("");
  const [timeHorizon, setTimeHorizon] = useState("3-5 Years");
  const [monthlyContribution, setMonthlyContribution] = useState("");
  const [riskLevel, setRiskLevel] = useState("Moderate");
  const [strategy, setStrategy] = useState("");
  const [rules, setRules] = useState("");

  const [allocationName, setAllocationName] = useState("");
  const [allocationPercent, setAllocationPercent] = useState("");
  const [allocations, setAllocations] = useState<AllocationItem[]>([]);

  const allocationTotal = useMemo(
    () =>
      allocations.reduce(
        (total, item) => total + item.percentage,
        0,
      ),
    [allocations],
  );

  const remainingAllocation = Math.max(
    100 - allocationTotal,
    0,
  );

  const allocationStatus =
    allocationTotal === 100
      ? "Complete"
      : allocationTotal < 100
        ? "Incomplete"
        : "Overallocated";

  function addAllocation() {
    const percentage = Number(allocationPercent);

    if (
      !allocationName.trim() ||
      percentage <= 0 ||
      percentage > 100
    ) {
      return;
    }

    setAllocations((current) => [
      ...current,
      {
        id: Date.now(),
        name: allocationName.trim(),
        percentage,
      },
    ]);

    setAllocationName("");
    setAllocationPercent("");
  }

  function removeAllocation(id: number) {
    setAllocations((current) =>
      current.filter((item) => item.id !== id),
    );
  }

  return (
    <ToolShell
      category="Planning"
      title="Investment Planner"
      description="Build a structured long-term investment plan by defining your goals, time horizon, contribution approach, target allocation, and personal investing rules."
    >
      <div className="space-y-8">
        {/* Overview */}
        <section className="grid gap-4 sm:grid-cols-3">
          <ToolStat
            label="Time Horizon"
            value={timeHorizon}
          />

          <ToolStat
            label="Risk Profile"
            value={riskLevel}
          />

          <ToolStat
            label="Allocation"
            value={`${allocationTotal}%`}
            description={
              allocationTotal === 100
                ? "Target allocation is complete."
                : `${remainingAllocation}% remaining`
            }
          />
        </section>

        {/* Core plan */}
        <ToolCard
          title="Investment Plan"
          description="Define the foundation of your long-term investing approach."
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <ToolInput
              label="Investment Goal"
              value={goal}
              onChange={setGoal}
              placeholder="Long-term wealth, house deposit, retirement..."
            />

            <ToolInput
              label="Monthly Contribution"
              value={monthlyContribution}
              onChange={setMonthlyContribution}
              type="number"
              prefix="$"
              placeholder="500"
            />

            <ToolSelect
              label="Time Horizon"
              value={timeHorizon}
              onChange={setTimeHorizon}
              options={[
                {
                  label: "Less than 1 Year",
                  value: "Less than 1 Year",
                },
                {
                  label: "1-3 Years",
                  value: "1-3 Years",
                },
                {
                  label: "3-5 Years",
                  value: "3-5 Years",
                },
                {
                  label: "5-10 Years",
                  value: "5-10 Years",
                },
                {
                  label: "10+ Years",
                  value: "10+ Years",
                },
              ]}
            />

            <ToolSelect
              label="Risk Profile"
              value={riskLevel}
              onChange={setRiskLevel}
              options={[
                {
                  label: "Conservative",
                  value: "Conservative",
                },
                {
                  label: "Moderate",
                  value: "Moderate",
                },
                {
                  label: "Aggressive",
                  value: "Aggressive",
                },
              ]}
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <ToolTextarea
              label="Investment Strategy"
              value={strategy}
              onChange={setStrategy}
              placeholder="Describe how you plan to invest, what types of assets you prefer, and how often you review the plan..."
              rows={5}
            />

            <ToolTextarea
              label="Personal Rules"
              value={rules}
              onChange={setRules}
              placeholder="Example: avoid emotional buying, review allocation quarterly, never invest borrowed money..."
              rows={5}
            />
          </div>
        </ToolCard>

        {/* Allocation planner */}
        <ToolCard
          title="Target Allocation"
          description="Plan how you want your future investment portfolio to be distributed. This is a target plan, not a tracker of current holdings."
        >
          <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_220px_auto] sm:items-end">
            <ToolInput
              label="Asset / Category"
              value={allocationName}
              onChange={setAllocationName}
              placeholder="Bitcoin, Ethereum, Cash..."
            />

            <ToolInput
              label="Target Allocation"
              value={allocationPercent}
              onChange={setAllocationPercent}
              type="number"
              suffix="%"
              placeholder="40"
            />

            <button
              type="button"
              onClick={addAllocation}
              disabled={
                !allocationName.trim() ||
                Number(allocationPercent) <= 0
              }
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-blue-500"
            >
              Add
            </button>
          </div>

          {allocations.length > 0 && (
            <div className="mt-8 space-y-4">
              {allocations.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-950 dark:text-white">
                        {item.name}
                      </p>

                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Target allocation
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="font-bold text-blue-600 dark:text-blue-400">
                        {item.percentage}%
                      </span>

                      <button
                        type="button"
                        onClick={() => removeAllocation(item.id)}
                        className="text-sm font-semibold text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{
                        width: `${Math.min(
                          item.percentage,
                          100,
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          <div
            className={`mt-8 rounded-2xl border p-5 text-sm leading-7 ${
              allocationTotal === 100
                ? "border-emerald-200 bg-emerald-50/70 text-slate-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-slate-300"
                : allocationTotal > 100
                  ? "border-slate-300 bg-slate-100/70 text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
                  : "border-blue-200 bg-blue-50/70 text-slate-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-slate-300"
            }`}
          >
            <span className="font-semibold">
              Allocation status: {allocationStatus}.
            </span>{" "}
            {allocationTotal < 100 &&
              `${remainingAllocation}% of your target allocation is still unassigned.`}

            {allocationTotal > 100 &&
              ` Your target allocation currently exceeds 100% by ${
                allocationTotal - 100
              }%.`}

            {allocationTotal === 100 &&
              " Your planned allocation currently totals 100%."}
          </div>
        </ToolCard>

        {/* Plan summary */}
        <ToolCard
          title="Plan Summary"
          description="A quick overview of the investment framework you have defined."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <SummaryItem
              label="Goal"
              value={goal || "Not defined"}
            />

            <SummaryItem
              label="Monthly Contribution"
              value={
                monthlyContribution
                  ? `$${monthlyContribution}`
                  : "Not defined"
              }
            />

            <SummaryItem
              label="Time Horizon"
              value={timeHorizon}
            />

            <SummaryItem
              label="Risk Profile"
              value={riskLevel}
            />

            <SummaryItem
              label="Allocation Status"
              value={allocationStatus}
            />

            <SummaryItem
              label="Planned Categories"
              value={allocations.length.toString()}
            />
          </div>
        </ToolCard>

        <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-5 text-sm leading-7 text-slate-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-slate-300">
          This planner helps organize your own long-term investment framework.
          It does not recommend an allocation, predict returns, or determine
          how much you should invest.
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

      <p className="mt-2 font-semibold text-slate-950 dark:text-white">
        {value}
      </p>
    </div>
  );
}