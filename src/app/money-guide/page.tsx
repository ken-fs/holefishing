import type { Metadata } from 'next';
import Link from 'next/link';
import { getRods } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Money Guide (${getCurrentDateString()}) — Fastest Ways to Earn`,
  description:
    'How to make money fast in Hole Fishing: Server Hole 4x windows, night fishing, index luck milestones and sell-value upgrades — ranked by cash per hour.',
  keywords: ['hole fishing money guide', 'hole fishing how to make money', 'hole fishing money fast', 'hole fishing best money method'],
  path: '/money-guide',
});

const METHODS = [
  {
    rank: 1,
    name: 'Server Hole windows',
    pay: '4x cash · ~60s',
    why: 'The single highest-earning minute in the game. A server-wide hole opens every ~20 minutes and pays 4x for about a minute, with boosted mutation rolls on top.',
    how: 'Sell and empty your backpack beforehand, stand center, and fish every cast of the window. See the full Server Hole strategy.',
    link: { href: '/server-hole', label: 'Server Hole guide' },
  },
  {
    rank: 2,
    name: 'Night fishing',
    pay: '2–100x base value',
    why: 'Night-exclusive species carry far higher base values than their day counterparts — the Goblin Shark and Nebulous Fin only exist after dark.',
    how: 'When the sky darkens, drop your upgrade shopping and fish. Night catches also fill the night index for permanent +luck.',
    link: { href: '/night-fishing', label: 'Night fishing guide' },
  },
  {
    rank: 3,
    name: 'Mutation farming',
    pay: 'Multiplies any catch',
    why: 'Mutations multiply both weight and value, so a Giant on a mid-tier fish can out-earn an unmutated legendary.',
    how: 'Stack luck (hole size + index + potions) and fish Server Hole windows, where mutation rolls are boosted.',
    link: { href: '/mutations', label: 'Mutations guide' },
  },
  {
    rank: 4,
    name: 'Index milestones',
    pay: 'Permanent +10 index luck each',
    why: 'Luck is the multiplier behind every other method here. Each new species caught grants +10 permanent luck — a one-time cost that pays out forever.',
    how: 'Chase variety over volume early. Ten different commons beat fifty of the same fish.',
    link: { href: '/fish', label: 'Fish index' },
  },
  {
    rank: 5,
    name: 'Sell-value upgrades',
    pay: 'Multiplier on every sale',
    why: 'A permanent account multiplier that compounds with Server Hole, night fish and mutations — the only upgrade that boosts income without changing your play.',
    how: 'Buy sell-value tiers whenever the price is under one Server Hole session of earnings.',
    link: { href: '/upgrades', label: 'Upgrade guide' },
  },
];

export default function MoneyGuidePage() {
  const rods = getRods();
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Money Guide', url: '/money-guide' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'What is the fastest way to make money in Hole Fishing?',
      answer:
        'The Server Hole event. It opens roughly every 20 minutes for about 60 seconds and pays 4x cash with boosted mutation rolls. Stack it with night fishing and sell-value upgrades for the highest cash per hour.',
    },
    {
      question: 'Is night fishing better than day fishing in Hole Fishing?',
      answer:
        'Yes for income. Night-exclusive species have much higher base values — the Goblin Shark and Nebulous Fin only spawn at night — and night catches also fill a separate index for permanent luck milestones.',
    },
    {
      question: 'How do you make money early in Hole Fishing?',
      answer:
        'Fish commons until $1,000 for the Stone Rod, claim the free reward chest near spawn, then alternate rod, sell value and hole size upgrades. The Crocodile (~30 kg, $3,000) is the classic first big payday.',
    },
    {
      question: 'How much money do you need for the best rod in Hole Fishing?',
      answer:
        'The Hacker Rod costs $320,000,000 — the final rod in the 12-rod ladder. Before it, the Candy Cane Rod (~$26M) and Void Rod (~$60M) are the late-game gates.',
    },
    {
      question: 'Should I sell my fish right away in Hole Fishing?',
      answer:
        'Sell before a Server Hole window opens, never during it. Arriving with a full backpack means the 4x window is wasted on inventory overflow instead of new catches.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Money Guide</h1>
      <p className="text-gray-500 mb-8">
        Five income methods, ranked by cash per hour — from your first $1,000 to the $320M Hacker Rod. Updated {getCurrentDateString()}.
      </p>

      <div className="space-y-4 mb-10">
        {METHODS.map((m) => (
          <div key={m.name} className="p-5 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-start gap-4">
              <span className="text-2xl font-black text-gray-300 dark:text-gray-700 tabular shrink-0">{m.rank}</span>
              <div>
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <h2 className="text-lg font-black">{m.name}</h2>
                  <span className="text-xs px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                    {m.pay}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{m.why}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{m.how}</p>
                <Link href={m.link.href} className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">
                  {m.link.label} →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>Money by Game Stage</h2>
        <h3>Early game ($0 – $150K)</h3>
        <p>
          Fish commons relentlessly and buy the <strong>Stone Rod ($1,000)</strong> as soon as you can. Claim the free reward
          chest near spawn, then push for the <strong>Golden Rod ($7,500)</strong>. Your first real payday is the{' '}
          <Link href="/fish/crocodile">Crocodile</Link> — roughly 30 kg and $3,000, catchable surprisingly early.
          Upgrade rod → sell value → hole size, in that order.
        </p>
        <h3>Mid game ($150K – $5M)</h3>
        <p>
          The <strong>Cactus Rod (~$150K)</strong> is the gate into real money. From here, income comes from rares and epics:
          the <Link href="/fish/blue-carp">Blue Carp</Link> ($175K–$250K) and <Link href="/fish/turtle">Turtle</Link>{' '}
          ($78K–$90K) are the reliable mid-game cash cows. Start treating every Server Hole window as mandatory.
        </p>
        <h3>Late game ($5M+)</h3>
        <p>
          Night fishing takes over. The <Link href="/fish/goblin-shark">Goblin Shark</Link> ($5M–$20M) and{' '}
          <Link href="/fish/nebulous-fin">Nebulous Fin</Link> ($500M+) are night-only, and mutations on those base values are
          what fund the <strong>Void Rod (~$60M)</strong> and finally the <strong>Hacker Rod ($320M)</strong>. See the full{' '}
          <Link href="/rods">rod tier list</Link> for the ladder and which tiers to skip.
        </p>

        <h2>The Rod Ladder as an Investment</h2>
        <p>
          Every rod purchase is a payback calculation: how many catches at your current income does this rod cost? The
          jump from the Tree Rod (~$650K, 250 kg) to the <strong>Pirate Rod ($2M, 1,200 kg)</strong> is the biggest single
          power spike in the game, and the Magic Rod&apos;s reel speed is what lets you actually clear a Server Hole window.
        </p>
        <div className="overflow-x-auto not-prose">
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 text-left">
                <th className="py-2 pr-3">Rod</th>
                <th className="py-2 pr-3">Price</th>
                <th className="py-2">Max Weight</th>
              </tr>
            </thead>
            <tbody>
              {rods.map((r) => (
                <tr key={r.slug} className="border-b border-gray-100 dark:border-gray-800/60">
                  <td className="py-2 pr-3 font-bold whitespace-nowrap">{r.name}</td>
                  <td className="py-2 pr-3 font-mono text-emerald-600 dark:text-emerald-400 whitespace-nowrap">{r.priceText}</td>
                  <td className="py-2 font-mono whitespace-nowrap">{r.maxWeightKg >= 999999 ? '∞' : `~${r.maxWeightKg.toLocaleString()} kg`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          Use the <Link href="/calculator">progression calculator</Link> to see how many casts each rod actually costs at
          your current average catch value.
        </p>

        <h2>Three Rules That Double Your Income</h2>
        <ol>
          <li><strong>Never fish through a Server Hole window.</strong> It is 4x cash for 60 seconds. Everything else can wait.</li>
          <li><strong>Never let your backpack cap you mid-event.</strong> Sell before the window opens, not during.</li>
          <li><strong>Never let your hole outgrow your rod.</strong> &quot;Too strong&quot; escapes are pure lost income — see <Link href="/mistakes">common mistakes</Link>.</li>
        </ol>

        <h2>The First Million, Step by Step</h2>
        <p>
          The gap between spawning in and having $1,000,000 is the part where most players quit. It is also the most
          scripted part of the game — there is a known-fast route:
        </p>
        <ol>
          <li><strong>Casts 1–20:</strong> fish commons with the free Starter Rod. Do not upgrade anything except the Stone Rod ($1,000) the moment you can afford it.</li>
          <li><strong>Claim the free reward chest</strong> near spawn — it pays out for liking the game and joining the 67K CCU group. It is the only free money in the game.</li>
          <li><strong>Push to the Golden Rod ($7,500).</strong> This is the first rod that stops you losing catches constantly, so it pays for itself quickly.</li>
          <li><strong>Hunt the Crocodile.</strong> At roughly 30 kg and $3,000 it is catchable far earlier than its value suggests, and it is the classic first &quot;big&quot; payday.</li>
          <li><strong>Start treating Server Hole windows as mandatory.</strong> Even at low catch values, 4x for a minute beats ten minutes of normal fishing.</li>
          <li><strong>Alternate rod → sell value → hole size</strong> from here. By the Cactus Rod (~$150K) you are in the mid game with a real income.</li>
        </ol>
        <p>
          The <Link href="/beginner-guide">beginner guide</Link> covers the same first 30 minutes in more detail,
          including the fishing minigame and upgrade priorities.
        </p>

        <h2>Income Methods Compared</h2>
        <div className="overflow-x-auto not-prose">
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 text-left">
                <th className="py-2 pr-3">Method</th>
                <th className="py-2 pr-3">Upside</th>
                <th className="py-2">Catch</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-bold whitespace-nowrap">Server Hole</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">4x cash + boosted mutations for ~60s</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">Requires timing and an empty backpack</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-bold whitespace-nowrap">Night fishing</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">Night-exclusive species carry far higher base values</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">Only available part of the cycle</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-bold whitespace-nowrap">Mutation farming</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">Multiplies any catch, stacks with everything</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">RNG-gated; needs luck stacking first</td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-bold whitespace-nowrap">Index milestones</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">Permanent +10 index luck each, forever</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">Slow — you have to catch new species</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold whitespace-nowrap">Sell-value upgrades</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">Multiplies every future sale, no gameplay change</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">Costs cash now for cash later</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Where the Rod Ladder Becomes a Cash Trap</h2>
        <p>
          Every rod purchase is a payback calculation, and two rungs on the ladder are famous traps. The{' '}
          <strong>Tree Rod (~$650K)</strong> arrives right before the Night Rod tier and is the point where players
          stall because they bought it instead of investing in sell value. The <strong>Bone Rod (~$11M)</strong> is the
          opposite problem — it is genuinely skippable, and creators routinely jump straight from Magic to the Candy
          Cane Rod.
        </p>
        <p>
          The rule that resolves both: <strong>if a rod does not unlock fish you are currently losing, it is not the
          purchase you need.</strong> Check the <Link href="/rods">rod tier list</Link> for the full ladder including
          the Night, Magma, Alien and Royal rods, and use the <Link href="/calculator">calculator</Link> to see what
          each rung actually costs in casts.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
