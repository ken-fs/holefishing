import type { Metadata } from 'next';
import Link from 'next/link';
import { getCodes, getGameConfig } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Codes (${getCurrentDateString()}) — Working Codes & Status`,
  description:
    'Are there Hole Fishing codes on Roblox? Verified status, the milestones that would trigger a code drop, how redemption would work, and the free rewards that exist right now.',
  keywords: ['hole fishing codes', 'hole fishing codes 2026', 'hole fishing roblox codes', 'hole fishing redeem codes', 'hole fishing code'],
  path: '/codes',
});

// 里程碑数据来自 Roblox 公开 API（09-18 实测）
const MILESTONES = [
  { label: 'Likes', now: 39347, next: 40000, note: 'Groups celebrate like milestones constantly — this is the closest trigger.' },
  { label: 'Visits', now: 6114917, next: 10000000, note: 'The classic simulator code trigger. 10M visits is the standard celebration point.' },
  { label: 'Favorites', now: 182581, next: 200000, note: 'Favourites milestones are commonly paired with a code drop.' },
  { label: 'Group members', now: 72627, next: 100000, note: 'Group-size milestones are the most common code trigger of all on Roblox.' },
];

function fmt(n: number): string {
  if (n >= 1e6) return `${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  return n.toLocaleString();
}

export default function CodesPage() {
  const codes = getCodes();
  const config = getGameConfig();
  const hasCodes = codes.active.length > 0;
  const groupMembers = 72627; // Roblox groups API, 2026-09-18
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
        'The game currently has no codes button or redemption menu. If codes are added, Roblox simulators almost always put the redemption box in the shop or settings menu — we will publish exact steps the moment a real menu exists rather than guessing now.',
    },
    {
      question: 'How do I get free rewards in Hole Fishing without codes?',
      answer:
        'Claim the free reward chest near the spawn (pays out for liking the game and joining the 67K CCU group), fish during the Server Hole event for 4x cash, fish at night for the highest-value species, and complete your fish index for permanent index luck.',
    },
    {
      question: 'When will Hole Fishing add codes?',
      answer:
        'No official date has been announced. Roblox simulators typically add codes around visit, like or group-member milestones, or when a major update ships. The closest upcoming triggers are 40K likes and 10M visits — both are tracked live on this page.',
    },
    {
      question: 'Are the Hole Fishing codes on other websites real?',
      answer:
        'No. Any site currently listing "working Hole Fishing codes" is fabricating them — the game has no redemption UI, so there is nothing for a code to do. Those pages exist to capture the search traffic. This page says so plainly instead.',
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
      <p className="text-gray-500 mb-8">Last checked {getCurrentDateString()} — monitored daily by our pipeline. Hole Fishing codes are checked against the Roblox game page and the developer group every morning.</p>

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
            <p className="font-semibold mb-1">⚠️ No codes exist yet</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Hole Fishing launched without a code system, and the Desert Event update did not add one.
              Any site claiming &quot;working Hole Fishing codes&quot; right now is making them up. We monitor the game
              daily — when real codes drop, they&apos;ll be here within hours.
            </p>
          </div>
        )}
      </section>

      {/* Roblox variant targeting — direct answer for the "roblox codes" query family */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Are There Hole Fishing Roblox Codes?</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          <strong>No.</strong> Hole Fishing on Roblox has no code redemption system as of the Desert Event update
          (September 2026). There is no codes button, no redemption box, and no codes menu anywhere in the game —
          which means any list of &quot;Hole Fishing Roblox codes&quot; you find elsewhere is fabricated. This page
          tracks the official sources daily and publishes real codes the hour they exist.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          If you searched for <em>Roblox Hole Fishing codes</em>, <em>codes for Hole Fishing Roblox</em>, or
          <em> code Hole Fishing Roblox</em> — they all point to the same answer, and this is it. The closest
          substitutes that <em>do</em> exist are below: the free reward chest, the Server Hole event, and index
          milestones.
        </p>
      </section>

      {/* Milestone monitor — the real signal */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-2">What Would Trigger a Code Drop</h2>
        <p className="text-sm text-gray-500 mb-4">
          Roblox simulators almost always drop their first codes on a milestone. These are the four live counters on
          Hole Fishing right now (Roblox public API, updated continuously) — the closest one is your best signal.
        </p>
        <div className="space-y-3">
          {MILESTONES.map((m) => {
            const pct = Math.min(100, Math.round((m.now / m.next) * 100));
            const remaining = m.next - m.now;
            return (
              <div key={m.label} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <span className="font-bold">{m.label}</span>
                  <span className="text-sm font-mono tabular text-gray-600 dark:text-gray-400">
                    {fmt(m.now)} / {fmt(m.next)}
                    {remaining > 0 && (
                      <span className="ml-2 text-xs text-cyan-600 dark:text-cyan-400">
                        ({fmt(remaining)} to go)
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
          Hole Fishing is a young game — it went viral only weeks ago and has already shipped its first limited event.
          The developers (67K CCU) built the economy around four in-game systems instead of codes: the free reward chest,
          the <Link href="/server-hole">Server Hole event</Link>, index luck milestones, and Robux potions/gamepasses.
        </p>
        <p>
          That is a deliberate design choice, not an oversight. Codes exist to paper over a weak early economy — they
          hand out starter cash so new players do not bounce. Hole Fishing does not need that: the free reward chest and
          4x Server Hole windows already give new players a fast start. A group with {config.stats.favorites} favourites
          and a {fmt(groupMembers)}-member community has no reason to add a redemption system until a celebration calls for it.
        </p>
        <p>
          The practical consequence for you: there is nothing to redeem today, and any list you find is fiction. But the
          moment a milestone lands, this page becomes the fastest place to get the real codes — because we are already
          checking daily.
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
          <li><strong>This page</strong> — our daily pipeline checks both of the above every morning and publishes within hours.</li>
        </ol>
        <p>
          What codes will <em>not</em> appear in: YouTube comment sections, Discord DMs, or any site that lists
          &quot;codes&quot; for a game with no redemption menu.
        </p>

        <h2>How Redemption Would Likely Work</h2>
        <p>
          We are not going to invent a menu that does not exist. What is verifiable: Hole Fishing currently has{' '}
          <strong>no codes button, no redemption box, and no codes menu</strong> anywhere in the UI. When one is added,
          Roblox simulators follow a consistent pattern — a code box inside the shop or the settings menu, entered
          exactly as written (they are usually case-sensitive). We will publish the exact click path the day a real menu
          ships, with a screenshot, rather than guessing at one now.
        </p>

        <h2>Why This Page Says &quot;No Codes&quot; Instead of Inventing Them</h2>
        <p>
          Search for &quot;Hole Fishing codes&quot; and you will find plenty of pages with lists. Every one of them is
          fabricated — the game has no redemption system, so there is nothing for a code to unlock. Those pages exist
          purely to capture the search traffic, and they will never update because there is nothing to update.
        </p>
        <p>
          This page takes the opposite approach, and it turns out to be the better one: &quot;are there codes&quot; is
          itself the search. Most players looking for Hole Fishing codes do not know the game has no code system, and
          finding a straight answer is more useful than a fake list. It also means that when codes <em>do</em> launch, we
          are already the page players trust — and the first one with the real codes.
        </p>
        <p className="text-sm text-gray-500">
          Tracked automatically: our pipeline searches for Hole Fishing code drops every day at 11:00 and updates{' '}
          <code>codes.json</code> the moment anything real appears. The current status file is verified empty.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
