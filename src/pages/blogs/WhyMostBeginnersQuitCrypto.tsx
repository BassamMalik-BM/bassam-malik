import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import FAQSchema from "../../schemas/FAQSchema";

const motivationRows = [
  {
    challenge: "Feeling overwhelmed",
    approach: "Choose one topic at a time and finish it before moving on.",
  },
  {
    challenge: "Too many sources",
    approach: "Stick to two or three reliable educational sources.",
  },
  {
    challenge: "Fear of mistakes",
    approach: "Treat mistakes as part of the learning process.",
  },
  {
    challenge: "Slow progress",
    approach: "Keep a simple learning journal to track what you understand.",
  },
  {
    challenge: "Market stress",
    approach: "Step back from price charts when they create pressure.",
  },
];

const faqs = [
  {
    question: "Why do so many beginners quit crypto?",
    answer:
      "Most beginners quit because of unrealistic expectations, early losses, information overload, and emotional stress. Many people are not prepared for how slow and confusing the early learning stage can feel.",
  },
  {
    question: "Is crypto too difficult for beginners?",
    answer:
      "No. Crypto can feel difficult at first because the terminology, technology, and market behavior are unfamiliar. But the core concepts are learnable with patience and consistent study.",
  },
  {
    question: "How can beginners avoid giving up?",
    answer:
      "Start with fundamentals, avoid hype-driven content, learn risk management early, use reliable educational sources, and track progress by knowledge rather than outcomes.",
  },
  {
    question: "What is the biggest mistake beginners make?",
    answer:
      "The biggest mistake is treating crypto as a way to get quick results instead of treating it as a subject that requires education, patience, and responsible decision-making.",
  },
  {
    question: "How long does it take to become comfortable with crypto?",
    answer:
      "Many beginners can understand the basics within three to six months of consistent study. Becoming truly comfortable usually takes longer because crypto keeps evolving.",
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

export default function WhyMostBeginnersQuitCrypto() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      <article className="premium-card mx-auto max-w-5xl p-8 sm:p-10 lg:p-12">
        <header>
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
              Beginner Education
            </span>

            <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <Clock size={16} /> 9 min read
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Why Most Beginners Quit Crypto And How to Avoid Their Mistakes
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Discover why most beginners quit crypto and how to avoid the same
            traps. A realistic, beginner-friendly guide to staying focused on
            education, patience, and steady progress.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
            <img
              src="/images/why-most-beginners-quit-crypto/hero.png"
              alt="Why most beginners quit crypto"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </header>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <div className="space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Every day, new people discover cryptocurrency for the first time.
              They read about it, watch a few videos, open an account somewhere,
              and start exploring. The early excitement is real. Crypto feels
              like something big, something worth understanding, and for a while,
              learning about it feels energizing.
            </p>

            <p>
              Then, after a few weeks or months, many of those same people
              quietly disappear. They stop reading, stop learning, and decide
              that crypto was simply not for them.
            </p>

            <p>
              This does not usually happen because beginners lack intelligence.
              It happens because the experience does not match what they
              expected. The early stages of crypto learning can feel confusing,
              slow, emotional, and noisy.
            </p>

            <p>
              If you are feeling frustrated, overwhelmed, or discouraged right
              now, that does not mean you are failing. Struggling in the
              beginning is normal. The important thing is understanding why
              people quit, so you can avoid the same mistakes.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Why Crypto Feels Difficult for Beginners
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Crypto feels difficult because beginners are introduced to many
              new ideas at the same time. Words like blockchain, wallet, private
              key, market cap, liquidity, volatility, and on-chain activity
              appear everywhere, often without simple explanation.
            </p>

            <p>
              The technology is also genuinely different. Blockchain changes how
              people think about ownership, trust, and digital value. That kind
              of concept takes time to absorb.
            </p>

            <p>
              On top of that, crypto markets can move quickly. Price changes,
              social media opinions, and constant predictions create emotional
              pressure. For someone still learning the basics, that pressure can
              feel exhausting.
            </p>

            <p>
              Crypto is not impossible to learn. It only becomes overwhelming when you try
              to understand everything at once. Most beginners make faster progress when
              they focus on one concept at a time and build their knowledge gradually.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            The Most Common Reasons Beginners Quit Crypto
          </h2>

          <ul className="mt-6 list-disc space-y-3 pl-6 text-slate-700 dark:text-slate-300">
            <li>Expecting quick profits instead of focusing on learning.</li>
            <li>Following hype instead of building strong fundamentals.</li>
            <li>Losing money early without understanding risk management.</li>
            <li>Trying to learn everything at once.</li>
            <li>Allowing fear, stress, or FOMO to influence decisions.</li>
            <li>Comparing their progress to social media highlight reels.</li>
        </ul>

          <div className="mt-6 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              The most common reason is unrealistic expectations. Many beginners
              enter crypto expecting quick results. When the reality turns out
              to be learning, research, patience, and risk awareness, they lose
              motivation.
            </p>

            <p>
              Another major reason is hype. Instead of learning Bitcoin basics,
              wallets, security, and market behavior, beginners often chase
              whatever topic is trending. When the excitement fades, there is no
              real foundation underneath.
            </p>

            <p>
              Early losses can also push people away. A beginner who loses money
              without understanding risk management may feel like crypto itself
              was the mistake, when the real issue was entering without enough
              preparation.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            The Impact of Social Media on Beginner Expectations
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Social media can make crypto look easier than it really is. The
              posts that spread the fastest are usually success stories,
              confident predictions, and exciting market moves. The boring parts
              of learning rarely get attention.
            </p>

            <p>
              This creates a distorted picture. Beginners see highlights, not
              the full process. They may start comparing their own confusion to
              someone else&apos;s polished online confidence.
            </p>

            <p>
              Fear of missing out is especially dangerous in the beginning. When
              it looks like everyone else is already ahead, beginners may feel
              pressured to act before they understand what they are doing.
            </p>

            <p>
              Use social media carefully. Prioritize education over noise and avoid
              comparing your learning journey to someone else's highlight reel. Most
              successful learners focus on understanding first and excitement second.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Why Early Losses Cause Many Beginners to Leave
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Financial loss can feel heavy, even when the amount is small. For
              beginners who were not prepared for loss, one bad experience can
              feel like proof that crypto was a mistake.
            </p>

            <p>
              The better way to understand a setback is to treat it as
              information. A mistake can show you what you did not understand
              yet, where your plan was weak, or where emotion took over.
            </p>

            <p>
              This is why risk management belongs at the beginning of crypto
              education. Beginners should understand what they can afford to
              risk, how volatility works, and why emotional decisions can be
              dangerous before they become active in the market.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Common Beginner Mistakes That Lead to Frustration
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Most beginner frustration comes from a few repeated patterns. The
              first is trying to learn everything at once. Crypto is broad, and
              jumping between too many topics usually creates shallow knowledge
              instead of real understanding.
            </p>

            <p>
              Another mistake is skipping fundamentals. Some beginners move past
              Bitcoin basics, blockchain, wallets, and security too quickly.
              Later, advanced topics become confusing because the foundation was
              never built properly.
            </p>

            <p>
              Following influencers blindly is also risky. Some content is
              useful, but much of what circulates online is opinion,
              entertainment, marketing, or speculation. Beginners need
              educational sources, not just loud voices.
            </p>

            <p>
              Skipping research is another silent problem. Every term you ignore
              becomes a gap that makes future learning harder.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            What Successful Learners Do Differently
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              The people who continue learning crypto usually do not have a
              special advantage. They simply approach the process differently.
            </p>

            <p>
              They prioritize education over activity. Instead of asking what
              they can do immediately, they ask what they need to understand
              first.
            </p>

            <p>
              They also accept the timeline. They do not expect to feel
              confident in a few days. They understand that genuine knowledge
              builds slowly through repetition, reading, note-taking, and
              experience.
            </p>

            <p>
              Most importantly, they stay curious. When they see an unfamiliar
              term, they look it up. When they make a mistake, they learn from
              it. When progress feels slow, they keep going.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            How Beginners Can Stay Motivated
          </h2>

          <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
            Motivation becomes easier when you stop measuring progress by
            excitement and start measuring it by understanding.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10">
                  <th className="py-4 pr-4 text-slate-950 dark:text-white">
                    Challenge
                  </th>
                  <th className="py-4 pr-4 text-slate-950 dark:text-white">
                    Better Approach
                  </th>
                </tr>
              </thead>

              <tbody>
                {motivationRows.map((row) => (
                  <tr
                    key={row.challenge}
                    className="border-b border-slate-200 last:border-0 dark:border-white/10"
                  >
                    <td className="py-4 pr-4 font-bold text-slate-900 dark:text-white">
                      {row.challenge}
                    </td>

                    <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                      {row.approach}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Signs You Are Making Progress
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Progress in crypto education is not always obvious. You may not
              feel like you are improving, but there are clear signs that your
              understanding is growing.
            </p>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                You understand common terms like blockchain, wallet, volatility,
                private key, and market cap.
              </li>
              <li>
                You can recognize when content is hype-driven or overly
                speculative.
              </li>
              <li>
                You think about risk before thinking about outcomes.
              </li>
              <li>
                You research unfamiliar terms instead of ignoring them.
              </li>
              <li>
                You feel less pressured by social media and market noise.
              </li>
            </ul>

            <p>
              These milestones may not look exciting, but they are real signs of
              growth.
            </p>
          </div>
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
            Conclusion
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Most people who quit crypto did not lack intelligence. They were
              simply not prepared for what the early learning process would feel
              like. They expected speed and found patience. They expected
              clarity and found confusion. They expected easy progress and found
              a subject that requires real education.
            </p>

            <p>
              Once you understand that pattern, you can avoid it. Focus on
              fundamentals. Be careful with hype. Learn risk management early.
              Give yourself time to improve without comparing your journey to
              anyone else.
            </p>

            <p>
              Every informed person in crypto was once a confused beginner. The
              difference is that they kept learning long enough for the confusion
              to turn into understanding.
            </p>

            <p>Focus on learning. Stay realistic. Give yourself time.</p>
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