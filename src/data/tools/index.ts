export type ToolCategory =
  | "Planning"
  | "Tracking"
  | "Risk Management"
  | "Security"
  | "Trading";

export type ToolData = {
  slug: string;
  title: string;
  description: string;
  category: ToolCategory;
  bestFor: string;
  featured?: boolean;
};

export const tools: ToolData[] = [
  {
    slug: "trading-journal",
    title: "Trading Journal",
    description:
      "Record completed trades, review decisions, track mistakes, and identify patterns in your trading behavior.",
    category: "Tracking",
    bestFor: "Reviewing past trades and improving discipline",
    featured: true,
  },
  {
    slug: "portfolio-manager",
    title: "Portfolio Manager",
    description:
      "Track owned assets, invested amounts, allocation, average entry prices, and overall portfolio structure.",
    category: "Tracking",
    bestFor: "Managing cryptocurrency holdings in one place",
    featured: true,
  },
  {
    slug: "watchlist",
    title: "Watchlist",
    description:
      "Save assets you want to monitor without adding them to your investment portfolio.",
    category: "Tracking",
    bestFor: "Organizing cryptocurrencies you are researching",
  },
  {
    slug: "trading-checklist",
    title: "Trading Checklist",
    description:
      "Run through a structured pre-trade checklist before entering a position.",
    category: "Trading",
    bestFor: "Reducing impulsive and poorly planned trades",
    featured: true,
  },
  {
    slug: "risk-management-checklist",
    title: "Risk Management Checklist",
    description:
      "Review important risk rules before taking a trade and confirm that your risk process is being followed.",
    category: "Risk Management",
    bestFor: "Maintaining consistent risk discipline",
    featured: true,
  },
  {
    slug: "security-checklist",
    title: "Crypto Security Checklist",
    description:
      "Review account, wallet, password, backup, phishing, and device-security practices.",
    category: "Security",
    bestFor: "Improving personal crypto security habits",
  },
  {
    slug: "investment-planner",
    title: "Investment Planner",
    description:
      "Define investment goals, time horizon, contribution plans, allocation targets, and personal investment rules.",
    category: "Planning",
    bestFor: "Building a structured long-term investment plan",
  },
  {
    slug: "trade-plan-builder",
    title: "Trade Plan Builder",
    description:
      "Create a structured plan for a potential trade before entering it, including thesis, setup, invalidation, and execution notes.",
    category: "Planning",
    bestFor: "Planning individual trades before execution",
  },
];

export function getToolBySlug(slug?: string) {
  if (!slug) return undefined;

  return tools.find((tool) => tool.slug === slug);
}