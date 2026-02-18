/**
 * Crypto logo URLs (CoinGecko CDN). Fallback to first letter when missing.
 */
export const CRYPTO_LOGOS: Record<string, string> = {
  BTC: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
  ETH: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
  BNB: "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
  AMPL: "https://assets.coingecko.com/coins/images/4708/small/Ampleforth.png",
  ENG: "https://assets.coingecko.com/coins/images/1007/small/enigma.png",
}

export function getCryptoLogoUrl(symbol: string): string | undefined {
  return CRYPTO_LOGOS[symbol.toUpperCase()]
}
