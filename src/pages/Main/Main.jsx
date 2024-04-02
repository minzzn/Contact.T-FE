import { useState } from "react";
import { Container } from "../../css/styled/Main/main.styled";
import { users } from "../../constant/user.data";
import { Header } from "../../components/common/Header";
import { UserAndChat } from "./Sub/UserAndChat";
import { House } from "./Sub/House";
import { AddInfoModal } from "../../components/Profile/AddInfo/AddInfoModal";
import { SetProfile } from "../../components/Profile/SetProfile";

export const Main = () => {
    const [isFirst, setIsFirst] = useState(true);
    const [iconsState, setIconsState] = useState({
        chatList: false,
        peopleList: true,
        setProfile: false,
        house: false
    });
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

    return (
        <>
            <Container>
                {/* 헤더 */}
                <Header setIsChatContentActive={setIsChatContentActive} setIconsState={setIconsState} iconsState={iconsState} />
                {/* 톱니바퀴를 클릭하면 차트 페이지 / 유저아이콘이나 카톡 아이콘을 누르면 사람 목록 또는 채팅목록 활성화 */}
                {
                    iconsState["house"] === true ? 
                    (
                        // todo : home화면 컴포넌트 필요
                        <House />
                    )
                    : ( iconsState["setProfile"] === true
                        ? <SetProfile closeModal={closeModal}/> 
                        : (
                            <>
                                {/* 채팅목록과 채팅영역을 보여주는 컴포넌트 */}
                                <UserAndChat isChatContentActive={isChatContentActive} setIsChatContentActive={setIsChatContentActive} USERS={USERS} iconsState={iconsState} />                     
                            </>
                        )
                        
                      )
                }

            </Container>
            {/* 유저가 처음으로 회원가입한 경우일때는, 추가정보 입력 모달 화면을 띄워줍니다 */}
            {
                isFirst && <AddInfoModal setIsFirst={setIsFirst}/>
            }
        </>
    )
}


