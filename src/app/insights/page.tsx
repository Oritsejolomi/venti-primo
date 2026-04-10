import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
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

const categories = ["All", "Market Commentary", "Deal Insights", "Technology Briefings", "Investor Notes"];

export const metadata = {
  title: "Insights | Venti Primo",
  description: "Market commentary, sector theses, and deal intelligence from Venti Primo.",
};

export default function InsightsPage() {
  return (
    <>
      <Nav />
      <main className="pt-28 pb-24">
        <Container>
          <SectionLabel>Insights</SectionLabel>
          <h1 className="font-[family-name:var(--font-display)] text-[40px] md:text-[52px] font-bold leading-[1.15] tracking-tight text-[var(--color-parchment)] mb-4 max-w-[640px]">
            Market commentary and deal intelligence.
          </h1>
          <p className="text-[var(--color-haze)] text-[15px] max-w-[560px] mb-12">
            Nigeria macro, sector outlook, FX developments, deal insights, technology briefings, and investor notes.
          </p>

          {/* Category filter pills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((c) => (
              <span
                key={c}
                className={`font-[family-name:var(--font-body)] text-[13px] px-4 py-1.5 rounded-full border cursor-pointer transition-colors ${
                  c === "All"
                    ? "border-[var(--color-cobalt)] text-[var(--color-cobalt)] bg-[rgba(37,99,235,0.08)]"
                    : "border-[rgba(160,180,200,0.2)] text-[var(--color-haze)] hover:border-[var(--color-cobalt)] hover:text-[var(--color-cobalt)]"
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="group bg-[var(--color-deep-water)] border border-[rgba(37,99,235,0.1)] rounded-lg p-8 flex flex-col gap-4 hover:border-[var(--color-cobalt)] transition-colors duration-200 no-underline"
              >
                <div className="flex items-center gap-3">
                  <span className="font-[family-name:var(--font-data)] text-[12px] text-[var(--color-mist)]">
                    {a.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-mist)]" />
                  <span className="font-[family-name:var(--font-body)] text-[12px] text-[var(--color-cobalt)] uppercase tracking-[0.06em]">
                    {a.category}
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-[20px] font-medium leading-[1.3] text-[var(--color-parchment)] flex-1">
                  {a.title}
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[14px] text-[var(--color-haze)] leading-[1.6]">
                  {a.excerpt}
                </p>
                <span className="font-[family-name:var(--font-body)] text-[14px] font-medium text-[var(--color-cobalt)] group-hover:underline">
                  Read more
                </span>
              </a>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
