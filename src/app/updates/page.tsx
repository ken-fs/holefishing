import type { Metadata } from 'next';
import Link from 'next/link';
import { getGameConfig } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Updates (${getCurrentDateString()}) — Patch Notes & Events`,
  description:
    'Latest Hole Fishing updates: the 🎣 Baits update (Sept 27, 2026), the ☯️ Yin-Yang update, the 🏜️ Desert Event, new fish, rod changes and patch notes.',
  keywords: ['hole fishing update', 'hole fishing baits update', 'hole fishing desert event', 'hole fishing patch notes', 'hole fishing new update'],
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

      <article className="mb-8 p-5 rounded-xl border border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-sky-400/20 text-sky-600 dark:text-sky-400 font-bold uppercase border border-sky-400/40">Scheduled</span>
          <h2 className="text-xl font-black">🎉 New Content + Admin Abuse — Sunday, Oct 4, 2026</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The Events tab on the official Roblox game page lists a scheduled event:{' '}
          <strong>&quot;NEW CONTENT + ADMIN ABUSE&quot; — Sun, Oct 4, 8:00 AM</strong> (time as shown on the game page), with the
          description <strong>&quot;New rods, fish and more!&quot;</strong> This is the first confirmed content drop since the Baits update.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Why it matters: Admin Abuse windows are exactly where the devs have teased temporary &quot;admin codes&quot; in
          chat (first seen Sept 27). If a real code string appears during this event, it lands on the{' '}
          <Link href="/codes" className="underline">codes page</Link> within hours. New rods and fish from the drop go into the{' '}
          <Link href="/rods" className="underline">Rod Tier List</Link> and <Link href="/fish" className="underline">Fish Index</Link> once verified on footage.
        </p>
        <p className="text-xs text-gray-500">
          Source: official Roblox game page Events tab, checked October 1, 2026.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-600 dark:text-amber-400 font-bold uppercase border border-amber-400/40">Live</span>
          <h2 className="text-xl font-black">🎣 Baits Update (Sept 27, 2026)</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The Roblox game API shows the place updated on <strong>27 September 2026</strong> and the title tag flipped from{' '}
          <strong>☯️ YINYANG</strong> to <strong>🎣 BAITS</strong>. Sept 27 creator footage confirms a major systems patch:
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside mb-3">
          <li><strong>Bait Shop</strong> — a restocking bait store (&quot;NEW STOCK IN&quot; countdown). Seen on video: <strong>Classic Bait</strong> ($500, x2 fish value), <strong>Meadow Bait</strong> (x5 fish value, sold out at the time), and a <strong>guaranteed-mutation bait</strong> at $5,000. Each bait has limited stock per restock.</li>
          <li><strong>Rebirth system</strong> — resets your cash for permanent rewards: each rebirth gives +10% more cash; the first reward shown is a <strong>x1.3 Cash Boost</strong> (threshold $175,000 cash, Skip Rebirth R$64).</li>
          <li><strong>Hire a Fisher</strong> — an NPC fishes your hole for <strong>15 minutes for $0.2M</strong>, using a setup as strong as yours.</li>
          <li><strong>Luck Potion (5m)</strong> — a timed luck consumable shown in the hotbar.</li>
          <li><strong>Auto Sell</strong> — new toggle next to Auto Fish.</li>
          <li><strong>Server-wide event banners</strong> — GLOBAL LUCK (x2/x3), VOID MUTATION, BURNING MUTATION and DOUBLE CAST rotate live in-session.</li>
          <li><strong>Admin Abuse events</strong> — a scheduled in-game countdown (e.g. &quot;ADMIN ABUSE IN 4:51&quot;); devs drop prizes and teased &quot;admin codes&quot; in chat during the window.</li>
          <li><strong>In-game polls</strong> — players vote on upcoming features (a &quot;2x cast?&quot; poll was live mid-session).</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Also visible: a <strong>Knight Rod</strong> pedestal (300 KG, R$64 Robux skip-price — cash price unverified) and a{' '}
          <strong>Lava Rod</strong> gamepass (90,000 KG, +250 speed, R$199, seen on Sept 15 footage). New fish sightings from this
          session — <strong>Minnow</strong> and <strong>Sturgeon</strong> — are in the <Link href="/fish" className="underline">Fish Index</Link> as unverified.
        </p>
        <p className="text-xs text-gray-500">
          Source: Roblox game API (title + update timestamp) and Sept 27, 2026 creator gameplay footage. Bait stock,
          rebirth scaling and pedestal prices are single-source — treat exact numbers as provisional.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-black mb-2">☯️ Yin-Yang Update (Sept 21–27, 2026)</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The game updated on 21 September 2026 and the title tag flipped from 🏜️ EVENT to{' '}
          <strong>☯️ YINYANG</strong> — the Desert Event has rotated out after roughly one week live.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          First creator coverage landed on Sept 24 (details below): the Yin-Yang event runs as a live in-game
          event — the creator watched it trigger mid-session and immediately landed a $1M sea turtle. Everything
          from that footage is still single-source, so it is marked unverified until a second creator confirms it.
        </p>
        <p className="text-xs text-gray-500 mb-2">
          Status: actively tracking. Verified catches and rods will be added to the <Link href="/fish" className="underline">Fish Index</Link> and <Link href="/rods" className="underline">Rod Tier List</Link> once confirmed.
        </p>
        <p className="text-xs text-gray-500">
          Sept 22 &amp; 24: the game received follow-up patches (per the Roblox game API); title and description unchanged. Sept 24 creator footage also shows a separate <strong>Hacker Event</strong> running live — hole-size gain observed boosted from 40% → 50% — plus catches not yet in our Fish Index: <strong>Glass Fish</strong> (mythic, ~$475M — added as unverified), Shrine Koi, Crown Spike, Forge Fin and a Humpback Whale. All single-source sightings.
        </p>
        <p className="text-xs text-gray-500">
          Sept 29 review: re-scanning Yin-Yang-era creator footage added four more catches to the{' '}
          <Link href="/fish" className="underline">Fish Index</Link> as unverified — <strong>Mackerel</strong> (two independent sightings:{' '}
          RoBros Sept 23 + a Sept 26 creator), <strong>Perch</strong> and <strong>Tadpole</strong> (RoBros Sept 23), and a possible{' '}
          <strong>Yin Yang</strong> fish read on another player&apos;s best-catch board with a &quot;Primordial&quot; rarity tier (above Mythical —{' '}
          single secondhand sighting, treat as rumor until confirmed).
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
          Sources: CurryBlox (Sept 18), TAMPAN GAMING (Sept 19) and Jeloy (Sept 15) gameplay footage. Sept 15 footage confirms
          the reward message — &quot;The trials are done. The Egyptian Rod is yours&quot; — with a ~5-day event countdown visible.
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
          <li><strong>Codes</strong> — no permanent redemption system yet; during Admin Abuse events the dev teased temporary &quot;admin codes&quot; in chat (Sept 27). Sept 29 check: aggregator sites now list five &quot;working codes&quot; (BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH, CASTANDSELL) but no redemption menu exists in any gameplay footage and the &quot;codes&quot; YouTube videos are clickbait — treat those lists as fabricated. Any verified code lands on the <Link href="/codes" className="underline">codes page</Link>.</li>
          <li><strong>Bait economy</strong> — the new Bait Shop restocks on a timer; watch whether rare baits (guaranteed-mutation tier) rotate on a schedule.</li>
          <li><strong>Rebirth scaling</strong> — first reward is x1.3 cash; later thresholds and boosts unverified.</li>
          <li><strong>New secrets</strong> — the index currently hides two secret slots (Glacial Wyrm, Alien). Updates historically add more.</li>
          <li><strong>Rod ladder extensions</strong> — the Hacker Rod caps at $320M today; new top-end rods are the natural update lever.</li>
        </ul>
      </article>

      <p className="text-sm text-gray-500">
        Hole Fishing updates typically land alongside event rotations. Bookmark this page — or check the{' '}
        <Link href="/codes" className="underline">Hole Fishing Roblox codes page</Link>, which we check daily for new redemption systems.
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </div>
  );
}
