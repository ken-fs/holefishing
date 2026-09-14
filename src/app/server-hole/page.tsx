import type { Metadata } from 'next';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Server Hole Event (${getCurrentDateString()}) — Timer & Strategy`,
  description:
    'The Server Hole event in Hole Fishing explained: how often it opens (~15–25 min), how long it lasts (~60s), 4x cash, mutation rolls, and the best strategy to maximize each window.',
  keywords: ['hole fishing server hole', 'hole fishing event', 'hole fishing 4x cash', 'server hole timer hole fishing'],
  path: '/server-hole',
});

export default function ServerHolePage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Server Hole Event', url: '/server-hole' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'How often does the Server Hole open in Hole Fishing?',
      answer:
        'Roughly every 15–25 minutes (observed cooldowns of 18–22 minutes). A server-wide "The server hole is opening" message plays, and the hole stays open for about 60 seconds.',
    },
    {
      question: 'What does the Server Hole do in Hole Fishing?',
      answer:
        'During the event everyone fishes from the shared server hole with a 4x cash multiplier and boosted mutation rolls. It is the single best money-making window in the game.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Server Hole Event Guide</h1>
      <p className="text-gray-500 mb-8">4x cash. ~60 seconds. Every ~20 minutes. Here&apos;s how to squeeze it dry.</p>

      <div className="grid grid-cols-3 gap-3 mb-10 text-center">
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400">~20 min</div>
          <div className="text-xs text-gray-500 uppercase">Cooldown</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400">~60 sec</div>
          <div className="text-xs text-gray-500 uppercase">Duration</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-2xl font-black text-cyan-600 dark:text-cyan-400">4x</div>
          <div className="text-xs text-gray-500 uppercase">Cash Multiplier</div>
        </div>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>What Happens</h2>
        <p>
          A spinning sound effect plays, chat announces <em>&quot;The server hole is opening&quot;</em>, and a massive shared hole
          appears in the middle of the map. For roughly one minute, every player can fish it with a{' '}
          <strong>4x cash multiplier</strong> and boosted mutation rolls (Big / Large / Huge). When it closes, it&apos;s gone
          until the next cycle.
        </p>
        <h2>Optimal Strategy</h2>
        <ol>
          <li><strong>Watch the clock.</strong> After each event ends, start mentally timing ~18–22 minutes. Sell and reposition early.</li>
          <li><strong>Arrive with an empty backpack</strong> — sell your inventory before the hole opens so nothing caps your gains.</li>
          <li><strong>Stand in the center.</strong> The hole is huge; center positioning minimizes cast travel time.</li>
          <li><strong>Pop luck potions before it opens,</strong> not during. Event seconds are precious — drink first, cast immediately.</li>
          <li><strong>Upgrade between events.</strong> The gap between windows is your upgrade time; the window itself is 100% fishing.</li>
        </ol>
        <h2>Common Mistakes</h2>
        <ul>
          <li>Fishing your own hole during the event — you can only fish from your base hole normally, but the server hole replaces it during the window. Go.</li>
          <li>Bringing a rod that&apos;s too weak — the server hole spawns heavy fish; &quot;too strong&quot; escapes waste the 4x window.</li>
          <li>Selling mid-event — every cast is worth 4x. Sell after.</li>
        </ul>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
