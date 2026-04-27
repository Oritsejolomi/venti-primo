const TEAM = [
  { n: "01", role: "Founder & Director", focus: "Strategy & Leadership" },
  { n: "02", role: "Head of Transaction Advisory", focus: "Deal Origination & Structuring" },
  { n: "03", role: "Head of Technology", focus: "Network Infrastructure" },
  { n: "04", role: "Head of Capital Markets", focus: "Capital Raising & Investor Relations" },
  { n: "05", role: "Head of Private Wealth", focus: "HNW Advisory & Portfolio Management" },
  { n: "06", role: "General Counsel", focus: "Legal, Compliance & Regulatory" },
];

export function Team() {
  return (
    <section
      id="team"
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
            marginBottom: "var(--space-7)",
          }}
        >
          07 Our team
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-start flex-1"
          style={{
            gap: "var(--section-gap)",
          }}
        >
          {/* Headline + image */}
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-7)" }}>
            <h2
              className="font-[family-name:var(--font-display)]"
              style={{
                fontSize: "var(--text-display-sm)",
                fontWeight: 400,
                lineHeight: 0.96,
                letterSpacing: "-0.025em",
                color: "#F0EBE3",
              }}
            >
              The people behind <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0D9488" }}>the platform.</em>
            </h2>

            <div
              style={{
                position: "relative",
                aspectRatio: "4/3",
                maxHeight: "440px",
                overflow: "hidden",
                borderRadius: "2px",
                backgroundColor: "#134E4A",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1739298061707-cefee19941b7?w=1200&q=85&auto=format&fit=crop"
                alt="African team and their director in a boardroom meeting"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "saturate(0.85) contrast(1.05)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(10,38,35,0.05) 0%, rgba(10,38,35,0.55) 100%)",
                }}
              />
            </div>
          </div>

          {/* Roster — stacked, no card grid */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {TEAM.map((m, i) => (
              <div
                key={m.role}
                style={{
                  padding: "var(--space-6) 0",
                  borderTop: i === 0 ? "1px solid rgba(240,235,227,0.14)" : "none",
                  borderBottom: "1px solid rgba(240,235,227,0.14)",
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  gap: "var(--space-5)",
                  alignItems: "baseline",
                }}
              >
                <span
                  className="font-[family-name:var(--font-data)]"
                  style={{
                    fontSize: "var(--text-caption)",
                    letterSpacing: "0.22em",
                    color: "rgba(240,235,227,0.5)",
                  }}
                >
                  {m.n}
                </span>
                <div>
                  <div
                    className="font-[family-name:var(--font-display)]"
                    style={{
                      fontSize: "var(--text-h3)",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      letterSpacing: "-0.015em",
                      color: "#F0EBE3",
                    }}
                  >
                    {m.role}
                  </div>
                  <div
                    className="font-[family-name:var(--font-body)]"
                    style={{
                      marginTop: "8px",
                      fontSize: "14px",
                      color: "rgba(240,235,227,0.55)",
                      lineHeight: 1.55,
                    }}
                  >
                    {m.focus}
                  </div>
                </div>
              </div>
            ))}

            <p
              className="font-[family-name:var(--font-body)]"
              style={{
                marginTop: "32px",
                fontSize: "13px",
                color: "rgba(240,235,227,0.45)",
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              Named profiles disclosed under NDA. Contact our office for a deeper
              walk-through of the team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
