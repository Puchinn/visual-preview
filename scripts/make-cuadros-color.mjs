// Versiones EN COLOR de las piezas de CUADROS UNICOS para la vidriera
// (components/sections/cuadros-unicos/piece-media.tsx).
//
// Los archivos de public/images/cuadros-unicos/piezas/ están en gris; estos
// salen de los originales de recursos/ con el mismo recorte y tamaño, así el
// halo y la foto coinciden pixel a pixel.
//
// Uso: node scripts/make-cuadros-color.mjs

import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sharp = require("../node_modules/.pnpm/sharp@0.34.4/node_modules/sharp");

const SRC_DIR = path.join(__dirname, "..", "recursos");
const OUT_DIR = path.join(
  __dirname,
  "..",
  "public",
  "images",
  "cuadros-unicos",
  "piezas-color"
);

// Mismo mapeo que usa la vidriera (ver CLAUDE.md).
const FILES = {
  "acdc.webp": "62705",
  "acdc-2.webp": "62704",
  "sonic.webp": "62737",
  "messi-10.webp": "62755",
  "messi-legend.webp": "62761",
  "jack-daniels-1.webp": "62772",
  "jack-daniels-2.webp": "62773",
};

// Mismo tamaño que las versiones en gris de piezas/, para que el barrido no
// se corra ni un pixel.
const WIDTH = 1200;
const HEIGHT = 1594;

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const [out, id] of Object.entries(FILES)) {
    const input = path.join(SRC_DIR, `${id}.jpg`);

    await sharp(input)
      .rotate()
      .resize(WIDTH, HEIGHT, { fit: "cover", position: "centre" })
      .webp({ quality: 84, effort: 5 })
      .toFile(path.join(OUT_DIR, out));

    console.log(`  ${id}.jpg  ->  piezas-color/${out}`);
  }

  console.log(`\n${Object.keys(FILES).length} piezas en color en ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
