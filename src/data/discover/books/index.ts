import { brokenMoney } from "./brokenMoney";
import { cryptoassets } from "./cryptoassets";
import { digitalGold } from "./digitalGold";
import { inventingBitcoin } from "./inventingBitcoin";
import { layeredMoney } from "./layeredMoney";
import { richDadPoorDad } from "./richDadPoorDad";
import { theBitcoinStandard } from "./theBitcoinStandard";
import { theLittleBookOfCommonSenseInvesting } from "./theLittleBookOfCommonSenseInvesting";
import { thePsychologyOfMoney } from "./thePsychologyOfMoney";

export type {
  BookData,
  BookDifficulty,
  BookScore,
} from "./bookTypes";

export const books = [
  theBitcoinStandard,
  brokenMoney,
  cryptoassets,
  inventingBitcoin,
  layeredMoney,
  digitalGold,
  thePsychologyOfMoney,
  richDadPoorDad,
  theLittleBookOfCommonSenseInvesting,
];

export function getBookBySlug(slug?: string) {
  if (!slug) {
    return undefined;
  }

  return books.find((book) => book.slug === slug);
}