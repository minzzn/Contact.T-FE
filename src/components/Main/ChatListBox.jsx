import { Container, ImgContainer, NameAndContentContainer, DateContainer } from "../../css/styled/Main/chatListBox.styled";

export const ChatListBox = ({username, profileimg}) => {
    // todo : 선택된 사람과 소켓통신 가능하도록 만들기

    return (
        <>
            <Container onClick={(e) => console.log(`${username}님이 클릭되었습니다. 채팅으로 진입합니다`)}>
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