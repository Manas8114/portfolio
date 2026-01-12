import type { Metadata } from "next";
import { Noto_Serif_JP, Inter } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manas | Creative Technologist & Builder",
  description:
    "Portfolio of Manas - AI researcher, full-stack architect, and relentless builder. Exploring uncertainty quantification, intent-driven systems, and explainable AI.",
  keywords: [
    "AI",
    "Machine Learning",
    "Full Stack Developer",
    "Research",
    "Portfolio",
    "Manas",
  ],
  authors: [{ name: "Manas" }],
  openGraph: {
    title: "Manas | Creative Technologist & Builder",
    description:
      "AI researcher, full-stack architect, and relentless builder.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${notoSerifJP.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
