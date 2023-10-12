import { ChatContentDiv, ChatContentsContainer } from "../css/styled/chatContentsBox.styled"

export const ChatContentsBox = ({ chatsHistory }) => {

    return (
        <>
            <ChatContentsContainer>
                {
                    chatsHistory && chatsHistory.map((content,idx) => {
                        return (
                            <>
                                <ChatContentDiv key={idx}>
                                    {content}
                                </ChatContentDiv>
                            </>
                        )
                    })
                }
            </ChatContentsContainer>
        </>
    )
}