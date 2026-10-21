import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("../node_modules/.pnpm/sharp@0.34.4/node_modules/sharp");

const dir = "recursos";
const files = fs
  .readdirSync(dir)
  .filter((f) => /^627\d+\.jpg$/i.test(f))
  .sort();

const vertical = [];
for (const file of files) {
  const meta = await sharp(path.join(dir, file)).metadata();
  if (meta.height > meta.width) vertical.push({ file, w: meta.width, h: meta.height });
}

const cols = 6;
const cellW = 220;
const cellH = 300;
const imgW = 200;
const imgH = 267;
const rows = Math.ceil(vertical.length / cols);

const cells = [];
for (let i = 0; i < vertical.length; i++) {
  const { file } = vertical[i];
  const x = (i % cols) * cellW + 10;
  const y = Math.floor(i / cols) * cellH + 8;

  const img = await sharp(path.join(dir, file))
    .resize(imgW, imgH, { fit: "cover" })
    .grayscale()
    .toBuffer();

  const label = Buffer.from(
    `<svg width="${imgW}" height="24" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="16" font-family="Arial" font-size="13" fill="#111">${file.replace(".jpg", "")}</text>
    </svg>`
  );

  cells.push({ input: img, left: x, top: y });
  cells.push({ input: label, left: x, top: y + imgH + 4 });
}

await sharp({
  create: {
    width: cols * cellW,
    height: rows * cellH,
    channels: 3,
    background: "#ffffff",
  },
})
  .composite(cells)
  .jpeg({ quality: 82 })
  .toFile(".shots/contact-vertical.jpg");

console.log(`${vertical.length} verticales -> .shots/contact-vertical.jpg`);
