import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const title = "Umair Khan | Premium WordPress & Web Developer";
const description =
  "Premium WordPress, Elementor, Divi, Shopify, Webflow & Squarespace websites. Speed optimization, bug fixing, Figma & AI to WordPress, LMS websites, GoHighLevel funnels and automations. 200+ websites delivered.";

export const viewport: Viewport = { themeColor: "#070708" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | Umair Khan" },
  description,
  keywords: [
    "WordPress developer", "hire WordPress developer", "Elementor expert", "Divi developer", "WPBakery",
    "WordPress speed optimization", "fix WordPress bugs", "Figma to WordPress", "AI website development",
    "Shopify developer", "Webflow developer", "Squarespace designer", "WooCommerce store", "LMS website",
    "GoHighLevel funnels", "GHL landing pages", "Make.com automation", "n8n automation", "AI chatbot",
    "custom WordPress plugin", "Umair Khan",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: site.url, siteName: site.name, title, description, locale: "en_US" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
