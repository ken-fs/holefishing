"use client";

import { useEffect, useRef, useState } from "react";

// Adsterra banner (highrevenueformat) in its own sandboxed srcdoc iframe: invoke.js uses document.currentScript,
// which a srcdoc document gives it, and each unit gets its own global atOptions.
interface Props {
  adKey: string;
  width?: number;
  height?: number;
  /** Script URL from the dashboard's GET CODE snippet. Older units use highrevenueformat.com/<key>/invoke.js,
   *  newer ones bauval.org/22/<key>; paste it as given, the two are not interchangeable. */
  src?: string;
}

export default function AdBanner({ adKey, width = 728, height = 90, src }: Props) {
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
<script type="text/javascript" src="${src ?? `https://www.highrevenueformat.com/${adKey}/invoke.js`}"></${""}script>
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
  }, [adKey, width, height, src]);

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

/**
 * The site-wide banner under the header (2026-11-01): 728x90 on desktop, 320x50 on phones. Phones used to
 * get the 728x90 too, cropped to the screen. The size is picked in the browser after mount, so only one unit
 * is ever on the page (no CSS-hidden twin loading for nobody); the wrapper reserves the height meanwhile.
 */
const LEADERBOARD = { adKey: "fde15261438fd3b866a3a6c0d9b106fe", width: 728, height: 90 };
const MOBILE = { adKey: "0909b3e1ef01b973ebfa8a6ddc20d0e1", width: 320, height: 50, src: "https://bauval.org/22/0909b3e1ef01b973ebfa8a6ddc20d0e1" };

export function SiteBanner() {
  const [unit, setUnit] = useState<Props | null>(null);
  useEffect(() => {
    const id = requestAnimationFrame(() => setUnit(window.matchMedia("(min-width: 768px)").matches ? LEADERBOARD : MOBILE));
    return () => cancelAnimationFrame(id);
  }, []);
  if (!unit) return <div className="my-8 min-h-[50px] md:min-h-[90px]" aria-hidden="true" />;
  return <AdBanner key={unit.adKey} {...unit} />;
}
