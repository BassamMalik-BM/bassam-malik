import { useMemo, useState } from "react";

import ToolShell from "../components/tools/ToolShell";
import ToolCard from "../components/tools/ToolCard";
import ChecklistItem from "../components/tools/ChecklistItem";
import ToolStat from "../components/tools/ToolStat";

type ChecklistRule = {
  id: string;
  label: string;
  description: string;
};

const checklistRules: ChecklistRule[] = [
  {
    id: "setup",
    label: "The trade setup matches my strategy",
    description:
      "The trade is based on a setup I understand and have intentionally chosen, not a random entry.",
  },
  {
    id: "context",
    label: "I understand the current market context",
    description:
      "I have checked the broader trend, important market structure, and nearby support or resistance.",
  },
  {
    id: "entry",
    label: "My entry is clearly defined",
    description:
      "I know the price or condition that would justify entering the trade.",
  },
  {
    id: "invalidation",
    label: "I know what invalidates the trade idea",
    description:
      "I have identified the condition or level that would make my original trade idea no longer valid.",
  },
  {
    id: "target",
    label: "My target is defined before entering",
    description:
      "I know where I may take profit or reassess the position before entering the trade.",
  },
  {
    id: "confirmation",
    label: "I am not entering only because of FOMO",
    description:
      "The decision is based on my process rather than fear of missing a fast market move.",
  },
  {
    id: "news",
    label: "I have checked for important market events",
    description:
      "I am aware of major announcements, news, or events that could significantly affect the market.",
  },
  {
    id: "emotion",
    label: "I am emotionally calm enough to trade",
    description:
      "I am not entering because of revenge, frustration, panic, overconfidence, or excitement.",
  },
  {
    id: "execution",
    label: "I know exactly how I will execute the trade",
    description:
      "I know whether I will use a market order, limit order, or another planned execution method.",
  },
  {
    id: "acceptance",
    label: "I am prepared to accept the outcome",
    description:
      "I understand that even a well-planned trade can lose and I am comfortable following my process.",
  },
];

export default function TradingChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const completed = useMemo(
    () =>
      checklistRules.filter((rule) => checkedItems[rule.id]).length,
    [checkedItems],
  );

  const completionPercent =
    checklistRules.length > 0
      ? (completed / checklistRules.length) * 100
      : 0;

  const ready = completed === checklistRules.length;

  function toggleItem(id: string, checked: boolean) {
    setCheckedItems((current) => ({
      ...current,
      [id]: checked,
    }));
  }

  function resetChecklist() {
    setCheckedItems({});
  }

  return (
    <ToolShell
      category="Trading"
      title="Trading Checklist"
      description="Run through a structured pre-trade process before entering a position to reduce impulsive decisions and improve consistency."
    >
      <div className="space-y-8">
        {/* Overview */}
        <section className="grid gap-4 sm:grid-cols-3">
          <ToolStat
            label="Completed"
            value={`${completed}/${checklistRules.length}`}
          />

          <ToolStat
            label="Progress"
            value={`${completionPercent.toFixed(0)}%`}
          />

          <ToolStat
            label="Status"
            value={ready ? "Ready" : "Review"}
            description={
              ready
                ? "All pre-trade checks are complete."
                : "Review the remaining items before entering."
            }
          />
        </section>

        {/* Checklist */}
        <ToolCard
          title="Pre-Trade Checklist"
          description="Complete each item honestly before deciding whether to enter the trade."
        >
          <div className="space-y-4">
            {checklistRules.map((rule) => (
              <ChecklistItem
                key={rule.id}
                id={rule.id}
                label={rule.label}
                description={rule.description}
                checked={Boolean(checkedItems[rule.id])}
                onChange={(checked) =>
                  toggleItem(rule.id, checked)
                }
              />
            ))}
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Checklist progress
              </span>

              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                {completionPercent.toFixed(0)}%
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-300"
                style={{
                  width: `${completionPercent}%`,
                }}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={resetChecklist}
            className="mt-8 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-blue-500/30 dark:hover:text-blue-400"
          >
            Reset Checklist
          </button>
        </ToolCard>

        {/* Status */}
        <div
          className={`rounded-2xl border p-5 text-sm leading-7 ${
            ready
              ? "border-emerald-200 bg-emerald-50/70 text-slate-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-slate-300"
              : "border-blue-200 bg-blue-50/70 text-slate-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-slate-300"
          }`}
        >
          {ready
            ? "All checklist items are complete. This does not guarantee a profitable trade, but it confirms that you followed your pre-trade process."
            : "A checklist is most useful when you answer honestly. An unchecked item does not automatically mean you cannot trade, but it may highlight something that deserves more attention before entering."}
        </div>
      </div>
    </ToolShell>
  );
}