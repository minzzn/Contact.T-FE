import { useEffect } from "react";
// <script src="/socket.io/socket.io.js"></script>
// <script src="/chat.js"></script>

export const Socket = () => {
  // todo : script 태그 동적으로 집어넣기

  // 만약 첫 마운팅이 이뤄졌다면
  useEffect(() => {
    // const rootTag = document.querySelector("#root");
    for (let i = 0; i < 2; i++) {
      const script = document.createElement("script");
      if (i === 0) {
        script.src = "/socket.io/socket.io.js";
      } else {
        script.src = "/src/chat.js";
        script.defer = true;
      }
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <h1>Hello!</h1>
      {/* <div class="wrapper">
        <div class="user-container">
          <label for="nickname">유저명</label>
          <input type="text" id="nickname" />
        </div>
        <div class="display-container">
          <ul class="chatting-list"></ul>
        </div>
        <div class="input-container">
          <span>
            <input type="text" class="chatting-input" />
            <button class="send-button">전송</button>
          </span>
        </div>
      </div> */}
    </>
  );
};
