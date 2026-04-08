import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const sectors = [
  {
    name: "Oil & Gas and Energy",
    subs: "Upstream, midstream, downstream, energy transition",
  },
  {
    name: "Infrastructure",
    subs: "Power, transport, industrial logistics, housing",
  },
  {
    name: "Technology & Digital Infrastructure",
    subs: "Network solutions, data centres, connectivity",
  },
  {
    name: "Network Infrastructure",
    subs: "Telecoms, fibre, enterprise networks",
  },
  {
    name: "Financial Services & Capital Markets",
    subs: "Banking, capital markets, structured finance",
  },
  {
    name: "Global Markets",
    subs: "Cross-border transactions, international capital flows, diaspora investment",
  },
];

export function Sectors() {
  return (
    <section id="sectors" className="section-spacing overflow-hidden">
      <Container>
        <SectionLabel>Where We Operate</SectionLabel>
        <h2 className="font-[family-name:var(--font-display)] text-[36px] md:text-[42px] leading-[1.15] text-[var(--color-parchment)] mb-12">
          Six sectors. Highest-conviction markets.
        </h2>
      </Container>

      {/* Horizontal scroll row */}
      <div className="pl-6 md:pl-8 lg:pl-[max(32px,calc((100vw-1280px)/2+32px))]">
        <div className="flex gap-4 overflow-x-auto pb-6 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {sectors.map((s) => (
            <div
              key={s.name}
              className="weave-pattern relative min-w-[280px] md:min-w-[320px] bg-[var(--color-deep-water)] border border-[rgba(59,107,156,0.1)] rounded-lg p-8 flex-shrink-0 snap-start hover:border-[var(--color-laterite)] transition-colors duration-200 group"
            >
              <h3 className="font-[family-name:var(--font-display)] text-[22px] leading-[1.25] text-[var(--color-parchment)] mb-3 relative">
                {s.name}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[13px] text-[var(--color-mist)] leading-[1.6] relative">
                {s.subs}
              </p>
            </div>
          ))}
          {/* Spacer to prevent last card from being cut off */}
          <div className="min-w-6 flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
