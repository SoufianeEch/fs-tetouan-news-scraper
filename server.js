const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const { spawn } = require("child_process");

const mimeType = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
};

http
  .createServer(async (req, res) => {
    if (req.method === "GET") {
      if (req.url === "/fs") {
        const py = spawn("python", ["scraper.py"]);
        let data = "";
        py.stdout.on("data", (chunk) => (data += chunk));
        py.stderr.on("data", (err) => {
          console.log("err on python", err);
        });
        py.on("close", () => {
          const parsedData = JSON.parse(data);
          res.writeHead(200, { "content-type": "application/json" });
          res.end(JSON.stringify(parsedData));
        });
      } else {
        const file = req.url === "/" ? "index.html" : req.url;
        const filePath = path.join(__dirname, "public", file);
        const ext = path.extname(filePath);

        try {
          const content = await fs.readFile(filePath);
          res.writeHead(200, {
            "content-type": mimeType[ext] || "application/octet-stream",
          });
          res.end(content);
        } catch {
          res.writeHead(404, { "content-type": "text/plain" });
          res.end("Not Found");
        }
      }
    }
  })
  .listen(3000, console.log("server is running"));
