import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const initials = site.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #a87cff, #6d28d9)",
          borderRadius: 14,
          color: "#fff",
          fontSize: 30,
          fontWeight: 700,
        }}
      >
        {initials}
      </div>
    ),
    { ...size },
  );
}
