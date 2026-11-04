import { readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const allowedTags = new Set([
  'svg', 'title', 'desc', 'defs', 'g', 'rect', 'circle', 'ellipse', 'path', 'line',
  'polygon', 'polyline', 'linearGradient', 'radialGradient', 'stop', 'filter',
  'feTurbulence', 'feColorMatrix', 'feComponentTransfer', 'feFuncA', 'feFuncR',
  'feFuncG', 'feFuncB', 'feBlend', 'feGaussianBlur', 'feOffset', 'feMerge',
  'feMergeNode', 'feFlood', 'feComposite', 'clipPath', 'mask', 'use',
]);
const fragmentId = /^[A-Za-z_][A-Za-z0-9_.:-]*$/;

/** Only static, self-contained SVG illustrations may be bundled into the page. */
export function validateCoverSource(source, name = 'cover') {
  const fail = message => { throw new Error(`${name}: ${message}`); };
  if (typeof source !== 'string' || !/^\s*<svg\b/.test(source) || !/<\/svg>\s*$/.test(source)) fail('a complete SVG illustration is required');
  if (/<!DOCTYPE|<!ENTITY|<\?|\bon[a-z]+\s*=|\bstyle\s*=|@import|expression\s*\(|\\|&#(?:x[0-9a-f]+|\d+);/i.test(source)) fail('active, escaped or externally loaded content is not allowed');
  for (const match of source.matchAll(/<\s*\/?\s*([A-Za-z][A-Za-z0-9_.:-]*)\b/g)) {
    if (!allowedTags.has(match[1])) fail(`unsupported SVG element ${match[1]}`);
  }
  const ids = new Set();
  for (const match of source.matchAll(/\sid\s*=\s*(["'])(.*?)\1/g)) {
    if (!fragmentId.test(match[2]) || ids.has(match[2])) fail('fragment IDs must be valid and unique');
    ids.add(match[2]);
  }
  for (const match of source.matchAll(/\b(?:href|xlink:href|src)\s*=\s*(["'])(.*?)\1/gi)) {
    if (!match[2].startsWith('#') || !ids.has(match[2].slice(1))) fail('resource references must point inside the same illustration');
  }
  for (const match of source.matchAll(/url\(([^)]*)\)/gi)) {
    const value = match[1].trim().replace(/^(["'])(.*)\1$/, '$2');
    if (!value.startsWith('#') || !ids.has(value.slice(1))) fail('paint and filter references must stay inside the illustration');
  }
  for (const match of source.matchAll(/\baria-labelledby\s*=\s*(["'])(.*?)\1/g)) {
    if (match[2].trim().split(/\s+/).some(id => !ids.has(id))) fail('accessible titles must reference an existing element');
  }
  if (!/<title\b/.test(source) || !/\bviewBox=["']0 0 600 760["']/.test(source)) fail('a cover needs its accessible title and portrait viewBox');
  return true;
}

const renderer = String.raw`
export const coverIds = Object.freeze(Object.keys(coverArt));

/** Render trusted bundled artwork with fragment IDs scoped to this occurrence. */
export function coverMarkup(id, instance) {
  if (!Object.hasOwn(coverArt, id)) throw new Error('Unknown story cover.');
  if (typeof instance !== 'string' || !/^[A-Za-z][A-Za-z0-9_-]{0,119}$/.test(instance)) throw new Error('A valid cover instance name is required.');
  const prefix = 'cover-' + instance + '-';
  return coverArt[id]
    .replace(/(\s)id=(["'])([^"']+)\2/g, (_, space, quote, value) => space + 'id=' + quote + prefix + value + quote)
    .replace(/url\(\s*(["']?)#([A-Za-z_][A-Za-z0-9_.:-]*)\1\s*\)/g, (_, quote, value) => 'url(#' + prefix + value + ')')
    .replace(/\b(href|xlink:href)=(["'])#([^"']+)\2/g, (_, attribute, quote, value) => attribute + '=' + quote + '#' + prefix + value + quote)
    .replace(/\baria-labelledby=(["'])([^"']+)\1/g, (_, quote, values) => 'aria-labelledby=' + quote + values.trim().split(/\s+/).map(value => prefix + value).join(' ') + quote)
    .replace(/<svg\b/, '<svg class="cover-illustration" data-cover-id="' + id + '" preserveAspectRatio="xMidYMid slice"');
}
`;

export async function generateCoverArt() {
  const directory = resolve(root, 'public/covers');
  const files = (await readdir(directory)).filter(name => name.endsWith('.svg')).sort();
  if (files.length === 0) throw new Error('No story cover illustrations were found.');
  const covers = {};
  for (const file of files) {
    const id = file.slice(0, -4);
    if (!/^[a-z0-9][a-z0-9-]*$/.test(id)) throw new Error(`Invalid story cover filename: ${file}`);
    const source = await readFile(resolve(directory, file), 'utf8');
    validateCoverSource(source, file);
    covers[id] = source;
  }
  const contents = '// Generated from public/covers by scripts/generate-cover-art.mjs. Edit the SVG sources to update artwork.\n'
    + 'export const coverArt = Object.freeze(' + JSON.stringify(covers, null, 2) + ');\n' + renderer;
  const output = resolve(root, 'src/cover-art.js');
  let existing;
  try { existing = await readFile(output, 'utf8'); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  if (existing !== contents) await writeFile(output, contents);
  return files.length;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(`Bundled ${await generateCoverArt()} trusted story covers.`);
}
