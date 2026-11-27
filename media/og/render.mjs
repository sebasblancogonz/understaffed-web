// Genera las imágenes para compartir con el Chrome instalado (variable CHROME para otra ruta) y los
// iconos desde public/favicon.svg con sharp.
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = new URL('../../', import.meta.url);
const path = (p) => fileURLToPath(new URL(p, root));
const chrome = process.env.CHROME ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';

for (const [file, query] of [['public/og.png', ''], ['public/og-en.png', '?en']]) {
  execFileSync(chrome, [
    '--headless',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--allow-file-access-from-files',
    '--window-size=1200,630',
    '--virtual-time-budget=3000',
    `--screenshot=${path(file)}`,
    pathToFileURL(path('media/og/og.html')).href + query,
  ]);
}

// sharp llega con Astro; con pnpm se resuelve desde el propio Astro.
const fromAstro = createRequire(createRequire(import.meta.url).resolve('astro/package.json'));
const sharp = fromAstro('sharp');
const svg = readFileSync(path('public/favicon.svg'));
const png = (size) => sharp(svg, { density: 72 * (size / 32) }).resize(size, size).png().toBuffer();

writeFileSync(path('public/apple-touch-icon.png'), await png(180));

// Un .ico con una sola imagen PNG de 32 px.
const icon = await png(32);
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(icon.length, 14);
header.writeUInt32LE(22, 18);
writeFileSync(path('public/favicon.ico'), Buffer.concat([header, icon]));
