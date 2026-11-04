import { readdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
let count = 0;
for (const directory of ['src', 'scripts', 'tests']) {
  for (const file of await readdir(resolve(root,directory))) {
    if (!/\.(m?js)$/.test(file)) continue;
    const result = spawnSync(process.execPath, ['--check', resolve(root,directory,file)], { stdio:'inherit' });
    if (result.error) throw result.error;
    if (result.status !== 0) process.exit(result.status || 1);
    count++;
  }
}
console.log(`Syntax checked ${count} JavaScript files.`);
