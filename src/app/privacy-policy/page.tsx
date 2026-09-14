import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-gray dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p>Last updated: September 2026.</p>
      <h2>Data We Collect</h2>
      <p>We do not require accounts and do not collect personal information directly. Standard analytics (page views) may be collected via privacy-respecting analytics.</p>
      <h2>Cookies</h2>
      <p>We do not use tracking cookies. Third-party ad networks, if enabled, may use cookies per their own policies.</p>
      <h2>Contact</h2>
      <p>For privacy questions, reach out via the contact links on this site.</p>
    </div>
  );
}
