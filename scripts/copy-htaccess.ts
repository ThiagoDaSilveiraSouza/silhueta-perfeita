import fs from 'fs';
import path from 'path';

const sourcePath = path.join(__dirname, '..', 'src', '.htaccess');
const destinationPath = path.join(__dirname, '..', 'build', '.htaccess');

try {
  fs.copyFileSync(sourcePath, destinationPath);
  console.log('.htaccess copied successfully.');
} catch (error) {
  console.error('Error copying .htaccess:', error.message);
}
