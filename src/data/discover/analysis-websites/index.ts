import { tradingView } from "./tradingView";
import { coinglass } from "./coinglass"

export type {
  AnalysisWebsiteCategory,
  AnalysisWebsiteData,
  AnalysisWebsiteScore,
  WebsitePricingModel,
  WebsitePricingPlan,
} from "./analysisWebsiteTypes";

export const analysisWebsites = [
  tradingView,
  coinglass,
];

export function getAnalysisWebsiteBySlug(slug?: string) {
  if (!slug) {
    return undefined;
  }

  return analysisWebsites.find(
    (website) => website.slug === slug,
  );
}