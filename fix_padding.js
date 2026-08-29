const fs = require('fs');

function replaceFile(path, replacements) {
    if (fs.existsSync(path)) {
        let content = fs.readFileSync(path, 'utf8');
        for (const [search, replace] of replacements) {
            content = content.replace(search, replace);
        }
        fs.writeFileSync(path, content, 'utf8');
        console.log('Updated ' + path);
    } else {
        console.log('File not found: ' + path);
    }
}

replaceFile('src/app/page.tsx', [
    ['pt-[130px]', 'pt-[100px]']
]);

replaceFile('src/app/about/page.tsx', [
    ['pt-[130px]', 'pt-[100px]'],
    ['calc(100vh-130px)', 'calc(100vh-85px)']
]);

replaceFile('src/app/faq/page.tsx', [
    ['pt-[140px]', 'pt-[100px]']
]);

replaceFile('src/app/privacy/page.tsx', [
    ['pt-[140px]', 'pt-[100px]']
]);

replaceFile('src/app/shop/page.tsx', [
    ['pt-[140px]', 'pt-[100px]']
]);

replaceFile('src/app/terms/page.tsx', [
    ['pt-[140px]', 'pt-[100px]']
]);

replaceFile('src/app/donate/page.tsx', [
    ['mt-[130px]', 'mt-[100px]'],
    ['h-[calc(100vh-130px)]', 'h-[calc(100vh-85px)]'],
    ['pt-[140px]', 'pt-[100px]']
]);
