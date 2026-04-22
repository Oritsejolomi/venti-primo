"use client";

import { useState } from "react";

const SERVICES = [
  {
    n: "01",
    title: "Deal Origination",
    sub: "Transaction Advisory",
    body: "Sourcing, structuring, and executing investment transactions across energy, infrastructure, and capital markets.",
    image:
      "https://images.unsplash.com/photo-1554224155-1696413565d3?w=1200&q=85&auto=format&fit=crop",
    alt: "Financial documents and ledger close-up",
  },
  {
    n: "02",
    title: "Capital Raising",
    sub: "Investor Access",
    body: "Connecting enterprises to institutional offshore capital through bespoke fundraising mandates and syndicated facilities.",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=85&auto=format&fit=crop",
    alt: "Stacked institutional documents",
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
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=85&auto=format&fit=crop",
    alt: "Private banking environment",
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
            color: "rgba(240,235,227,0.5)",
            marginBottom: "var(--space-7)",
          }}
        >
          <span style={{ display: "inline-block", width: "32px", height: "1px", background: "rgba(240,235,227,0.5)", verticalAlign: "middle", marginRight: "16px" }} />
          § 03 — What we do
        </div>

        <h2
          className="font-[family-name:var(--font-display)]"
          style={{
            fontSize: "var(--text-display-sm)",
            fontWeight: 400,
            lineHeight: 0.96,
            letterSpacing: "-0.025em",
            color: "#F0EBE3",
            marginBottom: "var(--space-9)",
            maxWidth: "1100px",
          }}
        >
          Four practices.
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>One platform.</em>
        </h2>

        {/* main split: image left, list right */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] items-stretch flex-1"
          style={{
            gap: "var(--section-gap)",
          }}
        >
          {/* Focal image — swaps with hover */}
          <div
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
                <button
                  key={s.n}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  style={{
                    appearance: "none",
                    background: "transparent",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    padding: "var(--space-6) 0",
                    borderTop: i === 0 ? "1px solid rgba(240,235,227,0.12)" : "none",
                    borderBottom: "1px solid rgba(240,235,227,0.12)",
                    color: "inherit",
                    display: "grid",
                    gridTemplateColumns: "44px 1fr auto",
                    gap: "var(--space-6)",
                    alignItems: "center",
                    transition: "padding-left 280ms ease",
                    paddingLeft: isActive ? "16px" : "0px",
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
                      fontSize: "var(--text-h2)",
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
              );
            })}

            <p
              className="font-[family-name:var(--font-body)]"
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
