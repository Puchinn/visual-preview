import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const dirtyLane = localFont({
  src: "/fonts/Dirtylane.otf",
  variable: "--font-dirtylane",
});

import { IntroProvider } from "@/components/providers/intro-provider";
import { IntentProvider } from "@/components/providers/intent-provider";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s`,
  },
  description: siteConfig.description,
  robots: "index, follow",
  alternates: {
    canonical: "./",
  },
  keywords: [
    "Imprenta",
    "Cartelería",
    "Vinilos",
    "Gráfica vehicular",
    "Soluciones visuales",
    "Entrega rápida",
    "Presupuesto en 24h",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    type: "website",
    locale: "es",
    siteName: siteConfig.name,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${archivo.className} ${dirtyLane.variable} bg-black`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRWRL79K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <IntroProvider>
          <IntentProvider>{children}</IntentProvider>
        </IntroProvider>
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-L31BQ35J30" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L31BQ35J30');
        `}
      </Script>
      <GoogleTagManager gtmId="GTM-NRWRL79K" />
    </html>
  );
}
