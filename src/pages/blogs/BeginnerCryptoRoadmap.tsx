import { useState } from "react";
import { ChevronDown, Clock } from "lucide-react";
import FAQSchema from "../../schemas/FAQSchema";

const roadmapSteps = [
  {
    title: "Understand What Crypto Actually Is",
    body: [
      "Before anything else, you need to understand what cryptocurrency is at a fundamental level. Not the price, not which coins are popular, and not what is trending. The actual concept.",
      "Cryptocurrency is a form of digital money that operates on a decentralised network, meaning no single bank, government, or company controls it. Transactions are recorded on a shared public ledger called a blockchain, which is maintained by a distributed network of computers around the world.",
      "Bitcoin was the first cryptocurrency, created in 2009 by an anonymous person or group using the name Satoshi Nakamoto. It was designed to allow people to send and receive value directly without needing a bank or intermediary to process the transaction.",
      "The most common mistake at this stage is skipping straight to prices and trends without understanding the basics. Start with Bitcoin specifically. It is the oldest, most studied, and most understood cryptocurrency, which makes it the right place to begin.",
    ],
  },
  {
    title: "Learn Basic Crypto Terminology",
    body: [
      "Every field has its own language, and crypto is no different. Before you can read articles, follow market discussions, or make sense of analysis, you need to understand the basic vocabulary.",
      "Start with terms like Bitcoin, altcoins, blockchain, wallets, market capitalisation, volatility, bull markets, bear markets, exchanges, private keys, and seed phrases. These terms appear everywhere in beginner crypto education.",
      "Without this vocabulary, most crypto content feels confusing. Understanding these basic terms gives you the foundation to learn from articles, analysis, and research without constantly stopping to guess what something means.",
      "Do not try to learn every piece of crypto jargon at once. Focus on the core terms first. The more specialised vocabulary can wait until you encounter it naturally in your reading.",
    ],
  },
  {
    title: "Learn Crypto Wallet Basics and Security",
    image: "/images/beginner-crypto-roadmap/hot-cold-wallets.png",
    imageAlt: "Hot wallet and cold wallet comparison",
    body: [
      "Once you understand what crypto is and how it works at a basic level, the next essential topic is security. In crypto, you are responsible for your own assets. There is no bank to call if something goes wrong and no way to reverse a confirmed blockchain transaction.",
      "Hot wallets are wallets connected to the internet. They are convenient and easy to use, making them suitable for small amounts of crypto that you might use regularly. Because they are online, they carry higher risk.",
      "Cold wallets are wallets kept offline, usually in the form of a physical hardware device. Because they are not connected to the internet, they are generally more secure for storing larger amounts that you do not need to access frequently.",
      "Protecting your seed phrase is the single most important security habit you can build. Write it down and store it somewhere safe, private, and offline. Do not photograph it, do not store it in the cloud, and never share it with anyone.",
    ],
  },
  {
    title: "Understand How Crypto Markets Move",
    body: [
      "One of the most valuable things a beginner can understand early on is that crypto prices respond to a combination of factors. The market can never be predicted with certainty, but understanding what drives price movements helps you make more sense of what you observe.",
      "Supply and demand is the most fundamental driver. When more people want to buy a cryptocurrency than sell it, the price rises. When more people want to sell than buy, the price falls.",
      "Market sentiment also matters. When sentiment is positive, people tend to buy more. When sentiment is fearful, people tend to sell. Crypto markets can shift quickly because emotion plays a major role.",
      "Fear and greed are two dominant emotions in crypto. When prices rise quickly, greed and fear of missing out can push beginners into poor decisions. When prices fall sharply, fear can cause panic. Recognising these cycles is one of the most useful skills a beginner can build.",
    ],
  },
  {
    title: "Learn Basic Crypto Market Analysis",
    body: [
      "Once you have a feel for how markets move, you can start learning basic tools for analysing them. This does not mean trying to predict the future. It means developing the ability to read market data and understand what it is telling you about current conditions.",
      "Market capitalisation helps you compare the relative size of different cryptocurrencies. Bitcoin dominance shows Bitcoin’s share of the total crypto market and can help you understand broader market sentiment.",
      "Basic chart reading starts with simply observing how price has moved over time across daily, weekly, and monthly views. This historical perspective is useful before you ever try to use advanced indicators.",
      "Support and resistance are useful reference points when reading charts. Volume gives context to price movements. These tools help you observe the market with more structure, but they do not guarantee what will happen next.",
    ],
  },
  {
    title: "Learn Risk Management",
    image: "/images/beginner-crypto-roadmap/balanced-scale.png",
    imageAlt: "Balanced scale representing crypto risk management",
    body: [
      "Risk management is not a glamorous topic, but it is one of the most important parts of this roadmap. Crypto markets are volatile, information is imperfect, and outcomes are genuinely uncertain.",
      "Never risk money you cannot afford to lose. This is the most fundamental rule in crypto. Any money you put into crypto should be money whose complete loss would not damage your financial stability or wellbeing.",
      "Avoid emotional decisions. Buying out of excitement when prices rise and selling out of panic when prices fall are two of the most common beginner mistakes.",
      "Patience is also a risk management tool. Many poor outcomes come from impatience, from wanting results faster than knowledge or circumstances allow. Realistic expectations protect you from unnecessary pressure.",
    ],
  },
  {
    title: "Learn How to Research Crypto Properly",
    body: [
      "Good research habits separate informed crypto learners from people who simply react to whatever they last saw online. Building a reliable research process early is one of the most useful things a beginner can do.",
      "Start with trusted tools like CoinMarketCap and CoinGecko for market data, TradingView for charts, CryptoPanic for news awareness, The Block for professionally reported market news, and Messari for research reports and asset profiles.",
      "The quality of your decisions is directly related to the quality of the information you use. Going to trusted data sources before forming an opinion is one of the most protective habits a beginner can build.",
      "Do not use social media as your primary research source. When you see a claim online, check it against at least one trusted data source before accepting it.",
    ],
  },
  {
    title: "Build Good Beginner Habits",
    body: [
      "The final step is not about one specific topic. It is about how you approach learning itself. The habits you build in your first months of crypto education will shape the quality of your understanding for a long time.",
      "Learn slowly and deliberately. There is no correct speed and no deadline you need to meet. The strongest understanding usually comes from taking your time and revisiting concepts that feel unclear.",
      "Verify information before accepting it. Use multiple sources. Focus on understanding rather than outcomes. The temptation in crypto is always to ask what will happen next, but beginners benefit far more from understanding why things happen.",
      "Keep a simple learning journal. After reading something important, write down what you learned, what questions it raised, and what you want to explore next.",
    ],
  },
];

