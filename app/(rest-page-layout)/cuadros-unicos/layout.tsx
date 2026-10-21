/**
 * Envoltura de la submarca CUADROS UNICOS.
 *
 * La clase .cu-sub-brand redefine los tokens de color y de tipografia
 * (ver app/globals.css). Como las utilidades de Tailwind 4 compilan a
 * referencias a esas variables, todo el contenido de la pagina hereda el
 * sistema blanco y negro sin tocar una sola clase.
 *
 * El header es el original de Visual Design y vive fuera de este contenedor.
 * El footer propio tambien lleva la clase, porque vive en el layout padre.
 *
 * El <style> es una excepcion deliberada: Tailwind descarta la regla :has
 * al compilar, y necesitamos que el header original deje de ser sticky solo
 * en esta ruta para que el logo de Visual Design no tape las piezas. La
 * regla se inyecta unicamente en /cuadros-unicos.
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
          __html:
            "body:has(.cu-sub-brand) .site-header{position:relative}",
        }}
      />
      <div className="cu-sub-brand bg-[var(--cu-paper)] font-cu-sans text-[var(--cu-ink)] antialiased selection:bg-[var(--cu-ink)] selection:text-[var(--cu-paper)]">
        {children}
      </div>
    </>
  );
}
