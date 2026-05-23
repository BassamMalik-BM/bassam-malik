import {
  BarChart3,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  FileSpreadsheet,
  NotebookPen,
  PenLine,
  Star,
  Tag,
} from "lucide-react";

const journalFields = [
  ["DATE", "Date & Time", "Track when the decision happened and when it was reviewed."],
  ["ASSET", "Asset / Coin", "Record the market you traded so patterns become easier to notice."],
  ["BUY", "Buy Price", "Write the actual price, not only the price you planned."],
  ["SELL", "Sell Price", "Record the sell price or planned exit area."],
  ["RISK", "Risk Level", "Note how much capital was at risk and whether it followed your rules."],
  ["WHY", "Reason for Entry", "Explain the logic behind the decision in simple words."],
  ["MOOD", "Emotion", "Record whether you felt calm, rushed, fearful, or overconfident."],
  ["LESSON", "Lesson Learned", "Write one clear takeaway that can improve your next decision."],
];

const tools = [
  {
    name: "Spreadsheet",
    type: "Google Sheets / Excel",
    text: "Flexible, free, and useful for calculations, charts, and custom tracking.",
  },
  {
    name: "Journal App",
    type: "Dedicated tracking tool",
    text: "Helpful for automatic stats and screenshots, but may require subscriptions.",
  },
  {
    name: "Notebook",
    type: "Physical or digital notes",
    text: "Simple and personal, best for reflection and emotional discipline.",
  },
];

const habitSteps = [
  "Create one simple template that is easy to complete.",
  "Log the trade during or immediately after the decision.",
  "Save chart screenshots if possible for future review.",
  "Write one specific lesson from every decision.",
  "Review your journal once per week.",
  "Look for repeated mistakes after enough entries.",
];

const reviewMethods = [
  {
    title: "Weekly Review",
    items: [
      "Review all entries from the week.",
      "Check whether you followed your rules.",
      "Note one emotional pattern.",
      "Choose one improvement for next week.",
    ],
  },
  {
    title: "Monthly Review",
    items: [
      "Compare wins, losses, and break-even decisions.",
      "Review average discipline rating.",
      "Look for repeated setup types.",
      "Check if position size stayed consistent.",
    ],
  },
  {
    title: "Long-Term Review",
    items: [
      "Identify your strongest and weakest habits.",
      "Remove patterns that repeatedly cause losses.",
      "Improve your checklist and decision rules.",
      "Focus on process quality, not only results.",
    ],
  },
];

const mistakes = [
  {
    title: "Only logging winning trades",
    text: "Losses often contain the most useful lessons. Skipping them creates a false picture.",
  },
  {
    title: "Writing entries too late",
    text: "If you wait too long, memory changes the story. Log while the details are fresh.",
  },
  {
    title: "Being too vague",
    text: "A note like “bad trade” is not useful. Write what rule was missed or what emotion affected the decision.",
  },
  {
    title: "Never reviewing the journal",
    text: "A journal only becomes powerful when you review it and act on the patterns.",
  },
  {
    title: "Overcomplicating the template",
    text: "Too many fields can make journaling feel heavy. Start simple and improve over time.",
  },
];

const launchChecklist = [
  "Choose your journaling tool today.",
  "Create a simple template with the key fields.",
  "Log your next trade, even if it is small.",
  "Add a lesson learned after every decision.",
  "Review your journal weekly.",
  "Use your repeated mistakes to improve your rules.",
];

