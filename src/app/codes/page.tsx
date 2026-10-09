import type { Metadata } from 'next';
import Link from 'next/link';
import { getCodes, getGameConfig } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';
import SiteIndexLinks from '@/components/SiteIndexLinks';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Codes (${getCurrentDateString()}) — Working Codes & Status`,
  description:
    'Are there Hole Fishing codes on Roblox? Verified status: the redemption box now exists in the Exclusive Store — no working codes released yet. How to redeem, fakes to avoid, and free rewards.',
  keywords: ['hole fishing codes', 'hole fishing codes 2026', 'hole fishing roblox codes', 'hole fishing redeem codes', 'hole fishing code'],
  path: '/codes',
});

// 里程碑数据来自 Roblox 公开 API（09-30 实测：votes / games / groups 端点）
// passed = 经典触发线（均已越过、仍无码）；next = 下一档整数里程碑
const MILESTONES = [
  { label: 'Likes', now: 55798, passed: 40000, next: 60000, note: 'Like milestones are the most frequent celebration trigger — 60K is the next round number.' },
  { label: 'Visits', now: 10942522, passed: 10000000, next: 15000000, note: 'The classic simulator code trigger. 10M came and went on the Baits update with no code drop.' },
  { label: 'Favorites', now: 377147, passed: 200000, next: 400000, note: 'Favourites milestones are commonly paired with a code drop — 400K is close.' },
  { label: 'Group members', now: 104145, passed: 100000, next: 125000, note: 'The 67K CCU group crossed 100K members without announcing codes.' },
];

// 聚合站 9/26 起集体列出的 5 个「码」——10/2 逐帧实证：游戏已有兑换 UI（Exclusive Store→Codes），但无任何成功兑换画面
const FAKE_CODES = ['BIGGERHOLE', 'MUTATIONHUNT', 'DESERTCAST', 'RAREFISH', 'CASTANDSELL'];

function fmt(n: number): string {
  if (n >= 1e6) return `${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  return n.toLocaleString();
}

