"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const headlineStats = [
  { value: "$120M+", label: "Transactions Originated" },
  { value: "12", label: "Deals Completed" },
  { value: "6", label: "Sectors Covered" },
];

const tombstones = [
  { sector: "Oil & Gas — Upstream", name: "Confidential", value: "$XXM", role: "Deal Origination" },
  { sector: "Infrastructure — Power", name: "Confidential", value: "$XXM", role: "Capital Raising" },
  { sector: "Technology — Network", name: "Confidential", value: "$XXM", role: "Advisory" },
  { sector: "Financial Services", name: "Confidential", value: "$XXM", role: "Transaction Structuring" },
  { sector: "Energy Transition", name: "Confidential", value: "$XXM", role: "Deal Origination" },
  { sector: "Global Markets", name: "Confidential", value: "$XXM", role: "Capital Raising" },
];

function StatCounter({ value, label }: { value: string; label: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <div className="font-[family-name:var(--font-data)] text-[40px] md:text-[52px] font-medium text-[var(--color-gold)] tracking-[-0.02em] tabular-nums leading-none mb-2">
        {value}
      </div>
      <div className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-[0.08em] text-[var(--color-haze)]">
        {label}
      </div>
    </div>
  );
}

export function TrackRecord() {
  return (
    <section id="track-record" className="section-spacing bg-[var(--color-deep-water)]">
      <Container>
        <SectionLabel>Track Record</SectionLabel>
        <h2 className="font-[family-name:var(--font-display)] text-[36px] md:text-[42px] leading-[1.15] text-[var(--color-parchment)] mb-12">
          Execution over claims.
        </h2>

        {/* Headline stats — Bloomberg density */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 pb-10 mb-10 border-b border-[rgba(126,140,160,0.1)]">
          {headlineStats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>

        {/* Tombstone grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tombstones.map((t, i) => (
            <div
              key={i}
              className="bg-[var(--color-midnight)] border border-[rgba(59,107,156,0.1)] rounded-[4px] p-6"
            >
              <div className="font-[family-name:var(--font-data)] text-[11px] uppercase tracking-[0.08em] text-[var(--color-aso-oke)] mb-2">
                {t.sector}
              </div>
              <div className="font-[family-name:var(--font-body)] text-[15px] font-medium text-[var(--color-parchment)] mb-4">
                {t.name}
              </div>
              <div className="flex justify-between items-center font-[family-name:var(--font-data)] text-[13px]">
                <span className="text-[var(--color-gold)]">{t.value}</span>
                <span className="text-[var(--color-mist)]">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="font-[family-name:var(--font-data)] text-[11px] text-[var(--color-mist)] mt-6 tracking-[0.04em]">
          * Transaction details are confidential. Placeholder metrics shown until mandates are disclosed.
        </p>
      </Container>
    </section>
  );
}
