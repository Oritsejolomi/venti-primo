const STATS = [
  { value: "$120M+", label: "Deal Pipeline" },
  { value: "12", label: "Transactions in Execution" },
  { value: "6", label: "Sectors Covered" },
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
    <section id="track-record" style={{ backgroundColor: "#2D4850", padding: "clamp(96px,12vw,180px) 0" }}>
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20">
        <div
          className="font-[family-name:var(--font-display)]"
          style={{
            fontSize: "10px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8896A8",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <span style={{ width: "24px", height: "1px", background: "#0D9488", flexShrink: 0 }} />
          § 05 — Track record
        </div>
        <h2
          className="font-[family-name:var(--font-display)]"
          style={{ fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.02em", color: "#F0EBE3", marginBottom: "80px" }}
        >
          Execution over claims.
        </h2>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            borderTop: "1px solid rgba(240,235,227,0.10)",
            borderBottom: "1px solid rgba(240,235,227,0.10)",
            padding: "40px 0",
            marginBottom: "80px",
          }}
          className="grid-cols-2 md:!grid-cols-4"
        >
          {STATS.map((s, i) => (
            <div key={s.label} style={{ padding: "8px 24px", borderLeft: i === 0 ? "none" : "1px solid rgba(240,235,227,0.10)" }}>
              <div
                className="font-[family-name:var(--font-display)]"
                style={{ fontSize: "clamp(36px,4.4vw,60px)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em", color: "#D4A853" }}
              >
                {s.value}
              </div>
              <div
                className="font-[family-name:var(--font-display)]"
                style={{ marginTop: "14px", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8896A8" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Deals table */}
        <div style={{ borderTop: "1px solid rgba(240,235,227,0.10)" }}>
          {DEALS.map((d, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto auto auto",
                gap: "16px 48px",
                alignItems: "center",
                padding: "24px 0",
                borderBottom: "1px solid rgba(240,235,227,0.10)",
              }}
            >
              <span className="font-[family-name:var(--font-display)]" style={{ fontSize: "16px", fontWeight: 500, color: "#F0EBE3" }}>{d.sector}</span>
              <span className="font-[family-name:var(--font-display)]" style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0D9488", whiteSpace: "nowrap" }}>{d.type}</span>
              <span className="font-[family-name:var(--font-display)]" style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,235,227,0.25)", whiteSpace: "nowrap" }}>{d.market}</span>
              <span className="font-[family-name:var(--font-display)]" style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#8896A8", whiteSpace: "nowrap" }}>{d.year}</span>
            </div>
          ))}
        </div>

        <p className="font-[family-name:var(--font-body)]" style={{ fontSize: "13px", color: "#8896A8", marginTop: "32px", fontStyle: "italic" }}>
          Transaction details are confidential. Mandates disclosed only with client consent.
        </p>
      </div>
    </section>
  );
}
