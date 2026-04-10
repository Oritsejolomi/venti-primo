import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Track Record", href: "#track-record" },
  { label: "Insights", href: "/insights" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1A2D50",
        borderTop: "1px solid rgba(240,235,227,0.07)",
        padding: "56px 0",
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "48px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="Venti Primo" width={24} height={24} />
              <span className="font-[family-name:var(--font-display)]" style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.02em", color: "#F0EBE3" }}>
                VENTI PRIMO
              </span>
            </div>
            <p className="font-[family-name:var(--font-body)]" style={{ fontSize: "13px", color: "#A0B4C8", maxWidth: "280px", lineHeight: 1.7 }}>
              Diversified investment holding company. Lagos, Nigeria.
            </p>
            <p className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", color: "rgba(240,235,227,0.16)", letterSpacing: "0.06em", marginTop: "4px" }}>
              © {new Date().getFullYear()} Venti Primo Limited. All rights reserved.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <nav style={{ display: "flex", flexWrap: "wrap", gap: "8px 28px" }}>
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-[family-name:var(--font-body)]"
                  style={{ fontSize: "13px", color: "rgba(240,235,227,0.32)", textDecoration: "none" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div style={{ display: "flex", gap: "20px" }}>
              {["LinkedIn", "X / Twitter"].map((s) => (
                <a
                  key={s}
                  href={s === "LinkedIn" ? "https://linkedin.com" : "https://x.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-[family-name:var(--font-data)]"
                  style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,235,227,0.18)", textDecoration: "none" }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
