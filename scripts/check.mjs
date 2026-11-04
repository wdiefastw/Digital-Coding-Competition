import { readdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
let count = 0;
async function sourceFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes:true })) {
    const path = resolve(directory,entry.name);
    if (entry.isDirectory()) files.push(...await sourceFiles(path));
    else if (/\.(m?js)$/.test(entry.name)) files.push(path);
  }
  return files;
}
for (const directory of ['src', 'scripts', 'tests']) {
  for (const file of await sourceFiles(resolve(root,directory))) {
    const result = spawnSync(process.execPath, ['--check', file], { stdio:'inherit' });
    if (result.error) throw result.error;
    if (result.status !== 0) process.exit(result.status || 1);
    count++;
  }
}
console.log(`Syntax checked ${count} JavaScript files.`);
