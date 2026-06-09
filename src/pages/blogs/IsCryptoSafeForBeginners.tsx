import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import FAQSchema from "../../schemas/FAQSchema";

const risks = [
  "Volatility and sharp price swings",
  "Scams and fake projects",
  "Emotional decision-making",
  "Lack of research",
  "Poor wallet security habits",
  "Fear of missing out",
];

const safeHabits = [
  "Learn before making financial decisions.",
  "Understand Bitcoin basics first.",
  "Use trusted educational resources.",
  "Learn risk management from the beginning.",
  "Avoid hype-driven decisions.",
  "Take time to understand how markets work.",
];

const comparisonRows = [
  {
    topic: "Market history",
    bitcoin: "Over fifteen years of price history with extensive documentation",
    smaller: "Most have much shorter track records",
  },
  {
    topic: "Adoption",
    bitcoin: "Most widely recognised cryptocurrency globally",
    smaller: "Varies widely, many have limited adoption",
  },
  {
    topic: "Volatility",
    bitcoin: "Still volatile, but generally less than smaller assets",
    smaller: "Often highly volatile with extreme price swings",
  },
  {
    topic: "Risk level",
    bitcoin: "High risk, but usually lower than most smaller cryptocurrencies",
    smaller: "Usually higher risk, including possible total loss",
  },
  {
    topic: "Beginner friendliness",
    bitcoin: "Most educational resources and clearer information",
    smaller: "Harder to research and often less reliable information",
  },
  {
    topic: "Scam risk",
    bitcoin: "Lower, though impersonation scams still exist",
    smaller: "Higher, especially among unknown projects",
  },
];

