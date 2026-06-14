import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import FAQSchema from "../../schemas/FAQSchema";

const learningProblems = [
  {
    problem: "Too much information arriving at once",
    better:
      "Choose one topic to focus on and understand it before moving to the next. Start with Bitcoin basics.",
  },
  {
    problem: "Too many conflicting opinions",
    better:
      "Select two or three educational sources you trust and use those as your primary learning material for a set period.",
  },
  {
    problem: "Feeling overwhelmed by terminology",
    better:
      "Keep a simple glossary. When you encounter a new term, write down the definition in your own words.",
  },
  {
    problem: "Pressure from fast-moving markets",
    better:
      "Accept that you do not need to monitor prices constantly while learning. Daily or weekly reviews are enough at the beginning.",
  },
  {
    problem: "Fear of making mistakes",
    better:
      "Shift the focus from acting to understanding. The goal at the beginning is knowledge, not activity.",
  },
  {
    problem: "Feeling behind compared to others",
    better:
      "Remember that visible expertise online reflects years of learning that happened off-screen.",
  },
  {
    problem: "Not knowing where to start",
    better:
      "Start with Bitcoin. It is the most documented cryptocurrency and gives beginners a clear foundation.",
  },
];

const commonMistakes = [
  "Trying to learn everything at once",
  "Following too many influencers",
  "Skipping the basics",
  "Chasing hype instead of understanding",
  "Not asking questions when something feels unclear",
];

const signsOfLearning = [
  "You understand common crypto terms without stopping every few seconds.",
  "You feel less overwhelmed than you did before.",
  "You recognize risky claims, pressure, and unrealistic promises more easily.",
  "You ask better and more specific questions.",
  "You become more patient with market movements and social media noise.",
];

