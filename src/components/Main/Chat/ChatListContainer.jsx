import { useSetRecoilState } from "recoil";
import { Container, ImgContainer, NameAndContentContainer, DateContainer } from "../../../css/styled/Main/Chat/chatListBox.styled";
import { ToastifyInfo } from "../../../function/toast";
import { ChatActiveState } from "../../../hooks/chatActiveState";

export const ChatListContainer = ({ user, setChoosedUser }) => { 
    const setIsChatActive = useSetRecoilState(ChatActiveState);

    function clickEventFn() {
        setChoosedUser(user);
        setIsChatActive(true);
        ToastifyInfo('AI가 채팅을 분석하기 시작합니다🤖');
    }

    return (
        <>
            <Container onClick={clickEventFn}>
                <ImgContainer>
                    <img src={user.profileImg} alt="profile-img" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                </ImgContainer>
                <NameAndContentContainer>
                    <h2>{user.name}</h2>
                    <p>상태</p>
                </NameAndContentContainer>
                <DateContainer>
                    <p>어제</p>
                </DateContainer>
            </Container>
        </>
    )
}