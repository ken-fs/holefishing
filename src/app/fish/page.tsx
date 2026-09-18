import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllFish, RARITY_ORDER, RARITY_COLORS } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Fish Index (${getCurrentDateString()}) — All Fish, Rarities & Values`,
  description:
    'Complete Hole Fishing fish list: every fish from Common to Secret, day vs night catches, value ranges and mutation notes. The only complete Hole Fishing wiki.',
  keywords: ['hole fishing fish list', 'hole fishing fish index', 'hole fishing all fish', 'hole fishing wiki', 'hole fishing rarest fish'],
  path: '/fish',
});

export default function FishIndexPage() {
  const fish = getAllFish();
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Fish Index', url: '/fish' },
  ]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Fish Index</h1>
      <p className="text-gray-500 mb-8">
        {fish.length} fish documented — day &amp; night catches, all rarities. Updated {getCurrentDateString()}.
      </p>

      {RARITY_ORDER.map((rarity) => {
        const group = fish.filter((f) => f.rarity === rarity);
        if (!group.length) return null;
        return (
          <section key={rarity} className="mb-8">
            <h2 className="text-xl font-black mb-3 flex items-center gap-2">
              <span className={`text-xs px-2 py-0.5 rounded-full border font-bold uppercase ${RARITY_COLORS[rarity]}`}>{rarity}</span>
              <span className="text-sm text-gray-400 font-normal">({group.length})</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {group.map((f) => (
                <Link key={f.slug} href={`/fish/${f.slug}`} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-cyan-500 dark:hover:border-cyan-600 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold">
                      {f.name}
                      {f.unverified && (
                        <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded border border-amber-400/50 text-amber-600 dark:text-amber-400 font-semibold align-middle">unverified</span>
                      )}
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase font-semibold">
                      {f.time === 'any' ? 'Any time' : f.time === 'night' ? '🌙 Night' : '☀️ Day'}
                    </span>
                  </div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400 font-mono mb-1">{f.valueRange}</div>
                  <p className="text-xs text-gray-500 line-clamp-2">{f.note}</p>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <section className="prose prose-gray dark:prose-invert max-w-none mt-10">
        <h2>How Complete Is This List?</h2>
        <p>
          This is the most complete public Hole Fishing species list we know of — {fish.length} entries, each with its own
          page. Community wikis covering the same game deliberately publish only &quot;illustrative&quot; examples rather than a
          full catalog. We publish what creators have actually shown on camera and mark anything single-source as{' '}
          <span className="text-[10px] px-1.5 py-0.5 rounded border border-amber-400/50 text-amber-600 dark:text-amber-400 font-semibold">unverified</span>.
          Species sighted but not yet confirmed — including <strong>Stingray</strong>, <strong>Humpback Whale</strong> and{' '}
          <strong>Mackerel</strong> — are being tracked and will get pages once a second source lands.
        </p>
        <h2>Day vs Night Fishing</h2>
        <p>
          Hole Fishing has a day/night cycle. Night-exclusive fish — Squid, Jellyfish, Moray Eel, Lionfish,
          Ghost Catfish, and the legendary Asian Turtle — sell for significantly more than day catches.
          Filling your night index grants the same +luck milestones as the day index, so don&apos;t sleep on it.
        </p>
        <h2>Mutations</h2>
        <p>
          Any fish can spawn as a <strong>Big</strong>, <strong>Large</strong>, <strong>Huge</strong> or <strong>Giant</strong> mutation
          (and Golden variants exist too). Mutations multiply both weight and value — a Huge Uncommon Snapper
          can out-earn a base Epic.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </div>
  );
}
