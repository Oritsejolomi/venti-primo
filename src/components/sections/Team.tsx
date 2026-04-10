const TEAM = [
  { role: "Founder & Director", focus: "Strategy & Leadership" },
  { role: "Head of Transaction Advisory", focus: "Deal Origination & Structuring" },
  { role: "Head of Technology", focus: "Network Infrastructure" },
  { role: "Head of Capital Markets", focus: "Capital Raising & Investor Relations" },
  { role: "Head of Private Wealth", focus: "HNW Advisory & Portfolio Management" },
  { role: "General Counsel", focus: "Legal, Compliance & Regulatory" },
];

export function Team() {
  return (
    <section id="team" style={{ backgroundColor: "#223860", padding: "clamp(96px,12vw,180px) 0" }}>
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20">
        <p className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#2563EB", marginBottom: "48px", fontWeight: 500 }}>
          Our Team
        </p>
        <h2 className="font-[family-name:var(--font-display)]" style={{ fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#F0EBE3", marginBottom: "80px" }}>
          The people behind<br />the platform.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ borderTop: "1px solid rgba(240,235,227,0.07)" }}>
          {TEAM.map((m, i) => (
            <div key={i} style={{ padding: "32px 0", borderBottom: "1px solid rgba(240,235,227,0.07)" }}>
              <p className="font-[family-name:var(--font-body)]" style={{ fontSize: "15px", fontWeight: 500, color: "#F0EBE3", marginBottom: "8px" }}>{m.role}</p>
              <p className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,235,227,0.28)" }}>{m.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
