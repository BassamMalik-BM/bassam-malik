import { useMemo, useState } from 'react';

const trendOptions = [
  'Clear uptrend',
  'Clear downtrend',
  'Sideways / range',
  'Unclear trend',
];

const entryReasons = [
  'Support bounce',
  'Resistance breakout',
  'Pullback entry',
  'Trend continuation',
  'Random entry',
  'News or hype',
];

const marketConditions = [
  'Calm market',
  'High volatility',
  'Choppy market',
  'Strong momentum',
];

const emotions = [
  'Calm and patient',
  'Excited',
  'Fear of missing out',
  'Trying to recover a loss',
  'Unsure but entering anyway',
];

export default function TradeSetupAnalyzer() {
  const [trend, setTrend] = useState('');
  const [entryReason, setEntryReason] = useState('');
  const [marketCondition, setMarketCondition] = useState('');
  const [emotion, setEmotion] = useState('');

  const [hasSupportResistance, setHasSupportResistance] = useState(false);
  const [hasRiskReward, setHasRiskReward] = useState(false);
  const [hasStopLoss, setHasStopLoss] = useState(false);
  const [hasTakeProfit, setHasTakeProfit] = useState(false);
  const [hasVolumeConfirmation, setHasVolumeConfirmation] = useState(false);
  const [hasJournalPlan, setHasJournalPlan] = useState(false);

  const analysis = useMemo(() => {
    const hasStarted =
      trend ||
      entryReason ||
      marketCondition ||
      emotion ||
      hasSupportResistance ||
      hasRiskReward ||
      hasStopLoss ||
      hasTakeProfit ||
      hasVolumeConfirmation ||
      hasJournalPlan;

    if (!hasStarted) return null;

    let score = 0;
    const weaknesses: string[] = [];
    const suggestions: string[] = [];
    const warnings: string[] = [];

    if (trend === 'Clear uptrend' || trend === 'Clear downtrend') {
      score += 2;
    } else if (trend === 'Sideways / range') {
      score += 1;
      suggestions.push('Sideways markets need clearer support and resistance zones.');
    } else if (trend === 'Unclear trend') {
      weaknesses.push('Unclear trend direction');
      suggestions.push('Avoid forcing trades when market direction is not clear.');
    }

    if (
      entryReason === 'Support bounce' ||
      entryReason === 'Resistance breakout' ||
      entryReason === 'Pullback entry' ||
      entryReason === 'Trend continuation'
    ) {
      score += 2;
    } else if (entryReason === 'Random entry') {
      weaknesses.push('Random entry');
      warnings.push('A trade without a clear entry reason is usually low quality.');
    } else if (entryReason === 'News or hype') {
      weaknesses.push('Hype-based decision');
      warnings.push('News and hype can create emotional entries and poor timing.');
    }

    if (marketCondition === 'Calm market' || marketCondition === 'Strong momentum') {
      score += 1;
    } else if (marketCondition === 'High volatility') {
      weaknesses.push('High volatility risk');
      suggestions.push('Use extra caution during high volatility because stops can be hit quickly.');
    } else if (marketCondition === 'Choppy market') {
      weaknesses.push('Choppy market');
      suggestions.push('Choppy conditions often create fake breakouts and emotional trades.');
    }

    if (emotion === 'Calm and patient') {
      score += 2;
    } else if (emotion === 'Excited') {
      weaknesses.push('Excitement bias');
      suggestions.push('Pause before entering. Excitement can make risk feel smaller than it is.');
    } else if (emotion === 'Fear of missing out') {
      weaknesses.push('FOMO');
      warnings.push('FOMO is a major warning sign. Avoid entering just because price is moving.');
    } else if (emotion === 'Trying to recover a loss') {
      weaknesses.push('Revenge trading risk');
      warnings.push('Trying to recover a loss can lead to oversized and emotional trades.');
    } else if (emotion === 'Unsure but entering anyway') {
      weaknesses.push('Low confidence setup');
      suggestions.push('If you are unsure, wait for clearer confirmation.');
    }

    if (hasSupportResistance) score += 1;
    else {
      weaknesses.push('No support/resistance confirmation');
      suggestions.push('Mark support and resistance before entering.');
    }

    if (hasRiskReward) score += 1;
    else {
      weaknesses.push('Risk/reward not checked');
      suggestions.push('Check whether the potential reward is worth the risk.');
    }

    if (hasStopLoss) score += 1;
    else {
      weaknesses.push('No stop loss');
      warnings.push('Entering without a stop loss can make risk uncontrolled.');
    }

    if (hasTakeProfit) score += 1;
    else {
      suggestions.push('Define a realistic take-profit area before entering.');
    }

    if (hasVolumeConfirmation) score += 1;
    else {
      suggestions.push('Volume confirmation can help avoid weak breakouts.');
    }

    if (hasJournalPlan) score += 1;
    else {
      suggestions.push('Write down your trade plan before entering.');
    }

    if (score > 10) score = 10;

    const readiness =
      score >= 8
        ? 'Ready setup'
        : score >= 6
        ? 'Needs caution'
        : score >= 4
        ? 'Weak setup'
        : 'Avoid for now';

    const riskLevel =
      warnings.length >= 2
        ? 'High decision risk'
        : warnings.length === 1 || weaknesses.length >= 3
        ? 'Moderate decision risk'
        : 'Low decision risk';

    return {
      score,
      readiness,
      riskLevel,
      weaknesses: [...new Set(weaknesses)],
      suggestions: [...new Set(suggestions)],
      warnings: [...new Set(warnings)],
    };
  }, [
    trend,
    entryReason,
    marketCondition,
    emotion,
    hasSupportResistance,
    hasRiskReward,
    hasStopLoss,
    hasTakeProfit,
    hasVolumeConfirmation,
    hasJournalPlan,
  ]);

  return (
    <section>
      <div>
        {/* HERO CARD */}
        <div className="premium-card mb-10 p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-500">
            Interactive Trading Tool
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-950 dark:text-white">
            Trade Setup Analyzer
          </h1>

          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
            Check the quality of your trade idea before entering. This tool
            reviews trend clarity, entry reason, confirmations, risk planning,
            and emotional readiness.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="premium-card p-8">
            <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
              Setup Checklist
            </h2>

            <div className="mt-8 space-y-6">
              <SelectBox
                label="Trend Direction"
                value={trend}
                onChange={setTrend}
                options={trendOptions}
              />

              <SelectBox
                label="Entry Reason"
                value={entryReason}
                onChange={setEntryReason}
                options={entryReasons}
              />

              <SelectBox
                label="Market Condition"
                value={marketCondition}
                onChange={setMarketCondition}
                options={marketConditions}
              />

              <SelectBox
                label="Your Emotion Before Entry"
                value={emotion}
                onChange={setEmotion}
                options={emotions}
              />

              <div className="pt-2">
                <h3 className="mb-4 text-xl font-bold text-slate-950 dark:text-white">
                  Confirmations
                </h3>

                <div className="space-y-4">
                  <CheckItem
                    label="Support/resistance is marked"
                    checked={hasSupportResistance}
                    onChange={setHasSupportResistance}
                  />

                  <CheckItem
                    label="Risk/reward has been checked"
                    checked={hasRiskReward}
                    onChange={setHasRiskReward}
                  />

                  <CheckItem
                    label="Stop loss is defined"
                    checked={hasStopLoss}
                    onChange={setHasStopLoss}
                  />

                  <CheckItem
                    label="Take-profit area is defined"
                    checked={hasTakeProfit}
                    onChange={setHasTakeProfit}
                  />

                  <CheckItem
                    label="Volume or momentum confirmation exists"
                    checked={hasVolumeConfirmation}
                    onChange={setHasVolumeConfirmation}
                  />

                  <CheckItem
                    label="Trade plan is written in journal"
                    checked={hasJournalPlan}
                    onChange={setHasJournalPlan}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="premium-card p-8">
            <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
              Analysis Result
            </h2>

            {!analysis ? (
              <p className="mt-8 text-slate-500 dark:text-slate-300">
                Select your setup details to see the analysis.
              </p>
            ) : (
              <>
                <div className="mt-8 rounded-[2rem] bg-blue-50 p-6 dark:bg-blue-500/10">
                  <p className="text-lg text-slate-500 dark:text-slate-300">
                    Setup Quality Score
                  </p>

                  <h3 className="mt-2 text-6xl font-bold text-blue-600">
                    {analysis.score}/10
                  </h3>

                  <p className="mt-3 font-semibold text-slate-800 dark:text-slate-100">
                    {analysis.readiness} · {analysis.riskLevel}
                  </p>
                </div>

                <ResultSection
                  title="Main Weaknesses"
                  emptyText="No major weaknesses detected yet."
                  items={analysis.weaknesses}
                  variant="red"
                />

                <ResultSection
                  title="Warnings"
                  emptyText="No major warnings detected."
                  items={analysis.warnings}
                  variant="amber"
                />

                <ResultSection
                  title="Improvement Suggestions"
                  emptyText="Suggestions will appear here."
                  items={analysis.suggestions}
                  variant="default"
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SelectBox({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label>
      <span className="mb-2 block font-medium text-slate-700 dark:text-slate-200">
        {label}
      </span>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-field"
      >
        <option value="">Select an option</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function CheckItem({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 transition hover:border-blue-400 dark:border-white/10 dark:bg-white/[0.03]">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-5 w-5 accent-blue-600"
      />

      <span className="font-medium text-slate-700 dark:text-slate-200">
        {label}
      </span>
    </label>
  );
}

function ResultSection({
  title,
  items,
  emptyText,
  variant,
}: {
  title: string;
  items: string[];
  emptyText: string;
  variant: 'red' | 'amber' | 'default';
}) {
  const styles =
    variant === 'red'
      ? 'border-red-200 bg-red-50 text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300'
      : variant === 'amber'
      ? 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-300'
      : 'border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200';

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
        {title}
      </h3>

      <div className="mt-4 space-y-3">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item} className={`rounded-3xl border p-4 ${styles}`}>
              {item}
            </div>
          ))
        ) : (
          <p className="text-slate-500 dark:text-slate-400">{emptyText}</p>
        )}
      </div>
    </div>
  );
}