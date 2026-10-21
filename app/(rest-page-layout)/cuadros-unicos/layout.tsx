/**
 * Envoltura de la submarca CUADROS UNICOS.
 *
 * La clase .cu-sub-brand redefine los tokens de color y de tipografia
 * (ver app/globals.css). Como las utilidades de Tailwind 4 compilan a
 * referencias a esas variables, todo el contenido de la pagina hereda el
 * sistema blanco y negro sin tocar una sola clase.
 *
 * El header original vive fuera de este contenedor, pero se reestiliza por
 * CSS cuando la pagina esta montada. Asi la barra sigue siendo la misma en
 * todo el sitio y solo aca muestra el logo de CUADROS UNICOS, en blanco y
 * negro y sin el rojo de Visual Design. El footer propio tambien lleva la
 * clase, porque vive en el layout padre.
 *
 * El <style> es una excepcion deliberada: Tailwind descarta la regla :has
 * al compilar. Ademas de sacar el sticky para que el logo no tape las
 * piezas, define la variante monocroma de la barra y del menu mobile (que
 * Radix porta fuera del header). Se inyecta unicamente en esta ruta.
 */
export default function CuadrosUnicosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body:has(.cu-sub-brand) .site-header {
              position: relative;
              background: #fff;
              border-bottom: 1px solid #e4e4e4;
              box-shadow: none;
              --primary: #0a0a0a;
              --primary-light: #0a0a0a;
            }
            body:has(.cu-sub-brand) .site-navbar {
              font-family: var(--font-geist-sans), sans-serif;
            }
            body:has(.cu-sub-brand) .site-header .site-nav-logo-link-vd,
            body:has(.cu-sub-brand) .site-header .site-nav-logo-vd {
              display: none;
            }
            body:has(.cu-sub-brand) .site-header .site-nav-logo-cu {
              display: block;
            }
            @media (min-width: 1024px) {
              body:has(.cu-sub-brand) .site-header .site-nav-logo-link-cu {
                display: block;
              }
            }
            body:has(.cu-sub-brand) .site-nav-mobile-logo-cu {
              margin-inline: auto;
            }
            body:has(.cu-sub-brand) .site-header .site-nav-cta {
              background-color: #0a0a0a;
              border-radius: 0;
              color: #fff;
              font-weight: 500;
            }
            body:has(.cu-sub-brand) .site-header .site-nav-cta:hover {
              background-color: #292929;
            }
            body:has(.cu-sub-brand) .site-header .site-navbar [aria-current="page"] {
              text-decoration-line: underline;
              text-decoration-thickness: 1px;
              text-underline-offset: 0.55rem;
            }
            body:has(.cu-sub-brand) .site-header .site-nav-mobile-bar {
              box-shadow: none;
            }
            body:has(.cu-sub-brand) .site-header [data-slot="navigation-menu-viewport"] {
              border-radius: 0;
              border-color: #e4e4e4;
              box-shadow: 0 16px 40px rgba(10, 10, 10, 0.08);
            }
            body:has(.cu-sub-brand) .site-nav-sheet {
              --primary: #ffffff;
              --primary-light: #ffffff;
              background: #0a0a0a;
              border-left-color: #242424;
              color: #fff;
              font-family: var(--font-geist-sans), sans-serif;
            }
            body:has(.cu-sub-brand) .site-nav-sheet [aria-current="page"] {
              text-decoration-line: underline;
              text-decoration-thickness: 1px;
              text-underline-offset: 0.45rem;
            }
            body:has(.cu-sub-brand) .site-nav-sheet .site-nav-phone {
              background-color: #fff;
              border-radius: 0;
              color: #0a0a0a;
            }
            body:has(.cu-sub-brand) .site-nav-sheet .site-nav-phone:hover {
              background-color: #e4e4e4;
              color: #0a0a0a;
            }
          `,
        }}
      />
      <div className="cu-sub-brand bg-[var(--cu-paper)] font-cu-sans text-[var(--cu-ink)] antialiased selection:bg-[var(--cu-ink)] selection:text-[var(--cu-paper)]">
        {children}
      </div>
    </>
  );
}
