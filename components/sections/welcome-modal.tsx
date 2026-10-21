"use client";

import Link from "next/link";
import { ArrowRight, Frame, Printer } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useIntent } from "@/components/providers/intent-provider";
import { siteConfig } from "@/lib/site-config";

/**
 * Modal de bienvenida. Pregunta por qué llega la persona para poder derivarla
 * al camino correcto (gráfica o cuadros) y pre-cargar el mensaje de WhatsApp.
 *
 * Se muestra una sola vez por navegador: la elección se guarda en
 * localStorage (ver IntentProvider).
 */
export function WelcomeModal() {
  const { needsChoice, setIntent, dismissChoice } = useIntent();

  const choose = (intent: "grafica" | "cuadros") => {
    setIntent(intent);
  };

  return (
    <Dialog
      open={needsChoice}
      onOpenChange={(next) => {
        // Cerrar con Escape o click afuera equivale a "solo estaba mirando".
        if (!next) dismissChoice();
      }}
    >
      <DialogContent
        showCloseButton={false}
        className="max-w-2xl gap-0 overflow-hidden border border-white/10 bg-gray-tone-4 p-0 text-white sm:rounded-none"
      >
        <div className="border-b border-white/10 px-6 py-5 sm:px-8">
          <DialogTitle className="font-dirtylane text-3xl leading-none sm:text-4xl">
            ¿Qué te trae por acá?
          </DialogTitle>
          <DialogDescription className="mt-3 text-sm text-white/60">
            Te preguntamos para mostrarte lo que necesitás y no hacerte perder
            tiempo.
          </DialogDescription>
        </div>

        <div className="grid gap-px bg-white/10 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => choose("grafica")}
            className="group flex flex-col items-start gap-3 bg-gray-tone-4 px-6 py-8 text-left transition-colors hover:bg-gray-tone-3 focus-visible:bg-gray-tone-3 focus-visible:outline-none sm:px-8"
          >
            <Printer
              className="size-7 text-primary-light transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden
            />
            <span className="font-dirtylane text-2xl leading-none">
              Gráfica
            </span>
            <span className="text-sm leading-relaxed text-white/60">
              Cartelería, vinilos, banners, montados, corpóreos y gráfica
              vehicular.
            </span>
            <span className="mt-1 flex items-center gap-2 text-sm font-medium text-primary-light">
              Ver servicios
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </span>
          </button>

          <button
            type="button"
            onClick={() => choose("cuadros")}
            className="group flex flex-col items-start gap-3 bg-gray-tone-4 px-6 py-8 text-left transition-colors hover:bg-gray-tone-3 focus-visible:bg-gray-tone-3 focus-visible:outline-none sm:px-8"
          >
            <Frame
              className="size-7 text-primary-light transition-transform duration-300 group-hover:-translate-y-0.5"
              aria-hidden
            />
            <span className="font-dirtylane text-2xl leading-none">
              Un cuadro
            </span>
            <span className="text-sm leading-relaxed text-white/60">
              {siteConfig.cuadrosUnicos.description}
            </span>
            <span className="mt-1 flex items-center gap-2 text-sm font-medium text-primary-light">
              Conocer {siteConfig.cuadrosUnicos.name}
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </span>
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 px-6 py-4 sm:px-8">
          <button
            type="button"
            onClick={dismissChoice}
            className="text-sm text-white/40 underline-offset-4 transition-colors hover:text-white/70 hover:underline focus-visible:outline-none focus-visible:underline"
          >
            Solo estaba mirando
          </button>
          <Link
            href="/contacto"
            onClick={dismissChoice}
            className="text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:underline"
          >
            Ver contacto
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
