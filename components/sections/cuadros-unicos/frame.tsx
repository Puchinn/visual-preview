import Image from "next/image";
import { cn } from "@/lib/utils";

export type FrameMaterial = "negro" | "aluminio" | "madera";

const MATERIALS: Record<
  FrameMaterial,
  { moulding: string; highlight: string; depth: string }
> = {
  negro: {
    moulding: "#2b2b2b",
    highlight: "rgba(255,255,255,0.10)",
    depth: "rgba(0,0,0,0.75)",
  },
  aluminio: {
    moulding: "#8e9094",
    highlight: "rgba(255,255,255,0.42)",
    depth: "rgba(0,0,0,0.55)",
  },
  madera: {
    moulding: "#6b4a2f",
    highlight: "rgba(255,214,170,0.18)",
    depth: "rgba(0,0,0,0.65)",
  },
};

const MATS = {
  blanco: "#f4f1ea",
  negro: "#141414",
  arena: "#e3d9c8",
} as const;

export type MatColor = keyof typeof MATS;

/**
 * Un cuadro colgado. El motivo es literal: montante, paspartú, imagen y
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
          style={{ background: "rgba(255,232,190,0.22)" }}
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
          boxShadow: "0 1px 0 rgba(255,255,255,0.16) inset",
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
