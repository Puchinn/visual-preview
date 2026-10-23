"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useIntro } from "@/components/providers/intro-provider";
import { hasSeenCuTour, markCuTourSeen, resetCuTour } from "@/lib/cu-tour";
import { siteConfig } from "@/lib/site-config";

const WAIT_AFTER_INTRO = 600;
const AUTO_HIDE_MS = 8000;
const HOLE_PAD = 8;
const CALLOUT_W = 320;
const EDGE = 16;

type Hole = { top: number; left: number; width: number; height: number };

/**
 * Foco sobre el link de CUADROS UNICOS del navbar (sólo desktop y sólo home).
 *
 * Aparece cuando termina la animación de entrada: oscurece el resto, deja el
 * link en un recorte limpio y muestra un aviso debajo. Se cierra solo a los
 * 8 s con click, Escape o scroll. Se muestra una vez por navegador.
 *
 * Para probarlo: `?cuTour=1` lo fuerza y `?cuTour=reset` borra la marca.
 * Si la idea no sirve, alcanza con borrar este archivo, la línea en
 * `app/page.tsx` y el `data-cu-tour-link` del navbar.
 */
export function CuTour() {
  const { hasPlayed } = useIntro();
  const [hole, setHole] = useState<Hole | null>(null);
  const closed = useRef(false);

  const dismiss = useCallback(() => {
    if (closed.current) return;
    closed.current = true;
    setHole(null);
  }, []);

  // Disparo: después de la intro, en desktop, arriba de todo y sólo una vez.
  useEffect(() => {
    if (!hasPlayed) return;

    const params = new URLSearchParams(window.location.search);
    const forced = params.get("cuTour") === "1";

    if (params.get("cuTour") === "reset") {
      resetCuTour();
    }

    if (!forced && hasSeenCuTour()) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    if (window.scrollY > 8) return;

    const timer = window.setTimeout(() => {
      if (window.scrollY > 8) return;

      const el = document.querySelector<HTMLElement>("[data-cu-tour-link]");
      if (!el) return;

      const rect = el.getBoundingClientRect();
      if (rect.width === 0) return;

      setHole({
        top: rect.top - HOLE_PAD,
        left: rect.left - HOLE_PAD,
        width: rect.width + HOLE_PAD * 2,
        height: rect.height + HOLE_PAD * 2,
      });
      markCuTourSeen();
    }, WAIT_AFTER_INTRO);

    return () => window.clearTimeout(timer);
  }, [hasPlayed]);

  // Cierre: 8 s, Escape, scroll o resize.
  useEffect(() => {
    if (!hole) return;

    const timer = window.setTimeout(dismiss, AUTO_HIDE_MS);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    const onScroll = () => dismiss();

    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [hole, dismiss]);

  if (!hole) return null;

  const viewport = window.innerWidth;
  const center = hole.left + hole.width / 2;
  const calloutLeft = Math.min(
    Math.max(center - CALLOUT_W / 2, EDGE),
    viewport - CALLOUT_W - EDGE,
  );
  const calloutTop = hole.top + hole.height + 14;

  return (
    <div className="fixed inset-0 z-[60]">
      {/*
        Cuatro paneles invisibles alrededor del recorte: oscurecen el resto y
        cierran al hacer click, pero dejan el link del menú clickeable.
      */}
      <div
        aria-hidden
        className="absolute left-0 top-0 w-full"
        style={{ height: Math.max(hole.top, 0) }}
        onClick={dismiss}
      />
      <div
        aria-hidden
        className="absolute left-0 w-full"
        style={{ top: hole.top + hole.height, bottom: 0 }}
        onClick={dismiss}
      />
      <div
        aria-hidden
        className="absolute left-0"
        style={{ top: hole.top, height: hole.height, width: Math.max(hole.left, 0) }}
        onClick={dismiss}
      />
      <div
        aria-hidden
        className="absolute right-0"
        style={{ top: hole.top, height: hole.height, width: Math.max(viewport - hole.left - hole.width, 0) }}
        onClick={dismiss}
      />

      {/* Recorte: el box-shadow pinta el resto de la pantalla. */}
      <div
        aria-hidden
        className="pointer-events-none absolute rounded-lg shadow-[0_0_0_100vmax_rgba(10,10,10,0.74)] ring-1 ring-white/50"
        style={hole}
      />

      {/* Aviso */}
      <div
        role="status"
        className="absolute rounded-sm bg-white p-5 text-gray-tone-4 shadow-[0_20px_50px_rgba(0,0,0,0.28)]"
        style={{ top: calloutTop, left: calloutLeft, width: CALLOUT_W }}
      >
        <span
          aria-hidden
          className="absolute -top-1.5 size-3 rotate-45 bg-white"
          style={{ left: center - calloutLeft - 6 }}
        />

        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
            Nuevo
          </span>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Cerrar"
            className="-mr-1 -mt-1 p-1 text-gray-tone-3 transition-colors hover:text-gray-tone-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-tone-4"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>

        <p className="mt-3 text-base font-semibold">
          Cuadros Únicos ya está en el menú
        </p>
        <p className="mt-1 text-sm leading-relaxed text-gray-600">
          Piezas a medida en vinilo UV, resina y LED.
        </p>

        <Link
          href={siteConfig.cuadrosUnicos.path}
          onClick={dismiss}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Ver Cuadros Únicos
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
