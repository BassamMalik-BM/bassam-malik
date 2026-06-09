import { useState } from "react";
import { ChevronDown, Clock, ExternalLink } from "lucide-react";
import FAQSchema from "../../schemas/FAQSchema";

const websites = [
  {
    name: "CoinMarketCap",
    logo: "/images/best-crypto-market-analysis-websites/coinmarketcap.png",
    url: "https://coinmarketcap.com",
    difficulty: "Very Easy",
    bestFor: "Getting a broad overview of the entire crypto market",
    body: [
      "CoinMarketCap is one of the most widely used crypto data websites in the world. It gives beginners a clear, organised view of thousands of cryptocurrencies, showing price data, market capitalisation, trading volume, and percentage changes over different time periods.",
      "For a complete beginner, it is an excellent first stop. You can see which cryptocurrencies are largest by market cap, which are gaining or losing value, and what the overall size of the crypto market looks like.",
      "CoinMarketCap is excellent for data, but it also features sponsored content and promoted projects. Beginners should stick to the data sections and be cautious about anything that looks promotional.",
    ],
  },
  {
    name: "CoinGecko",
    logo: "/images/best-crypto-market-analysis-websites/coingecko.png",
    url: "https://www.coingecko.com",
    difficulty: "Very Easy",
    bestFor: "Market data, crypto categories, and developer activity information",
    body: [
      "CoinGecko is similar to CoinMarketCap in many ways, but it offers some additional data points that make it worth bookmarking separately.",
      "For beginners, CoinGecko is a clean and well-organised way to explore the market. Its category filtering is useful for understanding how the crypto space is structured.",
      "Like CoinMarketCap, CoinGecko is a data tool, not a decision-making tool. It tells you what the market is doing. It does not tell you what you should do.",
    ],
  },
  {
    name: "TradingView",
    logo: "/images/best-crypto-market-analysis-websites/tradingview.png",
    url: "https://www.tradingview.com/pricing/?share_your_love=bassammalik24",
    difficulty: "Moderate",
    bestFor: "Reading price charts and learning the basics of technical analysis",
    affiliate: true,
    body: [
      "TradingView is one of the most widely used charting platforms in the crypto and broader financial world. It allows you to view detailed price charts for Bitcoin and thousands of other assets.",
      "For beginners, TradingView is most useful as a learning environment. Spending time looking at Bitcoin’s price history across different timeframes builds a real sense of how volatile crypto markets can be.",
      "TradingView can feel overwhelming at first. Beginners do not need to learn every indicator immediately. Start by simply looking at price charts over different timeframes.",
    ],
  },
  {
    name: "CryptoPanic",
    logo: "/images/best-crypto-market-analysis-websites/cryptopanic.png",
    url: "https://cryptopanic.com",
    difficulty: "Easy",
    bestFor: "Aggregating crypto news from multiple sources in one place",
    body: [
      "CryptoPanic collects crypto news articles from a wide range of publications and displays them in a single feed.",
      "For beginners, CryptoPanic is useful because it helps you stay aware of market news without visiting dozens of different websites separately.",
      "CryptoPanic surfaces news quickly, but not all sources it aggregates are equally reliable. Treat community reactions as a rough mood indicator, not a signal to act on.",
    ],
  },
  {
    name: "Glassnode",
    logo: "/images/best-crypto-market-analysis-websites/glassnode.png",
    url: "https://glassnode.com",
    difficulty: "Intermediate to Advanced",
    bestFor: "Understanding on-chain data and Bitcoin holder behaviour",
    body: [
      "Glassnode is an on-chain analytics platform. On-chain data comes directly from blockchain activity and can show how coins are moving, how long people have been holding Bitcoin, and how active the network is.",
      "The free tier gives access to selected charts and indicators that can help beginners understand market cycles, accumulation patterns, and network health.",
      "Glassnode is not a beginner’s first stop. The data requires background knowledge, so beginners should approach it with curiosity and caution.",
    ],
  },
  {
    name: "The Block",
    logo: "/images/best-crypto-market-analysis-websites/the-block.png",
    url: "https://www.theblock.co",
    difficulty: "Easy to Moderate",
    bestFor: "Reliable crypto news, research reports, and market analysis",
    body: [
      "The Block is a crypto news website covering Bitcoin, Ethereum, and other digital assets, alongside live prices and market data.",
      "Its strength is the quality and depth of its journalism. For beginners who want to stay informed without relying only on social media headlines, that editorial standard can be useful.",
      "The Block is a news and research publication, not a price prediction service. Use it to build context, not to look for buy or sell signals.",
    ],
  },
  {
    name: "Messari",
    logo: "/images/best-crypto-market-analysis-websites/messari.png",
    url: "https://messari.io",
    difficulty: "Moderate",
    bestFor: "Crypto research reports and structured market information",
    body: [
      "Messari is a crypto research and data platform that publishes reports, asset profiles, and market analysis written by professional researchers.",
      "For beginners who want to go beyond price charts and understand project fundamentals, Messari’s free research content can be valuable.",
      "Some of Messari’s most detailed reports and datasets are paid, but the free content is still useful for building a solid understanding.",
    ],
  },
  {
    name: "Santiment",
    logo: "/images/best-crypto-market-analysis-websites/santiment.png",
    url: "https://santiment.net",
    difficulty: "Moderate to Advanced",
    bestFor: "Understanding market sentiment and social activity",
    body: [
      "Santiment tracks social media activity, developer activity, and on-chain data together, giving users a view of how public sentiment can connect with market behaviour.",
      "For beginners interested in the behavioural side of crypto markets, Santiment offers a different perspective from pure price or on-chain analysis.",
      "High social volume around a coin does not automatically mean it is worth researching further. Sometimes it simply means the market is emotional.",
    ],
  },
  {
    name: "CoinGlass",
    logo: "/images/best-crypto-market-analysis-websites/coinglass.png",
    url: "https://www.coinglass.com",
    difficulty: "Moderate",
    bestFor: "Market overview, Bitcoin dominance, sentiment, and exchange data",
    body: [
      "CoinGlass brings together a wide range of crypto market data in one place, giving users a broader view instead of only looking at a single price chart.",
      "For beginners, the most accessible parts are the market overview dashboard, Bitcoin dominance tracker, Fear and Greed display, and price data covering many cryptocurrencies.",
      "CoinGlass contains some advanced sections, so beginners should focus on the market overview, price data, Bitcoin dominance, and sentiment first.",
    ],
  },
  {
    name: "DefiLlama",
    logo: "/images/best-crypto-market-analysis-websites/DefiLlama.png",
    url: "https://defillama.com",
    difficulty: "Moderate",
    bestFor: "Tracking DeFi activity and blockchain ecosystem data",
    body: [
      "DefiLlama tracks total value locked across decentralised finance protocols and blockchain ecosystems.",
      "For beginners curious about the broader crypto landscape beyond Bitcoin and price movements, DefiLlama provides a well-organised view of how the DeFi space is structured.",
      "DefiLlama is most useful once you understand basic DeFi concepts. For complete beginners, it can feel like information overload.",
    ],
  },
];

