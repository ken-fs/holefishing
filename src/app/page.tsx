import Link from 'next/link';
import { getGameConfig, getAllFish, getRods, RARITY_COLORS } from '@/lib/data';
import { generateVideoGameSchema, getCurrentDateString } from '@/lib/seo';

const config = getGameConfig();

const TOOLS = [
  { href: '/rods', emoji: '🎣', title: 'Rod Tier List', desc: 'All 12 rods ranked — prices, max weight, and which ones to skip.' },
  { href: '/fish', emoji: '🐟', title: 'Fish Index', desc: 'Every fish by rarity: day & night catches, values, mutations.' },
  { href: '/calculator', emoji: '🧮', title: 'Progression Calculator', desc: 'Calculate exactly how much cash you need for your next rod.' },
  { href: '/codes', emoji: '🎁', title: 'Codes', desc: 'Working Hole Fishing codes — tracked and updated daily.' },
  { href: '/secret-fish', emoji: '❄️', title: 'Secret Fish', desc: 'Glacial Wyrm & Alien — how to catch the $3B+ secrets.' },
  { href: '/server-hole', emoji: '🕳️', title: 'Server Hole Event', desc: 'Timer, 4x cash strategy, and mutation rolls explained.' },
];

export default function HomePage() {
  const fish = getAllFish();
  const rods = getRods();
  const schema = generateVideoGameSchema();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative rounded-2xl overflow-hidden mb-10 border border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-cyan-950/85 to-gray-950/90" />
        <img src="/hero-bg.jpg" alt="Hole Fishing gameplay" className="absolute inset-0 w-full h-full object-cover -z-10" />
        <div className="relative px-6 py-14 md:py-20 text-white">
          <p className="text-cyan-300 text-sm font-semibold mb-2 tracking-wide uppercase">🏜️ Desert Event Live Now</p>
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Hole Fishing Guide &amp; Tools</h1>
          <p className="text-lg text-gray-200 max-w-2xl mb-6">
            One hole. One rod. Endless fish. The complete companion for Roblox&apos;s viral fishing game —
            rod tier lists, full fish index, progression calculator and secret fish guides. Updated {getCurrentDateString()}.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/rods" className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold transition-colors">
              Rod Tier List →
            </Link>
            <Link href="/fish" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 font-semibold transition-colors">
              Browse Fish Index
            </Link>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
        {[
          { label: 'Rods', value: String(rods.length) },
          { label: 'Fish Indexed', value: String(fish.length) },
          { label: 'Secret Fish', value: '2' },
          { label: 'Final Rod Cost', value: '$320M' },
        ].map((s) => (
          <div key={s.label} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
            <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400">{s.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Tools grid */}
      <section className="mb-10">
        <h2 className="text-2xl font-black mb-4">Tools &amp; Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map((t) => (
            <Link key={t.href} href={t.href} className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-cyan-500 dark:hover:border-cyan-600 hover:shadow-lg transition-all group">
              <div className="text-2xl mb-2">{t.emoji}</div>
              <h3 className="font-bold mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{t.title}</h3>
              <p className="text-sm text-gray-500">{t.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Rarest fish teaser */}
      <section className="mb-10">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-2xl font-black">Rarest Catches</h2>
          <Link href="/fish" className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">Full index →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {fish.filter((f) => f.rarity === 'Secret' || f.rarity === 'Mythical').slice(0, 6).map((f) => (
            <Link key={f.slug} href={`/fish/${f.slug}`} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-cyan-500 transition-colors">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold">{f.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase ${RARITY_COLORS[f.rarity]}`}>{f.rarity}</span>
              </div>
              <div className="text-sm text-emerald-600 dark:text-emerald-400 font-mono">{f.valueRange}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* About the game */}
      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2 className="text-2xl font-black">What is Hole Fishing?</h2>
        <p>
          Hole Fishing is a viral Roblox fishing simulator by <strong>67K CCU</strong> where the entire game happens
          around a single hole in the ground. Drop your line, hold the bar in the yellow zone, and pull out fish —
          then sell your catch and reinvest in a <Link href="/rods">better rod</Link>, a <strong>bigger hole</strong>,
          higher <strong>sell value</strong> and a larger <strong>backpack</strong>.
        </p>
        <p>
          The bigger your hole, the luckier your catches. Night brings exclusive fish like the Void Ray and Asian Turtle,
          and every ~20 minutes the <Link href="/server-hole">Server Hole</Link> opens with 4x cash for everyone.
          Two <Link href="/secret-fish">secret fish</Link> — the Glacial Wyrm and the Alien — are worth billions.
        </p>
      </section>
    </div>
  );
}
