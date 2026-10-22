import Link from 'next/link';
import { getGameConfig } from '@/lib/data';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';
import type { CodesCopy } from '@/data/i18n/codes';

/**
 * 多语言 codes 页的共用渲染（th / id / ko）。
 * 深链（鱼谱、服务器洞、事件表）指向英文页——那些页本来就厚，不值得再翻一遍。
 * wrapper 上带 lang：根 layout 只有一个 <html lang="en">，静态导出下没法按路由改，
 * SEO 主要靠 metadata 里的 hreflang，这里给读屏和浏览器一个正确的局部语言标记。
 */
export default function CodesIntl({ copy, otherHref }: { copy: CodesCopy; otherHref: string }) {
  const config = getGameConfig();
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Codes', url: '/codes' },
    { name: copy.h1, url: otherHref },
  ]);
  const faq = generateFAQSchema(copy.faq.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <div lang={copy.htmlLang} className="max-w-3xl mx-auto px-4 py-10">
      <nav className="text-xs text-gray-500 mb-3 flex items-center justify-between gap-3">
        <span>
          <Link href="/" className="hover:underline">Home</Link>
          {' / '}
          <Link href="/codes" className="hover:underline">Codes</Link>
        </span>
        <Link href={otherHref} className="px-2 py-1 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
          {copy.switchLabel}
        </Link>
      </nav>

      <h1 className="text-3xl font-black mb-2">{copy.h1}</h1>
      <p className="text-gray-500 mb-8">{copy.intro}</p>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">{copy.statusTitle}</h2>
        <div className="p-5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30">
          <p className="font-semibold mb-1">⚠️ {copy.statusHead}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">{copy.statusBody}</p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">{copy.stepsTitle}</h2>
        <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300 list-decimal list-inside">
          {copy.steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">{copy.fakeTitle}</h2>
        <div className="flex flex-wrap gap-2 mb-3">
          {['BIGGERHOLE', 'MUTATIONHUNT', 'DESERTCAST', 'RAREFISH', 'CASTANDSELL'].map((c) => (
            <code
              key={c}
              className="px-3 py-1.5 rounded-lg border border-red-300 dark:border-red-900 bg-red-50 dark:bg-red-950/20 font-mono font-bold text-sm line-through decoration-red-500/60"
            >
              {c}
            </code>
          ))}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{copy.fakeBody}</p>
      </section>

      <section className="mb-10 p-5 rounded-xl border border-cyan-300 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-950/20">
        <h2 className="text-lg font-bold mb-2">📅 {copy.eventTitle}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{copy.eventBody}</p>
        <p className="text-sm">
          <Link href="/events/halloween" className="underline">{copy.eventLink}</Link>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">{copy.altTitle}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{copy.altIntro}</p>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5 list-disc list-inside">
          {copy.alt.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 mt-3">
          <Link href="/server-hole" className="underline">Server Hole</Link>
          {' · '}
          <Link href="/night-fishing" className="underline">Night fishing</Link>
          {' · '}
          <Link href="/fish" className="underline">Fish Index</Link>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold mb-3">{copy.faqTitle}</h2>
        <div className="space-y-4">
          {copy.faq.map((f) => (
            <div key={f.q}>
              <p className="font-semibold text-sm mb-1">{f.q}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-gray-500">
        {copy.footer} · {config.game.name} ({config.game.currentVersion})
      </p>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </div>
  );
}
