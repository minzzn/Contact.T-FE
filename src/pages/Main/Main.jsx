import { useState } from "react";
import { Container } from "../../css/styled/Main/main.styled";
import { users } from "../../constant/user.data";
import { Header } from "../../components/common/Header";
import { UserAndChat } from "./Sub/UserAndChat";
import { House } from "./Sub/House";

export const Main = () => {
    // 
    const [iconsState, setIconsState] = useState({
        chatList: false,
        peopleList: true,
        house: false
    });
    
    // 채팅치는 공간 상태관리
    const [isChatContentActive, setIsChatContentActive] = useState(false);

    // 서버로부터 받아온 데이터라고 가정
    const USERS = users;

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
                    ) : 
                    (
                        <>
                            {/* 채팅목록과 채팅영역을 보여주는 컴포넌트 */}
                            <UserAndChat isChatContentActive={isChatContentActive} setIsChatContentActive={setIsChatContentActive} USERS={USERS} iconsState={iconsState} />                     
                        </>
                    )
                }

            </Container>
        </>
    )
}


