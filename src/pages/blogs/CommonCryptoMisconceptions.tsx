import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import FAQSchema from "../../schemas/FAQSchema";

const misconceptionsTable = [
  {
    misconception: "Crypto is guaranteed money",
    reality:
      "Crypto involves uncertainty, risk, and no guaranteed profits.",
  },
  {
    misconception: "Bitcoin is too expensive",
    reality:
      "Bitcoin is divisible into small fractions called satoshis.",
  },
  {
    misconception: "All cryptocurrencies are the same",
    reality:
      "Each crypto project has different purposes, risks, and technologies.",
  },
  {
    misconception: "Crypto is anonymous",
    reality:
      "Most blockchain transactions are public and traceable.",
  },
  {
    misconception: "Popular coins are safe",
    reality:
      "Popularity does not remove risk or volatility.",
  },
  {
    misconception: "Daily trading is necessary",
    reality:
      "Quality of decisions matters more than frequency.",
  },
  {
    misconception: "Bigger risks always mean bigger rewards",
    reality:
      "Higher risk increases both profit and loss potential.",
  },
  {
    misconception: "Crypto is only for rich people",
    reality:
      "Education is free and crypto can be started with small amounts.",
  },
];

const betterFocus = [
  "Learn Bitcoin basics first.",
  "Understand blockchain fundamentals.",
  "Practice risk management early.",
  "Build security awareness.",
  "Develop strong research habits.",
  "Be patient and avoid rushing.",
];

const signsOfProgress = [
  "Less emotional decision-making.",
  "Asking better and deeper questions.",
  "More realistic expectations.",
  "Improved understanding of risk.",
  "Better interpretation of market behavior.",
];

const faqs = [
  {
    question: "What are the most common crypto misconceptions?",
    answer:
      "Some of the most common are believing crypto guarantees profit, Bitcoin is too expensive, all cryptocurrencies are the same, and popular coins are automatically safe.",
  },
  {
    question: "Is crypto guaranteed to make money?",
    answer:
      "No. Crypto markets are volatile and uncertain. There are no guaranteed profits in any cryptocurrency.",
  },
  {
    question: "Do I need a lot of money to start crypto?",
    answer:
      "No. The best place to start is education, and crypto itself can be bought in small fractions.",
  },
  {
    question: "Is crypto only for technical experts?",
    answer:
      "No. Beginners can understand crypto fundamentals without technical expertise if they learn step by step.",
  },
  {
    question: "How can beginners avoid crypto misunderstandings?",
    answer:
      "By learning from reliable sources, verifying information, and avoiding emotional or hype-driven decisions.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-5 last:border-0 dark:border-white/10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-bold text-slate-950 dark:text-white">
          {question}
        </span>

        <ChevronDown
          size={20}
          className={`shrink-0 text-blue-600 transition dark:text-blue-400 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function CommonCryptoMisconceptions() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <article className="premium-card mx-auto max-w-5xl p-8 sm:p-10 lg:p-12">
        <header>
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
              Beginner Guide
            </span>

            <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <Clock size={16} /> 8 min read
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Common Crypto Misconceptions Beginners Should Understand Early
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Learn the most common crypto misconceptions beginners believe and
            discover the honest reality behind them. Build smarter foundations
            before making decisions.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
            <img
              src="/images/common-crypto-misconceptions/hero.png"
              alt="Crypto misconceptions and beginner education"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </header>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            The Ideas You Bring Before You Even Start
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Most beginners enter crypto with beliefs already formed from
              headlines, social media, and conversations.
            </p>

            <p>
              Some of those beliefs are helpful. Many are misleading,
              incomplete, or shaped by hype and strong opinions.
            </p>

            <p>
              These misconceptions affect how beginners interpret opportunities,
              understand risks, and react emotionally to market changes.
            </p>

            <p>
              Correcting these misconceptions early creates a stronger and more
              realistic foundation for learning.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Why Crypto Misconceptions Are So Common
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Crypto moves fast. Markets, regulations, technology, and public
              narratives change quickly, making it hard for beginners to keep up.
            </p>

            <p>
              Social media rewards attention, not accuracy. This often pushes
              hype, dramatic claims, and simplified ideas to the top.
            </p>

            <p>
              The technical side of crypto also creates confusion. When
              beginners do not fully understand how blockchain works,
              misconceptions can spread easily.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Common Crypto Misconceptions Beginners Should Know
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Many beginners believe crypto guarantees money, Bitcoin is too
              expensive, all cryptocurrencies are the same, or that crypto is
              completely private.
            </p>

            <p>
              Others believe popularity equals safety, daily trading is
              necessary, or that only rich people can participate.
            </p>

            <p>
              These beliefs often lead to emotional decisions, poor research,
              unnecessary risk, and unrealistic expectations.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            How Misconceptions Can Lead to Mistakes
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Misconceptions can push beginners into emotional decisions,
              overconfidence, chasing hype, and ignoring risk management.
            </p>

            <p>
              They can also make beginners more vulnerable to scams and
              misleading information.
            </p>

            <p>
              Accurate understanding protects you better than confidence built
              on false assumptions.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            What Beginners Should Focus On Instead
          </h2>

          <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
            {betterFocus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Misconception vs Reality
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10">
                  <th className="py-4 pr-4 text-slate-950 dark:text-white">
                    Misconception
                  </th>
                  <th className="py-4 pr-4 text-slate-950 dark:text-white">
                    Reality
                  </th>
                </tr>
              </thead>

              <tbody>
                {misconceptionsTable.map((row) => (
                  <tr
                    key={row.misconception}
                    className="border-b border-slate-200 last:border-0 dark:border-white/10"
                  >
                    <td className="py-4 pr-4 font-bold text-slate-900 dark:text-white">
                      {row.misconception}
                    </td>
                    <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                      {row.reality}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            How to Build a Better Understanding of Crypto
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Learn one topic at a time. Start with Bitcoin, then move into
              wallets, blockchain, security, and market behavior.
            </p>

            <p>
              Use trusted educational sources and ask questions consistently.
              Curiosity and skepticism are valuable in crypto.
            </p>

            <p>
              Avoid rushing. There is no deadline in crypto education.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Signs You Are Thinking More Clearly About Crypto
          </h2>

          <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
            {signsOfProgress.map((sign) => (
              <li key={sign}>{sign}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Frequently Asked Questions
          </h2>

          <div className="mt-6">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Conclusion: Question Assumptions, Build Understanding
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Misconceptions are common because crypto is complex, fast-moving,
              and heavily influenced by hype.
            </p>

            <p>
              Understanding these misconceptions early helps beginners avoid
              emotional mistakes, scams, and poor decisions.
            </p>

            <p>
              Build your understanding from credible sources. Learn patiently.
              Question what you hear. Focus on knowledge before action.
            </p>

            <p>
              That mindset will serve you far better than any shortcut.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-amber-200">
            Educational content only. Not financial advice. Always do your own
            research and make responsible decisions.
          </div>
        </section>
      </article>
    </>
  );
}