const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const port = process.env.PORT || 5173;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function sendFile(req, res) {
  const cleanPath = decodeURIComponent(req.url.split("?")[0]);
  const requested = cleanPath === "/" ? "index.html" : cleanPath.slice(1);
  const filePath = path.resolve(root, requested);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": types[path.extname(filePath).toLowerCase()] || "text/plain; charset=utf-8",
    });
    res.end(content);
  });
}

const server = http.createServer(sendFile);

server.listen(port, "127.0.0.1", () => {
  console.log(`AptiVerbal Pro is running at http://127.0.0.1:${port}`);
});

