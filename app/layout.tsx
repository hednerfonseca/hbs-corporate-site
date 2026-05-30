import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://horonho.com"),
  title: "HORONHO BUSINESS SOLUTION, SARL",
  description: "Strategic consulting, institutional affairs, digital transformation, artificial intelligence and business development in Guinea-Bissau and Africa.",
  keywords: [
    "Guiné-Bissau",
    "Business Consulting Guinea-Bissau",
    "Strategic Consulting Africa",
    "Institutional Affairs",
    "Digital Transformation",
    "Artificial Intelligence Africa",
    "HORONHO BUSINESS SOLUTION",
    "MATU GARANDI"
  ],
  openGraph: {
    title: "HORONHO BUSINESS SOLUTION, SARL",
    description: "Strategic consulting, business development, institutional affairs, digital transformation, AI solutions and knowledge platforms.",
    type: "website",
    images: ["/images/horonho-hero.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