const faqs = [
  {
    question: "Is crypto safe for complete beginners?",
    answer:
      "Crypto is neither automatically safe nor automatically dangerous. It carries real risks, but beginners can reduce many avoidable mistakes by learning first, building good security habits, managing risk carefully, and avoiding emotional decisions.",
  },
  {
    question: "Can beginners lose money in crypto?",
    answer:
      "Yes. Beginners can lose money because crypto markets are volatile, scams exist, and security mistakes can be permanent. Anyone engaging financially should only use money they can genuinely afford to lose.",
  },
  {
    question: "Is Bitcoin safer than other cryptocurrencies?",
    answer:
      "Bitcoin is generally considered lower risk than most smaller cryptocurrencies because it has a longer history, wider adoption, stronger liquidity, and more educational resources. But Bitcoin is still volatile and not risk-free.",
  },
  {
    question: "What is the safest way to start learning crypto?",
    answer:
      "The safest starting point is education with no financial risk: books, beginner guides, trusted data platforms, and professional research sources. Build understanding before making any financial decision.",
  },
  {
    question: "Should I learn before investing in crypto?",
    answer:
      "Yes. Learning before investing is one of the most important safety habits in crypto. Understand Bitcoin, wallets, scams, risk management, and market basics before putting money at risk.",
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

export default function IsCryptoSafeForBeginners() {
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
            <Clock size={16} /> 13 min read
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Is Crypto Safe for Beginners?
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Is crypto safe for beginners? This honest guide covers crypto risks,
          safety habits, Bitcoin basics, and how to start learning responsibly
          without hype or fear.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <img
            src="/images/is-crypto-safe-for-beginners/hero.png"
            alt="Clean desk with a laptop showing a Bitcoin chart"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </header>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Why Crypto Feels Risky Before You Even Start
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            For many beginners, the first real exposure to cryptocurrency is not
            a calm educational article. It is often a headline about a hack, a
            story about someone losing savings, a warning from a family member,
            or a social media post that looks impossible to trust.
          </p>

          <p>
            Before a beginner has even learned what Bitcoin actually is, they
            have often already absorbed a confusing mixture of excitement and
            fear. Crypto is either presented as a life-changing opportunity or a
            dangerous trap, and very little online content sits honestly between
            those two extremes.
          </p>

          <p>
            The honest answer is that crypto is neither automatically safe nor
            automatically dangerous. It is a space where outcomes are shaped
            enormously by how someone approaches it.
          </p>

          <p>
            A beginner who rushes in without understanding faces a very
            different set of risks than someone who takes time to learn, builds
            knowledge carefully, and approaches every decision with realistic
            expectations.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Why Many Beginners Worry About Crypto Safety
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            The concerns beginners have about crypto are not irrational. They
            come from real experiences that real people have had, and
            understanding where those concerns come from is part of thinking
            clearly.
          </p>

          <p>
            Crypto-related scams are a genuine problem. Fake investment
            platforms, impersonation schemes, phishing websites, and fraudulent
            projects have caused people to lose real money.
          </p>

          <p>
            Beyond scams, there is the simpler fear of making a bad financial
            decision. Crypto markets are volatile, prices can fall sharply, and
            many people who have put money into digital assets have experienced
            losses.
          </p>

          <p>
            Social media also makes the space harder to understand. A lot of
            online crypto content is promotional, emotional, or misleading, and
            beginners often struggle to separate education from hype.
          </p>

          <p>
            Even the language can feel intimidating. Terms like blockchain,
            seed phrase, private key, wallet, and decentralised finance create a
            barrier before someone has even started learning properly.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Is Crypto Actually Safe for Beginners?
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Crypto carries real risks, and those risks can be managed with the
            right approach, but they do not disappear entirely no matter how
            carefully you prepare.
          </p>

          <p>
            The most important factor is education. A beginner who understands
            what Bitcoin is, how wallets work, how markets behave, and how scams
            operate is in a very different position from someone who acts on a
            random social media tip.
          </p>

          <p>
            Risk management is not optional. Only engaging with money you can
            genuinely afford to lose, understanding what could go wrong, and
            building secure habits are foundational practices.
          </p>

          <p>
            Many of the worst beginner outcomes come from avoidable mistakes:
            storing seed phrases insecurely, using unverified platforms, acting
            on hype, and making emotional decisions during market volatility.
          </p>

          <p>
            There is no urgency in crypto education. Starting slowly and
            resisting pressure to move faster than your understanding supports
            makes the learning process safer and more productive.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          The Biggest Crypto Risks Beginners Should Understand
        </h2>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          Understanding the specific risks you face is one of the most useful
          things a beginner can do before engaging with crypto in any meaningful
          way.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
          {risks.map((risk) => (
            <li key={risk}>{risk}</li>
          ))}
        </ul>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Volatility is real. Bitcoin and other cryptocurrencies can
            experience large price swings, and smaller assets can move even more
            dramatically.
          </p>

          <p>
            Scams are also real. Because crypto transactions are often
            irreversible and the space can be technical, dishonest actors use
            confusion to target beginners.
          </p>

          <p>
            Emotional decision-making is another major risk. Buying out of
            excitement and selling out of panic are two patterns that regularly
            hurt beginners.
          </p>

          <p>
            Poor security habits can be permanent. If someone gets your seed
            phrase, they can take your funds. If you send crypto to the wrong
            address, the transaction usually cannot be reversed.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          How Beginners Can Learn Crypto More Safely
        </h2>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          Knowing the risks is useful. Knowing what to do about them is what
          actually changes outcomes.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
          {safeHabits.map((habit) => (
            <li key={habit}>{habit}</li>
          ))}
        </ul>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Learning before putting money at risk is not being overly cautious.
            It is being appropriately responsible. There is no financial
            decision in crypto that is so urgent it cannot wait until you have
            built real understanding.
          </p>

          <p>
            Bitcoin is the best starting point for most beginners because it has
            the longest history, the most reliable educational resources, and the
            clearest foundation for understanding the wider crypto space.
          </p>

          <p>
            Trusted educational resources matter. Books, research platforms,
            data websites, and structured guides are stronger foundations than
            influencer opinions or hype-driven social media posts.
          </p>

          <p>
            The habit of pausing when you feel excited, afraid, or pressured is
            one of the most protective habits a beginner can build.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Signs a Beginner Is Approaching Crypto the Right Way
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            A responsible beginner learns slowly and deliberately. They care
            more about understanding properly than moving quickly.
          </p>

          <p>
            They ask questions rather than assume. They verify claims before
            accepting them and seek more than one reliable source before forming
            a view.
          </p>

          <p>
            They avoid emotional decisions. They do not buy because of excitement
            or sell because of fear. They pause, think, and research first.
          </p>

          <p>
            They are patient. Patience in crypto is not just a nice quality. It
            is a practical tool that protects beginners from many avoidable
            mistakes.
          </p>

          <p>
            They focus on education rather than outcomes. A strong foundation
            supports better decisions across changing market conditions.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Common Mistakes Beginners Make
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            One common mistake is trusting influencers blindly. Some online
            personalities have genuine knowledge, but many have incentives that
            may not align with your interests as a learner.
          </p>

          <p>
            Another mistake is chasing hype or viral coins. By the time
            excitement is everywhere, the sharpest part of the move may already
            have happened.
          </p>

          <p>
            Investing without understanding is also dangerous. Putting money
            into something you do not understand is not responsible investing. It
            is exposure to risk without a framework.
          </p>

          <p>
            Ignoring risk management is one of the biggest mistakes beginners
            make. Risk management should be the starting point, not something you
            come back to later.
          </p>

          <p>
            Finally, many beginners think crypto is a quick-money shortcut. That
            expectation leads to impatience, emotional decisions, and unnecessary
            risk.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Is Bitcoin Safer Than Other Cryptocurrencies?
        </h2>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          Bitcoin and smaller cryptocurrencies carry different risk profiles.
          Bitcoin is not risk-free, but it is usually a more transparent
          starting point for beginners because of its longer history and wider
          documentation.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Topic
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Bitcoin
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Smaller Cryptocurrencies
                </th>
              </tr>
            </thead>

            <tbody>
              {comparisonRows.map((row) => (
                <tr
                  key={row.topic}
                  className="border-b border-slate-200 last:border-0 dark:border-white/10"
                >
                  <td className="py-4 pr-4 font-bold text-slate-900 dark:text-white">
                    {row.topic}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.bitcoin}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.smaller}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          This does not mean Bitcoin is safe in an absolute sense. It remains
          volatile and uncertain. It simply means Bitcoin offers the clearest and
          most thoroughly documented foundation for beginners to study first.
        </p>
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
          Conclusion: Safety in Crypto Starts With Education
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            The question of whether crypto is safe for beginners does not have a
            simple yes or no answer. Any article that offers one is not being
            honest with you.
          </p>

          <p>
            Crypto carries real risks. Volatility, scams, security
            vulnerabilities, and emotional decision-making are genuine concerns.
            None of them should be minimised.
          </p>

          <p>
            But many of the most serious risks beginners face are shaped by how
            they approach the space. Rushing in without understanding is very
            different from learning slowly, managing risk carefully, and using
            reliable information sources.
          </p>

          <p>
            If you are nervous about crypto, that nervousness is reasonable. Do
            not let it push you away from learning, but do let it remind you that
            education should come before action.
          </p>

          <p>
            There is no rush. The space will still be there when you are ready.
            Your understanding of it is more valuable than your speed in entering
            it.
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