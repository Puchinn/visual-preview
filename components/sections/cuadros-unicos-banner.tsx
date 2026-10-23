import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const { cuadrosUnicos } = siteConfig;

const WHATSAPP_HREF = `${siteConfig.links.whatsapp}?text=${encodeURIComponent(
  siteConfig.links.whatsappMessages.cuadros,
)}`;

/**
 * Bloque de CUADROS UNICOS en la home, con la estetica de la submarca: tinta
 * #0a0a0a, Geist y el wordmark blanco a la izquierda como sello. Deriva a
 * /cuadros-unicos, donde viven las piezas, las tecnicas y los reels.
 */
export function CuadrosUnicosBanner() {
  const { homeBanner } = cuadrosUnicos;

  return (
    <section
      aria-labelledby="cuadros-unicos-home"
      className="bg-[#0a0a0a] py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-center md:gap-8 lg:gap-10">
          {/* Sello de la submarca */}
          <div className="md:col-span-4">
            <Image
              src={cuadrosUnicos.logo}
              alt="Cuadros Únicos"
              width={592}
              height={517}
              className="h-auto w-[132px] sm:w-[168px] md:w-[176px] lg:w-[220px]"
            />
          </div>

          {/* Mensaje */}
          <div className="md:col-span-7 md:col-start-6">
            <h2
              id="cuadros-unicos-home"
              className="max-w-[15ch] text-balance font-cu-sans text-[clamp(2.25rem,4.4vw,4rem)] font-medium leading-[0.94] tracking-[-0.05em]"
            >
              {homeBanner.title}
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
              {homeBanner.blurb}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5 sm:gap-7">
              <Link
                href={cuadrosUnicos.path}
                className="inline-flex whitespace-nowrap items-center gap-3 bg-white px-6 py-4 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {homeBanner.cta}
                <ArrowRight className="size-4" aria-hidden />
              </Link>

              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex whitespace-nowrap items-center gap-2 border-b border-white/20 pb-1 text-sm font-medium text-white/60 transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <MessageCircle className="size-4" aria-hidden />
                {homeBanner.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
