"use client";

import { useState } from "react";

const TYPES = [
  "General Enquiry",
  "Investment Opportunity",
  "Capital Raising",
  "Technology Services",
  "Private Wealth",
  "NDA Request",
  "Media",
];

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(10,38,35,0.2)",
  padding: "14px 0",
  color: "#0A2623",
  fontFamily: "var(--font-body)",
  fontSize: "16px",
  outline: "none",
  transition: "border-color 200ms ease",
  boxSizing: "border-box",
  borderRadius: 0,
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
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <label
        className="font-[family-name:var(--font-data)]"
        style={{
          fontSize: "10px",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(10,38,35,0.55)",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "#0A2623";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "rgba(10,38,35,0.2)";
        }}
        style={inputBase}
        className="placeholder:text-[rgba(10,38,35,0.3)] font-[family-name:var(--font-body)]"
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
    <section
      id="contact"
      data-theme="light"
      style={{
        minHeight: "100vh",
        backgroundColor: "#F0EBE3",
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
            color: "rgba(10,38,35,0.5)",
            marginBottom: "var(--space-7)",
          }}
        >
          <span style={{ display: "inline-block", width: "32px", height: "1px", background: "rgba(10,38,35,0.5)", verticalAlign: "middle", marginRight: "16px" }} />
          § 08 — Get in touch
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-start flex-1"
          style={{
            gap: "var(--section-gap)",
          }}
        >
          {/* Left — editorial copy */}
          <div>
            <h2
              className="font-[family-name:var(--font-display)]"
              style={{
                fontSize: "var(--text-display)",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "#0A2623",
                marginBottom: "var(--space-7)",
              }}
            >
              Let&apos;s
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>talk.</em>
            </h2>

            <p
              className="font-[family-name:var(--font-body)]"
              style={{
                fontSize: "clamp(16px, 1.35vw, 19px)",
                lineHeight: 1.6,
                color: "rgba(10,38,35,0.72)",
                maxWidth: "480px",
                marginBottom: "64px",
              }}
            >
              Mandates, investor enquiries, NDAs, and press. We respond to
              credible approaches within two working days.
            </p>

            <div
              style={{
                paddingTop: "32px",
                borderTop: "1px solid rgba(10,38,35,0.14)",
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              {[
                { k: "Office", v: "Venti Primo Limited", sub: "Lagos, Nigeria" },
                { k: "Email", v: "info@ventiprimo.com", href: "mailto:info@ventiprimo.com" },
                { k: "Hours", v: "Mon–Fri · 08:00–18:00 WAT" },
              ].map((m) => (
                <div
                  key={m.k}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr",
                    gap: "24px",
                    alignItems: "baseline",
                  }}
                >
                  <div
                    className="font-[family-name:var(--font-data)]"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "rgba(10,38,35,0.55)",
                    }}
                  >
                    {m.k}
                  </div>
                  <div>
                    {m.href ? (
                      <a
                        href={m.href}
                        className="font-[family-name:var(--font-display)]"
                        style={{
                          fontSize: "20px",
                          color: "#0A2623",
                          textDecoration: "none",
                          borderBottom: "1px solid rgba(10,38,35,0.3)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {m.v}
                      </a>
                    ) : (
                      <div
                        className="font-[family-name:var(--font-display)]"
                        style={{
                          fontSize: "20px",
                          color: "#0A2623",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {m.v}
                      </div>
                    )}
                    {m.sub && (
                      <div
                        className="font-[family-name:var(--font-body)]"
                        style={{
                          marginTop: "4px",
                          fontSize: "14px",
                          color: "rgba(10,38,35,0.55)",
                        }}
                      >
                        {m.sub}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — minimal form, line-only inputs */}
          <form
            onSubmit={submit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            {done ? (
              <div
                style={{
                  padding: "48px 0",
                  borderTop: "1px solid rgba(10,38,35,0.14)",
                  borderBottom: "1px solid rgba(10,38,35,0.14)",
                }}
              >
                <div
                  className="font-[family-name:var(--font-data)]"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#0D9488",
                    marginBottom: "20px",
                  }}
                >
                  Message received
                </div>
                <div
                  className="font-[family-name:var(--font-display)]"
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    color: "#0A2623",
                    marginBottom: "16px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  <em style={{ fontStyle: "italic" }}>Thank you.</em>
                </div>
                <div
                  className="font-[family-name:var(--font-body)]"
                  style={{ fontSize: "16px", color: "rgba(10,38,35,0.65)", lineHeight: 1.6 }}
                >
                  We&apos;ll respond to your enquiry within two working days.
                </div>
              </div>
            ) : (
              <>
                <div
                  className="grid grid-cols-1 sm:grid-cols-2"
                  style={{ gap: "var(--space-6)" }}
                >
                  <Field label="Name" required placeholder="Your name" />
                  <Field label="Email" type="email" required placeholder="you@company.com" />
                </div>

                <Field label="Organisation" placeholder="Optional" />

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <label
                    className="font-[family-name:var(--font-data)]"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "rgba(10,38,35,0.55)",
                    }}
                  >
                    Enquiry Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
                    className="font-[family-name:var(--font-body)]"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0A2623";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(10,38,35,0.2)";
                    }}
                  >
                    {TYPES.map((t) => (
                      <option key={t} value={t} style={{ background: "#F0EBE3", color: "#0A2623" }}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <label
                    className="font-[family-name:var(--font-data)]"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "rgba(10,38,35,0.55)",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your enquiry..."
                    style={{ ...inputBase, resize: "vertical", lineHeight: 1.6 }}
                    className="placeholder:text-[rgba(10,38,35,0.3)] font-[family-name:var(--font-body)]"
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0A2623";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(10,38,35,0.2)";
                    }}
                  />
                </div>

                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{
                      accentColor: "#0A2623",
                      width: "16px",
                      height: "16px",
                      cursor: "pointer",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    className="font-[family-name:var(--font-body)]"
                    style={{ fontSize: "14px", color: "rgba(10,38,35,0.7)" }}
                  >
                    Subscribe to Venti Primo Insights
                  </span>
                </label>

                <div style={{ marginTop: "16px" }}>
                  <button
                    type="submit"
                    disabled={busy}
                    className="font-[family-name:var(--font-body)]"
                    style={{
                      padding: "16px 36px",
                      borderRadius: "9999px",
                      border: "none",
                      background: busy ? "#134E4A" : "#0A2623",
                      color: "#F0EBE3",
                      fontSize: "14px",
                      fontWeight: 500,
                      letterSpacing: "0.04em",
                      cursor: busy ? "not-allowed" : "pointer",
                      opacity: busy ? 0.7 : 1,
                      transition: "background 200ms ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!busy) (e.currentTarget as HTMLElement).style.background = "#134E4A";
                    }}
                    onMouseLeave={(e) => {
                      if (!busy) (e.currentTarget as HTMLElement).style.background = "#0A2623";
                    }}
                  >
                    {busy ? "Sending…" : "Send Message →"}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
