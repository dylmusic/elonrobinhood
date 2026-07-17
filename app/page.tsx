import Image from "next/image";
import { siteConfig } from "@/site.config";
import elonPic from "@/public/brand/elon.png";
import elonMark from "@/public/brand/elon-mark.png";

const buyLink = siteConfig.buyLink || siteConfig.telegram;
const tax = `${siteConfig.taxPercent}%`;

const TICKER_TAPE = [
  "$TSLA",
  "$SPCX",
  "$ELON",
  "DIVIDENDS",
  "ROBINHOOD CHAIN",
  "RWA",
  "NO STAKING",
  "NO CLAIMING",
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <a className="nav-brand" href="#top">
          <Image
            src={elonMark}
            alt="$ELON logo"
            width={34}
            height={34}
            className="nav-pfp"
          />
          <span>
            elonrobinhood<span className="nav-brand-dim">.finance</span>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#how">How it works</a>
          <a href="#basket">The basket</a>
          <a href="#tokenomics">Tokenomics</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a
          className="btn btn-primary btn-sm"
          href={buyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy $ELON
        </a>
      </header>

      <main id="top">
        {/* ---- Hero ---- */}
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">Real world assets · Robinhood Chain</span>
            <h1>
              Hold <em>$ELON</em>.<br />
              Get paid <em>$TSLA</em> + <em>$SPCX</em>.
            </h1>
            <p className="hero-sub">
              $ELON is the degen dividend of Robinhood Chain. A {tax} tax on
              every trade buys tokenized Tesla and SpaceX stock — real RWAs on
              Robinhood Chain — and sends them straight to holders&rsquo;
              wallets. No staking. No claiming. Just vibes and dividends.
            </p>
            <div className="hero-ctas">
              <a
                className="btn btn-primary"
                href={buyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy $ELON
              </a>
              <a
                className="btn btn-ghost"
                href={siteConfig.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Telegram
              </a>
            </div>
            <span className="ca-chip">
              {siteConfig.contractAddress ? (
                <>
                  CA: <code>{siteConfig.contractAddress}</code>
                </>
              ) : (
                <>CA: TBA — dropped in the Telegram first. Trust no DMs.</>
              )}
            </span>
          </div>
          <figure className="polaroid">
            <Image
              src={elonPic}
              alt="The $ELON mascot moment"
              className="polaroid-img"
              priority
            />
            <figcaption>
              chief vibes officer · not actually involved
            </figcaption>
          </figure>
        </section>

        {/* ---- Ticker tape ---- */}
        <div className="tape" aria-hidden="true">
          <div className="tape-track">
            {[0, 1].map((copy) => (
              <span className="tape-run" key={copy}>
                {TICKER_TAPE.map((t) => (
                  <span className="tape-item" key={t}>
                    {t} <span className="tape-dot">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ---- Stats ---- */}
        <section className="stats">
          <div className="stat">
            <strong>{tax}</strong>
            <span>the tax. nice.</span>
          </div>
          <div className="stat">
            <strong>2</strong>
            <span>stocks in the basket</span>
          </div>
          <div className="stat">
            <strong>420.69B</strong>
            <span>total supply</span>
          </div>
          <div className="stat">
            <strong>0</strong>
            <span>staking, claiming, or effort</span>
          </div>
        </section>

        {/* ---- How it works ---- */}
        <section className="section" id="how">
          <span className="eyebrow">The machine</span>
          <h2>Trades in. Stocks out.</h2>
          <div className="grid grid-4">
            <div className="card">
              <span className="step-num">1</span>
              <h3>Ape $ELON</h3>
              <p>
                Buy $ELON on Robinhood Chain. That&rsquo;s the whole job.
                You&rsquo;re now an investor. Congratulations.
              </p>
            </div>
            <div className="card">
              <span className="step-num">2</span>
              <h3>The tax collects</h3>
              <p>
                Every buy and sell pays a {tax} fee in ETH. Paper hands fund
                diamond hands. Poetic.
              </p>
            </div>
            <div className="card">
              <span className="step-num">3</span>
              <h3>ETH buys real stocks</h3>
              <p>
                Collected ETH market-buys tokenized $TSLA and $SPCX — real-world
                assets living on Robinhood Chain&rsquo;s RWA platform.
              </p>
            </div>
            <div className="card">
              <span className="step-num">4</span>
              <h3>Dividends hit your wallet</h3>
              <p>
                Stocks are distributed pro-rata straight to holders. No staking,
                no claiming, no dashboard grinding. Hold and receive.
              </p>
            </div>
          </div>
        </section>

        {/* ---- The basket ---- */}
        <section className="section" id="basket">
          <span className="eyebrow">The basket</span>
          <h2>Two tickers. One timeline.</h2>
          <div className="grid grid-2">
            <div className="card basket-card basket-tsla">
              <span className="basket-sym">$TSLA</span>
              <h3>Tesla</h3>
              <p>
                The car company that&rsquo;s a robot company that&rsquo;s an AI
                company that&rsquo;s a meme. Now it pays <em>you</em> for
                holding a meme. Full circle.
              </p>
            </div>
            <div className="card basket-card basket-spcx">
              <span className="basket-sym">$SPCX</span>
              <h3>SpaceX</h3>
              <p>
                Occupy Mars. Collect dividends on Earth. Tokenized SpaceX
                exposure — the most pre-IPO thing you can hold in a hot wallet.
              </p>
            </div>
          </div>
          <p className="section-note">
            Both delivered as tokenized RWA stocks on Robinhood Chain — they sit
            in your wallet like any other token.
          </p>
        </section>

        {/* ---- Why ---- */}
        <section className="section" id="why">
          <span className="eyebrow">Why $ELON</span>
          <h2>A legit RWA use case in a meme costume.</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>📈 Real assets</h3>
              <p>
                Not points. Not IOUs. Tokenized stock RWAs on Robinhood Chain —
                the same rails serious money is moving to.
              </p>
            </div>
            <div className="card">
              <h3>🛋️ Zero-effort yield</h3>
              <p>
                The machine runs itself. Volume in, stocks out, wallets fed.
                Your only job is not selling like a coward.
              </p>
            </div>
            <div className="card">
              <h3>🚀 Maximum meme</h3>
              <p>
                Every RWA project has the tech. None of them have the meme.
                $ELON has both, plus a mascot who already lives rent-free in
                everyone&rsquo;s head.
              </p>
            </div>
          </div>
        </section>

        {/* ---- Tokenomics ---- */}
        <section className="section" id="tokenomics">
          <span className="eyebrow">Tokenomics</span>
          <h2>Simple enough to read on a rocket.</h2>
          <div className="tok-table">
            <div className="tok-row">
              <span>Total supply</span>
              <strong>{siteConfig.supply} $ELON</strong>
            </div>
            <div className="tok-row">
              <span>Tax on every trade</span>
              <strong>{tax} (nice)</strong>
            </div>
            <div className="tok-row">
              <span>Where the tax goes</span>
              <strong>100% market-buys $TSLA + $SPCX for holders</strong>
            </div>
            <div className="tok-row">
              <span>Chain</span>
              <strong>Robinhood Chain</strong>
            </div>
            <div className="tok-row">
              <span>Staking / claiming</span>
              <strong>None. Hold = paid.</strong>
            </div>
          </div>
        </section>

        {/* ---- FAQ ---- */}
        <section className="section" id="faq">
          <span className="eyebrow">Common questions</span>
          <h2>FAQ</h2>
          <div className="faq">
            <details>
              <summary>Is this real Tesla and SpaceX stock?</summary>
              <p>
                Dividends are paid in tokenized $TSLA and $SPCX — real-world
                asset tokens on Robinhood Chain that track the underlying
                stocks. They arrive in your wallet as normal tokens you can hold
                or trade.
              </p>
            </details>
            <details>
              <summary>Do I need to stake or claim anything?</summary>
              <p>
                No. Distributions are automatic and pro-rata to holders. If
                $ELON is in your wallet, you&rsquo;re in the payout.
              </p>
            </details>
            <details>
              <summary>When do dividends pay out?</summary>
              <p>
                In cycles, powered by trading volume — more volume, bigger and
                faster distributions. The machine feeds on chaos, which is on
                brand.
              </p>
            </details>
            <details>
              <summary>Is Elon Musk involved?</summary>
              <p>
                Absolutely not. $ELON is a parody meme token and is not
                affiliated with, endorsed by, or connected to Elon Musk, Tesla,
                SpaceX, or Robinhood in any way. He does, however, live in our
                hearts.
              </p>
            </details>
            <details>
              <summary>Where do I buy $ELON?</summary>
              <p>
                The contract address drops in our{" "}
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </a>{" "}
                first. Only trust the CA posted there or on this site — never a
                DM, never a reply guy.
              </p>
            </details>
          </div>
        </section>

        {/* ---- Bottom CTA ---- */}
        <section className="section cta-final">
          <h2>Stop scrolling. Start collecting.</h2>
          <p>The best time to hold $ELON was this morning. The second best time is now.</p>
          <a
            className="btn btn-primary"
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy $ELON
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-row">
          <span className="footer-brand">$ELON · elonrobinhood.finance</span>
          <div className="footer-links">
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a
              href={siteConfig.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              X / Twitter
            </a>
          </div>
        </div>
        <p className="footer-disclaimer">
          $ELON is a parody meme token. It is not affiliated with, endorsed by,
          or connected to Elon Musk, Tesla, Inc., SpaceX, or Robinhood in any
          way. Dividends are paid in tokenized stock RWAs, not brokerage shares,
          and depend on platform availability and trading volume. Crypto is
          volatile — nothing here is financial advice. Never risk money you
          can&rsquo;t afford to lose.
        </p>
      </footer>
    </>
  );
}
