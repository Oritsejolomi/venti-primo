import type { Metadata } from "next";
import { instrumentSerif, outfit, ibmPlexMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venti Primo | Transaction Advisory, Capital Access & Technology Infrastructure",
  description:
    "Venti Primo is a diversified holding company providing deal origination, capital raising, technology infrastructure, and private wealth management across Africa's highest-conviction markets.",
  openGraph: {
    title: "Venti Primo | Transaction Advisory, Capital Access & Technology Infrastructure",
    description:
      "Venti Primo is a diversified holding company providing deal origination, capital raising, technology infrastructure, and private wealth management across Africa's highest-conviction markets.",
    url: "https://ventiprimo.com",
    siteName: "Venti Primo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venti Primo | Transaction Advisory, Capital Access & Technology Infrastructure",
    description:
      "Venti Primo is a diversified holding company providing deal origination, capital raising, technology infrastructure, and private wealth management across Africa's highest-conviction markets.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${outfit.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
