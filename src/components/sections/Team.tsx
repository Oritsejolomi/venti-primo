"use client";

import { useState } from "react";

const TEAM = [
  { role: "Founder & Director", focus: "Strategy & Leadership", initials: "AO" },
  { role: "Head of Transaction Advisory", focus: "Deal Origination & Structuring", initials: "CE" },
  { role: "Head of Technology", focus: "Network Infrastructure", initials: "KM" },
  { role: "Head of Capital Markets", focus: "Capital Raising & Investor Relations", initials: "OA" },
  { role: "Head of Private Wealth", focus: "HNW Advisory & Portfolio Management", initials: "FN" },
  { role: "General Counsel", focus: "Legal, Compliance & Regulatory", initials: "DI" },
];

function MemberCard({ role, focus, initials }: (typeof TEAM)[0]) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "40px 32px",
        borderRight: "1px solid rgba(240,235,227,0.10)",
        borderBottom: "1px solid rgba(240,235,227,0.10)",
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        minHeight: "160px",
        transition: "background 180ms",
        background: hover ? "rgba(13,148,136,0.04)" : "transparent",
      }}
    >
      <div
        className="font-[family-name:var(--font-display)]"
        style={{
          width: "52px",
          height: "52px",
          flexShrink: 0,
          background: "#1F3640",
          border: "1px solid rgba(240,235,227,0.14)",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 500,
          fontSize: "13px",
          letterSpacing: "0.08em",
          color: "#8896A8",
        }}
      >
        {initials}
      </div>
      <div>
        <div
          className="font-[family-name:var(--font-display)]"
          style={{ fontWeight: 500, fontSize: "15px", color: "#F0EBE3", letterSpacing: "-0.005em", lineHeight: 1.35 }}
        >
          {role}
        </div>
        <div
          className="font-[family-name:var(--font-body)]"
          style={{ marginTop: "8px", fontSize: "13px", color: "#8896A8", lineHeight: 1.5 }}
        >
          {focus}
        </div>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <section id="team" style={{ backgroundColor: "#2D4850", padding: "clamp(96px,12vw,180px) 0" }}>
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20">
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
          § 07 — Our team
        </div>
        <h2
          className="font-[family-name:var(--font-display)]"
          style={{ fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.02em", color: "#F0EBE3", marginBottom: "64px" }}
        >
          The people behind the platform.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            borderTop: "1px solid rgba(240,235,227,0.10)",
            borderLeft: "1px solid rgba(240,235,227,0.10)",
          }}
          className="grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3"
        >
          {TEAM.map((m) => <MemberCard key={m.role} {...m} />)}
        </div>

        <p className="font-[family-name:var(--font-body)]" style={{ marginTop: "32px", fontSize: "13px", color: "#8896A8", fontStyle: "italic" }}>
          Named profiles disclosed under NDA. Contact our office for a deeper walk-through of the team.
        </p>
      </div>
    </section>
  );
}
