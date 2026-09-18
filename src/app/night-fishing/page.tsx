import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllFish, RARITY_COLORS } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Night Fishing Guide (${getCurrentDateString()}) — All Night Fish`,
  description:
    'Every night-exclusive fish in Hole Fishing with values, plus the strategy for the night cycle: why night pays more and how to farm the night index for permanent luck.',
  keywords: ['hole fishing night fishing', 'hole fishing night fish', 'hole fishing day night cycle', 'hole fishing best time to fish'],
  path: '/night-fishing',
});

export default function NightFishingPage() {
  const nightFish = getAllFish().filter((f) => f.time === 'night');
  const dayFish = getAllFish().filter((f) => f.time === 'day');
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Night Fishing', url: '/night-fishing' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'What fish can you catch at night in Hole Fishing?',
      answer:
        'Nine confirmed night-exclusive species: Ghost Catfish, Jellyfish, Moray Eel, Lionfish, Squid, Void Ray, Asian Turtle, Goblin Shark and Nebulous Fin. They do not spawn during the day cycle.',
    },
    {
      question: 'Why is night fishing better in Hole Fishing?',
      answer:
        'Night-exclusive fish have far higher base values than day catches. The Goblin Shark sells for $5M–$20M and the Nebulous Fin for $500M+, both night-only. Night catches also fill a separate index for permanent +luck milestones.',
    },
    {
      question: 'How long is the night cycle in Hole Fishing?',
      answer:
        'The game runs a continuous day/night cycle, so night arrives regularly during normal play. The practical approach is to treat nightfall as a signal: stop shopping and upgrades, and fish the entire night through.',
    },
    {
      question: 'Do day fish stop spawning at night in Hole Fishing?',
      answer:
        'Day-exclusive species stop spawning after dark, but any-time fish can still appear. If you are specifically hunting a night-exclusive species, night is the only window you have.',
    },
    {
      question: 'What is the most valuable night fish in Hole Fishing?',
      answer:
        'The Nebulous Fin is the most valuable confirmed night catch at $500,000,000+, making it one of the highest-value fish in the game. The Goblin Shark ($5M–$20M) is the realistic night-farming target.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Night Fishing Guide</h1>
      <p className="text-gray-500 mb-8">
        {nightFish.length} night-exclusive species, and why nightfall is the best money window after the Server Hole. Updated {getCurrentDateString()}.
      </p>

      <div className="grid grid-cols-3 gap-3 mb-10 text-center">
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400 tabular">{nightFish.length}</div>
          <div className="text-xs text-gray-500 uppercase">Night Fish</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400 tabular">$500M+</div>
          <div className="text-xs text-gray-500 uppercase">Top Night Catch</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400 tabular">+10</div>
          <div className="text-xs text-gray-500 uppercase">Luck / Milestone</div>
        </div>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-black mb-3">All Night-Exclusive Fish</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {nightFish.map((f) => (
            <Link
              key={f.slug}
              href={`/fish/${f.slug}`}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-cyan-500 dark:hover:border-cyan-600 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold">🌙 {f.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase ${RARITY_COLORS[f.rarity]}`}>
                  {f.rarity}
                </span>
              </div>
              <div className="text-sm text-emerald-600 dark:text-emerald-400 font-mono mb-1">{f.valueRange}</div>
              <p className="text-xs text-gray-500 line-clamp-2">{f.note}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>Why Night Pays More</h2>
        <p>
          The day/night cycle is not cosmetic. Hole Fishing splits its fish pool by time of day: {dayFish.length} species
          spawn during the day and {nightFish.length} spawn only after dark. Night species are built around higher base values —
          the <Link href="/fish/goblin-shark">Goblin Shark</Link> ($5M–$20M) and{' '}
          <Link href="/fish/nebulous-fin">Nebulous Fin</Link> ($500M+) exist only at night, and the{' '}
          <Link href="/fish/asian-turtle">Asian Turtle</Link> (~half a ton, $500K–$1.5M) is the classic night jackpot
          that makes millionaires.
        </p>
        <p>
          On top of raw value, night catches fill a <strong>separate night index</strong> with the same permanent{' '}
          <strong>+10 index luck</strong> milestones as the day index. That makes night fishing doubly efficient: higher payouts now,
          better rarity rolls forever.
        </p>

        <h2>Night Fishing Strategy</h2>
        <ol>
          <li><strong>Treat nightfall as a command.</strong> Stop shopping, stop upgrading, stop walking around — fish every second of the night.</li>
          <li><strong>Sell before night falls,</strong> not during. A capped backpack wastes the highest-value window in the cycle.</li>
          <li><strong>Bring the best rod you own.</strong> Night fish are heavy; the Asian Turtle alone is roughly 500 kg. A weak rod means a &quot;too strong&quot; escape on the catch you waited all night for.</li>
          <li><strong>Save luck potions for night,</strong> especially if the Server Hole opens after dark — a night Server Hole with a potion up is the best possible cast in the game.</li>
          <li><strong>Log every new species.</strong> Each night milestone is permanent luck that raises mutation and rarity odds around the clock.</li>
        </ol>

        <h2>Night Fish by Value</h2>
        <div className="overflow-x-auto not-prose">
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 text-left">
                <th className="py-2 pr-3">Fish</th>
                <th className="py-2 pr-3">Rarity</th>
                <th className="py-2">Value Range</th>
              </tr>
            </thead>
            <tbody>
              {[...nightFish].reverse().map((f) => (
                <tr key={f.slug} className="border-b border-gray-100 dark:border-gray-800/60">
                  <td className="py-2 pr-3 font-bold whitespace-nowrap">{f.name}</td>
                  <td className="py-2 pr-3">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase ${RARITY_COLORS[f.rarity]}`}>{f.rarity}</span>
                  </td>
                  <td className="py-2 font-mono text-emerald-600 dark:text-emerald-400 whitespace-nowrap">{f.valueRange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          Values are base-range observations from gameplay — sell-value upgrades, mutations and Server Hole multipliers
          stack on top. See the <Link href="/mutations">mutations guide</Link> and the{' '}
          <Link href="/money-guide">money guide</Link> for the stacking order.
        </p>

        <h2>Pre-Dusk Checklist</h2>
        <p>
          Night is the one window in Hole Fishing you cannot get back — the cycle keeps moving. Everything that wastes
          it is a preparation failure, not bad luck:
        </p>
        <ol>
          <li><strong>Sell your inventory.</strong> A full backpack at dusk means the highest-value fish in the game bounce off your capacity.</li>
          <li><strong>Confirm your rod can handle the night pool.</strong> Night species include the heaviest catches in the game — the Asian Turtle alone is roughly 500 kg.</li>
          <li><strong>Hold cash instead of spending it.</strong> Being mid-upgrade when night falls is the most common way players lose a full cycle.</li>
          <li><strong>Pop luck potions before dark,</strong> not during. The potion clock runs in real time, so activating it mid-night burns the window.</li>
          <li><strong>Know whether a Server Hole may overlap.</strong> A Server Hole that opens after dark is the single best cast window in the game — see below.</li>
        </ol>

        <h2>Night Fish vs Day Fish: Why the Gap Is So Large</h2>
        <p>
          The day and night pools are not balanced against each other. Day fish exist to fund your upgrades; night fish
          exist to be the payoff. Compare the two ends of each pool:
        </p>
        <div className="overflow-x-auto not-prose">
          <table className="w-full text-sm border-collapse my-4">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800 text-left">
                <th className="py-2 pr-3">Pool</th>
                <th className="py-2 pr-3">Typical early catch</th>
                <th className="py-2">Top confirmed catch</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-800/60">
                <td className="py-2 pr-3 font-bold whitespace-nowrap">☀️ Day</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">Commons at $30–$500</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">Sawfish, Sunfish and the big sharks in the Mythical/Legendary tiers</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold whitespace-nowrap">🌙 Night</td>
                <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">Ghost Catfish at $1,000–$5,000</td>
                <td className="py-2 text-gray-600 dark:text-gray-400">Nebulous Fin at $500,000,000+ — the highest-value confirmed night catch</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Even the <em>worst</em> night fish (the Ghost Catfish, a Common) outsells most day commons by an order of
          magnitude. That is the entire argument for dropping everything when the sky darkens.
        </p>

        <h2>The Best Cast Window in the Game: Night + Server Hole</h2>
        <p>
          When a Server Hole opens during the night cycle, four multipliers line up at once: the highest base-value fish
          pool, the 4x Server Hole cash multiplier, boosted mutation rolls, and any luck potion you have running. It is
          the best possible cast in Hole Fishing and it lasts about 60 seconds.
        </p>
        <p>
          To catch it, watch the Server Hole cooldown against the day/night cycle. If a window is due while it is still
          light out, hold your potion. If night is about to fall and the cooldown is close, sell everything first so you
          are standing at the shared hole with an empty bag when both align.
        </p>
        <p className="text-sm text-gray-500">
          Because servers hold only six players, the competition for that window is far lighter than in a
          thirty-player game — see the <Link href="/community">community page</Link> for why small servers are an
          advantage.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
