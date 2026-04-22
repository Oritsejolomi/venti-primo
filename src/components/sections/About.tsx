"use client";

export function About() {
  return (
    <section
      id="about"
      data-theme="light"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F7F5F0",
        color: "#0A2623",
        display: "flex",
        flexDirection: "column",
        position: "relative",
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
        {/* eyebrow */}
        <div
          className="font-[family-name:var(--font-data)]"
          style={{
            fontSize: "var(--text-caption)",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(10,38,35,0.5)",
            marginBottom: "var(--space-9)",
          }}
        >
          <span style={{ display: "inline-block", width: "32px", height: "1px", background: "rgba(10,38,35,0.5)", verticalAlign: "middle", marginRight: "16px" }} />
          § 02 — Who we are
        </div>

        {/* main editorial split */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center flex-1"
          style={{
            gap: "var(--section-gap)",
          }}
        >
          {/* Headline + body */}
          <div>
            <h2
              className="font-[family-name:var(--font-display)]"
              style={{
                fontSize: "var(--text-display-sm)",
                fontWeight: 400,
                lineHeight: 0.96,
                letterSpacing: "-0.025em",
                color: "#0A2623",
                marginBottom: "var(--space-7)",
              }}
            >
              The bridge
              <br />
              between capital
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>and opportunity.</em>
            </h2>

            <p
              className="font-[family-name:var(--font-body)]"
              style={{
                fontSize: "var(--text-lead)",
                lineHeight: 1.6,
                color: "rgba(10,38,35,0.72)",
                maxWidth: "520px",
                marginBottom: "var(--space-7)",
              }}
            >
              Venti Primo Limited is a Lagos-based diversified investment holding
              company operating at the intersection of transaction advisory,
              capital markets, and technology infrastructure. We close
              transactions others stall on — from mandate to close, with the
              rigour of global standards and the speed of local knowledge.
            </p>

            <a
              href="#services"
              className="font-[family-name:var(--font-body)]"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "#F0EBE3",
                background: "#0A2623",
                padding: "16px 36px",
                borderRadius: "9999px",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 200ms ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#134E4A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0A2623")}
            >
              Our Practices →
            </a>
          </div>

          {/* Image — Lagos / institutional architecture */}
          <div
            style={{
              position: "relative",
              aspectRatio: "3/4",
              maxHeight: "640px",
              overflow: "hidden",
              borderRadius: "2px",
              backgroundColor: "#0A2623",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1577416412292-747c6607f055?w=900&q=85&auto=format&fit=crop"
              alt="Lagos skyline at dusk — institutional architecture"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "saturate(0.9) contrast(1.05)",
              }}
            />
          </div>
        </div>

        {/* footer credentials row */}
        <div
          style={{
            marginTop: "clamp(64px, 9vh, 96px)",
            paddingTop: "32px",
            borderTop: "1px solid rgba(10,38,35,0.12)",
            display: "flex",
            flexWrap: "wrap",
            gap: "48px",
            justifyContent: "space-between",
          }}
        >
          {[
            { k: "Filing", v: "VP-LAG-001" },
            { k: "Issuer", v: "Venti Primo Ltd" },
            { k: "Reg.", v: "SEC Nigeria" },
            { k: "Offices", v: "Lagos · Abuja · London" },
          ].map((m) => (
            <div key={m.k}>
              <div
                className="font-[family-name:var(--font-data)]"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(10,38,35,0.5)",
                  marginBottom: "8px",
                }}
              >
                {m.k}
              </div>
              <div
                className="font-[family-name:var(--font-display)]"
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                  color: "#0A2623",
                }}
              >
                {m.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
