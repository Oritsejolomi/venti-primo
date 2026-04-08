import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const services = [
  {
    num: "01",
    title: "Deal Origination & Transaction Advisory",
    description:
      "Sourcing, structuring, and executing investment transactions across energy, infrastructure, and capital markets.",
    audience: "Corporates, sponsors, operators",
  },
  {
    num: "02",
    title: "Capital Raising & Investor Access",
    description:
      "Connecting enterprises to institutional offshore capital through bespoke fundraising mandates.",
    audience: "Corporates seeking capital",
  },
  {
    num: "03",
    title: "Technology Infrastructure",
    description:
      "Network design, deployment, and management for enterprises and institutions across emerging markets.",
    audience: "Corporates, telcos, government",
  },
  {
    num: "04",
    title: "Private Wealth Management",
    description:
      "Bespoke investment solutions and portfolio advisory for high-net-worth individuals and family offices.",
    audience: "HNW individuals, families",
  },
];

export function Services() {
  return (
    <section id="services" className="section-spacing bg-[var(--color-deep-water)]">
      <Container>
        <SectionLabel>What We Do</SectionLabel>
        <h2 className="font-[family-name:var(--font-display)] text-[36px] md:text-[42px] leading-[1.15] text-[var(--color-parchment)] mb-12 max-w-[560px]">
          Four practices. One platform.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div
              key={s.num}
              className="group bg-[var(--color-midnight)] border border-[rgba(59,107,156,0.1)] rounded-lg p-9 flex flex-col gap-5 hover:-translate-y-[2px] hover:border-[var(--color-laterite)] hover:shadow-[0_0_30px_rgba(196,97,60,0.06)] transition-all duration-200 ease-out"
            >
              <div className="font-[family-name:var(--font-data)] text-[14px] font-medium text-[var(--color-laterite)] border border-[var(--color-laterite)] rounded-[4px] w-10 h-10 flex items-center justify-center">
                {s.num}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-[22px] leading-[1.25] text-[var(--color-parchment)]">
                {s.title}
              </h3>
              <p className="text-[var(--color-haze)] text-[15px] leading-[1.6] flex-1">
                {s.description}
              </p>
              <p className="font-[family-name:var(--font-data)] text-[11px] text-[var(--color-mist)] uppercase tracking-[0.08em]">
                {s.audience}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
