import fs from "fs";
import path from "path";

export function getGalleryImages(folder: string) {
  const folderPath = path.join(process.cwd(), "public", `/images/${folder}`);

  const files = fs.readdirSync(folderPath);

  const images = files.filter((file) =>
    /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
  );

  return images.map((name) => `/images/${folder}/${name}`);
}
