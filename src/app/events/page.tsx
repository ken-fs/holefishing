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
        'The developers schedule it, and it shows up as an in-game countdown ("ADMIN ABUSE IN mm:ss") and on the Events tab of the Roblox game page. So far it has been weekly on Sundays: Oct 4, Oct 11 and Oct 18, 2026. The next one is the "🎃 EVENT + ADMIN ABUSE" on Sunday, Oct 25, 2026, running from 16:00 UTC to Oct 26, 16:00 UTC.',
    },
    {
      question: 'Do you get codes during Admin Abuse?',
      answer:
        'Not so far. The dev has teased "admin codes" in chat, but the Oct 4 Admin Abuse ended with a x20 luck finale and no code, and the Oct 11 one ended with 50x Global Luck and no code either. We track it on the codes page.',
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

        <h3>Oct 11 Admin Abuse</h3>
        <p>
          The second one ran on <strong>Oct 11, 2026</strong> as part of a &quot;New Content + Admin Abuse&quot; event that ended
          Oct 12. It was louder than Oct 4. We watched the full 32-minute session on a creator&apos;s live stream:
        </p>
        <ul>
          <li>Mutations now come with start banners and countdowns, like &quot;BURNING MUTATION STARTED&quot; and &quot;HUGE MUTATION 1:02&quot;. Void showed up too.</li>
          <li>Global Luck started at x3. Then the dev ran a &quot;50x luck?&quot; poll in chat and switched on <strong>50x Global Luck</strong>.</li>
          <li>There were Double Cast, Double Catch and <strong>x3 Sell Cash</strong> windows, plus giant fish spawned by the dev.</li>
          <li>A Server Hole opened in the middle of it.</li>
          <li>The dev closed with &quot;thanks for attending ❤️&quot; and &quot;next weekend will be way better&quot;. <strong>No code again.</strong></li>
        </ul>

        <h3>Oct 18 New Content + Admin Abuse</h3>
        <p>
          That one ran from <strong>Oct 18, 15:00 UTC</strong> through <strong>Oct 19, 20:00 UTC</strong>, subtitle &quot;New
          rods, fish and more!&quot;. The game was republished twice inside the window (<strong>[🌈EVENT] → [NOW] →
          [🎣UPDATE]</strong>) with no patch notes, so the only confirmed change is the patch itself. <strong>No code again.</strong>{' '}
        </p>

        <h3>Next: 🎃 EVENT + ADMIN ABUSE — Oct 25</h3>
        <p>
          The official Roblox events listing has the next session on <strong>Sunday, Oct 25, 2026 at 16:00 UTC</strong> (9 AM
          PT / 12 PM ET / midnight Monday in the Philippines / 11 PM Sunday in Indonesia and Thailand). It runs until{' '}
          <strong>Monday, Oct 26 at 16:00 UTC</strong>, subtitle &quot;New rods, fish and more!&quot; — the same format as the
          last two weeks, one hour later, with a Halloween skin on it.
        </p>
        <p>
          So far these land every Sunday (Oct 4, 11, 18, 25). The listing doesn&apos;t say what time the Admin Abuse part starts
          inside the window, but in all three past sessions it was the opening hour. Watch for the in-game countdown, and check
          the <Link href="/events/halloween">Halloween event page</Link> for the timezone table and the{' '}
          <Link href="/updates">updates page</Link> for new rods and fish once they&apos;re confirmed.
        </p>
        <p>
          Full event-by-event log, what the multipliers actually do and the separate <strong>Hacker Event</strong>:{' '}
          <Link href="/events/admin-abuse">Admin Abuse &amp; Hacker Event page</Link>.
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
          <li><strong>🌈 Rainbow Event (Oct 11)</strong> — the game title switched to [🌈EVENT] with the Oct 11 update. It shows a &quot;🌈 RAINBOW&quot; countdown banner and a rainbow in the sky. We haven&apos;t confirmed what bonus it gives yet.</li>
        </ul>
        <p>
          The full timeline, with sources, is on the <Link href="/updates">updates page</Link>. Night also works a bit like an
          event — different fish spawn and they pay more. See <Link href="/night-fishing">night fishing</Link>.
        </p>

        <p className="text-sm text-gray-500">
          Sources: Oct 4, 2026 live stream of the Admin Abuse (Maskednoobgy), Oct 11 live stream (NOTVOIDY), Sept 24 and
          Sept 27 creator footage, the Roblox game page, and the Roblox events listing (checked Oct 14, 2026). Event odds and timers aren&apos;t published by the developers, so treat the numbers as what we saw,
          not fixed rules.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
