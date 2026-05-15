import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Clock,
  DollarSign,
  Layers,
  LineChart,
  PieChart,
  Scale,
  ShieldAlert,
  Tag,
  TrendingUp,
} from "lucide-react";

const tiers = [
  {
    name: "Large Cap",
    range: "Above $10B",
    text: "Usually more liquid, more established, and harder to manipulate. These are often the major crypto assets beginners hear about first.",
  },
  {
    name: "Mid Cap",
    range: "$1B – $10B",
    text: "Projects with stronger growth potential but higher risk than large caps. They need more research before making decisions.",
  },
  {
    name: "Small Cap",
    range: "$100M – $1B",
    text: "Higher upside potential, but also higher volatility, lower liquidity, and greater risk of sharp price moves.",
  },
  {
    name: "Micro Cap",
    range: "Below $100M",
    text: "Very speculative. These assets can move quickly, but they can also lose value fast and may be difficult to sell safely.",
  },
];

const reasons = [
  {
    icon: Scale,
    title: "Compare assets fairly",
    text: "Price alone is misleading. Market cap helps compare the actual size of different crypto assets.",
  },
  {
    icon: ShieldAlert,
    title: "Understand risk",
    text: "Smaller market cap assets often carry more volatility, lower liquidity, and higher manipulation risk.",
  },
  {
    icon: TrendingUp,
    title: "Estimate growth potential",
    text: "A $1B asset has more room to grow than a $1T asset, but it usually comes with more risk.",
  },
  {
    icon: BarChart3,
    title: "Avoid unrealistic targets",
    text: "Market cap helps you check whether a price target is realistic based on supply.",
  },
];

const limitations = [
  "Market cap does not show liquidity.",
  "It does not prove a project has real users.",
  "It can be misleading for low-volume tokens.",
  "It does not fully show future token unlock risk.",
  "It should be combined with volume, supply, utility, and risk management.",
];

const checklist = [
  "Check the current market cap.",
  "Compare it with similar projects.",
  "Check circulating supply and maximum supply.",
  "Look at fully diluted valuation, especially for new tokens.",
  "Check daily volume and liquidity.",
  "Avoid judging a coin only by its price.",
  "Ask whether your expected price target makes sense mathematically.",
];

