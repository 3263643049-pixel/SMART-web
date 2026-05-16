// Minimal static server for local preview. Run: node _serve.js
// Serves from the parent of this script's folder so that
//   /index/index.html  resolves project files, and
//   /fonts/...         resolves the HarmonyOS font files.
// `/` is redirected to /index/index.html for convenience.
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.dirname(__dirname);   // D:/桌面/claude工作文件/
const PORT = 8000;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.ttf':  'font/ttf',
  '.otf':  'font/otf',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
};

http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/' || urlPath === '/index/' || urlPath === '/index') {
    res.writeHead(302, { Location: '/index/index.html' });
    return res.end();
  }
  const filePath = path.join(ROOT, urlPath);
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403); return res.end('forbidden');
  }
  fs.stat(filePath, (err, st) => {
    if (err || !st.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('404 not found: ' + urlPath);
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    fs.createReadStream(filePath).pipe(res);
  });
}).listen(PORT, () => {
  console.log(`SMART archive  →  http://localhost:${PORT}/   (redirects to /index/)`);
});
