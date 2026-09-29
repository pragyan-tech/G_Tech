/**
 * Renders the PLACEHOLDER favicon set and Open Graph image from their SVG
 * sources using sharp. Run with `node scripts/generate-icons.mjs` after
 * editing public/favicon.svg or scripts/og-image.svg.
 *
 * Outputs (all in public/):
 *   apple-touch-icon.png (180), favicon-96x96.png (96),
 *   favicon.ico (16/32/48, PNG-encoded entries), og-image.png (1200×630)
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = (f) => path.join(root, "public", f);

const favicon = await readFile(pub("favicon.svg"));
const png = (size) =>
  sharp(favicon, { density: 72 * (size / 512) * 4 }).resize(size, size).png().toBuffer();

await writeFile(pub("apple-touch-icon.png"), await png(180));
await writeFile(pub("favicon-96x96.png"), await png(96));

// ICO container with PNG-encoded images (supported by all modern browsers).
const icoSizes = [16, 32, 48];
const images = await Promise.all(icoSizes.map(png));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(images.length, 4);
let offset = 6 + 16 * images.length;
const entries = images.map((img, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(icoSizes[i] % 256, 0); // width
  e.writeUInt8(icoSizes[i] % 256, 1); // height
  e.writeUInt8(0, 2); // palette
  e.writeUInt8(0, 3); // reserved
  e.writeUInt16LE(1, 4); // colour planes
  e.writeUInt16LE(32, 6); // bits per pixel
  e.writeUInt32LE(img.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += img.length;
  return e;
});
await writeFile(pub("favicon.ico"), Buffer.concat([header, ...entries, ...images]));

const og = await readFile(path.join(root, "scripts", "og-image.svg"));
await writeFile(pub("og-image.png"), await sharp(og).png().toBuffer());

console.log("Generated favicon PNGs, favicon.ico and og-image.png in public/");
