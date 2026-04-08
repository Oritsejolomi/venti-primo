"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const stats = [
  { value: "$120M+", label: "Deal Pipeline" },
  { value: "6", label: "Sectors" },
  { value: "4", label: "Markets" },
];

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
      <div className="font-[family-name:var(--font-data)] text-[32px] md:text-[40px] font-medium text-[var(--color-gold)] tracking-[-0.02em] tabular-nums">
        {value}
      </div>
      <div className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-[0.08em] text-[var(--color-haze)] mt-1">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Gradient mesh background */}
      <div className="mesh-bg" />

      <Container className="relative z-10">
        {/* Headline */}
        <h1
          className={`font-[family-name:var(--font-display)] text-[56px] md:text-[72px] lg:text-[80px] leading-[1.04] text-[var(--color-parchment)] max-w-[720px] mb-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Build. Fund. Scale.
        </h1>

        {/* Sub-heading */}
        <p
          className={`font-[family-name:var(--font-body)] text-[18px] md:text-[20px] text-[var(--color-haze)] max-w-[600px] leading-[1.6] mb-10 transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          A diversified platform for transaction advisory, capital deployment, and
          technology infrastructure across emerging markets.
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <Button href="#services" size="lg">
            Explore Our Services
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            Investor Enquiry
          </Button>
        </div>

        {/* Stats bar */}
        <div className="border-t border-[rgba(126,140,160,0.15)] pt-8 flex flex-col sm:flex-row gap-8 sm:gap-16">
          {stats.map((s) => (
            <AnimatedStat key={s.label} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
}
