/**
 * Converts the site images in public/images to WebP at sensible display sizes.
 *
 * Source files (.jpg/.png) are left on disk untouched; each one gets a .webp
 * sibling. Re-running is safe — existing .webp files are overwritten.
 *
 * Usage: npm run optimize:images
 */
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const imagesDirectory = path.join(process.cwd(), "public", "images");

// Widest each image is ever displayed, doubled for high-density screens.
const maxWidthByFile = {
  "hero-1.jpg": 900,
  "lumenta_digital_project.png": 800,
  "belsize_project.png": 800,
  "Space_Asylum_project.png": 800,
  "skincredible_project.png": 800,
  "lumenta_redesign_project.png": 800,
  "SpaceX_Project.png": 800,
};

const DEFAULT_MAX_WIDTH = 800;
const WEBP_QUALITY = 80;

// Formats a byte count as a short human-readable string.
function formatSize(bytes) {
  return bytes >= 1024 * 1024
    ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    : `${Math.round(bytes / 1024)} KB`;
}

// Converts one source image to WebP and reports the size and dimensions.
async function convertToWebp(fileName) {
  const sourcePath = path.join(imagesDirectory, fileName);
  const outputPath = path.join(
    imagesDirectory,
    `${path.parse(fileName).name}.webp`
  );

  const maxWidth = maxWidthByFile[fileName] ?? DEFAULT_MAX_WIDTH;
  const sourceSize = (await stat(sourcePath)).size;

  const { width, height } = await sharp(sourcePath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath);

  const outputSize = (await stat(outputPath)).size;
  const saved = Math.round((1 - outputSize / sourceSize) * 100);

  console.log(
    `${fileName.padEnd(32)} ${formatSize(sourceSize).padStart(8)} -> ` +
      `${formatSize(outputSize).padStart(8)}  (${saved}% smaller, ${width}x${height})`
  );
}

// Converts every jpg/png in the images directory.
async function main() {
  const entries = await readdir(imagesDirectory);
  const sourceImages = entries.filter((name) => /\.(jpe?g|png)$/i.test(name));

  for (const fileName of sourceImages) {
    await convertToWebp(fileName);
  }
}

main();
