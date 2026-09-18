import type { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Scripts (${getCurrentDateString()}) — Why They Get You Banned`,
  description:
    'Looking for a Hole Fishing script? Read this first: how Roblox anti-cheat detection works, what script executors actually install on your PC, and the free methods that earn the same money safely.',
  keywords: ['hole fishing script', 'hole fishing scripts', 'hole fishing hack', 'hole fishing auto fish', 'hole fishing exploit'],
  path: '/scripts',
});

export default function ScriptsPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Scripts', url: '/scripts' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'Is there a working Hole Fishing script?',
      answer:
        'Scripts for Hole Fishing circulate on YouTube and script sites, and they usually do function for a while. The problem is not whether they work — it is what happens after: Roblox anti-cheat detection, account bans, and malware risk from the executor you have to install to run them.',
    },
    {
      question: 'Will I get banned for using a Hole Fishing script?',
      answer:
        'Exploiting violates the Roblox Terms of Use, and enforcement is at Roblox\'s discretion — not the game developer\'s. Roblox runs server-side detection (including Byfron/Hyperion on PC) and issues account terminations and rolling bans. A script that works today can be detected next week and ban accounts retroactively.',
    },
    {
      question: 'Are Roblox script executors safe to download?',
      answer:
        'No. Executors require you to disable antivirus and run an unsigned binary with full system access. That is the exact profile of infostealer malware, and several popular Roblox executors have been caught shipping credential stealers. Your Roblox account, email and other logins are the target.',
    },
    {
      question: 'How do I get money fast in Hole Fishing without scripts?',
      answer:
        'The legitimate route is faster than most players think: Server Hole windows pay 4x cash every ~20 minutes, night-exclusive fish sell for multiples of day catches, and index milestones stack permanent luck. See the money guide for the full ranked list.',
    },
    {
      question: 'Do scripts affect the Hole Fishing developers?',
      answer:
        'Yes. Hole Fishing is made by a small group (67K CCU). Exploits that spawn fish or auto-sell distort the game economy and can force developers to spend update time on anti-cheat instead of content — which slows the game down for everyone playing legitimately.',
    },
  ]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Scripts — Read This First</h1>
      <p className="text-gray-500 mb-8">
        If you searched for a script, here is the honest version of what happens next. Updated {getCurrentDateString()}.
      </p>

      <div className="p-5 rounded-xl border border-red-300 dark:border-red-900 bg-red-50 dark:bg-red-950/20 mb-10">
        <p className="font-bold mb-1">⚠️ The short version</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Scripts work until they don&apos;t. Executors are the real risk — they run with full system access and are a
          known malware vector. And a ban on your Roblox account takes your entire inventory with it, not just the
          fish you cheated for.
        </p>
      </div>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>What Hole Fishing Scripts Actually Do</h2>
        <p>
          Scripts circulating for Hole Fishing advertise the same handful of features: auto-fishing, spawn-selected
          fish, infinite backpack space, auto-sell, and instant cash. They work by injecting Lua into the Roblox client
          through a third-party <strong>executor</strong>. The executor is the part that matters, and it is the part
          nobody warns you about.
        </p>

        <h2>The Three Real Risks</h2>
        <h3>1. Your account, permanently</h3>
        <p>
          Exploiting breaks the Roblox Terms of Use. Enforcement comes from Roblox, not from the Hole Fishing
          developers, which means it is automated, server-side, and applied in waves. Roblox&apos;s PC anti-cheat
          (Byfron / Hyperion) is designed specifically to catch injected clients. When a wave lands, it does not matter
          that your script was undetected last month — bans are issued retroactively against the account.
        </p>
        <p>
          And the account is the asset: your fish index, your rods, your 180K-favourite game history. A ban takes all of
          it.
        </p>
        <h3>2. Your PC</h3>
        <p>
          Every executor requires you to disable antivirus and run an unsigned executable with administrator rights.
          That is precisely the delivery profile of infostealer malware, and multiple popular Roblox executors have been
          documented shipping credential stealers. The payload target is not your fish — it is your browser
          passwords, your email, and your Roblox session token.
        </p>
        <h3>3. The game itself</h3>
        <p>
          Hole Fishing is built by a small group. Spawned fish and auto-sold inventories distort the economy the whole
          progression curve is balanced around, and anti-cheat work is update time that does not go into new fish, rods
          or events.
        </p>

        <h2>What Scripts Don&apos;t Actually Give You</h2>
        <p>
          Even the &quot;legit&quot; script features are worse than they look. Spawn-selected fish do not fill your index
          legitimately, auto-sell skips the mutation rolls and Server Hole multipliers that make catches valuable, and
          an inflated cash balance does not unlock the rods your account still has to earn. The progression curve in
          Hole Fishing is the game — skip it and there is nothing left to play.
        </p>
      </section>

      <section className="prose prose-gray dark:prose-invert max-w-none mb-10">
        <h2>The Legitimate Route (Which Is Fast Anyway)</h2>
        <p>
          Hole Fishing is unusually generous to free players. The same results scripts advertise are reachable within
          days:
        </p>
        <ul>
          <li>
            <strong>Server Hole windows</strong> — every ~20 minutes, ~60 seconds of 4x cash with boosted mutation rolls.
            This is the single biggest income multiplier in the game, and it is free. See the{' '}
            <Link href="/server-hole">Server Hole guide</Link>.
          </li>
          <li>
            <strong>Night fishing</strong> — night-exclusive species carry far higher base values, and the{' '}
            <Link href="/night-fishing">night fishing guide</Link> lists every one of them with values.
          </li>
          <li>
            <strong>Index milestones</strong> — each new species adds permanent +10 index luck. This is the compounding
            upgrade scripts can never give you, because it is tied to legitimately catching new species.
          </li>
          <li>
            <strong>Sell-value upgrades</strong> — a permanent multiplier on every sale that stacks with everything
            above. Covered in the <Link href="/upgrades">upgrade guide</Link>.
          </li>
        </ul>
        <p>
          Ranked end to end in the <Link href="/money-guide">money guide</Link>. A focused player using Server Hole
          timing and night cycles out-earns an AFK script farmer within a week — without risking the account.
        </p>

        <h2>If You Already Ran a Script</h2>
        <ol>
          <li><strong>Change your Roblox password</strong> and enable 2FA if it is not already on — executors can lift session tokens.</li>
          <li><strong>Run a full malware scan</strong> with something other than Windows Defender, since you likely disabled it.</li>
          <li><strong>Check your email and bank logins</strong> for unfamiliar activity — infostealers move fast.</li>
          <li><strong>Stop running it.</strong> There is no &quot;safe&quot; amount of exploiting; detection is retroactive.</li>
        </ol>
        <p className="text-sm text-gray-500">
          We do not host, link to, or distribute scripts. This page exists because the search demand is real and the
          honest answer is buried under monetised script sites.
        </p>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
