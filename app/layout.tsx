import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  metadataBase: new URL("https://anmol-portfolio-1.vercel.app"),
  title: {
    default: "Anmol Singh Paman — Portfolio",
    template: "%s — Anmol Singh Paman",
  },
  description: "Data & Sports Analytics — turning messy data into smart decisions.",
  openGraph: {
    title: "Anmol Singh Paman — Portfolio",
    description: "Data & Sports Analytics — turning messy data into smart decisions.",
    url: "/",
    siteName: "Anmol Portfolio",
    images: [{ url: "/Users/anmol/Downloads/image.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anmol Singh Paman — Portfolio",
    description: "Data & Sports Analytics — turning messy data into smart decisions.",
    images: ["/og.png"],
  },
} as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script
        defer
        data-domain="anmol-portfolio-1.vercel.app"
        src="https://plausible.io/js/script.js"
      />
      <body className="flex min-h-dvh flex-col bg-white text-zinc-900 antialiased">
        <SiteHeader />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

