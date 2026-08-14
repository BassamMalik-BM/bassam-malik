import { binance } from "./binance";
import { bitget } from "./bitget";
import { bybit } from "./bybit"

export type {
  ExchangeData,
  ExchangeFee,
  ExchangeScore,
  ExchangeSecurityFeature,
} from "./exchangeTypes";

export const exchanges = [
  binance,
  bitget,
  bybit,
];

export function getExchangeBySlug(slug?: string) {
  if (!slug) {
    return undefined;
  }

  return exchanges.find((exchange) => exchange.slug === slug);
}