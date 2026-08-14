import type { ExchangeData } from "./exchangeTypes";

export const bitget: ExchangeData = {
  slug: "bitget",
  name: "Bitget",

  logo: "/images/discover/exchanges/bitget/logo.png",
  heroImage: "/images/discover/exchanges/bitget/hero.png",

  tagline:
    "A cryptocurrency exchange known for spot trading, derivatives, copy trading, and trading tools.",

  shortDescription:
    "Bitget provides spot trading, futures markets, copy trading, automated tools, and additional cryptocurrency services.",

  description:
    "Bitget is a cryptocurrency exchange offering spot markets, derivatives, copy trading, trading bots, and other crypto-related products. Its copy-trading features may appeal to users who want to follow experienced traders, although beginners should understand the risks before using futures, leverage, or copied strategies.",

  score: {
    overall: 8.4,
    security: 8.2,
    fees: 8.7,
    beginnerFriendly: 8.0,
    liquidity: 8.6,
    features: 8.8,
  },

  bestFor: [
    "Copy trading",
    "Futures trading",
    "Trading tools",
    "Active crypto traders",
  ],

  supportedTrading: [
    "Spot trading",
    "Futures trading",
    "Margin trading",
    "Copy trading",
  ],

  supportedProducts: [
    "Crypto trading",
    "Trading bots",
    "Earn products",
    "Copy trading",
    "P2P trading",
  ],

  pros: [
    "Strong focus on copy-trading features",
    "Wide range of trading products",
    "Competitive trading fees",
    "Useful tools for active traders",
  ],

  cons: [
    "Futures and leverage can be risky for beginners",
    "The number of available features may feel overwhelming",
    "Product availability may differ by country",
    "Copy trading does not guarantee profitable results",
  ],

  fees: [
    {
      label: "Spot trading",
      value: "Varies",
      description:
        "Spot-trading fees may depend on account status, promotions, and applicable discounts.",
    },
    {
      label: "Futures trading",
      value: "Varies",
      description:
        "Maker and taker fees depend on the futures market and account level.",
    },
    {
      label: "Crypto deposits",
      value: "Usually free",
      description:
        "Blockchain deposits are generally not charged by the exchange, although network conditions may still affect transactions.",
    },
    {
      label: "Crypto withdrawals",
      value: "Network dependent",
      description:
        "Withdrawal fees depend on the asset and selected blockchain network.",
    },
  ],

  securityFeatures: [
    {
      title: "Two-factor authentication",
      description:
        "Users can enable additional authentication for account access and sensitive actions.",
    },
    {
      title: "Anti-phishing code",
      description:
        "Users can create a custom code to help identify genuine platform emails.",
    },
    {
      title: "Withdrawal address management",
      description:
        "Approved withdrawal addresses can be managed to improve account security.",
    },
    {
      title: "Device and login monitoring",
      description:
        "Users can review account access, active devices, and recent login activity.",
    },
  ],

  officialWebsite: "https://www.bitget.com",
  referralUrl: "YOUR_BITGET_REFERRAL_URL",

  affiliateDisclosure:
    "BassamMalik.com may receive a commission when a user creates an account through an eligible referral link. This does not increase the cost paid by the user.",

  foundedYear: 2018,

  availability: [
    "Availability and supported services vary by country",
  ],

  featured: true,

  updatedAt: "2026-07-17",
};