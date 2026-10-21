import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { Frame } from "./frame";
import { siteConfig } from "@/lib/site-config";

export function CuadrosUnicosHero() {
  return (
    <section className="relative overflow-hidden bg-gray-tone-4 pt-16 pb-24 sm:pt-24 sm:pb-32">
      {/* Textura de pared: apenas perceptible, da escala a los cuadros. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10">
        {/* Texto */}
        <div className="order-2 lg:order-1">
          <p className="mb-5 flex items-center gap-3">
            <Image
              src={siteConfig.cuadrosUnicos.logo}
              alt=""
              width={52}
              height={37}
              className="h-auto w-[52px] shrink-0"
            />
            <span className="text-sm text-white/50">
              Submarca de{" "}
              <span className="text-white/80">Visual Design</span>
            </span>
          </p>

          <h2 className="font-dirtylane text-[64px] leading-[0.9] sm:text-[96px] lg:text-[120px]">
            Cuadros
            <br />
            <span className="text-primary-light">Únicos</span>
          </h2>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-white/70">
            {siteConfig.cuadrosUnicos.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#contacto-cuadros"
              className="inline-flex items-center gap-2 bg-primary px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Quiero el mío
            </Link>

            <a
              href={siteConfig.cuadrosUnicos.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 px-7 py-3.5 text-base font-medium text-white transition-colors hover:border-white/60 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Instagram className="size-5" aria-hidden />
              @cuadrosunicos
            </a>
          </div>
        </div>

        {/* Muro de cuadros */}
        <div className="order-1 lg:order-2">
          <div className="grid grid-cols-3 items-end gap-3 sm:gap-5">
            <Frame
              src="/images/cuadros-unicos/1.webp"
              alt="Cuadro personalizado en marco negro"
              material="negro"
              ratio="3 / 4"
              className="translate-y-8"
            />
            <Frame
              src="/images/cuadros-unicos/3.webp"
              alt="Cuadro en resina con marco de aluminio"
              material="aluminio"
              ratio="3 / 4"
              sheen
              glow
              priority
            />
            <Frame
              src="/images/cuadros-unicos/5.webp"
              alt="Cuadro con marco de madera"
              material="madera"
              ratio="3 / 4"
              className="translate-y-12"
            />
          </div>

          {/* Etiquetas de técnica, como fichas de sala. */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-white/40 sm:mt-12">
            <span>Resina</span>
            <span>LED</span>
            <span>Marcos a medida</span>
          </div>
        </div>
      </div>
    </section>
  );
}
