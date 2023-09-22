const express = require('express');
const app = express();
// 번들링을 통해 생성된 dist 폴더의 파일들을 서비스하도록 설정 : 개발 모드일 때는 정적으로 서비스하지 않고 클라이언트와 서버를 동시에 실행
app.use(express.static('dist'));
app.get("/api/getUsername", (req, res) =>
  res.send("It's worked!!")
);
app.listen(8080, () => console.log("Listening on port 8080!"));