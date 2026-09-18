import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Upgrade Guide (${getCurrentDateString()}) — Hole, Sell Value & Bag`,
  description:
    'Hole Fishing upgrade guide: what each upgrade does, the correct order to buy them, and how to balance hole size against rod tier so you stop losing catches.',
  keywords: ['hole fishing upgrade guide', 'hole fishing hole size', 'hole fishing sell value', 'hole fishing backpack', 'hole fishing upgrades'],
  path: '/upgrades',
});

const TRACKS = [
  {
    name: 'Rod',
    emoji: '🎣',
    effect: 'Raises max weight and reel speed',
    why: 'The hard gate. If a fish is heavier than your rod, you get "too strong" and lose it no matter how well you play the minigame.',
    priority: 'Buy first whenever you are losing catches',
    link: { href: '/rods', label: 'Rod tier list' },
  },
  {
    name: 'Hole Size',
    emoji: '🕳️',
    effect: 'Raises luck — and the weight of what you hook',
    why: 'A bigger hole means rarer fish, but it also spawns heavier fish. This is why hole and rod upgrades have to move together.',
    priority: 'Alternate with rod upgrades',
    link: { href: '/mutations', label: 'Mutation rates' },
  },
  {
    name: 'Sell Value',
    emoji: '💰',
    effect: 'Permanent multiplier on every sale',
    why: 'The only upgrade that raises income without changing how you play. It compounds with Server Hole, night fish and mutations.',
    priority: 'Buy whenever affordable',
    link: { href: '/money-guide', label: 'Money guide' },
  },
  {
    name: 'Backpack',
    emoji: '🎒',
    effect: 'Carry more fish per trip',
    why: 'Quality of life, not power. A bigger bag means fewer shop runs — but it will never catch you a fish you could not catch before.',
    priority: 'Lowest priority early',
    link: { href: '/money-guide', label: 'Income methods' },
  },
];

export default function UpgradesPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Upgrade Guide', url: '/upgrades' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'What should I upgrade first in Hole Fishing?',
      answer:
        'Rod first whenever fish are escaping with "too strong", then sell value, then hole size, then backpack. The rule is to keep your rod and hole balanced — never let the hole outgrow the rod.',
    },
    {
      question: 'What does hole size do in Hole Fishing?',
      answer:
        'Hole size raises your luck, which means rarer catches — but it also increases the weight of the fish you hook. That is why a bigger hole without a matching rod leads to "too strong" escapes.',
    },
    {
      question: 'Is the backpack upgrade worth it in Hole Fishing?',
      answer:
        'Eventually, yes — but it is the lowest-priority early upgrade. Backpack capacity is convenience: it reduces shop trips but does not increase catch value, rarity or income per cast.',
    },
    {
      question: 'What does sell value do in Hole Fishing?',
      answer:
        'Sell value is a permanent account multiplier applied to every sale. Because Server Hole pays 4x and mutations multiply the base value, sell-value upgrades compound with everything else in the game.',
    },
    {
      question: 'Why do I keep losing fish with "too strong" in Hole Fishing?',
      answer:
        'Your rod\'s max weight is lower than the fish you hooked. Fix it by buying the next rod tier, or slow down hole-size upgrades until the rod catches up. Losing the catch is unavoidable once it triggers.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Upgrade Guide</h1>
      <p className="text-gray-500 mb-8">
        Four upgrade tracks, one correct order. Updated {getCurrentDateString()}.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {TRACKS.map((t) => (
          <div key={t.name} className="p-5 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="text-2xl mb-2">{t.emoji}</div>
            <h2 className="font-black mb-1">{t.name}</h2>
            <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">{t.effect}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{t.why}</p>
            <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 mb-3">{t.priority}</p>
            <Link href={t.link.href} className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">
              {t.link.label} →
            </Link>
          </div>
        ))}
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>The Golden Rule: Balance Rod and Hole</h2>
        <p>
          Hole Fishing has one trap that catches almost every new player: <strong>the hole and the rod are a matched
          pair</strong>. Upgrading hole size raises your luck — good — but it also raises the weight of the fish you hook.
          If your rod&apos;s max weight has not kept up, every big catch ends in the <em>&quot;too strong&quot;</em> message and
          you lose the fish after doing all the work.
        </p>
        <p>
          The practical rule: <strong>if you are losing catches, buy a rod before you touch the hole again.</strong> If you are
          catching everything easily but seeing the same commons, it is safe to grow the hole. Rod and hole should
          climb the ladder together, one step at a time.
        </p>

        <h2>The Correct Upgrade Order</h2>
        <ol>
          <li><strong>Rod</strong> — first upgrade of any session where catches are escaping. The Stone Rod ($1,000) and Golden Rod ($7,500) come fast; see the <Link href="/rods">tier list</Link>.</li>
          <li><strong>Sell value</strong> — a multiplier on every single sale, forever. Buy a tier whenever it costs less than one Server Hole session.</li>
          <li><strong>Hole size</strong> — your luck engine and the source of rarer species. Grow it only when your rod can handle the heavier spawns.</li>
          <li><strong>Backpack</strong> — convenience. Buy it when shop trips start interrupting your Server Hole timing, not before.</li>
        </ol>

        <h2>What Each Track Actually Buys You</h2>
        <ul>
          <li><strong>Rod tiers</strong> are the biggest single power spikes — the jump from Tree Rod (~$650K, 250 kg) to <Link href="/rods">Pirate Rod</Link> ($2M, 1,200 kg) unlocks turtles and big sharks outright.</li>
          <li><strong>Hole size</strong> is the only upgrade that changes <em>what species you see</em>, which is why it feeds the <Link href="/fish">index</Link> and its permanent +10 luck milestones.</li>
          <li><strong>Sell value</strong> is the only upgrade that pays out on a catch you already would have caught anyway.</li>
          <li><strong>Backpack</strong> is the only upgrade with no effect on income per cast.</li>
        </ul>

        <h2>Upgrade Mistakes to Avoid</h2>
        <ul>
          <li>Maxing hole size for luck, then wondering why every rare escapes — the rod has to follow.</li>
          <li>Skipping more than one rod tier. The Bone Rod is the classic skip candidate, but skipping two leaves you under-weighted for everything.</li>
          <li>Buying backpack capacity with your first $5,000 instead of the Golden Rod.</li>
          <li>Ignoring sell value because it is invisible. It is the cheapest permanent income boost in the game.</li>
        </ul>
        <p>
          More pitfalls in the <Link href="/mistakes">common mistakes guide</Link>, and use the{' '}
          <Link href="/calculator">calculator</Link> to price out your exact next upgrade.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
