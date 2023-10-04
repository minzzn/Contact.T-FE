import { io } from "socket.io-client"
import styled from "styled-components";
import { ChatListBox } from "../components/ChatListBox";

export const Main = () => {
    // server/server.js에 열어놓은 포트로 연결
    const socket = io.connect('http://localhost:8080/');
    const users = ['시영', '민정', '동원', '재현', '민주', '세윤']

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
`