export default function TradingJournalBlog() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Trading Journal
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 10 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        How to Build a Trading Journal
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Calendar size={15} /> May 13, 2026
        </span>
        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Journal • Psychology • Improvement
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        A trading journal turns random decisions into structured learning. It
        helps you understand what you did, why you did it, how you felt, and
        what you can improve next time.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          ["Track", "Record each decision clearly."],
          ["Review", "Find repeated patterns."],
          ["Improve", "Turn lessons into rules."],
        ].map(([title, text]) => (
          <div
            key={title}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-300">
              {title}
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            01 · Why It Matters
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Why Most Beginners Do Not Journal
          </h2>

          <p>
            Many beginners avoid journaling because it feels slow or boring.
            They believe they will remember the important decisions later. In
            reality, memory is not a reliable performance tracker.
          </p>

          <p className="mt-4">
            People often remember wins more clearly than losses, justify poor
            decisions after the result, or forget the emotional pressure they
            felt in the moment. A journal creates an honest record.
          </p>
        </section>

        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
          <p className="text-xl font-semibold italic text-blue-900 dark:text-blue-100">
            “Your edge may be hidden inside the data you are not yet collecting.”
          </p>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            02 · Example Entry
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Anatomy of a Good Journal Entry
          </h2>

          <p>
            A good journal entry should be detailed enough to teach you
            something later, but simple enough that you can actually complete it
            consistently.
          </p>

          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4 dark:border-white/10">
              <div>
                <p className="font-bold text-slate-950 dark:text-white">
                  Example Entry
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Tuesday, May 13 — BTC
                </p>
              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                Win
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <InfoBox label="Buy Price" value="$96,450" />
              <InfoBox label="Sell Price" value="$100,310" />
              <InfoBox label="Result" value="+4.0%" tone="positive" />
              <InfoBox label="Risk" value="1.8%" />
              <InfoBox label="Confidence" value="Medium" />
              <InfoBox label="Discipline" value="8/10" />
            </div>

            <div className="mt-5 rounded-2xl bg-white p-4 text-sm leading-7 text-slate-600 dark:bg-white/5 dark:text-slate-300">
              <strong className="text-slate-950 dark:text-white">
                Notes:
              </strong>{" "}
              Entered after price reacted from a key level. Felt nervous during
              the pullback but followed the plan. Lesson: wait for confirmation
              and avoid closing only because of anxiety.
            </div>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            03 · Key Fields
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Essential Fields to Track
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {journalFields.map(([code, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex gap-4">
                  <span className="flex h-10 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-xs font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                    {code}
                  </span>

                  <div>
                    <h3 className="font-bold text-slate-950 dark:text-white">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            04 · Tools
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Choosing Your Journaling Tool
          </h2>

          <p>
            The best journal is the one you will use consistently. Start with a
            simple tool and upgrade only when journaling becomes a habit.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                  {tool.name === "Spreadsheet" ? (
                    <FileSpreadsheet size={24} />
                  ) : tool.name === "Journal App" ? (
                    <BarChart3 size={24} />
                  ) : (
                    <NotebookPen size={24} />
                  )}
                </div>

                <h3 className="font-bold text-slate-950 dark:text-white">
                  {tool.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-300">
                  {tool.type}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {tool.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            05 · Build the Habit
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            A Simple Step-by-Step Setup
          </h2>

          <div className="space-y-4">
            {habitSteps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            06 · Review Process
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            How to Analyse Your Journal
          </h2>

          <p>
            Entries are only the first step. The real value comes from reviewing
            them and turning repeated observations into better rules.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {reviewMethods.map((method) => (
              <div
                key={method.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="font-bold text-slate-950 dark:text-white">
                  {method.title}
                </h3>

                <div className="mt-4 space-y-3">
                  {method.items.map((item) => (
                    <div key={item} className="flex gap-2">
                      <CheckCircle
                        size={17}
                        className="mt-1 shrink-0 text-emerald-500"
                      />
                      <p className="m-0 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            07 · Mistakes
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Common Journaling Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            {mistakes.map((mistake, index) => (
              <div
                key={mistake.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-300">
                  0{index + 1}
                </p>
                <h3 className="mt-1 font-bold text-slate-950 dark:text-white">
                  {mistake.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {mistake.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-950 p-8 text-white">
          <div className="mb-4 flex items-center gap-3 text-emerald-300">
            <PenLine size={24} />
            <p className="m-0 text-sm font-semibold uppercase tracking-wide">
              Launch Checklist
            </p>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-white">
            Start Simple. Stay Consistent.
          </h2>

          <div className="mt-5 space-y-3">
            {launchChecklist.map((item) => (
              <div key={item} className="flex gap-3">
                <Star size={18} className="mt-1 shrink-0 text-emerald-300" />
                <p className="m-0 text-sm leading-7 text-slate-300">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            The journal will not make someone better overnight. But after weeks
            or months of consistent entries, it can reveal personal patterns no
            course or video can show.
          </p>
        </section>
      </div>
    </article>
  );
}

function InfoBox({
  label,
  value,
  tone = "neutral",
}: {
  label: string;
  value: string;
  tone?: "neutral" | "positive";
}) {
  return (
    <div className="rounded-2xl bg-white p-4 dark:bg-white/5">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p
        className={`mt-1 font-bold ${
          tone === "positive"
            ? "text-emerald-600 dark:text-emerald-300"
            : "text-slate-950 dark:text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}