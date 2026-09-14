import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllFish, getFishBySlug, RARITY_COLORS } from '@/lib/data';
import { generateBreadcrumbSchema } from '@/lib/seo';

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

      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-xs text-gray-400 uppercase mb-1">Value Range</div>
          <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{fish.valueRange}</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-xs text-gray-400 uppercase mb-1">Best Time</div>
          <div className="font-bold">{fish.time === 'any' ? 'Day & Night' : fish.time === 'night' ? 'Night' : 'Day'}</div>
        </div>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>About the {fish.name}</h2>
        <p>{fish.note}</p>
        <p>
          Values shown are base ranges — your actual sell price scales with sell-value upgrades, mutations
          (Big / Large / Huge / Giant multiply weight and value), and Server Hole 4x cash windows.
        </p>
        {fish.rarity === 'Secret' && (
          <p>
            <strong>{fish.name}</strong> is one of the two secret fish. See the{' '}
            <Link href="/secret-fish">Secret Fish guide</Link> for catch strategy.
          </p>
        )}
      </section>

      {related.length > 0 && (
        <section>
          <h2 className="text-lg font-bold mb-3">Other {fish.rarity} Fish</h2>
          <div className="grid grid-cols-2 gap-3">
            {related.map((f) => (
              <Link key={f.slug} href={`/fish/${f.slug}`} className="p-3 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-cyan-500 transition-colors text-sm">
                <div className="font-bold">{f.name}</div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-mono">{f.valueRange}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </div>
  );
}
