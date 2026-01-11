const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const targets = ['.next', 'node_modules/.cache'];

for (const target of targets) {
  const resolved = path.join(root, target);
  if (fs.existsSync(resolved)) {
    fs.rmSync(resolved, { recursive: true, force: true });
  }
}

console.log('Cleaned .next build artifacts and node_modules/.cache');
