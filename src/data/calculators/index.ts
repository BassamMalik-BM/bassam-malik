export type CalculatorCategory =
  | "Risk Management"
  | "Trading"
  | "Investing"
  | "Crypto";

export type CalculatorData = {
  slug: string;
  title: string;
  description: string;
  category: CalculatorCategory;
  bestFor: string;
  featured?: boolean;
};

export const calculators: CalculatorData[] = [
  {
    slug: "position-size",
    title: "Position Size Calculator",
    description:
      "Calculate an appropriate position size based on your account balance, risk percentage, entry price, and stop-loss price.",
    category: "Risk Management",
    bestFor: "Planning trade size while controlling account risk",
    featured: true,
  },

  {
    slug: "risk-reward",
    title: "Risk/Reward Calculator",
    description:
      "Compare the potential risk and reward of a trade using your entry price, stop loss, and profit target.",
    category: "Risk Management",
    bestFor: "Evaluating a trade setup before entering",
    featured: true,
  },

  {
    slug: "profit-loss",
    title: "Profit & Loss Calculator",
    description:
      "Estimate the potential profit or loss of a trade based on entry price, exit price, position size, and trade direction.",
    category: "Trading",
    bestFor: "Estimating possible trade outcomes",
    featured: true,
  },

  {
    slug: "dca",
    title: "DCA Calculator",
    description:
      "Estimate how recurring investments may accumulate over time using a dollar-cost averaging strategy.",
    category: "Investing",
    bestFor: "Planning recurring long-term investments",
    featured: true,
  },

  {
    slug: "compounding",
    title: "Compounding Calculator",
    description:
      "Estimate how an investment could grow over time when returns are repeatedly reinvested.",
    category: "Investing",
    bestFor: "Understanding the effect of compound growth",
  },

  {
    slug: "percentage",
    title: "Percentage Calculator",
    description:
      "Calculate percentage changes, increases, decreases, and differences between values.",
    category: "Trading",
    bestFor: "Quickly measuring price and portfolio changes",
  },

  {
    slug: "liquidation",
    title: "Liquidation Calculator",
    description:
      "Estimate a potential liquidation price based on entry price, leverage, and position direction.",
    category: "Trading",
    bestFor: "Understanding the risks of leveraged positions",
  },

  {
    slug: "staking",
    title: "Staking Calculator",
    description:
      "Estimate potential staking rewards using the amount staked, annual reward rate, and staking period.",
    category: "Crypto",
    bestFor: "Estimating potential staking rewards",
  },

  {
    slug: "mining",
    title: "Mining Profitability Calculator",
    description:
      "Estimate mining revenue and profitability using hash rate, power consumption, electricity cost, and other assumptions.",
    category: "Crypto",
    bestFor: "Estimating basic cryptocurrency mining profitability",
  },
];

export function getCalculatorBySlug(slug?: string) {
  if (!slug) return undefined;

  return calculators.find((calculator) => calculator.slug === slug);
}