import { useEffect, useRef } from "react"
import { ChatContents } from "../../../css/styled/Main/Chat/chat.style"
import { ChatContentDiv, ChatContentsContainer, ChatContentDivWrapper, AggressvieContentDiv, ChatTimeDiv } from "../../../css/styled/Main/Chat/chatContentsBox.styled.js"

/**
 * 배열과 불리언값 두 개를 props로 Chat component로부터 받아옵니다
 * @param {array} [이전채팅내용들 + 사용자가 입력한 챗 내용] 
 * @param {boolean} 내가 보낸건지 구분짓는 변수
 * @returns 없음
 */
export const ChatContentsBox = ({ chatsHistory, senderID }) => {
    const containerRef = useRef();

    // 채팅 배열이 새로 들어올때마다 스크롤을 가장 밑으로 내림
    useEffect(() => {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }, [chatsHistory])

    return (
        <>
            <ChatContents ref={containerRef}>
                <ChatContentsContainer>
                    {
                        chatsHistory?.map((messageObject,idx) => {
                            const isAggressive = messageObject.hidden;
                            const isMine = parseInt(messageObject.sender) == senderID;
                        
                            return (
                                <div key={idx}>
                                    {   
                                        isAggressive === 0 ? (
                                            <ChatContentDivWrapper key={idx} $ismine={isMine}>
                                                <ChatContentDiv $ismine={isMine}>
                                                    {messageObject.message}
                                                </ChatContentDiv>
                                                <ChatTimeDiv $ismine={isMine}>
                                                    {messageObject.time}
                                                </ChatTimeDiv>       
                                            </ChatContentDivWrapper>
                                        ) : (
                                            <ChatContentDivWrapper key={idx} $ismine={isMine}>
                                                <AggressvieContentDiv>
                                                    {
                                                        isMine ? messageObject.message : "공격적 발언 감지"
                                                    }
                                                </AggressvieContentDiv>
                                                <ChatTimeDiv $ismine={isMine}>
                                                    {messageObject.time}
                                                </ChatTimeDiv>
                                            </ChatContentDivWrapper>
                                        )
                                    }
                                </div>
                            )
                        })
                    }
                </ChatContentsContainer>
            </ChatContents>
        </>
    )
}