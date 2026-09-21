import Link from 'next/link';
import { getGameConfig, getAllFish, getRods, RARITY_COLORS } from '@/lib/data';
import { generateVideoGameSchema, generateWebSiteSchema, getCurrentDateString } from '@/lib/seo';

const config = getGameConfig();

const TOOLS = [
  { href: '/rods', emoji: '🎣', title: 'Rod Tier List', desc: 'All 12 rods ranked — prices, max weight, and which ones to skip.' },
  { href: '/fish', emoji: '🐟', title: 'Fish Index', desc: 'Every fish by rarity: day & night catches, values, mutations.' },
  { href: '/calculator', emoji: '🧮', title: 'Progression Calculator', desc: 'Calculate exactly how much cash you need for your next rod.' },
  { href: '/codes', emoji: '🎁', title: 'Codes', desc: 'Is there a reward-code system yet? We check every day and update the moment one appears.' },
  { href: '/secret-fish', emoji: '❄️', title: 'Secret Fish', desc: 'Glacial Wyrm & Alien — how to catch the $3B+ secrets.' },
  { href: '/server-hole', emoji: '🕳️', title: 'Server Hole Event', desc: 'Timer, 4x cash strategy, and mutation rolls explained.' },
];

const GUIDES = [
  { href: '/beginner-guide', emoji: '🚀', title: 'Beginner Guide', desc: 'The core loop and your first 30 minutes.' },
  { href: '/money-guide', emoji: '💰', title: 'Money Guide', desc: 'Five income methods ranked by cash per hour.' },
  { href: '/upgrades', emoji: '⬆️', title: 'Upgrade Guide', desc: 'Rod, hole, sell value and backpack — the correct order.' },
  { href: '/mutations', emoji: '🧬', title: 'Mutations Guide', desc: 'Big, Large, Huge, Giant and Golden variants explained.' },
  { href: '/night-fishing', emoji: '🌙', title: 'Night Fishing', desc: 'All 9 night-exclusive fish and the night cycle strategy.' },
  { href: '/mistakes', emoji: '⚠️', title: 'Common Mistakes', desc: 'Ten mistakes slowing your grind — and the fix for each.' },
  { href: '/community', emoji: '👥', title: 'Community', desc: 'The 67K CCU group, six-player servers and server etiquette.' },
  { href: '/scripts', emoji: '🛡️', title: 'Scripts & Safety', desc: 'Why scripts get your account banned — and what to do instead.' },
];

export default function HomePage() {
  const fish = getAllFish();
  const rods = getRods();
  const schema = generateVideoGameSchema();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }} />

      {/* Hero */}
      <section className="mb-12">
        <div className="grid md:grid-cols-[1.15fr_1fr] gap-8 items-center">
          <div>
            <p className="inline-block text-xs font-bold tracking-widest uppercase bg-cyan-300 text-gray-950 px-2.5 py-1 rounded mb-5">
              🏜️ Desert Event live now
            </p>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-950 dark:text-gray-50 leading-[1.02] mb-5">
              One hole. One rod. <span className="bg-cyan-300 dark:bg-cyan-400 px-1.5 rounded-sm box-decoration-clone">Endless</span> fish.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-7 leading-relaxed">
              The complete companion for Roblox&apos;s viral fishing game — rod tier lists,
              full fish index, progression calculator and secret fish guides. Updated {getCurrentDateString()}.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/rods" className="btn-press px-5 py-2.5 rounded-lg bg-gray-950 dark:bg-cyan-400 text-white dark:text-gray-950 font-bold hover:bg-gray-800 dark:hover:bg-cyan-300">
                Rod Tier List →
              </Link>
              <Link href="/fish" className="font-semibold text-gray-700 dark:text-gray-300 underline decoration-cyan-400 decoration-2 underline-offset-4 hover:decoration-cyan-500">
                Browse Fish Index
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-cyan-300 dark:bg-cyan-400/80 rounded-2xl rotate-2" aria-hidden="true" />
            <img
              src="/hero-bg.jpg"
              alt="Hole Fishing gameplay — the hole and a whale catch"
              fetchPriority="high"
              loading="eager"
              className="relative rounded-2xl w-full aspect-video object-cover border-2 border-gray-950 dark:border-gray-100"
            />
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
            <div className="text-2xl font-black text-gray-950 dark:text-cyan-400 tabular">{s.value}</div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Tools grid */}
      <section className="mb-10">
        <h2 className="text-2xl font-black mb-4">Tools &amp; Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map((t, i) => (
            <Link key={t.href} href={t.href} className={`p-5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-cyan-500 dark:hover:border-cyan-600 hover:shadow-lg hover:shadow-cyan-900/5 dark:hover:shadow-cyan-500/5 transition-all group ${i === 0 ? 'md:col-span-2 bg-gradient-to-br from-cyan-50 to-transparent dark:from-cyan-950/20 dark:to-transparent' : ''}`}>
              <div className="text-2xl mb-2">{t.emoji}</div>
              <h3 className="font-bold mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{t.title}</h3>
              <p className="text-sm text-gray-500">{t.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guides grid */}
      <section className="mb-10">
        <h2 className="text-2xl font-black mb-4">Deep-Dive Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {GUIDES.map((g) => (
            <Link key={g.href} href={g.href} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-cyan-500 dark:hover:border-cyan-600 transition-colors group">
              <div className="text-xl mb-1">{g.emoji}</div>
              <h3 className="font-bold text-sm mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{g.title}</h3>
              <p className="text-xs text-gray-500">{g.desc}</p>
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
        <h2 className="text-2xl font-black">How Progression Works</h2>
        <p>
          Progression is built on four upgrade tracks: <strong>rods</strong> (max weight + reel speed),
          <strong> hole size</strong> (luck and fish size), <strong>sell value</strong> (a multiplier on every sale) and
          <strong> backpack</strong> capacity. The rod ladder runs from the free Starter Rod to the $320M Hacker Rod —
          see the full <Link href="/rods">rod tier list</Link> for prices and which tiers to skip. Use the{' '}
          <Link href="/calculator">progression calculator</Link> to plan exactly how many casts stand between you and your next rod.
        </p>
        <p>
          Fish span seven rarities from Common to Secret, and every species can roll a Big, Large, Huge or Giant
          <strong> mutation</strong> that multiplies its weight and value. Filling your <strong>fish index</strong> grants permanent
          +luck milestones, which is why variety beats grinding the same catch. Check the full{' '}
          <Link href="/fish">fish index</Link> for every documented species, or read the{' '}
          <Link href="/beginner-guide">beginner guide</Link> if you just spawned in.
        </p>
        <p>
          Grinding efficiently is its own skill: the <Link href="/money-guide">money guide</Link> ranks every income
          method, the <Link href="/upgrades">upgrade guide</Link> explains the correct purchase order, and the{' '}
          <Link href="/mutations">mutations guide</Link> covers the size and colour variants. When night falls, the{' '}
          <Link href="/night-fishing">night fishing guide</Link> lists every exclusive species — and if your grind feels
          stuck, the <Link href="/mistakes">common mistakes</Link> page is the fastest fix.
        </p>
      </section>
    </div>
  );
}
