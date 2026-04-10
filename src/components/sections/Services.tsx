const SERVICES = [
  { n: "01", title: "Deal Origination & Transaction Advisory", body: "Sourcing, structuring, and executing investment transactions across energy, infrastructure, and capital markets." },
  { n: "02", title: "Capital Raising & Investor Access", body: "Connecting enterprises to institutional offshore capital through bespoke fundraising mandates." },
  { n: "03", title: "Technology Infrastructure", body: "Network design, deployment, and management for enterprises and institutions across emerging markets." },
  { n: "04", title: "Private Wealth Management", body: "Bespoke investment solutions and portfolio advisory for high-net-worth individuals and family offices." },
];

export function Services() {
  return (
    <section id="services" style={{ backgroundColor: "#223860", padding: "clamp(96px,12vw,180px) 0" }}>
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20">
        <p className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#2563EB", marginBottom: "48px", fontWeight: 500 }}>
          What We Do
        </p>
        <h2 className="font-[family-name:var(--font-display)]" style={{ fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#F0EBE3", marginBottom: "80px" }}>
          Four practices.<br />One platform.
        </h2>
        <div style={{ borderTop: "1px solid rgba(240,235,227,0.07)" }}>
          {SERVICES.map((s) => (
            <div key={s.n} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: "0 40px", padding: "44px 0", borderBottom: "1px solid rgba(240,235,227,0.07)" }}>
              <span className="font-[family-name:var(--font-data)]" style={{ fontSize: "11px", color: "rgba(240,235,227,0.18)", paddingTop: "4px" }}>{s.n}</span>
              <div>
                <h3 className="font-[family-name:var(--font-display)]" style={{ fontSize: "clamp(18px,2vw,24px)", fontWeight: 500, lineHeight: 1.3, color: "#F0EBE3", marginBottom: "16px" }}>{s.title}</h3>
                <p className="font-[family-name:var(--font-body)]" style={{ fontSize: "15px", lineHeight: 1.7, color: "#A0B4C8", maxWidth: "480px" }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
