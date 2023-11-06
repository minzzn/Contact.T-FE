import { ChatContentsBox } from "../Main/ChatContentsBox";
import {ChatContainer, ChatContents, ChatEtcContainer, ChatInput, ChatInputBtn, ChatInputContainer, ChatInputForm, IconsWrapper, StyledIcon } from "../../css/styled/main.styled"
import { useEffect, useRef, useState } from "react";
import { Client } from '@stomp/stompjs';

export const ChatMainContainer = () => {

    const client = useRef({});
    const [chat, setChat] = useState("");
    const [chatList, setChatList] = useState([]);

    function handleSubmit(event, chat) {
        event.preventDefault();
        publish(chat);
    }

    function subscribe() {
        client.current.subscribe('/sub/chat', (body) => {
            const json_body = JSON.parse(body.body);

            console.log(json_body);

            setChatList((chatList) => [
                ...chatList, ...Object.values(json_body)
            ]);
        });
        console.log('subscribed(구독중 : 채팅을 받을 수 있는 상태)');
    }

    function connect() {
        client.current = new Client({
            brokerURL: 'ws://43.202.161.139:8080/ws',
            reconnectDelay: 5000, // 5초마다 자동 재연결
            // 연결이 성공적이라면
            onConnect: () => {
                subscribe(); // 연결 성공 시 구독하는 로직 실행
            }
        });
        console.log('activated(연결되었다)');
        // 연결 활성화
        client.current.activate();
    }
    function disconnect() {
        client.current.deactivate();
        consol.log('종료');
    }

    function publish(chat) {
        if (!client.current.connected) {
            return;
        }

        client.current.publish({
            destination: '/sub/chat',
            // 구독한 쪽에서 이 부분에 대한 내용을 받습니다.
            // 형식에 맞게 수정해서 보내야 함.
            body: JSON.stringify({
                chat: chat,
            }),
        });

        console.log('published!(채팅을 보낸다)');
        setChat('');
    }

    useEffect(() => {
        connect();
    },[]);

    console.log(chatList);

    return (
        <>  
            {/* 메인페이지 : 우측 : 채팅내역들과 채팅 입력 칸이 존재하는 공간 */}
            <ChatContainer>
                {/* 채팅 내역들이 보여지는 곳 */}
                <ChatContents>
                    <ChatContentsBox chatsHistory={chatList}/>
                </ChatContents>
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
                                <StyledIcon className="fas fa-share-from-square" size="20px" marginright="20px" />
                                <StyledIcon className="fas fa-image" size="20px" marginright="20px" />
                                <StyledIcon className="fas fa-share-from-square" size="20px" marginright="20px" />
                            </IconsWrapper>
                            {/* 전송 버튼 */}
                            <ChatInputBtn>
                                전송
                            </ChatInputBtn>
                        </ChatEtcContainer>
                    </ChatInputForm>
                </ChatInputContainer>
            </ChatContainer>
        </>
    )
}