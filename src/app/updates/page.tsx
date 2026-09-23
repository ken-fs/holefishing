import type { Metadata } from 'next';
import Link from 'next/link';
import { getGameConfig } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Updates (${getCurrentDateString()}) — Patch Notes & Events`,
  description:
    'Latest Hole Fishing updates: the ☯️ Yin-Yang update, the 🏜️ Desert Event, new fish, rod changes and patch notes. Updated whenever the game updates.',
  keywords: ['hole fishing update', 'hole fishing desert event', 'hole fishing patch notes', 'hole fishing new update'],
  path: '/updates',
});

export default function UpdatesPage() {
  const config = getGameConfig();
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Updates', url: '/updates' },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Updates</h1>
      <p className="text-gray-500 mb-8">Latest first. Checked {getCurrentDateString()}.</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 text-center">
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-xl font-black tabular">{config.stats.onlineNow}</div>
          <div className="text-xs text-gray-500 uppercase">Playing Now</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-xl font-black tabular">{config.stats.visits}</div>
          <div className="text-xs text-gray-500 uppercase">Visits</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-xl font-black tabular">{config.stats.favorites}</div>
          <div className="text-xs text-gray-500 uppercase">Favorites</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-xl font-black tabular">{config.game.lastUpdated}</div>
          <div className="text-xs text-gray-500 uppercase">Last Game Update</div>
        </div>
      </div>

      <article className="mb-8 p-5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-600 dark:text-amber-400 font-bold uppercase border border-amber-400/40">Live</span>
          <h2 className="text-xl font-black">☯️ Yin-Yang Update (Sept 21, 2026)</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The game updated on 21 September 2026 and the title tag flipped from 🏜️ EVENT to{' '}
          <strong>☯️ YINYANG</strong> — the Desert Event has rotated out after roughly one week live.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          What the Yin-Yang update adds is still being verified against gameplay footage — creators have not
          covered it yet. We do not publish unverified event data, so themed fish, trial NPCs or exclusive rods
          land here only once confirmed on video.
        </p>
        <p className="text-xs text-gray-500 mb-2">
          Status: actively tracking. Verified catches and rods will be added to the <Link href="/fish" className="underline">Fish Index</Link> and <Link href="/rods" className="underline">Rod Tier List</Link> once confirmed.
        </p>
        <p className="text-xs text-gray-500">
          Sept 22: the game received a follow-up patch (per the Roblox game API); title and description unchanged — contents unverified, no creator coverage yet.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-black mb-2">🏜️ Desert Event (ran Sept 15–21, 2026)</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The game&apos;s first limited event, now rotated out. Its structure is verified on creator footage and is
          the best template for what the Yin-Yang event likely looks like:
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside mb-3">
          <li><strong>Mummy NPC</strong> at the desert pyramids — &quot;do the trials and I reward you.&quot; Trials are handed out one at a time; return to the Mummy to collect the next.</li>
          <li><strong>Reward: the exclusive Egyptian Rod</strong>. Its in-game description notes a very slow reel; exact stats are still unverified, and whether it remains obtainable after the rotation is unknown.</li>
          <li>Trials seen on video: <strong>catch 5 fish at night</strong> and <strong>catch 3 epic fish</strong>.</li>
        </ul>
        <p className="text-xs text-gray-500">
          Sources: CurryBlox (Sept 18) and TAMPAN GAMING (Sept 19) gameplay footage.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-black mb-2">Player Base Holding (Sept 2026)</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          After cooling off from its viral spike, Hole Fishing is holding around <strong>{config.stats.onlineNow} concurrent
          players</strong> with <strong>{config.stats.visits} visits</strong> and <strong>{config.stats.favorites} favorites</strong> — a
          solid floor that suggests the game is keeping a real audience rather than a one-off spike.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Servers are capped at {config.stats.serverSize} players, so the Server Hole event stays crowded — time your
          sell trips around the ~20 minute cooldown. See the <Link href="/server-hole" className="underline">Server Hole guide</Link>.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-black mb-2">Launch &amp; Rise (Sept 2026)</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Hole Fishing by 67K CCU went viral — climbing past 3,000+ concurrent players with major YouTube coverage
          (&quot;This Roblox fishing game has 1 hole...&quot; — 150K+ views in under two weeks). Core systems at launch:
          16-rod progression ending at the $320M Hacker Rod, day/night fish cycle, index luck milestones,
          mutations, and the 4x-cash Server Hole event.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-black mb-2">What to Watch For</h2>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
          <li><strong>Event rotations</strong> — confirmed pattern: the 🏜️ Desert Event (Sept 15–21) rotated into the ☯️ Yin-Yang update. Expect the current event&apos;s themed content to leave when the next one lands.</li>
          <li><strong>Codes system</strong> — not in the game yet; likely to arrive with a milestone celebration. Tracked on the <Link href="/codes" className="underline">codes page</Link>.</li>
          <li><strong>New secrets</strong> — the index currently hides two secret slots (Glacial Wyrm, Alien). Updates historically add more.</li>
          <li><strong>Rod ladder extensions</strong> — the Hacker Rod caps at $320M today; new top-end rods are the natural update lever.</li>
        </ul>
      </article>

      <p className="text-sm text-gray-500">
        Hole Fishing updates typically land alongside event rotations. Bookmark this page — or check the{' '}
        <Link href="/codes" className="underline">codes page</Link>, which we check daily for new redemption systems.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </div>
  );
}
