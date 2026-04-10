"use client";

import { useState } from "react";

const TYPES = ["General Enquiry", "Investment Opportunity", "Capital Raising", "Technology Services", "Private Wealth", "NDA Request", "Media"];

const field: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(240,235,227,0.12)",
  padding: "12px 0",
  fontSize: "15px",
  color: "#F0EBE3",
  fontFamily: "inherit",
  outline: "none",
};

export function Contact() {
  const [type, setType] = useState("General Enquiry");
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    await new Promise((r) => setTimeout(r, 800));
    setBusy(false);
    setDone(true);
  }

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#1A2D50", padding: "clamp(96px,12vw,180px) 0" }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20">
        <p
          className="font-[family-name:var(--font-data)]"
          style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#2563EB", marginBottom: "48px", fontWeight: 500 }}
        >
          Get in Touch
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "clamp(48px, 8vw, 120px)",
            alignItems: "start",
          }}
          className="grid-cols-1 lg:!grid-cols-[1fr_1.2fr]"
        >
          {/* Left */}
          <div>
            <h2
              className="font-[family-name:var(--font-display)]"
              style={{ fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#F0EBE3", marginBottom: "56px" }}
            >
              Let&apos;s<br />talk.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <p className="font-[family-name:var(--font-body)]" style={{ fontSize: "15px", fontWeight: 600, color: "#F0EBE3" }}>
                Venti Primo Limited
              </p>
              <p className="font-[family-name:var(--font-body)]" style={{ fontSize: "15px", color: "#A0B4C8" }}>
                Lagos, Nigeria
              </p>
              <a
                href="mailto:info@ventiprimo.com"
                className="font-[family-name:var(--font-body)]"
                style={{ fontSize: "15px", color: "#A0B4C8", textDecoration: "none" }}
              >
                info@ventiprimo.com
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {done ? (
              <div style={{ paddingTop: "16px" }}>
                <p className="font-[family-name:var(--font-display)]" style={{ fontSize: "28px", fontWeight: 500, color: "#F0EBE3", marginBottom: "12px" }}>
                  Message received.
                </p>
                <p className="font-[family-name:var(--font-body)]" style={{ fontSize: "15px", color: "#A0B4C8" }}>
                  We&apos;ll be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px 24px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,235,227,0.28)" }}>
                      Name *
                    </label>
                    <input type="text" required placeholder="Your name" style={{ ...field, color: "#F0EBE3" }} className="placeholder:text-[rgba(240,235,227,0.2)] font-[family-name:var(--font-body)]" />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,235,227,0.28)" }}>
                      Email *
                    </label>
                    <input type="email" required placeholder="you@company.com" style={field} className="placeholder:text-[rgba(240,235,227,0.2)] font-[family-name:var(--font-body)]" />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,235,227,0.28)" }}>
                    Organisation
                  </label>
                  <input type="text" placeholder="Optional" style={field} className="placeholder:text-[rgba(240,235,227,0.2)] font-[family-name:var(--font-body)]" />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,235,227,0.28)" }}>
                    Enquiry Type
                  </label>
                  <select value={type} onChange={(e) => setType(e.target.value)} style={{ ...field, appearance: "none", cursor: "pointer", background: "#1A2D50" }} className="font-[family-name:var(--font-body)]">
                    {TYPES.map((t) => <option key={t} value={t} style={{ background: "#1A2D50" }}>{t}</option>)}
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label className="font-[family-name:var(--font-data)]" style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,235,227,0.28)" }}>
                    Message
                  </label>
                  <textarea rows={5} placeholder="Tell us about your enquiry..." style={{ ...field, resize: "none" }} className="placeholder:text-[rgba(240,235,227,0.2)] font-[family-name:var(--font-body)]" />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <input type="checkbox" id="sub" style={{ accentColor: "#2563EB", width: "16px", height: "16px", cursor: "pointer", flexShrink: 0 }} />
                  <label htmlFor="sub" className="font-[family-name:var(--font-body)]" style={{ fontSize: "13px", color: "rgba(240,235,227,0.3)", cursor: "pointer" }}>
                    Subscribe to Venti Primo Insights
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={busy}
                  className="font-[family-name:var(--font-body)]"
                  style={{ alignSelf: "flex-start", background: "#2563EB", color: "#F0EBE3", border: "none", padding: "15px 36px", borderRadius: "9999px", fontSize: "14px", fontWeight: 500, letterSpacing: "0.04em", cursor: busy ? "not-allowed" : "pointer", opacity: busy ? 0.6 : 1 }}
                >
                  {busy ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