const faqs = [
  {
    question: "What is the best free website for crypto market analysis?",
    answer:
      "For complete beginners, CoinMarketCap and CoinGecko are strong starting points because they are easy to navigate and give a clear overview of the market. Once you are comfortable with basic data, CoinGlass and TradingView can add more context.",
  },
  {
    question: "Is TradingView good for beginners?",
    answer:
      "Yes, but beginners should start slowly. The best approach is to look at Bitcoin’s price history across different timeframes before using many indicators or following other users’ chart ideas.",
  },
  {
    question: "Which website is best for Bitcoin market analysis?",
    answer:
      "A combination works best. CoinMarketCap or CoinGecko can show price and market data, TradingView can help with charts, Glassnode can show on-chain data, and The Block or Messari can help with research.",
  },
  {
    question: "Can free crypto tools help beginners?",
    answer:
      "Yes. Free crypto analysis tools help beginners build the habit of checking real data before forming opinions. They do not make decisions for you, but they give you better information to think with.",
  },
  {
    question: "Should I trust social media or crypto websites more?",
    answer:
      "For factual market data, dedicated crypto websites are usually a better starting point than social media. Social media can be useful for discussion, but claims should always be checked against real data sources.",
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

export default function BestCryptoMarketAnalysisWebsites() {
  return (
    <>
    <FAQSchema faqs={faqs} />
    <article className="premium-card mx-auto max-w-5xl p-8 sm:p-10 lg:p-12">
      <header>
        <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            Beginner Tools
          </span>

          <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Clock size={16} /> 13 min read
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Best Free Websites for Crypto Market Analysis.
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Discover the best free websites for crypto market analysis. Learn how
          beginners can research Bitcoin and crypto markets calmly, safely, and
          without relying on hype.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <img
            src="/images/best-crypto-market-analysis-websites/hero.png"
            alt="Best crypto market analysis websites"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </header>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Why Beginners Struggle to Find Reliable Crypto Information
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            If you are new to cryptocurrency, finding trustworthy information can
            feel genuinely difficult. Social media moves fast, and after reading
            a dozen different opinions, beginners often feel more confused than
            before.
          </p>

          <p>
            The problem is not that information is unavailable. The problem is
            that a lot of what circulates online is opinion, not research. It is
            shaped by emotion, personal incentives, and the pressure to be
            entertaining rather than accurate.
          </p>

          <p>
            This is where crypto market analysis websites become valuable. They
            present market data, on-chain information, price history, sentiment
            indicators, and research in a more structured and readable way.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Why Beginners Need Crypto Market Analysis Websites
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            These websites help you understand the market on your own terms
            instead of waiting for someone else to tell you what is happening.
            Over time, checking reliable sources builds familiarity with how
            crypto markets behave.
          </p>

          <p>
            They can also reduce emotional decision-making. When you have real
            data in front of you, it becomes easier to stay calm and think
            clearly instead of reacting to fear, excitement, or social media
            pressure.
          </p>

          <p>
            A trusted data platform is usually more useful for checking raw
            market information than a social media opinion. While no platform is
            perfect, data websites generally provide a calmer and more
            structured way to understand what is happening.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          The Best Free Websites for Crypto Market Analysis
        </h2>

        <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
          Here are ten useful websites for beginners who want to understand
          crypto markets more clearly and responsibly. Some tools are completely
          free, while others offer free access with paid features available
          later.
        </p>

        <div className="mt-8 divide-y divide-slate-200 dark:divide-white/10">
          {websites.map((site, index) => (
            <div key={site.name} className="py-10 first:pt-0 last:pb-0">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                  <img
                   src={site.logo}
                   alt={`${site.name} logo`}
                   className="h-12 w-auto object-contain sm:h-14"
                   loading="lazy"
                     />

                   <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                   {site.name}
                   </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                      #{index + 1}
                    </span>

                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                      {site.difficulty}
                    </span>
                  </div>
                </div>

                <p className="mt-5 font-semibold text-slate-800 dark:text-slate-200">
                  Best for: {site.bestFor}
                </p>

                <div className="mt-4 space-y-4 leading-8 text-slate-700 dark:text-slate-300">
                  {site.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <a
                  href={site.url}
                  target="_blank"
                  rel={
                    site.affiliate
                      ? "noopener noreferrer sponsored"
                      : "noopener noreferrer"
                  }
                  className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  {site.affiliate ? "Visit Website" : "Visit Website"}{" "}
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          The Best Beginner Setup for Crypto Market Analysis
        </h2>

        <div className="mt-5 space-y-6 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            One of the most common mistakes beginners make is trying to use every
            available tool at once. A simple, structured setup is much easier to
            learn from.
          </p>

          <div>
            <h3 className="font-bold text-slate-950 dark:text-white">
              Level 1 — Complete Beginner
            </h3>
            <p className="mt-2">
              Start with CoinMarketCap, CoinGecko, and CoinGlass. Your goal is
              to become familiar with market caps, price data, Bitcoin dominance,
              and general market mood.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-950 dark:text-white">
              Level 2 — Learning to Read the Market
            </h3>
            <p className="mt-2">
              Add TradingView, CryptoPanic, and The Block. Use TradingView to
              observe price history, CryptoPanic to follow headlines, and The
              Block for deeper market news.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-950 dark:text-white">
              Level 3 — Advanced Beginner Research
            </h3>
            <p className="mt-2">
              Explore Glassnode, Messari, DefiLlama, and Santiment once you have
              more context. More data does not automatically mean better
              decisions, so focus on understanding first.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Common Mistakes Beginners Make When Using Crypto Analysis Websites
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
          <li>Watching too many indicators at once.</li>
          <li>Looking only at price without context.</li>
          <li>Following hype without research.</li>
          <li>Ignoring risk management.</li>
          <li>Copying influencers blindly.</li>
          <li>Thinking tools can predict the future.</li>
        </ul>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Quick Comparison
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Website
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Best For
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Difficulty
                </th>
              </tr>
            </thead>

            <tbody>
              {websites.map((site) => (
                <tr
                  key={site.name}
                  className="border-b border-slate-200 last:border-0 dark:border-white/10"
                >
                  <td className="py-4 pr-4 font-bold text-slate-900 dark:text-white">
                    {site.name}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {site.bestFor}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {site.difficulty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
          Conclusion: Build Your Knowledge Step by Step
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            The websites in this article will not tell you what to buy or when
            to act. That is not what they are for, and that is actually what
            makes them valuable.
          </p>

          <p>
            What they can do is help you develop a real understanding of how
            crypto markets work. Over time, you can learn to recognise market
            patterns, understand sentiment, and separate genuine information
            from noise.
          </p>

          <p>
            Start with the Level 1 tools, get comfortable, and move forward at
            your own pace. There is no rush. The market will always be there.
            Your understanding is what matters most.
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