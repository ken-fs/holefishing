import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing FAQ (${getCurrentDateString()}) — Codes, Money, Rods & Common Questions`,
  description:
    'Every common Hole Fishing (Roblox) question in one place: are there codes, why fish escape as "too strong", fastest money methods, night fishing, mutations, and the Server Hole event.',
  keywords: ['hole fishing faq', 'hole fishing questions', 'hole fishing how to', 'hole fishing roblox', 'hole fishing too strong', 'hole fishing help'],
  path: '/faq',
});

const FAQS = [
  {
    question: 'Are there any Hole Fishing codes right now?',
    answer:
      'No. Hole Fishing does not have a code redemption system as of the Desert Event update. Our codes page is monitored daily — the system appears here first if it gets added.',
  },
  {
    question: 'Why do fish escape with the "too strong" message?',
    answer:
      'Your rod’s max weight is below the fish’s class. Weight overflow hooks are technically possible but unreliable — upgrade your rod instead of wasting casts. The rule: upgrade rod and hole size together, and never skip more than one rod tier.',
  },
  {
    question: 'What is the fastest way to make money in Hole Fishing?',
    answer:
      'In order: buy every rod tier on the ladder (each unlocks heavier, more valuable fish), fish during the Server Hole event (4x sell value windows), stack sell-value upgrades, and prioritise night-exclusive fish, which sell for significantly more.',
  },
  {
    question: 'What is the Server Hole event?',
    answer:
      'A server-wide event where every catch sells for 4x value while it is active. It is the single biggest money multiplier in the game — save your best rods and luck for these windows.',
  },
  {
    question: 'Is night fishing worth it?',
    answer:
      'Yes. A separate set of night-exclusive fish spawns during the in-game night cycle, and they sell for significantly more than day catches. The Night Rod is built for this and sits between the Cactus and Tree Rod on the ladder.',
  },
  {
    question: 'How do mutations work?',
    answer:
      'Caught fish can roll Big / Large / Huge / Giant mutations, which multiply their sell value. Roll odds scale with hole size and luck sources (index milestones, potions). Mutation sightings are tracked on our mutations page.',
  },
  {
    question: 'What rod should I buy next?',
    answer:
      'Follow the ladder without skipping tiers: early — Stone → Golden → Leaf → Cactus; mid — Night → Tree → Magma → Pirate → Magic; late — Candy Cane → Alien → Royal → Hacker. Use the progression calculator to see the exact breakpoint for your income.',
  },
  {
    question: 'How many fish are in Hole Fishing?',
    answer:
      '45 confirmed fish across seven rarities (Common → Uncommon → Rare → Epic → Legendary → Mythical → Secret), plus night-exclusive variants. Each one has its own page in the fish index with value ranges and rod requirements.',
  },
  {
    question: 'Are Hole Fishing scripts / exploits safe to use?',
    answer:
      'No. Third-party script hubs commonly bundle stealers, and exploiting risks a permanent ban on a game where all progress is grind-based. Everything scripts claim to do is achievable faster through legitimate stacking (Server Hole + night fishing + mutations).',
  },
];

export default function FAQPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' },
  ]);
  const faq = generateFAQSchema(FAQS);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing FAQ</h1>
      <p className="text-gray-500 mb-8">
        The questions everyone asks, answered with current data. Updated {getCurrentDateString()}.
      </p>

      <div className="space-y-3 mb-10">
        {FAQS.map((f) => (
          <details key={f.question} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
            <summary className="font-semibold cursor-pointer">{f.question}</summary>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{f.answer}</p>
          </details>
        ))}
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>Go Deeper</h2>
        <ul>
          <li><Link href="/codes">Codes status</Link> — monitored daily</li>
          <li><Link href="/rods">Rod tier list</Link> — all 16 rods with prices and capacity</li>
          <li><Link href="/money-guide">Money guide</Link> — stage-by-stage income plan</li>
          <li><Link href="/server-hole">Server Hole event</Link> — the 4x window strategy</li>
          <li><Link href="/night-fishing">Night fishing</Link> — the exclusive set and the Night Rod</li>
          <li><Link href="/mutations">Mutations</Link> — roll mechanics and confirmed sightings</li>
          <li><Link href="/fish">Fish index</Link> — all 45 fish, one page each</li>
          <li><Link href="/mistakes">Common mistakes</Link> — the traps that stall progression</li>
        </ul>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
