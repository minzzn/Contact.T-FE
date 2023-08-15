"use strict";
const socket = io();

const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const displayContainer = document.querySelector(".display-container");

chatInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    send();
  }
});

function send() {
  const param = {
    name: nickname.value,
    msg: chatInput.value,
  };
  socket.emit("chatting", param);
  chatInput.value = ""; // 메세지 전송 후 입력 상자 비우기
}

sendButton.addEventListener("click", send);

socket.on("chatting", (data) => {
  const { name, msg, time } = data;
  const item = new LiModel(name, msg, time);
  item.makeLi();
  displayContainer.scrollTo(0, displayContainer.scrollHeight);
});

function LiModel(name, msg, time) {
  this.name = name;
  this.msg = msg;
  this.time = time;

  this.makeLi = () => {
    const li = document.createElement("li");
    li.classList.add(nickname.value === this.name ? "sent" : "received");
    const dom = `<span class="profile">
    <span class="user">${this.name}</span>
    <img
      class="image"
      src="https://blogpfthumb-phinf.pstatic.net/MjAyMjEyMTRfMTUx/MDAxNjcwOTQ4NTc3NDIw.knsrbFR7eUEagEXqtxgmJ4jcMKSRSBb2vM6xPJiou2kg.PdvbFjx-UyTMOR5dbdjgGJ3_lXvG6kKgHzmsdrqmTr4g.PNG.zonadan20/profileImage.png?type=w161"
      alt="any"
    />
  </span>
  <span class="message">${this.msg}</span>
  <span class="time">${this.time}</span>`;
    li.innerHTML = dom;
    chatList.appendChild(li);
  };
}

console.log(socket);
