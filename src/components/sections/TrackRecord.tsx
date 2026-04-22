const STATS = [
  { value: "$120M+", label: "Deal Pipeline" },
  { value: "12", label: "Transactions in Execution" },
  { value: "06", label: "Sectors Covered" },
  { value: "90d", label: "Median Close" },
];

const DEALS = [
  { sector: "Oil & Gas — Upstream", type: "Deal Origination", market: "Nigeria", year: "2026" },
  { sector: "Infrastructure — Power", type: "Capital Raising", market: "West Africa", year: "2026" },
  { sector: "Technology — Network", type: "Transaction Advisory", market: "Nigeria", year: "2025" },
  { sector: "Financial Services", type: "Structuring", market: "Pan-African", year: "2025" },
  { sector: "Energy Transition", type: "Deal Origination", market: "Nigeria", year: "2025" },
  { sector: "Global Markets", type: "Capital Raising", market: "Cross-border", year: "2025" },
];

export function TrackRecord() {
  return (
    <section
      id="track-record"
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
          § 05 — Track record
        </div>

        <h2
          className="font-[family-name:var(--font-display)]"
          style={{
            fontSize: "var(--text-display-sm)",
            fontWeight: 400,
            lineHeight: 0.96,
            letterSpacing: "-0.025em",
            color: "#F0EBE3",
            marginBottom: "var(--space-10)",
            maxWidth: "1100px",
          }}
        >
          Execution
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>over claims.</em>
        </h2>

        {/* Oversized stats — stacked vertical pairs */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{
            borderTop: "1px solid rgba(240,235,227,0.14)",
            borderBottom: "1px solid rgba(240,235,227,0.14)",
            marginBottom: "var(--space-9)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                padding: "var(--space-7) var(--space-6)",
                borderLeft: i > 0 ? "1px solid rgba(240,235,227,0.14)" : "none",
                borderTop: i >= 2 ? "1px solid rgba(240,235,227,0.14)" : undefined,
              }}
              className={`${i === 2 ? "lg:!border-t-0" : ""} ${i % 2 === 0 ? "lg:!border-l-0 max-lg:!border-l-0" : ""}`}
            >
              <div
                className="font-[family-name:var(--font-display)]"
                style={{
                  fontSize: "clamp(2.25rem, 1.5rem + 4vw, 5rem)",
                  fontWeight: 400,
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  color: "#F0EBE3",
                  marginBottom: "var(--space-3)",
                }}
              >
                {s.value}
              </div>
              <div
                className="font-[family-name:var(--font-data)]"
                style={{
                  fontSize: "var(--text-caption)",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(240,235,227,0.5)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Deals ledger header */}
        <div
          className="hidden md:grid font-[family-name:var(--font-data)]"
          style={{
            fontSize: "var(--text-caption)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(240,235,227,0.5)",
            marginBottom: "var(--space-5)",
            gridTemplateColumns: "1.4fr 1fr 1fr 80px",
            gap: "var(--space-5)",
            paddingBottom: "var(--space-4)",
            borderBottom: "1px solid rgba(240,235,227,0.2)",
          }}
        >
          <span>Sector</span>
          <span>Mandate</span>
          <span>Market</span>
          <span style={{ textAlign: "right" }}>Year</span>
        </div>
        <div>
          {DEALS.map((d, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_80px]"
              style={{
                gap: "var(--space-3)",
                alignItems: "baseline",
                padding: "var(--space-5) 0",
                borderBottom: "1px solid rgba(240,235,227,0.10)",
              }}
            >
              <span
                className="font-[family-name:var(--font-display)]"
                style={{ fontSize: "var(--text-h4)", color: "#F0EBE3", letterSpacing: "-0.01em" }}
              >
                {d.sector}
              </span>
              <span
                className="font-[family-name:var(--font-body)]"
                style={{ fontSize: "var(--text-small)", color: "rgba(240,235,227,0.78)" }}
              >
                {d.type}
              </span>
              <span
                className="font-[family-name:var(--font-body)]"
                style={{ fontSize: "var(--text-small)", color: "rgba(240,235,227,0.55)" }}
              >
                {d.market}
              </span>
              <span
                className="font-[family-name:var(--font-data)] md:text-right"
                style={{
                  fontSize: "var(--text-caption)",
                  letterSpacing: "0.05em",
                  color: "rgba(240,235,227,0.78)",
                }}
              >
                {d.year}
              </span>
            </div>
          ))}
        </div>

        <p
          className="font-[family-name:var(--font-body)]"
          style={{
            marginTop: "32px",
            fontSize: "13px",
            color: "rgba(240,235,227,0.45)",
            fontStyle: "italic",
          }}
        >
          Transaction details are confidential. Mandates disclosed only with client consent.
        </p>
      </div>
    </section>
  );
}
