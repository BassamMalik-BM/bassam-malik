export interface ExchangeScore {
  overall: number;
  security: number;
  fees: number;
  beginnerFriendly: number;
  liquidity: number;
  features: number;
}

export interface ExchangeFee {
  label: string;
  value: string;
  description?: string;
}

export interface ExchangeSecurityFeature {
  title: string;
  description: string;
}

export interface ExchangeData {
  slug: string;
  name: string;

  logo: string;
  heroImage: string;

  tagline: string;
  shortDescription: string;
  description: string;

  score: ExchangeScore;

  bestFor: string[];
  supportedTrading: string[];
  supportedProducts: string[];

  pros: string[];
  cons: string[];

  fees: ExchangeFee[];
  securityFeatures: ExchangeSecurityFeature[];

  officialWebsite: string;
  referralUrl?: string;

  affiliateDisclosure: string;

  foundedYear?: number;
  headquarters?: string;
  availability?: string[];

  featured?: boolean;
  updatedAt: string;
}