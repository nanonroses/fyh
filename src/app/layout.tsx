import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fyhingenieros.cl'),
  title: "F&Y Ingenieros - Automatización RPA, IA y Ciberseguridad",
  description: "Transformamos tu negocio con automatización inteligente RPA, Inteligencia Artificial y ciberseguridad de clase mundial. Especialistas en proyectos B2B.",
  keywords: ["RPA", "automatización", "ciberseguridad", "inteligencia artificial", "SAP", "bots", "Chile"],
  authors: [{ name: "F&Y Ingenieros" }],
  openGraph: {
    title: "F&Y Ingenieros - Automatización RPA, IA y Ciberseguridad",
    description: "Transformamos tu negocio con automatización inteligente RPA, Inteligencia Artificial y ciberseguridad de clase mundial.",
    url: "https://fyhingenieros.cl",
    siteName: "F&Y Ingenieros",
    type: "website",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "F&Y Ingenieros - Automatización y Ciberseguridad"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "F&Y Ingenieros - Automatización RPA, IA y Ciberseguridad",
    description: "Transformamos tu negocio con automatización inteligente RPA, Inteligencia Artificial y ciberseguridad de clase mundial.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
