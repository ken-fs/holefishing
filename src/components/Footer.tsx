import Link from 'next/link';
import { getGameConfig } from '@/lib/data';

const config = getGameConfig();

const GUIDE_LINKS = [
  { href: '/beginner-guide', label: 'Beginner Guide' },
  { href: '/money-guide', label: 'Money Guide' },
  { href: '/upgrades', label: 'Upgrade Guide' },
  { href: '/mutations', label: 'Mutations' },
  { href: '/night-fishing', label: 'Night Fishing' },
  { href: '/mistakes', label: 'Common Mistakes' },
  { href: '/rods', label: 'Rod Tier List' },
  { href: '/fish', label: 'Fish Index' },
  { href: '/server-hole', label: 'Server Hole' },
  { href: '/secret-fish', label: 'Secret Fish' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-5 text-sm text-gray-600 dark:text-gray-400">
          {GUIDE_LINKS.map((g) => (
            <Link key={g.href} href={g.href} className="hover:text-cyan-600 dark:hover:text-cyan-400 hover:underline">
              {g.label}
            </Link>
          ))}
        </nav>
        <div className="text-center text-sm text-gray-500">
          <div className="flex justify-center gap-4 mb-3">
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link href="/about" className="hover:underline">About</Link>
          </div>
          <p className="mb-2">
            🎣 {config.game.name} Guide &amp; Tools — Fan-made companion site. Not affiliated with Roblox Corporation or the game developers.
          </p>
          <p>© {year} {config.seo.baseUrl.replace('https://', '')}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
