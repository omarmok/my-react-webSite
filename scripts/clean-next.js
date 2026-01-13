const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

// Add all common cache/artifact folders that can cause bundler mismatch
const targets = [".next", ".turbo", ".vercel", "node_modules/.cache"];

for (const target of targets) {
  const resolved = path.join(root, target);
  try {
    if (fs.existsSync(resolved)) {
      fs.rmSync(resolved, { recursive: true, force: true });
      console.log(`Removed: ${target}`);
    } else {
      console.log(`Skip (not found): ${target}`);
    }
  } catch (err) {
    console.error(`Failed to remove: ${target}`, err);
  }
}

console.log("✅ Clean complete: removed Next/Turbo/Vercel artifacts & caches");
