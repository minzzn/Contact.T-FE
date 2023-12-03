import { ChatContents } from "../../../css/styled/Main/Chat/chat.style"
import { ChatContentDiv, ChatContentsContainer, ChatContentDivWrapper, AggressvieContentDiv, ChatTimeDiv } from "../../../css/styled/Main/Chat/chatContentsBox.styled.js"

/**
 * 배열과 불리언값 두 개를 props로 Chat component로부터 받아옵니다
 * @param {array} [이전채팅내용들 + 사용자가 입력한 챗 내용] 
 * @param {boolean} 내가 보낸건지 구분짓는 변수
 * @returns 없음
 */
export const ChatContentsBox = ({ chatsHistory, senderID }) => {

    return (
        <>
            <ChatContents>
                <ChatContentsContainer>
                    {
                        chatsHistory?.map((messageObject,idx) => {
                            const isAggressive = messageObject.hidden;

                            return (
                                <div key={idx}>
                                    {
                                        isAggressive === 0 ? (
                                            <ChatContentDivWrapper key={idx} $ismine={`${parseInt(messageObject.sender) === senderID}`}>
                                                <ChatContentDiv $ismine={`${parseInt(messageObject.sender) === senderID}`}>
                                                    {messageObject.message}
                                                </ChatContentDiv>
                                                <ChatTimeDiv $ismine={`${parseInt(messageObject.sender) === senderID}`}>
                                                    {messageObject.time}
                                                </ChatTimeDiv>       
                                            </ChatContentDivWrapper>
                                        ) : (
                                            <ChatContentDivWrapper key={idx} $ismine={`${parseInt(messageObject.sender) === senderID}`}>
                                                <AggressvieContentDiv>
                                                    공격적인 발언입니다
                                                </AggressvieContentDiv>
                                                <ChatTimeDiv $ismine={`${parseInt(messageObject.sender) === senderID}`}>
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