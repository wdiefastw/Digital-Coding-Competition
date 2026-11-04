import { cp, mkdir, readFile, rename, rm, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist');
const temporary = resolve(root, '.plotline-build');
await readFile(resolve(root, 'index.html'));
await stat(resolve(root, 'src'));
await rm(temporary, { recursive: true, force: true });
try {
  await mkdir(temporary);
  await cp(resolve(root, 'index.html'), resolve(temporary, 'index.html'));
  await cp(resolve(root, 'studio.html'), resolve(temporary, 'studio.html'));
  await cp(resolve(root, 'src'), resolve(temporary, 'src'), { recursive: true });
  try {
    await cp(resolve(root, 'public'), resolve(temporary, 'public'), { recursive: true });
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  await rm(output, { recursive: true, force: true });
  await rename(temporary, output);
  console.log('Build complete. Upload dist/ to your static hosting provider.');
} catch (error) {
  await rm(temporary, { recursive: true, force: true });
  throw error;
}
