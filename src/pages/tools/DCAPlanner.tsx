import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import AnimatedPage from '../../components/AnimatedPage';

export default function DCAPlanner() {
  const [asset, setAsset] = useState('BTC');
  const [investment, setInvestment] = useState(100);
  const [frequency, setFrequency] = useState('Monthly');
  const [months, setMonths] = useState(12);
  const [goal, setGoal] = useState(5000);
  const [growth, setGrowth] = useState(3);
  const [style, setStyle] = useState('Balanced');

  const plan = useMemo(() => {
    const periodsPerMonth =
      frequency === 'Weekly' ? 4 : frequency === 'Biweekly' ? 2 : 1;

    const totalPeriods = months * periodsPerMonth;
    const totalInvested = totalPeriods * investment;
    const estimatedValue = Math.round(totalInvested * (1 + growth / 100));
    const progress = goal > 0 ? Math.min((estimatedValue / goal) * 100, 100) : 0;

    const timeline = Array.from({ length: months }, (_, index) => ({
      month: index + 1,
      invested: investment * periodsPerMonth * (index + 1),
    }));

    return {
      totalPeriods,
      totalInvested,
      estimatedValue,
      progress,
      timeline,
    };
  }, [investment, frequency, months, goal, growth]);

  const downloadPlan = () => {
    const content = `
BASSAM MALIK DCA PLAN

Asset / Coin: ${asset}
Investment: $${investment}
Frequency: ${frequency}
Duration: ${months} months
Investment Style: ${style}

Total Contributions: ${plan.totalPeriods}
Total Invested: $${plan.totalInvested}
Estimated Value: $${plan.estimatedValue}
Estimated Growth Used: ${growth}%
Goal: $${goal}
Goal Progress: ${Math.round(plan.progress)}%

Educational Reminder:
This is a planning tool only. Growth is not guaranteed. Crypto markets are volatile. Always do your own research and make responsible decisions.
`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'bassam-malik-dca-plan.txt';
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <AnimatedPage>
      <section className="section-padding bg-slate-50 dark:bg-navy-950">
        <div className="container-page">
          <Link
            to="/tools"
            className="mb-8 inline-flex items-center gap-2 text-blue-600 transition hover:text-blue-700"
          >
            <ArrowLeft size={18} />
            Back to Tools
          </Link>

          <div className="premium-card mb-10 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-500">
              Crypto Trading Planner
            </p>

            <h1 className="mt-4 text-4xl font-bold text-slate-950 dark:text-white">
              DCA Planner
            </h1>

            <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
              Build a consistent crypto buying plan using dollar-cost averaging
              and reduce emotional buying decisions.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="premium-card p-8">
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Add Your Plan
              </h2>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Create a consistent DCA strategy.
              </p>

              <div className="mt-8 space-y-5">
                <input
                  value={asset}
                  onChange={(e) => setAsset(e.target.value)}
                  placeholder="Example: BTC"
                  className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />

                <input
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  placeholder="Monthly Investment"
                  className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />

                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                >
                  <option>Monthly</option>
                  <option>Biweekly</option>
                  <option>Weekly</option>
                </select>

                <input
                  type="number"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  placeholder="Number of Months"
                  className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />

                <input
                  type="number"
                  value={goal}
                  onChange={(e) => setGoal(Number(e.target.value))}
                  placeholder="Target Goal Optional"
                  className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />

                <input
                  type="number"
                  value={growth}
                  onChange={(e) => setGrowth(Number(e.target.value))}
                  placeholder="Estimated Monthly Growth %"
                  className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />

                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full rounded-3xl border border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                >
                  <option>Conservative</option>
                  <option>Balanced</option>
                  <option>Aggressive</option>
                </select>
              </div>
            </div>

            <div className="premium-card p-8">
              <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
                Result
              </h2>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Your estimated DCA outcome.
              </p>

              <div className="mt-8 rounded-[2rem] bg-blue-50 p-6 dark:bg-blue-500/10">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  Your DCA Plan
                </h3>

                <div className="mt-5 space-y-3 text-slate-700 dark:text-slate-300">
                  <p>Coin: {asset || 'BTC'}</p>
                  <p>Investment: ${investment}/{frequency.toLowerCase()}</p>
                  <p>Frequency: {frequency}</p>
                  <p>Duration: {months} months</p>
                  <p>Total Invested: ${plan.totalInvested.toLocaleString()}</p>
                  <p>Estimated Value: ${plan.estimatedValue.toLocaleString()}</p>
                  <p>Estimated Growth Used: {growth}%</p>
                </div>
              </div>

              <div className="mt-6 rounded-[2rem] bg-emerald-50 p-6 dark:bg-emerald-500/10">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  Estimated Goal Progress
                </h3>

                <div className="mt-5 h-4 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"
                    style={{ width: `${plan.progress}%` }}
                  />
                </div>

                <p className="mt-3 font-semibold text-emerald-600">
                  {Math.round(plan.progress)}% of ${goal.toLocaleString()}
                </p>
              </div>

              <div className="mt-6 rounded-[2rem] bg-slate-100 p-6 dark:bg-white/[0.03]">
                <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                  Suggested Routine
                </h3>

                <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
                  <li>✔ Invest on the same date consistently.</li>
                  <li>✔ Avoid emotional buying during fast moves.</li>
                  <li>✔ Stay consistent during market dips.</li>
                  <li>✔ Review your plan monthly.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="premium-card mt-10 p-8">
            <h2 className="text-3xl font-bold text-slate-950 dark:text-white">
              Monthly Investment Timeline
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {plan.timeline.map((item) => (
                <div
                  key={item.month}
                  className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  Month {item.month} → ${item.invested.toLocaleString()} invested
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={downloadPlan}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              <Download size={18} />
              Download My DCA Plan
            </button>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}