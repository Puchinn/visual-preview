import Link from "next/link";
import Image from "next/image";
import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

/**
 * Footer propio de CUADROS UNICOS.
 *
 * Cierra la pagina en tinta, en continuidad con la seccion de contacto,
 * y reemplaza al footer de Visual Design. La pertenencia al sitio
 * principal queda en una sola linea discreta al pie.
 */
export function CuFooter() {
  const waHref = `${siteConfig.links.whatsapp}?text=${encodeURIComponent(
    siteConfig.links.whatsappMessages.cuadros
  )}`;

  return (
    <footer
      id="main-footer"
      className="cu-sub-brand bg-[var(--cu-ink)] font-cu-ui text-[var(--cu-paper)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-12 md:flex-row md:items-end">
          <Link
            href={siteConfig.cuadrosUnicos.path}
            aria-label="Cuadros Unicos — inicio"
            className="w-fit focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cu-paper)]"
          >
            <Image
              src={siteConfig.cuadrosUnicos.logo}
              alt="Cuadros Unicos"
              width={591}
              height={516}
              className="h-20 w-auto"
            />
          </Link>

          <nav aria-label="Secciones de Cuadros Unicos" className="flex flex-wrap gap-x-8 gap-y-3">
            <a href="#vidriera" className="text-sm text-white/70 transition-colors hover:text-white">
              Piezas
            </a>
            <a href="#tecnicas" className="text-sm text-white/70 transition-colors hover:text-white">
              Técnicas
            </a>
            <a
              href="#contacto-cuadros"
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              Contacto
            </a>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-b border-white/15 py-8 text-sm text-white/60 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-3">
          <span>Santiago del Estero 330, CABA</span>
          <a
            href="tel:+5491143829100"
            className="transition-colors hover:text-white"
          >
            (011) 4382-9100
          </a>
          <a
            href={siteConfig.links.mail}
            className="transition-colors hover:text-white"
          >
            info@visuald.com.ar
          </a>
          <span>Lunes a viernes, 9 a 18 hs</span>
        </div>

        <div className="flex flex-col justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.cuadrosUnicos.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <Instagram className="size-4" aria-hidden />
              @cuadrosunicos
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp
            </a>
          </div>

          <p className="text-xs leading-relaxed text-white/50">
            © {new Date().getFullYear()} Cuadros Únicos · Una marca de{" "}
            <Link href="/" className="underline underline-offset-4 hover:text-white">
              Visual Design
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
