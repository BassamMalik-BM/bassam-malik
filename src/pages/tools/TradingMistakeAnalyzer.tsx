import { useMemo, useState } from 'react';

const mistakesList = [
  'Bought because of FOMO',
  'Sold because of panic',
  'Entered without a plan',
  'Risked too much capital',
  'Ignored support and resistance',
  'Did not define entry and exit',
  'Moved stop level emotionally',
  'Overtrading',
  'Revenge trading after a loss',
  'Did not follow trading journal',
  'Bought based on emotions',
  'Ignored market conditions',
];

export default function TradingMistakeAnalyzer() {
  const [selectedMistakes, setSelectedMistakes] = useState<string[]>([]);

  const toggleMistake = (mistake: string) => {
    setSelectedMistakes((prev) =>
      prev.includes(mistake)
        ? prev.filter((item) => item !== mistake)
        : [...prev, mistake]
    );
  };

  const analysis = useMemo(() => {
    const emotionalMistakes = [
      'Bought because of FOMO',
      'Sold because of panic',
      'Bought based on emotions',
      'Revenge trading after a loss',
    ];

    const planningMistakes = [
      'Entered without a plan',
      'Did not define entry and exit',
      'Ignored support and resistance',
      'Ignored market conditions',
    ];

    const riskMistakes = [
      'Risked too much capital',
      'Moved stop level emotionally',
      'Overtrading',
      'Did not follow trading journal',
    ];

    const emotionalCount = selectedMistakes.filter((m) =>
      emotionalMistakes.includes(m)
    ).length;

    const planningCount = selectedMistakes.filter((m) =>
      planningMistakes.includes(m)
    ).length;

    const riskCount = selectedMistakes.filter((m) =>
      riskMistakes.includes(m)
    ).length;

    const totalMistakes = selectedMistakes.length;

    let disciplineScore = 10 - totalMistakes;
    if (disciplineScore < 0) disciplineScore = 0;

    const weaknesses = [];

    if (emotionalCount > 0) {
      weaknesses.push('Emotional decision-making');
    }

    if (planningCount > 0) {
      weaknesses.push('Poor trade planning');
    }

    if (riskCount > 0) {
      weaknesses.push('Weak risk management');
    }

    const improvementTips: string[] = [];

    if (emotionalCount > 0) {
      improvementTips.push(
        'Avoid buying or selling based on emotions, fear, or excitement.'
      );
    }

    if (planningCount > 0) {
      improvementTips.push(
        'Define your entry, stop level, and target before buying.'
      );
    }

    if (riskCount > 0) {
      improvementTips.push(
        'Risk a small percentage of capital and stay disciplined.'
      );
    }

    return {
      disciplineScore,
      weaknesses,
      improvementTips,
    };
  }, [selectedMistakes]);

  return (
      <section>
        <div>

          {/* HERO CARD */}
          <div className="premium-card mb-10 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-500">
              Interactive Trading Tool
            </p>

            <h1 className="mt-4 text-4xl font-bold text-slate-950 dark:text-white">
              Trading Mistake Analyzer
            </h1>

            <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
              Analyze common beginner mistakes and understand what may be
              affecting your crypto trading decisions.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="premium-card p-8">
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Select Mistakes
              </h2>

              <div className="mt-8 space-y-4">
                {mistakesList.map((mistake) => (
                  <label
                    key={mistake}
                    className="flex cursor-pointer items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 transition hover:border-blue-400 dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <input
                      type="checkbox"
                      checked={selectedMistakes.includes(mistake)}
                      onChange={() => toggleMistake(mistake)}
                      className="h-5 w-5 accent-blue-600"
                    />

                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      {mistake}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="premium-card p-8">
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Analysis Result
              </h2>

              <div className="mt-8 rounded-[2rem] bg-blue-50 p-6 dark:bg-blue-500/10">
                <p className="text-lg text-slate-500 dark:text-slate-300">
                  Discipline Score
                </p>

                <h3 className="mt-2 text-6xl font-bold text-blue-600">
                  {analysis.disciplineScore}/10
                </h3>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                  Main Weaknesses
                </h3>

                <div className="mt-4 flex flex-wrap gap-3">
                  {analysis.weaknesses.length > 0 ? (
                    analysis.weaknesses.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-600 dark:bg-red-500/10 dark:text-red-400"
                      >
                        {item}
                      </span>
                    ))
                  ) : (
                    <p className="text-slate-500">
                      Select mistakes to see analysis.
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                  Improvement Suggestions
                </h3>

                <div className="mt-4 space-y-3">
                  {analysis.improvementTips.length > 0 ? (
                    analysis.improvementTips.map((tip) => (
                      <div
                        key={tip}
                        className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200"
                      >
                        {tip}
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-500">
                      Your suggestions will appear here.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}