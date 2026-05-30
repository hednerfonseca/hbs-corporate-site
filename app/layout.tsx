import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://horonho.com"),
  title: "HORONHO BUSINESS SOLUTION, SARL",
  description: "Empresa guineense de solucoes empresariais, comunicacao digital, comercio, plataformas digitais e projectos culturais.",
  openGraph: {
    title: "HORONHO BUSINESS SOLUTION, SARL",
    description: "Solucoes empresariais, comunicacao digital, comercio, plataformas e cultura.",
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
