import ExchangeCard from "../../components/discover/exchanges/ExchangeCard";
import { exchanges } from "../../data/discover/exchanges";

export default function DiscoverExchanges() {
  return (
    <div className="space-y-12">
      {/* Page header */}
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
          Discover
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
          Crypto Exchanges
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
          Compare cryptocurrency exchanges based on security, fees, liquidity,
          supported products, and beginner-friendliness.
        </p>
      </header>

      {/* Exchange list */}
      <section>
        <div className="space-y-6">
          {exchanges.map((exchange) => (
            <ExchangeCard
              key={exchange.slug}
              exchange={exchange}
            />
          ))}
        </div>
      </section>
    </div>
  );
}