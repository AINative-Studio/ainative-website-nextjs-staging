import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Global metadata for the AINative Studio website.
 * Page-specific metadata can override these defaults.
 */
export const metadata: Metadata = {
  title: {
    default: "AINative Studio - AI-Native Development Platform",
    template: "%s | AINative Studio",
  },
  description:
    "Build AI-powered applications with AINative Studio. Features AI Kit, Quantum Neural Networks, ZeroDB, and comprehensive developer tools.",
  keywords: [
    "AI development",
    "AI Kit",
    "Quantum Neural Networks",
    "QNN",
    "ZeroDB",
    "vector database",
    "AI tools",
    "developer platform",
  ],
  authors: [{ name: "AINative Studio" }],
  creator: "AINative Studio",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.ainative.studio"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ainative.studio",
    siteName: "AINative Studio",
    title: "AINative Studio - AI-Native Development Platform",
    description:
      "Build AI-powered applications with AINative Studio. Features AI Kit, Quantum Neural Networks, ZeroDB, and comprehensive developer tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AINative Studio - AI-Native Development Platform",
    description:
      "Build AI-powered applications with AINative Studio. Features AI Kit, Quantum Neural Networks, ZeroDB, and comprehensive developer tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Viewport configuration for responsive design.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

/**
 * Root layout component that wraps all pages.
 *
 * Includes:
 * - Global fonts (Geist Sans & Mono)
 * - Theme provider (light/dark mode)
 * - React Query provider
 * - Header and Footer
 * - Global styles
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Providers>
          <Header />
          <main className="pt-16 min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
