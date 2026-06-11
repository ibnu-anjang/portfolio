import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0b080c",
          color: "#eae5ec",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -150,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(168,124,255,0.35), transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(194,164,255,0.2), transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 28,
            color: "#9d93a3",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 9999,
              background: "linear-gradient(135deg, #c2a4ff, #a87cff)",
            }}
          />
          {site.role}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -3,
            display: "flex",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 36,
            color: "#c2a4ff",
            display: "flex",
            maxWidth: 900,
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            fontSize: 24,
            color: "#9d93a3",
            display: "flex",
          }}
        >
          ibnuportfolio.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
