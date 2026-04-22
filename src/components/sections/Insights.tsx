"use client";

import Link from "next/link";
import { useState } from "react";

const ARTICLES = [
  {
    date: "Apr 2026",
    category: "Market Commentary",
    readTime: "6 min",
    title: "Nigeria Macro Outlook: Q2 2026",
    excerpt: "Sector outlook and FX developments for institutional allocators with exposure to Nigerian assets.",
    href: "/insights/nigeria-macro-q2-2026",
    featured: true,
  },
  {
    date: "Mar 2026",
    category: "Technology Briefings",
    readTime: "8 min",
    title: "Network Infrastructure as an Asset Class in West Africa",
    excerpt: "Why tower companies, fibre networks, and data centres are becoming the preferred infrastructure play.",
    href: "/insights/network-infrastructure-west-africa",
    featured: false,
  },
  {
    date: "Mar 2026",
    category: "Deal Insights",
    readTime: "5 min",
    title: "Transaction Structures Explained: Upstream Advisory",
    excerpt: "An anonymised walkthrough of a deal structure from mandate origination through to financial close.",
    href: "/insights/transaction-structures-upstream",
    featured: false,
  },
];

function PostCard({ article, first }: { article: (typeof ARTICLES)[0]; first: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={article.href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: first ? "48px 48px 48px 0" : "48px 32px",
        borderLeft: first ? "none" : "1px solid rgba(240,235,227,0.10)",
        borderBottom: "1px solid rgba(240,235,227,0.10)",
        textDecoration: "none",
        color: "inherit",
        transition: "background 180ms",
        background: hover ? "rgba(13,148,136,0.04)" : "transparent",
        minHeight: first ? "440px" : "380px",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            className="font-[family-name:var(--font-display)]"
            style={{
              padding: "5px 10px",
              borderRadius: "999px",
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              background: "rgba(13,148,136,0.14)",
              color: "#5EEAD4",
              border: "1px solid rgba(13,148,136,0.28)",
            }}
          >
            {article.category}
          </span>
          <span className="font-[family-name:var(--font-display)]" style={{ fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#8896A8" }}>
            {article.date}
          </span>
        </div>

        <h3
          className="font-[family-name:var(--font-display)]"
          style={{
            marginTop: first ? "48px" : "32px",
            fontWeight: 500,
            fontSize: first ? "clamp(22px,2.4vw,32px)" : "clamp(16px,1.8vw,22px)",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            color: "#F0EBE3",
          }}
        >
          {article.title}
        </h3>

        <p
          className="font-[family-name:var(--font-body)]"
          style={{ marginTop: "20px", fontSize: first ? "15px" : "14px", lineHeight: 1.65, color: "rgba(240,235,227,0.7)" }}
        >
          {article.excerpt}
        </p>
      </div>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span className="font-[family-name:var(--font-display)]" style={{ fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#8896A8" }}>
          {article.readTime} read
        </span>
        <span
          className="font-[family-name:var(--font-display)]"
          style={{
            fontSize: "11px",
            letterSpacing: "0.08em",
            color: hover ? "#0D9488" : "#8896A8",
            transition: "color 180ms, transform 180ms",
            transform: hover ? "translateX(4px)" : "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          Read →
        </span>
      </div>
    </Link>
  );
}

export function Insights() {
  return (
    <section id="insights" style={{ backgroundColor: "#253C43", padding: "clamp(96px,12vw,180px) 0" }}>
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "48px", flexWrap: "wrap", marginBottom: "64px" }}>
          <div>
            <div
              className="font-[family-name:var(--font-display)]"
              style={{
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#8896A8",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "28px",
              }}
            >
              <span style={{ width: "24px", height: "1px", background: "#0D9488", flexShrink: 0 }} />
              § 06 — Insights
            </div>
            <h2
              className="font-[family-name:var(--font-display)]"
              style={{ fontSize: "clamp(32px,4.5vw,56px)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.02em", color: "#F0EBE3" }}
            >
              Market commentary<br />and deal intelligence.
            </h2>
          </div>
          <Link
            href="/insights"
            className="font-[family-name:var(--font-display)]"
            style={{
              fontSize: "12px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#0D9488",
              textDecoration: "none",
              borderBottom: "1px solid #0D9488",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              whiteSpace: "nowrap",
            }}
          >
            View all →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            borderTop: "1px solid rgba(240,235,227,0.10)",
          }}
          className="grid-cols-1 lg:!grid-cols-[1.4fr_1fr_1fr]"
        >
          {ARTICLES.map((a, i) => <PostCard key={a.href} article={a} first={i === 0} />)}
        </div>
      </div>
    </section>
  );
}
