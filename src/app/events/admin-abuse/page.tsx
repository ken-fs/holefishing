import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Admin Abuse & Hacker Event — Schedule, Rewards`,
  description:
    'Hole Fishing Admin Abuse runs every Sunday: Oct 4, 11 and 18 logs, the Oct 25 session, what actually happens during it, whether it drops codes, and how the Hacker Event differs.',
  keywords: [
    'hole fishing admin abuse',
    'hole fishing hacker event',
    'hole fishing admin abuse schedule',
    'hole fishing admin abuse time',
    'hole fishing admin codes',
    'when is hole fishing admin abuse',
  ],
  path: '/events/admin-abuse',
  type: 'article',
  modifiedTime: '2026-10-22',
});

const SCHEDULE = [
  {
    date: 'Sun, Oct 4, 2026',
    window: '~1 hour',
    headline: 'Ice Fish Only opener',
    detail:
      'Hosted in chat by JuanArtxz. Opened with "ICE FISH ONLY" on every catch, then cycled Burning, Huge + Electric, Big and Void. Global Luck went x5 → x6, with Sell Cash x2/x3 and Double Cast on top. Finale: Global Luck x20 for the last minute.',
    code: 'No code',
  },
  {
    date: 'Sun, Oct 11, 2026',
    window: 'Ended Oct 12',
    headline: 'New Content + Admin Abuse',
    detail:
      'Watched in full on a 32-minute creator live stream. Mutations now had start banners and countdowns ("BURNING MUTATION STARTED", "HUGE MUTATION 1:02"). Global Luck started at x3, the dev polled "50x luck?" in chat and switched it on, plus Double Cast, Double Catch, x3 Sell Cash, giant dev-spawned fish and a Server Hole mid-session. The dev signed off with "thanks for attending ❤️".',
    code: 'No code',
  },
  {
    date: 'Sun, Oct 18, 2026',
    window: 'Oct 18 15:00 → Oct 19 20:00 UTC',
    headline: 'New Content + Admin Abuse (patch)',
    detail:
      'The game was republished twice inside the window — 14:56 UTC (title [🌈EVENT] → [NOW]) and 16:25 UTC (→ [🎣UPDATE]). No patch notes, group shout or immediate footage explained what changed, and a 2h20m creator run posted that day was recorded on the older Oct 11 build. Post-event checks through Oct 22 found no code.',
    code: 'No code',
  },
  {
    date: 'Sun, Oct 25, 2026',
    window: 'Oct 25 16:00 → Oct 26 16:00 UTC',
    headline: '🎃 EVENT + ADMIN ABUSE (upcoming)',
    detail:
      'The only event on the official Roblox events listing for this game, re-checked against the virtual-events API on Oct 22. Subtitle: "New rods, fish and more!" — one hour later than the previous week. See the Halloween event page for the start time in your timezone.',
    code: 'Watch it',
    upcoming: true,
  },
];

export default function AdminAbusePage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Events', url: '/events' },
    { name: 'Admin Abuse', url: '/events/admin-abuse' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'When is the next Admin Abuse in Hole Fishing?',
      answer:
        'Sunday, October 25, 2026 at 16:00 UTC, under the title "🎃 EVENT + ADMIN ABUSE". It runs through Monday, October 26 at 16:00 UTC. That is 12:00 PM ET / 9:00 AM PT Sunday, or midnight Monday in the Philippines, 11 PM Sunday in Indonesia and Thailand, and 1 AM Monday in Korea. It is the only event listed on the game\'s official Roblox events tab as of October 22, 2026.',
    },
    {
      question: 'How often does Admin Abuse happen in Hole Fishing?',
      answer:
        'Every Sunday so far: October 4, October 11, October 18 and now October 25, 2026. The first three all started at 15:00 UTC; the October 25 session starts an hour later, at 16:00 UTC. The developers do not publish a fixed schedule — the listing on the Roblox game page is the only advance warning, and it is usually added or updated a few days before.',
    },
    {
      question: 'Do you get codes during Admin Abuse?',
      answer:
        'Not yet. The developers have teased "admin codes" in chat, but three Admin Abuse sessions in a row (Oct 4, Oct 11, Oct 18) ended without a code string, and no footage shows one redeeming. Hole Fishing has a real redemption box inside the Exclusive Store, and it is still empty. If a code is ever given out mid-event it will be posted on the codes page within minutes.',
    },
    {
      question: 'What is the Hacker Event in Hole Fishing?',
      answer:
        'A short server event, separate from Admin Abuse. In September 24, 2026 footage the hole-size upgrade gain rose from 40% to 50% while it was running, so the play is to spend saved cash on hole upgrades during it. Catches credited to the Hacker Event in creator footage include the Crown Spike and the Moon Veil. We have not confirmed how often it appears or how long it lasts.',
    },
    {
      question: 'Is the Hacker Event the same thing as Admin Abuse?',
      answer:
        'No, and it is not the Hacker Rod either. Admin Abuse is the dev-hosted Sunday session with a countdown and a host in chat. The Hacker Event is a shorter in-game event window with no host. The Hacker Rod is a permanent item in the rod shop (and the King Bait requires it).',
    },
    {
      question: 'What should I do during Admin Abuse?',
      answer:
        'Be online before the countdown hits zero, have your backpack empty so every catch is a fresh roll, save multiplier baits for the luck windows, and do not go shopping in the middle of it. The last few minutes are usually the biggest multiplier of the session — the Oct 4 session ended on Global Luck x20.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-xs text-gray-500 mb-3">
        <Link href="/" className="hover:underline">Home</Link>
        {' / '}
        <Link href="/events" className="hover:underline">Events</Link>
        {' / '}
        <span>Admin Abuse</span>
      </nav>

      <h1 className="text-3xl font-black mb-2">Hole Fishing Admin Abuse &amp; Hacker Event</h1>
      <p className="text-gray-500 mb-8">
        The Sunday dev session, what it actually does to your luck, and the separate Hacker Event that players keep mixing it
        up with. Checked {getCurrentDateString()}.
      </p>

      <div className="p-5 rounded-xl border border-cyan-300 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20 mb-10">
        <p className="font-semibold mb-1">📅 Next session: Sunday, Oct 25, 2026 — 16:00 UTC</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Listed as <strong>&quot;🎃 EVENT + ADMIN ABUSE&quot;</strong>, runs until Monday, Oct 26, 16:00 UTC, subtitle
          &quot;New rods, fish and more!&quot;. That is <strong>midnight Monday</strong> in the Philippines,{' '}
          <strong>11 PM Sunday</strong> in Indonesia, Thailand and Vietnam, <strong>1 AM Monday</strong> in Korea,{' '}
          <strong>12 PM Sunday</strong> in New York. Full timezone table:{' '}
          <Link href="/events/halloween" className="underline">Halloween event page</Link>. Source: Roblox virtual-events API
          for universe 9906378607, checked Oct 22, 2026.
        </p>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>What Admin Abuse actually is</h2>
        <p>
          It is not a random boost. The developers schedule a session, a countdown appears in game
          (&quot;ADMIN ABUSE IN 3:20&quot;), and then a dev joins and hosts it live in chat — spawning mutations, running luck
          polls, dropping giant fish into the water and calling out the finale. It is also listed on the{' '}
          <strong>Events tab of the Roblox game page</strong>, which is the only advance warning you get.
        </p>
        <p>
          Sessions last about an hour, though the Roblox listing stays open for 24 hours or more around them. The abuse part —
          the actual mutations and luck multipliers — happens inside that window, usually in the first hour.
        </p>

        <h2>Every session so far</h2>
        <p className="text-sm">
          Numbers below are what we saw on footage, not published rules. The developers do not post patch notes for events.
        </p>
      </section>

      <div className="space-y-3 mb-10">
        {SCHEDULE.map((s) => (
          <div
            key={s.date}
            className={`p-4 rounded-xl border ${
              s.upcoming
                ? 'border-cyan-300 dark:border-cyan-800 bg-cyan-50/60 dark:bg-cyan-950/20'
                : 'border-gray-200 dark:border-gray-800'
            }`}
          >
            <div className="flex items-baseline justify-between gap-2 flex-wrap mb-1">
              <span className="font-bold text-sm">{s.date}</span>
              <span className="text-xs text-gray-500">{s.window}</span>
            </div>
            <div className="text-sm font-semibold mb-1">{s.headline}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{s.detail}</p>
            <div className="text-xs mt-2">
              <span
                className={
                  s.upcoming
                    ? 'font-bold text-cyan-700 dark:text-cyan-400'
                    : 'font-bold text-amber-700 dark:text-amber-500'
                }
              >
                {s.code}
              </span>
              <span className="text-gray-500"> · codes status, tracked on the </span>
              <Link href="/codes" className="underline">codes page</Link>
            </div>
          </div>
        ))}
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>What happens during a session</h2>
        <p>
          The pattern has been consistent across all three sessions we watched in full:
        </p>
        <ul>
          <li>
            <strong>Server-wide mutations</strong>, changed every few minutes from the dev console — Ice, Burning, Huge, Big,
            Void, Electric. From Oct 11 they come with start banners and a countdown (&quot;HUGE MUTATION 1:02&quot;), so you
            can see how long you have left to fish under it.
          </li>
          <li>
            <strong>Global Luck</strong> going up in steps — x3, x5, x6 seen in normal play, with the dev polling chat before
            jumping (Oct 11 ran <strong>50x</strong>).
          </li>
          <li>
            <strong>Sell Cash boosts</strong> at x2 or x3 — this multiplies what your backpack pays out, so it pairs with the
            luck windows.
          </li>
          <li>
            <strong>Double Cast / Double Catch</strong> — two fish per cast.
          </li>
          <li>
            <strong>Dev-spawned giant fish</strong> and a <Link href="/server-hole">Server Hole</Link> opening mid-session.
          </li>
          <li>
            <strong>A finale</strong>. Oct 4 ended with &quot;LAST MINUTE OF LUCK!&quot; at <strong>Global Luck x20</strong>.
          </li>
        </ul>

        <h2>How to play it</h2>
        <ul>
          <li>
            <strong>Be in the game before the countdown hits zero.</strong> The multipliers start immediately and the first
            minutes are wasted if you are still loading.
          </li>
          <li>
            <strong>Empty your backpack first.</strong> Every cast should be a fresh roll under the boosted mutation, not a
            backlog you sell during it. Sell <em>inside</em> a Sell Cash window, never before one.
          </li>
          <li>
            <strong>Hold multiplier baits for the luck windows.</strong> The <Link href="/baits">bait ladder</Link> (Tide for a
            guaranteed mutation, Meadow/Frost for x5 value, Reef for x10) compounds with the event multiplier — using them in
            normal play wastes them.
          </li>
          <li>
            <strong>Don&apos;t shop during it.</strong> The window is for fishing. Buy rods and upgrades before or after.
          </li>
          <li>
            <strong>Stay for the last five minutes.</strong> The biggest multiplier has been saved for the end both times.
          </li>
        </ul>
        <p className="text-sm text-gray-500">
          If you are still choosing what to upgrade outside an event, the <Link href="/upgrades">upgrade order</Link> and the{' '}
          <Link href="/rods">rod tier list</Link> cover it.
        </p>

        <h2>Codes during Admin Abuse</h2>
        <p>
          This is the question that pulls most people to this page, so plainly: <strong>no Admin Abuse has ever produced a
          working code</strong>. The developers have mentioned &quot;admin codes&quot; loosely in chat, and code aggregator sites
          repeat that as if codes were raining during events — they are not. Three sessions, zero code strings, and every
          &quot;Hole Fishing codes&quot; list you find elsewhere is invented.
        </p>
        <p>
          The game does have a real redemption box (Exclusive Store → Codes, verified on Sept 28 footage). It has never been
          filled. If one appears mid-event, the <Link href="/codes">codes page</Link> is where it lands, usually within
          minutes — that page is checked against the game page, the developer group and event footage.
        </p>

        <h2>Hacker Event — the one people confuse with Admin Abuse</h2>
        <p>
          The Hacker Event is a separate, shorter in-game event with no host. What we have confirmed:
        </p>
        <ul>
          <li>
            <strong>Hole growth jumps.</strong> In Sept 24, 2026 footage the hole-size upgrade gain went from{' '}
            <strong>40% to 50%</strong> while it was running. If you have cash banked and you are mid hole progression, spend it
            during the event — a bigger hole means bigger fish for the rest of the session.
          </li>
          <li>
            <strong>It drops event catches.</strong> The <Link href="/fish/crown-spike">Crown Spike</Link> was caught during
            hacker-event windows in two different creators&apos; footage (Sept 24 and Oct 18, 2026), and the{' '}
            <Link href="/fish/moon-veil">Moon Veil</Link> showed up in Oct 18 footage as an &quot;Abyssal Moon Veil&quot; worth
            around $1.39 trillion with multipliers. Both are still unverified in the <Link href="/fish">fish index</Link> —
            rarity and base value were never readable on screen.
          </li>
          <li>
            <strong>Frequency is unknown.</strong> We have not confirmed a schedule or a duration. Do not plan around it; take
            it when it shows up.
          </li>
        </ul>
        <p>
          Two things it is <em>not</em>: it is not Admin Abuse (that one has a countdown and a dev in chat), and it is not the{' '}
          <Link href="/rods/hacker-rod">Hacker Rod</Link>, which is a permanent shop rod — the one the King Bait requires.
        </p>

        <h2>Where the dates come from</h2>
        <p className="text-sm text-gray-500">
          Sources: the Roblox virtual-events API for universe 9906378607 (re-checked Oct 22, 2026 — one event listed, updated
          Oct 18 16:31 UTC), the Roblox game API (republish times and title prefixes), the Oct 4 and Oct 11 Admin Abuse live
          streams watched in full, Sept 24 and Oct 18 creator footage, and UrGameTips&apos; codes page re-checked after each
          event. Event odds and timers are not published by the developers, so treat the numbers as observations rather than
          fixed rules.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
