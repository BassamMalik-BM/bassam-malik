export type CalculatorCategory =
  | "Trading"
  | "Investing"
  | "Risk Management"
  | "Crypto";

export type CalculatorData = {
  slug: string;
  title: string;
  description: string;
  category: CalculatorCategory;
  bestFor: string;
  featured?: boolean;
};