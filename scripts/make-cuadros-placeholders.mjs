// Genera placeholders para la galería de CUADROS UNICOS.
// Se ejecuta una sola vez; cuando lleguen las fotos reales, se reemplazan
// los archivos en public/images/cuadros-unicos/ por las fotos de la vidriera.
//
// Uso: node scripts/make-cuadros-placeholders.mjs

import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sharp = require("../node_modules/.pnpm/sharp@0.34.4/node_modules/sharp");

const OUT_DIR = path.join(__dirname, "..", "public", "images", "cuadros-unicos");

// Paleta monocroma: tinta, grises y papel. Sin rojo: la pagina de la
// submarca es blanco y negro.
const BACKGROUNDS = [
  "#1c1c1c",
  "#262626",
  "#404040",
  "#2b2b2b",
  "#1a1a1a",
  "#333333",
];

// Formatos: vertical, horizontal y cuadrado, como los cuadros reales.
const SIZES = [
  { w: 900, h: 1200 },
  { w: 1200, h: 900 },
  { w: 1000, h: 1000 },
  { w: 800, h: 1200 },
  { w: 1200, h: 800 },
];

const COUNT = 12;

function svgPlaceholder(w, h, index) {
  const bg = BACKGROUNDS[index % BACKGROUNDS.length];
  const accent = index % 3 === 0 ? "#d8d5ce" : "#ffffff";
  const cx = w / 2;
  const cy = h / 2;
  const unit = Math.min(w, h);

  // Montante del cuadro
  const frameInset = unit * 0.12;
  const frameW = unit * 0.035;

  // Montañas / horizonte
  const horizon = h * 0.62;
  const peaks = [
    { x: w * 0.2, y: horizon - unit * 0.22 },
    { x: w * 0.42, y: horizon - unit * 0.1 },
    { x: w * 0.58, y: horizon - unit * 0.16 },
    { x: w * 0.78, y: horizon - unit * 0.05 },
  ];

  const peakPath = peaks
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ") + ` L ${w * 0.92} ${horizon} L ${w * 0.08} ${horizon} Z`;

  const sunR = unit * 0.09;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <g opacity="0.9">
    <circle cx="${cx - unit * 0.16}" cy="${cy - unit * 0.2}" r="${sunR}" fill="${accent}" opacity="0.85"/>
    <path d="${peakPath}" fill="#ffffff" fill-opacity="0.16"/>
    <path d="M ${w * 0.08} ${horizon} L ${w * 0.92} ${horizon}" stroke="#ffffff" stroke-opacity="0.35" stroke-width="${unit * 0.004}"/>
  </g>
  <rect x="${frameInset}" y="${frameInset}" width="${w - frameInset * 2}" height="${h - frameInset * 2}" fill="none" stroke="#ffffff" stroke-opacity="0.75" stroke-width="${frameW}"/>
  <rect x="${frameInset + frameW * 2}" y="${frameInset + frameW * 2}" width="${w - (frameInset + frameW * 2) * 2}" height="${h - (frameInset + frameW * 2) * 2}" fill="none" stroke="#ffffff" stroke-opacity="0.2" stroke-width="${frameW * 0.4}"/>
  <text x="${w / 2}" y="${h - unit * 0.045}" font-family="Arial, Helvetica, sans-serif" font-size="${unit * 0.045}" fill="#ffffff" fill-opacity="0.45" text-anchor="middle">CUADRO ${String(index + 1).padStart(2, "0")}</text>
</svg>`;
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (let i = 0; i < COUNT; i++) {
    const { w, h } = SIZES[i % SIZES.length];
    const name = `${i + 1}.webp`;
    const svg = svgPlaceholder(w, h, i);

    await sharp(Buffer.from(svg))
      .webp({ quality: 82 })
      .toFile(path.join(OUT_DIR, name));

    console.log(`  ${name}  ${w}x${h}`);
  }

  console.log(`\n${COUNT} placeholders generados en public/images/cuadros-unicos/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
