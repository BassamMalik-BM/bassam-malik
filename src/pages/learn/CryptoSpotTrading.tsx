import { Clock, Calendar, Tag } from "lucide-react";

export default function CryptoSpotTradingBlog() {
  return (
    <article className="premium-card p-8 sm:p-10">
      <div className="mb-5 flex flex-wrap items-center gap-3 text-sm">
        <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
          Beginner Guide
        </span>

        <span className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400">
          <Clock size={16} /> 8 min read
        </span>
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        What Is Crypto Spot Trading?
      </h1>

      <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span className="inline-flex items-center gap-2">
          <Calendar size={15} /> May 13, 2026
        </span>
        <span className="inline-flex items-center gap-2">
          <Tag size={15} /> Bitcoin · Ethereum · Trading
        </span>
      </div>

      <p className="mt-6 border-l-4 border-blue-500 pl-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
        Spot trading is the most basic way to buy and sell cryptocurrency. If
        you have ever bought Bitcoin, Ethereum, or another coin at the current
        market price, you have already used spot trading.
      </p>

      <div className="mt-10 space-y-12 text-base leading-8 text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            01. The Simple Definition
          </h2>

          <p>
            Crypto spot trading means buying or selling a cryptocurrency at its
            current market price. The price you see at that moment is called the
            spot price. When your order is completed, the crypto you bought is
            added to your spot wallet.
          </p>

          <p className="mt-4">
            The word “spot” simply means “on the spot.” In simple words, the
            trade happens directly and the asset belongs to you after the order
            is filled.
          </p>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-400/20 dark:bg-blue-500/10">
            <p className="font-semibold text-blue-800 dark:text-blue-200">
              Beginner Tip
            </p>
            <p className="mt-2 text-blue-700 dark:text-blue-100">
              In spot trading, you own the actual crypto asset. This makes it
              easier for beginners to understand compared to complex trading
              methods.
            </p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            02. How Does Spot Trading Work?
          </h2>

          <p>
            Spot trading usually happens on a crypto exchange. Buyers and
            sellers place orders, and when the prices match, the trade is
            completed automatically.
          </p>

          <div className="mt-6 space-y-5">
            {[
              [
                "Create an Exchange Account",
                "Choose a trusted crypto exchange and complete the required account setup.",
              ],
              [
                "Deposit Funds",
                "Add money or crypto to your exchange spot wallet.",
              ],
              [
                "Choose a Trading Pair",
                "Select a pair such as BTC/USDT or ETH/USDT.",
              ],
              [
                "Place an Order",
                "Use a market order for quick buying or a limit order to choose your own price.",
              ],
              [
                "Receive Your Crypto",
                "Once the order is filled, the crypto appears in your spot wallet.",
              ],
            ].map(([title, text], index) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-300 bg-blue-50 text-sm font-bold text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/10 dark:text-blue-300">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold text-slate-950 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-300">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            03. Common Order Types
          </h2>

          <p>
            Before placing your first trade, it is helpful to understand the
            basic order types used in spot trading.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              [
                "Market Order",
                "Buys or sells immediately at the best available current price.",
              ],
              [
                "Limit Order",
                "Lets you choose the price you want to buy or sell at.",
              ],
              [
                "Stop-Limit Order",
                "Helps manage risk by triggering an order after a certain price is reached.",
              ],
              [
                "OCO Order",
                "Places two connected orders where one cancels the other.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-900/60"
              >
                <h3 className="font-bold text-slate-950 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            04. Spot Trading vs Other Trading Types
          </h2>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 dark:border-white/10">
            <table className="w-full min-w-[650px] border-collapse text-sm">
              <thead className="bg-slate-100 dark:bg-white/5">
                <tr>
                  <th className="p-4 text-left font-bold">Feature</th>
                  <th className="p-4 text-left font-bold">Spot Trading</th>
                  <th className="p-4 text-left font-bold">Other Trading</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/10">
                <tr>
                  <td className="p-4 font-semibold">Asset Ownership</td>
                  <td className="p-4">You own the actual coin</td>
                  <td className="p-4">Usually based on contracts</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Complexity</td>
                  <td className="p-4">Beginner-friendly</td>
                  <td className="p-4">More advanced</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Risk Level</td>
                  <td className="p-4">Risk is limited to what you buy</td>
                  <td className="p-4">Can involve higher risk</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Best For</td>
                  <td className="p-4">Beginners and long-term holders</td>
                  <td className="p-4">Experienced traders</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            05. Pros and Cons of Spot Trading
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-400/20 dark:bg-emerald-500/10">
              <h3 className="font-bold text-emerald-800 dark:text-emerald-200">
                Advantages
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-emerald-700 dark:text-emerald-100">
                <li>• You own the actual crypto asset.</li>
                <li>• It is easier for beginners to understand.</li>
                <li>• You can hold your crypto long-term.</li>
                <li>• There is no pressure from expiry dates.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5 dark:border-rose-400/20 dark:bg-rose-500/10">
              <h3 className="font-bold text-rose-800 dark:text-rose-200">
                Limitations
              </h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-rose-700 dark:text-rose-100">
                <li>• Prices can still fall sharply.</li>
                <li>• You need patience and discipline.</li>
                <li>• Exchange fees can reduce profits.</li>
                <li>• Poor security habits can put funds at risk.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            06. Beginner-Friendly Spot Trading Strategies
          </h2>

          <div className="mt-6 space-y-4">
            {[
              [
                "Buy and Hold",
                "Buying crypto and holding it for a long time instead of reacting to every small price move.",
              ],
              [
                "Dollar-Cost Averaging",
                "Buying a fixed amount regularly, such as weekly or monthly, instead of trying to perfectly time the market.",
              ],
              [
                "Swing Trading",
                "Buying near support and selling near resistance over days or weeks. This requires more learning and discipline.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-900/60"
              >
                <h3 className="font-bold text-slate-950 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            07. Tips for Beginners
          </h2>

          <ul className="mt-5 space-y-3">
            <li>• Start with major coins before exploring risky assets.</li>
            <li>• Never use money you cannot afford to lose.</li>
            <li>• Use limit orders when you want better price control.</li>
            <li>• Keep a trading journal to review your decisions.</li>
            <li>• Avoid buying only because of social media hype.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
            08. Final Thoughts
          </h2>

          <p>
            Crypto spot trading is one of the simplest ways to participate in
            the crypto market. You buy the actual asset, you can hold it, and
            you can sell it when you choose.
          </p>

          <p className="mt-4">
            For beginners, spot trading is a good place to start because it
            teaches real market behavior without making things too complicated.
            The goal is not to rush. The goal is to learn, protect your money,
            and build better habits over time.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900 dark:border-amber-400/20 dark:bg-amber-500/10 dark:text-amber-200">
            Educational reminder: crypto markets are volatile. This content is
            for learning only and should not be treated as financial advice.
          </div>
        </section>
      </div>
    </article>
  );
}