"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site-config";

/**
 * Header propio de CUADROS UNICOS.
 *
 * La submarca no comparte la navegacion de Visual Design: aca el unico
 * logo es el wordmark de CUADROS UNICOS y los links son anclas a las
 * secciones de esta pagina. El sitio principal sigue viviendo en el
 * footer, como linea de credito.
 */
const NAV = [
  { label: "Piezas", href: "#vidriera" },
  { label: "Técnicas", href: "#tecnicas" },
  { label: "Contacto", href: "#contacto-cuadros" },
];

const waHref = `${siteConfig.links.whatsapp}?text=${encodeURIComponent(
  siteConfig.links.whatsappMessages.cuadros
)}`;

export function CuNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-6 lg:h-24 lg:px-10">
      <Link
        href={siteConfig.cuadrosUnicos.path}
        aria-label="Cuadros Unicos — inicio"
        className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cu-ink)]"
      >
        <Image
          src={siteConfig.cuadrosUnicos.logoOscuro}
          alt="Cuadros Unicos"
          width={591}
          height={516}
          priority
          className="h-12 w-auto lg:h-16"
        />
      </Link>

      {/* Desktop */}
      <nav aria-label="Secciones de Cuadros Unicos" className="hidden items-center gap-10 md:flex">
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm tracking-[0.02em] text-[var(--cu-ink-soft)] transition-colors hover:text-[var(--cu-ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cu-ink)]"
          >
            {item.label}
          </a>
        ))}

        <a
          href="#contacto-cuadros"
          className="inline-flex items-center bg-[var(--cu-ink)] px-6 py-3 text-sm font-medium text-[var(--cu-paper)] transition-colors hover:bg-[#2a2a2a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--cu-ink)]"
        >
          Pedir el mío
        </a>
      </nav>

      {/* Mobile */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="p-2 text-[var(--cu-ink)] md:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="size-6" aria-hidden />
          </button>
        </SheetTrigger>

        {/* El portal del Sheet vive fuera del header, asi que necesita
            la clase de scope para resolver los tokens de la submarca. */}
        <SheetContent
          side="right"
          className="cu-sub-brand w-full gap-0 border-0 bg-[var(--cu-paper)] p-0 font-cu-ui text-[var(--cu-ink)] sm:max-w-md"
        >
          <SheetTitle className="sr-only">Menú de Cuadros Unicos</SheetTitle>

          <div className="flex h-20 items-center justify-between border-b border-[var(--cu-rule)] px-6">
            <Image
              src={siteConfig.cuadrosUnicos.logoOscuro}
              alt="Cuadros Unicos"
              width={591}
              height={516}
              className="h-10 w-auto"
            />
          </div>

          <nav aria-label="Secciones de Cuadros Unicos" className="flex flex-col px-6 py-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--cu-rule)] py-5 font-cu-display text-4xl text-[var(--cu-ink)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-4 px-6 pb-10">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center bg-[var(--cu-ink)] px-6 py-4 text-base font-medium text-[var(--cu-paper)]"
            >
              Consultar por WhatsApp
            </a>
            <p className="text-sm text-[var(--cu-ink-soft)]">
              Santiago del Estero 330, CABA
              <br />
              (011) 4382-9100
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
