import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Beginner Guide (${getCurrentDateString()}) — How to Play & Progress Fast`,
  description:
    'New to Hole Fishing on Roblox? Complete beginner guide: fishing minigame, upgrade priorities (rod vs hole vs sell value), day/night cycle, server hole events and money-making tips.',
  keywords: ['hole fishing guide', 'hole fishing beginner guide', 'how to play hole fishing', 'hole fishing tips', 'hole fishing money guide'],
  path: '/beginner-guide',
});

export default function BeginnerGuidePage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Beginner Guide', url: '/beginner-guide' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'What should I upgrade first in Hole Fishing?',
      answer:
        'Alternate: rod first (so fish stop escaping), then sell value, then hole size. Backpack is the lowest priority early. Never let your hole outgrow your rod — "too strong" escapes waste casts.',
    },
    {
      question: 'How do you catch fish in Hole Fishing?',
      answer:
        'Stand at your base hole, cast, and when a fish bites, hold the button to keep the marker inside the yellow zone until the reel completes. Better rods have faster reel speed and higher weight limits.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Beginner Guide</h1>
      <p className="text-gray-500 mb-8">From starter rod to first million — updated {getCurrentDateString()}.</p>

      <section className="prose prose-gray dark:prose-invert max-w-none">
        <h2>The Core Loop</h2>
        <p>
          Hole Fishing is a one-hole fishing simulator: <strong>cast → catch → sell → upgrade → repeat</strong>.
          Your hole is your base. Fish it, sell your inventory at the shop, and reinvest into four upgrade tracks:
        </p>
        <ul>
          <li>🎣 <strong>Rod</strong> — higher max weight + faster reel. The hard progression gate (<Link href="/rods">full rod tier list</Link>).</li>
          <li>🕳️ <strong>Hole Size</strong> — bigger hole = better luck = rarer fish. Also raises fish weight, so pair it with rod upgrades.</li>
          <li>💰 <strong>Sell Value</strong> — multiplies every sale. Compounds with everything else.</li>
          <li>🎒 <strong>Backpack</strong> — carry more fish per trip. Quality of life, not power.</li>
        </ul>

        <h2>The Fishing Minigame</h2>
        <p>
          When a fish bites, <strong>hold to keep the marker inside the yellow zone</strong>. Let it slip out and the catch fails.
          If the fish is heavier than your rod&apos;s max weight you&apos;ll get the dreaded <em>&quot;too strong&quot;</em> — the fish escapes
          no matter how well you play. That&apos;s your cue to upgrade the rod.
        </p>

        <h2>First 30 Minutes: Optimal Path</h2>
        <ol>
          <li>Fish commons until ~$1,000 → buy the <strong>Stone Rod</strong>.</li>
          <li>Claim the <strong>free reward chest</strong> near spawn (like the game + join the group).</li>
          <li>Alternate rod → sell value → hole size upgrades. Aim for Golden Rod ($7.5K) fast.</li>
          <li>Catch a <strong>Crocodile</strong> (~30 kg, $3,000) — the classic early jackpot.</li>
          <li>When you hear spinning — <strong>sprint to the Server Hole</strong>. 4x cash for ~60 seconds. See the <Link href="/server-hole">Server Hole guide</Link>.</li>
        </ol>

        <h2>Night Fishing = Real Money</h2>
        <p>
          When night falls, drop everything and fish hard. Night-exclusive fish (Squid, Void Ray, Asian Turtle)
          sell for multiples of day catches. The <strong>Asian Turtle</strong> (~half a ton) makes millionaires.
          Filling the night index also grants permanent +luck milestones.
        </p>

        <h2>Index = Free Luck</h2>
        <p>
          Every new species you catch fills your <strong>Index</strong> and each milestone grants permanent <strong>+10 luck</strong>.
          Variety beats volume early — catching 10 different commons is worth more than 50 of the same fish.
        </p>

        <h2>Robux Shortcuts (Optional)</h2>
        <p>
          The shop sells luck potions (2x luck, mega luck ~3000%, timed) and gamepasses (2x luck, double cash, faster reel).
          None are required — free players progress fine with Server Hole discipline — but a cheap luck potion during a server hole
          is the best value purchase if you spend anything at all.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
