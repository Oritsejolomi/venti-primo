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
        backgroundColor: solid ? "rgba(26,45,80,0.97)" : "transparent",
        borderBottom: solid ? "1px solid rgba(240,235,227,0.06)" : "none",
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20 flex items-center justify-between py-5">
        <Link href="/" className="flex items-center gap-3" style={{ textDecoration: "none" }}>
          <Image src="/logo.svg" alt="Venti Primo" width={28} height={28} />
          <span
            className="font-[family-name:var(--font-display)]"
            style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.02em", color: "#F0EBE3" }}
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
              style={{ color: "rgba(240,235,227,0.45)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EBE3")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,235,227,0.45)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="font-[family-name:var(--font-body)] text-[13px] font-semibold text-[#F0EBE3] px-5 py-2 transition-colors duration-200"
          style={{ border: "1px solid #2563EB", borderRadius: "9999px" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#2563EB")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")}
        >
          Enquire
        </a>
      </div>
    </header>
  );
}
