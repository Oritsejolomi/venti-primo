"use client";

const COLS = [
  { t: "Platform", links: ["Services", "Sectors", "Track Record", "Insights", "Team"] },
  { t: "Company", links: ["About", "Careers", "Press", "Compliance"] },
  { t: "Legal", links: ["Privacy", "Terms", "Disclosures"] },
];

export function Footer() {
  return (
    <footer
      data-theme="dark"
      style={{
        backgroundColor: "#0A2623",
        color: "#F0EBE3",
        borderTop: "1px solid rgba(240,235,227,0.08)",
      }}
    >
      <div
        className="mx-auto w-full max-w-[1440px]"
        style={{
          paddingLeft: "var(--container-px)",
          paddingRight: "var(--container-px)",
          paddingTop: "var(--space-10)",
          paddingBottom: "var(--space-7)",
        }}
      >
        <div
          className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]"
          style={{
            gap: "var(--space-7)",
            paddingBottom: "var(--space-8)",
            borderBottom: "1px solid rgba(240,235,227,0.10)",
          }}
        >
          <div className="col-span-2 lg:col-span-1">
            <p
              className="font-[family-name:var(--font-body)]"
              style={{
                fontSize: "var(--text-small)",
                color: "rgba(240,235,227,0.65)",
                lineHeight: 1.7,
                maxWidth: "320px",
                marginBottom: "var(--space-6)",
              }}
            >
              Diversified investment holding company. Lagos, Nigeria.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              {[
                { id: "linkedin", label: "in", url: "https://linkedin.com" },
                { id: "twitter", label: "𝕏", url: "https://x.com" },
              ].map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.id}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "9999px",
                    border: "1px solid rgba(240,235,227,0.18)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(240,235,227,0.65)",
                    textDecoration: "none",
                    fontSize: "13px",
                    transition: "all 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#0A2623";
                    (e.currentTarget as HTMLElement).style.background = "#F0EBE3";
                    (e.currentTarget as HTMLElement).style.borderColor = "#F0EBE3";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(240,235,227,0.65)";
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,235,227,0.18)";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.t}>
              <div
                className="font-[family-name:var(--font-data)]"
                style={{
                  fontSize: "var(--text-caption)",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(240,235,227,0.5)",
                  marginBottom: "var(--space-4)",
                }}
              >
                {c.t}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                {c.links.map((l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase().replace(/\s/g, "-")}`}
                    className="font-[family-name:var(--font-body)]"
                    style={{
                      fontSize: "var(--text-small)",
                      color: "rgba(240,235,227,0.78)",
                      textDecoration: "none",
                      transition: "color 200ms ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EBE3")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,235,227,0.78)")}
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
          <p
            className="font-[family-name:var(--font-data)]"
            style={{
              fontSize: "var(--text-caption)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(240,235,227,0.45)",
            }}
          >
            © {new Date().getFullYear()} Venti Primo Limited
          </p>
          <p
            className="font-[family-name:var(--font-data)]"
            style={{
              fontSize: "var(--text-caption)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(240,235,227,0.3)",
            }}
          >
            VP · LAG · 001
          </p>
        </div>
      </div>
    </footer>
  );
}
