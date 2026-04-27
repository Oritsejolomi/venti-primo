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
            color: "#D4A853",
            marginBottom: "var(--space-7)",
          }}
        >
          02 Who we are
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
              The bridge between capital
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0D9488" }}>and opportunity.</em>
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
                background: "#0D9488",
                padding: "16px 36px",
                borderRadius: "9999px",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 200ms ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0F766E")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0D9488")}
            >
              Our Practices
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
              src="https://images.unsplash.com/photo-1648023200201-8fcede127835?w=900&q=85&auto=format&fit=crop"
              alt="Third Mainland Bridge Lagos at night — the bridge between capital and opportunity"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "saturate(0.9) contrast(1.05)",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