const faqs = [
  {
    question: "Why is crypto so confusing for beginners?",
    answer:
      "Crypto is confusing because it combines technology, finance, economics, security, and market psychology at the same time. Each area has its own terms and learning curve, so feeling confused at first is completely normal.",
  },
  {
    question: "Is it normal to feel overwhelmed by crypto?",
    answer:
      "Yes. Most people who understand crypto today felt overwhelmed in the beginning. The key is not to rush. Start with basic concepts and build your understanding slowly.",
  },
  {
    question: "How long does it take to understand crypto?",
    answer:
      "A basic understanding can develop over several months of consistent learning. Becoming comfortable with the wider crypto space takes longer, and there is no fixed timeline.",
  },
  {
    question: "What should I learn first in crypto?",
    answer:
      "Start with Bitcoin, then learn blockchain basics, wallets, exchanges, market terminology, and risk management. Learning in order makes crypto much easier to understand.",
  },
  {
    question: "Can beginners understand crypto without technical knowledge?",
    answer:
      "Yes. You do not need to be a programmer to understand crypto basics. The most important beginner skills are patience, security awareness, risk management, and the ability to evaluate information carefully.",
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

export default function WhyCryptoFeelsConfusingAtFirst() {
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
              <Clock size={16} /> 14 min read
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Why Crypto Feels Confusing at First
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Feeling lost in crypto? You are not alone. This beginner-friendly
            guide explains why crypto feels confusing at first and how to start
            making sense of it step by step.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
            <img
              src="/images/why-crypto-feels-confusing-at-first/hero.png"
              alt="Beginner learning cryptocurrency concepts on a laptop"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </header>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Why Crypto Feels So Overwhelming in the Beginning
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              If you have spent any time trying to understand cryptocurrency and
              walked away feeling more confused than when you started, you are
              not alone. Nearly every beginner goes through a stage where almost
              nothing seems to make sense.
            </p>

            <p>
              The words are unfamiliar, the technology feels abstract, the
              market moves quickly, and people online often speak as if everyone
              already understands the basics.
            </p>

            <p>
              That confusion does not mean crypto is beyond you. It simply means
              you are learning a subject that combines technology, money,
              security, human behaviour, and global markets at the same time.
            </p>

            <p>
              This article will help you understand why crypto feels confusing
              at first and how beginners can make the learning process easier,
              calmer, and more structured.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Too Many New Terms at Once
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              One of the first reasons crypto feels confusing is the amount of
              new vocabulary beginners face almost immediately.
            </p>

            <p>
              You may open one beginner article and quickly see words like
              blockchain, wallet, exchange, private key, public address, market
              cap, and volatility. Each term matters, and each one connects to
              another idea that also needs explaining.
            </p>

            <p>
              Blockchain is the technology that records crypto transactions. A
              wallet helps you access and manage cryptocurrency. An exchange is
              a platform where people buy and sell crypto. A private key proves
              ownership and should never be shared.
            </p>

            <p>
              Market cap measures the total value of a cryptocurrency, while
              volatility describes how quickly and sharply prices move.
            </p>

            <p>
              None of these terms need to be mastered in one day. The important
              thing is to understand that feeling confused by new vocabulary is
              normal when you are entering a specialized subject for the first
              time.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Crypto Combines Multiple Worlds
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Crypto is not only one subject. It is a mix of several different
              areas that beginners are often expected to understand at the same
              time.
            </p>

            <p>
              There is technology, because blockchain is a new way of recording
              and verifying information. There is finance, because
              cryptocurrencies are digital assets that trade in open markets.
            </p>

            <p>
              There is economics, because supply, demand, inflation, market
              cycles, and global events can affect how people think about
              crypto.
            </p>

            <p>
              There is security, because users need to understand private keys,
              seed phrases, phishing scams, and safe platform habits.
            </p>

            <p>
              There is also psychology, because markets are influenced by fear,
              greed, excitement, panic, and uncertainty.
            </p>

            <p>
              Most beginner topics require one or two areas of learning. Crypto
              asks for many at once, which is why the learning curve can feel
              steeper than expected.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Social Media Makes Crypto Harder to Understand
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              For many beginners, social media is the first place they discover
              crypto. The problem is that social media often rewards excitement,
              certainty, and dramatic claims more than calm education.
            </p>

            <p>
              A beginner may see confident predictions, success stories,
              trending coins, and urgent posts suggesting that something
              important is happening right now.
            </p>

            <p>
              What they usually see less often is the full context: the risks,
              the losses, the years of learning, and the uncertainty behind
              market opinions.
            </p>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
              <img
                src="/images/why-crypto-feels-confusing-at-first/social-media.png"
                alt="Social media crypto hype and market confusion"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <p>
              Conflicting advice makes the confusion even worse. One person says
              a market move is bullish, another says it is dangerous, and both
              may sound confident. Without a foundation, beginners cannot easily
              judge which view makes sense.
            </p>

            <p>
              Social media can be useful later, but it is not the best
              foundation for early crypto education. Beginners need clarity
              before noise.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Markets Move Fast
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Crypto markets move quickly. Prices can change within hours or
              minutes, and news can affect sentiment almost instantly.
            </p>

            <p>
              For someone still learning the basics, this speed can create
              pressure. It may feel like you need to understand everything right
              now before the next opportunity disappears.
            </p>

            <p>
              That pressure is dangerous for beginners because it encourages
              rushed decisions. When prices rise, excitement can take over. When
              prices fall, fear can take over.
            </p>

            <p>
              A beginner does not need to watch every price movement. In the
              early stage, learning matters more than reacting. The market will
              keep moving, but your goal is to build understanding slowly enough
              that it actually stays with you.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Everyone Seems More Advanced
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Another reason beginners feel confused is that crypto communities
              are often full of people who already know the language.
            </p>

            <p>
              You may see charts, abbreviations, debates, and technical
              explanations that assume a level of knowledge you do not yet have.
              This can make crypto feel like a closed circle.
            </p>

            <p>
              But the people having advanced discussions were beginners once
              too. Their early confusion is usually invisible because you are
              only seeing them after years of learning.
            </p>

            <p>
              You are not behind. You are simply at the beginning. Understanding
              crypto properly is not about starting earlier than everyone else.
              It is about learning carefully enough to make better decisions
              over time.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Common Beginner Mistakes That Increase Confusion
          </h2>

          <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
            Some confusion is normal, but certain habits can make it worse.
          </p>

          <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
            {commonMistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            How to Make Crypto Easier to Understand
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10">
                  <th className="py-4 pr-4 text-slate-950 dark:text-white">
                    Beginner Problem
                  </th>
                  <th className="py-4 pr-4 text-slate-950 dark:text-white">
                    Better Approach
                  </th>
                </tr>
              </thead>

              <tbody>
                {learningProblems.map((row) => (
                  <tr
                    key={row.problem}
                    className="border-b border-slate-200 last:border-0 dark:border-white/10"
                  >
                    <td className="py-4 pr-4 font-bold text-slate-900 dark:text-white">
                      {row.problem}
                    </td>
                    <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                      {row.better}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Signs You Are Actually Learning
          </h2>

          <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
            {signsOfLearning.map((sign) => (
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
            Conclusion: Confusion Is Part of the Beginning
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Crypto feels confusing at first because it genuinely is complex.
              It asks beginners to learn new technology, new financial ideas,
              new vocabulary, new security habits, and new ways of thinking
              about markets.
            </p>

            <p>
              But that does not mean crypto is impossible to understand. It
              means patience and structure matter.
            </p>

            <p>
              Take your time. Focus on the basics first. Ask questions. Avoid
              rushing because of social media pressure. Let confusion be a sign
              that something needs more attention, not a reason to quit.
            </p>

            <p>
              Every person who understands crypto well was once exactly where
              you are now.
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