/**
 * Batch-convert PNG and large JPG images to WebP using sharp.
 * Run: node scripts/convert-to-webp.mjs
 *
 * - Converts all .png files (except tiny ones <5KB) to .webp
 * - Converts .jpg/.jpeg files >100KB to .webp
 * - Skips files that already have a .webp counterpart
 * - Preserves originals (delete manually after verifying)
 */
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ASSETS_DIR = path.resolve("src/assets");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const files = await walk(ASSETS_DIR);
  let converted = 0;
  let savedBytes = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const base = file.slice(0, -ext.length);
    const webpPath = base + ".webp";

    // Skip non-image files, existing webps, gifs (animated), and tiny files
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

    const info = await stat(file);

    // Skip tiny files (< 5KB for png, < 100KB for jpg)
    if (ext === ".png" && info.size < 5 * 1024) continue;
    if ((ext === ".jpg" || ext === ".jpeg") && info.size < 100 * 1024) continue;

    // Skip if webp already exists
    try {
      await stat(webpPath);
      console.log(`  SKIP (exists): ${path.relative(ASSETS_DIR, webpPath)}`);
      continue;
    } catch {
      // doesn't exist, proceed
    }

    try {
      const result = await sharp(file)
        .webp({ quality: 80, effort: 4 })
        .toFile(webpPath);

      const savings = info.size - result.size;
      savedBytes += savings;
      converted++;
      console.log(
        `  ✓ ${path.relative(ASSETS_DIR, file)} → .webp  ` +
          `(${(info.size / 1024).toFixed(0)}KB → ${(result.size / 1024).toFixed(0)}KB, ` +
          `saved ${(savings / 1024).toFixed(0)}KB)`
      );
    } catch (err) {
      console.error(`  ✗ ${path.relative(ASSETS_DIR, file)}: ${err.message}`);
    }
  }

  console.log(
    `\nDone! Converted ${converted} files, saved ${(savedBytes / 1024 / 1024).toFixed(1)}MB total.`
  );
}

main();
