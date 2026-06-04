import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";

const lossReasons = [
  "Chasing hype when prices are already moving fast.",
  "Acting from fear of missing out instead of understanding.",
  "Buying assets without proper research.",
  "Making emotional decisions during volatility.",
  "Ignoring risk management.",
  "Following influencers blindly.",
];

const participationRows = [
  {
    approach: "Learning and research",
    explanation:
      "Reading, studying market history, and building understanding before making financial decisions.",
  },
  {
    approach: "Long-term market participation",
    explanation:
      "Researching an asset carefully and holding it through market cycles with patience and risk awareness.",
  },
  {
    approach: "Spot trading",
    explanation:
      "Buying and selling crypto at current market prices with a clear plan, risk management, and emotional discipline.",
  },
  {
    approach: "Building knowledge and skills",
    explanation:
      "Learning chart reading, market behaviour, research habits, security awareness, and responsible decision-making.",
  },
  {
    approach: "Following market developments responsibly",
    explanation:
      "Staying updated through reliable sources without reacting emotionally to every headline or price move.",
  },
];

const mythRows = [
  {
    myth: "Crypto is easy money",
    reality:
      "Crypto involves uncertainty, real losses, volatility, and serious learning requirements.",
  },
  {
    myth: "Everyone who buys crypto gets rich",
    reality:
      "Many participants lose money, and outcomes vary based on timing, decisions, research, and risk management.",
  },
  {
    myth: "More risk always means more rewards",
    reality:
      "Higher risk means higher potential for both gains and losses, not guaranteed better outcomes.",
  },
  {
    myth: "Successful traders never lose",
    reality:
      "Every experienced market participant loses sometimes. Managing losses is part of the process.",
  },
  {
    myth: "One winning trade changes everything",
    reality:
      "Single outcomes rarely define long-term results. Consistency and discipline matter more.",
  },
  {
    myth: "You need inside information to succeed",
    reality:
      "Disciplined research, risk management, and education matter far more than special information.",
  },
  {
    myth: "Social media shows the full picture",
    reality:
      "Online content often highlights wins and hides losses, creating a misleading impression.",
  },
];

const focusRows = [
  {
    skill: "Bitcoin basics",
    why: "Provides one of the clearest foundations for understanding crypto.",
  },
  {
    skill: "Market fundamentals",
    why: "Helps you understand why prices move and how to interpret market behaviour calmly.",
  },
  {
    skill: "Risk management",
    why: "Protects your capital and shapes the quality of every financial decision.",
  },
  {
    skill: "Security awareness",
    why: "Helps prevent avoidable losses from scams, phishing, and poor storage habits.",
  },
  {
    skill: "Research skills",
    why: "Allows you to verify information independently instead of relying on unreliable sources.",
  },
  {
    skill: "Emotional control",
    why: "Protects you from fear, excitement, panic, and impulsive decisions.",
  },
  {
    skill: "Patience",
    why: "Reduces rushed decisions and gives knowledge time to develop properly.",
  },
  {
    skill: "Realistic expectations",
    why: "Prevents disappointment and poor decisions caused by unrealistic beliefs.",
  },
];

const responsibleSigns = [
  "Learning before acting.",
  "Researching projects independently.",
  "Understanding risks honestly.",
  "Practising patience consistently.",
  "Avoiding emotional decisions.",
  "Focusing on continuous improvement.",
];

