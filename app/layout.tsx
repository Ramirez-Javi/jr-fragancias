import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sansFont = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jrfragancias.com"),
  title: "JR Fragancias | Perfumes y decants que van contigo",
  description:
    "Descubre perfumes y decants a tu ritmo, compara opciones y encuentra una fragancia que de verdad vaya contigo.",
  openGraph: {
    title: "JR Fragancias | Perfumes y decants que van contigo",
    description:
      "Descubre perfumes y decants a tu ritmo, compara opciones y encuentra una fragancia que de verdad vaya contigo.",
    url: "https://www.jrfragancias.com",
    siteName: "JR Fragancias",
    locale: "es_PY",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "JR Fragancias | Perfumes y decants que van contigo",
    description:
      "Descubre perfumes y decants a tu ritmo, compara opciones y encuentra una fragancia que de verdad vaya contigo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${displayFont.variable} ${sansFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
