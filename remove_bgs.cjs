const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove bg classes
  content = content.replace(/bg-primary-lighter|bg-primary|bg-section-warm|bg-section-cool|bg-gradient-mesh/g, '');
  
  // Remove blob lines
  content = content.replace(/\s*\{\/\* Background blobs \*\/\}\s*/g, '');
  content = content.replace(/\s*<div className="bg-blob-[^"]+"[^>]*\/>\s*/g, '');
  content = content.replace(/\s*<div className="bg-blob-[^"]+"\s+top-\[[^\]]+\]\s+left-\[[^\]]+\][^>]*\/>\s*/g, '');

  fs.writeFileSync(filePath, content);
}
console.log('Background cleanup complete.');
