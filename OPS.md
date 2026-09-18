# Hole Fishing 站运营日志

> 最后更新：2026-09-18 · 状态：✅ 已上线运营中
>
> **09-18 内容补全**：竞品 holefishing.wiki 有 11 个 guides 页而我方仅 4 个内容页 → 按 SERP 验证缺口新建 5 页（/mutations /money-guide /upgrades /night-fishing /mistakes），56→61 页；Roblox API 实测修正过期数据（访问 10M+→6.1M、收藏 50K+→180K、在线 3.1K→4.1K、服务器 12→6）；IndexNow 提交 5 新 URL。
>
> **09-14 完成**：建站上线 → 亮色编辑风改版 → SEO 审计 77→85 分（llms.txt/安全头/WebSite schema/薄页扩写）→ 41 鱼详情页加深 3 倍（100→250-320 词，含每鱼 FAQ）→ IndexNow 收录提交 53 URL

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

- **61 页全静态**：14 Hub/内容页 + 41 鱼详情页 + 法律页
- 核心页：`/rods`（12竿全价格表）`/fish`（41鱼图鉴）`/calculator`（进度计算器）`/codes`（无码监控占位）`/secret-fish` `/server-hole` `/beginner-guide` `/updates`
- **09-18 新增 5 个内容页**（竞品缺口补齐，每页 520-730 词）：
  - `/mutations` — Big/Large/Huge/Giant/Golden 变体 + 已确认变异鱼清单 + 农场策略
  - `/money-guide` — 5 种赚钱方式按收益排序 + 早/中/后期路线 + 竿 ROI 表
  - `/upgrades` — 竿/洞/售价/背包四线 + 正确购买顺序 + "too strong" 根因
  - `/night-fishing` — 9 种夜行鱼全表（按价值倒序）+ 夜循环策略
  - `/mistakes` — 10 个拖慢进度错误 + 修复 + 内链
- 内链体系：首页 Deep-Dive Guides 区 + footer 全站 guides 导航（11 条）
- 数据源：3 个真实 gameplay 视频字幕挖掘 + Roblox 公开 API（stats 实测）
- SEO：Schema 全套（VideoGame/WebSite/Breadcrumb/每页FAQ）、sitemap 58 URL、llms.txt、安全头、亮色编辑风设计
- SEO Health Score：85（2026-09-14 审计）；09-18 补全内容短板后待复审计

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

## 收录状态

- ✅ **IndexNow**（Bing/Yandex 即时收录）：2026-09-14 已提交 53 URL，key 文件在 `public/e806fbee77f140daaac27f6e1193da54.txt`（verity 站同 key 已提交 10 URL）
- ☐ **Google Search Console**：需手动（见下）

## 热度追踪

| 日期 | Hole Fishing CCU | 备注 |
|------|-----------------|------|
| 09-14（发现） | 3,109 | 🏜️EVENT 上线中 |
| 09-15 | 1,714（RoMonitor）| 回落 45%，零 SEO 竞争格局不变，续持 |
| 09-18（API 实测） | **4,132–4,224** | 回升至 4.1K+；6.07M visits / 180,978 favorites / 39,222 likes |

| 关联游戏 | 09-15 CCU | 备注 |
|------|------|------|
| Verity's Game | 765（峰值 3,254）| 退烧快，出现竞争站 veritysgame.wiki |
| Build Base to Survive VERITY | 6,200 | Verity 系顶流，带 codes，大媒体已占词——候选三号站，待评估 |

## 明日待办（按优先级）

1. ☐ **GSC 验证 + sitemap 提交**（双站一起）：用户拿 HTML 验证标记 → agent 加 layout → 推送 → 提交 sitemap
2. ☐ 观察 09-18 新 5 页收录与排名（对标 holefishing.wiki 同题页；先行指标：GSC 里 /mutations /money-guide 展示数）
3. ☐ 检查每日管道日志：`/tmp/holefishing-daily.log`（11:00 跑）
4. ☐ 沙漠 EVENT 内容补全（管道每天挖；可人工进游戏确认 EVENT 专属鱼/竿）
5. ☐ 外链建设（AI/游戏目录提交）
6. ☐ 观察 7 天流量，决定续费/加码

## 运营日历

- 游戏更新多在**周六**发布 → 周六 22:00 后是内容窗口期
- 每周一看一次 GSC 收录情况（提交后）

## 姊妹站

- veritysgame.xyz（Verity 攻略站，同款架构，仓库 ken-fs/veritygame，GA G-2RKS649CNY，每日管道 11:35）
- 观察清单：Anomaly Detected（CCU 破 10K 再启动）
