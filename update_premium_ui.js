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
    
    // Replace hardcoded bg-white with transparent or cream if needed.
    // We already changed body to #FDFBF7. If some divs use bg-white explicitly,
    // they will look out of place if the intent is a solid cream site.
    // Let's replace bg-white with bg-[#FDFBF7] inside container divs.
    content = content.replace(/\bbg-white\b/g, 'bg-[#FDFBF7]');

    // Replace flat button hover with premium hover
    content = content.replace(/hover:bg-opacity-90 hover:shadow-lg transition-all/g, 'hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(226,154,44,0.3)] transition-all duration-300');
    content = content.replace(/hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-xl transition-all/g, 'hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(226,154,44,0.3)] transition-all duration-300');
    content = content.replace(/hover:bg-opacity-90 transition-all/g, 'hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(226,154,44,0.3)] transition-all duration-300');
    
    // Replace rounded-sm and shadow-md with elegant ones
    // Be careful with replacing all rounded-sm, maybe just shadow-md rounded-sm -> rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]
    content = content.replace(/rounded-sm overflow-hidden shadow-md/g, 'rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-brand-primary/10');
    content = content.replace(/shadow-sm border border-brand-border\/10 rounded-sm/g, 'shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-primary/20 rounded-2xl');
    content = content.replace(/rounded-lg shadow-sm border border-brand-tan\/20/g, 'rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-primary/20');
    content = content.replace(/rounded-lg flex/g, 'rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-primary/10 flex');
    content = content.replace(/border-brand-tan\/30 rounded-lg flex/g, 'border-brand-primary/20 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex');
    
    if (original !== content) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated ' + filePath);
    }
  }
});
