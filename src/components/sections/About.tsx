import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  return (
    <section id="about" className="section-spacing">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Copy */}
          <div>
            <SectionLabel>About Venti Primo</SectionLabel>
            <h2 className="font-[family-name:var(--font-display)] text-[36px] md:text-[42px] leading-[1.15] text-[var(--color-parchment)] mb-8">
              At the intersection of institutional finance and technology infrastructure
            </h2>
            <p className="text-[var(--color-haze)] text-[17px] leading-[1.7] mb-5">
              Venti Primo is a diversified holding company operating at the intersection of
              institutional finance and technology infrastructure. We originate and structure
              investment transactions across Africa&apos;s highest-conviction sectors, while building
              and deploying the digital and network infrastructure that underpins modern economies.
            </p>
            <p className="text-[var(--color-haze)] text-[17px] leading-[1.7]">
              Our financial services practice covers deal origination, capital raising, transaction
              advisory, and private wealth management. Our technology practice delivers network
              infrastructure solutions for enterprises and institutions. Both practices share a
              common philosophy: build things that compound.
            </p>
          </div>

          {/* Holding structure diagram */}
          <div className="bg-[var(--color-deep-water)] border border-[rgba(59,107,156,0.15)] rounded-lg p-10 flex flex-col items-center gap-0">
            {/* Parent */}
            <div className="border border-[var(--color-laterite)] rounded-[4px] px-8 py-4 text-center">
              <span className="font-[family-name:var(--font-display)] text-[18px] text-[var(--color-parchment)]">
                Venti Primo Limited
              </span>
            </div>

            {/* Connector */}
            <div className="w-px h-8 bg-[var(--color-mist)]" />

            {/* Horizontal line */}
            <div className="flex items-center gap-0 w-full max-w-[320px]">
              <div className="flex-1 h-px bg-[var(--color-mist)]" />
              <div className="w-px h-px" />
              <div className="flex-1 h-px bg-[var(--color-mist)]" />
            </div>

            {/* Branches */}
            <div className="flex gap-4 w-full max-w-[340px] mt-0">
              <div className="flex flex-col items-center flex-1 gap-0">
                <div className="w-px h-6 bg-[var(--color-mist)]" />
                <div className="border border-[var(--color-aso-oke)] rounded-[4px] px-4 py-3 text-center w-full">
                  <span className="font-[family-name:var(--font-body)] text-[13px] font-medium text-[var(--color-aso-oke)]">
                    Financial Services
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center flex-1 gap-0">
                <div className="w-px h-6 bg-[var(--color-mist)]" />
                <div className="border border-[var(--color-aso-oke)] rounded-[4px] px-4 py-3 text-center w-full">
                  <span className="font-[family-name:var(--font-body)] text-[13px] font-medium text-[var(--color-aso-oke)]">
                    Technology Infrastructure
                  </span>
                </div>
              </div>
            </div>

            <p className="font-[family-name:var(--font-data)] text-[11px] text-[var(--color-mist)] mt-8 tracking-[0.06em]">
              Holding Company Structure
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
