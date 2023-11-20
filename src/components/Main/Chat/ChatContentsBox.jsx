import { ChatContents } from "../../../css/styled/Main/Chat/chat.style"
import { ChatContentDiv, ChatContentsContainer, ChatContentDivWrapper } from "../../../css/styled/Main//Chat/chatContentsBox.styled.js"

export const ChatContentsBox = ({ chatsHistory }) => {

    return (
        <>
            <ChatContents>
                <ChatContentsContainer>
                    {
                        chatsHistory?.map((content,idx) => {
                            return (
                                <ChatContentDivWrapper key={idx}>
                                    <ChatContentDiv ismine={true}>
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