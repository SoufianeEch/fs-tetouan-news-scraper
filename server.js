const http = require("http");
const fs = require("fs/promises")
const { spawn } = require("child_process");

http
  .createServer(async (req, res) => {
    if (req.method === "GET") {
      if (req.url === "/fs") {
        const py = spawn("python", ["scraper.py"]);

        let data = "";
        py.stdout.on("data", (chunk) => (data += chunk));

        // ---
        py.stderr.on("data", (err) => {
          console.log("err on python", err);
        });
        // ---

        py.on("close", () => {
          const parsedData = JSON.parse(data);
          res.writeHead(200, { "content-type": "application/json" });
          res.end(JSON.stringify(parsedData));
        });
      } else if (req.url === "/") {
        const file = "index.html"
        res.writeHead(200, {"content-type": "text/html"})
        res.end(await fs.readFile(file))
      }
    }
  })
  .listen(3000, console.log("server is running"));
