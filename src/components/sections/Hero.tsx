"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [in_, setIn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIn(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      data-theme="dark"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0A2623",
        overflow: "hidden",
        color: "#F0EBE3",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster-v3.jpg"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <source src="/hero-lagos-v3.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(10,38,35,0.55) 0%, rgba(10,38,35,0.4) 40%, rgba(10,38,35,0.85) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* top spacer */}
      <div style={{ height: "clamp(96px, 16vh, 200px)" }} />

      {/* main editorial block — left aligned, large headline only */}
      <div
        className="relative mx-auto w-full max-w-[1440px]"
        style={{
          paddingLeft: "var(--container-px)",
          paddingRight: "var(--container-px)",
          flex: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "1100px", width: "100%" }}>
          <p
            className="font-[family-name:var(--font-data)]"
            style={{
              fontSize: "var(--text-caption)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(240,235,227,0.5)",
              marginBottom: "var(--space-7)",
              fontWeight: 400,
              opacity: in_ ? 1 : 0,
              transform: in_ ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <span style={{ display: "inline-block", width: "32px", height: "1px", background: "rgba(240,235,227,0.5)", verticalAlign: "middle", marginRight: "16px" }} />
            Lagos · Abuja · London
          </p>

          <h1
            className="font-[family-name:var(--font-display)]"
            style={{
              fontSize: "var(--text-display-lg)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              color: "#F0EBE3",
              opacity: in_ ? 1 : 0,
              transform: in_ ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.9s ease 0.08s, transform 0.9s ease 0.08s",
            }}
          >
            Build.<br />
            Fund.<br />
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0D9488" }}>Scale.</em>
          </h1>
        </div>
      </div>

      {/* bottom row — sub copy + CTA pair, generous breathing room */}
      <div
        className="relative mx-auto w-full max-w-[1440px]"
        style={{
          paddingLeft: "var(--container-px)",
          paddingRight: "var(--container-px)",
          paddingBottom: "clamp(48px, 8vh, 120px)",
          paddingTop: "clamp(32px, 6vh, 96px)",
        }}
      >
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between"
          style={{
            gap: "var(--space-7)",
            opacity: in_ ? 1 : 0,
            transform: in_ ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.9s ease 0.32s, transform 0.9s ease 0.32s",
          }}
        >
          <p
            className="font-[family-name:var(--font-body)]"
            style={{
              fontSize: "var(--text-lead)",
              lineHeight: 1.55,
              color: "rgba(240,235,227,0.78)",
              maxWidth: "520px",
            }}
          >
            Transaction advisory, capital deployment, and technology
            infrastructure across emerging markets.
          </p>

          <div className="flex flex-wrap" style={{ gap: "var(--space-3)" }}>
            <a
              href="#services"
              className="font-[family-name:var(--font-body)]"
              style={{
                fontSize: "var(--text-small)",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "#F0EBE3",
                background: "#115E59",
                padding: "var(--space-4) var(--space-6)",
                borderRadius: "9999px",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 200ms ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0D9488")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#115E59")}
            >
              Our Practices
            </a>
            <a
              href="#contact"
              className="font-[family-name:var(--font-body)]"
              style={{
                fontSize: "var(--text-small)",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "#F0EBE3",
                background: "transparent",
                border: "1px solid rgba(240,235,227,0.3)",
                padding: "var(--space-4) var(--space-6)",
                borderRadius: "9999px",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 200ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#F0EBE3";
                (e.currentTarget as HTMLElement).style.background = "rgba(240,235,227,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,235,227,0.3)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Investor Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
