import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";

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
          <Link
            href="/insights"
            className="font-[family-name:var(--font-body)] text-[13px] text-[#A0BEC0] hover:text-[var(--color-teal)] transition-colors mb-10 inline-flex items-center gap-2 no-underline"
          >
            All Insights
          </Link>

          <div className="max-w-[760px] mt-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-[family-name:var(--font-data)] text-[12px] text-[#7A9A9C]">
                {article.date}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#7A9A9C]" />
              <span className="font-[family-name:var(--font-body)] text-[12px] text-[var(--color-teal)] uppercase tracking-[0.06em]">
                {article.category}
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-[36px] md:text-[48px] font-bold leading-[1.15] tracking-tight text-[var(--color-parchment)] mb-10">
              {article.title}
            </h1>

            <div className="h-px bg-[rgba(160,180,200,0.15)] mb-10" />

            <div className="font-[family-name:var(--font-body)] text-[15px] leading-[1.7] text-[#A0BEC0] max-w-[680px]">
              <p>{article.body}</p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
