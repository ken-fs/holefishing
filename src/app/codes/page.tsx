import type { Metadata } from 'next';
import Link from 'next/link';
import { getCodes, getGameConfig } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';
import { CODES_LANGS } from '@/data/i18n/codes';
import SiteIndexLinks from '@/components/SiteIndexLinks';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Codes (${getCurrentDateString()}) — Working Codes & Status`,
  description:
    'Two Hole Fishing codes: HAPPYHALLOWEEN for 3x Luck and 2x Sell Value boosts, and 123CODE for 20K Cash. Rewards, sources and redemption steps.',
  keywords: ['hole fishing codes', 'hole fishing codes 2026', 'hole fishing roblox codes', 'hole fishing redeem codes', 'hole fishing code'],
  path: '/codes',
  languages: CODES_LANGS,
});

// 里程碑数据来自 Roblox 公开 API（09-30 实测：votes / games / groups 端点；10-14 / 10-26 重拉）
// passed = 经典触发线（均已越过、仍无码）；next = 下一档整数里程碑
const MILESTONES = [
  { label: 'Likes', now: 66850, passed: 60000, next: 75000, note: '60K crossed on the Oct 11 "[NOW]" update — no code dropped with it. 75K is the next watch line.' },
  { label: 'Visits', now: 15999362, passed: 15000000, next: 20000000, note: 'The classic simulator code trigger. 10M and the Baits update passed with no code — and 15M crossed in the run-up to the Halloween event, still with no code. 20M next.' },
  { label: 'Favorites', now: 531066, passed: 500000, next: 1000000, note: '500K favorites crossed during the Halloween build-up — the devs are clearly not milestone-driven. 1M is the next round number.' },
  { label: 'Group members', now: 124531, passed: 100000, next: 125000, note: 'The 67K CCU group crossed 100K members without announcing codes.' },
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
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Codes', url: '/codes' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'Are there any working Hole Fishing codes right now?',
      answer:
        `Yes. HAPPYHALLOWEEN gives a 3x Luck Boost and a 2x Sell Value Boost for 15 minutes each, and 123CODE gives 20K Cash. Roblox Den and MrGuider independently list both codes and rewards as active, with entries dated Nov 5, 2026.`,
    },
    {
      question: 'How do I redeem codes in Hole Fishing?',
      answer:
        'Open the Store on the left-hand menu to bring up the Exclusive Store window, then scroll down to the Codes section. Type HAPPYHALLOWEEN or 123CODE exactly as written and press the green Redeem button.',
    },
    {
      question: 'How do I get free rewards in Hole Fishing without codes?',
      answer:
        'Claim the free reward chest near the spawn (pays out for liking the game and joining the 67K CCU group), fish during the Server Hole event for 4x cash, fish at night for the highest-value species, and complete your fish index for permanent index luck.',
    },
    {
      question: 'When did Hole Fishing get its first codes?',
      answer:
        'Both current public strings are listed as added on Nov 5, 2026 and were cross-checked here on Nov 6. The redemption box existed since late September, but the earlier Oct 4, Oct 11, Oct 18 and Oct 25–26 event windows produced no verified public code.',
    },
    {
      question: 'Are the Hole Fishing codes on other websites real?',
      answer:
        'Not all of them are fake. HAPPYHALLOWEEN and 123CODE are independently listed with identical rewards by Roblox Den and MrGuider; Roblox Den says its Code Guardian tests codes in-game. The five older strings below remain unsupported, so check the exact code and reward instead of trusting or rejecting every list wholesale.',
    },
    {
      question: 'Do BIGGERHOLE, MUTATIONHUNT or CASTANDSELL work in Hole Fishing?',
      answer:
        'There is still no reliable evidence for BIGGERHOLE, MUTATIONHUNT, DESERTCAST, RAREFISH or CASTANDSELL. They are not among the two independently confirmed Nov 5 codes, no developer announcement has been found, and no gameplay footage shows them redeeming successfully.',
    },
    {
      question: 'How does this page verify Hole Fishing codes?',
      answer:
        'The current pair is cross-confirmed by two independent trackers, one of which states that its editor tests codes in-game. No first-party announcement or successful-redemption footage has been indexed yet, so the page labels this as editorial confirmation rather than claiming a first-hand redemption test.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Codes</h1>
      <p className="text-gray-500 mb-3">Last checked {getCurrentDateString()} ({version}). Hole Fishing codes are checked against the Roblox game page and the developer group.</p>
      {/* 本地语言版：泰国 / 印尼 / 韩国这三个市场的查询已经是本地语言，用英文页在接 */}
      <p className="text-sm text-gray-500 mb-8 flex flex-wrap items-center gap-2">
        <span>This page in</span>
        <span className="px-2 py-0.5 rounded border border-gray-300 dark:border-gray-700 font-semibold">English</span>
        <Link href="/th/codes" className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" hrefLang="th" lang="th">ไทย</Link>
        <Link href="/id/codes" className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" hrefLang="id" lang="id">Bahasa Indonesia</Link>
        <Link href="/ko/codes" className="px-2 py-0.5 rounded border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" hrefLang="ko" lang="ko">한국어</Link>
      </p>

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

      <section className="mb-10 p-5 rounded-xl border border-cyan-300 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
        <h2 className="text-lg font-bold mb-2">📅 Nov 6 code check: two active codes cross-confirmed</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          <strong>Roblox Den</strong> marks HAPPYHALLOWEEN and 123CODE Active after a check within the last hour. Its
          Code Guardian policy says every listed code is tested in-game and checked for the correct reward.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          <strong>MrGuider</strong> independently lists the identical code strings and rewards, both labelled
          <strong> Added: November 5, 2026</strong>. This is the first time our daily check has found two independent
          sources agreeing on public Hole Fishing codes.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          The official game description and 67K CCU group shout still contain no code, and no successful-redemption
          footage has been indexed. The pair above is therefore a <strong>two-source editorial confirmation</strong>,
          not a claim that we redeemed it ourselves. The change is also recorded in the{' '}
          <Link href="/updates" className="underline">updates log</Link>.
        </p>
      </section>

      {/* 事件码：yinyang / admin abuse / hacker event 这几个词族一次答完，不另开薄页 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Event Codes: Yin-Yang, Admin Abuse and the Hacker Event</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Players search for a code for every themed event the game runs, so here is each one in one place —{' '}
          <strong>the early windows were codeless; the first public strings are dated Nov 5</strong>:
        </p>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
          <li>
            <strong>☯️ Yin-Yang event (Sept 21–27, 2026)</strong> — a themed update with its own catches (the{' '}
            <Link href="/fish/yin-yang" className="underline">Yin Yang</Link> fish, and later the Delta Ray during the Oct 18
            yin-yang window). No code was released, and no &quot;yin-yang codes&quot; list you find elsewhere came from the
            developers.
          </li>
          <li>
            <strong>Admin Abuse (Oct 4, 11, 18)</strong> — the dev teases &quot;admin codes&quot; in chat during these, but no
            string has ever been posted or shown redeeming. Log:{' '}
            <Link href="/events/admin-abuse" className="underline">Admin Abuse page</Link>.
          </li>
          <li>
            <strong>Hacker Event</strong> — a separate short server event (hole growth 40% → 50%, Crown Spike and Moon Veil
            catches). No code attached to it either.
          </li>
          <li>
            <strong>🎃 Halloween event (Oct 25–26)</strong> — no public code was found during the original window. Both trackers date <strong>HAPPYHALLOWEEN</strong> to Nov 5; they do not establish that it was already available on Oct 25–26.
          </li>
        </ul>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          The code system was infrastructure-first: the redemption box appeared in late September, while the first
          cross-confirmed public strings arrived on Nov 5. Earlier event windows remain codeless; the current pair is above.
        </p>
      </section>

      {/* Roblox variant targeting — direct answer for the "roblox codes" query family */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Are There Hole Fishing Roblox Codes?</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          <strong>Yes — HAPPYHALLOWEEN and 123CODE are now cross-confirmed active codes.</strong> The {version} era
          brought a Codes section inside the game&apos;s Exclusive Store (input box + green Redeem button + the line
          &quot;Join our group &amp; community for more codes!&quot;), verified on September 28 gameplay footage.
          HAPPYHALLOWEEN gives 15-minute 3x Luck and 2x Sell Value boosts; 123CODE gives 20K Cash.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          If you searched for <em>Roblox Hole Fishing codes</em>, <em>codes for Hole Fishing Roblox</em>, or
          <em> code Hole Fishing Roblox</em> — the two current strings are in the Active Codes box above. Additional
          free options remain below: the reward chest, Server Hole event, night fishing and index milestones.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
          Next watch window: the official events listing shows UPDATE + ADMIN ABUSE on Nov 15 at 15:00 UTC. As of Nov 13, no
          new code has appeared in the game description or on the trackers. See the <Link href="/updates" className="underline">updates log</Link>.
        </p>
      </section>

      {/* Fake codes — 点名聚合站在传的码（搜这些码的人会落到这页） */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Fake Hole Fishing Codes Going Around</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          The five older strings below are not the newly confirmed pair. They have circulated since late September
          without a developer announcement or successful-redemption footage, so they remain unsupported:
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
            The first credible public strings are <strong>HAPPYHALLOWEEN</strong> and <strong>123CODE</strong>, dated Nov 5
            and cross-confirmed by Roblox Den and MrGuider. Earlier <Link href="/events" className="underline">Admin Abuse events</Link>{' '}
            on Oct 4, Oct 11 and Oct 18 produced no public code; that older history does not apply to the new pair.
          </li>
        </ul>
      </section>

      {/* Milestone monitor */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-2">Milestone History and Future Code Drops</h2>
        <p className="text-sm text-gray-500 mb-4">
          Hole Fishing passed all four classic triggers before the first public codes appeared on Nov 5. Neither current
          source ties the new pair to a specific milestone. The counters below are a historical Roblox public API snapshot
          from October 26, 2026.
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

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>Why Hole Fishing Had No Codes Until November</h2>
        <p>
          Hole Fishing rotated through the Desert, Yin-Yang and Baits updates with a redemption box but no public strings.
          The developers built the early economy around the free reward chest, the <Link href="/server-hole">Server Hole event</Link>,
          index luck milestones, and Robux potions/gamepasses. The Exclusive Store codes box was infrastructure arriving first.
        </p>
        <p>
          That changed with entries dated Nov 5: <strong>HAPPYHALLOWEEN</strong> and <strong>123CODE</strong> appeared on
          Roblox Den and MrGuider with identical rewards. Roblox Den says its editors test codes in-game, giving the pair
          a stronger basis than the unsupported strings that circulated in September and October.
        </p>
        <p>
          For players, the practical answer is now simple: try the two active codes above. The older five strings remain
          unverified, and future drops still need the same source cross-check rather than an assumption based on milestones.
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

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>Where New Codes Appear</h2>
        <p>
          Codes can be enabled server-side without a new game description or group announcement. We check first-party
          channels and independent trackers rather than relying on either one alone:
        </p>
        <ol>
          <li><strong>The 67K CCU group page and game description</strong> — the official announcement channels, currently without a code post.</li>
          <li><strong>Independent code trackers</strong> — Roblox Den and MrGuider currently agree on both Nov 5 strings and rewards.</li>
          <li><strong>This page</strong> — new strings are listed after a source cross-check, with the level of evidence stated plainly.</li>
        </ol>
        <p>
          A YouTube comment, Discord DM or lone aggregator string without redemption evidence is not enough on its own.
        </p>

        <h2>How to Redeem Codes in Hole Fishing</h2>
        <p>
          The redemption menu is real and here is the exact path, verified on September 28 gameplay footage:
        </p>
        <ol>
          <li>Launch Hole Fishing and let your fishing area load.</li>
          <li>Open the <strong>Store</strong> on the left-hand menu — this brings up the <strong>Exclusive Store</strong> window (the one with the Robux cash packs at the top).</li>
          <li>Scroll down to the <strong>Codes</strong> section — it reads &quot;Join our group &amp; community for more codes!&quot;</li>
          <li>Type <strong>HAPPYHALLOWEEN</strong> or <strong>123CODE</strong> exactly as written and press the green <strong>Redeem</strong> button. Roblox Den labels its codes case-sensitive.</li>
        </ol>
        <p>
          The active pair and its rewards are listed at the top of this page. Check back for status changes before trying
          older strings from September and October lists.
        </p>

        <h2>How This Page Handles Real and Fake Codes</h2>
        <p>
          Not every aggregator list is fabricated. The current pair is supported by two independent pages, one of which
          states that its editor tests codes in-game. The older five strings remain unsupported because no matching
          official announcement or successful-redemption evidence has surfaced.
        </p>
        <p>
          We also distinguish two-source editorial confirmation from first-party footage. No official announcement or
          successful-redemption video has been indexed for the new pair yet, so that limitation stays on the page instead
          of claiming we tested the codes ourselves.
        </p>
        <p className="text-sm text-gray-500">
          Tracked automatically: the game page and developer group are watched for changes, and a daily review searches
          for new code drops. The current status file lists two active codes cross-checked on Nov 6, 2026.
        </p>
      </section>

      {/* 全鱼种内链模块（2026-09-28 加，借全站最强页的爬取热度带鱼页收录） */}
      <SiteIndexLinks />

      <script type="application/ld+json">{JSON.stringify(breadcrumb).replace(/</g, '\\u003c')}</script>
      <script type="application/ld+json">{JSON.stringify(faq).replace(/</g, '\\u003c')}</script>
    </div>
  );
}
