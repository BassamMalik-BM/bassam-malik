import { useMemo, useState } from "react";

import ToolShell from "../components/tools/ToolShell";
import ToolCard from "../components/tools/ToolCard";
import ChecklistItem from "../components/tools/ChecklistItem";
import ToolStat from "../components/tools/ToolStat";

type RiskRule = {
  id: string;
  label: string;
  description: string;
};

const riskRules: RiskRule[] = [
  {
    id: "risk-limit",
    label: "My risk per trade is within my personal limit",
    description:
      "The amount I could lose on this trade stays within the risk percentage or amount I have decided to follow.",
  },
  {
    id: "stop-loss",
    label: "My stop loss is defined before entry",
    description:
      "I know the level where the trade idea is invalid and I am not planning to move the stop further away just to avoid taking a loss.",
  },
  {
    id: "position-size",
    label: "My position size matches my planned risk",
    description:
      "The trade size has been chosen based on my risk rules rather than excitement, confidence, or account balance alone.",
  },
  {
    id: "loss-acceptance",
    label: "I can accept the full planned loss",
    description:
      "If the stop loss is reached, the loss would not create financial stress or pressure me to make emotional decisions.",
  },
  {
    id: "daily-risk",
    label: "This trade does not exceed my daily risk limit",
    description:
      "The trade fits within the maximum amount of risk I allow myself to take during one trading day.",
  },
  {
    id: "portfolio-exposure",
    label: "My total market exposure is still reasonable",
    description:
      "Existing open positions and this trade together do not create excessive exposure to the market.",
  },
  {
    id: "concentration",
    label: "I am not overly concentrated in one asset or idea",
    description:
      "The trade does not make one cryptocurrency, sector, or market theme dominate my overall risk.",
  },
  {
    id: "correlation",
    label: "I have considered correlated positions",
    description:
      "I am aware that several positions may move together and create more combined risk than each position appears to have individually.",
  },
  {
    id: "leverage",
    label: "Any leverage used is within my rules",
    description:
      "If leverage is involved, I understand how it increases risk and I am not using more leverage simply to increase potential profit.",
  },
  {
    id: "revenge-risk",
    label: "I am not increasing risk after a recent loss",
    description:
      "My risk remains consistent and I am not trying to recover previous losses by taking a larger position.",
  },
];

export default function RiskManagementChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const completed = useMemo(
    () => riskRules.filter((rule) => checkedItems[rule.id]).length,
    [checkedItems],
  );

  const completionPercent =
    riskRules.length > 0
      ? (completed / riskRules.length) * 100
      : 0;

  const ready = completed === riskRules.length;

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
      category="Risk Management"
      title="Risk Management Checklist"
      description="Review your personal risk rules before taking a trade and confirm that your exposure, stop placement, and loss tolerance remain within your plan."
    >
      <div className="space-y-8">
        <section className="grid gap-4 sm:grid-cols-3">
          <ToolStat
            label="Risk Checks"
            value={`${completed}/${riskRules.length}`}
          />

          <ToolStat
            label="Progress"
            value={`${completionPercent.toFixed(0)}%`}
          />

          <ToolStat
            label="Risk Status"
            value={ready ? "Complete" : "Review"}
            description={
              ready
                ? "All listed risk checks are complete."
                : "Some risk rules still need attention."
            }
          />
        </section>

        <ToolCard
          title="Risk Review"
          description="Use this checklist to review risk discipline before committing capital to a trade."
        >
          <div className="space-y-4">
            {riskRules.map((rule) => (
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
                Risk review progress
              </span>

              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                {completionPercent.toFixed(0)}%
              </span>
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
            onClick={resetChecklist}
            className="mt-8 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:hover:border-blue-500/30 dark:hover:text-blue-400"
          >
            Reset Checklist
          </button>
        </ToolCard>

        <div
          className={`rounded-2xl border p-5 text-sm leading-7 ${
            ready
              ? "border-emerald-200 bg-emerald-50/70 text-slate-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-slate-300"
              : "border-blue-200 bg-blue-50/70 text-slate-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-slate-300"
          }`}
        >
          {ready
            ? "All listed risk checks are complete. This does not remove market risk, but it confirms that the trade fits the risk rules you reviewed."
            : "Incomplete checks may highlight areas where your risk is not fully planned. Review them before deciding whether the trade fits your personal risk rules."}
        </div>
      </div>
    </ToolShell>
  );
}