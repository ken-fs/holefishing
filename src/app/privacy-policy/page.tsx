import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'What this fan guide collects (no accounts, no forms), how Google Analytics and our ad partners use cookies, and how to opt out.',
  alternates: { canonical: '/privacy-policy/' },
};

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} rel="nofollow noopener" target="_blank">
      {children}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-gray dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p>Last updated: 20 November 2026.</p>
      <p>
        This is an unofficial fan guide. It has no accounts and no forms, so we don&apos;t collect your name, email or anything you type.
        This page explains what our service providers and ad partners collect when you visit, and how to opt out.
      </p>

      <h2>Hosting</h2>
      <p>
        The site is served through Cloudflare. Like any web host, it processes your IP address and basic request details (the page asked
        for, the time, your browser type) to deliver pages and block abuse, and may set strictly necessary security cookies. We don&apos;t use
        these logs to identify visitors. See <Ext href="https://www.cloudflare.com/privacypolicy/">Cloudflare&apos;s privacy policy</Ext>.
      </p>

      <h2>Analytics</h2>
      <p>
        We use Google Analytics 4 to count page views and see which guides get read and where visitors come from. It sets cookies in your
        browser. See <Ext href="https://policies.google.com/privacy">Google&apos;s privacy policy</Ext>. You can block it with Google&apos;s{' '}
        <Ext href="https://tools.google.com/dlpage/gaoptout">Analytics opt-out add-on</Ext> or your browser&apos;s cookie settings.
      </p>

      <h2>Advertising and cookies</h2>
      <p>
        Ads keep the guide free. Ad partners may use cookies, web beacons, IP addresses and similar identifiers to show ads, limit how often
        you see the same ad, measure performance and prevent fraud.
      </p>
      <h3>Adsterra and Monetag</h3>
      <p>
        Some pages show banner ads from Adsterra. Each banner runs inside its own sandboxed frame, so it can&apos;t read this page. A small
        bar of ads from Monetag can appear at the bottom of the screen. Both networks may use cookies or similar technology to show and measure
        ads; see <Ext href="https://adsterra.com/privacy-policy/">Adsterra&apos;s privacy policy</Ext> and{' '}
        <Ext href="https://monetag.com/privacy/">Monetag&apos;s privacy policy</Ext>.
      </p>
      <p>We never put personal information into ad requests, and we don&apos;t target ads using sensitive information.</p>

      <h2>Cookies at a glance</h2>
      <ul>
        <li>Strictly necessary: Cloudflare security cookies, if any.</li>
        <li>Analytics: Google Analytics cookies.</li>
        <li>Advertising: cookies set by Adsterra and Monetag when ads load, as described above.</li>
      </ul>
      <p>You can block or delete cookies in your browser settings. The guide works fine without them.</p>

      <h2>Children</h2>
      <p>
        The guide isn&apos;t directed at children under 13 (or under 16 in the EEA and UK), and we don&apos;t knowingly collect personal
        information from anyone.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live (for example under the GDPR, UK GDPR or Californian law), you may have the right to ask what personal
        information is held about you and to have it deleted. We don&apos;t hold any ourselves: there are no accounts, forms or comments. Data
        held by Google, Adsterra and Monetag is covered by their policies linked above. We don&apos;t sell personal information.
      </p>

      <h2>Changes</h2>
      <p>If we add a service that collects data, we update this page and the date at the top.</p>
    </div>
  );
}
