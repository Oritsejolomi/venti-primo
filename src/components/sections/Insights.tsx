"use client";

import Link from "next/link";
import { useState } from "react";

const ARTICLES = [
  {
    date: "Apr 2026",
    category: "Market Commentary",
    readTime: "6 min",
    title: "Nigeria Macro Outlook: Q2 2026",
    excerpt:
      "Sector outlook and FX developments for institutional allocators with exposure to Nigerian assets.",
    href: "/insights/nigeria-macro-q2-2026",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=85&auto=format&fit=crop",
  },
  {
    date: "Mar 2026",
    category: "Technology Briefings",
    readTime: "8 min",
    title: "Network Infrastructure as an Asset Class in West Africa",
    excerpt:
      "Why tower companies, fibre networks, and data centres are becoming the preferred infrastructure play.",
    href: "/insights/network-infrastructure-west-africa",
  },
  {
    date: "Mar 2026",
    category: "Deal Insights",
    readTime: "5 min",
    title: "Transaction Structures Explained: Upstream Advisory",
    excerpt:
      "An anonymised walkthrough of a deal structure from mandate origination through to financial close.",
    href: "/insights/transaction-structures-upstream",
  },
];

export function Insights() {
  return (
    <section
      id="insights"
      data-theme="light"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F7F5F0",
        color: "#0A2623",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="mx-auto w-full max-w-[1440px]"
        style={{
          paddingLeft: "var(--container-px)",
          paddingRight: "var(--container-px)",
          paddingTop: "var(--section-py)",
          paddingBottom: "var(--section-py)",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          className="font-[family-name:var(--font-data)]"
          style={{
            fontSize: "var(--text-caption)",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#D4A853",
            marginBottom: "var(--space-7)",
          }}
        >
          06 Insights
        </div>

        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between flex-wrap"
          style={{
            gap: "var(--space-6)",
            marginBottom: "var(--space-9)",
          }}
        >
          <h2
            className="font-[family-name:var(--font-display)]"
            style={{
              fontSize: "var(--text-display-sm)",
              fontWeight: 400,
              lineHeight: 0.96,
              letterSpacing: "-0.025em",
              color: "#0A2623",
              maxWidth: "1100px",
            }}
          >
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0D9488" }}>Market commentary.</em>
          </h2>

          <Link
            href="/insights"
            className="font-[family-name:var(--font-body)]"
            style={{
              fontSize: "var(--text-small)",
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: "#F0EBE3",
              background: "#0A2623",
              padding: "var(--space-3) var(--space-6)",
              borderRadius: "9999px",
              textDecoration: "none",
              display: "inline-block",
              transition: "background 200ms ease",
              alignSelf: "flex-start",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#134E4A")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0A2623")}
          >
            All insights
          </Link>
        </div>

        {/* Featured + secondary stack */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] flex-1"
          style={{
            gap: "var(--section-gap)",
          }}
        >
          <FeaturedArticle a={ARTICLES[0]} />
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {ARTICLES.slice(1).map((a, i) => (
              <SecondaryArticle key={a.href} a={a} first={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedArticle({ a }: { a: (typeof ARTICLES)[0] }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={a.href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "4/3",
          overflow: "hidden",
          borderRadius: "2px",
          backgroundColor: "#0A2623",
          marginBottom: "32px",
        }}
      >
        <img
          src={a.image}
          alt={a.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "saturate(0.9) contrast(1.05)",
            transform: hover ? "scale(1.03)" : "scale(1)",
            transition: "transform 700ms ease",
          }}
        />
      </div>

      <div
        className="font-[family-name:var(--font-data)]"
        style={{
          fontSize: "10px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(10,38,35,0.55)",
          marginBottom: "20px",
          display: "flex",
          gap: "20px",
        }}
      >
        <span>{a.category}</span>
        <span style={{ color: "rgba(10,38,35,0.3)" }}>·</span>
        <span>{a.date}</span>
        <span style={{ color: "rgba(10,38,35,0.3)" }}>·</span>
        <span>{a.readTime} read</span>
      </div>

      <h3
        className="font-[family-name:var(--font-display)]"
        style={{
          fontSize: "var(--text-h2)",
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "#0A2623",
          marginBottom: "var(--space-4)",
        }}
      >
        {a.title}
      </h3>

      <p
        className="font-[family-name:var(--font-body)]"
        style={{
          fontSize: "var(--text-lead)",
          lineHeight: 1.6,
          color: "rgba(10,38,35,0.7)",
          maxWidth: "560px",
        }}
      >
        {a.excerpt}
      </p>
    </Link>
  );
}

function SecondaryArticle({
  a,
  first,
}: {
  a: (typeof ARTICLES)[0];
  first: boolean;
}) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      href={a.href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        paddingTop: "40px",
        paddingBottom: "40px",
        paddingRight: "0px",
        paddingLeft: hover ? "16px" : "0px",
        borderTop: first ? "1px solid rgba(10,38,35,0.14)" : "none",
        borderBottom: "1px solid rgba(10,38,35,0.14)",
        transition: "padding-left 280ms ease",
      }}
    >
      <div
        className="font-[family-name:var(--font-data)]"
        style={{
          fontSize: "10px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(10,38,35,0.55)",
          marginBottom: "16px",
          display: "flex",
          gap: "16px",
        }}
      >
        <span>{a.category}</span>
        <span style={{ color: "rgba(10,38,35,0.3)" }}>·</span>
        <span>{a.date}</span>
      </div>

      <h3
        className="font-[family-name:var(--font-display)]"
        style={{
          fontSize: "var(--text-h3)",
          fontWeight: 400,
          lineHeight: 1.15,
          letterSpacing: "-0.015em",
          color: "#0A2623",
          marginBottom: "16px",
        }}
      >
        {a.title}
      </h3>

      <div
        className="font-[family-name:var(--font-body)]"
        style={{
          fontSize: "13px",
          color: hover ? "#0D9488" : "rgba(10,38,35,0.5)",
          transition: "color 280ms ease",
          letterSpacing: "0.02em",
        }}
      >
        Read article
      </div>
    </Link>
  );
}
