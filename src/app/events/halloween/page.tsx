import type { Metadata } from 'next';
import Link from 'next/link';
import { getGameConfig } from '@/lib/data';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Halloween Event 2026 — Start Time & New Content`,
  description:
    'Hole Fishing Halloween runs Sun Oct 25, 16:00 UTC to Mon Oct 26, 16:00 UTC: start time in your timezone, what "new rods, fish and more" covers, and whether codes drop.',
  keywords: [
    'hole fishing halloween event',
    'hole fishing halloween 2026',
    'hole fishing event start time',
    'hole fishing new rods',
    'hole fishing update event',
    'hole fishing halloween codes',
  ],
  path: '/events/halloween',
  type: 'article',
  modifiedTime: '2026-10-22',
});

// 时区换算用 Intl 实算（2026-10-25 那天英国回冬令时、欧洲同一天换 CET，手推会错）
const TZ_ROWS = [
  { zone: 'UTC', start: 'Sun, Oct 25 — 16:00', end: 'Mon, Oct 26 — 16:00' },
  { zone: 'Philippines (PHT)', start: 'Mon, Oct 26 — 00:00 (midnight)', end: 'Tue, Oct 27 — 00:00' },
  { zone: 'Indonesia / Thailand / Vietnam (WIB · ICT)', start: 'Sun, Oct 25 — 23:00', end: 'Mon, Oct 26 — 23:00' },
  { zone: 'Malaysia / Singapore (MYT · SGT)', start: 'Mon, Oct 26 — 00:00', end: 'Tue, Oct 27 — 00:00' },
  { zone: 'Korea / Japan (KST · JST)', start: 'Mon, Oct 26 — 01:00', end: 'Tue, Oct 27 — 01:00' },
  { zone: 'India (IST)', start: 'Sun, Oct 25 — 21:30', end: 'Mon, Oct 26 — 21:30' },
  { zone: 'UK (GMT — clocks went back that morning)', start: 'Sun, Oct 25 — 16:00', end: 'Mon, Oct 26 — 16:00' },
  { zone: 'Central Europe (CET)', start: 'Sun, Oct 25 — 17:00', end: 'Mon, Oct 26 — 17:00' },
  { zone: 'US East (EDT)', start: 'Sun, Oct 25 — 12:00 PM', end: 'Mon, Oct 26 — 12:00 PM' },
  { zone: 'US West (PDT)', start: 'Sun, Oct 25 — 9:00 AM', end: 'Mon, Oct 26 — 9:00 AM' },
  { zone: 'Brazil (BRT)', start: 'Sun, Oct 25 — 1:00 PM', end: 'Mon, Oct 26 — 1:00 PM' },
];

export default function HalloweenEventPage() {
  const config = getGameConfig();
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Events', url: '/events' },
    { name: 'Halloween Event', url: '/events/halloween' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'When does the Hole Fishing Halloween event start?',
      answer:
        'Sunday, October 25, 2026 at 16:00 UTC. In the Philippines that is midnight on Monday, October 26; in Indonesia, Thailand and Vietnam it is 11 PM on Sunday, October 25; in Korea and Japan it is 1 AM Monday; in the US it is 12 PM ET / 9 AM PT on Sunday.',
    },
    {
      question: 'When does the Hole Fishing Halloween event end?',
      answer:
        'Monday, October 26, 2026 at 16:00 UTC — a 24-hour listed window. The listed window is longer than the actual session: the Admin Abuse part of previous events ran for about an hour, at the start of the window. Treat the first hour as the part you cannot miss.',
    },
    {
      question: 'What is in the Hole Fishing Halloween update?',
      answer:
        'The official Roblox events listing says only "New rods, fish and more!" — the developers have not published a detail list. Going by the Oct 11 and Oct 18 sessions, expect new rods and new fish added to the game plus a Halloween-themed title prefix. We add new rods and fish to the rod tier list and fish index as soon as they are readable on screen.',
    },
    {
      question: 'Are there Halloween codes in Hole Fishing?',
      answer:
        'No. Three Admin Abuse events (Oct 4, Oct 11, Oct 18, 2026) have all ended without a single code string, and the redemption box in the Exclusive Store has never been filled. If a Halloween code does appear, it will be posted on the codes page first.',
    },
    {
      question: 'Is the Halloween event an Admin Abuse session?',
      answer:
        'It is both — the listing is titled "🎃 EVENT + ADMIN ABUSE", the same format as the Oct 11 and Oct 18 sessions. That means a dev-hosted hour of rotating server-wide mutations, luck boosts and sell-cash multipliers, wrapped in a Halloween content update.',
    },
    {
      question: 'What time should I log in?',
      answer:
        'Log in 10-15 minutes before 16:00 UTC with an empty backpack and your multiplier baits unequipped. Previous sessions started boosting within seconds of the countdown reaching zero, and players still loading into the game missed the opening Ice/Huge window.',
    },
  ]);

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Hole Fishing — 🎃 Event + Admin Abuse',
    startDate: '2026-10-25T16:00:00Z',
    endDate: '2026-10-26T16:00:00Z',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    description:
      'Halloween-themed Roblox event for Hole Fishing (universe 9906378607): new rods, new fish and a dev-hosted Admin Abuse session. Listing subtitle: "New rods, fish and more!"',
    location: {
      '@type': 'VirtualLocation',
      url: `https://www.roblox.com/games/${config.game.robloxId}`,
    },
    organizer: {
      '@type': 'Organization',
      name: config.game.developer,
      url: 'https://www.roblox.com/communities/612510500',
    },
    isAccessibleForFree: true,
    image: `${config.seo.baseUrl}${config.seo.defaultOgImage}`,
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-xs text-gray-500 mb-3">
        <Link href="/" className="hover:underline">Home</Link>
        {' / '}
        <Link href="/events" className="hover:underline">Events</Link>
        {' / '}
        <span>Halloween Event</span>
      </nav>

      <h1 className="text-3xl font-black mb-2">Hole Fishing Halloween Event (Oct 25–26, 2026)</h1>
      <p className="text-gray-500 mb-8">
        The 🎃 EVENT + ADMIN ABUSE window, converted to the timezones most Hole Fishing players actually search from. Checked{' '}
        {getCurrentDateString()}.
      </p>

      <div className="p-5 rounded-xl border border-cyan-300 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20 mb-10">
        <p className="font-semibold mb-2">🎃 Sunday, Oct 25, 2026 — 16:00 UTC</p>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li><strong>Listed title:</strong> 🎃 EVENT + ADMIN ABUSE</li>
          <li><strong>Subtitle:</strong> &ldquo;New rods, fish and more!&rdquo;</li>
          <li><strong>Listed window:</strong> Oct 25, 16:00 UTC → Oct 26, 16:00 UTC (24 hours)</li>
          <li><strong>The part to not miss:</strong> the first hour — that is when the Admin Abuse session actually runs</li>
        </ul>
        <p className="text-xs text-gray-500 mt-3">
          Source: Roblox virtual-events API, universe 9906378607 — the only public event listed for this game, entry updated
          Oct 18, 2026 at 16:31 UTC (right after the previous patch). Checked again Oct 22.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">Start and end time in your timezone</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left border-b border-gray-200 dark:border-gray-800">
                <th className="py-2 pr-3 font-semibold">Zone</th>
                <th className="py-2 pr-3 font-semibold">Starts</th>
                <th className="py-2 font-semibold">Ends</th>
              </tr>
            </thead>
            <tbody>
              {TZ_ROWS.map((r) => (
                <tr key={r.zone} className="border-b border-gray-100 dark:border-gray-900">
                  <td className="py-2 pr-3 text-gray-600 dark:text-gray-400">{r.zone}</td>
                  <td className="py-2 pr-3 font-mono tabular">{r.start}</td>
                  <td className="py-2 font-mono tabular text-gray-600 dark:text-gray-400">{r.end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Converted with the actual daylight-saving rules for that date — the UK drops back to GMT and Europe switches to CET
          on Oct 25, which is why the offset shifts by an hour for those zones.
        </p>
      </section>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>What is confirmed, and what is not</h2>
        <p><strong>Confirmed</strong> (from the official listing and the game API):</p>
        <ul>
          <li>The event runs under a Halloween title prefix — the game page will stop reading <strong>[🎣UPDATE]</strong>.</li>
          <li>New content is bundled with it: &ldquo;New rods, fish and more!&rdquo;. Every previous &ldquo;New Content + Admin
            Abuse&rdquo; session shipped a patch minutes before the event started.</li>
          <li>It is an Admin Abuse session too, so the dev-hosted multipliers come with it.</li>
        </ul>
        <p><strong>Not confirmed</strong> — and we will not guess:</p>
        <ul>
          <li>Which rods and which fish. The developers publish no patch notes and no group shout.</li>
          <li>Rewards, if any (a scarf, a pet, a limited mutation). Nothing has been announced.</li>
          <li>Whether the Admin Abuse hour sits at the start, middle or end of the 24-hour window. In all three previous
            sessions it was at the start.</li>
        </ul>
        <p>
          As soon as anything is readable on screen — a rod price, a fish name, a rarity tier — it goes into the{' '}
          <Link href="/rods">rod tier list</Link>, the <Link href="/fish">fish index</Link> and the{' '}
          <Link href="/updates">updates log</Link>. We do not add entries we have not seen.
        </p>

        <h2>How to prepare (what worked in the last three)</h2>
        <ul>
          <li>
            <strong>Log in 10-15 minutes early</strong> with an empty backpack. The first minutes are always the free money —
            on Oct 4 the session opened with &ldquo;ICE FISH ONLY&rdquo; on every cast.
          </li>
          <li>
            <strong>Save your multiplier baits</strong> — <Link href="/baits">Tide</Link> for a guaranteed mutation,
            Meadow/Frost for x5 value, Reef for x10. They stack with the event luck, which is where the big money is.
          </li>
          <li>
            <strong>Bank cash for hole upgrades.</strong> The Hacker Event (which has run alongside these sessions) boosts
            hole-size gain from 40% to 50% — cheap progression if you are still on early holes.
          </li>
          <li>
            <strong>Watch the last five minutes.</strong> The finale multiplier has been the largest of the session each time —
            Oct 4 closed on Global Luck x20.
          </li>
          <li>
            <strong>Don&apos;t shop mid-window.</strong> Buy rods and upgrades before the countdown or after the session.
          </li>
        </ul>
        <p>
          If this is your first event, the <Link href="/beginner-guide">beginner guide</Link> covers the loop, and the{' '}
          <Link href="/events/admin-abuse">Admin Abuse page</Link> has the full log of what each previous session did.
        </p>

        <h2>Halloween codes</h2>
        <p>
          <strong>There are no Hole Fishing codes, and the Halloween event is unlikely to break that.</strong> Three Admin
          Abuse events have come and gone — Oct 4, Oct 11 and Oct 18 — with no code string released, even though the devs
          mention &ldquo;admin codes&rdquo; in chat and aggregator sites keep publishing invented lists (BIGGERHOLE,
          MUTATIONHUNT, DESERTCAST, RAREFISH, CASTANDSELL — none real). The game has a genuine redemption box in the Exclusive
          Store; it has never held a code.
        </p>
        <p>
          If that changes on Oct 25, the <Link href="/codes">codes page</Link> is where it appears, checked against the game
          page, the developer group and event footage.
        </p>

        <h2>After the event</h2>
        <p>
          Two things are worth doing once the window closes: check which new rods landed (and what they cost) on the{' '}
          <Link href="/rods">tier list</Link>, and re-check any new fish against the{' '}
          <Link href="/fish">fish index</Link> — event catches like the Delta Ray and Moon Veil only got names after creators
          showed them on stream, so the index fills in over the following days.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
    </div>
  );
}
