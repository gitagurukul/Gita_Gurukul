const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // We will reduce the lg: size while keeping the base (mobile) size large
    let lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('font-body')) {
        // Decrease only the lg: parts
        lines[i] = lines[i].replace(/\btext-xl lg:text-2xl\b/g, 'text-xl lg:text-lg');
        lines[i] = lines[i].replace(/\btext-lg lg:text-xl\b/g, 'text-lg lg:text-base');
        lines[i] = lines[i].replace(/\btext-base lg:text-lg\b/g, 'text-base lg:text-sm');
      }
    }
    content = lines.join('\n');
    
    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
