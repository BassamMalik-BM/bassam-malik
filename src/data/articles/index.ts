import { whatIsCryptocurrency } from "./cryptocurrency/what-is-cryptocurrency";
import { whatIsBitcoin } from "./bitcoin/what-is-bitcoin";
import { whatIsBlockchain } from "./blockchain/what-is-blockchain";
import { bitcoinVsEthereum } from "./comparisons/bitcoin-vs-ethereum";
import { whatIsEthereum } from "./ethereum/what-is-ethereum";
import { whatIsACryptoExchange } from "./exchanges/what-is-a-crypto-exchange";
import { whatAreTradingIndicators } from "./indicators/what-are-trading-indicators";
import { whatIsMarketCapitalization } from "./market/what-is-market-capitalization";
import { whyEmotionalTradingIsDangerous } from "./trading-psychology/why-emotional-trading-is-dangerous";
import { whyRiskManagementMatters } from "./risk-management/why-risk-management-matters";
import { keepingCryptoSafe } from "./crypto-security/keeping-crypto-safe";
import { whatIsTechnicalAnalysis } from "./technical-analysis/what-is-technical-analysis";
import { whatIsSpotTrading } from "./trading/what-is-spot-trading";
import { whatIsACryptoWallet } from "./wallets/what-is-a-crypto-wallet";
import { whyWasBitcoinCreated } from "./bitcoin/why-was-bitcoin-created";
import { whatIsDefi } from "./blockchain/what-is-defi"
import { whatIsWeb3 } from "./blockchain/what-is-web3"
import { howCryptoWalletsWork } from "./wallets/how-crypto-wallet-works"
import { whyEthereumIsDifferent } from "./ethereum/why-ethereum-is-different"
import { whatIsFuturesTrading } from "./trading/what-is-futures-trading"
import { spotTradingVsFutures } from "./comparisons/spot-trading-vs-futures"
import { whatIsCryptoVolatility } from "./market/what-is-crypto-volatility"
import { commonCryptoScams } from "./crypto-security/common-crypto-scams";
import { howDoesCryptocurrencyWork } from "./cryptocurrency/how-does-cryptocurrency-work";
import { whatAreChartTimeframes } from "./technical-analysis/what-are-chart-timeframes";
import { whatIsRevengeTrading } from "./trading-psychology/what-is-revenge-trading";
import { whatAreMomentumIndicators } from "./indicators/what-are-momentum-indicators";
import { whatIsTheRiskToRewardRatio } from "./risk-management/what-is-the-risk-to-reward-ratio"
import { howEthereumWorks } from "./ethereum/how-ethereum-works"
import { whatAreVolatilityIndicators } from "./indicators/what-are-volatility-indicators";
import { whoCreatedBitcoin } from "./bitcoin/who-created-bitcoin";
import { whatIsAMarketOrder } from "./trading/what-is-a-market-order";
import { whatIsACryptoCoin } from "./cryptocurrency/what-is-a-crypto-coin";
import { howToChooseACryptoExchange } from "./exchanges/how-to-choose-a-crypto-exchange";
import { whatIsFomoInTrading } from "./trading-psychology/what-is-fomo-in-trading";
import { whatMovesCryptoPrices } from "./market/what-moves-crypto-prices";
import { hotWalletVsColdWallet } from "./comparisons/hot-wallet-vs-cold-wallet";
import { whatIsALimitOrder } from "./trading/what-is-a-limit-order";
import { whatAreSmartContracts } from "./blockchain/what-are-smart-contracts";
import { whatIsPositionSizing } from "./risk-management/what-is-position-sizing";


export const articles = [
  whatIsCryptocurrency,
  whatIsBitcoin,
  whatIsBlockchain,
  bitcoinVsEthereum,
  whatIsEthereum,
  whatIsACryptoExchange,
  whatAreTradingIndicators,
  whatIsMarketCapitalization,
  whyEmotionalTradingIsDangerous,
  whyRiskManagementMatters,
  keepingCryptoSafe,
  whatIsTechnicalAnalysis,
  whatIsSpotTrading,
  whatIsACryptoWallet,
  whyWasBitcoinCreated,
  whatIsWeb3,
  whatIsDefi,
  howCryptoWalletsWork,
  whyEthereumIsDifferent,
  whatIsFuturesTrading,
  spotTradingVsFutures,
  whatIsCryptoVolatility,
  commonCryptoScams,
  howDoesCryptocurrencyWork,
  whatAreChartTimeframes,
  whatIsRevengeTrading,
  whatAreMomentumIndicators,
  whatIsTheRiskToRewardRatio,
  howEthereumWorks,
  whatAreVolatilityIndicators,
  whoCreatedBitcoin,
  whatIsAMarketOrder,
  whatIsACryptoCoin,
  howToChooseACryptoExchange,
  whatIsFomoInTrading,
  whatMovesCryptoPrices,
  hotWalletVsColdWallet,
  whatIsALimitOrder,
  whatAreSmartContracts,
  whatIsPositionSizing,
];

export function getArticleBySlug(slug?: string) {
  if (!slug) return undefined;
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category?: string) {
  if (!category) return [];
  return articles.filter((article) => article.category.slug === category);
}