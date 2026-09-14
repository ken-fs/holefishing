import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-gray dark:prose-invert">
      <h1>Terms of Service</h1>
      <p>By using this site you agree to the following terms.</p>
      <h2>1. Fan Content</h2>
      <p>This is an unofficial fan-made guide. All game names, assets and trademarks belong to their respective owners.</p>
      <h2>2. Accuracy</h2>
      <p>Game data is collected from public sources and gameplay. We strive for accuracy but values may change with game updates. Use at your own discretion.</p>
      <h2>3. No Warranty</h2>
      <p>The site is provided &quot;as is&quot; without warranties of any kind.</p>
    </div>
  );
}
