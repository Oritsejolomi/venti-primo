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
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isDark = theme === "dark";
  const fg = isDark ? "#F0EBE3" : "#0A2623";
  const fgMuted = isDark ? "rgba(240,235,227,0.55)" : "rgba(10,38,35,0.55)";
  const bg = isDark ? "rgba(10,38,35,0.82)" : "rgba(247,245,240,0.85)";
  const borderCol = isDark ? "rgba(240,235,227,0.08)" : "rgba(10,38,35,0.08)";

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50"
        style={{
          backgroundColor: scrolled || menuOpen ? bg : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(18px) saturate(160%)" : "none",
          WebkitBackdropFilter: scrolled || menuOpen ? "blur(18px) saturate(160%)" : "none",
          borderBottom: scrolled && !menuOpen ? `1px solid ${borderCol}` : "none",
          transition: "background-color 400ms ease, border-color 400ms ease",
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
          {/* Logo + wordmark */}
          <Link
            href="/"
            aria-label="Venti Primo — home"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "var(--space-3)",
              textDecoration: "none",
              color: fg,
            }}
          >
            <img
              src={isDark ? "/logomark-parchment.png" : "/logomark-teal.png"}
              alt=""
              aria-hidden="true"
              style={{ height: "20px", width: "auto", display: "block", transition: "opacity 400ms ease" }}
            />
            <span
              className="font-[family-name:var(--font-data)]"
              style={{
                fontSize: "var(--text-body)",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                lineHeight: 1,
                color: fg,
                transition: "color 400ms ease",
              }}
            >
              Venti Primo
            </span>
          </Link>

          {/* Desktop nav */}
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

          {/* Right side: enquire + hamburger */}
          <div className="flex items-center" style={{ gap: "var(--space-4)" }}>
            <a
              href="#contact"
              className="hidden lg:inline-block font-[family-name:var(--font-body)]"
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

            {/* Hamburger — mobile only */}
            <button
              className="flex lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "var(--space-2)",
                color: fg,
                flexDirection: "column",
                justifyContent: "center",
                gap: "5px",
                width: "36px",
                height: "36px",
              }}
            >
              <span
                style={{
                  display: "block",
                  height: "1.5px",
                  background: "currentColor",
                  transition: "transform 300ms ease, opacity 300ms ease",
                  transformOrigin: "center",
                  transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "1.5px",
                  background: "currentColor",
                  transition: "opacity 300ms ease",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "1.5px",
                  background: "currentColor",
                  transition: "transform 300ms ease, opacity 300ms ease",
                  transformOrigin: "center",
                  transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className="lg:hidden fixed inset-0 z-40 flex flex-col"
        style={{
          background: isDark ? "rgba(10,38,35,0.97)" : "rgba(247,245,240,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          paddingTop: "96px",
          paddingLeft: "var(--container-px)",
          paddingRight: "var(--container-px)",
          paddingBottom: "var(--space-8)",
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 400ms cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-6)",
            marginTop: "var(--space-7)",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-data)]"
              style={{
                fontSize: "var(--text-h4)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: fg,
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

      </div>
    </>
  );
}
