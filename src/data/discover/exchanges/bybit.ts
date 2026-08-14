import type { ExchangeData } from "./exchangeTypes";

export const bybit: ExchangeData = {
  slug: "bybit",
  name: "Bybit",

  logo: "/images/discover/exchanges/bybit/logo.png",
  heroImage: "/images/discover/exchanges/bybit/hero.png",

  tagline:
    "A global cryptocurrency exchange offering spot trading, derivatives, copy trading, and Web3 services.",

  shortDescription:
    "Bybit is a cryptocurrency exchange offering spot markets, futures, options, copy trading, trading bots, and other crypto-related products for both newer and experienced users.",

  description:
    "Bybit was founded in 2018 and provides a broad range of cryptocurrency trading services. Its platform includes spot trading, perpetual futures, options, copy trading, automated trading tools, earn products, and Web3 features. The interface is feature-rich and may suit active traders, although some of its advanced products can feel complex for complete beginners.",

  score: {
    overall: 9.2,
    security: 9.1,
    fees: 9.2,
    beginnerFriendly: 8.7,
    liquidity: 9.4,
    features: 9.6,
  },

  bestFor: [
    "Active crypto traders",
    "Derivatives trading",
    "Copy trading",
    "Users who want advanced trading tools",
  ],

  supportedTrading: [
    "Spot Trading",
    "Futures Trading",
    "Options Trading",
    "Margin Trading",
    "Copy Trading",
    "Trading Bots",
  ],

  supportedProducts: [
    "Crypto Earn",
    "Staking",
    "Launchpad",
    "Web3 Wallet",
    "Bybit Card",
    "Trading Bots",
  ],

  pros: [
    "Wide range of trading products",
    "Competitive trading fees",
    "Strong liquidity across major markets",
    "Built-in copy trading features",
    "Advanced charting and order tools",
    "Available on web and mobile",
  ],

  cons: [
    "Advanced features may overwhelm complete beginners",
    "Availability varies by country",
    "Some products involve significant trading risk",
    "Identity verification may be required for platform access",
  ],

  fees: [
    {
      label: "Spot Maker Fee",
      value: "From 0.10%",
      description:
        "The standard maker fee may vary depending on account tier and trading volume.",
    },
    {
      label: "Spot Taker Fee",
      value: "From 0.10%",
      description:
        "The standard taker fee may vary depending on account tier and trading volume.",
    },
    {
      label: "Futures Maker Fee",
      value: "From 0.02%",
      description:
        "Fees for derivatives may vary by contract type and account tier.",
    },
    {
      label: "Futures Taker Fee",
      value: "From 0.055%",
      description:
        "Fees for derivatives may vary by contract type and account tier.",
    },
    {
      label: "Deposit Fees",
      value: "Usually free",
      description:
        "Blockchain network or payment-provider charges may still apply.",
    },
    {
      label: "Withdrawal Fees",
      value: "Varies by asset",
      description:
        "Withdrawal costs depend on the cryptocurrency and blockchain network.",
    },
  ],

  securityFeatures: [
    {
      title: "Two-Factor Authentication",
      description:
        "Users can enable two-factor authentication to add an extra layer of account protection.",
    },
    {
      title: "Anti-Phishing Code",
      description:
        "A personalized anti-phishing code can help users identify legitimate platform emails.",
    },
    {
      title: "Withdrawal Address Whitelist",
      description:
        "Users can restrict withdrawals to previously approved wallet addresses.",
    },
    {
      title: "Passkey Support",
      description:
        "Passkeys provide an additional login method designed to reduce password-related risks.",
    },
    {
      title: "Cold Wallet Storage",
      description:
        "A portion of customer assets may be held in offline storage to reduce exposure to online threats.",
    },
    {
      title: "Account Activity Monitoring",
      description:
        "Security controls help identify suspicious logins, withdrawals, and other unusual account activity.",
    },
  ],

  officialWebsite: "https://www.bybit.com",
  referralUrl: "YOUR_BYBIT_REFERRAL_LINK",

  affiliateDisclosure:
    "BassamMalik.com may earn a commission if you register or use eligible services through referral links. This does not increase your cost.",

  foundedYear: 2018,
  headquarters: "Dubai, United Arab Emirates",

  availability: [
    "Availability depends on the user's country or region",
    "Some trading products may be restricted in certain jurisdictions",
    "Users should confirm local eligibility before creating an account",
  ],

  featured: true,
  updatedAt: "2026-07-23",
};