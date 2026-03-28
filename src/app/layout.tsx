import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fyhingenieros.cl'),
  title: { default: "FYH Ingenieros — Ciberseguridad OT para Infraestructura Crítica", template: "%s | FYH Ingenieros" },
  description: "Consultores especializados en ciberseguridad OT e infraestructura crítica. Certificados en Dragos, Nozomi, IEC 62443, Ley 21663, NERC CIP. Partners DHD Care y Wallix OT.",
  keywords: ["ciberseguridad OT Chile", "Ley 21663", "NERC CIP", "NIS2", "ISO 27001", "Dragos", "Nozomi", "infraestructura crítica", "SCADA"],
  authors: [{ name: "FYH Ingenieros", url: "https://fyhingenieros.cl" }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: "website", locale: "es_CL", url: "https://fyhingenieros.cl", siteName: "FYH Ingenieros",
    title: "FYH Ingenieros — Ciberseguridad OT", description: "Protegemos infraestructura crítica con ciberseguridad OT de clase mundial.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "FYH Ingenieros" }]
  },
  twitter: { card: "summary_large_image", title: "FYH Ingenieros — Ciberseguridad OT", images: { url: "/og-image.jpg", alt: "FYH Ingenieros" } },
  alternates: { canonical: "https://fyhingenieros.cl" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Organization", "name": "FYH Ingenieros",
          "url": "https://fyhingenieros.cl",
          "contactPoint": { "@type": "ContactPoint", "telephone": "+56-9-6211-6017", "contactType": "customer service", "email": "contacto@fyhingenieros.cl" },
        })}} />
      </head>
      <body className={`${plusJakartaSans.variable} ${ibmPlexMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
