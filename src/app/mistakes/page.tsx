import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Common Mistakes (${getCurrentDateString()}) — Fix Your Progress`,
  description:
    'The mistakes slowing down your Hole Fishing progress: outgrowing your rod, skipping the index, wasting Server Hole windows, and seven more fixes that speed up your grind.',
  keywords: ['hole fishing mistakes', 'hole fishing tips', 'hole fishing too strong', 'hole fishing progress slow'],
  path: '/mistakes',
});

const MISTAKES = [
  {
    title: 'Letting your hole outgrow your rod',
    symptom: 'Constant "too strong" escapes on fish you worked to hook.',
    fix: 'Stop buying hole upgrades until your rod catches up. Hole size raises the weight of what you hook, so rod and hole must climb together.',
    link: { href: '/upgrades', label: 'Upgrade guide' },
  },
  {
    title: 'Fishing through a Server Hole window',
    symptom: 'You notice the event message and keep fishing your own hole.',
    fix: 'The Server Hole pays 4x cash for about 60 seconds. Drop everything and run to it — nothing else in the game pays that well.',
    link: { href: '/server-hole', label: 'Server Hole guide' },
  },
  {
    title: 'Arriving at the Server Hole with a full backpack',
    symptom: 'Your inventory caps out mid-event and casts are wasted.',
    fix: 'Sell your inventory before the window opens. Watch the ~20 minute cooldown and clear your bag in advance.',
    link: { href: '/money-guide', label: 'Money guide' },
  },
  {
    title: 'Sleeping on night fishing',
    symptom: 'You keep grinding commons at 2 AM in-game.',
    fix: 'Night-exclusive species are worth multiples of day catches. When the sky darkens, fish — every second of the night cycle.',
    link: { href: '/night-fishing', label: 'Night fishing guide' },
  },
  {
    title: 'Ignoring the fish index',
    symptom: 'You catch the same five commons on repeat.',
    fix: 'Each new species fills the index and every milestone grants permanent +10 luck. Ten different commons beat fifty of the same fish.',
    link: { href: '/fish', label: 'Fish index' },
  },
  {
    title: 'Skipping sell-value upgrades',
    symptom: 'You buy rod after rod while your income per catch stays flat.',
    fix: 'Sell value is a permanent multiplier on every sale and compounds with Server Hole and mutations. It is the cheapest income upgrade in the game.',
    link: { href: '/upgrades', label: 'Upgrade guide' },
  },
  {
    title: 'Buying backpack capacity too early',
    symptom: 'You spent your first savings on carry slots instead of the Golden Rod.',
    fix: 'Backpack is convenience, not power. Rod first, then sell value, then hole, then backpack.',
    link: { href: '/beginner-guide', label: 'Beginner guide' },
  },
  {
    title: 'Selling during a Server Hole instead of after',
    symptom: 'You cash out mid-event and lose the 4x multiplier on those catches.',
    fix: 'Sell before the window opens or after it closes — never during. Every event cast should be a fresh catch.',
    link: { href: '/server-hole', label: 'Server Hole strategy' },
  },
  {
    title: 'Skipping more than one rod tier',
    symptom: 'You jump from mid-tier straight to end-game and lose everything in between.',
    fix: 'Skipping the Bone Rod (~$11M) can work. Skipping two tiers leaves you under-weighted for the fish your hole now spawns.',
    link: { href: '/rods', label: 'Rod tier list' },
  },
  {
    title: 'Grinding without a target',
    symptom: 'You have no idea how many casts stand between you and your next rod.',
    fix: 'Pick your next rod, price it, and divide by your average catch value. The calculator does this for you.',
    link: { href: '/calculator', label: 'Progression calculator' },
  },
];

export default function MistakesPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Common Mistakes', url: '/mistakes' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'Why do my fish keep escaping with "too strong" in Hole Fishing?',
      answer:
        'The fish you hooked is heavier than your rod\'s max weight. Upgrade the rod, or pause hole-size upgrades until it catches up — hole size increases the weight of the fish you hook.',
    },
    {
      question: 'What is the biggest mistake new Hole Fishing players make?',
      answer:
        'Upgrading hole size faster than the rod. A big hole raises luck and fish weight together, so an under-levelled rod turns every rare catch into a "too strong" escape.',
    },
    {
      question: 'Should I skip rods in Hole Fishing?',
      answer:
        'You can skip one tier — the Bone Rod (~$11M) is the usual candidate if you can grind the Server Hole hard. Skipping two or more leaves you unable to land the fish your hole spawns.',
    },
    {
      question: 'How do I stop wasting Server Hole events?',
      answer:
        'Sell your inventory before the window opens, stand in the center of the hole, and pop luck potions before it starts. The window is roughly 60 seconds — preparation is everything.',
    },
    {
      question: 'Is it better to catch many fish or many species in Hole Fishing?',
      answer:
        'Many species, early on. Every new species fills the index and each milestone grants permanent +10 luck, which raises rarity and mutation odds for the rest of your account.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Common Mistakes</h1>
      <p className="text-gray-500 mb-8">
        Ten mistakes that quietly slow your grind — and the fix for each. Updated {getCurrentDateString()}.
      </p>

      <div className="space-y-4 mb-10">
        {MISTAKES.map((m, i) => (
          <div key={m.title} className="p-5 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-start gap-4">
              <span className="text-xl font-black text-gray-300 dark:text-gray-700 tabular shrink-0">{i + 1}</span>
              <div>
                <h2 className="font-black mb-1">❌ {m.title}</h2>
                <p className="text-xs text-amber-600 dark:text-amber-500 mb-2">{m.symptom}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">✅ {m.fix}</p>
                <Link href={m.link.href} className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">
                  {m.link.label} →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>The One Rule Behind Most of These</h2>
        <p>
          Almost every mistake on this page comes from the same root cause: <strong>treating upgrades as independent
          purchases</strong>. Hole Fishing is a balancing act. Rod, hole size, sell value and backpack all feed the same
          loop, and buying one too far ahead of the others creates a bottleneck — escapes, capped backpacks, or flat
          income despite a bigger hole.
        </p>
        <p>
          The shortcut to avoiding all of it: <strong>if something feels stuck, it is almost always the rod.</strong> Buy the
          rod, then re-evaluate. Read the <Link href="/upgrades">upgrade guide</Link> for the full order, or the{' '}
          <Link href="/beginner-guide">beginner guide</Link> if you just spawned in.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
