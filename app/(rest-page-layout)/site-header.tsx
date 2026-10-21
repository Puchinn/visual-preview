import { Navbar } from "./navbar";

/**
 * Cabecera original del sitio.
 *
 * La misma barra y el mismo menú en todas las rutas. En /cuadros-unicos
 * el CSS de la ruta cambia el logo por el de la submarca, pasa la barra a
 * blanco y negro y la deja no sticky para que el logo, que sobresale por
 * debajo de la barra, no tape las piezas al scrollear (ver
 * cuadros-unicos/layout.tsx).
 */
export function SiteHeader() {
  return (
    <header className="site-header w-full sticky top-0 z-50 bg-white text-black shadow">
      <Navbar variant="light" />
    </header>
  );
}
