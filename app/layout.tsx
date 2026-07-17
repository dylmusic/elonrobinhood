import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { siteConfig } from "@/site.config";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = `${siteConfig.symbol} — ${siteConfig.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "$ELON",
    "ELON token",
    "Robinhood Chain",
    "RWA token",
    "tokenized stocks",
    "TSLA dividends",
    "SpaceX token",
    "meme coin",
    "real world assets",
  ],
  alternates: { canonical: "/" },
  icons: { icon: "/brand/elon-icon.png", apple: "/brand/elon-icon.png" },
  openGraph: {
    title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/brand/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
    images: ["/brand/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={instrument.className}>{children}</body>
    </html>
  );
}
