import { Container } from "@/components/ui/Container";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Sectors", href: "#sectors" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[rgba(126,140,160,0.1)] py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left */}
          <div className="flex flex-col gap-4 max-w-[400px]">
            <span className="font-[family-name:var(--font-display)] text-[18px] text-[var(--color-parchment)]">
              Venti Primo
            </span>
            <p className="font-[family-name:var(--font-body)] text-[12px] text-[var(--color-mist)] leading-[1.6]">
              © {new Date().getFullYear()} Venti Primo Limited. All rights reserved.
            </p>
            <p className="font-[family-name:var(--font-body)] text-[12px] text-[var(--color-mist)] leading-[1.6]">
              Venti Primo Limited is registered under the laws of the Federal Republic of Nigeria.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {quickLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="font-[family-name:var(--font-body)] text-[13px] text-[var(--color-haze)] hover:text-[var(--color-parchment)] transition-colors no-underline"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Social icons */}
            <div className="flex gap-5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="font-[family-name:var(--font-data)] text-[12px] text-[var(--color-mist)] hover:text-[var(--color-parchment)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="font-[family-name:var(--font-data)] text-[12px] text-[var(--color-mist)] hover:text-[var(--color-parchment)] transition-colors"
              >
                X / Twitter
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
