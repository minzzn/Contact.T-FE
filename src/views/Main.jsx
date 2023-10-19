import { io } from "socket.io-client"
import { ChatListBox } from "../components/ChatListBox";
import { useEffect, useState } from "react";
import { ChatContentsBox } from "../components/ChatContentsBox";
import { ChatContainer, ChatContents, ChatEtcContainer, ChatInput, ChatInputBtn, ChatInputContainer, ChatInputForm, ChatListContainer, ChatListHeader, ChatListHeaderH1, ChatListHeaderIconContainer, ChatListLiContainer, Container, IconsWrapper, StyledIcon } from "../css/styled/main.styled";

export const Main = () => {
    const [isChatListActive, setIsChatListActive] = useState(false);
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
                <ChatListContainer className="left-pane">
                    {
                        isChatListActive ? (
                            <>
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
                            </>
                        ) : (
                            // 처음 진입하거나 왼쪽부분 사이즈를 줄이고 싶을때
                            <IconsWrapper flexDirection="column">
                                 <StyledIcon className="fas fa-user" size='20px' marginTop="20px" marginBottom="20px" onClick={()=> {
                                    setIsChatListActive(true);
                                }}/>
                                 <StyledIcon className="fas fa-comment" size="20px" marginBottom="20px" />
                            </IconsWrapper>
                        )
                    }
                </ChatListContainer>

                {/* 메인페이지 : 우측 : 채팅내역들과 채팅 입력 칸이 존재하는 공간 */}
                <ChatContainer className="right-pane">
                    {/* 채팅 내역들이 보여지는 곳 */}
                    <ChatContents>
                        <ChatContentsBox chatsHistory={chats}/>
                    </ChatContents>
                    {/* 채팅을 입력하는 곳 */}
                    <ChatInputContainer>
                        {/* 입력받는 곳 */}
                        <ChatInputForm onSubmit={SendMsgHandler} id="submit-form">
                            {/* input tag */}
                            <ChatInput value={msg} onChange={(e)=>setMsg(e.target.value)}/>
                            {/* 전송버튼 / 다른 기능 */}
                            <ChatEtcContainer>
                                {/* 별도의 옵션 아이콘들 */}
                                <IconsWrapper>
                                    <StyledIcon className="fas fa-share-from-square" size="20px" marginRight="20px" />
                                    <StyledIcon className="fas fa-image" size="20px" marginRight="20px" />
                                    <StyledIcon className="fas fa-share-from-square" size="20px" marginRight="20px" />
                                </IconsWrapper>
                                {/* 전송 버튼 */}
                                <ChatInputBtn>
                                    전송
                                </ChatInputBtn>
                            </ChatEtcContainer>
                        </ChatInputForm>
                    </ChatInputContainer>
                </ChatContainer>
            </Container>
        </>
    )
}

