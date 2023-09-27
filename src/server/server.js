// 필요한 모듈들 불러오기
const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

// port 값 변수로 설정
const PORT = 8080;

// express 어플리케이션 실행
const app = express();
// // handling cors while development env
// app.use(cors());
// 서버 생성 : using http-protocol 
const server = createServer(app);
// socket.io 객체 생성 : http server를 io에 넘겨줌
const io = new Server(server, {
  // handling cors
  cors: {
    // client쪽에서 cors 에러 나지 않도록 옵션 추가
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// 번들링을 통해 생성된 dist 폴더의 파일들을 서비스하도록 설정 : 개발 모드일 때는 정적으로 서비스하지 않고 클라이언트와 서버를 동시에 실행
// 참고자료 : https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=pjok1122&logNo=221545195520
app.use(express.static('dist'));

// 클라이언트가 서버와 연결되면 실행되는 구문
io.on('connection', (socket) => {
  console.log('a user connected');
  // chat message event가 들어오면 메세지 콘솔 출력
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    // 우선 그냥 전부에게 메세지가 보이도록 서버에서 클라이언트 측에 emit : 특정 방에만 보이도록 하려면 'broadcast' flag 이용
    io.emit('chat message', msg);
  });

  // 클라이언트와 연결이 끊어지면 실행되는 구문
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
// get 요청시 응답 전송
app.get('/', (req, res) => {
  res.send('<h1>connected with server!</h1>');
});

server.listen(PORT, () => console.log("Listening on port 8080!"));