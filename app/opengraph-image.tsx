import { ImageResponse } from "next/og";

export const alt = "Umair Khan | Premium WordPress & Web Developer";
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
          justifyContent: "space-between",
          background: "#070708",
          color: "#fafafa",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              border: "3px solid #c8f031",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c8f031",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            UK
          </div>
          <div style={{ fontSize: 32, fontWeight: 600 }}>Umair Khan</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>Premium websites that</div>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, color: "#c8f031" }}>
            sell, convert & rank.
          </div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 28, color: "#a1a1aa" }}>
          <span>200+ Websites</span>
          <span>50+ Automations</span>
          <span>25+ GHL Funnels</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
