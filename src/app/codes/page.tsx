import type { Metadata } from 'next';
import { getCodes } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Codes (${getCurrentDateString()}) — Working Codes & Redemption Guide`,
  description:
    'Are there any Hole Fishing codes on Roblox? Current status, how codes would be redeemed, and daily-checked updates. Bookmark this page.',
  keywords: ['hole fishing codes', 'hole fishing codes 2026', 'hole fishing roblox codes', 'hole fishing redeem codes'],
  path: '/codes',
});

export default function CodesPage() {
  const codes = getCodes();
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Codes', url: '/codes' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'Are there any working Hole Fishing codes right now?',
      answer:
        'No. As of the Desert Event update (September 2026), Hole Fishing does not have a code redemption system in-game. The developers (67K CCU) have not released any codes. This page is checked daily and will list codes the moment they exist.',
    },
    {
      question: 'How would I redeem codes in Hole Fishing?',
      answer:
        'The game currently has no codes button or redemption menu. If codes are added in a future update, they will most likely appear in the shop or settings menu. We will update this guide with exact steps as soon as that happens.',
    },
    {
      question: 'How do I get free rewards in Hole Fishing without codes?',
      answer:
        'Claim the free reward chest near the spawn (likes/group rewards), fish during the Server Hole event for 4x cash, and complete your fish index — each milestone grants permanent +luck.',
    },
    {
      question: 'When will Hole Fishing add codes?',
      answer:
        'No official date has been announced. Roblox simulators typically add codes around major updates or visit milestones — the Desert Event did not include a code system. We monitor daily and update this page the moment codes arrive.',
    },
    {
      question: 'Are the Hole Fishing codes on other websites real?',
      answer:
        'No. Any site currently listing "working Hole Fishing codes" is fabricating them — the game has no redemption UI. Bookmark this page for verified status instead.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Codes</h1>
      <p className="text-gray-500 mb-8">Last checked {getCurrentDateString()} — checked daily.</p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Active Codes</h2>
        <div className="p-5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
          <p className="font-semibold mb-1">⚠️ No codes exist yet</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Hole Fishing launched without a code system, and the Desert Event update did not add one.
            Any site claiming &quot;working Hole Fishing codes&quot; right now is making them up. We monitor the game
            daily — when real codes drop, they&apos;ll be here within hours.
          </p>
        </div>
      </section>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>Why There Are No Hole Fishing Codes Yet</h2>
        <p>
          Hole Fishing is still a young game — it went viral only weeks ago. The developers (67K CCU) built the
          economy around four in-game systems instead of codes: the free reward chest, the Server Hole event,
          index luck milestones, and Robux potions/gamepasses. Codes typically arrive when a Roblox game hits a
          like/visit milestone or ships a major update, so the smart money is on codes appearing alongside a
          future event. When that happens, this page updates within hours.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Get Free Rewards Without Codes</h2>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li className="p-3 rounded-lg border border-gray-200 dark:border-gray-800">🎁 <strong>Free reward chest</strong> — near spawn; pays out cash for liking the game / joining the group.</li>
          <li className="p-3 rounded-lg border border-gray-200 dark:border-gray-800">🕳️ <strong>Server Hole event</strong> — opens every ~15–25 minutes for ~60 seconds with 4x cash. Best free money in the game.</li>
          <li className="p-3 rounded-lg border border-gray-200 dark:border-gray-800">📖 <strong>Index milestones</strong> — catching new species grants permanent +10 luck bonuses.</li>
          <li className="p-3 rounded-lg border border-gray-200 dark:border-gray-800">🌙 <strong>Night fishing</strong> — night-exclusive fish (Void Ray, Asian Turtle) sell for far more than day catches.</li>
        </ul>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
