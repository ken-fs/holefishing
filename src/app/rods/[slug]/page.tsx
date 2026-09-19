import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getRods, getRodBySlug, getAllFish } from '@/lib/data';
import { generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

const TIER_STYLE: Record<string, string> = {
  S: 'border-amber-400 text-amber-500',
  A: 'border-violet-400 text-violet-500',
  B: 'border-sky-400 text-sky-500',
  C: 'border-emerald-400 text-emerald-500',
  D: 'border-gray-400 text-gray-500',
};

export function generateStaticParams() {
  return getRods().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const rod = getRodBySlug(slug);
  if (!rod) return {};
  const weight = rod.maxWeightKg >= 999999 ? 'unlimited weight' : `~${rod.maxWeightKg.toLocaleString()} kg max weight`;
  return {
    title: `${rod.name} — Hole Fishing Rod Guide`,
    description: `${rod.name} in Hole Fishing (Roblox): ${rod.priceText}, tier ${rod.tier}, ${weight}. ${rod.note}`,
    alternates: { canonical: `/rods/${slug}/` },
  };
}

export default async function RodDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const rod = getRodBySlug(slug);
  if (!rod) notFound();

  const rods = getRods();
  const idx = rods.findIndex((r) => r.slug === slug);
  const prev = idx > 0 ? rods[idx - 1] : undefined;
  const next = idx < rods.length - 1 ? rods[idx + 1] : undefined;

  // 承重范围内最值钱的捕获（有实测重量的鱼）
  const landable = getAllFish()
    .filter((f) => f.weightKg && f.weightKg <= rod.maxWeightKg)
    .sort((a, b) => (b.weightKg ?? 0) - (a.weightKg ?? 0))
    .slice(0, 5);

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Rod Tier List', url: '/rods' },
    { name: rod.name, url: `/rods/${rod.slug}` },
  ]);

  const FAQS = [
    {
      question: `How much does the ${rod.name} cost in Hole Fishing?`,
      answer: `The ${rod.name} costs ${rod.priceText}.${rod.priceVerified === false ? ' (Price estimated — this rod is confirmed to exist but its exact price is still being verified.)' : ''}`,
    },
    {
      question: `Is the ${rod.name} worth buying?`,
      answer: rod.note,
    },
    {
      question: `What is the max weight of the ${rod.name}?`,
      answer:
        rod.maxWeightKg >= 999999
          ? `The ${rod.name} has effectively unlimited weight capacity — nothing in the game escapes it on weight alone.`
          : `The ${rod.name} handles fish up to ~${rod.maxWeightKg.toLocaleString()} kg. Heavier fish escape with the "too strong" message — upgrade before targeting them.`,
    },
  ];
  const faq = generateFAQSchema(FAQS);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <p className="text-sm text-gray-400 mb-2">
        <Link href="/rods" className="hover:underline">← Rod Tier List</Link>
      </p>
      <h1 className="text-3xl font-black mb-2">
        {rod.name}
        {rod.priceVerified === false && (
          <span className="ml-3 text-xs px-2 py-1 rounded border border-amber-400/50 text-amber-600 dark:text-amber-400 font-semibold align-middle">price est.</span>
        )}
      </h1>
      <p className="text-gray-500 mb-8">Rod #{rod.order} of {rods.length}. Data verified {getCurrentDateString()}.</p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-400 mb-1">Tier</p>
          <p className={`inline-block text-sm px-2 py-0.5 rounded border font-black ${TIER_STYLE[rod.tier] ?? TIER_STYLE.C}`}>{rod.tier}</p>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-400 mb-1">Price</p>
          <p className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{rod.priceText}</p>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-400 mb-1">Max Weight</p>
          <p className="font-mono font-bold">{rod.maxWeightKg >= 999999 ? '∞' : `~${rod.maxWeightKg.toLocaleString()} kg`}</p>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-400 mb-1">Ladder Position</p>
          <p className="font-mono font-bold">#{rod.order}</p>
        </div>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>Worth Buying?</h2>
        <p>{rod.note}</p>
        <p>
          The golden rule of the ladder: <strong>upgrade rod and hole size together</strong>, and never skip more than
          one tier — &quot;too strong&quot; escapes waste casts. See the <Link href="/rods">full tier list</Link> for
          the recommended path, or the <Link href="/calculator">progression calculator</Link> for your exact breakpoint.
        </p>
      </section>

      {landable.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">Heaviest Confirmed Catches Within Capacity</h2>
          <ul className="space-y-2">
            {landable.map((f) => (
              <li key={f.slug} className="flex items-baseline justify-between gap-3 p-3 rounded-lg border border-gray-100 dark:border-gray-800/60">
                <Link href={`/fish/${f.slug}`} className="font-semibold hover:underline">{f.name}</Link>
                <span className="text-sm text-gray-500 font-mono whitespace-nowrap">{f.weightKg} kg · {f.rarity}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav className="flex justify-between gap-4 border-t border-gray-200 dark:border-gray-800 pt-6">
        {prev ? (
          <Link href={`/rods/${prev.slug}`} className="font-semibold hover:underline">← {prev.name}</Link>
        ) : <span />}
        {next ? (
          <Link href={`/rods/${next.slug}`} className="font-semibold hover:underline text-right">{next.name} →</Link>
        ) : <span />}
      </nav>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
