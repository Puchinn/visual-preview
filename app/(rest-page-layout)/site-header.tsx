"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";
import { cn } from "@/lib/utils";

/**
 * Cabecera del sitio. En /cuadros-unicos la barra toma la estetica de la
 * submarca (fondo tinta, acento ambar) en lugar de la barra blanca de
 * Visual Design, para que la pagina no tenga un corte de color al entrar.
 *
 * La clase .cu-sub-brand sobre el header hace que sus acentos --primary y
 * --primary-light-- pasen a ambar solo en esa ruta. El navbar y el footer
 * quedan fuera del wrapper de la pagina, asi que esto es lo que los conecta.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const isSubBrand = pathname === "/cuadros-unicos";

  return (
    <header
      className={cn(
        "w-full sticky top-0 z-50",
        isSubBrand
          ? "cu-sub-brand bg-gray-tone-4 text-white border-b border-white/10"
          : "text-black bg-white shadow"
      )}
    >
      <Navbar variant={isSubBrand ? "dark" : "light"} />
    </header>
  );
}
