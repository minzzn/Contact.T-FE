import { useState } from "react";
import { Container } from "../../css/styled/Main/main.styled";
import { ChattingPane } from "../../components/Main/ChattingPane";
import { users } from "../../constant/user.data";
import { ViewList } from "../../components/Main/ViewList";
import { Header } from "../../components/common/Header";
import { UserAndChat } from "./Sub/UserAndChat";

export const Main = () => {
    const [isChatListActive, setIsChatListActive] = useState(false);
    const [isChatContentActive, setIsChatContentActive] = useState(false);
    const [isGearActive, setIsGearActive] = useState(false);

    // 서버로부터 받아온 데이터라고 가정
    const USERS = users;

    return (
        <>
            <Container>
                {/* 헤더 */}
                <Header setIsChatContentActive={setIsChatContentActive} setIsChatListActive={setIsChatListActive} isChatListActive={isChatListActive} />
                
                {/* 채팅목록과 채팅영역을 보여주는 컴포넌트 */}
                <UserAndChat isChatListActive={isChatListActive} isChatContentActive={isChatContentActive} setIsChatContentActive={setIsChatContentActive} USERS={USERS} />

            </Container>
        </>
    )
}


