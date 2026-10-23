import type { Metadata } from "next";
import { CuadrosUnicosHero } from "@/components/sections/cuadros-unicos/hero";
import { CuadrosUnicosTechniques } from "@/components/sections/cuadros-unicos/techniques";
import { CuadrosUnicosGallery } from "@/components/sections/cuadros-unicos/gallery";
import { CuadrosUnicosReels } from "@/components/sections/cuadros-unicos/reels";
import { CuadrosUnicosContact } from "@/components/sections/cuadros-unicos/contact";
import { CuadrosUnicosFloatingCta } from "@/components/sections/cuadros-unicos/floating-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cuadros Unicos | Cuadros Personalizados en Resina y LED",
  description:
    "Cuadros personalizados con impresión en vinilo UV, resina e iluminación LED. Elegí tu imagen y armamos la pieza a medida.",
  alternates: {
    canonical: siteConfig.cuadrosUnicos.path,
  },
  openGraph: {
    title: "Cuadros Unicos | Cuadros Personalizados",
    description: siteConfig.cuadrosUnicos.pageDescription,
    url: `${siteConfig.url}${siteConfig.cuadrosUnicos.path}`,
  },
};

export default function CuadrosUnicosPage() {
  return (
    <main className="bg-[var(--cu-paper)] text-[var(--cu-ink)]">
      <CuadrosUnicosHero />
      <CuadrosUnicosTechniques />
      <CuadrosUnicosGallery
        pieces={siteConfig.cuadrosUnicos.pieces}
        instagram={siteConfig.cuadrosUnicos.instagram}
      />
      <CuadrosUnicosReels
        reels={siteConfig.cuadrosUnicos.reels}
        instagram={siteConfig.cuadrosUnicos.instagram}
      />
      <CuadrosUnicosContact />
      <CuadrosUnicosFloatingCta />
    </main>
  );
}
