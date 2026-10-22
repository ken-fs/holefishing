import type { MetadataRoute } from 'next';
import { getGameConfig, getAllFish, getRods } from '@/lib/data';
import { CODES_LANGS } from '@/data/i18n/codes';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const config = getGameConfig();
  const base = config.seo.baseUrl;
  const now = new Date();

  // hreflang 版本必须在 sitemap 里也对称写一份，Google 会两边对账
  const codesAlternates = {
    languages: Object.fromEntries(
      Object.entries(CODES_LANGS).map(([lang, path]) => [lang, `${base}${path}/`]),
    ),
  };

  const codesPaths = ['/codes', '/th/codes', '/id/codes', '/ko/codes'];

  const entries: MetadataRoute.Sitemap = config.routes.map((r) => ({
    // 尾斜杠必须与 canonical 一致（非斜杠 URL 会 307 跳转，浪费抓取预算）
    url: `${base}${r.path === '/' ? '/' : `${r.path}/`}`,
    lastModified: now,
    changeFrequency: r.path === '/codes' || r.path === '/updates' ? 'daily' : 'weekly',
    priority: Number(r.priority),
    ...(codesPaths.includes(r.path) ? { alternates: codesAlternates } : {}),
  }));

  for (const r of getRods()) {
    entries.push({
      url: `${base}/rods/${r.slug}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  }

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
