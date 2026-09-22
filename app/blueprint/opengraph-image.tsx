import { ImageResponse } from "next/og";

export const alt = "The AIRY Blueprint: the operating system for AI-native teams";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08080E",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", width: 160, height: 8, marginBottom: 48 }}>
          <div style={{ flex: 1, background: "#00C4A7" }} />
          <div style={{ flex: 1, background: "#7C3AED" }} />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#00C4A7",
            marginBottom: 24,
          }}
        >
          AIRY Transformation
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            color: "#F5F4EF",
            lineHeight: 1.05,
            marginBottom: 32,
          }}
        >
          The AIRY Blueprint
        </div>
        <div style={{ display: "flex", fontSize: 38, color: "#9B9AA6", maxWidth: 960 }}>
          Human signal. Machine scale. The operating system for AI-native teams.
        </div>
      </div>
    ),
    { ...size }
  );
}
