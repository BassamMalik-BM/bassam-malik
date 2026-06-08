import { useState } from "react";
import { ChevronDown, Clock, ExternalLink } from "lucide-react";

const exchanges = [
  {
    name: "Coinbase",
    logo: "/images/best-crypto-exchanges/coinbase.png",
    url: "https://www.coinbase.com",
    bestFor: "Complete beginners who want a simple interface",
    beginnerFriendly: "High",
    education: "Coinbase Learn",
    security: "Regulatory oversight, cold storage, account protections",
    body: [
      "Coinbase is one of the most recognised crypto exchanges in the world. Its main strength for beginners is simplicity. The platform is clean, clearly labelled, and easier to understand than many feature-heavy exchanges.",
      "It also provides beginner education through Coinbase Learn, which can help new users understand basic crypto concepts before making decisions.",
      "The main thing beginners should watch carefully is fees. Coinbase can be more expensive than some alternatives, especially for smaller transactions, so it is important to understand the fee preview before confirming anything.",
    ],
  },
  {
    name: "Binance",
    logo: "/images/best-crypto-exchanges/binance.png",
    url: "https://www.binance.com",
    bestFor: "Users who want wide asset support and strong educational resources",
    beginnerFriendly: "Moderate",
    education: "Binance Academy",
    security: "Cold storage, account security tools, security fund",
    body: [
      "Binance is one of the largest crypto exchanges globally and offers access to a wide range of cryptocurrencies. It is also known for Binance Academy, which is one of the most useful free crypto learning libraries for beginners.",
      "For beginners, the platform can feel overwhelming because it contains many sections, tools, and product areas. The best approach is to stay focused on the basic buy and sell features and ignore anything you do not fully understand yet.",
      "Availability and rules can vary by country, so beginners should always check whether Binance is supported in their location before creating an account.",
    ],
  },
  {
    name: "Kraken",
    logo: "/images/best-crypto-exchanges/kraken.png",
    url: "https://www.kraken.com",
    bestFor: "Beginners who care most about security and reputation",
    beginnerFriendly: "Moderate",
    education: "Kraken Learn",
    security: "Long operating history and strong security reputation",
    body: [
      "Kraken is a well-established crypto exchange with a strong reputation for security. It has been operating for many years and is often mentioned by users who prioritise safety and reliability.",
      "The platform also provides educational content through Kraken Learn, which helps beginners understand crypto, security, and market basics.",
      "Kraken may feel slightly less simple than Coinbase for a complete beginner, but users who are willing to take their time may appreciate its serious security-focused approach.",
    ],
  },
  {
    name: "OKX",
    logo: "/images/best-crypto-exchanges/okx.png",
    url: "https://www.okx.com",
    bestFor: "Beginners who want a global platform with many features",
    beginnerFriendly: "Moderate",
    education: "OKX Learn",
    security: "Cold storage, proof-of-reserves style reporting, security tools",
    body: [
      "OKX is a large global crypto exchange with a wide range of supported assets and learning resources. It has become more beginner-accessible over time, especially through its educational content and cleaner app experience.",
      "Like Binance, OKX has many sections that may be confusing at first. Beginners should focus only on the basic account setup, security settings, deposits, and simple buy and sell features.",
      "Before signing up, users should check whether OKX is available and suitable in their country because exchange access can vary depending on local regulations.",
    ],
  },
  {
    name: "Bybit",
    logo: "/images/best-crypto-exchanges/bybit.png",
    url: "https://www.bybit.com",
    bestFor: "Users who want a modern interface and broad crypto access",
    beginnerFriendly: "Moderate",
    education: "Bybit Learn",
    security: "2FA, cold wallet storage, account protection settings",
    body: [
      "Bybit has grown into a popular global crypto platform with a modern interface and a wide range of supported cryptocurrencies. It also offers educational content through Bybit Learn.",
      "For beginners, the important thing is to avoid exploring advanced sections too early. A new user should keep things simple and only use features they clearly understand.",
      "Bybit availability can vary depending on location, so beginners should research their country’s rules and the platform’s terms before opening an account.",
    ],
  },
  {
    name: "Crypto.com",
    logo: "/images/best-crypto-exchanges/crypto.png",
    url: "https://crypto.com",
    bestFor: "Beginners who prefer a mobile-first crypto app",
    beginnerFriendly: "Moderate to High",
    education: "Crypto.com University",
    security: "2FA, cold storage, mobile security features",
    body: [
      "Crypto.com is known for its mobile-first experience. Many beginners like it because the app feels simple, modern, and easy to navigate from a smartphone.",
      "The platform supports many cryptocurrencies and also includes learning material for beginners. Its mobile design can be helpful for users who prefer managing everything from their phone.",
      "The main caution is that Crypto.com has many extra products and services. Beginners should focus on the basic exchange functions first and avoid anything they do not understand.",
    ],
  },
];

