# Hole Fishing 站运营日志

> 最后更新：2026-09-14 · 状态：✅ 已上线运营中

## 站点信息

| 项 | 值 |
|----|-----|
| 域名 | https://holefishing.xyz |
| 仓库 | https://github.com/ken-fs/holefishing |
| 部署 | Cloudflare Workers 静态资产，`git push` → 自动构建部署 |
| GA4 | G-QX57H8KJLJ |
| 本地项目 | ~/Desktop/david/Ship/holefishing |
| 游戏本体 | [Hole Fishing](https://www.roblox.com/games/80158232099900) by 67K CCU（上线时 3,109 在线，🏜️沙漠EVENT进行中）|

## 当前规模

- **56 页全静态**：9 Hub 页 + 41 鱼详情页 + 法律页
- 核心页：`/rods`（12竿全价格表）`/fish`（41鱼图鉴）`/calculator`（进度计算器）`/codes`（无码监控占位）`/secret-fish` `/server-hole` `/beginner-guide` `/updates`
- 数据源：3 个真实 gameplay 视频字幕挖掘（Super Lex / Otter 150K播放 / Randy），存疑值标 `~`
- SEO：Schema 全套（VideoGame/WebSite/Breadcrumb/每页FAQ）、sitemap 53 URL、llms.txt、安全头、亮色编辑风设计
- SEO Health Score：85（2026-09-14 审计，[报告见会话记录]）

## 自动化

- **每日关键词管道**：cron 每天 11:00 跑 `scripts/daily-keywords.sh`
  - 日志：`/tmp/holefishing-daily.log`
  - 重点监控：codes 系统上线（最高优先）、沙漠 EVENT 细节、新鱼/新竿
  - 护栏：禁编数据、build 失败不 push、自动回滚

## 已确认的真实游戏数据

- **鱼竿阶梯**：Starter(免费) → Stone($1K) → Golden($7.5K) → Leaf($25K) → Cactus($150K, 80kg) → Tree(~$650K) → Pirate($2M, 1200kg) → Magic(~$4.8M) → Bone(~$11M) → Candy Cane(~$26M) → Void(~$60M) → **Hacker($320M, 封顶)**
- **稀有度**：Common→Uncommon→Rare→Epic→Legendary→Mythical→Secret
- **秘密鱼**：Glacial Wyrm（$3B+，已确认捕获）、Alien（机制待验证）
- **机制**：昼夜循环（夜鱼更贵）、Server Hole（~20min冷却/~60s/4x现金）、突变（Big/Large/Huge/Giant）、图鉴 +10 luck 里程碑
- **codes**：游戏当前**无** codes 系统

## 待办（按优先级）

1. ☐ **GSC + Bing 提交 sitemap**（手动一次性，今天就做）→ 之后才能看收录/曝光数据
2. ☐ 沙漠 EVENT 内容补全（管道在挖，或人工进游戏确认 EVENT 专属鱼/竿）
3. ☐ 鱼详情页继续加深（价格曲线、最佳时段）— 等真实数据源
4. ☐ 外链建设（AI/游戏目录提交）
5. ☐ 观察 7 天流量，决定续费/加码

## 运营日历

- 游戏更新多在**周六**发布 → 周六 22:00 后是内容窗口期
- 每周一看一次 GSC 收录情况（提交后）

## 姊妹站

- veritysgame.xyz（Verity 攻略站，同款架构，仓库 ken-fs/veritygame，GA G-2RKS649CNY，每日管道 11:35）
- 观察清单：Anomaly Detected（CCU 破 10K 再启动）
