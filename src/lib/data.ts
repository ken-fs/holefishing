/**
 * data.ts — Hole Fishing 数据访问层
 * 数据来源：真实 gameplay 视频挖掘（见 references），禁止编造数值。
 */
import fishData from '@/data/fish.json';
import rodsData from '@/data/rods.json';
import codesData from '@/data/codes.json';
import configData from '@/data/game.config.json';

export interface Fish {
  slug: string;
  name: string;
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythical' | 'Secret';
  time: 'day' | 'night' | 'any';
  valueRange: string;
  weightKg?: number;
  note: string;
  /** true = sighted in gameplay but rarity/time/value not yet confirmed */
  unverified?: boolean;
}

export interface Rod {
  slug: string;
  name: string;
  order: number;
  price: number;
  priceText: string;
  maxWeightKg: number;
  tier: string;
  note: string;
  /** false = rod confirmed to exist but price/ladder position still being verified */
  priceVerified?: boolean;
}

export interface GameConfig {
  game: {
    name: string;
    robloxId: string;
    developer: string;
    genre: string;
    currentVersion: string;
    lastUpdated: string;
    platforms: string[];
  };
  stats: {
    visits: string;
    favorites: string;
    onlineNow: string;
    serverSize: number;
    active: boolean;
  };
  seo: {
    siteTitle: string;
    siteDescription: string;
    baseUrl: string;
    defaultOgImage: string;
    primaryKeywords: string[];
    secondaryKeywords: string[];
  };
  routes: { path: string; title: string; priority: string }[];
}

const fish: Fish[] = (fishData as { fish: Fish[] }).fish;
const rods: Rod[] = (rodsData as { rods: Rod[] }).rods;
const config: GameConfig = configData as GameConfig;

export function getGameConfig(): GameConfig {
  return config;
}

export function getAllFish(): Fish[] {
  return fish;
}

export function getFishBySlug(slug: string): Fish | undefined {
  return fish.find((f) => f.slug === slug);
}

export function getFishByRarity(rarity: Fish['rarity']): Fish[] {
  return fish.filter((f) => f.rarity === rarity);
}

export function getRods(): Rod[] {
  return [...rods].sort((a, b) => a.order - b.order);
}

export function getRodBySlug(slug: string): Rod | undefined {
  return rods.find((r) => r.slug === slug);
}

export function getCodes(): { note: string; active: { code: string; reward: string }[]; expired: { code: string; reward: string }[] } {
  return codesData;
}

export const RARITY_ORDER = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythical', 'Secret'] as const;

export const RARITY_COLORS: Record<string, string> = {
  Common: 'bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600',
  Uncommon: 'bg-green-100 text-green-700 border-green-300 dark:bg-green-950 dark:text-green-300 dark:border-green-800',
  Rare: 'bg-blue-100 text-blue-700 border-blue-300 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800',
  Epic: 'bg-purple-100 text-purple-700 border-purple-300 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800',
  Legendary: 'bg-amber-100 text-amber-700 border-amber-300 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800',
  Mythical: 'bg-rose-100 text-rose-700 border-rose-300 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800',
  Secret: 'bg-cyan-100 text-cyan-700 border-cyan-300 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800',
};
