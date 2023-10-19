import { io } from "socket.io-client"
import { ChatListBox } from "../components/ChatListBox";
import { useEffect, useState } from "react";
import { ChatContentsBox } from "../components/ChatContentsBox";
import { ChatBtnIcon, ChatContainer, ChatContents, ChatInputArea, ChatInputBtn, ChatInputForm, ChatListContainer, ChatListHeader, ChatListHeaderH1, ChatListHeaderIconContainer, ChatListLiContainer, Container, StyledIcon } from "../css/styled/main.styled";

export const Main = () => {
    // server/server.js에 열어놓은 포트로 연결
    const socket = io.connect('http://localhost:8080');
    const users = ['시영', '민정', '동원', '재현', '민주', '세윤']
    const [msg, setMsg] = useState("");
    const [chats, setChats] = useState(['시영', '민정', '동원', '재현', '민주', '세윤']);

    const SendMsgHandler = (e) => {
        e.preventDefault();
        // 서버로 메시지 보내기
        socket.emit("from front", msg);
        setMsg("");
    }

    useEffect(()=>{
        // 서버로부터 넘어온 메시지들을 받는 곳
        socket.on("from server", (serverData) => {
            // 이전 채팅들을 배열에 풀고 새로 들어온 메시지를 배열에 담기
            setChats((prev) => ([...prev, serverData]));
            console.log(serverData);
        })
    }, [])

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
                {/* 메인페이지 : 우측 : 채팅내역들과 채팅 입력 칸이 존재하는 공간 */}
                <ChatContainer>
                    {/* 채팅 내역들이 보여지는 곳 */}
                    <ChatContents>
                        <ChatContentsBox chatsHistory={chats}/>
                    </ChatContents>
                    {/* 채팅을 입력하는 곳 */}
                    <ChatInputForm onSubmit={SendMsgHandler} id="submit-form">
                        <ChatInputArea value={msg} onChange={(e)=>setMsg(e.target.value)}/>
                        <ChatInputBtn>
                            <ChatBtnIcon className="fa-solid fa-arrow-up"></ChatBtnIcon>
                        </ChatInputBtn>
                    </ChatInputForm>
                </ChatContainer>
            </Container>
        </>
    )
}

