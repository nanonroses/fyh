import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fyhingenieros.cl'),
  title: {
    default: "FYH Ingenieros 2.0 - Ciberseguridad OT · ROI 340% Garantizado · Chile",
    template: "%s | FYH Ingenieros 2.0"
  },
  description: "Protege tu infraestructura crítica con expertos certificados. ROI 340% garantizado en 6 meses. Partners oficiales Dragos, Nozomi, DHD Care. Auditoría gratuita $8,500 USD. Únicos en Chile con Ley 21663, NERC CIP, NIS2 completo.",
  keywords: [
    "ciberseguridad OT Chile", "Ley 21663 compliance", "NERC CIP certificación", "NIS2 auditoria",
    "ISO 27001 implementacion", "Dragos Security partner", "Nozomi Networks Chile", "DHD Care soporte",
    "infraestructura critica proteccion", "SCADA security", "IT-OT convergencia", "ROI ciberseguridad",
    "automatizacion RPA", "inteligencia artificial empresarial", "compliance normativo", "auditoria gratuita"
  ],
  authors: [{ name: "FYH Ingenieros", url: "https://fyhingenieros.cl" }],
  creator: "FYH Ingenieros 2.0",
  publisher: "FYH Ingenieros",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://fyhingenieros.cl",
    siteName: "FYH Ingenieros 2.0 - Ciberseguridad OT",
    title: "FYH Ingenieros 2.0 - Líderes en Ciberseguridad OT con ROI 340% Garantizado",
    description: "Protege tu empresa antes del próximo ataque. Somos los únicos en Chile con partnerships oficiales Dragos, Nozomi, DHD Care. Auditoría gratuita $8,500 USD. Resultados comprobados en Banco Central, Minera Los Andes, Enel.",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "FYH Ingenieros 2.0 - Ciberseguridad OT y Compliance Normativo",
      type: "image/jpeg"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@FYHIngenieros",
    creator: "@FYHIngenieros",
    title: "FYH Ingenieros 2.0 - Ciberseguridad OT con ROI 340% Garantizado",
    description: "Protege tu infraestructura crítica con expertos certificados. Auditoría gratuita $8,500 USD. Partners oficiales Dragos, Nozomi, DHD Care. Casos de éxito: Banco Central, Enel, Minera Los Andes.",
    images: {
      url: "/og-image.jpg",
      alt: "FYH Ingenieros 2.0 - Expertos en Ciberseguridad OT"
    }
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://fyhingenieros.cl",
    languages: {
      'es-CL': 'https://fyhingenieros.cl',
      'es': 'https://fyhingenieros.cl/es',
      'en': 'https://fyhingenieros.cl/en'
    }
  },
  category: "technology"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.emailjs.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FYH Ingenieros 2.0",
              "description": "Especialistas en ciberseguridad OT, compliance normativo y automatización inteligente",
              "url": "https://fyhingenieros.cl",
              "logo": "https://fyhingenieros.cl/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+56-9-6211-6017",
                "contactType": "customer service",
                "email": "contacto@fyhingenieros.cl",
                "availableLanguage": ["Spanish", "English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CL",
                "addressRegion": "Región Metropolitana"
              },
              "sameAs": [
                "https://linkedin.com/company/fyh-ingenieros"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "Chile"
              },
              "serviceType": "Cybersecurity OT Services",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Cybersecurity Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Ciberseguridad OT",
                      "description": "Protección integral para infraestructura crítica"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Compliance Normativo",
                      "description": "Cumplimiento Ley 21663, NERC CIP, NIS2, ISO 27001"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${spaceGrotesk.variable} font-sans antialiased bg-light-ghost text-dark-void overflow-x-hidden`}
      >
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
