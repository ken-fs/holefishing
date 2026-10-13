import type { Metadata } from 'next';
import Link from 'next/link';
import { getGameConfig } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Updates (${getCurrentDateString()}) — Patch Notes & Events`,
  description:
    'Latest Hole Fishing updates: Oct 11 update + Admin Abuse recap — the game is now [🌈EVENT] with a RAINBOW event, and the next New Content + Admin Abuse is scheduled Oct 18, 2026. Plus the rod ladder up to $10Qi, the Baits update and patch notes.',
  keywords: ['hole fishing update', 'hole fishing new update', 'hole fishing admin abuse', 'hole fishing october update', 'hole fishing baits update', 'hole fishing patch notes'],
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

      <article className="mb-8 p-5 rounded-xl border border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-green-400/20 text-green-600 dark:text-green-400 font-bold uppercase border border-green-400/40">Upcoming</span>
          <h2 className="text-xl font-black">📅 Next Event: New Content + Admin Abuse (Oct 18, 2026)</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The official Roblox events listing (re-scanned after the Oct 11 event) shows the next{' '}
          <strong>&quot;NEW CONTENT + ADMIN ABUSE&quot;</strong> scheduled for <strong>Sun, Oct 18, 8 AM PT / 11 AM ET / 4 PM UK</strong>{' '}
          (15:00 UTC), running through <strong>Mon, Oct 19, 20:00 UTC</strong>, with the same subtitle:{' '}
          <strong>&quot;New rods, fish and more!&quot;</strong> That&apos;s now a weekly Sunday pattern (Oct 4 → Oct 11 → Oct 18).
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Based on the last two sessions, expect roughly an hour of rotating server-wide mutations with countdown banners, a dev-run
          luck poll (Oct 11 hit <strong>50x Global Luck</strong>), Double Cast / Double Catch windows, sell-cash boosts, and the best
          multiplier saved for the finale. Be online at the start and stay for the last minutes. Any verified new rods or fish land
          on the <Link href="/rods" className="underline">Rod Tier List</Link> and <Link href="/fish" className="underline">Fish Index</Link>{' '}
          the same day — and if a code ever drops, it lands on the <Link href="/codes" className="underline">codes page</Link> within hours.
        </p>
        <p className="text-xs text-gray-500">
          Source: Roblox virtual-events API for universe 9906378607, re-checked Oct 14, 2026 (event updated Oct 11 16:47 UTC). The game itself hasn&apos;t been republished since Oct 11, 19:00 UTC.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-fuchsia-300 dark:border-fuchsia-800 bg-fuchsia-50 dark:bg-fuchsia-950/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-fuchsia-400/20 text-fuchsia-600 dark:text-fuchsia-400 font-bold uppercase border border-fuchsia-400/40">Latest</span>
          <h2 className="text-xl font-black">🌈 Oct 11 Update + Admin Abuse — the game is now [🌈EVENT]</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The Roblox game API shows the place updated <strong>Oct 11, 19:00 UTC</strong> and the title flipped from{' '}
          <strong>[🐟UPDATE]</strong> to <strong>[🌈EVENT]</strong> — a new RAINBOW event is live. On the Oct 11 admin-abuse live stream
          (watched in full) the new event ran as an in-game <strong>&quot;🌈 RAINBOW&quot; countdown banner</strong> with an actual rainbow in the
          sky, and the lobby now has a <strong>&quot;NEXT EVENTS&quot;</strong> board under a rainbow header listing scheduled event times. What
          bonus the rainbow window grants isn&apos;t readable from the footage yet — treat the effect as unverified.
        </p>
        <p className="text-sm font-bold mb-1">What the Oct 11 Admin Abuse looked like (32-min creator stream)</p>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside mb-3">
          <li>Server-wide mutations now get <strong>start banners + countdowns</strong>: &quot;BURNING MUTATION STARTED&quot;, &quot;HUGE MUTATION 1:02&quot;, plus Void Mutation — a step up from Oct 4&apos;s quiet rotation.</li>
          <li>Boosts stacked: <strong>Global Luck x3</strong> → the dev ran a <strong>&quot;50x luck?&quot; poll</strong> mid-session and turned it on — 50x Global Luck, plus <strong>Double Cast</strong>, <strong>Double Catch</strong> and <strong>x3 Sell Cash</strong> windows.</li>
          <li>The dev spawned <strong>giant fish</strong> — a huge black shark silhouette cruised the sky. Catches included a <strong>Huge + Burning Ethereal worth $437Qa</strong>; endgame cash sat in the hundreds of Qa.</li>
          <li>A <strong>Server Hole opened mid-session</strong> (&quot;SERVER HOLE IS OPENING&quot; banner) and a big <strong>X2 CASH</strong> banner covered the screen during the sell rush.</li>
          <li>Dev in chat (verified badge): &quot;love ya&quot;, &quot;thanks for attending ❤️&quot;, and &quot;next weekend will be way better&quot; — lining up with the Oct 18 listing.</li>
          <li><strong>No code was posted</strong> — second Admin Abuse in a row with zero codes. Full recap on the <Link href="/codes" className="underline">codes page</Link>.</li>
        </ul>
        <p className="text-sm font-bold mb-1">Also verified on the Oct 11 footage</p>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside mb-3">
          <li><strong>Rod shop re-verified</strong>: Jungle Rod $96T (x11.00, 320,000 kg), Radioactive Rod $200T (x13.00, 850,000 kg), and the Lucky Rod&apos;s shop card literally reads <strong>&quot;SPIN WHEEL EXCLUSIVE — WIN IT ON THE SPIN WHEEL&quot;</strong>.</li>
          <li><strong>Bait shop</strong> (&quot;NEW STOCK IN 4:41&quot; restock timer): Frost Bait $200,000 (&quot;Value + Mutation&quot;), Reef Bait R$29 (&quot;x15 Fish Value&quot;), King Bait (&quot;Guaranteed Secret&quot;), and an <strong>Emerald Bait</strong> card (&quot;x15 Fish Value + …&quot;) — Emerald is a name we hadn&apos;t logged; single sighting, likely stock-rotation, listed as unverified.</li>
          <li><strong>Upgrades panel</strong>: Hole Size caps at <strong>Luck: 700% (MAX)</strong>.</li>
          <li><strong>Rebirth scaling</strong>: x2.5 → x2.7 Cash Boost cards seen at high thresholds ($592.9Qa / $4.6Qi) — the ladder continues past the old x3 note.</li>
          <li><strong>Lobby countdowns</strong>: &quot;NEXT UPDATE&quot; board read ~1d 23h on Oct 11 (pointing at ~Oct 13 16:00 UTC), and the limited <strong>Void Ghost Rod</strong> (431/999 stock, was 944/999 on Oct 6) carries its own ~1d 23h countdown — expect it to leave around Oct 13.</li>
          <li>The game icon now advertises a <strong>&quot;MASSIVE ORCA $3,264,891,702/s&quot;</strong> — the &quot;/s&quot; would mean a per-second stat (possibly a new idle-income readout); unverified, single source.</li>
        </ul>
        <p className="text-xs text-gray-500">
          Sources: Roblox game API (title + update timestamp, checked Oct 12), NOTVOIDY&apos;s Oct 11 admin-abuse live stream (32 min,
          watched end-to-end) and GAMER FAV&apos;s Oct 11 no-commentary stream. In-game board countdowns are player-facing timers and can change.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-sky-300 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-sky-400/20 text-sky-600 dark:text-sky-400 font-bold uppercase border border-sky-400/40">Latest</span>
          <h2 className="text-xl font-black">🐟 Oct 4 Update + Admin Abuse (Oct 4, 2026)</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The scheduled &quot;NEW CONTENT + ADMIN ABUSE&quot; event happened on Oct 4. The Roblox game API shows two patches that
          day, and the title went from <strong>[🎣BAITS]</strong> to <strong>[NOW]</strong> to <strong>[🐟UPDATE]</strong>.
        </p>
        <p className="text-sm font-bold mb-1">What the Admin Abuse looked like</p>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside mb-3">
          <li>It ran for about an hour, hosted in chat by the developer <strong>JuanArtxz</strong> (&quot;ADMIN ABUSE IS LIVE! ICE FISH ONLY&quot;).</li>
          <li>Server-wide mutations rotated through it: <strong>Ice</strong>, <strong>Burning</strong>, <strong>Huge + Electric</strong>, <strong>Big</strong> and <strong>Void</strong>.</li>
          <li>Boosts stacked on top: <strong>Global Luck x5 → x6</strong>, then <strong>x20 for the last minute</strong>, plus <strong>Sell Cash x2/x3</strong> and <strong>Double Cast</strong>.</li>
          <li>The dev teased &quot;a surprise at the end&quot;, which turned out to be the x20 luck finale. <strong>No code was posted</strong> — the <Link href="/codes" className="underline">codes page</Link> still has zero working codes.</li>
        </ul>
        <p className="text-sm font-bold mb-1">What the shop looks like now (Oct 4–5 footage)</p>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside mb-3">
          <li><strong>The rod ladder is much longer than older guides say.</strong> Past the $320M Hacker Rod it keeps going: Bluesteel ($26B), Candy Rod ($720B), Toy ($55T), Jungle ($96T), Radioactive ($200T), Beach ($240T), then Moon, Frosty, Planet and the <strong>Rainbow Godly Rod ($10Qi, 6.5M kg)</strong>. Full list on the <Link href="/rods" className="underline">rod tier list</Link>.</li>
          <li><strong>Early prices are lower</strong> than we had them (Golden $2,500, Cactus $7,500), there&apos;s a <strong>Knight Rod</strong> at $150,000, and the Leaf and Night rods aren&apos;t in the shop.</li>
          <li>The <strong>Bait Shop has 9 baits</strong> now, up to the R$1,200 Holo Bait (guaranteed Ethereal+). See the <Link href="/baits" className="underline">bait guide</Link>.</li>
          <li>Two Robux-only rods sit on lobby pedestals: the <strong>Godly Rod</strong> and the limited-stock <strong>Void Ghost Rod</strong> (944/999 left on Oct 6). The <strong>Lucky Rod</strong> only comes from the spin wheel.</li>
          <li>Gamepasses on screen: <strong>Speedy Fisher</strong> (x2 speed, R$160) and <strong>Infinite Backpack</strong> (R$160).</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          One honest caveat: both videos we read were recorded right around the patch (the in-game &quot;NEXT UPDATE&quot; timer was
          at 1–2 minutes), and the top rods were already in the shop before it hit. So we can&apos;t say exactly which items this
          update added — only what the shop looks like now. For how the timed events work, see the{' '}
          <Link href="/events" className="underline">events guide</Link>.
        </p>
        <p className="text-xs text-gray-500">
          Sources: Roblox game API (Oct 4 patches + title changes), Maskednoobgy&apos;s Oct 4 live stream of the Admin Abuse, and
          G0Dx&apos;s Oct 4 fresh-account run (full Rods and Bait Shop scroll). Shop prices are read straight off the game screen.
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
          Also visible: a <strong>Knight Rod</strong> pedestal (300 kg, a Robux shortcut — its cash price is $150,000 in the
          shop) and a <strong>Godly Rod</strong> pedestal (800 kg, x2.00 reel — a Robux-only rod, R$264–329 on later footage). New fish sightings from this
          session — <strong>Minnow</strong> and <strong>Sturgeon</strong> — are in the <Link href="/fish" className="underline">Fish Index</Link> as unverified.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          <strong>Oct 2 frame re-reads</strong>: ① the Exclusive Store contains a <strong>Codes redemption section</strong>{' '}
          (input box + Redeem button, "Join our group &amp; community for more codes!") — the first confirmed redemption UI,
          seen on Sept 28 footage, though no working code string exists yet (tracked on the <Link href="/codes" className="underline">codes page</Link>).
          ② The earlier "Lava Rod gamepass (R$199)" note was a misread of the same Sept 15 footage — the Lava Rod is a{' '}
          <strong>$45,000,000,000 cash shop rod</strong> (Reel Speed x6.90, 90,000 kg); the &quot;199&quot; on its pedestal is a Robux
          shortcut for the rod, not a separate gamepass. A <strong>Cosmic Rod</strong> sits right after it at $600,000,000,000 (x7.80, 150,000 kg),
          with at least one further slot (&quot;Toy Rod&quot;). <em>Oct 7 note: the Oct 4 shop puts both after a $720B rod, so these
          Sept 15 prices look out of date — they&apos;re marked unconfirmed on the <Link href="/rods" className="underline">Rod Tier List</Link>.</em>
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
        <p className="text-xs text-gray-500">
          Oct 3 review: <strong>Shrine Koi</strong> lands a second independent sighting — RoBros&apos; Sept 23 video shows one caught
          live for ~$70,000 during an admin-abuse cash boost (value possibly inflated) — so it joins the{' '}
          <Link href="/fish" className="underline">Fish Index</Link> as unverified. Re-scanning the same Sept 24 footage also surfaced a
          sighting we missed: an <strong>Ancient Turtle</strong> (~$2M, caught at night). Single source, and the name reading could be a
          mishearing of the night Legendary Asian Turtle — it stays on the watch list alongside Crown Spike, Forge Fin and Humpback Whale.
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
          <li><strong>Reward: the exclusive Egyptian Rod</strong> — stats now verified from the Sept 15 reward screen: Reel Speed x3.00 (deliberately slow), 102,000 kg capacity, and the perk <strong>"Obtains Exclusive Mutations"</strong>. Whether it remains obtainable after the rotation is unknown.</li>
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
          <li><strong>Codes</strong> — the redemption box is confirmed in-game (Exclusive Store → Codes, Sept 28 footage), but no working code string exists after two Admin Abuse events (Oct 4 and Oct 11 both codeless). UrGameTips now lists zero codes too (their fabricated list was pulled). The &quot;codes&quot; YouTube videos still never show a successful redemption. Any verified code lands on the <Link href="/codes" className="underline">codes page</Link> — next watch window: Oct 18 event.</li>
          <li><strong>Bait economy</strong> — the Bait Shop restocks every few minutes and the rare Robux baits are often sold out. Prices and odds are on the <Link href="/baits" className="underline">bait guide</Link>.</li>
          <li><strong>Rebirth scaling</strong> — first reward is x1.3 cash; a maxed-out player&apos;s rebirth screen shows x3 Cash Boost. Steps in between are unverified.</li>
          <li><strong>New secrets</strong> — the index currently hides two secret slots (Glacial Wyrm, Alien). Updates historically add more.</li>
          <li><strong>Rod prices still unread</strong> — Tree, Magic, Lava, Cosmic, Moon, Frosty and Planet only showed up already owned on the Oct footage. We&apos;ll fill them in once someone scrolls the shop without owning them.</li>
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
