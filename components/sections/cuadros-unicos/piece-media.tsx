import Image from "next/image";
import styles from "./piece-media.module.css";

/**
 * Pieza de la vidriera: la foto a color y, detrás, una copia chica y
 * desenfocada que derrama la luz del LED sobre el negro.
 *
 * La versión en gris sigue en `piezas/` para el hero y el banner; esta usa
 * `piezas-color/`.
 */
export function PieceMedia({
  src,
  alt,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[3/4] w-full">
      {/* Halo: se pide a 384px de ancho y el blur lo estira. */}
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes="25vw"
        className={styles.glow}
      />

      <div className={styles.led}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={styles.image}
        />
      </div>
    </div>
  );
}
