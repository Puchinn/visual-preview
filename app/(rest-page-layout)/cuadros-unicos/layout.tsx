/**
 * Envoltura de la submarca CUADROS UNICOS.
 *
 * La clase .cu-sub-brand redefine los tokens de color y de tipografia
 * (ver app/globals.css). Como las utilidades de Tailwind 4 compilan a
 * referencias a esas variables, todo el contenido de la pagina hereda la
 * estetica nueva sin tocar una sola clase.
 *
 * El header y el footer propios tambien llevan la clase, porque viven en
 * el layout padre (fuera de este contenedor) y necesitan los mismos tokens.
 */
export default function CuadrosUnicosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="cu-sub-brand font-cu-ui bg-[var(--cu-paper)] text-[var(--cu-ink)]">
      {children}
    </div>
  );
}
