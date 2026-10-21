"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

function subscribeToHash(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange);
  return () => window.removeEventListener("hashchange", onStoreChange);
}

function getHash() {
  return window.location.hash;
}

// En el servidor no hay hash: se renderiza sin sección activa y se corrige
// en el cliente, así no hay diferencia de hidratación.
function getServerHash() {
  return "";
}

/**
 * Devuelve una función que dice si un link del menú principal es el de la
 * sección en la que está la persona.
 *
 * - Las rutas se comparan con `pathname` (`/servicios` matchea `/servicios/...`).
 * - Los links a un ancla de la misma página (`/#nosotros`) se activan cuando
 *   el hash del navegador coincide, así "NOSOTROS" no queda apagado cuando
 *   estás leyendo esa sección.
 */
export function useActiveNav() {
  const pathname = usePathname();
  const hash = useSyncExternalStore(subscribeToHash, getHash, getServerHash);

  return (href: string) => {
    const [path, anchor] = href.split("#");
    const base = path || pathname;

    if (anchor) return pathname === base && hash === `#${anchor}`;
    if (base === "/") return pathname === "/" && !hash;

    return pathname === base || pathname.startsWith(`${base}/`);
  };
}

/**
 * "dark" para los menús sobre fondo negro, "light" para el de fondo blanco.
 */
export type NavVariant = "dark" | "light";

const ACTIVE: Record<NavVariant, string> = {
  dark: "text-primary-light font-semibold",
  light: "text-primary font-semibold",
};

const INACTIVE: Record<NavVariant, string> = {
  dark: "text-white hover:text-white/70",
  light: "text-black hover:text-black/60",
};

export function NavItem({
  href,
  active,
  variant,
  className,
  children,
}: {
  href: string;
  active: boolean;
  variant: NavVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "transition-colors",
        active ? ACTIVE[variant] : INACTIVE[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
