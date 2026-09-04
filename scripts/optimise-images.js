const sharp = require('sharp');
const path = require('path');

const imgDir = path.join(__dirname, '../src/assets/images');

const images = [
  { file: 'hero-woodland.jpg', width: 1920, quality: 85 },
  { file: 'field-sunset.jpg',  width: 1200, quality: 85 },
  { file: 'lucy-crean.jpg',    width: 800,  quality: 85 },
  { file: 'dandelions.jpg',    width: 800,  quality: 85 },
];

(async () => {
  for (const { file, width, quality } of images) {
    const filePath = path.join(imgDir, file);
    await sharp(filePath)
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer()
      .then(buf => require('fs').writeFileSync(filePath, buf));

    const kb = Math.round(require('fs').statSync(filePath).size / 1024);
    console.log(`✓ ${file}: ${kb} KB`);
  }
})();
