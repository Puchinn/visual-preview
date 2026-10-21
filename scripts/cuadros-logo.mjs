// Prepara el logo real de CUADROS UNICOS para la web.
//
// El cliente lo entregó en recursos/ como un SVG de 880x880 con el wordmark
// centrado y mucho aire alrededor. Para la web interesa solo el lockup, asi
// que se recorta el viewBox al dibujo real y se generan las dos variantes
// monocromas que se necesitan (fondo oscuro y fondo claro).
//
// Uso: node scripts/cuadros-logo.mjs

import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sharp = require("../node_modules/.pnpm/sharp@0.34.4/node_modules/sharp");

const SRC_DIR = path.join(__dirname, "..", "recursos");
const OUT_DIR = path.join(__dirname, "..", "public", "cuadros-unicos");

const NEGRO = "perfiles cuadros unicos-04.svg";
const BLANCO = "perfiles cuadros unicos-03.svg";

/** Encuentra el recuadro que ocupa realmente el dibujo, en unidades del SVG. */
async function artworkBounds(svg) {
  const { data, info } = await sharp(Buffer.from(svg), { density: 300 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let minX = info.width;
  let minY = info.height;
  let maxX = -1;
  let maxY = -1;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * 4 + 3] > 8) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (maxX < 0) throw new Error("El SVG no tiene contenido visible.");

  // El lienzo original es de 880.72 x 880.72; el render es de mayor resolucion.
  const scale = 880.72 / info.width;
  const pad = 2;

  return {
    x: Math.max(0, minX * scale - pad),
    y: Math.max(0, minY * scale - pad),
    width: (maxX - minX + 1) * scale + pad * 2,
    height: (maxY - minY + 1) * scale + pad * 2,
  };
}

/** Reescribe el SVG con el viewBox recortado y el color pedido. */
function buildSvg(original, bounds, { fill, white }) {
  const body = original
    .replace(/^[\s\S]*?<svg[^>]*>/, "")
    .replace(/<\/svg>\s*$/, "")
    .trim();

  const viewBox = `${bounds.x.toFixed(2)} ${bounds.y.toFixed(2)} ${bounds.width.toFixed(2)} ${bounds.height.toFixed(2)}`;
  const w = Math.round(bounds.width);
  const h = Math.round(bounds.height);

  // La version blanca trae el relleno en una clase CSS; la negra no la trae y
  // usa el fill por defecto del SVG. Se normalizan las dos a fill explicito.
  const shapes = white
    ? body.replace(/class="cls-1"/g, "").replace(/<defs>[\s\S]*?<\/defs>/, "")
    : body.replace(/class="cls-1"/g, "").replace(/<defs>[\s\S]*?<\/defs>/, "");

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${w}" height="${h}" fill="${fill}" role="img" aria-label="Cuadros Unicos">
  <title>Cuadros Unicos</title>
  <g fill="${fill}">
  ${shapes}
  </g>
</svg>
`;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const negroSrc = fs.readFileSync(path.join(SRC_DIR, NEGRO), "utf8");
  const blancoSrc = fs.readFileSync(path.join(SRC_DIR, BLANCO), "utf8");

  const bounds = await artworkBounds(negroSrc);
  console.log(
    `  dibujo real: x=${bounds.x.toFixed(1)} y=${bounds.y.toFixed(1)} ` +
      `${bounds.width.toFixed(1)}x${bounds.height.toFixed(1)}`
  );

  const outNegro = buildSvg(negroSrc, bounds, { fill: "#030304", white: false });
  const outBlanco = buildSvg(blancoSrc, bounds, { fill: "#ffffff", white: true });

  fs.writeFileSync(
    path.join(OUT_DIR, "logo-cuadros-unicos-negro.svg"),
    outNegro,
    "utf8"
  );
  fs.writeFileSync(
    path.join(OUT_DIR, "logo-cuadros-unicos-blanco.svg"),
    outBlanco,
    "utf8"
  );

  console.log("\n  logo-cuadros-unicos-negro.svg   (fondo claro)");
  console.log("  logo-cuadros-unicos-blanco.svg  (fondo oscuro)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
