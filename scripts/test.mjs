import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
for (const file of ['tests/engine.test.js', 'tests/play-engine.test.js', 'tests/catalog-quality.test.js', 'tests/cover-art.test.js']) {
  const result = spawnSync(process.execPath, [file], { cwd:root, stdio:'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}
