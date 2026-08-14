import { useMemo, useState } from "react";

import ToolShell from "../components/tools/ToolShell";
import ToolCard from "../components/tools/ToolCard";
import ToolInput from "../components/tools/ToolInput";
import ToolStat from "../components/tools/ToolStat";
import EmptyToolState from "../components/tools/EmptyToolState";

type PortfolioAsset = {
  id: number;
  symbol: string;
  name: string;
  quantity: number;
  averageBuyPrice: number;
  currentPrice: number;
};

export default function PortfolioManager() {
  const [assets, setAssets] = useState<PortfolioAsset[]>([]);

  const [symbol, setSymbol] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [averageBuyPrice, setAverageBuyPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");

  const portfolio = useMemo(() => {
    const totalInvested = assets.reduce(
      (total, asset) =>
        total + asset.quantity * asset.averageBuyPrice,
      0,
    );

    const currentValue = assets.reduce(
      (total, asset) =>
        total + asset.quantity * asset.currentPrice,
      0,
    );

    const unrealizedPnL = currentValue - totalInvested;

    const unrealizedPnLPercent =
      totalInvested > 0
        ? (unrealizedPnL / totalInvested) * 100
        : 0;

    return {
      totalInvested,
      currentValue,
      unrealizedPnL,
      unrealizedPnLPercent,
    };
  }, [assets]);

  function addAsset() {
    const parsedQuantity = Number(quantity);
    const parsedAveragePrice = Number(averageBuyPrice);
    const parsedCurrentPrice = Number(currentPrice);

    if (
      !symbol.trim() ||
      parsedQuantity <= 0 ||
      parsedAveragePrice < 0 ||
      parsedCurrentPrice < 0
    ) {
      return;
    }

    const newAsset: PortfolioAsset = {
      id: Date.now(),
      symbol: symbol.trim().toUpperCase(),
      name: name.trim(),
      quantity: parsedQuantity,
      averageBuyPrice: parsedAveragePrice,
      currentPrice: parsedCurrentPrice,
    };

    setAssets((current) => [...current, newAsset]);

    setSymbol("");
    setName("");
    setQuantity("");
    setAverageBuyPrice("");
    setCurrentPrice("");
  }

  function removeAsset(id: number) {
    setAssets((current) =>
      current.filter((asset) => asset.id !== id),
    );
  }

  return (
    <ToolShell
      category="Tracking"
      title="Portfolio Manager"
      description="Organize the cryptocurrency assets you own, review portfolio allocation, and understand the current structure of your holdings."
    >
      <div className="space-y-8">
        {/* Portfolio overview */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ToolStat
            label="Assets"
            value={assets.length}
          />

          <ToolStat
            label="Total Invested"
            value={formatCurrency(portfolio.totalInvested)}
          />

          <ToolStat
            label="Current Value"
            value={formatCurrency(portfolio.currentValue)}
          />

          <ToolStat
            label="Unrealized P/L"
            value={formatSignedCurrency(portfolio.unrealizedPnL)}
            description={`${formatSignedPercent(
              portfolio.unrealizedPnLPercent,
            )} from invested value`}
          />
        </section>

        {/* Add asset */}
        <ToolCard
          title="Add Portfolio Asset"
          description="Add an asset you currently own. Current prices are entered manually for now."
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
              label="Quantity Owned"
              value={quantity}
              onChange={setQuantity}
              type="number"
              placeholder="0.25"
            />

            <ToolInput
              label="Average Buy Price"
              value={averageBuyPrice}
              onChange={setAverageBuyPrice}
              type="number"
              prefix="$"
              placeholder="60000"
            />

            <ToolInput
              label="Current Price"
              value={currentPrice}
              onChange={setCurrentPrice}
              type="number"
              prefix="$"
              placeholder="70000"
            />
          </div>

          <button
            type="button"
            onClick={addAsset}
            disabled={
              !symbol.trim() ||
              Number(quantity) <= 0 ||
              Number(averageBuyPrice) < 0 ||
              Number(currentPrice) < 0
            }
            className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 dark:hover:bg-blue-500"
          >
            Add Asset
          </button>
        </ToolCard>

        {/* Holdings */}
        <ToolCard
          title="Portfolio Holdings"
          description="Review the assets currently included in your portfolio."
        >
          {assets.length === 0 ? (
            <EmptyToolState
              title="Your portfolio is empty"
              message="Add an asset above to start organizing your cryptocurrency holdings."
            />
          ) : (
            <div className="space-y-5">
              {assets.map((asset) => {
                const investedValue =
                  asset.quantity * asset.averageBuyPrice;

                const marketValue =
                  asset.quantity * asset.currentPrice;

                const pnl = marketValue - investedValue;

                const pnlPercent =
                  investedValue > 0
                    ? (pnl / investedValue) * 100
                    : 0;

                const allocation =
                  portfolio.currentValue > 0
                    ? (marketValue / portfolio.currentValue) * 100
                    : 0;

                return (
                  <article
                    key={asset.id}
                    className="rounded-3xl border border-slate-200 bg-white/70 p-6 dark:border-white/10 dark:bg-white/[0.03]"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                            {asset.symbol}
                          </h3>

                          {asset.name && (
                            <span className="text-sm text-slate-500 dark:text-slate-400">
                              {asset.name}
                            </span>
                          )}
                        </div>

                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                          {formatNumber(asset.quantity)} units
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeAsset(asset.id)}
                        className="text-sm font-semibold text-slate-500 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <HoldingStat
                        label="Average Buy"
                        value={formatCurrency(
                          asset.averageBuyPrice,
                        )}
                      />

                      <HoldingStat
                        label="Current Price"
                        value={formatCurrency(
                          asset.currentPrice,
                        )}
                      />

                      <HoldingStat
                        label="Current Value"
                        value={formatCurrency(marketValue)}
                      />

                      <HoldingStat
                        label="Unrealized P/L"
                        value={`${formatSignedCurrency(
                          pnl,
                        )} (${formatSignedPercent(
                          pnlPercent,
                        )})`}
                      />
                    </div>

                    {/* Allocation */}
                    <div className="mt-6">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          Portfolio Allocation
                        </p>

                        <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                          {allocation.toFixed(1)}%
                        </p>
                      </div>

                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                        <div
                          className="h-full rounded-full bg-blue-600 transition-all"
                          style={{
                            width: `${Math.min(
                              Math.max(allocation, 0),
                              100,
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </ToolCard>

        {/* Portfolio structure */}
        {assets.length > 0 && (
          <ToolCard
            title="Allocation Overview"
            description="See how much of your current portfolio value is concentrated in each asset."
          >
            <div className="space-y-5">
              {assets
                .map((asset) => {
                  const value =
                    asset.quantity * asset.currentPrice;

                  const allocation =
                    portfolio.currentValue > 0
                      ? (value / portfolio.currentValue) * 100
                      : 0;

                  return {
                    ...asset,
                    value,
                    allocation,
                  };
                })
                .sort(
                  (a, b) =>
                    b.allocation - a.allocation,
                )
                .map((asset) => (
                  <div key={asset.id}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-950 dark:text-white">
                          {asset.symbol}
                        </p>

                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {formatCurrency(asset.value)}
                        </p>
                      </div>

                      <p className="font-bold text-slate-950 dark:text-white">
                        {asset.allocation.toFixed(1)}%
                      </p>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
                      <div
                        className="h-full rounded-full bg-emerald-500"
                        style={{
                          width: `${Math.min(
                            Math.max(asset.allocation, 0),
                            100,
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </ToolCard>
        )}

        {/* Educational notice */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-5 text-sm leading-7 text-slate-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-slate-300">
          Portfolio values depend on the current prices you enter. This tool is
          intended for organization and educational tracking rather than
          real-time market pricing or financial advice.
        </div>
      </div>
    </ToolShell>
  );
}

function HoldingStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4 dark:bg-white/[0.03]">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-2 break-words font-semibold text-slate-800 dark:text-slate-200">
        {value}
      </p>
    </div>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

function formatSignedCurrency(value: number) {
  const formatted = formatCurrency(Math.abs(value));

  if (value > 0) return `+${formatted}`;
  if (value < 0) return `-${formatted}`;

  return formatted;
}

function formatSignedPercent(value: number) {
  const formatted = `${Math.abs(value).toFixed(2)}%`;

  if (value > 0) return `+${formatted}`;
  if (value < 0) return `-${formatted}`;

  return formatted;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 8,
  }).format(value);
}