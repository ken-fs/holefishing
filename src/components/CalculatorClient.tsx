'use client';

import { useState, useMemo } from 'react';
import rodsData from '@/data/rods.json';

interface Rod {
  slug: string;
  name: string;
  order: number;
  price: number;
  priceText: string;
  maxWeightKg: number;
  tier: string;
  note: string;
  priceVerified?: boolean;
}

const ALL_RODS = (rodsData as { rods: Rod[] }).rods;
// Only rods with a verified price are used in the cost math — see /rods for the full ladder.
const RODS = ALL_RODS.filter((r) => r.priceVerified !== false);
const UNVERIFIED_COUNT = ALL_RODS.length - RODS.length;

const CATCH_PRESETS = [
  { label: 'Early game (~$500/catch)', value: 500 },
  { label: 'Mid game (~$20K/catch)', value: 20000 },
  { label: 'Late game (~$500K/catch)', value: 500000 },
  { label: 'End game (~$5M/catch)', value: 5000000 },
];

function fmt(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(1)}K`;
  return `$${n.toLocaleString()}`;
}

export default function CalculatorClient() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [targetIdx, setTargetIdx] = useState(6);
  const [avgCatch, setAvgCatch] = useState(20000);

  const result = useMemo(() => {
    if (targetIdx <= currentIdx) return null;
    const cost = RODS.slice(currentIdx + 1, targetIdx + 1).reduce((s, r) => s + r.price, 0);
    const catches = avgCatch > 0 ? Math.ceil(cost / avgCatch) : 0;
    const minutes = Math.round((catches * 20) / 60); // ~20s per cast
    return { cost, catches, minutes };
  }, [currentIdx, targetIdx, avgCatch]);
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-black mb-2">Hole Fishing Progression Calculator</h1>
      <p className="text-gray-500 mb-8">How much cash — and how many casts — between you and your next rod?</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <label className="block">
          <span className="text-sm font-semibold block mb-1">Current rod</span>
          <select
            value={currentIdx}
            onChange={(e) => setCurrentIdx(Number(e.target.value))}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
          >
            {RODS.map((r, i) => (
              <option key={r.slug} value={i}>{r.order}. {r.name} ({r.priceText})</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold block mb-1">Target rod</span>
          <select
            value={targetIdx}
            onChange={(e) => setTargetIdx(Number(e.target.value))}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
          >
            {RODS.map((r, i) => (
              <option key={r.slug} value={i}>{r.order}. {r.name} ({r.priceText})</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mb-6">
        <span className="text-sm font-semibold block mb-2">Your average catch value</span>
        <div className="flex flex-wrap gap-2 mb-3">
          {CATCH_PRESETS.map((p) => (
            <button
              key={p.value}
              onClick={() => setAvgCatch(p.value)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                avgCatch === p.value
                  ? 'bg-cyan-600 text-white border-cyan-600'
                  : 'border-gray-300 dark:border-gray-700 hover:border-cyan-500'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <label className="block">
          <span className="text-xs text-gray-400">Custom value ($)</span>
          <input
            type="number"
            min={1}
            value={avgCatch}
            onChange={(e) => setAvgCatch(Math.max(1, Number(e.target.value) || 1))}
            className="mt-1 w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 font-mono"
          />
        </label>
      </div>

      {result ? (
        <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/40 dark:to-blue-950/40 border border-cyan-200 dark:border-cyan-900">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-xs text-gray-500 uppercase mb-1">Cash Needed</div>
              <div className="text-2xl font-black text-cyan-700 dark:text-cyan-300">{fmt(result.cost)}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase mb-1">≈ Casts</div>
              <div className="text-2xl font-black">{result.catches.toLocaleString()}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase mb-1">≈ Active Time</div>
              <div className="text-2xl font-black">
                {result.minutes >= 60 ? `${Math.floor(result.minutes / 60)}h ${result.minutes % 60}m` : `${result.minutes}m`}
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Estimates ~20s per cast with no Server Hole events. Server Hole 4x windows can cut this by 50%+ — see the{' '}
            <a href="/server-hole" className="underline">Server Hole guide</a>.
            {UNVERIFIED_COUNT > 0 && (
              <>
                {' '}Excludes {UNVERIFIED_COUNT} rods whose shop price is still being verified (Night, Magma, Alien, Royal) —
                see the <a href="/rods" className="underline">full ladder</a>.
              </>
            )}
          </p>
        </div>
      ) : (
        <div className="p-5 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 text-sm">
          Select a target rod above your current rod.
        </div>
      )}
    </div>
  );
}
