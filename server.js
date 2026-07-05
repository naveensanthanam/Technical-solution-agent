const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DIR  = __dirname;

const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.css' : 'text/css; charset=utf-8',
    '.js'  : 'application/javascript; charset=utf-8',
    '.png' : 'image/png',
    '.jpg' : 'image/jpeg',
    '.svg' : 'image/svg+xml',
    '.ico' : 'image/x-icon',
    '.txt' : 'text/plain; charset=utf-8',
};

http.createServer((req, res) => {
    // Always serve index.html for "/" or unknown routes
    const urlPath = req.url === '/' ? '/index.html' : req.url.split('?')[0];
    const filePath = path.join(DIR, urlPath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            // For any missing file, serve index.html (SPA fallback)
            fs.readFile(path.join(DIR, 'index.html'), (err2, html) => {
                if (err2) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('500 Internal Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end(html);
                }
            });
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
}).listen(PORT, '0.0.0.0', () => {
    console.log(`TechDoc running on port ${PORT}`);
});
