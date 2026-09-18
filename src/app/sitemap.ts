import type { MetadataRoute } from 'next';
import { getGameConfig, getAllFish } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const config = getGameConfig();
  const base = config.seo.baseUrl;
  const now = new Date();

  const entries: MetadataRoute.Sitemap = config.routes.map((r) => ({
    // 尾斜杠必须与 canonical 一致（非斜杠 URL 会 307 跳转，浪费抓取预算）
    url: `${base}${r.path === '/' ? '' : `${r.path}/`}`,
    lastModified: now,
    changeFrequency: r.path === '/codes' || r.path === '/updates' ? 'daily' : 'weekly',
    priority: Number(r.priority),
  }));

  for (const f of getAllFish()) {
    entries.push({
      url: `${base}/fish/${f.slug}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  }

  return entries;
}
