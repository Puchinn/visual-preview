// Posters de los reels de CUADROS UNICOS para la seccion "En movimiento"
// (components/sections/cuadros-unicos/reels.tsx).
//
// Los MP4 se usan TAL CUAL: son los reels editados, verticales 9:16, que viven
// en public/videos/cuadros-unicos/ como reel-01.mp4 ... reel-08.mp4. Pesan
// 10-31 MB; mas adelante se suben a un CDN y se cambia `src` en
// siteConfig.cuadrosUnicos.reels.
//
// Este script NO toca los videos: solo extrae un frame (1 s) de cada uno y lo
// guarda como poster WebP 9:16 en public/images/cuadros-unicos/reels/.
//
// Requiere ffmpeg y ffprobe en el PATH.
// Uso: node scripts/make-cuadros-reels.mjs

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const VIDEO_DIR = path.join(
  __dirname,
  "..",
  "public",
  "videos",
  "cuadros-unicos"
);
const POSTER_DIR = path.join(
  __dirname,
  "..",
  "public",
  "images",
  "cuadros-unicos",
  "reels"
);

// Escala cubriendo 720x1280 y recorta el centro. Los reels ya vienen en 9:16;
// el filtro normaliza los que tienen unos pocos pixeles de diferencia.
const FRAME =
  "scale=720:1280:force_original_aspect_ratio=increase:flags=lanczos,crop=720:1280";

function probe(file) {
  const json = JSON.parse(
    execFileSync(
      "ffprobe",
      [
        "-v",
        "quiet",
        "-print_format",
        "json",
        "-show_format",
        "-show_streams",
        file,
      ],
      { encoding: "utf8" }
    )
  );

  const video = json.streams.find((stream) => stream.codec_type === "video");

  return {
    duration: Number(json.format.duration),
    width: video.width,
    height: video.height,
  };
}

function formatDuration(seconds) {
  const total = Math.round(seconds);
  const minutes = Math.floor(total / 60);
  const rest = String(total % 60).padStart(2, "0");
  return `${String(minutes).padStart(2, "0")}:${rest}`;
}

fs.mkdirSync(POSTER_DIR, { recursive: true });

const reels = fs
  .readdirSync(VIDEO_DIR)
  .filter((name) => /^reel-\d{2}\.mp4$/.test(name))
  .sort();

const rows = [];

for (const name of reels) {
  const input = path.join(VIDEO_DIR, name);
  const out = name.replace(/\.mp4$/, "");
  const info = probe(input);

  execFileSync(
    "ffmpeg",
    [
      "-y",
      "-loglevel",
      "error",
      "-ss",
      "1",
      "-i",
      input,
      "-vf",
      FRAME,
      "-frames:v",
      "1",
      "-c:v",
      "libwebp",
      "-quality",
      "80",
      path.join(POSTER_DIR, `${out}.webp`),
    ],
    { stdio: "inherit" }
  );

  rows.push({
    reel: out,
    origen: `${info.width}x${info.height}`,
    duracion: formatDuration(info.duration),
  });
}

console.table(rows);
console.log(`\n${reels.length} posters en ${POSTER_DIR}`);
