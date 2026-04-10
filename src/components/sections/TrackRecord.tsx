const STATS = [
  { value: "$120M+", label: "Deal Pipeline" },
  { value: "12", label: "Transactions" },
  { value: "6", label: "Sectors" },
];

const DEALS = [
  { sector: "Oil & Gas — Upstream", type: "Deal Origination", market: "Nigeria" },
  { sector: "Infrastructure — Power", type: "Capital Raising", market: "West Africa" },
  { sector: "Technology — Network", type: "Transaction Advisory", market: "Nigeria" },
  { sector: "Financial Services", type: "Structuring", market: "Pan-African" },
  { sector: "Energy Transition", type: "Deal Origination", market: "Nigeria" },
  { sector: "Global Markets", type: "Capital Raising", market: "Cross-border" },
];

export function TrackRecord() {
  return (
    <section id="track-record" style={{ backgroundColor: "#223860", padding: "clamp(96px,12vw,180px) 0" }}>
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20">
        <p className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#2563EB", marginBottom: "48px", fontWeight: 500 }}>
          Track Record
        </p>
        <h2 className="font-[family-name:var(--font-display)]" style={{ fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#F0EBE3", marginBottom: "80px" }}>
          Execution over claims.
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 80px", marginBottom: "80px", paddingBottom: "64px", borderBottom: "1px solid rgba(240,235,227,0.07)" }}>
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-[family-name:var(--font-data)]" style={{ fontSize: "clamp(44px,5.5vw,72px)", fontWeight: 700, color: "#D4A853", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "12px" }}>{s.value}</div>
              <div className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(240,235,227,0.28)" }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(240,235,227,0.07)" }}>
          {DEALS.map((d, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "16px 48px", alignItems: "center", padding: "24px 0", borderBottom: "1px solid rgba(240,235,227,0.07)" }}>
              <span className="font-[family-name:var(--font-display)]" style={{ fontSize: "16px", fontWeight: 500, color: "#F0EBE3" }}>{d.sector}</span>
              <span className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#2563EB", whiteSpace: "nowrap" }}>{d.type}</span>
              <span className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,235,227,0.25)", whiteSpace: "nowrap" }}>{d.market}</span>
            </div>
          ))}
        </div>
        <p className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", color: "rgba(240,235,227,0.18)", marginTop: "32px", letterSpacing: "0.05em" }}>
          Transaction details are confidential. Mandates disclosed only with client consent.
        </p>
      </div>
    </section>
  );
}
