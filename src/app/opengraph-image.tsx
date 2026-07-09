import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social share image for the site (home + any route without its own). */
export default function Image() {
  const domain = siteConfig.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0a",
        color: "#fafafa",
        padding: "80px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 9999,
            background: "#3b82f6",
          }}
        />
        <div style={{ fontSize: 30, color: "#a1a1aa" }}>{siteConfig.name}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05 }}>
          Reliable software, proven by tests.
        </div>
        <div style={{ fontSize: 32, color: "#a1a1aa" }}>{siteConfig.role}</div>
      </div>

      <div style={{ fontSize: 26, color: "#71717a" }}>{domain}</div>
    </div>,
    { ...size },
  );
}
