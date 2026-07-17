# $ELON — elonrobinhood.finance

Meme RWA token site for **$ELON** on **Robinhood Chain** — pays holder
dividends in tokenized **$TSLA + $SPCX** (Robinhood Chain RWA stocks).
Next.js 14 App Router, single static page, no API routes.

- **Vibe**: modeled on theindex.finance (warm paper `#edece8`, white cards,
  ink text, Instrument Sans, uppercase eyebrows) but degen/meme-flavored —
  Mars-red accent, 4.20% tax, 420.69B supply, polaroid Elon mascot.
- **All launch knobs live in `site.config.ts`**: contractAddress (empty =
  "CA: TBA" chip + buy buttons fall back to Telegram), buyLink, socials,
  tax/supply display strings.
- **Node 20 required** (same as hoodprinter):
  `export PATH="/usr/local/opt/node@20/bin:$PATH"` before builds. Verify with
  exit code: `npm run build > /tmp/b.log 2>&1; echo "EXIT=$?"`.
- Brand assets in `public/brand/`: **`elon-mark.png` is THE logo** (black
  woodcut illustration on neon `#d4f30f`, circle badge — nav avatar, favicon,
  app/icon.png, OG). **`elon.png` (real JRE photo w/ neon hat) stays as the
  hero polaroid — Dylan: "keep the real one, it's hilarious."** `logo/` holds
  the circular photo logo pack (circle/neon/coin variants; render script
  regenerates). Colorway: exact Robinhood neon `#ccff00` + feather ink
  `#1c180d` (neon = surfaces/highlights only, never thin text on light bg).
  Bump `?v=` on og.png when it changes.
- **Standing rule: commit AND push after every change** (Vercel auto-deploys).
- The footer parody disclaimer (not affiliated with Elon Musk / Tesla /
  SpaceX / Robinhood) is required — never remove it.
