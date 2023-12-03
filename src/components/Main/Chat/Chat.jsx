import { ChatContentsBox } from "./ChatContentsBox";
import { IconsWrapper, StyledIcon } from "../../../css/styled/Main/main.styled"
import { ChatEtcContainer, ChatInput, ChatInputBtn, ChatInputContainer, ChatInputForm, Container } from "../../../css/styled/Main/Chat/chat.style";
import { useEffect, useRef, useState } from "react";
import { Client } from '@stomp/stompjs';

/**
 * 상위 컴포넌트 - <ChattingPane>
 * @author 이시영
 * @returns <ChatContentsBox>
 */
export const Chat = () => {
    const BROKER_URL = process.env.REACT_APP_BROKER_URL;
    const senderID = 100;
    const client = useRef({});
    // // 사용자가 입력한 채팅
    const [chat, setChat] = useState("");
    // // 채팅을 쌓아두는 역할
    const [chatList, setChatList] = useState([]);

    // // 해당 방을 구독 : 서버에서 퍼블리시하는 메시지를 받아오는 역할
    function subscribe() {
        // sub/chat/{roomID}
        client.current.subscribe('/sub/chat/1', (datafromServer) => {
            // 웹소켓 자체가 비동기적으로 작동하므로 내부에 비동기 함수가 탑재된 라이브러리
            const message = JSON.parse(datafromServer.body);
            console.log(message);

            // 서버로부터 넘어온 채팅을 다시 풀어서 새로운 객체로 만들어서 넣어줌으로써 연결성 약화
            setChatList((previousChatList) => [
                ...previousChatList, {...message},
            ]);

        });
        console.log('subscribed(구독중 : 채팅을 받을 수 있는 상태)');
    }

    // // ws프로토콜 연결
    function connect() {
        // useRef안에 Client객체 넣어서 랜더링과 분리해서 관리
        client.current = new Client({
            brokerURL: BROKER_URL,
            reconnectDelay: 5000, // 5초마다 자동 재연결
            // 연결이 성공적이라면
            onConnect: () => {
                subscribe(); // 연결 성공 시 구독하는 로직 실행
            }
        });
        // 연결 활성화
        client.current.activate();
    }

    // // 프로토콜 연결 종료
    function disconnect() {
        client.current.deactivate();
        consol.log('종료');
    }

    // 사용자가 입력한 채팅, 채팅 전송 시점 서버로 전송하는 역할
    function publish(chat) {
        if (!client.current.connected) {
            return;
        }

        client.current.publish({
            // sub/chat/{roomID}
            destination: '/pub/chat/message',
            // 구독한 쪽에서 이 부분에 대한 내용을 받습니다.
            // 형식에 맞게 수정해서 보내야 함
            body: JSON.stringify({ 
                type: "CHAT",
                hidden: 0,
                roomId: 1,
                message: chat,
                sender: senderID,
                time: new Date().toLocaleTimeString("ko-KR", 
                {
                    hour: '2-digit',
                    minute: '2-digit'
                }),
            }),
        });
        console.log('published!(채팅을 보낸다)');
        setChat('');
    }

    function handleSubmit(event, chat) {
        event.preventDefault();
        publish(chat);
    };

    // 초기랜더링될 때, 연결
    useEffect(() => {
        connect();
    },[]);

    return (
        <>
            <Container>
                {/* 채팅 내용들이 화면에 뜨는 컴포넌트 */}
                <ChatContentsBox chatsHistory={chatList} senderID={senderID}/>
                {/* 채팅을 입력하는 곳 */}
                <ChatInputContainer>
                    {/* 입력받는 곳 */}
                    <ChatInputForm onSubmit={(e) => handleSubmit(e, chat)} id="submit-form">
                        {/* input tag */}
                        <ChatInput value={chat} onChange={(e)=>setChat(e.target.value)}/>
                        {/* 전송버튼 / 다른 기능 */}
                        <ChatEtcContainer>
                            {/* 별도의 옵션 아이콘들 */}
                            <IconsWrapper>
                                <StyledIcon className="fas fa-share-from-square" size="20px" $marginright="20px" />
                                <StyledIcon className="fas fa-image" size="20px" $marginright="20px" />
                                <StyledIcon className="fa-solid fa-paperclip" size="20px" $marginright="20px" />
                                <StyledIcon className="fa-solid fa-calendar-check" size="20px" $marginright="20px" />
                            </IconsWrapper>
                            {/* 전송 버튼 */}
                            <ChatInputBtn disabled={chat?.length < 1}>
                                전송
                            </ChatInputBtn>
                        </ChatEtcContainer>
                    </ChatInputForm>
                </ChatInputContainer>
            </Container>
        </>
    )
}