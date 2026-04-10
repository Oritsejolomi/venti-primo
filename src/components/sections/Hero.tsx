"use client";

import { useEffect, useRef, useState } from "react";

export function Hero() {
  const [in_, setIn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setIn(true), 120);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.currentTime = 1;
    const handleLoop = () => {
      if (vid.currentTime < 1) vid.currentTime = 1;
    };
    vid.addEventListener("timeupdate", handleLoop);
    return () => vid.removeEventListener("timeupdate", handleLoop);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#1A2D50",
        overflow: "hidden",
      }}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(26,45,80,0.92) 0%, rgba(26,45,80,0.75) 50%, rgba(26,45,80,0.4) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content — left aligned */}
      <div
        className="relative mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20"
        style={{ paddingTop: "160px", paddingBottom: "clamp(80px, 10vh, 140px)" }}
      >
        <div style={{ maxWidth: "600px" }}>
          <p
            className="font-[family-name:var(--font-data)]"
            style={{
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#2563EB",
              marginBottom: "28px",
              fontWeight: 500,
              opacity: in_ ? 1 : 0,
              transform: in_ ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            Venti Primo Limited — Lagos, Nigeria
          </p>

          <h1
            className="font-[family-name:var(--font-display)]"
            style={{
              fontSize: "clamp(48px, 7vw, 80px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#F0EBE3",
              marginBottom: "32px",
              opacity: in_ ? 1 : 0,
              transform: in_ ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.7s ease 0.08s, transform 0.7s ease 0.08s",
            }}
          >
            Build.<br />Fund.<br />Scale.
          </h1>

          <p
            className="font-[family-name:var(--font-body)]"
            style={{
              fontSize: "15px",
              lineHeight: 1.7,
              color: "#A0B4C8",
              maxWidth: "440px",
              marginBottom: "48px",
              opacity: in_ ? 1 : 0,
              transform: in_ ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.7s ease 0.16s, transform 0.7s ease 0.16s",
            }}
          >
            Transaction advisory, capital deployment, and technology
            infrastructure across emerging markets.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              opacity: in_ ? 1 : 0,
              transform: in_ ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.7s ease 0.24s, transform 0.7s ease 0.24s",
            }}
          >
            <a
              href="#services"
              className="font-[family-name:var(--font-body)]"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "#F0EBE3",
                backgroundColor: "#2563EB",
                padding: "14px 32px",
                borderRadius: "9999px",
                textDecoration: "none",
                display: "inline-block",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#1D4ED8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#2563EB")}
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="font-[family-name:var(--font-body)]"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "rgba(240,235,227,0.7)",
                border: "1px solid rgba(240,235,227,0.2)",
                padding: "14px 32px",
                borderRadius: "9999px",
                textDecoration: "none",
                display: "inline-block",
                transition: "border-color 0.2s ease, color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(240,235,227,0.5)";
                el.style.color = "#F0EBE3";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(240,235,227,0.2)";
                el.style.color = "rgba(240,235,227,0.7)";
              }}
            >
              Investor Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
