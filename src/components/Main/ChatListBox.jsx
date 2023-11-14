import { Container, ImgContainer, NameAndContentContainer, DateContainer, ChatListBoxLink } from "../../css/styled/chatListBox.styled";

export const ChatListBox = ({username, profileimg, onClick}) => { 
// 함수도 객체이므로 props로 전달 가능   

    return (
        <>
            <Container onClick={onClick}>
                <ImgContainer>
                    <img src={profileimg} alt="profile-img" style={{objectFit: "coveer", width: "100%", height: "100%"}}/>
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