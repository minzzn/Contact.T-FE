import { ChatContents } from "../../../css/styled/Main/Chat/chat.style"
import { ChatContentDiv, ChatContentsContainer, ChatContentDivWrapper } from "../../../css/styled/Main//Chat/chatContentsBox.styled.js"

/**
 * 배열과 불리언값 두 개를 props로 Chat component로부터 받아옵니다
 * @param {array} [이전채팅내용들 + 사용자가 입력한 챗 내용] 
 * @param {boolean} 내가 보낸건지 구분짓는 변수
 * @returns 없음
 */
export const ChatContentsBox = ({ chatsHistory, isMine }) => {
    console.log(typeof isMine);

    return (
        <>
            <ChatContents>
                <ChatContentsContainer $ismine={isMine}>
                    {
                        chatsHistory?.map((messageObj,idx) => {
                            return (
                                <ChatContentDivWrapper key={idx} $ismine={isMine}>
                                    <ChatContentDiv $ismine={isMine}>
                                        {messageObj.chat}
                                    </ChatContentDiv>
                                </ChatContentDivWrapper>
                            )
                        })
                    }
                </ChatContentsContainer>
            </ChatContents>
        </>
    )
}