const comparisonRows = exchanges.map((exchange) => ({
  exchange: exchange.name,
  bestFor: exchange.bestFor,
  beginnerFriendly: exchange.beginnerFriendly,
  education: exchange.education,
  security: exchange.security,
}));

const securityTips = [
  "Use a strong and unique password for every exchange account.",
  "Enable two-factor authentication with an authenticator app.",
  "Bookmark the official exchange website and avoid random links.",
  "Never share passwords, recovery codes, or 2FA codes with anyone.",
  "Start small while learning the platform.",
  "Learn the difference between exchange accounts and personal wallets.",
];

const faqs = [
  {
    question: "What is the best crypto exchange for beginners?",
    answer:
      "There is no single best exchange for everyone. A beginner should look for strong security, transparent fees, an easy interface, useful education, and availability in their country.",
  },
  {
    question: "Are crypto exchanges safe?",
    answer:
      "Reputable exchanges can be safer than unknown platforms, but no exchange is risk-free. Exchanges hold your assets for you, so beginners should learn basic account security and wallet safety.",
  },
  {
    question: "Do beginners need identity verification?",
    answer:
      "Most reputable exchanges require identity verification because of regulatory rules. It may feel inconvenient, but it is usually part of using established platforms.",
  },
  {
    question: "Can I learn crypto without opening an exchange account?",
    answer:
      "Yes. Beginners can learn through books, educational websites, charts, research platforms, and market data before opening any exchange account.",
  },
  {
    question: "Should I keep my crypto on an exchange?",
    answer:
      "For small amounts used for learning, an exchange can be convenient. For larger amounts or longer-term holding, beginners should learn about personal wallets and safer storage habits.",
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

export default function BestCryptoExchanges() {
  return (
    <article className="premium-card mx-auto max-w-5xl p-8 sm:p-10 lg:p-12">
      <header>
        <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            Beginner Crypto
          </span>

          <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Clock size={16} /> 14 min read
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          Best Crypto Exchanges for Beginners.
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
          Choosing a crypto exchange can feel confusing when you are new. This
          beginner-friendly guide explains what to look for, which platforms are
          popular, and how to think about security before signing up.
        </p>

        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <img
            src="/images/best-crypto-exchanges/hero.png"
            alt="Best crypto exchanges for beginners"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </header>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Why Choosing an Exchange Feels Complicated
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            One of the first practical decisions a crypto beginner faces is
            choosing where to buy or sell cryptocurrency. A quick search shows
            many exchanges, each claiming to be simple, secure, and beginner
            friendly.
          </p>

          <p>
            The truth is that choosing an exchange matters, but it does not have
            to be overwhelming. A crypto exchange is a tool. Its value depends
            on how well you understand what it does, what risks it carries, and
            how safely you use it.
          </p>

          <p>
            The goal is not to find a perfect exchange. The goal is to find a
            suitable platform for your location, learning stage, security needs,
            and personal comfort level.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          What Beginners Should Look For
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Security should come first. A beginner should look for two-factor
            authentication, clear account protection settings, cold storage
            practices, and a strong public track record.
          </p>

          <p>
            The exchange should also be easy to understand. A clean interface
            helps beginners focus on learning instead of feeling overwhelmed by
            too many buttons, charts, or advanced sections.
          </p>

          <p>
            Fees should be transparent before you confirm any transaction. Even
            small fees can add up over time, so it is important to check the
            preview screen carefully.
          </p>

          <p>
            Availability matters too. Not every exchange works in every country,
            so always check whether the platform is supported in your location
            before signing up.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Popular Crypto Exchanges for Beginners
        </h2>

        <p className="mt-4 leading-8 text-slate-700 dark:text-slate-300">
          These exchanges are widely used in the crypto space. They are not
          listed as personal recommendations. Use this section as a starting
          point for your own research.
        </p>

        <div className="mt-8 divide-y divide-slate-200 dark:divide-white/10">
          {exchanges.map((exchange, index) => (
            <div key={exchange.name} className="py-10 first:pt-0 last:pb-0">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img
                    src={exchange.logo}
                    alt={`${exchange.name} logo`}
                    className="h-12 w-auto object-contain sm:h-14"
                    loading="lazy"
                  />

                  <div>
                    <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                      {exchange.name}
                    </h3>

                    <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">
                      Best for: {exchange.bestFor}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                    #{index + 1}
                  </span>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                    {exchange.beginnerFriendly}
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-4 leading-8 text-slate-700 dark:text-slate-300">
                {exchange.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <a
                href={exchange.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Visit Website <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Quick Comparison Table
        </h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Exchange
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Best For
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Beginner Friendly
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Education
                </th>
                <th className="py-4 pr-4 text-slate-950 dark:text-white">
                  Security Focus
                </th>
              </tr>
            </thead>

            <tbody>
              {comparisonRows.map((row) => (
                <tr
                  key={row.exchange}
                  className="border-b border-slate-200 last:border-0 dark:border-white/10"
                >
                  <td className="py-4 pr-4 font-bold text-slate-900 dark:text-white">
                    {row.exchange}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.bestFor}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.beginnerFriendly}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.education}
                  </td>
                  <td className="py-4 pr-4 text-slate-600 dark:text-slate-300">
                    {row.security}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Common Beginner Mistakes
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            One of the most common mistakes beginners make is choosing an
            exchange based only on popularity. A large user base does not
            automatically mean a platform is the best fit for your needs.
            Security, fees, customer support, and availability are often more
            important than brand recognition.
          </p>

          <p>
            Another common mistake is ignoring fees. Small charges can seem
            insignificant at first, but they can accumulate over time.
            Understanding how an exchange charges fees before using it is an
            important part of responsible decision-making.
          </p>

          <p>
            Many beginners also overlook basic security settings. Features such
            as two-factor authentication, strong passwords, and careful
            verification of website URLs should be set up immediately after
            creating an account.
          </p>

          <p>
            Finally, beginners sometimes leave all of their assets on an
            exchange indefinitely. Exchanges are convenient, but they are
            custodial services. Learning the basics of personal wallets is an
            important step in developing better long-term security habits.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Security Tips Before You Sign Up
        </h2>

        <ul className="mt-5 list-disc space-y-3 pl-6 leading-8 text-slate-700 dark:text-slate-300">
          {securityTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-slate-200 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
          Do Beginners Need the “Best” Exchange?
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Not really. Beginners do not need the exchange with the most
            features. They need a platform that is secure, understandable,
            available in their country, and suitable for their learning stage.
          </p>

          <p>
            Every exchange has trade-offs. One may be easier to use but more
            expensive. Another may have stronger tools but feel harder to
            navigate. A third may have strong education but limited availability
            in some regions.
          </p>

          <p>
            The better question is not “Which exchange is perfect?” The better
            question is “Which exchange helps me learn safely without confusing
            or pressuring me?”
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
          Conclusion: Choose Carefully, Learn Thoroughly
        </h2>

        <div className="mt-5 space-y-5 leading-8 text-slate-700 dark:text-slate-300">
          <p>
            Choosing a crypto exchange is an important step, but it should not
            be rushed. A good beginner choice is usually secure, clear, fairly
            transparent about fees, and available in your country.
          </p>

          <p>
            The platform matters, but your habits matter more. Strong passwords,
            two-factor authentication, careful URL checking, and basic wallet
            education can protect you more than any single exchange feature.
          </p>

          <p>
            Start with learning first. When you understand the basics, choosing
            and using an exchange becomes much easier.
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