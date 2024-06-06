import { useSetRecoilState } from "recoil";
import { Container, ImgContainer, NameAndContentContainer } from "../../../css/styled/Main/Chat/chatListBox.styled";
import { ToastifyError, ToastifyInfo, ToastifyWarn } from "../../../function/toast";
import { ChatActiveState } from "../../../hooks/chatActiveState";
import { getRole } from "../../../function/common";

export const ChatListContainer = ({ user, setChoosedUser }) => { 
    const setIsChatActive = useSetRecoilState(ChatActiveState);
    const role = getRole();

    function clickEventFn() {
        if(user["isChatable"]) {
            setChoosedUser(user);
            setIsChatActive(true);
            ToastifyInfo('AI가 채팅을 분석하기 시작합니다🤖');
        } else {
            role === "TEACHER" ? ToastifyWarn("채팅 가능 시각 설정을 먼저해주세요") : ToastifyError('현재 채팅이 불가능합니다');
        }
    }

    return (
        <>
            <Container onClick={clickEventFn}>
                <ImgContainer>
                    <img src={user.profileImg} alt="profile-img" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                </ImgContainer>
                <NameAndContentContainer>
                    <h2>{user.name}</h2>
                </NameAndContentContainer>
            </Container>
        </>
    )
}