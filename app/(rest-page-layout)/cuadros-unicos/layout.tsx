/**
 * Envoltura de la submarca CUADROS UNICOS.
 *
 * La clase .cu-sub-brand redefine los tokens de color y de tipografia
 * (ver app/globals.css). Como las utilidades de Tailwind 4 compilan a
 * referencias a esas variables, todo el contenido de la pagina hereda la
 * estetica nueva sin tocar una sola clase.
 *
 * El navbar y el footer viven en el layout padre, fuera de este contenedor:
 * la navegacion mantiene la identidad de Visual Design.
 */
export default function CuadrosUnicosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="cu-sub-brand font-cu-ui">{children}</div>;
}
