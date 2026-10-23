"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const REVEAL_AT = 0;
/** El aviso se retira solo: queda únicamente el botón. */
const PROMO_MS = 10000;

/**
 * CTA flotante de la submarca.
 *
 * Aparece recién después de pasar la portada: un aviso que se muestra una
 * sola vez por visita, se retira solo y se puede cerrar. No se persiste en
 * storage, así que al recargar la página vuelve a estar disponible. Los dos
 * enlaces son anchors comunes: la conversación se abre sólo si la persona
 * hace clic.
 */
export function CuadrosUnicosFloatingCta() {
  const [visible, setVisible] = useState(false);
  const [promo, setPromo] = useState(false);
  const promoShown = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY <= REVEAL_AT) return;

      setVisible(true);

      if (promoShown.current) return;
      promoShown.current = true;

      // En mobile el aviso tapa demasiado; queda sólo el botón.
      if (window.innerWidth < 640) return;
      setPromo(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    const frame = requestAnimationFrame(onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!promo) return;
    const timer = setTimeout(() => setPromo(false), PROMO_MS);
    return () => clearTimeout(timer);
  }, [promo]);

  const dismiss = () => setPromo(false);

  const waHref = `${siteConfig.links.whatsapp}?text=${encodeURIComponent(
    siteConfig.links.whatsappMessages.cuadros,
  )}`;

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-end px-5 pb-5 sm:px-6 sm:pb-6">
      <div className="flex flex-col items-end gap-3">
        {promo && (
          <aside
            aria-label="Consulta por WhatsApp"
            className="pointer-events-auto relative w-[min(17rem,calc(100vw-2.5rem))] border border-white/15 bg-[var(--cu-ink)] p-5 text-[var(--cu-paper)] shadow-[0_18px_44px_rgba(10,10,10,0.28)]"
          >
            <button
              type="button"
              onClick={dismiss}
              aria-label="Cerrar el aviso"
              className="absolute right-2 top-2 p-1.5 text-white/45 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <X className="size-4" aria-hidden />
            </button>

            <p className="font-cu-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
              Cuadros Únicos
            </p>
            <p className="mt-3 max-w-[13rem] font-cu-sans text-lg font-medium leading-snug tracking-[-0.02em]">
              ¿Querés un cuadro?
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              Contanos qué imagen tenés en mente y te pasamos materiales y
              medidas.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 border-b border-white/30 pb-1 font-cu-mono text-[10px] uppercase tracking-[0.16em] text-white transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Escribinos por WhatsApp
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          </aside>
        )}

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribinos por WhatsApp"
          className={cn(
            "pointer-events-auto grid size-14 place-items-center rounded-full bg-[var(--cu-ink)] text-[var(--cu-paper)]",
            "ring-1 ring-white/15 shadow-[0_12px_30px_rgba(10,10,10,0.3)] transition-colors hover:bg-[#292929]",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cu-ink)]",
          )}
        >
          <svg
            className="size-7"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
