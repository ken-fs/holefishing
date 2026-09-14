import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About', description: 'About this Hole Fishing fan guide site.' };

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-gray dark:prose-invert">
      <h1>About</h1>
      <p>
        holefishing.xyz is a fan-made companion site for the Roblox game <strong>Hole Fishing</strong> by 67K CCU.
        We maintain the fish index, rod tier list, progression calculator and event guides — updated daily.
      </p>
      <p>
        This site is not affiliated with, endorsed by, or connected to Roblox Corporation or the game&apos;s developers.
        All game data is gathered from public gameplay and community sources.
      </p>
    </div>
  );
}
