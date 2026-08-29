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
        // Fix for sizes with brackets that were missed due to \b
        lines[i] = lines[i].replace(/text-sm lg:text-\[15px\]/g, 'text-lg lg:text-xl');
        lines[i] = lines[i].replace(/text-base lg:text-\[17px\]/g, 'text-xl lg:text-2xl');
        lines[i] = lines[i].replace(/text-xs lg:text-sm/g, 'text-base lg:text-lg');
        lines[i] = lines[i].replace(/text-sm lg:text-base/g, 'text-lg lg:text-xl'); // just in case
      }
    }
    content = lines.join('\n');
    
    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
