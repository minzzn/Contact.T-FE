import { ChatContents } from "../../../css/styled/Main/Chat/chat.style"
import { ChatContentDiv, ChatContentsContainer, ChatContentDivWrapper } from "../../../css/styled/Main//Chat/chatContentsBox.styled.js"

export const ChatContentsBox = ({ chatsHistory, isMine }) => {
    console.log(isMine);

    return (
        <>
            <ChatContents>
                <ChatContentsContainer $ismine={`${isMine}`}>
                    {
                        chatsHistory?.map((content,idx) => {
                            return (
                                <ChatContentDivWrapper key={idx}>
                                    <ChatContentDiv $ismine={`${isMine}`}>
                                        {content}
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