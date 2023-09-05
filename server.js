const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);
const socketIO = require("socket.io");
const log = require("./config/logger");
const moment = require("moment");

const io = socketIO(server);

app.use(cors());
app.use(express.static(path.join(__dirname, "src")));
app.use(express.json()); // json 파싱 미들웨어 추가
const PORT = process.env.PORT || 8080;

let id = 2;
const msg = [
  {
    id: 1, // 고유아이디
    text: "sample text", // 텍스트
    done: false, // 읽음
  },
];

app.get("/api/msg", (req, res) => {
  res.json(msg);
});

app.post("/api/msg", (req, res) => {
  const { text, done } = req.body;
  msg.push({
    id: id++,
    text,
    done,
  });
  return res.send("success");
});

io.on("connection", (socket) => {
  socket.on("chatting", (data) => {
    const { name, msg } = data;
    io.emit("chatting", {
      name,
      msg,
      time: moment(new Date()).format("h:mm A"),
    });
  });
});

server.listen(PORT, () => log.info(`[${PORT}] Server is running!`));
