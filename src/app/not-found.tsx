import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-4">🕳️</div>
      <h1 className="text-3xl font-black mb-2">404 — Nothing in this hole</h1>
      <p className="text-gray-500 mb-6">This page swam away. The fish are still biting though.</p>
      <Link href="/" className="px-5 py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-colors">
        Back to the Hole
      </Link>
    </div>
  );
}
