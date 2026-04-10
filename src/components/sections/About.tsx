export function About() {
  return (
    <section id="about" style={{ backgroundColor: "#1A2D50", padding: "clamp(96px,12vw,180px) 0" }}>
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20">
        <p className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#2563EB", marginBottom: "48px", fontWeight: 500 }}>
          Who We Are
        </p>
        <h2 className="font-[family-name:var(--font-display)]" style={{ fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#F0EBE3", marginBottom: "56px", maxWidth: "720px" }}>
          The bridge between capital and opportunity.
        </h2>
        <div style={{ maxWidth: "600px" }}>
          <p className="font-[family-name:var(--font-body)]" style={{ fontSize: "15px", lineHeight: 1.7, color: "#A0B4C8", marginBottom: "24px" }}>
            Venti Primo Limited is a Lagos-based diversified investment holding company
            operating at the intersection of transaction advisory, capital markets, and
            technology infrastructure. We serve corporates, institutions, and high-net-worth
            individuals across Sub-Saharan Africa and the broader emerging market landscape.
          </p>
          <p className="font-[family-name:var(--font-body)]" style={{ fontSize: "15px", lineHeight: 1.7, color: "#A0B4C8" }}>
            We operate with the rigour of global standards and the speed of local knowledge —
            one platform, four practices, singular focus.
          </p>
        </div>
        <div style={{ marginTop: "80px", paddingTop: "40px", borderTop: "1px solid rgba(240,235,227,0.07)", display: "flex", flexWrap: "wrap", gap: "12px 48px" }}>
          {["Incorporated in Nigeria", "SEC Registered", "Lagos · Abuja · London"].map((t) => (
            <span key={t} className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(240,235,227,0.22)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
