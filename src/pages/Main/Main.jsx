import { useEffect, useState } from "react";
import { Container, HeaderAndListContainer } from "../../css/styled/Main/main.styled";
import { Header } from "../../components/common/Header";
import { UserAndChat } from "./Sub/UserAndChat";
import { House } from "./Sub/House";
import { AddInfoModal } from "../../components/AddInfo/AddInfoModal";
import { SetProfile } from "../../components/Profile/SetProfile";
import { IconsState } from "../../hooks/iconsState";
import { useRecoilState } from "recoil";
import { getRole, getUserId, openChatRoom, WrappingReactFragment } from "../../function/common";

export const Main = () => {
    const [iconsState, setIconsState] = useRecoilState(IconsState);
    const [isFirst, setIsFirst] = useState(false);

    const closeModal = () => {
        setIconsState(()=> ({
            chatList: true,
            peopleList: false,
            setProfile: false,
            house: false,
        }));
    };

    useEffect(() => {
        if(getRole() === "GUEST") {
            setIsFirst(true);
        } else {
            setIsFirst(false);
        }
    }, []);

    useEffect(() => {
        openChatRoom(getUserId());
        console.log('여기');
    }, [isFirst]);

    return (    
        <>
            <Container>
                <HeaderAndListContainer>
                    <Header />
                    {/* 톱니바퀴를 클릭하면 차트 페이지 / 유저아이콘이나 카톡 아이콘을 누르면 사람 목록 또는 채팅목록 활성화 */}
                    {
                        Object.keys(iconsState).map((iconName,idx) => {
                            // todo : userIcon, setProfileIcon, houseIcon은 리턴이 안됨. 아마 setState를 통해 상태갱신을 true로 변환을 안 해줬기 때문인듯 : 해결해야함 - header내부 참고
                            if(iconsState[iconName]) {
                                switch(iconName) {
                                    case "house":
                                        return WrappingReactFragment(<House />,idx);
                                    case "setProfile":
                                        return WrappingReactFragment(<SetProfile closeModal={closeModal} />,idx);
                                    case "chatList":
                                        return WrappingReactFragment(<UserAndChat />,idx);
                                    case "peopleList":
                                        return WrappingReactFragment(<UserAndChat />,idx);
                                    default:
                                        return null;
                                }
                            }
                        })
                    }
                </HeaderAndListContainer>
            </Container>
            {/* 유저가 처음으로 회원가입한 경우일때는, 추가정보 입력 모달 화면을 띄워줍니다 */}
            {
                isFirst && <AddInfoModal setIsFirst={setIsFirst}/>
            }
        </>
    )
}


