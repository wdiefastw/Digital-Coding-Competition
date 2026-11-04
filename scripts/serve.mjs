import { createServer } from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import { dirname, extname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
function option(name, fallback) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  if (!args[index + 1] || args[index + 1].startsWith('--')) {
    throw new Error(`A value is required for ${name}`);
  }
  return args[index + 1];
}
const port = Number(option('--port', process.env.PORT || '5173'));
const host = option('--host', '0.0.0.0');
if (!Number.isInteger(port) || port < 0 || port > 65535) throw new Error('Invalid port');
const mime = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8', '.webmanifest': 'application/manifest+json'
};
function isWithinRoot(path) {
  const rel = relative(root, path);
  return rel !== '..' && !rel.startsWith(`..${sep}`) && !isAbsolute(rel);
}
function reply(res, status, message, method) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(method === 'HEAD' ? undefined : message);
}
const server = createServer(async (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'no-referrer');
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return reply(res, 405, 'Method not allowed', req.method);
  }
  try {
    // Decode the raw path before resolving: never permit hidden segments or traversal.
    const raw = decodeURIComponent((req.url || '/').split('?')[0]);
    const segments = raw.split('/').filter(Boolean);
    if (raw.includes('\\') || raw.includes('\0') || segments.some(x => x.startsWith('.'))) {
      return reply(res, 403, 'Forbidden', req.method);
    }
    let path = segments.join('/') || 'index.html';
    if (path !== 'index.html' && path !== 'studio.html' && !path.startsWith('src/') && !path.startsWith('public/')) {
      // Public assets can also be requested at the site root.
      path = `public/${path}`;
    }
    const candidate = resolve(root, path);
    if (!isWithinRoot(candidate)) return reply(res, 403, 'Forbidden', req.method);
    const canonical = await realpath(candidate);
    if (!isWithinRoot(canonical)) return reply(res, 403, 'Forbidden', req.method);
    const canonicalRel = relative(root, canonical).split(sep).join('/');
    if (canonicalRel.split('/').some(x => x.startsWith('.')) ||
      (canonicalRel !== 'index.html' && canonicalRel !== 'studio.html' && !canonicalRel.startsWith('src/') && !canonicalRel.startsWith('public/'))) {
      return reply(res, 403, 'Forbidden', req.method);
    }
    const info = await stat(canonical);
    if (!info.isFile()) return reply(res, 404, 'Not found', req.method);
    const bytes = await readFile(canonical);
    res.writeHead(200, {
      'Content-Type': mime[extname(canonical).toLowerCase()] || 'application/octet-stream',
      'Content-Length': bytes.length,
      'Cache-Control': 'no-store'
    });
    res.end(req.method === 'HEAD' ? undefined : bytes);
  } catch (error) {
    if (error instanceof URIError) return reply(res, 400, 'Bad request', req.method);
    if (error.code === 'ENOENT' || error.code === 'ENOTDIR') return reply(res, 404, 'Not found', req.method);
    console.error('Could not read resource:', error.code || error.message);
    reply(res, 500, 'Internal server error', req.method);
  }
});
server.on('error', error => {
  console.error(`Could not start PLOTLINE: ${error.message}`);
  process.exitCode = 1;
});
server.listen(port, host, () => {
  console.log(`PLOTLINE is running. Port: ${server.address().port}. Press Ctrl+C to stop.`);
});
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, () => server.close(() => process.exit(0)));
}
