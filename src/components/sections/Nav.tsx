"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Track Record", href: "#track-record" },
  { label: "Insights", href: "#insights" },
  { label: "Team", href: "#team" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(11,17,33,0.92)] backdrop-blur-xl border-b border-[rgba(59,107,156,0.12)]"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-5">
        {/* Wordmark */}
        <a
          href="#"
          className="font-[family-name:var(--font-display)] text-[22px] text-[var(--color-parchment)] tracking-[0.02em] no-underline"
        >
          Venti Primo
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-body)] text-[14px] font-medium text-[var(--color-haze)] hover:text-[var(--color-parchment)] transition-colors duration-200 tracking-[0.02em]"
            >
              {l.label}
            </a>
          ))}
          <Button href="#contact" size="sm">
            Get in Touch
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1.5px] bg-[var(--color-parchment)] transition-all duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[var(--color-parchment)] transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1.5px] bg-[var(--color-parchment)] transition-all duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </Container>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="lg:hidden bg-[var(--color-deep-water)] border-t border-[rgba(59,107,156,0.12)] px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-body)] text-[16px] font-medium text-[var(--color-parchment)] no-underline"
            >
              {l.label}
            </a>
          ))}
          <Button href="#contact" onClick={() => setMenuOpen(false)} className="w-full mt-2">
            Get in Touch
          </Button>
        </div>
      )}
    </header>
  );
}
