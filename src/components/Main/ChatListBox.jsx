import { Container, ImgContainer, NameAndContentContainer, DateContainer } from "../../css/styled/Main/chatListBox.styled";

export const ChatListBox = ({username, profileimg}) => {
    

    return (
        <>
            <Container>
                <ImgContainer>
                    <img src={profileimg} alt="profile-img" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
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