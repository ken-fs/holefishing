#!/bin/bash
# Hole Fishing 每日关键词管道
# YouTube 挖词 → 缺口分析 → 建页 → build → git push（CF 自动部署）
set -u
PROJ="/Users/david/Desktop/david/Ship/holefishing"
LOG="/tmp/holefishing-daily.log"
PI="/Users/david/Library/pnpm/bin/pi"

export PATH="/opt/homebrew/bin:/Users/david/Library/pnpm/bin:/usr/local/bin:/usr/bin:/bin"
cd "$PROJ" || exit 1

echo "=== $(date '+%Y-%m-%d %H:%M') run start ===" >> "$LOG"

"$PI" -p --no-session <<'EOF' >> "$LOG" 2>&1
你是 Hole Fishing (Roblox) 工具站的每日运营 agent。项目目录：/Users/david/Desktop/david/Ship/holefishing

## 站点现状
- 已有页面：/ /rods /fish (+41个/fish/[slug]) /codes /calculator /secret-fish /server-hole /beginner-guide /updates
- 数据文件：src/data/fish.json rods.json codes.json game.config.json
- 部署：git push origin main → Cloudflare 自动构建部署（holefishing.xyz）
- 站点所有数据必须真实（来源：YouTube gameplay 视频、tavily 搜索），禁止编造数值

## 任务流程
1. 用 tavily 搜索（tavily_tavily_search）：
   - "Hole Fishing Roblox" update / event / new（找更新动态）
   - "Hole Fishing" codes（检测游戏是否上线了 codes 系统——目前没有任何 codes，一旦发现立即更新 codes.json）
   - "Hole Fishing" 沙漠 desert event 细节（当前 EVENT 内容未完整，优先补全）
   - YouTube 上 Hole Fishing 新视频标题里的关键词（攻略需求信号）