const avoidItems = [
  "Following influencers blindly.",
  "Chasing hype.",
  "Trying to learn everything at once.",
  "Ignoring risk management.",
  "Trusting unrealistic promises.",
  "Making emotional decisions.",
];

const timeline = [
  {
    title: "Month 1: Foundations",
    text: "Focus on understanding what crypto is, how Bitcoin works, and what blockchain does. Learn the core vocabulary and build a simple foundation before moving forward.",
  },
  {
    title: "Month 2: Security and Market Basics",
    text: "Learn wallet security, seed phrase protection, hot and cold wallets, and the basics of how crypto markets move.",
  },
  {
    title: "Month 3: Analysis and Research Skills",
    text: "Begin exploring basic chart reading, market cap, Bitcoin dominance, and trusted research tools. Build the habit of verifying information.",
  },
  {
    title: "Month 4 and Beyond: Deepening Understanding",
    text: "Move into deeper analysis tools, advanced books, and research platforms at your own pace. Keep expectations realistic and keep learning gradually.",
  },
];

const faqs = [
  {
    question: "How do beginners start learning crypto in 2026?",
    answer:
      "The best way to start is with the foundations, not the markets. First understand what cryptocurrency is, how Bitcoin works, and why the technology was created. Then move into wallets, markets, risk management, and research tools.",
  },
  {
    question: "What should I learn first in crypto?",
    answer:
      "Start with Bitcoin basics and core terminology. Once you understand Bitcoin, blockchain, wallets, market cap, volatility, private keys, and seed phrases, the rest of crypto becomes much easier to understand.",
  },
  {
    question: "Is Bitcoin the best place to start for beginners?",
    answer:
      "Yes. Bitcoin is the oldest, most established, and most thoroughly documented cryptocurrency. Starting with Bitcoin gives beginners a clearer foundation for understanding the broader crypto space later.",
  },
  {
    question: "How long does it take to understand crypto?",
    answer:
      "Basic crypto literacy is achievable within a few months of consistent, structured learning. Deeper understanding takes longer and continues to develop with reading, research, and experience.",
  },
  {
    question: "What mistakes should beginners avoid?",
    answer:
      "Avoid acting before you understand, investing money you cannot afford to lose, relying on social media as your main source, following influencers blindly, and making emotional decisions.",
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

export default function BeginnerCryptoRoadmap() {
  return (
    <>
    <FAQSchema faqs={faqs} />
    <article className="premium-card mx-auto max-w-5xl p-8 sm:p-10 lg:p-12">
      <header>
        <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            Beginner Roadmap
          </span>

          <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Clock size={16} /> 14 min read
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Beginner Crypto Roadmap (2026)
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          New to crypto in 2026? Follow this beginner crypto roadmap to learn
          Bitcoin, markets, wallets, research, and risk management without hype
          or pressure.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <img
            src="/images/beginner-crypto-roadmap/hero.png"
            alt="Beginner crypto roadmap"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </header>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Why Crypto Beginners Feel Overwhelmed in 2026
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            There has never been more information available about cryptocurrency
            than there is right now. And paradoxically, that is part of the
            problem.
          </p>

          <p>
            If you search for crypto advice online today, you will find videos,
            posts, threads, and articles all pulling you in different directions.
            For a complete beginner, navigating all of this is genuinely
            exhausting.
          </p>

          <p>
            The noise is not just confusing. It creates pressure to act quickly,
            pick sides, and make decisions before you have the understanding
            needed to make them responsibly.
          </p>

          <p>
            This roadmap is designed to give you a calm, logical sequence for
            learning crypto step by step without pressure, hype, or noise.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Why Beginners Need a Crypto Roadmap
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            A roadmap helps you avoid confusion. Without structure, it is easy to
            read about advanced topics before understanding the basics, which
            leads to frustration instead of progress.
          </p>

          <p>
            It also creates a learning path. When you know what comes next, you
            can focus on one stage at a time and build your understanding
            properly before moving forward.
          </p>

          <p>
            A structured approach also reduces emotional decision-making. It
            gives you the knowledge and perspective needed to respond calmly to
            market events rather than react impulsively.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Step-by-Step Beginner Crypto Roadmap 2026
        </h2>

        <div className="mt-8 divide-y divide-slate-200 dark:divide-white/10">
          {roadmapSteps.map((step, index) => (
            <div key={step.title} className="py-10 first:pt-0 last:pb-0">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                  Step {index + 1}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-slate-950 dark:text-white">
                {step.title}
              </h3>

              {step.image && (
                <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
                  <img
                    src={step.image}
                    alt={step.imageAlt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="mt-5 space-y-4 leading-8 text-slate-700 dark:text-slate-300">
                {step.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          What Beginners Should Avoid in 2026
        </h2>

        <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
          Knowing what to avoid is just as important as knowing what to do. Here
          are the most important things crypto beginners should stay away from.
        </p>

        <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
          {avoidItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Beginner Crypto Learning Timeline 2026
        </h2>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <img
            src="/images/beginner-crypto-roadmap/learning-timeline.png"
            alt="Beginner crypto learning timeline"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-8 space-y-6 leading-8 text-slate-700 dark:text-slate-300">
          {timeline.map((item) => (
            <div key={item.title}>
              <h3 className="font-bold text-slate-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Beginner Crypto Education vs Social Media
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Social media and crypto education are not opposites, but they serve
            very different purposes. Social media is useful for discussion and
            awareness, but it should not replace structured learning.
          </p>

          <p>
            When you want facts, go to data platforms, research websites, and
            credible publications. When a claim catches your attention, verify it
            before letting it influence your thinking.
          </p>

          <p>
            Even when someone online appears knowledgeable, their situation is
            not your situation. Their risk tolerance, financial position, and
            goals may be completely different from yours.
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
          Conclusion: Your Crypto Education Starts With Patience
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            If you have read this far, you already understand something that many
            crypto beginners do not. Learning slowly, building properly, and
            prioritising understanding over outcomes is not the cautious path. It
            is the intelligent one.
          </p>

          <p>
            You do not need to understand everything right now. You do not need
            to have an opinion on every coin, every trend, or every market
            movement. What you need right now is the foundation that makes all of
            those things possible to engage with responsibly later.
          </p>

          <p>
            Start with Step 1. Take your time. Build each stage properly before
            moving to the next. The market will wait for you. Your understanding
            is worth more than your speed.
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