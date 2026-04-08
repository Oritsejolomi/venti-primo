"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

const enquiryTypes = [
  "General Enquiry",
  "Investment Opportunity",
  "Capital Raising",
  "Technology Services",
  "Private Wealth",
  "NDA Request",
  "Media",
];

export function Contact() {
  const [enquiryType, setEnquiryType] = useState("General Enquiry");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Form submission will connect to Resend API in Phase 4
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section-spacing">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left */}
          <div>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className="font-[family-name:var(--font-display)] text-[48px] md:text-[60px] leading-[1.05] text-[var(--color-parchment)] mb-8">
              Let&apos;s talk.
            </h2>
            <div className="flex flex-col gap-3">
              <p className="font-[family-name:var(--font-body)] text-[16px] font-semibold text-[var(--color-parchment)]">
                Venti Primo Limited
              </p>
              <p className="font-[family-name:var(--font-body)] text-[15px] text-[var(--color-haze)]">Lagos, Nigeria</p>
              <a
                href="mailto:info@ventiprimo.com"
                className="font-[family-name:var(--font-body)] text-[15px] text-[var(--color-haze)] hover:text-[var(--color-laterite)] transition-colors"
              >
                info@ventiprimo.com
              </a>
              <p className="font-[family-name:var(--font-body)] text-[15px] text-[var(--color-haze)]">ventiprimo.com</p>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[var(--color-deep-water)] border border-[rgba(59,107,156,0.12)] rounded-lg p-8 md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[rgba(74,155,110,0.15)] border border-[var(--color-success)] flex items-center justify-center text-[var(--color-success)] text-xl">
                  ✓
                </div>
                <p className="font-[family-name:var(--font-display)] text-[24px] text-[var(--color-parchment)]">
                  Message received.
                </p>
                <p className="text-[var(--color-haze)] text-[15px]">
                  We&apos;ll be in touch within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-[family-name:var(--font-body)] text-[13px] font-medium text-[var(--color-haze)] tracking-[0.02em]">
                      Name <span className="text-[var(--color-laterite)]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="bg-[var(--color-midnight)] border border-[rgba(126,140,160,0.2)] rounded-[4px] px-4 py-3 text-[15px] text-[var(--color-parchment)] placeholder:text-[var(--color-mist)] font-[family-name:var(--font-body)] outline-none focus:border-[var(--color-laterite)] transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-[family-name:var(--font-body)] text-[13px] font-medium text-[var(--color-haze)] tracking-[0.02em]">
                      Email <span className="text-[var(--color-laterite)]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="bg-[var(--color-midnight)] border border-[rgba(126,140,160,0.2)] rounded-[4px] px-4 py-3 text-[15px] text-[var(--color-parchment)] placeholder:text-[var(--color-mist)] font-[family-name:var(--font-body)] outline-none focus:border-[var(--color-laterite)] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-[family-name:var(--font-body)] text-[13px] font-medium text-[var(--color-haze)] tracking-[0.02em]">
                    Organisation
                  </label>
                  <input
                    type="text"
                    placeholder="Optional"
                    className="bg-[var(--color-midnight)] border border-[rgba(126,140,160,0.2)] rounded-[4px] px-4 py-3 text-[15px] text-[var(--color-parchment)] placeholder:text-[var(--color-mist)] font-[family-name:var(--font-body)] outline-none focus:border-[var(--color-laterite)] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-[family-name:var(--font-body)] text-[13px] font-medium text-[var(--color-haze)] tracking-[0.02em]">
                    Enquiry Type
                  </label>
                  <select
                    value={enquiryType}
                    onChange={(e) => setEnquiryType(e.target.value)}
                    className="bg-[var(--color-midnight)] border border-[rgba(126,140,160,0.2)] rounded-[4px] px-4 py-3 text-[15px] text-[var(--color-parchment)] font-[family-name:var(--font-body)] outline-none focus:border-[var(--color-laterite)] transition-colors appearance-none cursor-pointer"
                  >
                    {enquiryTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  {enquiryType === "NDA Request" && (
                    <p className="font-[family-name:var(--font-body)] text-[13px] text-[var(--color-aso-oke)] mt-1">
                      Please provide your details and we will share our standard mutual NDA for review and execution.
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-[family-name:var(--font-body)] text-[13px] font-medium text-[var(--color-haze)] tracking-[0.02em]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your enquiry..."
                    className="bg-[var(--color-midnight)] border border-[rgba(126,140,160,0.2)] rounded-[4px] px-4 py-3 text-[15px] text-[var(--color-parchment)] placeholder:text-[var(--color-mist)] font-[family-name:var(--font-body)] outline-none focus:border-[var(--color-laterite)] transition-colors resize-y min-h-[120px]"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="accent-[var(--color-laterite)] w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="newsletter"
                    className="font-[family-name:var(--font-body)] text-[13px] text-[var(--color-haze)] cursor-pointer"
                  >
                    Subscribe to Venti Primo Insights
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full mt-2"
                  disabled={loading}
                >
                  {loading ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
