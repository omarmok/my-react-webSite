#!/usr/bin/env node
/**
 * Optimize hero image: Convert PNG to WebP and AVIF formats
 * This script creates multiple formats with different qualities for better performance
 */

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const inputPath = path.join(__dirname, "../public/images/omar.png");
const outputDir = path.join(__dirname, "../public/images");

async function optimizeImage() {
  try {
    console.log("Starting image optimization...");
    console.log(`Input: ${inputPath}`);

    // Read original image
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    console.log(
      `Original dimensions: ${metadata.width}x${metadata.height}, Format: ${metadata.format}`,
    );

    // Convert to WebP with different qualities
    console.log("Converting to WebP...");
    await image
      .clone()
      .webp({ quality: 75, effort: 6 })
      .toFile(path.join(outputDir, "omar.webp"));
    console.log("✓ Created omar.webp (quality: 75)");

    // Convert to AVIF (best compression, modern browsers)
    console.log("Converting to AVIF...");
    await image
      .clone()
      .avif({ quality: 70, effort: 9 })
      .toFile(path.join(outputDir, "omar.avif"));
    console.log("✓ Created omar.avif (quality: 70)");

    // Keep original PNG but optimize it (save to temp first to avoid same file error)
    console.log("Optimizing original PNG...");
    const tempPath = path.join(outputDir, "omar-temp.png");
    await image
      .clone()
      .png({ compressionLevel: 9, progressive: true })
      .toFile(tempPath);
    // Replace original with optimized version
    fs.renameSync(tempPath, path.join(outputDir, "omar.png"));
    console.log("✓ Optimized omar.png");

    // Check file sizes
    const files = ["omar.png", "omar.webp", "omar.avif"];
    console.log("\n📊 File sizes:");
    files.forEach((file) => {
      const filepath = path.join(outputDir, file);
      if (fs.existsSync(filepath)) {
        const stats = fs.statSync(filepath);
        const sizeKB = (stats.size / 1024).toFixed(1);
        console.log(`   ${file}: ${sizeKB} KB`);
      }
    });

    console.log("\n✅ Image optimization complete!");
    console.log("\nNext steps:");
    console.log('1. Update index.js to use <picture> with source elements');
    console.log("2. Add WebP and AVIF sources before PNG fallback");
  } catch (error) {
    console.error("Error optimizing image:", error);
    process.exit(1);
  }
}

optimizeImage();