const faqs = [
  {
    question: "Can beginners really make money in crypto?",
    answer:
      "Yes, it is possible, but it is never guaranteed. Some beginners have positive experiences, while many others lose money. The difference usually comes down to education, risk management, emotional discipline, and realistic expectations.",
  },
  {
    question: "Why do many beginners lose money in crypto?",
    answer:
      "Many beginners lose money because they act without enough understanding, follow hype, ignore risk management, make emotional decisions, rely on influencers, or put in more money than they can genuinely afford to lose.",
  },
  {
    question: "How important is risk management?",
    answer:
      "Risk management is one of the most important skills for any crypto beginner. It helps protect capital, reduce emotional decision-making, and keep losses within limits that do not damage your financial stability.",
  },
  {
    question: "Should I learn before investing in crypto?",
    answer:
      "Yes. Learning before putting money at risk is the most responsible starting point. Crypto markets are volatile, scams exist, and mistakes can be expensive. Education gives you a better framework for making decisions.",
  },
  {
    question: "What is the biggest mistake beginners make?",
    answer:
      "The biggest mistake is acting before understanding. This can mean buying something without research, following online recommendations blindly, reacting emotionally, or risking money without a clear plan.",
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

export default function CanBeginnersMakeMoneyInCrypto() {
  return (
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
          Can Beginners Make Money in Crypto? A Realistic Beginner&apos;s Guide
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Can beginners make money in crypto? This honest guide covers realistic
          expectations, risk management, common mistakes, and what responsible
          crypto learning looks like.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <img
            src="/images/can-beginners-make-money-in-crypto/hero.png"
            alt="Laptop showing a crypto chart with notebook and coin"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </header>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          The Question Almost Every Beginner Asks
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            It would be difficult to find a more common reason for someone to
            start exploring cryptocurrency than the possibility of making money
            from it.
          </p>

          <p>
            Stories of people who invested in Bitcoin years ago and saw
            extraordinary returns circulate widely. Social media is full of
            charts, screenshots, and confident claims that make crypto look easy.
          </p>

          <p>
            But there is something important missing from most of that content:
            the losses, the bad decisions, the long learning process, and the
            emotional pressure that comes with volatile markets.
          </p>

          <p>
            What beginners often see online is only one side of the story. The
            result is a version of crypto that looks more accessible and more
            reliably profitable than it actually is for most people.
          </p>

          <p>
            This guide gives a calmer and more realistic view of whether
            beginners can make money in crypto, why many beginners lose money,
            and what responsible learning actually looks like.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Can People Actually Make Money in Crypto?
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            The honest answer is yes, people can and do make money in crypto. It
            is also true, and equally important to understand, that many people
            lose money.
          </p>

          <p>
            Both realities exist at the same time. The fact that crypto markets
            create opportunity does not mean they create certainty.
          </p>

          <p>
            People participate in crypto for many reasons. Some are interested in
            the technology, some want to understand markets, some view it as a
            developing asset class, and many are attracted by the possibility of
            financial gain.
          </p>

          <p>
            The existence of opportunity does not mean outcomes are predictable.
            The value of any crypto asset can rise or fall because of many
            factors that no individual can fully control.
          </p>

          <p>
            Bitcoin&apos;s price history is often used as an example of crypto
            growth, but market growth and individual results are not the same
            thing. Many people have still lost money because of poor timing,
            emotional decisions, weak security, or lack of understanding.
          </p>

          <p>
            What usually separates better decision-making from poor
            decision-making is not luck alone. It is education, discipline, risk
            management, and the ability to stay realistic when the market becomes
            emotional.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Why Many Beginners Lose Money
        </h2>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <img
            src="/images/can-beginners-make-money-in-crypto/loss-money.png"
            alt="Negative crypto chart showing beginner losses"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          Understanding the most common causes of beginner losses is one of the
          most protective things a new learner can do before making financial
          decisions.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
          {lossReasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Chasing hype is one of the clearest beginner traps. When a coin is
            already trending everywhere, beginners often feel pressure to
            participate before they understand what they are buying.
          </p>

          <p>
            Fear of missing out creates urgency. It makes people feel that
            everyone else is making money while they are being left behind. That
            pressure can override calm thinking.
          </p>

          <p>
            Lack of research is another major issue. Buying something because a
            person online said it will rise is not research. It is a risky
            shortcut.
          </p>

          <p>
            Emotional decision-making also hurts beginners. Fear during declines
            and excitement during rallies can both lead to decisions that would
            not survive calm review.
          </p>

          <p>
            Ignoring risk management is especially dangerous. Putting in more
            than you can afford to lose, not having a plan, and reacting to price
            movements can turn normal volatility into serious financial stress.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          What Successful Beginners Usually Focus On
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            No approach can guarantee success in crypto, but some habits appear
            again and again among beginners who make better decisions over time.
          </p>

          <p>
            The first habit is learning before putting meaningful money at risk.
            Beginners who study Bitcoin basics, blockchain, wallets, market
            behaviour, and risk management are in a stronger position than those
            who act first and learn later.
          </p>

          <p>
            Understanding market basics gives beginners a framework. Without that
            framework, every price move can feel confusing. With it, market
            events become easier to interpret calmly.
          </p>

          <p>
            Risk management is also central. Responsible beginners think about
            what can go wrong before thinking about how much they might gain.
          </p>

          <p>
            Patience matters because crypto constantly creates urgency. A
            beginner who can wait until they understand something properly is
            already avoiding one of the most common sources of mistakes.
          </p>

          <p>
            Realistic expectations protect beginners from disappointment. Crypto
            can create opportunity, but it is not predictable, easy, or
            guaranteed.
          </p>

          <p>
            Continuous education matters too. The crypto space changes quickly,
            so responsible learning is not a one-time task. It is an ongoing
            process.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Common Ways People Participate in Crypto
        </h2>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          There is no single correct way to participate in crypto. Different
          approaches suit different people depending on their goals, knowledge,
          time availability, and comfort with risk.
        </p>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Approach
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  What It Means
                </th>
              </tr>
            </thead>

            <tbody>
              {participationRows.map((row) => (
                <tr
                  key={row.approach}
                  className="border-b border-slate-200 last:border-0 dark:border-white/10"
                >
                  <td className="py-4 pr-4 font-bold text-slate-900 dark:text-white">
                    {row.approach}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.explanation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          For many beginners, learning and research should come first. Financial
          participation should only come after a person has built enough
          knowledge to understand the risks clearly.
        </p>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Why Risk Management Matters More Than Profit Potential
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            For a beginner focused on making money, risk management can feel like
            something to think about later. In reality, it should come first.
          </p>

          <p>
            You cannot continue learning from market participation if you have
            lost the capital that makes participation possible. Protecting what
            you have is the foundation of staying in the market long enough to
            learn.
          </p>

          <p>
            Avoiding large losses matters because large losses are difficult to
            recover from. A 50% loss requires a 100% gain just to return to the
            starting point.
          </p>

          <p>
            Risk management is also emotional management. Excitement can make
            someone risk too much. Fear can make someone sell without thinking.
            Hope can make someone ignore warning signs.
          </p>

          <p>
            Beginners who develop into stronger market participants are not
            always the people who found the best opportunity first. They are
            usually the people who managed risk well enough to keep learning
            through difficult periods.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Common Myths About Making Money in Crypto
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Myth
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Reality
                </th>
              </tr>
            </thead>

            <tbody>
              {mythRows.map((row) => (
                <tr
                  key={row.myth}
                  className="border-b border-slate-200 last:border-0 dark:border-white/10"
                >
                  <td className="py-4 pr-4 font-bold text-slate-900 dark:text-white">
                    {row.myth}
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
          Signs a Beginner Is Approaching Crypto Responsibly
        </h2>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          Responsible crypto learning is not about being perfect. It is about
          building habits that reduce avoidable mistakes.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
          {responsibleSigns.map((sign) => (
            <li key={sign}>{sign}</li>
          ))}
        </ul>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Learning before acting shows that a beginner is taking the space
            seriously. Understanding first and acting second is usually a much
            healthier sequence.
          </p>

          <p>
            Independent research is another strong sign. A responsible beginner
            does not rely only on influencers, viral posts, or confident online
            opinions.
          </p>

          <p>
            Understanding risks honestly matters. Before making a decision, a
            beginner should be able to explain what could go wrong.
          </p>

          <p>
            Patience is also important. The ability to avoid acting just because
            prices are moving is one of the clearest signs of maturity.
          </p>

          <p>
            Continuous improvement helps beginners learn from each experience
            instead of treating every outcome as luck or failure.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          What Beginners Should Focus on First
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[820px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Skill
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Why It Matters
                </th>
              </tr>
            </thead>

            <tbody>
              {focusRows.map((row) => (
                <tr
                  key={row.skill}
                  className="border-b border-slate-200 last:border-0 dark:border-white/10"
                >
                  <td className="py-4 pr-4 font-bold text-slate-900 dark:text-white">
                    {row.skill}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.why}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          These skills build a foundation that supports better decisions across
          every part of crypto learning, whether someone is studying Bitcoin,
          learning chart analysis, or simply trying to understand market risk.
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
          Conclusion: Possible, Not Guaranteed — and That Difference Matters
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Making money in crypto is possible. People do it, and some beginners
            have genuinely positive early experiences. But success is never
            guaranteed, and the path is rarely as simple as social media makes it
            appear.
          </p>

          <p>
            The difference between people who navigate the space well and those
            who do not is usually explained by education, discipline, risk
            management, and realistic expectations.
          </p>

          <p>
            Before thinking about profit, think about understanding. Before
            thinking about which asset to buy, think about whether you know
            enough to make that decision responsibly.
          </p>

          <p>
            Learn slowly. Manage risk honestly. Develop patience deliberately.
            Approach every decision with the awareness that outcomes in this
            market are genuinely uncertain, no matter how confident anyone else
            appears to be.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-amber-200">
          Educational content only. Not financial advice. Always do your own
          research and make responsible decisions.
        </div>
      </section>
    </article>
  );
}