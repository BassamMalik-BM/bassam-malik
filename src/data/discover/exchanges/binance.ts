import type { ExchangeData } from "./exchangeTypes";

export const binance: ExchangeData = {
  slug: "binance",
  name: "Binance",

  logo: "/images/discover/exchanges/binance/logo.png",
  heroImage: "/images/discover/exchanges/binance/hero.png",

  tagline:
    "A high-liquidity crypto exchange with a large selection of trading products.",

  shortDescription:
    "Binance provides spot trading, futures, P2P trading, staking, and access to a broad selection of cryptocurrencies.",

  description:
    "Binance is a cryptocurrency exchange offering a wide range of markets, trading tools, and additional crypto services. Its large feature set may appeal to active traders, although complete beginners may initially find the platform complex.",

  score: {
    overall: 8.8,
    security: 8.5,
    fees: 9.2,
    beginnerFriendly: 7.8,
    liquidity: 9.7,
    features: 9.4,
  },

  bestFor: [
    "High liquidity",
    "Wide cryptocurrency selection",
    "Active traders",
  ],

  supportedTrading: [
    "Spot trading",
    "Futures trading",
    "Margin trading",
    "P2P trading",
  ],

  supportedProducts: [
    "Crypto trading",
    "Staking",
    "Earn products",
    "Trading bots",
  ],

  pros: [
    "High trading liquidity",
    "Competitive trading fees",
    "Large cryptocurrency selection",
    "Wide range of trading features",
  ],

  cons: [
    "Can feel complicated for beginners",
    "Some services are restricted by location",
    "Product availability varies by country",
  ],

  fees: [
    {
      label: "Spot trading",
      value: "Varies",
      description:
        "Trading fees depend on account level, market, and applicable discounts.",
    },
    {
      label: "Deposits",
      value: "Varies",
      description:
        "Deposit costs depend on the currency and payment method.",
    },
    {
      label: "Crypto withdrawals",
      value: "Network dependent",
      description:
        "Withdrawal fees depend on the cryptocurrency and blockchain network.",
    },
  ],

  securityFeatures: [
    {
      title: "Two-factor authentication",
      description:
        "Users can enable additional security for account access.",
    },
    {
      title: "Withdrawal address management",
      description:
        "Withdrawals can be limited to approved wallet addresses.",
    },
    {
      title: "Account activity monitoring",
      description:
        "Users can review devices and recent account activity.",
    },
  ],

  officialWebsite: "https://www.binance.com",
  referralUrl: "YOUR_BINANCE_REFERRAL_URL",

  affiliateDisclosure:
    "BassamMalik.com may receive a commission when a user creates an account through an eligible referral link. This does not increase the cost to the user.",

  foundedYear: 2017,
  availability: ["Availability and services vary by country"],

  featured: true,
  updatedAt: "2026-07-16",
};