/**
 * $ELON site configuration. Swap the placeholder values at launch —
 * nothing else needs to change.
 */

export const siteConfig = {
  name: "ELON",
  symbol: "$ELON",
  url: "https://elonrobinhood.finance",
  tagline: "hold it, get paid Tesla & SpaceX",
  description:
    "$ELON is the degen dividend of Robinhood Chain. A 4.20% tax on every trade buys tokenized $TSLA and $SPCX — real RWAs — and pays them straight to holders. No staking. No claiming.",

  // Socials — swap for the real handles when they exist.
  telegram: "https://t.me/ELONonRobinhood",
  twitter: "https://x.com/ELONonRobinhood",

  // Empty = "CA: TBA" chip + buy buttons fall back to the Telegram.
  contractAddress: "",
  buyLink: "",

  // Tokenomics knobs (display only).
  taxPercent: "4.20",
  supply: "420,690,000,000",
};
