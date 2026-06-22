import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import FAQSchema from "../../schemas/FAQSchema";

const mythsReality = [
  {
    myth: "Crypto is easy money",
    reality:
      "Crypto involves uncertainty, risk, and real learning. Success stories are not the normal experience.",
  },
  {
    myth: "You need a lot of money to start",
    reality:
      "Crypto is divisible, and beginners can start with education before using any money.",
  },
  {
    myth: "Bitcoin is too expensive to buy",
    reality:
      "Bitcoin can be owned in small fractions called satoshis.",
  },
  {
    myth: "Popular coins are always safe",
    reality:
      "Popularity does not remove volatility, risk, or the need for research.",
  },
  {
    myth: "All cryptocurrencies are the same",
    reality:
      "Crypto assets differ in purpose, design, technology, quality, and risk.",
  },
  {
    myth: "More risk always means more reward",
    reality:
      "Higher risk also means higher potential for loss, especially without understanding.",
  },
  {
    myth: "Crypto is only gambling",
    reality:
      "Reckless speculation is gambling-like, but informed decisions involve education and risk management.",
  },
  {
    myth: "If you missed early Bitcoin, you are too late",
    reality:
      "Building real understanding is valuable regardless of historical prices.",
  },
];

const misinformationTips = [
  "Verify information before accepting it.",
  "Use reliable educational sources instead of depending only on social media.",
  "Avoid decisions driven by fear, urgency, or excitement.",
  "Learn Bitcoin basics before exploring more complex crypto topics.",
  "Question hype consistently.",
  "Take your time and avoid rushing into anything you do not understand.",
];

const strongMindsetSigns = [
  "You ask better and more specific questions.",
  "You feel less pressure to act immediately.",
  "You understand risk more clearly.",
  "You research before forming an opinion.",
  "You feel less influenced by hype and viral claims.",
];

