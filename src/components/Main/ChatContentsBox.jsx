import { ChatContentDiv, ChatContentsContainer, ChatContentDivWrapper } from "../../css/styled/chatContentsBox.styled"

export const ChatContentsBox = ({ chatsHistory }) => {

    return (
        <>
            <ChatContentsContainer>
                {
                    chatsHistory?.map((content,idx) => {
                        return (
                            <ChatContentDivWrapper key={idx}>
                                <ChatContentDiv>
                                    {content}
                                </ChatContentDiv>
                            </ChatContentDivWrapper>
                        )
                    })
                }
            </ChatContentsContainer>
        </>
    )
}