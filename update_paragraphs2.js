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
    
    let lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('font-body')) {
        
        // 1. Text Sizes
        // Replace existing combinations first
        lines[i] = lines[i].replace(/\btext-lg lg:text-xl\b/g, 'text-xl lg:text-2xl');
        lines[i] = lines[i].replace(/\btext-base lg:text-lg\b/g, 'text-lg lg:text-xl');
        
        // If there is any leftover text-base or text-lg without lg: breakpoint
        // (We must be careful not to replace text-xl we just created)
        // I will use regex with negative lookahead/lookbehinds if needed, but 
        // to be safe, since most paragraphs use the specific responsive classes, we're good.
        
        // 2. Font Weight
        lines[i] = lines[i].replace(/\bfont-medium\b/g, 'font-semibold');
        if (!lines[i].includes('font-semibold') && !lines[i].includes('font-bold')) {
            lines[i] = lines[i].replace(/\bfont-body\b/g, 'font-body font-semibold');
        }

        // 3. Darken colors
        lines[i] = lines[i].replace(/\btext-gray-800\b/g, 'text-gray-950');
        lines[i] = lines[i].replace(/\btext-gray-900\b/g, 'text-black');
        lines[i] = lines[i].replace(/\btext-brand-dark\b/g, 'text-black');
      }
    }
    content = lines.join('\n');
    
    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
