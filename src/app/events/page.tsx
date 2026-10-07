import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Events (${getCurrentDateString()}) — Admin Abuse, Hacker Event & Boosts`,
  description:
    'Every event in Hole Fishing: Admin Abuse, the Hacker Event, server-wide mutations (Ice, Void, Burning, Electric), Global Luck and Sell Cash boosts, the Server Hole and limited events.',
  keywords: ['hole fishing events', 'hole fishing hacker event', 'hole fishing admin abuse', 'hole fishing global luck', 'hole fishing mutation event', 'hole fishing event schedule'],
  path: '/events',
});

export default function EventsPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Events', url: '/events' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'What is the Hacker Event in Hole Fishing?',
      answer:
        'A server-wide event that boosts hole growth. On Sept 24 footage, the hole-size gain jumped from 40% to 50% while it was running. It is short and random — when you see it, spend on hole-size upgrades.',
    },
    {
      question: 'When is Admin Abuse in Hole Fishing?',
      answer:
        'It is scheduled by the developers and shows up as an in-game countdown ("ADMIN ABUSE IN mm:ss"), and sometimes on the Events tab of the Roblox game page. The Oct 4, 2026 one ran for about an hour.',
    },
    {
      question: 'Do you get codes during Admin Abuse?',
      answer:
        'Not so far. The dev has teased "admin codes" in chat, but the Oct 4 Admin Abuse ended with a x20 luck finale and no code. We track it on the codes page.',
    },
    {
      question: 'What does Global Luck do in Hole Fishing?',
      answer:
        'It multiplies everyone\'s luck on the server, so rarer fish show up more often. We have seen x2, x3, x5, x6 and a x20 final minute during Admin Abuse.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Events</h1>
      <p className="text-gray-500 mb-8">
        Every timed event and server boost we&apos;ve seen in the game, and what to do when each one starts. Checked {getCurrentDateString()}.
      </p>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>How to tell an event is on</h2>
        <p>
          Active boosts show as small colored labels across the top of the screen, right under the Sell / Base / Upgrades
          buttons — for example <em>&quot;VOID MUTATION ACTIVE · GLOBAL LUCK x6 · SELL CASH x3 · DOUBLE CAST&quot;</em>. Several can run
          at once. There&apos;s also a <strong>Next Events</strong> board and a <strong>Start Any Event</strong> sign by your base;
          we haven&apos;t seen the Start Any Event option used yet, so we don&apos;t know what it costs.
        </p>

        <h2>Admin Abuse</h2>
        <p>
          The big one. The developers schedule it, a countdown appears in game (&quot;ADMIN ABUSE IN 3:20&quot;), and then a dev hosts
          it in chat. On <strong>Oct 4, 2026</strong> it ran for about an hour with <strong>JuanArtxz</strong> calling it:
        </p>
        <ul>
          <li>It opened with <strong>&quot;ICE FISH ONLY&quot;</strong> — the Ice mutation on every catch.</li>
          <li>Then it cycled through <strong>Burning</strong>, <strong>Huge + Electric</strong>, <strong>Big</strong> and <strong>Void</strong> mutations.</li>
          <li>On top of that: <strong>Global Luck x5 → x6</strong>, <strong>Sell Cash x2/x3</strong> and <strong>Double Cast</strong>.</li>
          <li>The finale was <strong>Global Luck x20</strong> for the last minute (&quot;LAST MINUTE OF LUCK!&quot;).</li>
        </ul>
        <p>
          <strong>What to do:</strong> be in the game before the countdown hits zero, empty your backpack, and fish nonstop.
          Don&apos;t spend the window shopping. If you have <Link href="/baits">multiplier baits</Link> saved up, this is the time
          to use them. No code dropped on Oct 4 — if one ever does, it&apos;ll be on the <Link href="/codes">codes page</Link>.
        </p>

        <h2>Hacker Event</h2>
        <p>
          A shorter server event. On Sept 24 footage, the hole-size upgrade gain jumped from <strong>40% to 50%</strong> while it
          was running. That&apos;s about all that&apos;s been confirmed so far — we haven&apos;t seen how often it comes around.
        </p>
        <p>
          <strong>What to do:</strong> if you have cash saved, buy hole-size upgrades while it&apos;s on. A bigger hole means
          bigger fish for the rest of the session. Not to be confused with the <Link href="/rods/hacker-rod">Hacker Rod</Link>,
          which is just a rod in the shop.
        </p>

        <h2>Mutation events</h2>
        <p>
          Server-wide mutation events force a mutation onto catches while they last. Ones we&apos;ve seen:{' '}
          <strong>Ice, Burning, Void, Electric, Huge and Big</strong>. Mutated fish sell for more, so these are good times to
          fish rather than upgrade. Full details on the <Link href="/mutations">mutations guide</Link>.
        </p>

        <h2>Global Luck, Sell Cash and Double Cast</h2>
        <ul>
          <li><strong>Global Luck</strong> — raises everyone&apos;s luck. Seen at x2, x3, x5, x6, and x20 for the last minute of Admin Abuse.</li>
          <li><strong>Sell Cash</strong> — multiplies what you get when you sell. Seen at x2 and x3. Sell your backpack while it&apos;s on.</li>
          <li><strong>Double Cast</strong> — you catch two fish per cast (&quot;DOUBLE CATCH!&quot;).</li>
        </ul>

        <h2>Server Hole</h2>
        <p>
          A shared hole opens in the middle of the map roughly every 20 minutes for about a minute, with 4x cash. It has its
          own page: <Link href="/server-hole">Server Hole guide</Link>.
        </p>

        <h2>Limited events</h2>
        <ul>
          <li><strong>🏜️ Desert Event (Sept 15–21)</strong> — a Mummy NPC handed out trials (catch 5 fish at night, catch 3 epics) and the reward was the <Link href="/rods/egyptian-rod">Egyptian Rod</Link>.</li>
          <li><strong>☯️ Yin-Yang Update (Sept 21–27)</strong> — a themed event with its own catches.</li>
          <li><strong>🐟 Oct 4 Update</strong> — paired with the Admin Abuse above.</li>
        </ul>
        <p>
          The full timeline, with sources, is on the <Link href="/updates">updates page</Link>. Night also works a bit like an
          event — different fish spawn and they pay more. See <Link href="/night-fishing">night fishing</Link>.
        </p>

        <p className="text-sm text-gray-500">
          Sources: Oct 4, 2026 live stream of the Admin Abuse (Maskednoobgy), Sept 24 and Sept 27 creator footage, and the
          Roblox game page. Event odds and timers aren&apos;t published by the developers, so treat the numbers as what we saw,
          not fixed rules.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
