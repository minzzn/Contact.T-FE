import { io } from "socket.io-client"
import styled from "styled-components";
import { ChatListBox } from "../components/ChatListBox";
import { useEffect, useState } from "react";

export const Main = () => {
    // server/server.js에 열어놓은 포트로 연결
    const socket = io.connect('http://localhost:8080/');
    const users = ['시영', '민정', '동원', '재현', '민주', '세윤']
    const [msg, setMsg] = useState("");
    const [chats, setChats] = useState([]);

    const SendMsgHandler = () => {
        // 서버에 메신지 
        socket.emit("chat message", msg);
        // 메시지 상태 초기화
        setMsg("");
    }

    useEffect(()=>{
        socket.on("chat message", (msg) => {
            // 이전 채팅들을 배열에 풀고 새로 들어온 메시지를 배열에 담기
            setChats([...chats, msg]);
        })
    },[chats])

    console.log(msg);

    return (
        <>
            <Container>
                {/* 채팅 목록: 왼쪽 영역 */}
                <ChatListContainer>
                    {/* 헤더 영역 */}
                    <ChatListHeader>
                        <ChatListHeaderH1>채팅</ChatListHeaderH1>
                        <ChatListHeaderIconContainer>
                            <StyledIcon className="fa-solid fa-magnifying-glass" />   
                            <StyledIcon className="fa-regular fa-comment" />
                            <StyledIcon className="fa-solid fa-gear" />
                        </ChatListHeaderIconContainer>
                    </ChatListHeader>
                    {/* 채팅 목록 리스트 */}
                    <ChatListLiContainer>
                        {/* components/ChatListBox.jsx */}
                        {users.map((user,idx) => <ChatListBox username={user} key={idx}/>)}
                    </ChatListLiContainer>
                </ChatListContainer>
                {/* 실제 채팅하는 곳 */}
                <ChatContainer>
                    <ChatContents>
                        <ul className="chat_ul">
                            {
                                chats.map((data,idx)=> (
                                    <li key={idx}>{data}</li>
                                ))
                            }
                        </ul>
                    </ChatContents>
                    <ChatInputContainer>
                        <ChatInputArea className="text-area" onChange={(e)=> {
                            console.log(e.currentTarget.value);
                        }}/>
                        <ChatInputBtn onClick={SendMsgHandler}>
                            <ChatBtnIcon className="fa-solid fa-arrow-up"></ChatBtnIcon>
                        </ChatInputBtn>
                    </ChatInputContainer>
                </ChatContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  // 가로 정렬
  display: flex;
`;

const ChatListContainer = styled.div`
    width: 30vw;
    height: 100vh;
    background-color: var(--bg-orange);
    display: flex;
    // 세로로 쌓이도록
    flex-direction: column;
    // 가로 중앙 정렬
    align-items: center;
    border-right: 1px solid var(--bg-black);
`;
const ChatListHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  // 세로 중앙 정렬
  align-items: center;
  // 끝과 끝으로 배치
  justify-content: space-between;
  // top - horizontal - bottom
  padding: 3vh 1vw 0;
  color: var(--bg-white);
`;

const ChatListHeaderH1 = styled.h1`
    font-size: 40px;
    font-weight: 700;
    font-family: 'Noto Sans KR', sans-serif;
`;

const ChatListHeaderIconContainer = styled.div`
    width: min-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const StyledIcon = styled.i.attrs(({className}) => ({
    className: `${className}`,
}))`
    font-size: 25px;
    margin-right: 1.5vw;
`;

const ChatListLiContainer = styled.div`
    width: 100%;
    // 높이는 스크롤 가능하도록 무제한으로
    // 채팅목록 박스들이 세로로 쌓이도록
    display: flex;
    flex-direction: column;
`

const ChatContainer = styled.div`
    width: 70vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

const ChatContents = styled.div`
    width: 100%;
`

// 보낼 채팅 입력받는 input, 채팅 보내는 submit btn을 감싸는 div
const ChatInputContainer = styled.div`
    width: 100%;
    height: min-content;
    display: flex;
    align-items: center;
    position: relative;
`

const ChatInputArea = styled.textarea`
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    margin: 0 20px 20px 20px;
    // 상/우/하/좌
    padding: 13px 20px 13px 13px;
    border-radius: 20px;
    background-color: #f1f1f1;
    resize: none;
    /* 스크롤 안 생기도록 막기 */
    &::-webkit-scrollbar {
        display: none;
    }
`
const ChatInputBtn = styled.button`
    width: min-content;
    height: min-content;
    position: absolute;
    right: 18px;
    top: -3px;
    margin: 10px 10px;
    border-radius: 50%;
    border: 3px solid black;
`

const ChatBtnIcon = styled.i`
    font-size: 20px;
    width: 20px;
    height: 20px;
`