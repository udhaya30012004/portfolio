import http from "node:http";

const PORT = Number(process.env.PORT || 5000);

const sendJson = (res, statusCode, payload) => {
  const body = JSON.stringify(payload);

  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body),
    "Access-Control-Allow-Origin": "*",
  });
  res.end(body);
};

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/health") {
    sendJson(res, 200, {
      status: "ok",
      service: "portfolio-backend",
    });
    return;
  }

  sendJson(res, 404, {
    error: "Not found",
  });
});

server.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});

export { server };
