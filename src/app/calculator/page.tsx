import type { Metadata } from 'next';
import CalculatorClient from '@/components/CalculatorClient';
import { generateSEOMetadata, generateBreadcrumbSchema, generateFAQSchema, getCurrentDateString } from '@/lib/seo';

export const metadata: Metadata = generateSEOMetadata({
  title: `Hole Fishing Calculator (${getCurrentDateString()}) — Rod Progression & Cash Planner`,
  description:
    'Free Hole Fishing calculator: pick your current rod and target rod to see exact cash needed, estimated casts and grind time. Plan your progression efficiently.',
  keywords: ['hole fishing calculator', 'hole fishing progression', 'hole fishing rod cost', 'hole fishing money guide'],
  path: '/calculator',
});

export default function CalculatorPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Calculator', url: '/calculator' },
  ]);
  const faq = generateFAQSchema([
    {
      question: 'How does the Hole Fishing calculator work?',
      answer:
        'Pick your current rod and target rod. The calculator sums the real in-game rod prices between them, then divides by your average catch value to estimate how many casts and how much active playtime you need.',
    },
    {
      question: 'How can I speed up progression in Hole Fishing?',
      answer:
        'Fish during Server Hole events (4x cash), fish at night (night fish sell for more), complete index milestones for permanent luck, and keep sell-value upgrades maxed relative to your level.',
    },
    { question: 'Is the Hole Fishing calculator free?', answer: 'Yes — completely free, no login required.' },
  ]);

  return (
    <>
      <CalculatorClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
