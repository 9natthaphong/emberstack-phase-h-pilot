import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emberstack-phase-h-pilot.vercel.app"),
  title: {
    default: "Emberstack — Pressure Becomes Proof",
    template: "%s — Emberstack",
  },
  description: "A cinematic browser pilot that turns visible preparation, pressure, texture, and heat into premium pickup proof.",
  applicationName: "Emberstack",
  keywords: ["Emberstack", "cinematic web", "GSAP", "ScrollTrigger", "food commercial"],
  authors: [{ name: "Emberstack Phase H Pilot" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Emberstack",
    title: "Emberstack — Pressure Becomes Proof",
    description: "Raw craft becomes visible proof through a registered A/B/C cinematic sequence.",
    images: [{
      url: "/media/anchors/premium-pickup-c.webp",
      width: 1672,
      height: 941,
      alt: "Emberstack burger settled into its premium pickup frame.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emberstack — Pressure Becomes Proof",
    description: "A complete GSAP + ScrollTrigger external browser pilot.",
    images: ["/media/anchors/premium-pickup-c.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a08",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
