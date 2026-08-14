import { useMemo, useState } from "react";

import ToolShell from "../components/tools/ToolShell";
import ToolCard from "../components/tools/ToolCard";
import ChecklistItem from "../components/tools/ChecklistItem";
import ToolStat from "../components/tools/ToolStat";

type SecurityRule = {
  id: string;
  label: string;
  description: string;
};

const securityRules: SecurityRule[] = [
  {
    id: "unique-password",
    label: "I use a strong, unique password",
    description:
      "My exchange, email, and wallet-related accounts do not reuse passwords from other websites.",
  },
  {
    id: "two-factor",
    label: "Two-factor authentication is enabled",
    description:
      "Important accounts use a secure second authentication factor instead of relying only on a password.",
  },
  {
    id: "email-security",
    label: "My email account is secured",
    description:
      "The email connected to my crypto accounts has a strong password, two-factor authentication, and recovery options.",
  },
  {
    id: "seed-phrase",
    label: "My recovery phrase is stored safely offline",
    description:
      "Seed phrases and recovery words are not stored in screenshots, cloud notes, email, or public digital storage.",
  },
  {
    id: "private-keys",
    label: "I never share private keys or recovery phrases",
    description:
      "I understand that legitimate support staff, exchanges, and wallet providers should never need my private key or seed phrase.",
  },
  {
    id: "backup",
    label: "I have verified my wallet backup",
    description:
      "I know where my recovery information is stored and understand how I would restore access if my device were lost or damaged.",
  },
  {
    id: "phishing",
    label: "I verify links before signing in",
    description:
      "I check website addresses carefully and avoid signing in through unexpected messages, advertisements, or suspicious links.",
  },
  {
    id: "withdrawal-address",
    label: "I verify wallet addresses before sending crypto",
    description:
      "I carefully compare the destination address and network before confirming a cryptocurrency transfer.",
  },
  {
    id: "test-transaction",
    label: "I consider a small test transaction for large transfers",
    description:
      "When appropriate, I send a small amount first before transferring a larger balance to an unfamiliar address.",
  },
  {
    id: "device-security",
    label: "My primary device is protected",
    description:
      "The device I use for cryptocurrency activity has current security updates, screen protection, and trusted software.",
  },
  {
    id: "public-wifi",
    label: "I avoid sensitive account activity on untrusted networks",
    description:
      "I avoid logging into important financial or cryptocurrency accounts using unknown public Wi-Fi networks.",
  },
  {
    id: "permissions",
    label: "I review wallet and app permissions",
    description:
      "I periodically review connected applications, wallet permissions, API keys, and authorized devices and remove access I no longer need.",
  },
];

export default function SecurityChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const completed = useMemo(
    () =>
      securityRules.filter((rule) => checkedItems[rule.id]).length,
    [checkedItems],
  );

  const completionPercent =
    securityRules.length > 0
      ? (completed / securityRules.length) * 100
      : 0;

  const complete = completed === securityRules.length;

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
      category="Security"
      title="Crypto Security Checklist"
      description="Review important account, wallet, device, backup, and phishing-security practices to reduce avoidable cryptocurrency security risks."
    >
      <div className="space-y-8">
        {/* Overview */}
        <section className="grid gap-4 sm:grid-cols-3">
          <ToolStat
            label="Security Checks"
            value={`${completed}/${securityRules.length}`}
          />

          <ToolStat
            label="Progress"
            value={`${completionPercent.toFixed(0)}%`}
          />

          <ToolStat
            label="Status"
            value={complete ? "Complete" : "Review"}
            description={
              complete
                ? "All listed security checks are complete."
                : "Some security practices still need review."
            }
          />
        </section>

        {/* Checklist */}
        <ToolCard
          title="Security Review"
          description="Go through each item and review your current security habits honestly."
        >
          <div className="space-y-4">
            {securityRules.map((rule) => (
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
                Security review progress
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

        {/* Security notice */}
        <div
          className={`rounded-2xl border p-5 text-sm leading-7 ${
            complete
              ? "border-emerald-200 bg-emerald-50/70 text-slate-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-slate-300"
              : "border-blue-200 bg-blue-50/70 text-slate-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-slate-300"
          }`}
        >
          {complete
            ? "All listed checks are complete. Good security is still an ongoing process, so review your accounts, connected apps, devices, and backups regularly."
            : "Unchecked items may identify avoidable security weaknesses. Review them before storing significant value or using sensitive cryptocurrency accounts."}
        </div>
      </div>
    </ToolShell>
  );
}