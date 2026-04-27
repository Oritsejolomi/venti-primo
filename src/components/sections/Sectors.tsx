"use client";

import { useState } from "react";

const SECTORS = [
  {
    n: "01",
    name: "Oil & Gas and Energy",
    sub: "Upstream · Midstream · Energy Transition",
    image: "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=1400&q=85&auto=format&fit=crop",
    alt: "Oil refinery tower at twilight — energy infrastructure",
  },
  {
    n: "02",
    name: "Infrastructure",
    sub: "Power · Transport · Industrial Logistics",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1400&q=85&auto=format&fit=crop",
    alt: "High-voltage power transmission towers",
  },
  {
    n: "03",
    name: "Network Infrastructure",
    sub: "Telecoms · Fibre · Enterprise Networks",
    image: "https://images.unsplash.com/photo-1606778303077-3780ea8d5420?w=1400&q=85&auto=format&fit=crop",
    alt: "Fibre optic light trails — network infrastructure",
  },
  {
    n: "04",
    name: "Financial Services",
    sub: "Capital Markets · Structured Finance · Banking",
    image: "https://images.unsplash.com/photo-1648275913341-7973ae7bc9b3?w=1400&q=85&auto=format&fit=crop",
    alt: "Digital stock ticker close-up — capital markets",
  },
  {
    n: "05",
    name: "Global Markets",
    sub: "Cross-Border · Diaspora Investment · FX",
    image: "https://images.unsplash.com/photo-1678182451047-196f22a4143e?w=1400&q=85&auto=format&fit=crop",
    alt: "Stacked cargo containers at port — global trade flows",
  },
];

export function Sectors() {
  const [active, setActive] = useState(0);
  const current = SECTORS[active];

  return (
    <section
      id="sectors"
      data-theme="light"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F0EBE3",
        color: "#0A2623",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="mx-auto w-full max-w-[1440px]"
        style={{
          paddingLeft: "var(--container-px)",
          paddingRight: "var(--container-px)",
          paddingTop: "var(--section-py)",
          paddingBottom: "var(--section-py)",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="font-[family-name:var(--font-data)]"
          style={{
            fontSize: "var(--text-caption)",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#D4A853",
            marginBottom: "var(--space-5)",
          }}
        >
          04 Where we operate
        </div>

        <h2
          className="font-[family-name:var(--font-display)]"
          style={{
            fontSize: "var(--text-display-sm)",
            fontWeight: 400,
            lineHeight: 0.96,
            letterSpacing: "-0.025em",
            color: "#0A2623",
            marginBottom: "var(--space-7)",
            maxWidth: "1100px",
          }}
        >
          Five sectors.
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>Highest conviction.</em>
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-stretch flex-1"
          style={{ gap: "var(--section-gap)" }}
        >
          {/* Stacked sector list */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {SECTORS.map((s, i) => {
              const isActive = i === active;
              return (
                <div key={s.n}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    style={{
                      appearance: "none",
                      background: "transparent",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      width: "100%",
                      paddingTop: "var(--space-4)",
                      paddingBottom: "var(--space-4)",
                      paddingRight: "0px",
                      paddingLeft: isActive ? "16px" : "0px",
                      borderTop: i === 0 ? "1px solid rgba(10,38,35,0.14)" : "none",
                      borderBottom: "1px solid rgba(10,38,35,0.14)",
                      color: "inherit",
                      display: "grid",
                      gridTemplateColumns: "44px 1fr auto",
                      gap: "var(--space-4)",
                      alignItems: "center",
                      transition: "padding-left 280ms ease",
                    }}
                  >
                    <span
                      className="font-[family-name:var(--font-data)]"
                      style={{
                        fontSize: "var(--text-caption)",
                        letterSpacing: "0.28em",
                        color: isActive ? "#0D9488" : "rgba(10,38,35,0.4)",
                        transition: "color 280ms ease",
                      }}
                    >
                      {s.n}
                    </span>
                    <span
                      className="font-[family-name:var(--font-display)]"
                      style={{
                        fontSize: "var(--text-h3)",
                        fontWeight: 400,
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                        color: isActive ? "#0A2623" : "rgba(10,38,35,0.45)",
                        transition: "color 280ms ease",
                      }}
                    >
                      {s.name}
                    </span>
                    <span
                      className="font-[family-name:var(--font-display)]"
                      style={{
                        fontSize: "var(--text-h4)",
                        color: isActive ? "#0D9488" : "rgba(10,38,35,0.25)",
                        transition: "color 280ms ease, transform 280ms ease",
                        transform: isActive ? "translateX(4px)" : "none",
                      }}
                    >
                      →
                    </span>
                  </button>
                  {/* Image + sub-category inline — mobile only */}
                  <div
                    className="lg:hidden"
                    style={{
                      overflow: "hidden",
                      maxHeight: isActive ? "260px" : "0px",
                      opacity: isActive ? 1 : 0,
                      transition: "max-height 400ms ease, opacity 280ms ease",
                    }}
                  >
                    <div style={{ position: "relative", height: "180px", overflow: "hidden", borderRadius: "2px", margin: "var(--space-2) 0 0 0" }}>
                      <img
                        src={s.image}
                        alt={s.alt}
                        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.9) contrast(1.05)" }}
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,38,35,0.05) 0%, rgba(10,38,35,0.6) 100%)" }} />
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
                        <div
                          className="font-[family-name:var(--font-data)]"
                          style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(240,235,227,0.7)" }}
                        >
                          / {s.n} — {s.name}
                        </div>
                        <div
                          className="font-[family-name:var(--font-display)]"
                          style={{ fontSize: "13px", letterSpacing: "0.01em", color: "#F0EBE3", fontStyle: "italic" }}
                        >
                          {s.sub}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Focal image — desktop only */}
          <div
            className="hidden lg:block"
            style={{
              position: "relative",
              aspectRatio: "3/4",
              maxHeight: "640px",
              overflow: "hidden",
              borderRadius: "2px",
              backgroundColor: "#0A2623",
            }}
          >
            {SECTORS.map((s, i) => (
              <img
                key={s.n}
                src={s.image}
                alt={s.alt}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "saturate(0.9) contrast(1.05)",
                  opacity: i === active ? 1 : 0,
                  transition: "opacity 500ms ease",
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(10,38,35,0.05) 0%, rgba(10,38,35,0.55) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div
                className="font-[family-name:var(--font-data)]"
                style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(240,235,227,0.7)" }}
              >
                / {current.n} — {current.name}
              </div>
              <div
                className="font-[family-name:var(--font-display)]"
                style={{ fontSize: "16px", letterSpacing: "0.01em", color: "#F0EBE3", fontStyle: "italic" }}
              >
                {current.sub}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
