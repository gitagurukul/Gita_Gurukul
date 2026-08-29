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
    
    // Split into lines
    let lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('font-body')) {
        // Increase text sizes
        lines[i] = lines[i].replace(/\btext-base lg:text-lg\b/g, 'text-lg lg:text-xl');
        lines[i] = lines[i].replace(/\btext-sm lg:text-base\b/g, 'text-base lg:text-lg');
        lines[i] = lines[i].replace(/\btext-sm lg:text-\[15px\]\b/g, 'text-base lg:text-lg');
        lines[i] = lines[i].replace(/\btext-base lg:text-\[17px\]\b/g, 'text-lg lg:text-xl');
        
        // Ensure font-medium is present if not already
        if (!lines[i].includes('font-medium') && !lines[i].includes('font-bold') && !lines[i].includes('font-semibold')) {
          lines[i] = lines[i].replace(/\bfont-body\b/g, 'font-body font-medium');
        }

        // Darken text slightly
        lines[i] = lines[i].replace(/\btext-gray-600\b/g, 'text-gray-800');
        lines[i] = lines[i].replace(/\btext-gray-700\b/g, 'text-gray-900');
        lines[i] = lines[i].replace(/\btext-brand-tan\/80\b/g, 'text-brand-tan');
      }
    }
    content = lines.join('\n');
    
    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
