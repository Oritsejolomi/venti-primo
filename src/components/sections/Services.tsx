"use client";

import { useState } from "react";

const SERVICES = [
  {
    n: "01",
    title: "Deal Origination",
    sub: "Transaction Advisory",
    body: "Sourcing, structuring, and executing investment transactions across energy, infrastructure, and capital markets.",
    image:
      "https://images.unsplash.com/photo-1603796846097-bee99e4a601f?w=1200&q=85&auto=format&fit=crop",
    alt: "Hand signing a document — transaction close",
  },
  {
    n: "02",
    title: "Capital Raising",
    sub: "Investor Access",
    body: "Connecting enterprises to institutional offshore capital through bespoke fundraising mandates and syndicated facilities.",
    image:
      "https://images.unsplash.com/photo-1773122038166-f6c822a99c4f?w=1200&q=85&auto=format&fit=crop",
    alt: "Silhouetted skyscraper against dramatic sky — institutional capital",
  },
  {
    n: "03",
    title: "Network Infrastructure",
    sub: "Technology Platforms",
    body: "Network design, deployment, and management for enterprises and institutions across emerging markets.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85&auto=format&fit=crop",
    alt: "Data centre fibre network detail",
  },
  {
    n: "04",
    title: "Private Wealth",
    sub: "Discretionary Mandates",
    body: "Bespoke investment solutions and portfolio advisory for high-net-worth individuals and family offices.",
    image:
      "https://images.unsplash.com/photo-1634140704051-58a787556cd1?w=1200&q=85&auto=format&fit=crop",
    alt: "Luxury timepiece on black presentation box — institutional private wealth",
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section
      id="services"
      data-theme="dark"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A2623",
        color: "#F0EBE3",
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
          03 What we do
        </div>

        <h2
          className="font-[family-name:var(--font-display)]"
          style={{
            fontSize: "var(--text-display-sm)",
            fontWeight: 400,
            lineHeight: 0.96,
            letterSpacing: "-0.025em",
            color: "#F0EBE3",
            marginBottom: "var(--space-7)",
            maxWidth: "1100px",
          }}
        >
          Four practices.
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0D9488" }}>One platform.</em>
        </h2>

        {/* main split: image left, list right */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] items-stretch flex-1"
          style={{ gap: "var(--section-gap)" }}
        >
          {/* Focal image — desktop only */}
          <div
            className="hidden lg:block"
            style={{
              position: "relative",
              aspectRatio: "3/4",
              maxHeight: "640px",
              overflow: "hidden",
              borderRadius: "2px",
              backgroundColor: "#134E4A",
            }}
          >
            {SERVICES.map((s, i) => (
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
                  filter: "saturate(0.85) contrast(1.05)",
                  opacity: i === active ? 1 : 0,
                  transition: "opacity 500ms ease",
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(10,38,35,0.15) 0%, rgba(10,38,35,0.55) 100%)",
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
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div
                className="font-[family-name:var(--font-data)]"
                style={{ fontSize: "11px", letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(240,235,227,0.85)" }}
              >
                / {current.n}
              </div>
              <div
                className="font-[family-name:var(--font-data)]"
                style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(240,235,227,0.55)" }}
              >
                {current.sub}
              </div>
            </div>
          </div>

          {/* List */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {SERVICES.map((s, i) => {
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
                      paddingTop: "var(--space-5)",
                      paddingBottom: "var(--space-5)",
                      paddingRight: "0px",
                      paddingLeft: isActive ? "16px" : "0px",
                      borderTop: i === 0 ? "1px solid rgba(240,235,227,0.12)" : "none",
                      borderBottom: "1px solid rgba(240,235,227,0.12)",
                      color: "inherit",
                      display: "grid",
                      gridTemplateColumns: "44px 1fr auto",
                      gap: "var(--space-5)",
                      alignItems: "center",
                      transition: "padding-left 280ms ease",
                    }}
                  >
                    <span
                      className="font-[family-name:var(--font-data)]"
                      style={{
                        fontSize: "var(--text-caption)",
                        letterSpacing: "0.28em",
                        color: isActive ? "#5EEAD4" : "rgba(240,235,227,0.4)",
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
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        color: isActive ? "#F0EBE3" : "rgba(240,235,227,0.55)",
                        transition: "color 280ms ease",
                      }}
                    >
                      {s.title}
                    </span>
                    <span
                      className="font-[family-name:var(--font-display)]"
                      style={{
                        fontSize: "var(--text-h4)",
                        color: isActive ? "#5EEAD4" : "rgba(240,235,227,0.3)",
                        transition: "color 280ms ease, transform 280ms ease",
                        transform: isActive ? "translateX(4px)" : "none",
                      }}
                    >
                      →
                    </span>
                  </button>
                  {/* Image + body inline — mobile only */}
                  <div
                    className="lg:hidden"
                    style={{
                      overflow: "hidden",
                      maxHeight: isActive ? "340px" : "0px",
                      opacity: isActive ? 1 : 0,
                      transition: "max-height 400ms ease, opacity 280ms ease",
                    }}
                  >
                    <div style={{ position: "relative", height: "180px", overflow: "hidden", borderRadius: "2px", margin: "0 0 var(--space-4) 0" }}>
                      <img
                        src={s.image}
                        alt={s.alt}
                        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.85) contrast(1.05)" }}
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,38,35,0.05) 0%, rgba(10,38,35,0.5) 100%)" }} />
                      <div
                        className="font-[family-name:var(--font-data)]"
                        style={{ position: "absolute", bottom: "14px", left: "16px", right: "16px", fontSize: "10px", letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(240,235,227,0.75)", display: "flex", justifyContent: "space-between" }}
                      >
                        <span>/ {s.n}</span>
                        <span>{s.sub}</span>
                      </div>
                    </div>
                    <p
                      className="font-[family-name:var(--font-body)]"
                      style={{
                        padding: "0 0 var(--space-5) 0",
                        fontSize: "var(--text-small)",
                        lineHeight: 1.65,
                        color: "rgba(240,235,227,0.65)",
                      }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Body text — desktop only, below list */}
            <p
              className="hidden lg:block font-[family-name:var(--font-body)]"
              style={{
                marginTop: "var(--space-7)",
                fontSize: "var(--text-lead)",
                lineHeight: 1.65,
                color: "rgba(240,235,227,0.72)",
                maxWidth: "520px",
                minHeight: "112px",
              }}
            >
              {current.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