export default function MarketCapBlog() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Crypto Basics
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 10 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        What Is Market Capitalization in Crypto?
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Market Cap • Supply • Valuation
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        Market capitalization, or market cap, is one of the most important
        numbers beginners should understand in crypto. It helps you compare the
        real size of different assets instead of judging them only by price.
      </p>

      <div className="mt-12 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            01 · The Core Formula
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What Is Market Cap?
          </h2>

          <p>
            Market cap is the total estimated value of a cryptocurrency based
            on its current price and circulating supply.
          </p>

          <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-500/20 dark:bg-blue-500/10">
            <div className="mb-3 flex items-center gap-3 text-blue-700 dark:text-blue-300">
              <DollarSign size={24} />
              <p className="m-0 text-sm font-semibold uppercase tracking-wide">
                Formula
              </p>
            </div>

            <p className="m-0 text-xl font-bold text-slate-950 dark:text-white">
              Market Cap = Current Price × Circulating Supply
            </p>
          </div>

          <p className="mt-6">
            For example, if a coin is priced at $10 and has 100 million coins
            in circulation, its market cap is $1 billion.
          </p>

          <p className="mt-4">
            This is why price alone can be misleading. A coin priced at $0.01
            is not automatically cheaper than a coin priced at $100. The supply
            matters.
          </p>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            02 · Why Price Alone Is Misleading
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            A Low Price Does Not Always Mean Cheap
          </h2>

          <p>
            Many beginners see a coin trading at a very low price and think it
            can easily reach $1. But that depends on how many tokens exist.
          </p>

          <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-500/20 dark:bg-amber-500/10">
            <div className="mb-3 flex items-center gap-3 text-amber-700 dark:text-amber-300">
              <AlertTriangle size={24} />
              <p className="m-0 text-sm font-semibold uppercase tracking-wide">
                Beginner Mistake
              </p>
            </div>

            <p className="m-0 text-slate-700 dark:text-slate-300">
              If a coin has 100 trillion tokens, reaching $1 would require a
              $100 trillion market cap. That is not realistic for most crypto
              assets.
            </p>
          </div>

          <p className="mt-6">
            Before believing a target price, calculate the market cap required
            to reach that target. This simple habit can protect you from hype.
          </p>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            03 · Circulating Supply vs FDV
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Market Cap and Fully Diluted Valuation
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                <PieChart size={24} />
              </div>

              <h3 className="font-bold text-slate-950 dark:text-white">
                Circulating Market Cap
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                This uses only the coins currently circulating in the market.
                It is the common market cap number shown on most crypto data
                websites.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                <Layers size={24} />
              </div>

              <h3 className="font-bold text-slate-950 dark:text-white">
                Fully Diluted Valuation
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                FDV estimates value if all possible tokens existed today. This
                matters because locked tokens may enter the market later and
                create selling pressure.
              </p>
            </div>
          </div>

          <p className="mt-6">
            This is especially important for newer altcoins. A project may look
            small by circulating market cap, but its FDV can be much larger if
            most tokens are still locked.
          </p>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            04 · Market Cap Tiers
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Crypto Assets by Size
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <div className="mb-3 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                  {tier.range}
                </div>

                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  {tier.name}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {tier.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            05 · Why It Matters
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            How Market Cap Helps Your Decisions
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {reasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300">
                    <Icon size={24} />
                  </div>

                  <h3 className="font-bold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            06 · Limitations
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            What Market Cap Does Not Tell You
          </h2>

          <p>
            Market cap is useful, but it is not the full story. You should not
            make decisions using market cap alone.
          </p>

          <div className="mt-6 space-y-3">
            {limitations.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <LineChart
                  size={20}
                  className="mt-1 shrink-0 text-blue-500"
                />
                <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            07 · Common Misconceptions
          </p>

          <h2 className="mb-6 text-2xl font-bold text-slate-950 dark:text-white">
            Mistakes Beginners Should Avoid
          </h2>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700 dark:bg-red-500/10 dark:text-red-300">
                Myth
              </span>

              <h3 className="mt-4 font-bold text-slate-950 dark:text-white">
                “This coin is cheap because the price is low.”
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Low price does not mean low valuation. A coin can have a tiny
                price and still have a huge market cap if the supply is massive.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700 dark:bg-red-500/10 dark:text-red-300">
                Myth
              </span>

              <h3 className="mt-4 font-bold text-slate-950 dark:text-white">
                “Market cap shows how much money entered the coin.”
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Market cap is calculated from the latest price multiplied by
                supply. It does not mean that exact amount of money flowed into
                the asset.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
              <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-bold text-red-700 dark:bg-red-500/10 dark:text-red-300">
                Myth
              </span>

              <h3 className="mt-4 font-bold text-slate-950 dark:text-white">
                “Higher market cap always means better investment.”
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                A higher market cap usually means more size and liquidity, not
                automatically better fundamentals. Always combine market cap
                with research, volume, utility, tokenomics, and risk control.
              </p>
            </div>
          </div>
        </section>

        <section>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-500">
            08 · Checklist
          </p>

          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            Market Cap Research Checklist
          </h2>

          <div className="mt-6 space-y-3">
            {checklist.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5"
              >
                <CheckCircle
                  size={20}
                  className="mt-1 shrink-0 text-emerald-500"
                />
                <p className="m-0 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl bg-slate-950 p-8 text-white">
          <div className="mb-4 flex items-center gap-3 text-emerald-300">
            <BarChart3 size={24} />
            <p className="m-0 text-sm font-semibold uppercase tracking-wide">
              Final Takeaway
            </p>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-white">
            Market Cap Helps You Think Clearly
          </h2>

          <p className="leading-7 text-slate-300">
            Market cap does not predict the future, but it helps you avoid one
            of the most common beginner mistakes: judging a crypto asset only by
            its price. Use market cap to compare assets, understand risk, and
            keep your expectations realistic.
          </p>

          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4">
            <AlertTriangle
              size={20}
              className="mt-1 shrink-0 text-amber-300"
            />
            <p className="m-0 text-sm leading-7 text-amber-100">
              Educational content only. Crypto markets are risky. Always do
              your own research and make responsible decisions.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}