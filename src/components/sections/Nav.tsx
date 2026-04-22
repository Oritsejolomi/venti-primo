"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Track Record", href: "#track-record" },
  { label: "Insights", href: "#insights" },
  { label: "Team", href: "#team" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: solid ? "rgba(45,72,80,0.97)" : "transparent",
        backdropFilter: solid ? "blur(14px) saturate(140%)" : "none",
        WebkitBackdropFilter: solid ? "blur(14px) saturate(140%)" : "none",
        borderBottom: solid ? "1px solid rgba(240,235,227,0.08)" : "none",
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20 flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
          <Image src="/logomark-parchment.png" alt="Venti Primo" width={22} height={22} />
          <span
            className="font-[family-name:var(--font-display)]"
            style={{ fontSize: "15px", fontWeight: 600, letterSpacing: "-0.01em", color: "#F0EBE3" }}
          >
            VENTI PRIMO
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-body)] text-[13px] font-medium transition-colors duration-200"
              style={{ color: "rgba(240,235,227,0.5)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EBE3")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,235,227,0.5)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="font-[family-name:var(--font-body)] text-[13px] font-medium"
          style={{
            padding: "10px 22px",
            borderRadius: "9999px",
            border: "1px solid rgba(240,235,227,0.24)",
            color: "#F0EBE3",
            textDecoration: "none",
            transition: "all 180ms cubic-bezier(0.2,0.7,0.2,1)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#0D9488";
            (e.currentTarget as HTMLElement).style.borderColor = "#0D9488";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,235,227,0.24)";
          }}
        >
          Enquire
        </a>
      </div>
    </header>
  );
}
