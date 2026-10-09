import type { Metadata } from 'next';
import Script from 'next/script';
import localFont from 'next/font/local';
import { getGameConfig } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import './globals.css';

const config = getGameConfig();

// Fonts are self-hosted (src/fonts, OFL). next/font/google downloads them during the build,
// and when that download flakes on Cloudflare's builders the whole build fails
// ("Can't resolve '@vercel/turbopack-next/internal/font/google/font'", 2026-10-06).
const display = localFont({ src: '../fonts/rubik-latin-wght-normal.woff2', weight: '300 900', variable: '--font-display' });
const body = localFont({ src: '../fonts/inter-latin-wght-normal.woff2', weight: '100 900', variable: '--font-body' });

export const metadata: Metadata = {
  metadataBase: new URL(config.seo.baseUrl),
  title: {
    default: config.seo.siteTitle,
    template: `%s | ${config.game.name}`,
  },
  description: config.seo.siteDescription,
  keywords: [...config.seo.primaryKeywords, ...config.seo.secondaryKeywords],
  alternates: { canonical: config.seo.baseUrl },
  openGraph: {
    title: config.seo.siteTitle,
    description: config.seo.siteDescription,
    url: config.seo.baseUrl,
    siteName: config.game.name,
    images: [{ url: config.seo.defaultOgImage, width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.seo.siteTitle,
    description: config.seo.siteDescription,
    images: [config.seo.defaultOgImage],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${display.variable} ${body.variable}`}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QX57H8KJLJ" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-QX57H8KJLJ');`}
        </Script>
        {/* Google AdSense — plain <script> on purpose: next/script adds a data-nscript attribute AdSense warns about */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4969757168101127" crossOrigin="anonymous" />
        {/* Monetag Social Bar */}
        <Script src="https://pl31416016.profitableratecpmnetwork.com/fa/1d/18/fa1d1800bfe5400eb119f31a65c2d9aa.js" strategy="afterInteractive" />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased font-body">
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <AdBanner adKey="fde15261438fd3b866a3a6c0d9b106fe" />
        <main id="main" className="min-h-[calc(100vh-180px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
