"use client";

import { useEffect, useRef } from "react";

// Adsterra banner (highrevenueformat) in its own sandboxed srcdoc iframe: invoke.js uses document.currentScript,
// which a srcdoc document gives it, and each unit gets its own global atOptions.
interface Props {
  adKey: string;
  width?: number;
  height?: number;
}

export default function AdBanner({ adKey, width = 728, height = 90 }: Props) {
  const ref = useRef<HTMLIFrameElement>(null);
  // 2026-10-31: the banner used to be inline <script> tags in the HTML. Every unit loaded on page load,
  // even hidden or far below the fold (impressions nobody saw), and units on one page shared the global
  // atOptions. Now srcdoc is filled only once the slot is on screen (or close); display:none never intersects.
  useEffect(() => {
    const iframe = ref.current;
    if (!iframe || !adKey) return;
    const html = `<!doctype html><html><head><meta charset="utf-8">
<style>html,body{margin:0;padding:0;overflow:hidden;background:transparent}</style>
</head><body>
<script type="text/javascript">
atOptions={key:'${adKey}',format:'iframe',height:${height},width:${width},params:{}};
</${""}script>
<script type="text/javascript" src="https://www.highrevenueformat.com/${adKey}/invoke.js"></${""}script>
</body></html>`;
    if (!("IntersectionObserver" in window)) {
      if (iframe.offsetParent) iframe.srcdoc = html;
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          iframe.srcdoc = html;
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    io.observe(iframe);
    return () => io.disconnect();
  }, [adKey, width, height]);

  return (
    <div className="flex justify-center my-8 max-w-full overflow-hidden" style={{ minHeight: height }}>
      <iframe
        ref={ref}
        width={width}
        height={height}
        title="Advertisement"
        scrolling="no"
        sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        style={{ border: 0, display: "block", maxWidth: "100%", width, height }}
      />
    </div>
  );
}
