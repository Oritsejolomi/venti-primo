import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";

// Article data — replace with MDX/CMS when content is ready
const articles: Record<string, { title: string; date: string; category: string; body: string }> = {
  "nigeria-macro-q2-2026": {
    title: "Nigeria Macro Outlook: Q2 2026",
    date: "1 April 2026",
    category: "Market Commentary",
    body: "Content coming soon. This article will cover sector outlook and FX developments for institutional allocators looking at Nigerian assets.",
  },
  "network-infrastructure-west-africa": {
    title: "Network Infrastructure as an Asset Class in West Africa",
    date: "15 March 2026",
    category: "Technology Briefings",
    body: "Content coming soon. This article will cover why tower companies, fibre networks, and data centres are becoming the preferred infrastructure play in West Africa.",
  },
  "transaction-structures-upstream": {
    title: "Transaction Structures Explained: Upstream Advisory",
    date: "1 March 2026",
    category: "Deal Insights",
    body: "Content coming soon. This article will provide an anonymised walkthrough of a transaction structure from origination through to close.",
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return {
    title: `${article.title} | Venti Primo Insights`,
    description: article.body.slice(0, 150),
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <Nav />
      <main className="pt-28 pb-24">
        <Container>
          {/* Back link */}
          <Link
            href="/insights"
            className="font-[family-name:var(--font-body)] text-[13px] text-[var(--color-haze)] hover:text-[var(--color-laterite)] transition-colors mb-10 inline-flex items-center gap-2 no-underline"
          >
            ← All Insights
          </Link>

          {/* Article header */}
          <div className="max-w-[760px] mt-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-[family-name:var(--font-data)] text-[12px] text-[var(--color-mist)]">
                {article.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-[var(--color-mist)]" />
              <span className="font-[family-name:var(--font-body)] text-[12px] text-[var(--color-aso-oke)] uppercase tracking-[0.06em]">
                {article.category}
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-[40px] md:text-[52px] leading-[1.1] text-[var(--color-parchment)] mb-10">
              {article.title}
            </h1>

            {/* Article divider */}
            <div className="h-px bg-[rgba(126,140,160,0.15)] mb-10" />

            {/* Body */}
            <div className="font-[family-name:var(--font-body)] text-[17px] leading-[1.75] text-[var(--color-haze)] max-w-[680px]">
              <p>{article.body}</p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
