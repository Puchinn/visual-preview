import { Navbar } from "./navbar";

/**
 * Cabecera original del sitio.
 *
 * La misma barra, el mismo menú y el mismo logo de Visual Design en todas
 * las rutas, incluida /cuadros-unicos. La posición se resuelve por CSS:
 * en la página de la submarca el header deja de ser sticky para que el
 * logo, que sobresale por debajo de la barra, no tape las piezas al
 * scrollear (ver cuadros-unicos/layout.tsx).
 */
export function SiteHeader() {
  return (
    <header className="site-header w-full sticky top-0 z-50 bg-white text-black shadow">
      <Navbar variant="light" />
    </header>
  );
}
