import { useState } from "react";

import ToolShell from "../components/tools/ToolShell";
import ToolCard from "../components/tools/ToolCard";
import ToolInput from "../components/tools/ToolInput";
import ToolTextarea from "../components/tools/ToolTextarea";
import EmptyToolState from "../components/tools/EmptyToolState";

type WatchlistItem = {
  id: number;
  symbol: string;
  name: string;
  targetPrice: string;
  reason: string;
};

export default function Watchlist() {
  const [items, setItems] = useState<WatchlistItem[]>([]);

  const [symbol, setSymbol] = useState("");
  const [name, setName] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [reason, setReason] = useState("");

  function addItem() {
    if (!symbol.trim()) return;

    const newItem: WatchlistItem = {
      id: Date.now(),
      symbol: symbol.trim().toUpperCase(),
      name: name.trim(),
      targetPrice: targetPrice.trim(),
      reason: reason.trim(),
    };

    setItems((current) => [newItem, ...current]);

    setSymbol("");
    setName("");
    setTargetPrice("");
    setReason("");
  }

  function removeItem(id: number) {
    setItems((current) =>
      current.filter((item) => item.id !== id),
    );
  }

  return (
    <ToolShell
      category="Tracking"
      title="Crypto Watchlist"
      description="Organize cryptocurrencies you want to research or monitor without adding them to your investment portfolio."
    >
      <div className="space-y-8">
        <ToolCard
          title="Add to Watchlist"
          description="Save an asset you want to research or monitor later."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ToolInput
              label="Asset Symbol"
              value={symbol}
              onChange={setSymbol}
              placeholder="BTC"
            />

            <ToolInput
              label="Asset Name"
              value={name}
              onChange={setName}
              placeholder="Bitcoin"
            />

            <ToolInput
              label="Target / Interest Price"
              value={targetPrice}
              onChange={setTargetPrice}
              type="number"
              prefix="$"
              placeholder="60000"
            />
          </div>

          <div className="mt-6">
            <ToolTextarea
              label="Why are you watching this asset?"
              value={reason}
              onChange={setReason}
              placeholder="Example: waiting for a better entry, researching fundamentals, watching a key price level..."
              rows={4}
            />
          </div>

          <button
            type="button"
            onClick={addItem}
            disabled={!symbol.trim()}
            className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-blue-500"
          >
            Add to Watchlist
          </button>
        </ToolCard>

        <ToolCard
          title="Your Watchlist"
          description="Keep research candidates separate from assets you already own."
        >
          {items.length === 0 ? (
            <EmptyToolState
              title="Your watchlist is empty"
              message="Add an asset above to start building your research watchlist."
            />
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-6 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                          {item.symbol}
                        </h3>

                        {item.name && (
                          <span className="text-sm text-slate-500 dark:text-slate-400">
                            {item.name}
                          </span>
                        )}
                      </div>

                      {item.targetPrice && (
                        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                          <span className="font-semibold">
                            Target / interest price:
                          </span>{" "}
                          ${item.targetPrice}
                        </p>
                      )}

                      {item.reason && (
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                          {item.reason}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-sm font-semibold text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </ToolCard>
      </div>
    </ToolShell>
  );
}