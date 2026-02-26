import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIRY — From AI Speculation to Agentic Operations",
  description:
    "AIRY delivers two definitive pathways to agentic transformation: Enterprise-grade agent governance and small business agentic acceleration.",
  metadataBase: new URL("https://airytransformation.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg-base text-text-primary antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
