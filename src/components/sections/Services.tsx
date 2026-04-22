"use client";

import { useState } from "react";

const SERVICES = [
  {
    n: "01",
    title: "Deal Origination & Transaction Advisory",
    body: "Sourcing, structuring, and executing investment transactions across energy, infrastructure, and capital markets.",
    points: ["Sell-side mandates", "Buy-side advisory", "Special situations"],
  },
  {
    n: "02",
    title: "Capital Raising & Investor Access",
    body: "Connecting enterprises to institutional offshore capital through bespoke fundraising mandates.",
    points: ["Syndicated facilities", "Private placements", "Sovereign counterparties"],
  },
  {
    n: "03",
    title: "Technology Infrastructure",
    body: "Network design, deployment, and management for enterprises and institutions across emerging markets.",
    points: ["Network architecture", "Data centre advisory", "Enterprise connectivity"],
  },
  {
    n: "04",
    title: "Private Wealth Management",
    body: "Bespoke investment solutions and portfolio advisory for high-net-worth individuals and family offices.",
    points: ["Discretionary mandates", "Family office advisory", "Diaspora portfolios"],
  },
];

function ServiceCard({ n, title, body, points }: (typeof SERVICES)[0]) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        padding: "48px 40px",
        borderRight: "1px solid rgba(240,235,227,0.10)",
        borderBottom: "1px solid rgba(240,235,227,0.10)",
        transition: "background 180ms cubic-bezier(0.2,0.7,0.2,1)",
        background: hover ? "rgba(13,148,136,0.05)" : "transparent",
        minHeight: "340px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span
          className="font-[family-name:var(--font-display)]"
          style={{
            fontSize: "11px",
            letterSpacing: "0.22em",
            color: hover ? "#0D9488" : "#8896A8",
            transition: "color 180ms",
          }}
        >
          / {n}
        </span>
        <span
          style={{
            width: "20px",
            height: "20px",
            color: hover ? "#0D9488" : "#8896A8",
            transition: "color 180ms",
            fontSize: "18px",
            lineHeight: 1,
          }}
        >
          ◈
        </span>
      </div>

      <h3
        className="font-[family-name:var(--font-display)]"
        style={{
          marginTop: "40px",
          fontWeight: 500,
          fontSize: "clamp(17px,1.8vw,22px)",
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
          color: "#F0EBE3",
        }}
      >
        {title}
      </h3>

      <p
        className="font-[family-name:var(--font-body)]"
        style={{ marginTop: "16px", fontSize: "14px", lineHeight: 1.65, color: "rgba(240,235,227,0.7)" }}
      >
        {body}
      </p>

      <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "6px" }}>
        {points.map((p) => (
          <div
            key={p}
            className="font-[family-name:var(--font-display)]"
            style={{ fontSize: "11px", letterSpacing: "0.08em", color: "#8896A8", display: "inline-flex", alignItems: "center", gap: "10px" }}
          >
            <span style={{ width: "4px", height: "4px", background: "#0D9488", borderRadius: "1px", flexShrink: 0 }} />
            {p.toUpperCase()}
          </div>
        ))}
      </div>

      <div
        className="font-[family-name:var(--font-display)]"
        style={{
          position: "absolute",
          right: "40px",
          bottom: "40px",
          fontSize: "11px",
          letterSpacing: "0.08em",
          color: hover ? "#0D9488" : "#8896A8",
          textTransform: "uppercase",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          transition: "color 180ms, transform 180ms",
          transform: hover ? "translateX(4px)" : "none",
        }}
      >
        Brief →
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" style={{ backgroundColor: "#2D4850", padding: "clamp(96px,12vw,180px) 0" }}>
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "48px", flexWrap: "wrap", marginBottom: "72px" }}>
          <div>
            <div
              className="font-[family-name:var(--font-display)]"
              style={{
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#8896A8",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <span style={{ width: "24px", height: "1px", background: "#0D9488", flexShrink: 0 }} />
              § 03 — What we do
            </div>
            <h2
              className="font-[family-name:var(--font-display)]"
              style={{ fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.02em", color: "#F0EBE3", maxWidth: "600px" }}
            >
              Four practices. One platform.
            </h2>
          </div>
          <p
            className="font-[family-name:var(--font-body)]"
            style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(240,235,227,0.7)", maxWidth: "360px" }}
          >
            Execution, precision, access, conviction — applied across every mandate we accept.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            borderTop: "1px solid rgba(240,235,227,0.10)",
            borderLeft: "1px solid rgba(240,235,227,0.10)",
          }}
          className="grid-cols-1 md:!grid-cols-2"
        >
          {SERVICES.map((s) => (
            <ServiceCard key={s.n} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
