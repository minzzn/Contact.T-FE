import { useState } from "react";
import { Container } from "../css/styled/Main/main.styled";
import { ChattingPane } from "../components/Main/Chat/ChattingPane";
import { users } from "../constant/user.data";
import { ViewList } from "../components/ViewList";
import { Header } from "../components/common/Header";

export const Main = () => {
    const [isChatListActive, setIsChatListActive] = useState(false);
    const [isChatContentActive, setIsChatContentActive] = useState(false);
    const [choosedUser, setChoosedUser] = useState(null);
    
    // 서버로부터 받아온 데이터라고 가정
    const USERS = users;

    console.log(choosedUser);

    return (
        <>
            <Container>
                {/* 헤더 */}
                <Header setIsChatContentActive={setIsChatContentActive} setIsChatListActive={setIsChatListActive} isChatListActive={isChatListActive} />
                
                {/* 채팅 목록 리스트 */}
                <ViewList isChatListActive={isChatListActive} setIsChatContentActive={setIsChatContentActive} users={USERS} setChoosedUser={setChoosedUser} />

                {/* 채팅 치는 영역 */}
                {
                    isChatContentActive ? (
                        <ChattingPane className="right-pane" userdata={choosedUser}/>
                    ) : null
                }
            </Container>
        </>
    )
}


