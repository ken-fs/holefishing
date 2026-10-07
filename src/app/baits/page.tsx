import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Baits (${getCurrentDateString()}) — All 9 Baits, Prices & Effects`,
  description:
    'Every bait in the Hole Fishing Bait Shop: Classic, Tide, Meadow, Frost, Reef, King, Ice, Devil and Holo — cash and Robux prices, what each one does, and which are worth it.',
  keywords: ['hole fishing bait', 'hole fishing baits', 'hole fishing bait shop', 'hole fishing best bait', 'hole fishing holo bait', 'hole fishing king bait'],
  path: '/baits',
});

// 数据来源：Oct 4 游戏画面（Maskednoobgy 直播 + G0Dx 新号流程），逐帧读 Bait Shop。
// cash = null：画面上只看到 NO STOCK，没读到现金价。
const BAITS: { name: string; effect: string; cash: string | null; robux: number }[] = [
  { name: 'Classic Bait', effect: 'x2 fish value', cash: '$500', robux: 3 },
  { name: 'Tide Bait', effect: 'Guaranteed mutation', cash: '$5,000', robux: 5 },
  { name: 'Meadow Bait', effect: 'x5 fish value', cash: '$50,000', robux: 9 },
  { name: 'Frost Bait', effect: 'x5 fish value + mutation', cash: '$1,200,000', robux: 16 },
  { name: 'Reef Bait', effect: 'x10 fish value', cash: '$25,000,000', robux: 24 },
  { name: 'King Bait', effect: 'Guaranteed Secret+ fish', cash: null, robux: 40 },
  { name: 'Ice Bait', effect: 'Guaranteed Primordial+ fish', cash: null, robux: 200 },
  { name: 'Devil Bait', effect: 'Guaranteed Celestial+ fish', cash: null, robux: 560 },
  { name: 'Holo Bait', effect: 'Guaranteed Ethereal+ fish', cash: null, robux: 1200 },
];

export default function BaitsPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Baits', url: '/baits' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'How many baits are in Hole Fishing?',
      answer:
        'Nine as of the Oct 4, 2026 shop: Classic, Tide, Meadow, Frost, Reef, King, Ice, Devil and Holo. The first five can be bought with cash; the top four were only seen sold out with a Robux price.',
    },
    {
      question: 'What is the best bait in Hole Fishing?',
      answer:
        'For cash, the Reef Bait ($25M, x10 fish value) is the strongest. Overall, the Holo Bait (R$1,200) is the top one — it guarantees an Ethereal or better fish. For most players, Meadow and Reef are the ones worth buying every restock.',
    },
    {
      question: 'How often does the Bait Shop restock?',
      answer:
        'Every few minutes — the "NEW STOCK IN" timer showed 1–5 minutes on the footage we checked. Each bait only has a handful in stock per restock (x1 to x6), so the good ones sell out fast.',
    },
    {
      question: 'Can you buy baits with Robux in Hole Fishing?',
      answer:
        'Yes. Every bait has a Robux button next to the cash one, from R$3 for a Classic Bait up to R$1,200 for a Holo Bait.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Baits</h1>
      <p className="text-gray-500 mb-8">All 9 baits in the Bait Shop, read off the game screen. Checked {getCurrentDateString()}.</p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800 text-left">
              <th className="py-2 pr-3">Bait</th>
              <th className="py-2 pr-3">What it does</th>
              <th className="py-2 pr-3">Cash</th>
              <th className="py-2">Robux</th>
            </tr>
          </thead>
          <tbody>
            {BAITS.map((b) => (
              <tr key={b.name} className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-3 pr-3 font-bold whitespace-nowrap">{b.name}</td>
                <td className="py-3 pr-3 text-gray-600 dark:text-gray-400">{b.effect}</td>
                <td className="py-3 pr-3 font-mono text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                  {b.cash ?? <span className="text-gray-400">sold out when seen</span>}
                </td>
                <td className="py-3 font-mono whitespace-nowrap">R${b.robux.toLocaleString('en-US')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>How baits work</h2>
        <p>
          The Bait Shop is one of the stalls next to Sell, Upgrades and Rods. Each bait gives your next catch a boost:
          either a sell-value multiplier (x2, x5, x10), a guaranteed mutation, or a guaranteed minimum rarity. The shop
          restocks on a short timer and only has a few of each bait per restock, so expect &quot;NO STOCK&quot; on the good ones
          a lot of the time.
        </p>
        <h2>Which ones are worth buying</h2>
        <ul>
          <li><strong>Early game:</strong> Classic ($500) and Tide ($5,000). Tide&apos;s guaranteed mutation is the better deal once you can afford it.</li>
          <li><strong>Mid game:</strong> Meadow ($50,000, x5) and Frost ($1.2M, x5 plus a mutation). Frost is Meadow with a mutation on top.</li>
          <li><strong>Late game:</strong> Reef ($25M, x10) is the best bait you can buy with cash. Buy it every restock if it&apos;s in stock.</li>
          <li><strong>Robux baits:</strong> King, Ice, Devil and Holo guarantee a rarity instead of a multiplier. They only make sense if you&apos;re chasing a specific rare fish for the <Link href="/fish">index</Link>.</li>
        </ul>
        <p>
          Save your multiplier baits for a <Link href="/server-hole">Server Hole</Link> window or an Admin Abuse boost (see the{' '}
          <Link href="/events">events guide</Link>). A x10 bait on a catch that&apos;s already boosted should pay far more than on
          a normal cast — we haven&apos;t measured exactly how the boosts combine yet, though.
        </p>
        <h2>Rarity tiers the baits reveal</h2>
        <p>
          The top baits list rarities we hadn&apos;t seen spelled out before. By price, the order looks like{' '}
          <strong>Secret → Primordial → Celestial → Ethereal</strong>, all above Mythical. We only know the names from the bait
          labels so far — check the <Link href="/secret-fish">secret fish page</Link> for the ones that have actually been caught.
        </p>
        <p className="text-sm text-gray-500">
          Source: Oct 4, 2026 gameplay footage (a full Bait Shop scroll on a fresh account, plus a long-time player&apos;s live
          stream). Cash prices for King, Ice, Devil and Holo weren&apos;t visible because they were sold out. Prices can change
          with updates — the <Link href="/updates">updates page</Link> tracks changes.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
