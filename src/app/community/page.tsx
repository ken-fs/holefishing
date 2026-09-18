import type { Metadata } from 'next';
import Link from 'next/link';
import { getGameConfig } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Community (${getCurrentDateString()}) — Group, Servers & Etiquette`,
  description:
    'Hole Fishing community hub: the 67K CCU group, how 6-player servers change the Server Hole event, leaderboard etiquette, and where players actually share tips.',
  keywords: ['hole fishing community', 'hole fishing group', 'hole fishing discord', 'hole fishing servers', 'hole fishing 67k ccu'],
  path: '/community',
});

export default function CommunityPage() {
  const config = getGameConfig();
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Community', url: '/community' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'Does Hole Fishing have an official Discord?',
      answer:
        'No official Discord, Trello or social channels are linked from the game page. The developer group is called "67K CCU" on Roblox — joining it in-game is the closest thing to an official community, and the game rewards you for it via the free reward chest.',
    },
    {
      question: 'How many players are in a Hole Fishing server?',
      answer:
        'Six. Small servers matter because the Server Hole event is shared: with only six players, the event hole is far less crowded than in a 30-player game, so you can get more casts inside the ~60 second window.',
    },
    {
      question: 'Is Hole Fishing better solo or with friends?',
      answer:
        'Hole Fishing is effectively a solo game — your hole, rods and index are your own. The only shared element is the Server Hole event, so playing in a quiet server is actually an advantage: fewer players competing for the same 4x window.',
    },
    {
      question: 'How do I join the 67K CCU group?',
      answer:
        'Open the game page on Roblox, scroll to the developer (67K CCU), and join the group from there. Then claim the free reward chest near spawn in-game — it pays out for liking the game and joining the group.',
    },
    {
      question: 'Where do Hole Fishing players share tips?',
      answer:
        'YouTube comments and creator videos are where most Hole Fishing knowledge circulates — the game has no official wiki or Discord. This site exists to consolidate what those creators show on camera, with everything single-source marked as unverified.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Community</h1>
      <p className="text-gray-500 mb-8">
        The 67K CCU group, why six-player servers matter, and how players actually learn this game. Updated {getCurrentDateString()}.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 text-center">
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-xl font-black tabular">{config.stats.onlineNow}</div>
          <div className="text-xs text-gray-500 uppercase">Playing Now</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-xl font-black tabular">{config.stats.visits}</div>
          <div className="text-xs text-gray-500 uppercase">Visits</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-xl font-black tabular">{config.stats.favorites}</div>
          <div className="text-xs text-gray-500 uppercase">Favorites</div>
        </div>
        <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="text-xl font-black tabular">{config.stats.serverSize}</div>
          <div className="text-xs text-gray-500 uppercase">Players / Server</div>
        </div>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>The Developer Group: 67K CCU</h2>
        <p>
          Hole Fishing is made by the Roblox group <strong>67K CCU</strong> — a small team, not a studio. That shapes
          everything about the community: there is <strong>no official Discord, Trello or social channel</strong> linked from
          the game, and no official wiki. Updates arrive as quiet shop and content changes rather than patch notes.
        </p>
        <p>
          What the group does give you is in-game value. Joining it (plus liking the game) feeds the{' '}
          <strong>free reward chest</strong> near spawn — the same chest covered in the{' '}
          <Link href="/codes">codes page</Link> as the legitimate substitute for codes, since Hole Fishing has no code
          system.
        </p>

        <h2>Why Six-Player Servers Matter</h2>
        <p>
          Servers cap at <strong>six players</strong>. In most Roblox games that would be a limitation; here it is a
          quiet advantage. The <Link href="/server-hole">Server Hole event</Link> is shared across the whole server, and
          the window lasts only about a minute. With six players instead of thirty, you are competing with five other
          people for casts during a 4x window — not twenty-nine.
        </p>
        <p>
          Practical consequences:
        </p>
        <ul>
          <li><strong>Quiet servers are better for money.</strong> Join at off-peak hours and your Server Hole windows pay out more per player.</li>
          <li><strong>Small servers mean faster cycles.</strong> With fewer players the world state moves quickly, so day/night transitions arrive more predictably in a session.</li>
          <li><strong>You will recognise regulars.</strong> At this scale the same names recur — the leaderboard is a small pond.</li>
        </ul>

        <h2>Leaderboard &amp; Server Etiquette</h2>
        <ul>
          <li><strong>Sell before the event, not during.</strong> Everyone at the server hole is there for the same 60 seconds — hogging a full backpack wastes your own window more than anyone else&apos;s.</li>
          <li><strong>Do not body-block the hole.</strong> Stand in the center and cast; standing on other players during a 4x window is the fastest way to get on a server&apos;s bad side.</li>
          <li><strong>The global catch feed is public.</strong> Secret and Mythical catches broadcast server-wide — expect company if you pull a Glacial Wyrm.</li>
          <li><strong>No begging for fish or rods.</strong> Nothing in Hole Fishing is tradeable, so &quot;can I have&quot; requests do not work here.</li>
        </ul>

        <h2>Where Hole Fishing Knowledge Actually Circulates</h2>
        <p>
          With no official wiki or Discord, community knowledge lives in <strong>creator videos</strong>. Rod prices, fish
          values and secret catches are discovered by players watching gameplay footage — which is exactly how this site
          builds its data. Everything on holefishing.xyz comes from creator videos and the Roblox public API, and
          anything with a single source is marked{' '}
          <span className="text-[10px] px-1.5 py-0.5 rounded border border-amber-400/50 text-amber-600 dark:text-amber-400 font-semibold">unverified</span>.
        </p>
        <p>
          That is also why our <Link href="/fish">fish index</Link> is more complete than the alternatives: other fan
          wikis covering Hole Fishing deliberately publish only illustrative examples, while we publish the full catalog
          and label the uncertainty instead of hiding it.
        </p>

        <h2>Getting Started With the Community</h2>
        <ol>
          <li>Join the <strong>67K CCU</strong> group from the Roblox game page and claim the free reward chest.</li>
          <li>Read the <Link href="/beginner-guide">beginner guide</Link> so you are not asking questions the game answers in the first 30 minutes.</li>
          <li>Learn the <Link href="/server-hole">Server Hole timing</Link> — it is the one piece of knowledge that separates players who progress from players who stall.</li>
          <li>Watch creator videos for new discoveries, and cross-check anything surprising against the <Link href="/updates">updates page</Link>.</li>
          <li>Avoid <Link href="/scripts">scripts</Link>. It is the most common way new players lose their account.</li>
        </ol>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
