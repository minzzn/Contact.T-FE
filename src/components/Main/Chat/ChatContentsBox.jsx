import { ChatContents } from "../../../css/styled/Main/Chat/chat.style"
import { ChatTimeDiv, ChatContentDiv, ChatContentsContainer, ChatContentDivWrapper } from "../../../css/styled/Main//Chat/chatContentsBox.styled.js"

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
                            const isAggressive = messageObject.hidden[0]
                            

                            return (
                                <ChatContentDivWrapper key={idx} $ismine={`${parseInt(messageObject.sender) === senderID}`}>
                                    <ChatContentDiv $ismine={`${parseInt(messageObject.sender) === senderID}`}>
                                        {messageObject.message}
                                    </ChatContentDiv>
                                    <ChatTimeDiv $ismine={`${parseInt(messageObject.sender) === senderID}`}>
                                        {messageObject.time}
                                    </ChatTimeDiv>
                                </ChatContentDivWrapper>
                            )
                        })
                    }
                </ChatContentsContainer>
            </ChatContents>
        </>
    )
}