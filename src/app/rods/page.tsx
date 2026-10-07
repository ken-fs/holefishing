import type { Metadata } from 'next';
import Link from 'next/link';
import { getRods, formatKg } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Rod Tier List (${getCurrentDateString()}) — All Rods Ranked`,
  description:
    'Every Hole Fishing rod from the Starter Rod to the $10Qi Rainbow Godly Rod, re-read from the in-game shop: prices, reel speed, max weight and which to skip.',
  keywords: ['hole fishing rod tier list', 'hole fishing best rod', 'hole fishing rods', 'hole fishing rod', 'rainbow godly rod hole fishing', 'hacker rod hole fishing', 'hole fishing rod progression'],
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
        'Right now the top cash rod is the Rainbow Godly Rod: x20.50 reel speed and 6.5M kg for $10Qi (Oct 4 shop). Below it sit the Planet (4.5M kg), Frosty (3M kg) and Moon (2M kg) rods. For most players the realistic goal is the Hacker Rod ($320M) and then the Bluesteel Rod ($26B).',
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
        '$320,000,000 for x4.75 reel speed and 20,000 kg. It used to be the last rod, but the Oct 4 shop has more than a dozen rods above it, starting with the Bluesteel Rod at $26B.',
    },
    {
      question: 'Is the Cactus Rod worth buying in Hole Fishing?',
      answer:
        'Yes. It only costs $7,500 for 80 kg and x1.36 reel speed, so it pays for itself fast. After it, save for the Tree Rod and then the Knight Rod ($150,000).',
    },
    {
      question: 'What happened to the Leaf Rod and Night Rod?',
      answer:
        'They are not in the shop anymore. On Oct 4 footage the ladder goes Golden → Cactus → Tree → Knight with no Leaf or Night Rod in between, so they look removed. Their old pages are kept here with a "Not in shop" label.',
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Rod Tier List</h1>
      <p className="text-gray-500 mb-8">
        All {rods.length} rods we know about, in shop order. Re-read from the in-game Rods shop on Oct 4–5 footage — {getCurrentDateString()}.
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
                <td className="py-3 pr-3 font-bold whitespace-nowrap">
                  <Link href={`/rods/${r.slug}`} className="hover:underline">{r.name}</Link>
                  {r.priceVerified === false && (
                    <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded border border-amber-400/50 text-amber-600 dark:text-amber-400 font-semibold align-middle">est.</span>
                  )}
                </td>
                <td className="py-3 pr-3">
                  <span className={`text-xs px-2 py-0.5 rounded border font-black ${TIER_STYLE[r.tier] ?? TIER_STYLE.C}`}>{r.tier}</span>
                </td>
                <td className="py-3 pr-3 font-mono text-emerald-600 dark:text-emerald-400 whitespace-nowrap">{r.priceText}</td>
                <td className="py-3 pr-3 font-mono whitespace-nowrap">{formatKg(r.maxWeightKg)}</td>
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
          <li><strong>Early (up to $150K):</strong> Stone ($1K) → Golden ($2.5K) → Cactus ($7.5K) → Tree → Knight ($150K). They&apos;re all cheap, so buy every one.</li>
          <li><strong>Mid ($150K–$26M):</strong> Magma ($650K) → Pirate ($2M, 1,200 kg, the biggest jump) → Magic → Bone ($11M) → Candy Cane ($26M). Bone is the one people skip.</li>
          <li><strong>Late ($26M–$320M):</strong> Alien ($60M) → Royal ($140M) → Hacker ($320M).</li>
          <li><strong>Past Hacker:</strong> Bluesteel ($26B) → Candy Rod ($720B) → Lava → Cosmic → Toy ($55T) → Jungle ($96T) → Radioactive ($200T) → Beach ($240T) → Moon → Frosty → Planet → Rainbow Godly ($10Qi). The Lucky Rod only comes from the spin wheel.</li>
        </ul>
        <p>
          Heads up: the current shop doesn&apos;t match older guides, including our own September list. The Leaf Rod and
          Night Rod aren&apos;t in it, early prices are lower (Golden is $2,500, Cactus is $7,500), and there&apos;s a Knight
          Rod at $150,000. Two rods are
          Robux-only lobby pedestals rather than shop rods: the Godly Rod and the limited-stock Void Ghost Rod. Night fish
          still pay more, so the <Link href="/night-fishing">night fishing guide</Link> still applies.
        </p>
        <p className="text-sm text-gray-500">
          Rods tagged <span className="text-[10px] px-1.5 py-0.5 rounded border border-amber-400/50 text-amber-600 dark:text-amber-400 font-semibold">est.</span>{' '}
          exist, but we haven&apos;t read their cash price off the shop yet (or they&apos;re Robux-only, spin-wheel-only,
          an event reward, or no longer sold). They&apos;re left out of the <Link href="/calculator">calculator</Link>.
          T = trillion, Qi = quintillion.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
