import { ChatContentsBox } from "../Main/ChatContentsBox";
import {ChatContainer, ChatContents, ChatEtcContainer, ChatInput, ChatInputBtn, ChatInputContainer, ChatInputForm, IconsWrapper, StyledIcon } from "../../css/styled/main.styled"
import { useEffect, useRef, useState } from "react";
import { Client } from '@stomp/stompjs';

export const ChatMainContainer = () => {

    const client = useRef({});
    const apply_id = 1;
    const [chat, setChat] = useState("");
    const [chatList, setChatList] = useState([]);

    function handleSubmit(event, chat) {
        event.preventDefault();
        console.log('sended')
        publish(chat);
    }

    function subscribe() {
        client.current.subscribe('/sub/chat/' + apply_id, (body) => {
            const json_body = JSON.parse(body.body);
            setChatList((chatList) => [
                ...chatList, json_body
            ]);
        });
    }

    function connect() {
        client.current = new Client({
            brokerURL: 'ws://43.202.161.139:8080/ws',
            onConnect: () => {
                console.log('success');
                subscribe(); // 연결 성공 시 구독하는 로직 실행
            }
        });
        client.current.activate();
    }
    function disconnect() {
        client.current.deactivate();
    }

    function publish(chat) {
        if (!client.current.connected) {
            return;
        }

        client.current.publish({
          destination: '/pub/chat',
          body: JSON.stringify({
            applyId: apply_id,
            chat: chat,
          }),
        });
        
        setChat('');
    }

    useEffect(() => {
        connect();

        return ()=>disconnect();
    },[])

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