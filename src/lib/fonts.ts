import { Martian_Mono, Fira_Sans } from "next/font/google";

export const martianMono = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

export const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});
