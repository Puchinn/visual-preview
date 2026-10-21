import fs from "fs";
import path from "path";

export function getGalleryImages(folder: string) {
  const folderPath = path.join(process.cwd(), "public", `/images/${folder}`);

  const files = fs.readdirSync(folderPath);

  const images = files
    .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    // readdirSync entrega orden alfabetico (1, 10, 11, 12, 2...). El
    // orden natural mantiene la numeracion de las laminas.
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  return images.map((name) => `/images/${folder}/${name}`);
}
