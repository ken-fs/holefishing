/** @type {import("next").NextConfig} */
const nextConfig = {
  // 静态导出（Cloudflare Pages 部署用），SEO 工具站全静态
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  // 构建期跳过 ESLint（样式 nit 不应阻断站点产出；TS 类型检查仍保留）
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
