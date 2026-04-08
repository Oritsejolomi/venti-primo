import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

const articles = [
  {
    date: "2026.04.01",
    category: "Market Commentary",
    title: "Nigeria Macro Outlook: Q2 2026",
    excerpt: "Sector outlook and FX developments for institutional allocators looking at Nigerian assets.",
    href: "/insights/nigeria-macro-q2-2026",
  },
  {
    date: "2026.03.15",
    category: "Technology Briefings",
    title: "Network Infrastructure as an Asset Class in West Africa",
    excerpt: "Why tower companies, fibre networks, and data centres are becoming the preferred infrastructure play.",
    href: "/insights/network-infrastructure-west-africa",
  },
  {
    date: "2026.03.01",
    category: "Deal Insights",
    title: "Transaction Structures Explained: Upstream Advisory",
    excerpt: "An anonymised walkthrough of a transaction structure from origination through to close.",
    href: "/insights/transaction-structures-upstream",
  },
];

export function Insights() {
  return (
    <section id="insights" className="section-spacing">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel>Insights</SectionLabel>
            <h2 className="font-[family-name:var(--font-display)] text-[36px] md:text-[42px] leading-[1.15] text-[var(--color-parchment)]">
              Market commentary and deal intelligence.
            </h2>
          </div>
          <Link
            href="/insights"
            className="font-[family-name:var(--font-body)] text-[14px] font-semibold text-[var(--color-laterite)] hover:underline whitespace-nowrap flex-shrink-0"
          >
            View all insights →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="group bg-[var(--color-deep-water)] border border-[rgba(59,107,156,0.1)] rounded-lg p-8 flex flex-col gap-4 hover:border-[var(--color-laterite)] transition-colors duration-200 no-underline"
            >
              <div className="flex items-center gap-3">
                <span className="font-[family-name:var(--font-data)] text-[12px] text-[var(--color-mist)]">
                  {a.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-mist)]" />
                <span className="font-[family-name:var(--font-body)] text-[12px] text-[var(--color-aso-oke)] uppercase tracking-[0.06em]">
                  {a.category}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-[22px] leading-[1.3] text-[var(--color-parchment)] flex-1">
                {a.title}
              </h3>
              <p className="font-[family-name:var(--font-body)] text-[14px] text-[var(--color-haze)] leading-[1.6]">
                {a.excerpt}
              </p>
              <span className="font-[family-name:var(--font-body)] text-[14px] font-semibold text-[var(--color-laterite)] group-hover:underline">
                Read more
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
