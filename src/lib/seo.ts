import { Metadata } from 'next';
import { getGameConfig } from './data';

const config = getGameConfig();
const baseUrl = config.seo.baseUrl;

interface SEOProps {
  /** 传 string 会用 layout 的 `%s | Hole Fishing` 模板；传 { absolute } 可绕开模板，避免标题里游戏名重复（2026-10-23） */
  title: string | { absolute: string } | { default: string; template: string };
  description: string;
  keywords?: string[];
  path: string;
  ogImage?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  /** hreflang 版本表，如 { en: '/codes', th: '/th/codes', 'x-default': '/codes' } */
  languages?: Record<string, string>;
}

export function generateSEOMetadata(props: SEOProps): Metadata {
  const {
    title,
    description,
    keywords,
    path,
    ogImage = config.seo.defaultOgImage,
    type = 'website',
    publishedTime,
    modifiedTime,
    languages,
  } = props;

  const url = `${baseUrl}${path}`;
  const imageUrl = `${baseUrl}${ogImage}`;
  // OG / Twitter 只能吃字符串：对象标题取 absolute（或 default）当纯文本用
  const plainTitle = typeof title === 'string' ? title : 'absolute' in title ? title.absolute : title.default;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url.endsWith('/') ? url : `${url}/`,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title: plainTitle,
      description,
      url,
      siteName: config.game.name,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: plainTitle }],
      type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: plainTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

export function generateFAQSchema(questions: { question: string; answer: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

export function generateVideoGameSchema(): object {
  // robloxId 未填时不输出 url，避免发出 roblox.com/games/ 这种坏链
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: config.game.name,
    description: config.seo.siteDescription,
    genre: config.game.genre,
    operatingSystem: config.game.platforms.join(', '),
    author: {
      '@type': 'Organization',
      name: config.game.developer,
    },
  };
  if (config.game.robloxId) {
    schema.url = `https://www.roblox.com/games/${config.game.robloxId}`;
  }
  return schema;
}

export function generateWebSiteSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.seo.siteTitle,
    url: baseUrl,
    description: config.seo.siteDescription,
  };
}

export function getCurrentDateString(): string {
  const date = new Date();
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}
