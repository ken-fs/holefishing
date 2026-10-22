import type { Metadata } from 'next';
import { generateSEOMetadata } from '@/lib/seo';
import { CODES_I18N, CODES_LANGS } from '@/data/i18n/codes';
import CodesIntl from '@/components/CodesIntl';

const copy = CODES_I18N.ko;

export const metadata: Metadata = generateSEOMetadata({
  title: copy.title,
  description: copy.description,
  keywords: copy.keywords,
  path: '/ko/codes',
  languages: CODES_LANGS,
});

export default function Page() {
  return <CodesIntl copy={copy} otherHref="/codes" />;
}
