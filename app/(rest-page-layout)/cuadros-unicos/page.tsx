import type { Metadata } from "next";
import { CuadrosUnicosHero } from "@/components/sections/cuadros-unicos/hero";
import { CuadrosUnicosTechniques } from "@/components/sections/cuadros-unicos/techniques";
import { CuadrosUnicosGallery } from "@/components/sections/cuadros-unicos/gallery";
import { CuadrosUnicosContact } from "@/components/sections/cuadros-unicos/contact";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cuadros Unicos | Cuadros Personalizados en Resina y LED",
  description:
    "Cuadros personalizados con resina, iluminación LED y marcos a medida. Elegí tu imagen y armamos la pieza.",
  alternates: {
    canonical: siteConfig.cuadrosUnicos.path,
  },
  openGraph: {
    title: "Cuadros Unicos | Cuadros Personalizados",
    description: siteConfig.cuadrosUnicos.description,
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
      <CuadrosUnicosContact />
    </main>
  );
}
