import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Umair Khan — WordPress Developer & Automation Expert",
  description:
    "WordPress, Elementor, WooCommerce, Shopify & Webflow developer. GoHighLevel funnels, Make.com & n8n automations and AI chatbots.",
  openGraph: {
    title: "Umair Khan — WordPress Developer & Automation Expert",
    description: "High-end websites, funnels and automations that grow your business.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
