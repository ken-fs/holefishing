#!/bin/bash
# Hole Fishing 每日关键词管道
# YouTube 挖词 → 缺口分析 → 建页 → build → git push（CF 自动部署）
set -u
PROJ="/Users/david/Projects/holefishing-gg"
LOG="/tmp/holefishing-daily.log"
PI="/Users/david/Library/pnpm/bin/pi"

export PATH="/Users/david/Library/pnpm/bin:/usr/local/bin:/usr/bin:/bin"
cd "$PROJ" || exit 1

echo "=== $(date '+%Y-%m-%d %H:%M') run start ===" >> "$LOG"

"$PI" -p --no-session <<'EOF' >> "$LOG" 2>&1
你是 Hole Fishing (Roblox) 工具站的每日运营 agent。项目目录：/Users/david/Projects/holefishing-gg

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
   - 改完必须：npm run build 验证通过（无 error），然后 git add -A && git commit && git push（用 GIT_TERMINAL_PROMPT=0）
4. 没有新内容就一行输出"今日无新增"，不要做任何代码改动

## 硬性规则
- 不编造任何游戏数据；搜不到就标注"待验证"或不做
- 不要改动页面结构/组件，只动数据文件和 /updates 内容
- build 失败绝不 push；修复不了就回滚（git checkout .）并报告
EOF

echo "=== $(date '+%Y-%m-%d %H:%M') run end (exit $?) ===" >> "$LOG"
