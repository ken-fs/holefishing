import Link from 'next/link';
import { getGameConfig } from '@/lib/data';

const config = getGameConfig();

const NAV = [
  { href: '/rods', label: 'Rod Tier List' },
  { href: '/fish', label: 'Fish Index' },
  { href: '/calculator', label: 'Calculator' },
  { href: '/codes', label: 'Codes' },
  { href: '/secret-fish', label: 'Secret Fish' },
  { href: '/server-hole', label: 'Server Hole' },
  { href: '/beginner-guide', label: 'Guide' },
  { href: '/updates', label: 'Updates' },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-2">
        <Link href="/" className="font-bold text-lg tracking-tight hover:text-cyan-600 transition-colors whitespace-nowrap">
          🎣 {config.game.name}
          <span className="text-xs text-gray-400 ml-2 font-normal hidden md:inline">Guide &amp; Tools</span>
        </Link>
        <nav className="flex items-center gap-0.5 text-sm font-medium overflow-x-auto">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-2.5 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
