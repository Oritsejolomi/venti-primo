import Link from "next/link";

const ARTICLES = [
  { date: "Apr 2026", category: "Market Commentary", title: "Nigeria Macro Outlook: Q2 2026", excerpt: "Sector outlook and FX developments for institutional allocators with exposure to Nigerian assets.", href: "/insights/nigeria-macro-q2-2026" },
  { date: "Mar 2026", category: "Technology Briefings", title: "Network Infrastructure as an Asset Class in West Africa", excerpt: "Why tower companies, fibre networks, and data centres are becoming the preferred infrastructure play.", href: "/insights/network-infrastructure-west-africa" },
  { date: "Mar 2026", category: "Deal Insights", title: "Transaction Structures Explained: Upstream Advisory", excerpt: "An anonymised walkthrough of a deal structure from mandate origination through to financial close.", href: "/insights/transaction-structures-upstream" },
];

export function Insights() {
  return (
    <section id="insights" style={{ backgroundColor: "#1A2D50", padding: "clamp(96px,12vw,180px) 0" }}>
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20">
        <div className="flex items-end justify-between gap-8 flex-wrap mb-16">
          <div>
            <p className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#2563EB", marginBottom: "40px", fontWeight: 500 }}>Insights</p>
            <h2 className="font-[family-name:var(--font-display)]" style={{ fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: "#F0EBE3" }}>
              Market commentary<br />and deal intelligence.
            </h2>
          </div>
          <Link href="/insights" className="font-[family-name:var(--font-body)]" style={{ fontSize: "13px", color: "rgba(240,235,227,0.35)", textDecoration: "none", whiteSpace: "nowrap" }}>
            View all →
          </Link>
        </div>
        <div style={{ borderTop: "1px solid rgba(240,235,227,0.07)" }}>
          {ARTICLES.map((a, i) => (
            <Link key={i} href={a.href} style={{ textDecoration: "none", display: "block" }}>
              <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "16px 48px", padding: "44px 0", borderBottom: "1px solid rgba(240,235,227,0.07)" }}>
                <div style={{ paddingTop: "4px" }}>
                  <div className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#2563EB", marginBottom: "8px" }}>{a.category}</div>
                  <div className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", color: "rgba(240,235,227,0.22)" }}>{a.date}</div>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)]" style={{ fontSize: "clamp(16px,1.8vw,22px)", fontWeight: 500, lineHeight: 1.3, color: "#F0EBE3", marginBottom: "12px" }}>{a.title}</h3>
                  <p className="font-[family-name:var(--font-body)]" style={{ fontSize: "15px", lineHeight: 1.7, color: "#A0B4C8", maxWidth: "520px" }}>{a.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
