"use client";

import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Track Record", href: "#track-record" },
  { label: "Insights", href: "/insights" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const COLS = [
  { t: "Platform", links: ["Services", "Sectors", "Track Record", "Insights", "Team"] },
  { t: "Company", links: ["About", "Careers", "Press", "Compliance"] },
  { t: "Legal", links: ["Privacy", "Terms", "Disclosures"] },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1F2E", borderTop: "1px solid rgba(240,235,227,0.10)" }}>
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20" style={{ paddingTop: "80px", paddingBottom: "40px" }}>
        {/* Giant wordmark */}
        <div
          className="font-[family-name:var(--font-display)]"
          style={{
            fontWeight: 700,
            fontSize: "clamp(64px,14vw,200px)",
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            color: "#F0EBE3",
            marginBottom: "64px",
            overflow: "hidden",
          }}
        >
          VENTI&nbsp;PRIMO
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            paddingBottom: "48px",
            borderBottom: "1px solid rgba(240,235,227,0.10)",
          }}
          className="grid-cols-2 lg:!grid-cols-[2fr_1fr_1fr_1fr]"
        >
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3" style={{ marginBottom: "16px" }}>
              <Image src="/logomark-parchment.png" alt="Venti Primo" width={20} height={20} />
              <span
                className="font-[family-name:var(--font-display)]"
                style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "-0.01em", color: "#F0EBE3" }}
              >
                VENTI PRIMO
              </span>
            </div>
            <p
              className="font-[family-name:var(--font-body)]"
              style={{ fontSize: "13px", color: "rgba(240,235,227,0.58)", lineHeight: 1.7, maxWidth: "280px", marginBottom: "32px" }}
            >
              Diversified investment holding company. Lagos, Nigeria.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {["linkedin", "twitter"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "8px",
                    border: "1px solid rgba(240,235,227,0.14)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8896A8",
                    textDecoration: "none",
                    fontSize: "11px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    transition: "color 180ms, border-color 180ms",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#0D9488";
                    (e.currentTarget as HTMLElement).style.borderColor = "#0D9488";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#8896A8";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,235,227,0.14)";
                  }}
                >
                  {s === "linkedin" ? "in" : "𝕏"}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLS.map((c) => (
            <div key={c.t}>
              <div
                className="font-[family-name:var(--font-display)]"
                style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8896A8", marginBottom: "16px" }}
              >
                {c.t}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {c.links.map((l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                    className="font-[family-name:var(--font-body)]"
                    style={{
                      fontSize: "14px",
                      color: "rgba(240,235,227,0.65)",
                      textDecoration: "none",
                      transition: "color 180ms",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#0D9488")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,235,227,0.65)")}
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p className="font-[family-name:var(--font-display)]" style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8896A8" }}>
            © {new Date().getFullYear()} Venti Primo Limited. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-display)]" style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(240,235,227,0.2)" }}>
            Confidential · Institutional use · VP · LAG · 001
          </p>
        </div>
      </div>
    </footer>
  );
}
