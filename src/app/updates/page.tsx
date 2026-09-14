import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Updates (${getCurrentDateString()}) — Patch Notes & Events`,
  description:
    'Latest Hole Fishing updates: the Desert Event (🏜️), new fish, rod changes and patch notes. Updated whenever the game updates.',
  keywords: ['hole fishing update', 'hole fishing desert event', 'hole fishing patch notes', 'hole fishing new update'],
  path: '/updates',
});

export default function UpdatesPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Updates', url: '/updates' },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Updates</h1>
      <p className="text-gray-500 mb-8">Latest first. Checked {getCurrentDateString()}.</p>

      <article className="mb-8 p-5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-600 dark:text-amber-400 font-bold uppercase border border-amber-400/40">Live</span>
          <h2 className="text-xl font-black">🏜️ Desert Event</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The current live event — the game title carries the 🏜️ EVENT tag. Desert-themed content is active in-game.
          We&apos;re documenting the full event fish list and any exclusive rods right now; details land here as they&apos;re confirmed.
        </p>
        <p className="text-xs text-gray-500">
          Status: actively tracking. Event-specific catches will be added to the <a href="/fish" className="underline">Fish Index</a> once verified.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-black mb-2">Launch &amp; Rise (Sept 2026)</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Hole Fishing by 67K CCU went viral — climbing past 3,000+ concurrent players with major YouTube coverage
          (&quot;This Roblox fishing game has 1 hole...&quot; — 150K+ views in under two weeks). Core systems at launch:
          12-rod progression ending at the $320M Hacker Rod, day/night fish cycle, index luck milestones,
          mutations, and the 4x-cash Server Hole event.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-black mb-2">What to Watch For</h2>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
          <li><strong>Event rotations</strong> — the 🏜️ Desert Event is the game&apos;s first limited event; expect themed fish and possibly exclusive rods to rotate out when it ends.</li>
          <li><strong>Codes system</strong> — not in the game yet; likely to arrive with a milestone celebration. Tracked on the <a href="/codes" className="underline">codes page</a>.</li>
          <li><strong>New secrets</strong> — the index currently hides two secret slots (Glacial Wyrm, Alien). Updates historically add more.</li>
          <li><strong>Rod ladder extensions</strong> — the Hacker Rod caps at $320M today; new top-end rods are the natural update lever.</li>
        </ul>
      </article>

      <p className="text-sm text-gray-500">
        Hole Fishing updates typically land alongside event rotations. Bookmark this page — or check the{' '}
        <a href="/codes" className="underline">codes page</a>, which we check daily for new redemption systems.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </div>
  );
}
