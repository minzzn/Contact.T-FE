import { Container, ImgContainer, NameAndContentContainer, DateContainer } from "../css/styled/chatListBox.styled";

export const ChatListBox = ({username}) => {


    return (
        <>
            <Container>
                <ImgContainer>
                    <p></p>
                </ImgContainer>
                <NameAndContentContainer>
                    <h2>{username}</h2>
                    <p>상태</p>
                </NameAndContentContainer>
                <DateContainer>
                    <p>어제</p>
                </DateContainer>
            </Container>
        </>
    )
}