2. 缺口分析：发现的新内容是否已有页面覆盖？
3. 只有发现【真实且有价值】的新内容时才动手：
   - 新鱼/新鱼竿 → 更新 src/data/*.json
   - 新机制/EVENT → 更新 /updates 页面
   - codes 系统上线 → 立即更新 /codes 页（这是最高优先级）
   - 改完必须：npm run build 验证通过（无 error），然后 git add -A && git commit（只 commit 不 push——推送由外层脚本统一负责）
4. 没有新内容就一行输出"今日无新增"，不要做任何代码改动

## 硬性规则
- 不编造任何游戏数据；搜不到就标注"待验证"或不做
- 不要改动页面结构/组件，只动数据文件和 /updates 内容
- build 失败绝不 push；修复不了就回滚（git checkout .）并报告
EOF
RC=$?

# 统一推送兜底：agent 只负责 commit，此处由 cron 环境推送（直连 → 代理 → 代理重试三级），失败必留痕
cd "$PROJ" || exit 1
if [ -n "$(git log origin/main..main --oneline 2>/dev/null)" ]; then
  # 凭据自检：缺 github.com 凭据时先留痕（2026-09-19 前车之鉴：cron 里取不到 keychain 会导致代理 push 失败）
  printf 'protocol=https\nhost=github.com\n\n' | GIT_TERMINAL_PROMPT=0 git credential fill >/dev/null 2>&1 \
    || echo "⚠️ CRED_MISSING：cron 环境取不到 github.com 凭据，需人工执行一次 git push 刷新 keychain" >> "$LOG"
  GIT_TERMINAL_PROMPT=0 git push -q origin main >> "$LOG" 2>&1 \
    || GIT_TERMINAL_PROMPT=0 git -c http.proxy=http://127.0.0.1:7897 push -q origin main >> "$LOG" 2>&1 \
    || { sleep 30; GIT_TERMINAL_PROMPT=0 git -c http.proxy=http://127.0.0.1:7897 push -q origin main >> "$LOG" 2>&1; } \
    || echo "⚠️ PUSH_FAILED：本地有未推送 commit，需人工处理" >> "$LOG"
fi

# IndexNow 推送（Bing / Yandex）—— 零依赖，用 out/sitemap.xml 的全量 URL
#
# 为什么只推 IndexNow 不推 Google Indexing API：实测 Google 那个 API 对非
# JobPosting/BroadcastEvent 内容**静默忽略**（publish 返回 200 但不带
# notifyTime，metadata 立刻 404）。IndexNow 是 Bing/Yandex 的官方通道，真有效。
# Google 侧的收录只能靠 sitemap + 内链 + 外链，没有可用的推送 API。
KEY="e806fbee77f140daaac27f6e1193da54"
if [ -f "$PROJ/out/sitemap.xml" ]; then
  # 整段交给 python：macOS 的 sed 对 \? 支持不可靠，之前踩过（标签没剥掉 → IndexNow 400）
  PAYLOAD=$(SITEMAP="$PROJ/out/sitemap.xml" KEY="$KEY" python3 - <<'PYEOF'
import json, os, re
urls = re.findall(r'<loc>([^<]+)</loc>', open(os.environ['SITEMAP'], encoding='utf-8').read())
print(json.dumps({
    'host': 'holefishing.xyz',
    'key': os.environ['KEY'],
    'keyLocation': f"https://holefishing.xyz/{os.environ['KEY']}.txt",
    'urlList': urls,
}))
PYEOF
)
  echo "$PAYLOAD" > /tmp/holefishing-indexnow.json
  CODE=$(curl -s -o /dev/null -w '%{http_code}' --max-time 60 -X POST "https://api.indexnow.org/indexnow" \
    -H "Content-Type: application/json; charset=utf-8" --data-binary @/tmp/holefishing-indexnow.json 2>/dev/null)
  echo "IndexNow: HTTP $CODE ($(python3 -c "import json;print(len(json.load(open('/tmp/holefishing-indexnow.json'))['urlList']))") URLs)" >> "$LOG"
  [ "$CODE" = "200" ] || echo "⚠️ INDEXNOW_FAILED：HTTP $CODE" >> "$LOG"
fi

echo "=== $(date '+%Y-%m-%d %H:%M') run start ===" >> "$LOG"

"$PI" -p --no-session <<'EOF' >> "$LOG" 2>&1
你是 Hole Fishing (Roblox) 工具站的每日运营 agent。项目目录：/Users/david/Desktop/david/Ship/holefishing

## 站点现状
- 已有页面：/ /rods /fish (+41个/fish/[slug]) /codes /calculator /secret-fish /server-hole /beginner-guide /updates
- 数据文件：src/data/fish.json rods.json codes.json game.config.json
- 部署：git push origin main → Cloudflare 自动构建部署（holefishing.xyz）
- 站点所有数据必须真实（来源：YouTube gameplay 视频、tavily 搜索），禁止编造数值

## 任务流程
1. 用 tavily 搜索（tavily_tavily_search）：
   - "Hole Fishing Roblox" update / event / new（找更新动态）
   - "Hole Fishing" codes（检测游戏是否上线了 codes 系统——目前没有任何 codes，一旦发现立即更新 codes.json）
   - "Hole Fishing" 沙漠 desert event 细节（当前 EVENT 内容未完整，优先补全）
   - YouTube 上 Hole Fishing 新视频标题里的关键词（攻略需求信号）
2. 缺口分析：发现的新内容是否已有页面覆盖？
3. 只有发现【真实且有价值】的新内容时才动手：
   - 新鱼/新鱼竿 → 更新 src/data/*.json
   - 新机制/EVENT → 更新 /updates 页面
   - codes 系统上线 → 立即更新 /codes 页（这是最高优先级）
   - 改完必须：npm run build 验证通过（无 error），然后 git add -A && git commit（只 commit 不 push——推送由外层脚本统一负责）
4. 没有新内容就一行输出"今日无新增"，不要做任何代码改动

## 硬性规则
- 不编造任何游戏数据；搜不到就标注"待验证"或不做
- 不要改动页面结构/组件，只动数据文件和 /updates 内容
- build 失败绝不 push；修复不了就回滚（git checkout .）并报告
EOF
RC=$?

# 统一推送兜底：agent 只负责 commit，此处由 cron 环境推送（直连 → 代理 → 代理重试三级），失败必留痕
cd "$PROJ" || exit 1
if [ -n "$(git log origin/main..main --oneline 2>/dev/null)" ]; then
  # 凭据自检：缺 github.com 凭据时先留痕（2026-09-19 前车之鉴：cron 里取不到 keychain 会导致代理 push 失败）
  printf 'protocol=https\nhost=github.com\n\n' | GIT_TERMINAL_PROMPT=0 git credential fill >/dev/null 2>&1 \
    || echo "⚠️ CRED_MISSING：cron 环境取不到 github.com 凭据，需人工执行一次 git push 刷新 keychain" >> "$LOG"
  GIT_TERMINAL_PROMPT=0 git push -q origin main >> "$LOG" 2>&1 \
    || GIT_TERMINAL_PROMPT=0 git -c http.proxy=http://127.0.0.1:7897 push -q origin main >> "$LOG" 2>&1 \
    || { sleep 30; GIT_TERMINAL_PROMPT=0 git -c http.proxy=http://127.0.0.1:7897 push -q origin main >> "$LOG" 2>&1; } \
    || echo "⚠️ PUSH_FAILED：本地有未推送 commit，需人工处理" >> "$LOG"
fi

# IndexNow 推送（Bing / Yandex）—— 零依赖，用 out/sitemap.xml 的全量 URL
#
# 为什么只推 IndexNow 不推 Google Indexing API：实测 Google 那个 API 对非
# JobPosting/BroadcastEvent 内容**静默忽略**（publish 返回 200 但不带
# notifyTime，metadata 立刻 404）。IndexNow 是 Bing/Yandex 的官方通道，真有效。
# Google 侧的收录只能靠 sitemap + 内链 + 外链，没有可用的推送 API。
KEY="e806fbee77f140daaac27f6e1193da54"
if [ -f "$PROJ/out/sitemap.xml" ]; then
  URLS=$(grep -o '<loc>[^<]*</loc>' "$PROJ/out/sitemap.xml" | sed 's|</\?loc>||g' | python3 -c "
import sys, json
urls = [l.strip() for l in sys.stdin if l.strip()]
print(json.dumps({'host':'holefishing.xyz','key':'$KEY','keyLocation':'https://holefishing.xyz/$KEY.txt','urlList':urls}))
")
  CODE=$(curl -s -o /dev/null -w '%{http_code}' --max-time 60 -X POST "https://api.indexnow.org/indexnow" \
    -H "Content-Type: application/json; charset=utf-8" -d "$URLS" 2>/dev/null)
  echo "IndexNow: HTTP $CODE" >> "$LOG"
  [ "$CODE" = "200" ] || echo "⚠️ INDEXNOW_FAILED：HTTP $CODE" >> "$LOG"
fi

echo "=== $(date '+%Y-%m-%d %H:%M') run end (exit $RC) ===" >> "$LOG"
