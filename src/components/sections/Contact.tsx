"use client";

import { useState } from "react";

const TYPES = ["General Enquiry", "Investment Opportunity", "Capital Raising", "Technology Services", "Private Wealth", "NDA Request", "Media"];

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "#1F3640",
  border: "1px solid rgba(240,235,227,0.12)",
  borderRadius: "8px",
  padding: "14px 14px",
  color: "#F0EBE3",
  fontFamily: "var(--font-body)",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 180ms, box-shadow 180ms",
  boxSizing: "border-box",
};

function Field({
  label,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label
        className="font-[family-name:var(--font-display)]"
        style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8896A8" }}
      >
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#0D9488";
          e.currentTarget.style.boxShadow = "0 0 0 3px rgba(13,148,136,0.22)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "rgba(240,235,227,0.12)";
          e.currentTarget.style.boxShadow = "none";
        }}
        style={inputBase}
        className="placeholder:text-[rgba(240,235,227,0.2)] font-[family-name:var(--font-body)]"
      />
    </div>
  );
}

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
    <section id="contact" style={{ backgroundColor: "#1A1F2E", padding: "clamp(96px,12vw,180px) 0", position: "relative" }}>
      <div className="mx-auto w-full max-w-[1280px] px-8 md:px-14 lg:px-20">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "clamp(48px,8vw,120px)", alignItems: "start" }}
          className="grid-cols-1 lg:!grid-cols-[1fr_1.2fr]"
        >
          {/* Left */}
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
              § 08 — Get in touch
            </div>
            <h2
              className="font-[family-name:var(--font-display)]"
              style={{ fontSize: "clamp(40px,5.5vw,72px)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#F0EBE3", marginBottom: "32px" }}
            >
              Let&apos;s talk.
            </h2>
            <p
              className="font-[family-name:var(--font-body)]"
              style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(240,235,227,0.7)", maxWidth: "380px", marginBottom: "64px" }}
            >
              Mandates, investor enquiries, NDAs, and press. We respond to credible approaches within two working days.
            </p>

            <div style={{ paddingTop: "32px", borderTop: "1px solid rgba(240,235,227,0.12)", display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "Office", value: "Venti Primo Limited", sub: "Lagos, Nigeria" },
                { label: "Email", value: "info@ventiprimo.com", href: "mailto:info@ventiprimo.com" },
                { label: "Hours", value: "Mon–Fri · 08:00–18:00 WAT" },
              ].map((m) => (
                <div key={m.label} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "24px", alignItems: "baseline" }}>
                  <div className="font-[family-name:var(--font-display)]" style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8896A8" }}>
                    {m.label}
                  </div>
                  <div>
                    {m.href ? (
                      <a href={m.href} className="font-[family-name:var(--font-body)]" style={{ fontSize: "15px", color: "#F0EBE3", textDecoration: "none", borderBottom: "1px solid rgba(240,235,227,0.24)" }}>
                        {m.value}
                      </a>
                    ) : (
                      <div className="font-[family-name:var(--font-body)]" style={{ fontSize: "15px", color: "#F0EBE3" }}>{m.value}</div>
                    )}
                    {m.sub && <div className="font-[family-name:var(--font-body)]" style={{ marginTop: "4px", fontSize: "13px", color: "#8896A8" }}>{m.sub}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={submit}
            style={{
              background: "#25404A",
              border: "1px solid rgba(240,235,227,0.12)",
              borderRadius: "12px",
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {done ? (
              <div style={{ padding: "32px 0", textAlign: "center" }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "999px",
                  background: "rgba(74,155,110,0.18)", border: "1px solid rgba(74,155,110,0.4)",
                  margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "20px",
                }}>
                  ✓
                </div>
                <div className="font-[family-name:var(--font-display)]" style={{ fontSize: "20px", fontWeight: 500, color: "#F0EBE3", marginBottom: "12px" }}>
                  Message received.
                </div>
                <div className="font-[family-name:var(--font-body)]" style={{ fontSize: "14px", color: "#8896A8", lineHeight: 1.7 }}>
                  We&apos;ll respond to your enquiry within two working days.
                </div>
              </div>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="grid-cols-1 sm:!grid-cols-2">
                  <Field label="Name *" required placeholder="Your name" />
                  <Field label="Email *" type="email" required placeholder="you@company.com" />
                </div>
                <Field label="Organisation" placeholder="Optional" />

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label className="font-[family-name:var(--font-display)]" style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8896A8" }}>
                    Enquiry Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
                    className="font-[family-name:var(--font-body)]"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0D9488";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(13,148,136,0.22)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(240,235,227,0.12)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {TYPES.map((t) => <option key={t} value={t} style={{ background: "#1F3640" }}>{t}</option>)}
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label className="font-[family-name:var(--font-display)]" style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8896A8" }}>
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your enquiry..."
                    style={{ ...inputBase, resize: "vertical", lineHeight: 1.6 }}
                    className="placeholder:text-[rgba(240,235,227,0.2)] font-[family-name:var(--font-body)]"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0D9488";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(13,148,136,0.22)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(240,235,227,0.12)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                  <input type="checkbox" style={{ accentColor: "#0D9488", width: "16px", height: "16px", cursor: "pointer", flexShrink: 0 }} />
                  <span className="font-[family-name:var(--font-body)]" style={{ fontSize: "13px", color: "rgba(240,235,227,0.65)" }}>
                    Subscribe to Venti Primo Insights
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={busy}
                  className="font-[family-name:var(--font-body)]"
                  style={{
                    marginTop: "8px",
                    padding: "16px 28px",
                    borderRadius: "8px",
                    border: "none",
                    background: busy ? "#0F766E" : "#0D9488",
                    color: "#1A1F2E",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "0.04em",
                    cursor: busy ? "not-allowed" : "pointer",
                    opacity: busy ? 0.7 : 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    transition: "background 180ms",
                  }}
                  onMouseEnter={(e) => { if (!busy) (e.currentTarget as HTMLElement).style.background = "#99F6E4"; }}
                  onMouseLeave={(e) => { if (!busy) (e.currentTarget as HTMLElement).style.background = "#0D9488"; }}
                >
                  {busy ? "Sending…" : "Send Message →"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
