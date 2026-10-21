import Image from "next/image";
import { cn } from "@/lib/utils";

export type FrameMaterial = "negro" | "aluminio" | "madera";

/**
 * Los colores del marco salen de variables CSS (definidas en :root y
 * sobreescritas por la submarca en .cu-sub-brand) para que el mismo
 * componente sirva a las dos esteticas sin cambiar de codigo.
 */
const MATERIALS: Record<
  FrameMaterial,
  { moulding: string; highlight: string; depth: string }
> = {
  negro: {
    moulding: "var(--frame-negro)",
    highlight: "var(--frame-hl-negro)",
    depth: "var(--frame-depth)",
  },
  aluminio: {
    moulding: "var(--frame-aluminio)",
    highlight: "var(--frame-hl-aluminio)",
    depth: "var(--frame-depth)",
  },
  madera: {
    moulding: "var(--frame-madera)",
    highlight: "var(--frame-hl-madera)",
    depth: "var(--frame-depth)",
  },
};

const MATS = {
  blanco: "var(--frame-mat-blanco)",
  negro: "var(--frame-mat-negro)",
  arena: "var(--frame-mat-arena)",
} as const;

export type MatColor = keyof typeof MATS;

/**
 * Un cuadro colgado. El motivo es literal: montante, paspartu, imagen y
 * sombra proyectada sobre la pared.
 */
export function Frame({
  src,
  alt,
  material = "negro",
  mat = "blanco",
  ratio = "3 / 4",
  className,
  matWidth = "7%",
  sheen = false,
  glow = false,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: {
  src: string;
  alt: string;
  material?: FrameMaterial;
  mat?: MatColor;
  ratio?: string;
  className?: string;
  /** Ancho del paspartú, como porcentaje del ancho del cuadro. */
  matWidth?: string;
  /** Reflejo diagonal, para la técnica en resina. */
  sheen?: boolean;
  /** Luz LED que rebota sobre la pared. */
  glow?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  const m = MATERIALS[material];

  return (
    <div
      className={cn("relative", className)}
      style={{ aspectRatio: ratio }}
    >
      {/* Luz que rebota del cuadro sobre la pared (técnica LED). */}
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-x-8 -bottom-6 -z-10 h-1/2 rounded-[50%] blur-2xl"
          style={{ background: "var(--frame-glow)" }}
        />
      )}

      {/* Montante del marco. */}
      <div
        className="absolute inset-0"
        style={{
          background: m.moulding,
          boxShadow: `0 18px 38px -12px ${m.depth}, 0 3px 0 ${m.highlight} inset`,
        }}
      />

      {/* Bisel: el canto interno del montante. */}
      <div
        className="absolute"
        style={{
          inset: "2.5%",
          border: "1px solid rgba(0,0,0,0.35)",
          boxShadow: `0 1px 0 var(--frame-bisel) inset`,
        }}
      />

      {/* Paspartú. */}
      <div
        className="absolute overflow-hidden"
        style={{
          inset: "7%",
          background: MATS[mat],
          boxShadow: "0 2px 6px rgba(0,0,0,0.35) inset",
        }}
      >
        {/* Vano donde va la imagen. */}
        <div
          className="absolute overflow-hidden"
          style={{ inset: matWidth }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />

          {/* Reflejo de la resina. */}
          {sheen && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg, rgba(255,255,255,0) 34%, rgba(255,255,255,0.26) 47%, rgba(255,255,255,0) 58%)",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
