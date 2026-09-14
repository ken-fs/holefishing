import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllFish, getFishBySlug, getRods, RARITY_COLORS, type Fish } from '@/lib/data';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';

export function generateStaticParams() {
  return getAllFish().map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const fish = getFishBySlug(slug);
  if (!fish) return {};
  return {
    title: `${fish.name} — Hole Fishing Fish Guide`,
    description: `${fish.name} is a ${fish.rarity} ${fish.time === 'night' ? 'night-exclusive ' : ''}fish in Hole Fishing (Roblox). Value: ${fish.valueRange}. ${fish.note}`,
    alternates: { canonical: `/fish/${slug}/` },
  };
}

/** 按稀有度推荐最低鱼竿档位（基于真实竿价/承重数据） */
function rodAdviceFor(fish: Fish): { text: string; rodSlug?: string; rodName?: string } {
  const rods = getRods();
  if (fish.weightKg) {
    const match = rods.find((r) => r.maxWeightKg >= fish.weightKg!);
    if (match) {
      return {
        text: `A confirmed ${fish.weightKg} ${fish.weightKg >= 100 ? 'kg-class catch' : 'kg catch'} — the ${match.name} (${match.priceText}) is the cheapest rod that can land it reliably. Anything lighter risks the "too strong" escape.`,
        rodSlug: match.slug,
        rodName: match.name,
      };
    }
  }
  const byRarity: Record<string, string> = {
    Common: 'Any rod lands commons — including the free Starter Rod you spawn with.',
    Uncommon: 'Any rod works, though the Stone Rod ($1,000) makes uncommons noticeably more consistent.',
    Rare: 'Rares show up once your hole has grown a few sizes. A Golden Rod ($7,500) or better is recommended.',
    Epic: 'Epics are heavy and luck-gated — aim for the Cactus Rod (~$150K) or Pirate Rod ($2M) tier before farming them.',
    Legendary: 'Legendaries need serious weight capacity and stacked luck. Magic Rod tier (~$4.8M) or better, plus index milestones.',
    Mythical: 'Mythicals are end-game catches. Bring a Candy Cane Rod (~$26M) or better and every luck source you own.',
    Secret: 'Secrets are the rarest rolls in the game — Hacker Rod territory with maxed luck stacking (index + potions + big hole).',
  };
  return { text: byRarity[fish.rarity] ?? byRarity.Common };
}

export default async function FishDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const fish = getFishBySlug(slug);
  if (!fish) notFound();

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Fish Index', url: '/fish' },
    { name: fish.name, url: `/fish/${fish.slug}` },
  ]);

  const related = getAllFish().filter((f) => f.rarity === fish.rarity && f.slug !== fish.slug).slice(0, 4);
  const rodAdvice = rodAdviceFor(fish);

  const FAQS = [
    {
      question: `What rarity is the ${fish.name} in Hole Fishing?`,
      answer: `The ${fish.name} is a ${fish.rarity} fish. Rarity order in Hole Fishing runs Common → Uncommon → Rare → Epic → Legendary → Mythical → Secret.`,
    },
    {
      question: `When can you catch the ${fish.name}?`,
      answer:
        fish.time === 'night'
          ? `The ${fish.name} is night-exclusive — it only spawns during the in-game night cycle. Night fish sell for significantly more than day catches.`
          : fish.time === 'day'
            ? `The ${fish.name} spawns during the day cycle. (Night brings a separate exclusive set — see the fish index.)`
            : `The ${fish.name} can appear at any time of day.`,
    },
    {
      question: `How much is the ${fish.name} worth in Hole Fishing?`,
      answer: `Base observed value: ${fish.valueRange}. Your actual sale price scales with sell-value upgrades, Big/Large/Huge/Giant mutations, and 4x Server Hole windows.`,
    },
  ];
  const faq = generateFAQSchema(FAQS);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-sm text-gray-400 mb-4">
        <Link href="/fish" className="hover:underline">Fish Index</Link> / {fish.name}
      </nav>

      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <h1 className="text-3xl font-black">{fish.name}</h1>
        <span className={`text-xs px-2 py-0.5 rounded-full border font-bold uppercase ${RARITY_COLORS[fish.rarity]}`}>{fish.rarity}</span>
      </div>
      <p className="text-gray-500 mb-8">
        {fish.time === 'any' ? 'Available any time' : fish.time === 'night' ? '🌙 Night-exclusive catch' : '☀️ Day-time catch'} · Hole Fishing (Roblox)
      </p>

      <div className={`grid ${fish.weightKg ? 'grid-cols-3' : 'grid-cols-2'} gap-3 mb-8`}>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-xs text-gray-400 uppercase mb-1">Value Range</div>
          <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400 tabular">{fish.valueRange}</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-xs text-gray-400 uppercase mb-1">Best Time</div>
          <div className="font-bold">{fish.time === 'any' ? 'Day & Night' : fish.time === 'night' ? 'Night' : 'Day'}</div>
        </div>
        {fish.weightKg && (
          <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="text-xs text-gray-400 uppercase mb-1">Confirmed Weight</div>
            <div className="font-bold tabular">{fish.weightKg >= 1000 ? `${fish.weightKg / 1000} t` : `${fish.weightKg} kg`}</div>
          </div>
        )}
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-8">
        <h2>About the {fish.name}</h2>
        <p>{fish.note}</p>
      </section>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-8">
        <h2>How to Catch the {fish.name}</h2>
        {fish.time === 'night' && (
          <p>
            <strong>Night only.</strong> The {fish.name} never spawns during the day — when the sky darkens,
            drop everything and fish the night cycle out. Night catches also feed the separate night index
            (permanent +luck milestones).
          </p>
        )}
        <p>{rodAdvice.text}</p>
        <p>
          Luck matters as much as the rod: grow your <Link href="/beginner-guide">hole size</Link> for passive luck,
          complete index milestones (+10 luck each), and save potions for{' '}
          <Link href="/server-hole">Server Hole windows</Link> when rarity rolls are boosted.
        </p>
      </section>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>Value &amp; Mutations</h2>
        <p>
          The {fish.name} sells in the <strong>{fish.valueRange}</strong> base range. Three things multiply that number:
          <strong> sell-value upgrades</strong> (permanent account multiplier),{' '}
          <strong>mutations</strong> — Big / Large / Huge / Giant variants multiply weight and price — and the{' '}
          <Link href="/server-hole">Server Hole</Link> event, which pays 4x cash for roughly 60 seconds.
          A mutated {fish.name} sold during a Server Hole window is the best-case scenario.
        </p>
      </section>

      {fish.rarity === 'Secret' && (
        <div className="mb-10 p-4 rounded-xl border border-cyan-300 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/30 text-sm">
          🎣 The {fish.name} is one of the two secret fish — full hunt strategy lives in the{' '}
          <Link href="/secret-fish" className="underline font-semibold">Secret Fish guide</Link>.
        </div>
      )}

      <section className="mb-10">
        <h2 className="text-lg font-bold mb-3">{fish.name} FAQ</h2>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <div key={f.question} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
              <h3 className="font-semibold text-sm mb-1">{f.question}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-3">Other {fish.rarity} Fish</h2>
          <div className="grid grid-cols-2 gap-3">
            {related.map((f) => (
              <Link key={f.slug} href={`/fish/${f.slug}`} className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-cyan-500 transition-colors text-sm">
                <div className="font-bold">{f.name}</div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono tabular">{f.valueRange}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
