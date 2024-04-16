import { useEffect, useState } from "react";
import { Container } from "../../css/styled/Main/main.styled";
import { users } from "../../constant/user.data";
import { Header } from "../../components/common/Header";
import { UserAndChat } from "./Sub/UserAndChat";
import { House } from "./Sub/House";
import { AddInfoModal } from "../../components/Profile/AddInfo/AddInfoModal";
import { SetProfile } from "../../components/Profile/SetProfile";
import { IconState } from "../../hooks/iconState";
import { useRecoilState } from "recoil";
import { WrappingReactFragment } from "../../function/common";

export const Main = () => {
    const [iconsState, setIconsState] = useRecoilState(IconState);
    const [isFirst, setIsFirst] = useState(false);
    // 채팅치는 공간 상태관리
    const [isChatContentActive, setIsChatContentActive] = useState(false);
    // 서버로부터 받아온 데이터라고 가정 : dummy data
    const USERS = users;

    const closeModal = () => {
        setIconsState(()=> ({
            chatList: true,
            peopleList: false,
            setProfile: false,
            house: false,
        }));
    };

    useEffect(() => {
        // 첫 렌더링때, modal을 안띄우기 위한 role값 체크부분
    }, [])

    return (    
        <>
            <Container>
                {/* 헤더 */}
                <Header setIsChatContentActive={setIsChatContentActive} />
                {/* 톱니바퀴를 클릭하면 차트 페이지 / 유저아이콘이나 카톡 아이콘을 누르면 사람 목록 또는 채팅목록 활성화 */}
                {
                    Object.keys(iconsState).map((iconName,idx) => {
                        // todo : userIcon, setProfileIcon, houseIcon은 리턴이 안됨. 아마 setState를 통해 상태갱신을 true로 변환을 안 해줬기 때문인듯 : 해결해야함 - header내부 참고
                        if(iconsState[iconName]) {
                            switch(iconName) {
                                case "house":
                                    return WrappingReactFragment(<House />,idx)
                                case "setProfile":
                                    return WrappingReactFragment(<SetProfile closeModal={closeModal} />,idx)
                                default:
                                    return WrappingReactFragment(<UserAndChat isChatContentActive={isChatContentActive} setIsChatContentActive={setIsChatContentActive} USERS={USERS} iconsState={iconsState} />,idx)
                            }
                        }
                    })
                }
            </Container>
            {/* 유저가 처음으로 회원가입한 경우일때는, 추가정보 입력 모달 화면을 띄워줍니다 */}
            {
                isFirst && <AddInfoModal setIsFirst={setIsFirst}/>
            }
        </>
    )
}


