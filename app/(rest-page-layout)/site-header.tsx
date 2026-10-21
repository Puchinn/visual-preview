"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";
import { CuNavbar } from "@/components/layout/cu-navbar";
import { cn } from "@/lib/utils";

/**
 * Cabecera del sitio.
 *
 * En /cuadros-unicos la cabecera es de la submarca: papel, filete y el
 * wordmark de CUADROS UNICOS, sin el logo ni el menu de Visual Design.
 * El resto del sitio conserva la barra blanca de siempre.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const isSubBrand = pathname === "/cuadros-unicos";

  if (isSubBrand) {
    return (
      <header className="cu-sub-brand sticky top-0 z-50 w-full border-b border-[var(--cu-rule)] bg-[var(--cu-paper)] font-cu-ui">
        <CuNavbar />
      </header>
    );
  }

  return (
    <header className={cn("w-full sticky top-0 z-50 text-black bg-white shadow")}>
      <Navbar variant="light" />
    </header>
  );
}
