import type { AnalysisWebsiteData } from "./analysisWebsiteTypes";

export const tradingView: AnalysisWebsiteData = {
  slug: "tradingview",
  name: "TradingView",

  logo:
    "/images/discover/analysis-websites/tradingview/logo.png",

  heroImage:
    "/images/discover/analysis-websites/tradingview/hero.png",

  tagline:
    "A charting and market-analysis platform for cryptocurrency, stocks, forex, and other financial markets.",

  shortDescription:
    "TradingView provides interactive charts, technical indicators, market data, screeners, alerts, and community-published analysis.",

  description:
    "TradingView is a multi-market charting and analysis platform used by beginners, traders, and investors. It provides interactive charts, technical indicators, drawing tools, alerts, screeners, and access to community-published market ideas. The platform supports cryptocurrency alongside traditional financial markets.",

  category: "Charting",
  pricingModel: "Freemium",

  score: {
    overall: 9.0,
    beginnerFriendly: 8.4,
    dataQuality: 8.8,
    usability: 9.1,
    features: 9.4,
    value: 8.6,
  },

  bestFor: [
    "Technical chart analysis",
    "Tracking multiple financial markets",
    "Learning charting tools",
  ],

  keyFeatures: [
    "Interactive charts",
    "Technical indicators",
    "Drawing tools",
    "Price alerts",
    "Market screeners",
    "Community analysis",
  ],

  supportedMarkets: [
    "Cryptocurrency",
    "Stocks",
    "Forex",
    "Indices",
    "Commodities",
    "Bonds",
  ],

  pros: [
    "Clean and flexible charting interface",
    "Large selection of technical indicators",
    "Supports crypto and traditional markets",
    "Useful free plan for beginners",
  ],

  cons: [
    "Some advanced features require a paid plan",
    "The large number of tools may overwhelm new users",
    "Community-published ideas vary in quality",
  ],

  pricingPlans: [
    {
      name: "Free",
      price: "Free",
      description:
        "Basic charting tools and limited indicators.",
    },
    {
      name: "Paid plans",
      price: "Varies",
      description:
        "Higher limits and additional charting features.",
    },
  ],

  officialWebsite: "https://www.tradingview.com",
  referralUrl: "YOUR_TRADINGVIEW_REFERRAL_URL",

  affiliateDisclosure:
    "BassamMalik.com may receive a commission when a user signs up through an eligible referral link. This does not increase the price paid by the user.",

  featured: true,
  updatedAt: "2026-07-16",
};