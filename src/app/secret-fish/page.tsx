import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Secret Fish (${getCurrentDateString()}) — Glacial Wyrm, Alien & Devourer`,
  description:
    'How to catch Hole Fishing secret fish: Glacial Wyrm ($3B+), the Alien, and the newly reported Magma Fin Devourer ($400M). Rarity, strategy and what is confirmed so far.',
  keywords: ['hole fishing secret fish', 'glacial wyrm hole fishing', 'hole fishing alien fish', 'magma fin devourer', 'hole fishing secrets'],
  path: '/secret-fish',
});

export default function SecretFishPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Secret Fish', url: '/secret-fish' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'What are the secret fish in Hole Fishing?',
      answer:
        'Three secret-rarity catches have been reported: the Glacial Wyrm (confirmed catch worth $3+ billion), the Alien (conditions still unverified), and the Magma Fin Devourer — a $400M catch reported in creator gameplay but not yet confirmed by a second source. Secrets are ultra-rare and luck-gated.',
    },
    {
      question: 'How do you catch the Glacial Wyrm in Hole Fishing?',
      answer:
        'Confirmed catches came from maxed or near-maxed setups: best available rod, large hole size, stacked luck (index milestones + luck potions), and server-hole windows. There is no known location trick — it is a raw rarity roll.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Secret Fish</h1>
      <p className="text-gray-500 mb-8">The index hides secret slots — here is everything confirmed, and everything still being verified. Updated {getCurrentDateString()}.</p>

      <div className="space-y-4 mb-10">
        <div className="p-5 rounded-xl border border-cyan-300 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/30">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-black">❄️ Glacial Wyrm</h2>
            <span className="text-xs px-2 py-0.5 rounded-full border font-bold uppercase bg-cyan-100 text-cyan-700 border-cyan-300 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800">Secret #1</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            <strong className="text-emerald-600 dark:text-emerald-400 font-mono">$3,000,000,000+</strong> — the single most valuable confirmed catch in Hole Fishing.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            First widely-seen catch was broadcast in the global catch feed during a normal daytime session on a near-maxed account.
            Multiple players caught it within the same window, suggesting either a luck-spike event or pure synchronized RNG.
          </p>
          <Link href="/fish/glacial-wyrm" className="inline-block mt-3 text-sm text-cyan-600 dark:text-cyan-400 hover:underline">Glacial Wyrm details →</Link>
        </div>

        <div className="p-5 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-black">👽 Alien</h2>
            <span className="text-xs px-2 py-0.5 rounded-full border font-bold uppercase bg-cyan-100 text-cyan-700 border-cyan-300 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800">Secret #2</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Referenced in gameplay as an ultra-rare luck chase (&quot;I want a chance on Alien&quot;). Value and conditions are still
            being verified — no confirmed public catch footage with values yet. We update this page the moment data lands.
          </p>
          <Link href="/fish/alien" className="inline-block mt-3 text-sm text-cyan-600 dark:text-cyan-400 hover:underline">Alien details →</Link>
        </div>

        <div className="p-5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-black">🔥 Magma Fin Devourer</h2>
            <span className="text-xs px-2 py-0.5 rounded-full border font-bold uppercase border-amber-400/50 text-amber-600 dark:text-amber-400">Unverified</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            <strong className="text-emerald-600 dark:text-emerald-400 font-mono">~$400,000,000</strong> — reported as a third secret in creator gameplay.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            A huge finned catch that arrived with a cutscene and sold for roughly $400M in a single creator video. Only
            one sighting so far — we are waiting on a second independent report before treating it as confirmed. Note
            that the in-game index showed only two secret slots at launch, so this may be a newly added secret.
          </p>
          <Link href="/fish/magma-fin-devourer" className="inline-block mt-3 text-sm text-amber-600 dark:text-amber-400 hover:underline">Magma Fin Devourer details →</Link>
        </div>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>How to Maximize Secret Fish Odds</h2>
        <ul>
          <li><strong>Max your luck stack</strong> — index milestones (+10 each), hole size (luck scales with size), and luck potions all multiply together.</li>
          <li><strong>Best rod available</strong> — secrets are heavy; a weak rod means &quot;too strong&quot; heartbreak.</li>
          <li><strong>Fish server holes</strong> — the event hole rolls mutations and boosted rarity.</li>
          <li><strong>Play during update windows</strong> — secret catch rates historically spike right after updates (unconfirmed, but the Glacial Wyrm wave fits the pattern).</li>
        </ul>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
