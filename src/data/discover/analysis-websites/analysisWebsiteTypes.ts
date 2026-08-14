export type AnalysisWebsiteCategory =
  | "Charting"
  | "Market Data"
  | "On-Chain Analytics"
  | "Derivatives Data"
  | "Research"
  | "Screening"
  | "Portfolio Tracking"
  | "Market Analytics";

export type WebsitePricingModel =
  | "Free"
  | "Freemium"
  | "Paid";

export interface AnalysisWebsiteScore {
  overall: number;
  beginnerFriendly: number;
  dataQuality: number;
  usability: number;
  features: number;
  value: number;
}

export interface WebsitePricingPlan {
  name: string;
  price?: string;
  description?: string;
}

export interface AnalysisWebsiteData {
  slug: string;
  name: string;

  logo: string;
  heroImage?: string;

  tagline: string;
  shortDescription: string;
  description: string;

  category: AnalysisWebsiteCategory;
  pricingModel: WebsitePricingModel;

  score: AnalysisWebsiteScore;

  bestFor: string[];
  keyFeatures: string[];
  supportedMarkets: string[];

  pros: string[];
  cons: string[];

  pricingPlans?: WebsitePricingPlan[];

  officialWebsite: string;
  referralUrl?: string;

  affiliateDisclosure?: string;

  featured?: boolean;
  updatedAt: string;
}