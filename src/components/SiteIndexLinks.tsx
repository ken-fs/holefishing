import Link from 'next/link';
import { getAllFish, getRods, RARITY_ORDER, RARITY_COLORS } from '@/lib/data';

/**
 * 全站深层页内链枢纽（2026-09-28）
 *
 * 背景：URL Inspection 批量检查发现全站 84 页里 75 页「URL is unknown to Google」
 * （48 鱼页 + 16 杆页 + 11 攻略页从未被抓取），全站流量 97% 压在 /codes/ 单页。
 * 修复 = 在 Google 常爬的两页（首页 + /codes/）放全量深层页内链，给爬虫一条发现路径。
 *
 * 杆页数据顺序按 rods.json 的 order（进度顺序），攻略页为固定清单。
 */

const GUIDES = [
  { href: '/beginner-guide/', title: 'Beginner Guide' },
  { href: '/money-guide/', title: 'Money Guide' },
  { href: '/upgrades/', title: 'Upgrade Order' },
  { href: '/mutations/', title: 'Mutations' },
  { href: '/night-fishing/', title: 'Night Fishing' },
  { href: '/mistakes/', title: 'Common Mistakes' },
  { href: '/calculator/', title: 'Progression Calculator' },
  { href: '/secret-fish/', title: 'Secret Fish' },
  { href: '/server-hole/', title: 'Server Hole' },
  { href: '/faq/', title: 'FAQ' },
  { href: '/community/', title: 'Community & Group' },
  { href: '/scripts/', title: 'Scripts & Bans' },
];

const chip =
  'text-sm px-2 py-1 rounded-md border border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors';

export default function SiteIndexLinks() {
  const fish = getAllFish();
  const rods = [...getRods()].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <>
      <section className="mb-10">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-2xl font-black">Fish Index — Every Species</h2>
          <Link href="/fish" className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">
            Full index →
          </Link>
        </div>
        <div className="space-y-3">
          {RARITY_ORDER.map((rarity) => {
            const group = fish.filter((f) => f.rarity === rarity);
            if (!group.length) return null;
            return (
              <div key={rarity} className="flex flex-wrap items-center gap-1.5">
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full border font-bold uppercase mr-1 ${RARITY_COLORS[rarity]}`}
                >
                  {rarity}
                </span>
                {group.map((f) => (
                  <Link key={f.slug} href={`/fish/${f.slug}`} className={chip}>
                    {f.name}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-10">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-2xl font-black">Rod Guides — Full Ladder</h2>
          <Link href="/rods" className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">
            Rod tier list →
          </Link>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {rods.map((r) => (
            <Link key={r.slug} href={`/rods/${r.slug}`} className={chip}>
              {r.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-black mb-4">Guides &amp; Tools</h2>
        <div className="flex flex-wrap gap-1.5">
          {GUIDES.map((g) => (
            <Link key={g.href} href={g.href} className={chip}>
              {g.title}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
