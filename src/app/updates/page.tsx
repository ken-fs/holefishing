import type { Metadata } from 'next';
import Link from 'next/link';
import { getGameConfig } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Updates (${getCurrentDateString()}) — Patch Notes & Events`,
  description:
    'Latest Hole Fishing updates: five more fish, seven current rarity reads, the Nov 1 Admin Abuse schedule, and Halloween content.',
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

      <article className="mb-8 p-5 rounded-xl border border-cyan-300 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-600 dark:text-cyan-400 font-bold uppercase border border-cyan-400/40">Scheduled</span>
          <h2 className="text-xl font-black">🗓️ Next Event: UPDATE + ADMIN ABUSE (Nov 1, 2026)</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Before the Halloween window closed, the official Roblox events listing had already moved on to the next
          session: <strong>&quot;UPDATE + ADMIN ABUSE&quot;</strong> — no Halloween branding — scheduled for{' '}
          <strong>Sun, Nov 1, 10 AM ET / 7 AM PT / 3 PM UK</strong> (15:00 UTC — note the US clock change that morning),{' '}
          running through <strong>Mon, Nov 2, 16:00 UTC</strong>, with the same subtitle:{' '}
          <strong>&quot;New rods, fish and more!&quot;</strong> That keeps the weekly Sunday pattern going (Oct 4 → Oct 11 →{' '}
          Oct 18 → Oct 25 → Nov 1), one hour <em>earlier</em> than the last two events.
        </p>
        <p className="text-xs text-gray-500">
          Source: Roblox virtual-events API for universe 9906378607, checked Oct 26, 2026 (event entry updated Oct 25, 19:02 UTC — about half an hour after the Halloween republish).
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-600 dark:text-blue-400 font-bold uppercase border border-blue-400/40">Footage reviewed</span>
          <h2 className="text-xl font-black">🎥 Oct 30: Five species and seven rarity reads from Oct 29 gameplay</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          A frame-by-frame gap check of FM and Toys&apos; latest video found five labels missing from our index and supplied
          direct rarity banners for seven existing entries. All five additions are marked single-source/unverified in the{' '}
          <Link href="/fish" className="underline">Fish Index</Link>.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <li><strong>New catch banners</strong>: Crab (Uncommon), Anglerfish (Secret, from Rainbow Anglerfish), and Whale Shark (Divine, from Rainbow Whale Shark). Divine is outside our rarity model, so Whale Shark stays Unknown.</li>
          <li><strong>New inventory labels</strong>: Largemouth Bass and Forgefin. Their rarities remain Unknown; Largemouth Bass is kept separate from the generic Bass entry until a second source clarifies whether they differ.</li>
          <li><strong>Current rarity reads</strong>: Red Snapper Common → Uncommon, Sawfish Mythical → Epic, Octopus Epic → Rare, Shrine Koi Unknown → Rare, Dolphin Unknown → Legendary, Crownspike Unknown → Epic, and Penguin Unknown → Rare.</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Rainbow and Ghost are treated as modifiers, not separate base species. Crownspike now uses the on-screen spelling without a space.
          No sale values were copied from this late-game footage because upgrades and event multipliers make them unsuitable as base values.
        </p>
        <p className="text-xs text-gray-500">
          Source: FM and Toys gameplay (v-oxxsFrqhw, Oct 29, 2026), including readable catch banners and the in-game inventory.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-600 dark:text-blue-400 font-bold uppercase border border-blue-400/40">Footage reviewed</span>
          <h2 className="text-xl font-black">🎥 Oct 29: Six more fish confirmed from Oct 26 gameplay</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          A fresh gap check of FM and Toys&apos; Oct 26 video found six missing species with readable catch banners.
          All six are now in the <Link href="/fish" className="underline">Fish Index</Link> as single-source, unverified sightings.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <li><strong>Uncommon</strong>: Rainbow Lobster and Rainbow Hermit Crab; the base entries are Lobster and Hermit Crab.</li>
          <li><strong>Rare</strong>: a Big Rainbow Flounder, indexed under the base species Flounder.</li>
          <li><strong>Secret</strong>: Sapphire Tuna.</li>
          <li><strong>Higher-tier banners</strong>: Rainbow Manatee (Ethereal) and Sea Glitch (Celestial). Both use Unknown rarity because those tiers are not in our data model.</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Big and Rainbow are treated as modifiers, not separate base species. No sale values were copied because the footage shows late-game multipliers. The video&apos;s sea-urchin footage is not indexed as &quot;Sea Urchin&quot;: the actual in-game banner reads <strong>Sea Glitch</strong>.
        </p>
        <p className="text-xs text-gray-500">
          Source: FM and Toys gameplay (dUZn0xqJyVc, Oct 26, 2026), names and rarities read directly from the in-game catch banners.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-600 dark:text-blue-400 font-bold uppercase border border-blue-400/40">Footage reviewed</span>
          <h2 className="text-xl font-black">🎥 Oct 28: Pumpkin Rod and 11 fish added from Halloween-build gameplay</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Today&apos;s YouTube gap check reviewed FM and Toys&apos; Oct 27 gameplay frame by frame. The in-game pedestal and
          catch banners confirmed a missing rod and 11 missing species. We are not labeling every catch Halloween-exclusive:
          the footage alone does not establish their availability after the event.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <li><strong>Pumpkin Rod</strong>: limited-stock lobby pedestal, <strong>R$399, 1,600 kg, x2.30 reel</strong>. Added to the <Link href="/rods" className="underline">Rod Tier List</Link> as a Robux-only rod.</li>
          <li><strong>Standard-tier banner reads</strong>: Sea Otter (Uncommon), Coral Kraken (Mythic), Axolotl (Secret) and Sawshark (Mythic).</li>
          <li><strong>Higher-tier banner reads</strong>: Anvilhead (Celestial), Mossback Behemoth (Divine), Cuttlefish and Bluefin Titan (Primordial), plus Ghost Nautilus (Abyssal) and Ghost Snow Siren (Ethereal). The base Nautilus and Snow Siren entries use Unknown rarity because those tiers are not in our data model.</li>
          <li><strong>Emerald Bass</strong>: name confirmed, but its rarity label was cropped out. All 11 additions are marked single-source/unverified in the <Link href="/fish" className="underline">Fish Index</Link>; no ambiguous sell values were copied.</li>
        </ul>
        <p className="text-xs text-gray-500">
          Source: FM and Toys gameplay (-zEy0_iLPAM, Oct 27, 2026). Names and rarities were read from the in-game banners; the fish is <strong>Mossback Behemoth</strong>, despite the video description saying &quot;Massback&quot;.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-600 dark:text-blue-400 font-bold uppercase border border-blue-400/40">Footage reviewed</span>
          <h2 className="text-xl font-black">🎥 Oct 27: Penguin and Dreadjaw added to the Fish Index</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Today&apos;s YouTube and Tavily gap check found two catches missing from our index. Neither is being labeled
          Halloween-exclusive — the sources do not establish that.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <li><strong>Penguin</strong>: its name is independently confirmed by justanotherantinthehill&apos;s Oct 19 gameplay and FM and Toys&apos; Oct 25 catch footage. Rarity and value remain unknown.</li>
          <li><strong>Dreadjaw</strong>: repeatedly caught and named in FM and Toys&apos; Oct 3–25 gameplay. A secondary guide calls it Secret, but without a readable rarity banner we keep its rarity and value unknown and mark the entry unverified.</li>
        </ul>
        <p className="text-xs text-gray-500">
          Sources: justanotherantinthehill &quot;I Caught a PENGUIN in Hole Fishing…&quot; (65HemAujz5o, Oct 19, 2026); FM and Toys gameplay (CBO7in3ViYc, oggaoOc8VDs and XM69WrVluBQ, Oct 3–25); AllThingsHow used only as an unconfirmed Dreadjaw cross-check.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-green-400/20 text-green-600 dark:text-green-400 font-bold uppercase border border-green-400/40">Window ended</span>
          <h2 className="text-xl font-black">🎃 Halloween Event + Admin Abuse (Oct 25–26, 2026)</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The official Roblox events listing scheduled <strong>&quot;🎃 EVENT + ADMIN ABUSE&quot;</strong> for{' '}
          <strong>Sun, Oct 25, 16:00 UTC through Mon, Oct 26, 16:00 UTC</strong>, with the subtitle{' '}
          <strong>&quot;New rods, fish and more!&quot;</strong> That listed window has now ended.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          <strong>Post-event check, Oct 27:</strong> the game API still reports the <strong>[🎃HALLOWEEN]</strong> title and no
          republish after Oct 25, 18:26 UTC. Today&apos;s checks found no verified code and no reliably readable Halloween-specific
          rod or fish names. Any confirmed additions will land on the <Link href="/rods" className="underline">Rod Tier List</Link>{' '}
          and <Link href="/fish" className="underline">Fish Index</Link>; any real code goes straight to the{' '}
          <Link href="/codes" className="underline">codes page</Link>.
        </p>
        <p className="text-xs text-gray-500">
          Sources: Roblox virtual-events API for the original schedule (universe 9906378607); Roblox game API re-checked Oct 27, 2026; UrGameTips still lists zero working codes.
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-400/20 text-gray-600 dark:text-gray-400 font-bold uppercase border border-gray-400/40">New patch</span>
          <h2 className="text-xl font-black">🎃 Oct 25 Halloween Republish (title is now [🎃HALLOWEEN])</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The game was republished again on <strong>Oct 25, 18:26 UTC</strong>, during the Halloween event window. The title changed from{' '}
          <strong>[⏳]</strong> to <strong>[🎃HALLOWEEN]</strong>. We don&apos;t know the full list of new rods and fish yet, so we haven&apos;t added any.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The description is the same short text and has no code. There are still no working codes.
        </p>
        <p className="text-xs text-gray-500">
          Sources: Roblox game API (update time, title, description), UrGameTips codes page (no working codes, checked Oct 26).
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-400/20 text-gray-600 dark:text-gray-400 font-bold uppercase border border-gray-400/40">New patch</span>
          <h2 className="text-xl font-black">🔧 Oct 25 Pre-Event Republish (contents not confirmed yet)</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The game was republished on <strong>Oct 25, 11:38 UTC</strong> and again at <strong>13:45 UTC</strong>, about two hours before the Halloween event opens. The title
          changed from <strong>[🎣UPDATE]</strong> to <strong>[⏳]</strong>. The hourglass likely means a countdown to the event, but that&apos;s a guess.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The description is the same short text and has no code. We don&apos;t know what changed in the build. There are still no working codes.
        </p>
        <p className="text-xs text-gray-500">
          Sources: Roblox game API (update time, title, description), UrGameTips codes page (no working codes, checked Oct 25).
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-400/20 text-gray-600 dark:text-gray-400 font-bold uppercase border border-gray-400/40">Earlier patch</span>
          <h2 className="text-xl font-black">🔧 Oct 18 Patch (contents not confirmed yet)</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The game was republished on <strong>Oct 18, 14:56 UTC</strong>, about an hour before the scheduled New Content + Admin Abuse
          event. The title changed from <strong>[🌈EVENT]</strong> to <strong>[NOW]</strong>. The description didn&apos;t change.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          A second republish landed at <strong>Oct 18, 16:25 UTC</strong>, during the event window. The title is now{' '}
          <strong>[🎣UPDATE]</strong>. The description is still the same short text, with no code in it.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          We don&apos;t know yet what is new. No patch notes, group shout or footage was available at check time. There are still no
          badges and no working codes. We&apos;ll add confirmed rods, fish or changes once a video or the game shows them.
        </p>
        <p className="text-xs text-gray-500">
          Sources: Roblox game API (update time, title, description), Roblox group API (no shout), Roblox badges API (none),
          UrGameTips codes page (no working codes, re-checked Oct 19).
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-400/20 text-blue-600 dark:text-blue-400 font-bold uppercase border border-blue-400/40">Footage verified</span>
          <h2 className="text-xl font-black">🎥 Oct 18–19: biggest gameplay deep-dive yet — Celestial tier, Rainbow pool, rod prices</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          A 718K-subscriber creator (VitaminSleepy) posted a <strong>2h20m full progression run on Oct 18</strong> — recorded on the
          Oct 11 rainbow-event build (the in-game board still read &quot;Update October 11&quot;), so it does <em>not</em> show what the
          Oct 18 patch changed. It is still the deepest look at the game we have, and it confirmed a lot:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <li><strong>Rarity ladder goes past Secret</strong>: he reads the index legend as Common → … → Mythical → Secret → <strong>Celestial</strong> (orange slots). Catches with an <strong>&quot;Abyssal&quot;</strong> prefix (Deep Sea Shark ~$98B, Tiger Fish, Abyss Angler ~$740B, Moon Veil ~$1.39T — all with multipliers) and one mention of <strong>&quot;ethereal&quot;</strong> catches sit somewhere up there too; tier vs mutation is still being pinned down, so those fish are in the index as unverified.</li>
          <li><strong>Rainbow event pool</strong>: seals, dolphins, <strong>Sea Lion</strong> (the event&apos;s one Secret — a Huge sold for $50.5B), <strong>Rainbow Manta Ray</strong> (Mythical) and the <strong>Walrus</strong> — read as Celestial, worth <strong>$357 trillion</strong>, the most valuable catch we have ever seen on camera.</li>
          <li><strong>Rod prices finally read and bought on camera</strong>: Tree Rod <strong>$25,000</strong>, Lava Rod <strong>$1.4T</strong>, Cosmic Rod <strong>$5T</strong>. The ladder now reads Candy $720B → Lava $1.4T → Cosmic $5T → Toy $55T → Jungle $96T → Rainbow Godly $10Qi. The <Link href="/rods" className="underline">Rod Tier List</Link> and calculator are updated.</li>
          <li><strong>Mechanics confirmed on camera</strong>: rebirth resets your cash for a permanent cash boost (costs escalate $175K → $500K → $15M → $12B); you can <strong>gift fish to other players (hold G)</strong> — a stranger handed him a fish worth 4.99Qi; index milestones grant +10% luck (Big/Huge variants count as separate index entries); free wheel spin every hour (Lucky Rod ~1%); bait ladder — Classic ($500) / Tide (guaranteed mutation) / Meadow (×5 value, $50K) / Frost (×5 value + mutation) / Reef (×10 value) / King (needs the Hacker Rod) / Divine (×25 value). His 6,600% stacked luck potions produced mostly rares — treat luck potions as unproven value.</li>
          <li><strong>New species added to the <Link href="/fish" className="underline">Fish Index</Link> as unverified</strong>: Walleye (night), Bristle Worm (night), Delta Ray (yin-yang event), Crown Spike (hacker event, two creators), Moon Veil (hacker event), Abyss Angler (night), Deep Sea Shark, Tiger Fish (34,000 kg specimen), Humpback Whale, Stingray, Seal, Dolphin — plus Sea Lion, Walrus, Rainbow Manta Ray and Rift Jaw with banner reads.</li>
          <li><strong>Two fish we still can&apos;t name</strong>: one that looks like Travis Scott (two creators, name never legible on screen) and a high-heel-shaped one he nicknamed &quot;Louboutin&quot;. Both stay out of the index until a name is readable. Also pending: the &quot;Asian Turtle&quot; may actually be an &quot;Ancient Turtle&quot; — two creators read it as &quot;ancient&quot;; we&apos;re verifying before renaming.</li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          <strong>Codes: still zero.</strong> No code appeared in 2h20m of footage (store included), and UrGameTips still lists no
          working codes. The Oct 18 admin-abuse window runs through Oct 19 20:00 UTC — we&apos;ll check post-event footage next.
        </p>
        <p className="text-xs text-gray-500">
          Sources: VitaminSleepy &quot;I Went Fishing in a Hole 🐟&quot; (Oct 18, 2026, 2h20m), Pangolin.x &quot;Catching Unknown Fish in Roblox
          Hole Fishing&quot; (Sept 24, 2026), UrGameTips codes page (re-checked Oct 19).
        </p>
      </article>

      <article className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-400/20 text-gray-600 dark:text-gray-400 font-bold uppercase border border-gray-400/40">New patch</span>
          <h2 className="text-xl font-black">🔧 Oct 13–14 Patches (contents not confirmed yet)</h2>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The game got a new patch on <strong>Oct 13, 23:32 UTC</strong>, per the Roblox game API. The title is still{' '}
          <strong>[🌈EVENT]</strong> and the description didn&apos;t change. So the Rainbow event is still the headline.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          A second patch went out about 90 minutes later, on <strong>Oct 14, 01:04 UTC</strong>. Title and description
          stayed the same again. Quick follow-ups like this are often small fixes, but we can&apos;t confirm what changed.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          We don&apos;t know what this patch changed yet. No patch notes, group shout or new gameplay video showed up in the first
          hour. The in-game &quot;NEXT UPDATE&quot; timer we saw on Oct 11 pointed at roughly Oct 13, and the limited{' '}
          <strong>Void Ghost Rod</strong> countdown ended around then too. Whether this patch is that update, or swapped the Void
          Ghost Rod out, is unconfirmed.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The game still has no badges, and neither patch came with a code. The big content drop is still the Oct 18
          event above. We&apos;ll add confirmed changes here once a video or the game itself shows them.
        </p>
        <p className="text-xs text-gray-500">
          Sources: Roblox game API (update time + title + description, re-checked Oct 14, 01:18 UTC), Roblox group API (no shout),
          Roblox badges API (no badges), YouTube search (no footage newer than Oct 11).
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
