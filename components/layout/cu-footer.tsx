import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Footer propio de CUADROS UNICOS.
 *
 * Cierra la pagina en tinta, en continuidad con la vidriera, y reemplaza al
 * footer de Visual Design. La marca usa el logo real de CUADROS UNICOS en
 * blanco y la pertenencia al sitio principal queda en una linea al pie.
 */
export function CuFooter() {
  const waHref = `${siteConfig.links.whatsapp}?text=${encodeURIComponent(
    siteConfig.links.whatsappMessages.cuadros,
  )}`;

  return (
    <footer
      id="main-footer"
      className="cu-sub-brand bg-[var(--cu-ink)] font-cu-sans text-[var(--cu-paper)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="font-cu-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
              Piezas personalizadas — CABA
            </p>
            <Link
              href={siteConfig.cuadrosUnicos.path}
              aria-label="Cuadros Únicos — inicio"
              className="mt-5 block w-fit focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Image
                src={siteConfig.cuadrosUnicos.logo}
                alt="Cuadros Únicos"
                width={592}
                height={517}
                className="h-auto w-[220px] sm:w-[280px]"
              />
            </Link>
          </div>

          <nav
            aria-label="Secciones de Cuadros Únicos"
            className="lg:col-span-3"
          >
            <p className="font-cu-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
              Secciones
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="#vidriera"
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Piezas
                </a>
              </li>
              <li>
                <a
                  href="#tecnicas"
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Técnicas
                </a>
              </li>
              <li>
                <a
                  href="#contacto-cuadros"
                  className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="font-cu-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
              Contacto
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  WhatsApp
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.cuadrosUnicos.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                >
                  @cuadrosunicos_visual
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </a>
              </li>
              <li>
                <a
                  href="tel:+5491143829100"
                  className="transition-colors hover:text-white"
                >
                  (011) 4382-9100
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-cu-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
            © {new Date().getFullYear()} Cuadros Únicos
          </p>
          <div className="font-cu-mono text-[10px] uppercase tracking-[0.14em] text-white/35 sm:text-right">
            <p className="text-[11px] normal-case leading-relaxed tracking-[0.02em] text-white/50">
              Piezas personalizadas en vinilo UV, resina e iluminación LED.
            </p>
            <p className="mt-2">
              Una marca de{" "}
              <Link
                href="/"
                className="text-white/65 underline underline-offset-4 transition-colors hover:text-white"
              >
                Visual Design
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
