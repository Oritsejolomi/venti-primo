import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const placeholders = [
  { initials: "FD", role: "Founder & Director" },
  { initials: "TA", role: "Head of Transaction Advisory" },
  { initials: "HT", role: "Head of Technology" },
  { initials: "CM", role: "Head of Capital Markets" },
  { initials: "PW", role: "Head of Private Wealth" },
];

export function Team() {
  return (
    <section id="team" className="section-spacing bg-[var(--color-deep-water)]">
      <Container>
        <SectionLabel>Our Team</SectionLabel>
        <h2 className="font-[family-name:var(--font-display)] text-[36px] md:text-[42px] leading-[1.15] text-[var(--color-parchment)] mb-12">
          The people behind the platform.
        </h2>

        <div className="flex flex-wrap gap-6">
          {placeholders.map((p) => (
            <div
              key={p.role}
              className="group bg-[var(--color-midnight)] border border-[rgba(59,107,156,0.1)] rounded-lg p-8 flex flex-col items-center gap-4 w-[200px] hover:-translate-y-[2px] hover:border-[rgba(59,107,156,0.3)] transition-all duration-200"
            >
              {/* Avatar circle */}
              <div className="w-16 h-16 rounded-full bg-[var(--color-dusk)] border border-[var(--color-aso-oke)] flex items-center justify-center">
                <span className="font-[family-name:var(--font-body)] text-[15px] font-medium text-[var(--color-aso-oke)]">
                  {p.initials}
                </span>
              </div>
              <div className="text-center">
                <p className="font-[family-name:var(--font-body)] text-[13px] font-medium text-[var(--color-parchment)] mb-1">
                  Team Member
                </p>
                <p className="font-[family-name:var(--font-body)] text-[12px] text-[var(--color-haze)]">
                  {p.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