export default function CodesPage() {
  const codes = getCodes();
  const config = getGameConfig();
  const hasCodes = codes.active.length > 0;
  const version = config.game.currentVersion;
  const groupMembers = 104145; // Roblox groups API, 2026-09-30
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Codes', url: '/codes' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'Are there any working Hole Fishing codes right now?',
      answer:
        `No working codes yet. As of October 2026 the game DOES have a redemption box — a Codes section inside the Exclusive Store, verified on Sept 28 gameplay footage — but the developers (67K CCU) have not released a single code string for it. This page will list verified codes the moment they exist.`,
    },
    {
      question: 'How do I redeem codes in Hole Fishing?',
      answer:
        'Open the Store on the left-hand menu to bring up the Exclusive Store window, then scroll down to the Codes section. Type the code into the box exactly as written and press the green Redeem button. The menu exists today; there is just nothing official to type into it yet.',
    },
    {
      question: 'How do I get free rewards in Hole Fishing without codes?',
      answer:
        'Claim the free reward chest near the spawn (pays out for liking the game and joining the 67K CCU group), fish during the Server Hole event for 4x cash, fish at night for the highest-value species, and complete your fish index for permanent index luck.',
    },
    {
      question: 'When will Hole Fishing release its first codes?',
      answer:
        'No official date yet. The redemption box has been in the game since late September, and the developers have teased "admin codes" in chat before — but the big Oct 4, 2026 Admin Abuse came and went without a code (it ended with a x20 luck finale instead). The next one is the New Content + Admin Abuse on Sunday, Oct 11, 2026 (8 AM PT / 15:00 UTC) — the most likely moment for a first code.',
    },
    {
      question: 'Are the Hole Fishing codes on other websites real?',
      answer:
        'No. The redemption box in the Exclusive Store is real, but every "working Hole Fishing codes" list on aggregator sites is fabricated — none of those codes were ever announced by the developers, and no footage shows any of them redeeming successfully. Those pages exist to capture the search traffic. This page says so plainly instead.',
    },
    {
      question: 'Do BIGGERHOLE, MUTATIONHUNT or CASTANDSELL work in Hole Fishing?',
      answer:
        'No. BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH and CASTANDSELL are circulating on code aggregator sites, but the developers have never announced them and no gameplay footage shows any of them redeeming. The "Hole Fishing codes" YouTube videos are clickbait — in one, the creator literally types "THANKS FOR WATCHING" into the box instead of a working code.',
    },
    {
      question: 'Why does this page rank if there are no codes?',
      answer:
        'Because "are there codes" is itself the search — most players searching for Hole Fishing codes do not know the game has no code system. Answering that honestly is more useful than inventing a list, and it means we are already the page that updates first when codes do launch.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Codes</h1>
      <p className="text-gray-500 mb-8">Last checked {getCurrentDateString()} ({version}). Hole Fishing codes are checked against the Roblox game page and the developer group.</p>

      {/* Status */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">{hasCodes ? 'Active Codes' : 'Active Codes'}</h2>
        {hasCodes ? (
          <div className="space-y-2">
            {codes.active.map((c) => (
              <div key={c.code} className="p-4 rounded-xl border border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-950/20 flex items-center justify-between gap-3 flex-wrap">
                <code className="font-mono font-bold text-lg">{c.code}</code>
                <span className="text-sm text-gray-600 dark:text-gray-400">{c.reward}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
            <p className="font-semibold mb-1">⚠️ Redemption box confirmed — no working codes yet</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              The game DOES have a codes box now: a Codes section inside the Exclusive Store, verified on
              Sept 28 ({version}) gameplay footage. But the developers have not released a single code for it —
              any site claiming &quot;working Hole Fishing codes&quot; right now is making them up. We watch the game
              page and the developer group for a code announcement — real codes will be listed here first.
            </p>
          </div>
        )}
      </section>

      {/* 10/11 活动预告——时间来自 Roblox virtual-events API（startUtc 2026-10-11T15:00Z）；活动结束当天改成实况 */}
      <section className="mb-10 p-5 rounded-xl border border-cyan-300 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
        <h2 className="text-lg font-bold mb-2">📅 Next Code Window: Admin Abuse on Sunday, Oct 11</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          The official game page lists <strong>&quot;NEW CONTENT + ADMIN ABUSE&quot;</strong> for{' '}
          <strong>Sunday, October 11, 2026 at 8 AM PT / 11 AM ET / 4 PM UK</strong> (15:00 UTC), with new rods and
          fish. The devs have teased &quot;admin codes&quot; around these events before, so this is the most likely
          moment for the first real Hole Fishing code.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          No promises — the <Link href="/events" className="underline">Oct 4 Admin Abuse</Link> ended with no code.
          We&apos;ll be watching this one live: if a code shows up, it goes in the Active Codes box above the same day.
          New rods and fish will land in the <Link href="/updates" className="underline">updates log</Link>.
        </p>
      </section>

      {/* Roblox variant targeting — direct answer for the "roblox codes" query family */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Are There Hole Fishing Roblox Codes?</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          <strong>No working codes — but the redemption box is real.</strong> The {version} era brought a Codes
          section inside the game&apos;s Exclusive Store (input box + green Redeem button + the line &quot;Join our
          group &amp; community for more codes!&quot;), verified on September 28, 2026 gameplay footage. What does
          not exist yet is any official code string to type into it — which means every list of &quot;Hole Fishing
          Roblox codes&quot; you find elsewhere is fabricated. This page tracks the official sources and publishes
          real codes as soon as one is verified.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          If you searched for <em>Roblox Hole Fishing codes</em>, <em>codes for Hole Fishing Roblox</em>, or
          <em> code Hole Fishing Roblox</em> — they all point to the same answer, and this is it. The closest
          substitutes that <em>do</em> exist are below: the free reward chest, the Server Hole event, and index
          milestones.
        </p>
      </section>

      {/* Fake codes — 点名聚合站在传的码（搜这些码的人会落到这页） */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Fake Hole Fishing Codes Going Around</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Since late September, several code sites list the same five &quot;working&quot; Hole Fishing codes. None of
          them is real — the developers never announced them, and no footage shows any of them redeeming in the
          game&apos;s codes box:
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {FAKE_CODES.map((c) => (
            <code key={c} className="px-3 py-1.5 rounded-lg border border-red-300 dark:border-red-900 bg-red-50 dark:bg-red-950/20 font-mono font-bold text-sm line-through decoration-red-500/60">
              {c}
            </code>
          ))}
        </div>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc list-inside">
          <li>The sites listing them describe redemption with template wording (&quot;if Hole Fishing has a code menu&quot;) — they have not seen the real one in the Exclusive Store.</li>
          <li>The &quot;Hole Fishing codes&quot; YouTube videos behind these lists never show a successful redemption — one creator types strings like FIRST, UNDERWATER and finally &quot;THANKS FOR WATCHING&quot; into the box with zero results.</li>
          <li>
            The only real code talk: during scheduled <Link href="/events" className="underline">Admin Abuse events</Link>,
            the developers have teased temporary &quot;admin codes&quot; in chat. No code string has been shown working on
            screen yet — if one is, it goes straight into the Active Codes box above. We watched the full{' '}
            <strong>Oct 4, 2026 Admin Abuse</strong> (about an hour of mutations and luck boosts, hosted by the dev in
            chat): <strong>no code was given out</strong>. The next Admin Abuse is the window to watch.
          </li>
        </ul>
      </section>

      {/* Milestone monitor */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-2">What Would Trigger a Code Drop</h2>
        <p className="text-sm text-gray-500 mb-4">
          Roblox simulators usually drop their first codes on a milestone. Hole Fishing has already{' '}
          <strong>passed all four classic triggers without adding codes</strong> — so milestones alone are not a
          reliable signal for this game. Counters below are from the Roblox public API (checked September 30, 2026).
        </p>
        <div className="space-y-3">
          {MILESTONES.map((m) => {
            const pct = Math.min(100, Math.round((m.now / m.next) * 100));
            const remaining = m.next - m.now;
            return (
              <div key={m.label} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <span className="font-bold">
                    {m.label}
                    <span className="ml-2 text-xs font-normal text-green-700 dark:text-green-400">✓ passed {fmt(m.passed)} — no codes</span>
                  </span>
                  <span className="text-sm font-mono tabular text-gray-600 dark:text-gray-400">
                    {fmt(m.now)} / {fmt(m.next)}
                    {remaining > 0 && (
                      <span className="ml-2 text-xs text-cyan-600 dark:text-cyan-400">
                        ({fmt(remaining)} to next)
                      </span>
                    )}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-gray-100 dark:bg-gray-900 overflow-hidden mb-2">
                  <div className="h-full bg-cyan-400" style={{ width: `${pct}%` }} />
                </div>
                <p className="text-xs text-gray-500">{m.note}</p>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-gray-500 mt-3">
          Note: these are the milestones that <em>typically</em> trigger codes in Roblox simulators — not a promise from
          the developers. 67K CCU has announced nothing about codes.
        </p>
      </section>

      {/* Why no codes */}
      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>Why There Are No Hole Fishing Codes Yet</h2>
        <p>
          Hole Fishing is a young game — it went viral only weeks ago and has already rotated through several limited events (Desert, Yin-Yang, Baits).
          The developers (67K CCU) built the economy around four in-game systems instead of code giveaways: the free reward chest,
          the <Link href="/server-hole">Server Hole event</Link>, index luck milestones, and Robux potions/gamepasses.
          The codes box that appeared in the Exclusive Store in late September is the infrastructure arriving first —
          the codes themselves have not followed yet.
        </p>
        <p>
          That sequencing is normal for Roblox simulators: the redemption UI ships in a systems update, then the first
          code strings arrive with a milestone celebration or a scheduled Admin Abuse event. The Oct 4 Admin Abuse
          went by without one, but with the box already in-game, a first code drop still looks close rather than
          hypothetical. A group with {config.stats.favorites} favourites and a {fmt(groupMembers)}-member community
          now has every reason to use it.
        </p>
        <p>
          The practical consequence for you: there is nothing to redeem today, and any list you find is fiction. But the
          moment a milestone lands, this page becomes the fastest place to get the real codes — because we are already
          watching for it.
        </p>
      </section>

      {/* Free rewards */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Get Free Rewards Without Codes</h2>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li className="p-3 rounded-lg border border-gray-200 dark:border-gray-800">🎁 <strong>Free reward chest</strong> — near spawn; pays out for liking the game and joining the 67K CCU group. This is the game&apos;s actual substitute for codes.</li>
          <li className="p-3 rounded-lg border border-gray-200 dark:border-gray-800">🕳️ <strong>Server Hole event</strong> — opens every ~15–25 minutes for ~60 seconds with 4x cash. Best free money in the game. <Link href="/server-hole" className="underline">Strategy →</Link></li>
          <li className="p-3 rounded-lg border border-gray-200 dark:border-gray-800">📖 <strong>Index milestones</strong> — catching new species grants permanent +10 index luck. <Link href="/fish" className="underline">Full fish index →</Link></li>
          <li className="p-3 rounded-lg border border-gray-200 dark:border-gray-800">🌙 <strong>Night fishing</strong> — night-exclusive fish sell for far more than day catches. <Link href="/night-fishing" className="underline">All 10 night fish →</Link></li>
          <li className="p-3 rounded-lg border border-gray-200 dark:border-gray-800">💰 <strong>Sell-value upgrades</strong> — a permanent multiplier that stacks with everything above. <Link href="/money-guide" className="underline">Money guide →</Link></li>
        </ul>
      </section>

      {/* Where codes would appear */}
      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>Where Real Codes Would Appear First</h2>
        <p>
          If 67K CCU adds codes, they will surface in one of these places — in this order:
        </p>
        <ol>
          <li><strong>The 67K CCU group page</strong> — group shout is the standard channel for Roblox code drops. This group has {fmt(groupMembers)} members and is where a celebration announcement would land.</li>
          <li><strong>The game page description</strong> — developers usually append codes there alongside the update notes.</li>
          <li><strong>This page</strong> — we watch both of the above for changes and add verified codes here as soon as they are confirmed in-game.</li>
        </ol>
        <p>
          What codes will <em>not</em> appear in: YouTube comment sections, Discord DMs, or any site that lists
          &quot;codes&quot; for a game with no redemption menu.
        </p>

        <h2>How to Redeem Codes in Hole Fishing</h2>
        <p>
          The redemption menu is real and here is the exact path, verified on September 28 gameplay footage:
        </p>
        <ol>
          <li>Launch Hole Fishing and let your fishing area load.</li>
          <li>Open the <strong>Store</strong> on the left-hand menu — this brings up the <strong>Exclusive Store</strong> window (the one with the Robux cash packs at the top).</li>
          <li>Scroll down to the <strong>Codes</strong> section — it reads &quot;Join our group &amp; community for more codes!&quot;</li>
          <li>Type the code into the box exactly as written (Roblox codes are usually case-sensitive) and press the green <strong>Redeem</strong> button.</li>
        </ol>
        <p>
          The only step missing today is an official code to enter. When the first real one lands, it goes into the
          Active Codes box at the top of this page.
        </p>

        <h2>Why This Page Says &quot;No Codes&quot; Instead of Inventing Them</h2>
        <p>
          Search for &quot;Hole Fishing codes&quot; and you will find plenty of pages with lists. Every one of them is
          fabricated — none of their codes was ever announced by the developers, and none is shown redeeming
          successfully anywhere. Those pages exist purely to capture the search traffic, and they will never update
          because there is nothing real to update.
        </p>
        <p>
          This page takes the opposite approach, and it turns out to be the better one: &quot;are there codes&quot; is
          itself the search. Most players looking for Hole Fishing codes do not know the redemption box exists but has
          no codes yet, and finding a straight answer is more useful than a fake list. It also means that when codes
          <em> do</em> launch, we are already the page players trust — and the first one with the real codes.
        </p>
        <p className="text-sm text-gray-500">
          Tracked automatically: the game page and developer group are watched for changes, and a daily review searches
          for new code drops. The current status file is verified empty of codes — the redemption UI is verified present.
        </p>
      </section>

      {/* 全鱼种内链模块（2026-09-28 加，借全站最强页的爬取热度带鱼页收录） */}
      <SiteIndexLinks />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
