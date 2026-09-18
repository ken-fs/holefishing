import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllFish, RARITY_COLORS } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Mutations (${getCurrentDateString()}) — Big, Huge & Giant Guide`,
  description:
    'Every Hole Fishing mutation explained: Big, Large, Huge, Giant and Golden variants, how they multiply value, and the best way to farm mutated fish.',
  keywords: ['hole fishing mutations', 'hole fishing huge', 'hole fishing giant fish', 'hole fishing golden fish', 'hole fishing mutation guide'],
  path: '/mutations',
});

const MUTATIONS = [
  {
    name: 'Big',
    emoji: '📈',
    desc: 'The first mutation tier. Slightly heavier, slightly more valuable than the base catch — the most common roll you will see.',
  },
  {
    name: 'Large',
    emoji: '📊',
    desc: 'A step above Big. Noticeably heavier fish that sells for clearly more than the base range. Common enough to appear during normal play.',
  },
  {
    name: 'Huge',
    emoji: '🔺',
    desc: 'The mutation everyone screenshots. A Huge Uncommon can out-earn a base Epic — mutation value can jump entire rarity tiers.',
  },
  {
    name: 'Giant',
    emoji: '🐋',
    desc: 'The rarest size roll seen in gameplay. Giant catches are broadcast-worthy and are the best-case outcome of any cast.',
  },
  {
    name: 'Golden',
    emoji: '✨',
    desc: 'A separate colour variant (not a size tier). Confirmed on Goldfish and Tench — a golden fish is a collector catch as much as a payout.',
  },
];

const CONFIRMED = [
  { fish: 'Goldfish', note: 'Golden variant exists — the classic first golden catch.', slug: 'goldfish' },
  { fish: 'Tench', note: 'Golden Tench mutation confirmed in gameplay.', slug: 'tench' },
  { fish: 'Shrimp', note: 'Giant Shrimp mutations sell for thousands — huge multiplier on a tiny base fish.', slug: 'shrimp' },
  { fish: 'Clownfish', note: 'Huge Clownfish mutations exist.', slug: 'clownfish' },
  { fish: 'Snapper', note: 'Huge Uncommon Snapper is a known flex — an Uncommon out-earning Epics.', slug: 'snapper' },
  { fish: 'Octopus', note: 'Big Rare Octopus mutations confirmed.', slug: 'octopus' },
];

export default function MutationsPage() {
  const fish = getAllFish();
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Mutations', url: '/mutations' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'What are mutations in Hole Fishing?',
      answer:
        'Mutations are size and colour variants that roll on top of a normal catch: Big, Large, Huge and Giant change the fish\'s weight and sale value, while Golden is a separate colour variant. Any fish species can roll them.',
    },
    {
      question: 'What is the rarest mutation in Hole Fishing?',
      answer:
        'Giant is the rarest size mutation seen in gameplay, followed by Huge. Golden is a separate colour variant rather than a size tier, and has been confirmed on Goldfish and Tench.',
    },
    {
      question: 'Do mutations increase value in Hole Fishing?',
      answer:
        'Yes — mutations multiply both weight and sale price, so a mutated catch always beats the same fish without one. The exact multipliers are still being verified in-game; this page tracks them rather than guessing.',
    },
    {
      question: 'How do you get more mutations in Hole Fishing?',
      answer:
        'The Server Hole event has boosted mutation rolls and stacks with its 4x cash window, which makes it the single best mutation farm. Stack luck sources (hole size, index milestones, luck potions) before fishing it.',
    },
    {
      question: 'Can every fish be mutated in Hole Fishing?',
      answer:
        'Yes. Mutations are a roll applied to a catch, not a separate species — commons, rares and legendaries all have mutation variants. Confirmed examples include Golden Goldfish, Golden Tench, Huge Clownfish and Giant Shrimp.',
    },
  ]);

  return (    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Mutations Guide</h1>
      <p className="text-gray-500 mb-8">
        Big, Large, Huge, Giant and Golden — how mutation rolls work and how to farm them. Updated {getCurrentDateString()}.
      </p>

      <div className="space-y-3 mb-10">
        {MUTATIONS.map((m) => (
          <div key={m.name} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex gap-4">
            <span className="text-2xl shrink-0">{m.emoji}</span>
            <div>
              <h2 className="font-black mb-1">{m.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>How Mutation Rolls Work</h2>
        <p>
          Every cast rolls for a species first, then rolls for a <strong>mutation</strong> on top of it. That is why a
          mutated common can be worth more than an unmutated rare: mutations multiply the catch&apos;s weight and
          sale price, and the species&apos; base value is what gets multiplied. A Giant Shrimp is still a Shrimp — it just
          sells for thousands instead of hundreds.
        </p>
        <p>
          The important consequence: <strong>mutations favour high-value species</strong>. Rolling a Giant on a
          Blue Carp or a Turtle multiplies a much bigger number than rolling one on a Goldfish. Early on, take every
          mutation you get. Late-game, you want mutations on your <Link href="/fish">rarest catches</Link>.
        </p>

        <h2>Where Mutations Roll Best</h2>
        <ol>
          <li>
            <strong>The <Link href="/server-hole">Server Hole</Link>.</strong> The event hole has boosted mutation rolls
            <em> and</em> pays 4x cash for roughly 60 seconds — the two effects stack, which makes it the best mutation
            window in the game by a wide margin. Arrive with an empty backpack and pop luck potions <em>before</em> it opens.
          </li>
          <li>
            <strong>A bigger hole.</strong> Hole size raises your passive luck, and luck is what drives rarity rolls —
            so an upgraded hole produces mutated catches more often. See the <Link href="/upgrades">upgrade guide</Link> for the
            balance between hole size and rod tier.
          </li>
          <li>
            <strong>Index milestones.</strong> Each index milestone grants permanent <strong>+10 luck</strong>, and luck stacks with
            potions and hole size. Catching new species is the cheapest permanent mutation-rate upgrade in the game.
          </li>
        </ol>

        <h2>Confirmed Mutation Sightings</h2>
        <p className="text-sm text-gray-500">
          These are the mutation variants documented in real gameplay so far — the list grows as more are verified.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {CONFIRMED.map((c) => {
          const f = fish.find((x) => x.slug === c.slug);
          return (
            <Link
              key={c.slug}
              href={`/fish/${c.slug}`}
              className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-cyan-500 dark:hover:border-cyan-600 transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold">{c.fish}</span>
                {f && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase ${RARITY_COLORS[f.rarity]}`}>
                    {f.rarity}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500">{c.note}</p>
            </Link>
          );
        })}
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>Mutation Hunting Checklist</h2>
        <ul>
          <li>Empty your backpack <strong>before</strong> the Server Hole opens — a full bag caps a 4x mutation run.</li>
          <li>Never sell mid-event. Every second of the window is worth 4x cash.</li>
          <li>Use your best rod. A mutation you cannot land is worth nothing — see <Link href="/mistakes">common mistakes</Link>.</li>
          <li>Fish the night cycle too: night-exclusive species have far higher base values, so their mutations multiply harder.</li>
          <li>Log every new species in the index. +10 luck per milestone compounds into more mutations over time.</li>
        </ul>
        <p className="text-sm text-gray-500">
          Note: exact per-tier multipliers are still being verified in-game. This page tracks confirmed mutation
          sightings rather than publishing unverified numbers.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
