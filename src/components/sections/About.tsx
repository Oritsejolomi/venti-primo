export function About() {
  return (
    <section id="about" style={{ backgroundColor: "#253C43", padding: "clamp(96px,12vw,180px) 0" }}>
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20">
        <div
          style={{ display: "grid", gridTemplateColumns: "280px minmax(0,1fr)", gap: "80px", alignItems: "start" }}
          className="grid-cols-1 lg:!grid-cols-[280px_minmax(0,1fr)]"
        >
          {/* Left sidebar */}
          <div>
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
                marginBottom: "40px",
              }}
            >
              <span style={{ width: "24px", height: "1px", background: "#0D9488", flexShrink: 0 }} />
              § 02 — Who we are
            </div>
            <div
              className="font-[family-name:var(--font-display)]"
              style={{ fontSize: "11px", letterSpacing: "0.04em", color: "#8896A8", lineHeight: 1.9 }}
            >
              <div>FILING / VP-LAG-001</div>
              <div>DATE / APR 2026</div>
              <div>ISSUER / VENTI PRIMO LTD</div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <h2
              className="font-[family-name:var(--font-display)]"
              style={{
                fontSize: "clamp(32px,4.5vw,56px)",
                fontWeight: 500,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "#F0EBE3",
                marginBottom: "48px",
              }}
            >
              The bridge between{" "}
              <span style={{ color: "#0D9488" }}>capital</span>{" "}
              and{" "}
              <em style={{ fontStyle: "italic", fontFamily: "var(--font-body)", fontWeight: 400 }}>opportunity.</em>
            </h2>

            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginBottom: "64px" }}
              className="grid-cols-1 md:!grid-cols-2"
            >
              <p className="font-[family-name:var(--font-body)]" style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(240,235,227,0.82)" }}>
                Venti Primo Limited is a Lagos-based diversified investment holding company
                operating at the intersection of transaction advisory, capital markets, and
                technology infrastructure. We serve corporates, institutions, and
                high-net-worth individuals across Sub-Saharan Africa.
              </p>
              <p className="font-[family-name:var(--font-body)]" style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(240,235,227,0.82)" }}>
                We operate with the rigour of global standards and the speed of local
                knowledge. We close transactions others stall on. From mandate to close,
                Venti Primo moves with precision.
              </p>
            </div>

            <div style={{ paddingTop: "32px", borderTop: "1px solid rgba(240,235,227,0.10)", display: "flex", flexWrap: "wrap", gap: "32px" }}>
              {["Incorporated in Nigeria", "SEC Registered", "Lagos · Abuja · London"].map((t) => (
                <div
                  key={t}
                  className="font-[family-name:var(--font-display)]"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#F0EBE3",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span style={{ width: "6px", height: "6px", background: "#0D9488", borderRadius: "1px", flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
