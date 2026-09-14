import type { Metadata } from 'next';
import { getRods } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Rod Tier List (${getCurrentDateString()}) — All Rods Ranked`,
  description:
    'Complete Hole Fishing rod tier list: all 12 rods from Starter to Hacker Rod with prices, max weight, and which rods are worth buying vs skipping.',
  keywords: ['hole fishing rod tier list', 'hole fishing best rod', 'hole fishing rods', 'hacker rod hole fishing', 'hole fishing rod progression'],
  path: '/rods',
});

const TIER_STYLE: Record<string, string> = {
  'S+': 'bg-red-500/15 text-red-500 border-red-500/40',
  S: 'bg-orange-500/15 text-orange-500 border-orange-500/40',
  A: 'bg-amber-500/15 text-amber-600 border-amber-500/40',
  B: 'bg-green-500/15 text-green-600 border-green-500/40',
  C: 'bg-blue-500/15 text-blue-600 border-blue-500/40',
  D: 'bg-gray-500/15 text-gray-500 border-gray-500/40',
};

export default function RodsPage() {
  const rods = getRods();
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Rod Tier List', url: '/rods' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'What is the best rod in Hole Fishing?',
      answer:
        'The Hacker Rod ($320,000,000) is the final and best rod — its weight capacity is effectively unlimited. Before that, the Candy Cane Rod (~$26M) is the best value late-game rod.',
    },
    {
      question: 'Which rods should I skip in Hole Fishing?',
      answer:
        'Most players can skip the Bone Rod (~$11M) and go straight from Magic Rod to Candy Cane Rod if they grind the Server Hole event. Never skip more than one tier — "too strong" escapes waste casts.',
    },
    {
      question: 'What does max weight do in Hole Fishing?',
      answer:
        'Every fish has a weight. If the hooked fish exceeds your rod\'s max weight, you get the "too strong" message and lose the catch. Bigger holes spawn heavier fish, so rod and hole upgrades must stay balanced.',
    },
    {
      question: 'How much does the Hacker Rod cost in Hole Fishing?',
      answer:
        '$320,000,000 — it is the 12th and final rod, with effectively unlimited weight capacity. Expect a long grind funded by night fishing and Server Hole events.',
    },
    {
      question: 'Is the Cactus Rod worth buying in Hole Fishing?',
      answer:
        'Yes. At ~$150,000 the Cactus Rod sits in the critical early-mid game bracket (~80 kg capacity). It bridges the gap between the cheap early rods and the $650K Tree Rod tier.',
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Rod Tier List</h1>
      <p className="text-gray-500 mb-8">
        All {rods.length} rods in progression order. Prices verified from gameplay — {getCurrentDateString()}.
      </p>

      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800 text-left">
              <th className="py-2 pr-3">#</th>
              <th className="py-2 pr-3">Rod</th>
              <th className="py-2 pr-3">Tier</th>
              <th className="py-2 pr-3">Price</th>
              <th className="py-2 pr-3">Max Weight</th>
              <th className="py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rods.map((r) => (
              <tr key={r.slug} className="border-b border-gray-100 dark:border-gray-800/60 align-top">
                <td className="py-3 pr-3 text-gray-400 font-mono">{r.order}</td>
                <td className="py-3 pr-3 font-bold whitespace-nowrap">{r.name}</td>
                <td className="py-3 pr-3">
                  <span className={`text-xs px-2 py-0.5 rounded border font-black ${TIER_STYLE[r.tier] ?? TIER_STYLE.C}`}>{r.tier}</span>
                </td>
                <td className="py-3 pr-3 font-mono text-emerald-600 dark:text-emerald-400 whitespace-nowrap">{r.priceText}</td>
                <td className="py-3 pr-3 font-mono whitespace-nowrap">{r.maxWeightKg >= 999999 ? '∞' : `~${r.maxWeightKg.toLocaleString()} kg`}</td>
                <td className="py-3 text-gray-500">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>Recommended Upgrade Path</h2>
        <p>
          Rods are the #1 progression gate in Hole Fishing — but don&apos;t rush them blindly. The golden rule:
          <strong> upgrade rod and hole size together</strong>. A huge hole with a weak rod means constant
          &quot;too strong&quot; escapes; a strong rod with a tiny hole wastes its weight capacity.
        </p>
        <ul>
          <li><strong>Early ($0–$150K):</strong> Stone → Golden → Leaf → Cactus. Buy every tier, they&apos;re cheap.</li>
          <li><strong>Mid ($150K–$5M):</strong> Tree → Pirate ($2M, 1,200 kg — the biggest jump in the game) → Magic.</li>
          <li><strong>Late ($5M+):</strong> Consider skipping Bone Rod → Candy Cane → Void → Hacker ($320M, final).</li>
        </ul>
        <p className="text-sm text-gray-500">
          Note: prices marked ~ are community-verified approximations and may shift with game updates.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
