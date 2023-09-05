export const Socket = () => {
  // todo : script 태그 동적으로 집어넣기
  const scripts = `
  <script src="/socket.io/socket.io.js"></script>
  <script src="/chat.js"></script>
  `;

  return (
    <>
      <div class="wrapper">
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
      </div>
    </>
  );
};
