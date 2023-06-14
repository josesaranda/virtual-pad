const robot = require("robotjs");
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const qrcode = require("qrcode-terminal");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const os = require("os");

const version = require("child_process")
  .execSync("git rev-parse --short HEAD")
  .toString()
  .trim();

const interfaces = os.networkInterfaces();
const addresses = [];

for (const name in interfaces) {
  for (const iface of interfaces[name]) {
    if (iface.family === "IPv4" && !iface.internal) {
      addresses.push(iface.address);
    }
  }
}

app.get("/api/version", (_, res) => {
  res.send({ version });
});

const virtualPadAppPath = path.join(
  __dirname,
  "../../dist/packages/virtual-pad-app"
);

app.use(express.static(virtualPadAppPath));

app.get("/", (_, res) => {
  res.sendFile(virtualPadAppPath + "/index.html");
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("key", ([buttonName, type]) => {
    robot.keyToggle(buttonName, type);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

function startServer(port) {
  server.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
    console.log(`listening on http://${addresses[0]}:${port}`);
    console.log(
      "Version:",
      `https://github.com/josesaranda/virtual-pad/commit/${version}`
    );
    console.log("--- Scan this QR Code ---");
    console.log("");
    qrcode.generate(`http://${addresses[0]}:${port}`, { small: true });
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.log(`Port ${port} is in use, trying ${port + 1}`);
      startServer(port + 1);
    } else {
      console.error(`Error starting server: ${err}`);
    }
  });
}

const PORT = 3000;
startServer(PORT);
