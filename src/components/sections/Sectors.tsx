const SECTORS = [
  { n: "01", name: "Oil & Gas and Energy", sub: "Upstream · Midstream · Energy Transition", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format&fit=crop" },
  { n: "02", name: "Infrastructure", sub: "Power · Transport · Industrial Logistics", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80&auto=format&fit=crop" },
  { n: "03", name: "Technology & Digital", sub: "Network Solutions · Data Centres · Connectivity", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80&auto=format&fit=crop" },
  { n: "04", name: "Network Infrastructure", sub: "Telecoms · Fibre · Enterprise Networks", img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900&q=80&auto=format&fit=crop" },
  { n: "05", name: "Financial Services", sub: "Capital Markets · Structured Finance · Banking", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80&auto=format&fit=crop" },
  { n: "06", name: "Global Markets", sub: "Cross-Border · Diaspora Investment · FX", img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=900&q=80&auto=format&fit=crop" },
];

export function Sectors() {
  return (
    <section id="sectors" style={{ backgroundColor: "#1A1F2E", padding: "clamp(96px,12vw,180px) 0", overflow: "hidden" }}>
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
          § 04 — Where we operate
        </div>
        <h2
          className="font-[family-name:var(--font-display)]"
          style={{ fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.02em", color: "#F0EBE3", marginBottom: "64px" }}
        >
          Six sectors.<br />Highest-conviction markets.
        </h2>
      </div>

      <div className="px-8 md:px-14 lg:px-20" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
        <div style={{ display: "flex", gap: "16px", paddingBottom: "8px" }}>
          {SECTORS.map((s) => (
            <div
              key={s.n}
              style={{
                position: "relative",
                flexShrink: 0,
                width: "clamp(280px,26vw,360px)",
                height: "460px",
                overflow: "hidden",
                backgroundImage: `url('${s.img}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,31,46,0.97) 0%, rgba(26,31,46,0.3) 55%, rgba(26,31,46,0.05) 100%)" }} />
              <div style={{ position: "absolute", inset: 0, padding: "32px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span className="font-[family-name:var(--font-display)]" style={{ fontSize: "10px", color: "rgba(240,235,227,0.25)", letterSpacing: "0.15em", marginBottom: "10px" }}>{s.n}</span>
                <h3 className="font-[family-name:var(--font-display)]" style={{ fontSize: "20px", fontWeight: 500, lineHeight: 1.3, color: "#F0EBE3", marginBottom: "8px" }}>{s.name}</h3>
                <p className="font-[family-name:var(--font-display)]" style={{ fontSize: "10px", color: "rgba(240,235,227,0.35)", letterSpacing: "0.06em", lineHeight: 1.7 }}>{s.sub}</p>
              </div>
            </div>
          ))}
          <div style={{ minWidth: "32px", flexShrink: 0 }} />
        </div>
      </div>
    </section>
  );
}
