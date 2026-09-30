#!/usr/bin/env node
// Hole Fishing 每小时游戏变化监控（零 AI、零依赖）
//
// 为什么：/codes/ 占全站 ~88% 点击。游戏一旦上线兑换码，竞品几小时内就会更新，
// 而 daily-keywords.sh 每天 11:00 才跑一次 —— 最坏会晚将近 24 小时。
// 这里每小时比对 Roblox API 的标题 / 描述 / 版本时间 / 群组公告，有变化就弹通知，
// 出现 code 字样时单独发高优先级提醒。发现变化后由人（或手动跑 agent）去更新 codes.json。
//
// cron: 17 * * * * NODE_USE_ENV_PROXY=1 https_proxy=http://127.0.0.1:7897 /opt/homebrew/bin/node <本文件>
import { readFileSync, writeFileSync, appendFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const UNIVERSE_ID = 9906378607; // placeId 80158232099900
const GROUP_ID = 612510500; // 67K CCU
const STATE = '/Users/david/Desktop/david/Ship/out/holefishing-watch.json';
const LOG = '/tmp/holefishing-watch.log';
const CODE_RE = /\bcodes?\b|redeem/i;

const log = (msg) => appendFileSync(LOG, `${new Date().toISOString()} ${msg}\n`);

function notify(title, body, sound = 'Glass') {
  const esc = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').slice(0, 200);
  try {
    execFileSync('osascript', ['-e', `display notification "${esc(body)}" with title "${esc(title)}" sound name "${sound}"`]);
  } catch {}
}

// Roblox API 偶发瞬时 SSL 错误 → 3 次重试
async function getJson(url) {
  for (let i = 1; ; i++) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(20000) });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.json();
    } catch (e) {
      if (i >= 3) throw new Error(`${url}: ${e.message}`);
      await new Promise((res) => setTimeout(res, 3000 * i));
    }
  }
}

let now;
try {
  const [game, group] = await Promise.all([
    getJson(`https://games.roblox.com/v1/games?universeIds=${UNIVERSE_ID}`).then((d) => d.data[0]),
    getJson(`https://groups.roblox.com/v1/groups/${GROUP_ID}`),
  ]);
  now = {
    name: game.name,
    description: game.description,
    updated: game.updated,
    shout: group.shout?.body ?? '',
  };
} catch (e) {
  log(`FETCH_FAILED ${e.message}`);
  process.exit(1);
}

const prev = existsSync(STATE) ? JSON.parse(readFileSync(STATE, 'utf8')) : null;
writeFileSync(STATE, JSON.stringify({ ...now, checkedAt: new Date().toISOString() }, null, 2));
if (!prev) {
  log(`BASELINE ${now.name} | updated ${now.updated}`);
  process.exit(0);
}

const changed = ['name', 'description', 'updated', 'shout'].filter((k) => prev[k] !== now[k]);
if (!changed.length) {
  log('no change');
  process.exit(0);
}

for (const k of changed) log(`CHANGED ${k}: ${JSON.stringify(prev[k])} → ${JSON.stringify(now[k])}`);

// 只看新增的文字里有没有 code，避免描述里早就有的词反复触发
const added = ['name', 'description', 'shout']
  .filter((k) => changed.includes(k))
  .map((k) => now[k])
  .join('\n');
if (CODE_RE.test(added)) {
  log('🚨 CODE_SIGNAL');
  notify('🚨 Hole Fishing 可能上线兑换码', `${changed.join('/')} 变化含 code 字样 → 立即更新 codes.json（详情 ${LOG}）`, 'Sosumi');
} else {
  notify('Hole Fishing 游戏有变化', `${changed.join(' / ')}：${now.name}（详情 ${LOG}）`);
}
