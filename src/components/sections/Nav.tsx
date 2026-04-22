"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Record", href: "#track-record" },
  { label: "Insights", href: "#insights" },
  { label: "Team", href: "#team" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[data-theme]")
    );
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const t = visible.target.getAttribute("data-theme");
          if (t === "dark" || t === "light") setTheme(t);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const isDark = theme === "dark";
  const fg = isDark ? "#F0EBE3" : "#0A2623";
  const fgMuted = isDark ? "rgba(240,235,227,0.55)" : "rgba(10,38,35,0.55)";
  const bg = isDark ? "rgba(10,38,35,0.82)" : "rgba(247,245,240,0.85)";
  const borderCol = isDark ? "rgba(240,235,227,0.08)" : "rgba(10,38,35,0.08)";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        backgroundColor: scrolled ? bg : "transparent",
        backdropFilter: scrolled ? "blur(18px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px) saturate(160%)" : "none",
        borderBottom: scrolled ? `1px solid ${borderCol}` : "none",
        transition: "background-color 400ms ease, border-color 400ms ease, color 400ms ease",
        color: fg,
      }}
    >
      <div
        className="mx-auto w-full max-w-[1440px] flex items-center justify-between"
        style={{
          paddingLeft: "var(--container-px)",
          paddingRight: "var(--container-px)",
          paddingTop: "var(--space-5)",
          paddingBottom: "var(--space-5)",
        }}
      >
        <Link
          href="/"
          aria-label="Venti Primo — home"
          style={{
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            transition: "opacity 200ms ease",
          }}
        >
          <img
            src={isDark ? "/logomark-parchment.png" : "/logomark-teal.png"}
            alt="Venti Primo"
            style={{
              height: "32px",
              width: "auto",
              display: "block",
              transition: "opacity 400ms ease",
            }}
          />
        </Link>

        <nav className="hidden lg:flex items-center" style={{ gap: "var(--space-7)" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-data)]"
              style={{
                fontSize: "var(--text-caption)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: fgMuted,
                textDecoration: "none",
                transition: "color 200ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = fg)}
              onMouseLeave={(e) => (e.currentTarget.style.color = fgMuted)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="font-[family-name:var(--font-body)]"
          style={{
            fontSize: "var(--text-small)",
            fontWeight: 500,
            letterSpacing: "0.04em",
            padding: "var(--space-3) var(--space-5)",
            borderRadius: "9999px",
            background: isDark ? "#F0EBE3" : "#0A2623",
            color: isDark ? "#0A2623" : "#F0EBE3",
            textDecoration: "none",
            transition: "all 200ms ease",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = isDark ? "#FFFFFF" : "#134E4A";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = isDark ? "#F0EBE3" : "#0A2623";
          }}
        >
          Enquire
        </a>
      </div>
    </header>
  );
}
