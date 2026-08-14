import { ExternalLink } from "lucide-react";
import AnimatedPage from "../components/AnimatedPage";
import SEO from "../components/SEO";

const sources = [
  {
    name: "Bitcoin.org",
    url: "https://bitcoin.org/",
  },
  {
    name: "Bitcoin Developer Documentation",
    url: "https://developer.bitcoin.org/",
  },
  {
    name: "Ethereum.org",
    url: "https://ethereum.org/",
  },
  {
    name: "Ethereum Developer Documentation",
    url: "https://ethereum.org/developers/docs/",
  },
  {
    name: "CoinMarketCap",
    url: "https://coinmarketcap.com/",
  },
  {
    name: "CoinGecko",
    url: "https://www.coingecko.com/",
  },
  {
    name: "TradingView",
    url: "https://www.tradingview.com/",
  },
  {
    name: "Investopedia",
    url: "https://www.investopedia.com/",
  },
  {
    name: "CME Group",
    url: "https://www.cmegroup.com/",
  },
  {
    name: "Glassnode",
    url: "https://glassnode.com/",
  },
  {
    name: "CoinGlass",
    url: "https://www.coinglass.com/",
  },
  {
    name: "Binance",
    url: "https://www.binance.com/",
  },
  {
    name: "Coinbase",
    url: "https://www.coinbase.com/",
  },
  {
    name: "Kraken",
    url: "https://www.kraken.com/",
  },
  {
    name: "Bitget",
    url: "https://www.bitget.com/",
  },
  {
    name: "U.S. Securities and Exchange Commission (SEC)",
    url: "https://www.sec.gov/",
  },
  {
    name: "Commodity Futures Trading Commission (CFTC)",
    url: "https://www.cftc.gov/",
  },
  {
    name: "Federal Trade Commission (FTC)",
    url: "https://www.ftc.gov/",
  },
  {
    name: "Cybersecurity & Infrastructure Security Agency (CISA)",
    url: "https://www.cisa.gov/",
  },
];

export default function Sources() {
  return (
    <>
      <SEO
        title="Sources"
        description="Learn how Bassam Malik researches educational cryptocurrency content and explore the primary sources used across the website."
      />

      <AnimatedPage>
        <article className="mx-auto max-w-6xl">
          {/* HEADER */}
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Trust & Transparency
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Sources & References
            </h1>

            <p className="mt-6 max-w-5xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Bassam Malik Learn is built to make cryptocurrency, trading,
              investing, risk management, and blockchain concepts easier for
              beginners to understand. Our educational content is researched
              using reliable sources and then explained in simpler,
              beginner-friendly language.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="premium-card p-8 sm:p-10">
            <section>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                How we research our content
              </h2>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                We aim to provide clear and useful educational information
                rather than simply repeating information found elsewhere.
                Topics are researched, compared, organized, and rewritten in a
                way that helps beginners understand both the concept and why it
                matters.
              </p>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Whenever possible, we prefer official documentation and primary
                sources. We may also use established financial education
                websites, cryptocurrency market-data providers, research
                platforms, regulatory authorities, and official exchange
                documentation to verify or better understand a topic.
              </p>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Not every source listed below is used for every article. The
                sources used depend on the subject being researched, and
                additional authoritative sources may be consulted when a topic
                requires more specialized information.
              </p>
            </section>

            <div className="my-10 border-t border-slate-200 dark:border-white/10" />

            {/* SOURCES */}
            <section>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Our sources
              </h2>

              <p className="mt-4 max-w-4xl leading-8 text-slate-600 dark:text-slate-300">
                The following are among the websites, official documentation,
                market-data platforms, and organizations we may use when
                researching educational content for Bassam Malik.
              </p>

              <div className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
                {sources.map((source) => (
                  <a
                    key={source.name}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border-b border-slate-200 py-4 text-slate-700 transition hover:text-blue-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-blue-400"
                  >
                    <span className="font-semibold">
                      {source.name}
                    </span>

                    <ExternalLink
                      size={16}
                      className="shrink-0 text-slate-400 transition group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    />
                  </a>
                ))}
              </div>
            </section>

            <div className="my-10 border-t border-slate-200 dark:border-white/10" />

            {/* TRANSPARENCY */}
            <section>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                Accuracy and transparency
              </h2>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Cryptocurrency and financial markets change quickly. Platform
                features, fees, regulations, market data, and technology can
                change after an article has been published. We therefore aim
                to review and update educational content when important
                information changes.
              </p>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Listing a website or organization on this page does not imply
                sponsorship, endorsement, partnership, or affiliation with
                Bassam Malik unless that relationship is clearly disclosed
                elsewhere on the website.
              </p>
            </section>
          </div>
        </article>
      </AnimatedPage>
    </>
  );
}