import Link from 'next/link';
import { getAllFish, RARITY_ORDER, RARITY_COLORS } from '@/lib/data';

/**
 * 全鱼种内链模块（2026-09-28 加）
 * 背景：41 个 /fish/[slug] 页上线两周 Google 零抓取（URL Inspection: "URL is unknown to Google"）。
 * 全站最强的首页 + /codes/ 原来各只有 2 条鱼页内链 → 在最强页面放全量内链，
 * 给 Google 一条发现深页的爬取路径。只放这两个强页，不撒全站（全站放会稀释权重）。
 */
export default function FishIndexLinks() {
  const fish = getAllFish();
  return (
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
                <Link
                  key={f.slug}
                  href={`/fish/${f.slug}`}
                  className="text-sm px-2 py-1 rounded-md border border-gray-200 dark:border-gray-800 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {f.name}
                </Link>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
