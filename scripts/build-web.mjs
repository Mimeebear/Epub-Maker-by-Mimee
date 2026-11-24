import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('www/vendor', { recursive: true });
await copyFile('node_modules/jszip/dist/jszip.min.js', 'www/vendor/jszip.min.js');
console.log('Offline web assets prepared.');