const faqs = [
  {
    question: "What is the biggest crypto myth beginners believe?",
    answer:
      "One of the most harmful myths is that crypto is easy money. This belief can make beginners underestimate risk, ignore education, and make emotional decisions.",
  },
  {
    question: "Is crypto really easy money?",
    answer:
      "No. Crypto markets are volatile and uncertain. Responsible participation requires learning, patience, research, and risk awareness.",
  },
  {
    question: "Do I need a lot of money to start crypto?",
    answer:
      "No. The best first step is education, which can be free. Crypto is also divisible, so beginners do not need to buy a whole coin.",
  },
  {
    question: "Is crypto only for experts?",
    answer:
      "No. Beginners can understand crypto basics without being technical experts. The key is to learn slowly and focus on the fundamentals first.",
  },
  {
    question: "How can I avoid crypto misinformation?",
    answer:
      "Use credible sources, verify claims, avoid emotional decisions, and be careful with hype-driven content. Slowing down before acting is one of the best protections.",
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

export default function CryptoMyths() {
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
              <Clock size={16} /> 15 min read
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Crypto Myths Beginners Should Stop Believing Before Getting Started
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Discover the most common crypto myths beginners believe and learn
            the honest truth behind them. Build better understanding before
            making any decisions.
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
            <img
              src="/images/crypto-myths/hero.png"
              alt="Magnifying glass representing crypto myth checking and research"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </header>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Where Crypto Myths Come From
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Most beginners do not enter the crypto space with a blank slate.
              They arrive with ideas already formed from social media posts,
              news headlines, conversations with friends, and online opinions.
            </p>

            <p>
              Some of those ideas are useful. Many are not. Crypto moves
              quickly, attracts strong opinions, and often includes content from
              people who have incentives to shape how beginners think.
            </p>

            <p>
              A myth that encourages you to act quickly, buy confidently, or
              ignore caution can be dangerous. Beginners who absorb these myths
              without questioning them often make decisions before they truly
              understand the risks.
            </p>

            <p>
              The good news is that identifying these myths early can give you a
              clearer and more realistic foundation for learning.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Why Crypto Myths Spread So Easily
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Crypto myths spread easily because social media rewards bold
              claims, dramatic predictions, and emotional content. Calm
              explanations usually get less attention than exciting stories.
            </p>

            <p>
              Viral success stories also create a distorted picture. People
              often hear about those who made large gains, but they hear far
              less about people who lost money, rushed decisions, or misunderstood
              risk.
            </p>

            <p>
              Influencer marketing can also make the problem worse. Some crypto
              content is designed to promote platforms, assets, or ideas, and
              beginners may not always understand the incentives behind it.
            </p>

            <p>
              Fear of missing out is another major reason myths spread. When
              beginners feel late or pressured, they are more likely to believe
              claims that promise speed, certainty, or easy outcomes.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Myth 1: Crypto Is Easy Money
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Many beginners believe this because the most visible crypto
              stories are usually the exceptional ones. Someone bought early,
              held for years, or made a large return from a lucky decision.
            </p>

            <p>
              The reality is that crypto markets are volatile, uncertain, and
              difficult to navigate consistently. Many beginners experience
              losses because they act before they understand what they are doing.
            </p>

            <p>
              The better lesson is simple: approach crypto as a subject that
              requires learning, not as a shortcut to financial success.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Myth 2: You Need a Lot of Money to Start
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              When beginners see the price of one Bitcoin, they often assume
              crypto is only for people with large amounts of money.
            </p>

            <p>
              The reality is that most cryptocurrencies are divisible into very
              small fractions. You do not need to buy a whole coin. More
              importantly, the first step in crypto should be education, and
              that does not require money.
            </p>

            <p>
              Start with learning. If you ever decide to engage financially, a
              small and affordable amount is enough for a beginner.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Myth 3: Bitcoin Is Too Expensive Because You Cannot Buy a Whole Coin
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Bitcoin can look unreachable when beginners focus only on the
              price of one full coin.
            </p>

            <p>
              The reality is that Bitcoin is divisible into one hundred million
              smaller units called satoshis. This means you can own a small
              fraction of Bitcoin.
            </p>

            <p>
              Never judge a cryptocurrency only by its price per coin. A low
              price does not automatically mean better value, and a high price
              does not automatically mean it is inaccessible.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Myth 4: Crypto Is Only for Tech Experts
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Crypto uses technical words like blockchain, private keys,
              wallets, and consensus. This can make beginners feel like they
              need a computer science background.
            </p>

            <p>
              The reality is that you do not need to be a technical expert to
              understand the basics. You can learn what Bitcoin is, how wallets
              work, how exchanges function, and why security matters without
              becoming a programmer.
            </p>

            <p>
              Technical knowledge can help, but it is not required for
              responsible beginner education.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Myth 5: All Cryptocurrencies Are the Same
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              From the outside, many cryptocurrencies can look similar because
              they appear on the same exchanges and are discussed in the same
              online spaces.
            </p>

            <p>
              The reality is that cryptocurrencies vary widely in purpose,
              design, technology, decentralisation, development quality, and
              risk profile.
            </p>

            <p>
              A beginner should start with Bitcoin basics first. That foundation
              makes it easier to evaluate other crypto assets with more care and
              scepticism.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Myth 6: Popular Coins Are Always Safe
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Beginners often assume that if many people talk about a coin, it
              must be safe. Popularity can create a feeling of confidence.
            </p>

            <p>
              The reality is that popularity does not remove risk. Large and
              well-known cryptocurrencies can still experience major price
              declines, uncertainty, and changing market conditions.
            </p>

            <p>
              Research matters more than popularity. Attention can reflect real
              interest, but it can also reflect hype.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Myth 7: More Risk Always Means More Reward
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Some beginners believe that choosing the riskiest assets gives
              them the best chance of making money.
            </p>

            <p>
              The reality is that higher risk also means a higher chance of
              losing money. Risk without understanding is not a strategy. It is
              exposure without a plan.
            </p>

            <p>
              Risk management is not the enemy of growth. It is one of the main
              habits that helps beginners avoid serious mistakes.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Myth 8: You Must Trade Every Day to Make Money in Crypto
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Online crypto culture often makes daily trading look like the main
              way to participate. Charts, alerts, and constant updates create
              pressure to stay active all the time.
            </p>

            <p>
              The reality is that daily trading is demanding and difficult.
              Many beginners make worse decisions when they feel pressured to
              act constantly.
            </p>

            <p>
              There is no requirement to trade every day. Quality of
              decision-making matters more than frequency of activity.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Myth 9: Crypto Is Only Gambling
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Because crypto is volatile and many people act recklessly, some
              beginners assume the entire space is just gambling.
            </p>

            <p>
              The reality is more balanced. Reckless speculation can resemble
              gambling, but informed participation is different. Education,
              research, risk management, and discipline all affect the quality
              of decisions.
            </p>

            <p>
              The goal is not to treat crypto like a bet. The goal is to
              understand it carefully before making any decision.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Myth 10: If You Missed Bitcoin Early, You Are Too Late
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Looking at Bitcoin's historical growth can make beginners feel
              like all meaningful opportunity has already passed.
            </p>

            <p>
              The reality is that the most valuable thing a beginner can do is
              build real understanding. Knowledge does not expire just because
              earlier prices are gone.
            </p>

            <p>
              Focus on learning instead of trying to copy someone else's past
              results.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Myths vs Reality
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
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
                {mythsReality.map((row) => (
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
            How Believing Myths Can Hurt Beginners
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Crypto myths are not harmless misunderstandings. They can lead to
              poor decision-making, emotional investing, hype chasing, weak risk
              management, and unrealistic expectations.
            </p>

            <p>
              They can also make beginners more vulnerable to scams. If someone
              already believes crypto should produce fast and easy results, a
              fake promise of guaranteed returns may look more believable than
              it should.
            </p>

            <p>
              Replacing myths with realistic understanding is one of the best
              ways to protect yourself before making any financial decision.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Facts Beginners Should Focus on Instead
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Crypto takes time to understand properly. There is no shortcut to
              genuine knowledge, and anyone who suggests otherwise should be
              questioned carefully.
            </p>

            <p>
              Risk management matters more than most beginners expect.
              Protecting your capital, staying realistic, and avoiding rushed
              decisions are basic skills, not advanced ones.
            </p>

            <p>
              Security is also essential. Seed phrases, passwords,
              two-factor authentication, wallet safety, and scam awareness are
              part of responsible crypto learning.
            </p>

            <p>
              Research is what separates informed decisions from speculation.
              The habit of verifying before acting is one of the strongest
              habits a beginner can build.
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            How Beginners Can Protect Themselves From Misinformation
          </h2>

          <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
            {misinformationTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
            Signs You Are Building a Stronger Crypto Mindset
          </h2>

          <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
            {strongMindsetSigns.map((sign) => (
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
            Conclusion: Question What You Hear, Build What You Know
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
            <p>
              Crypto myths reach beginners early, often before real education
              has had time to build a stronger foundation.
            </p>

            <p>
              The myths in this guide are common because they are simple,
              emotional, and easy to repeat. But simple does not always mean
              true, and emotional does not always mean useful.
            </p>

            <p>
              Build your understanding from credible sources. Question what you
              hear before acting on it. Take your time. Focus on learning,
              security, research, and risk awareness.
            </p>

            <p>
              That mindset is safer, calmer, and far more useful than believing
              any crypto myth.
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