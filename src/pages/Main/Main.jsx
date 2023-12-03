import { useEffect, useState } from "react";
import { Container } from "../../css/styled/Main/main.styled";
import { users } from "../../constant/user.data";
import { Header } from "../../components/common/Header";
import { UserAndChat } from "./Sub/UserAndChat";
import { House } from "./Sub/House";
import { AddInfoModal } from "../../components/Profile/AddInfo/AddInfoModal";
import { getToken, getUserInfoWithToken } from "../../function/common";
import { useRecoilState } from "recoil";
import { isUserInfoAtom } from "../../hooks/IsUserInfo";
import { SetProfile } from "../../components/Profile/SetProfile";

export const Main = () => {
    const [isFirst, setIsFirst] = useState(null);
    const [iconsState, setIconsState] = useState({
        chatList: false,
        peopleList: true,
        setProfile: false,
        house: false
    });
    // 채팅치는 공간 상태관리
    const [isChatContentActive, setIsChatContentActive] = useState(false);
    // 서버로부터 받아온 데이터라고 가정
    const USERS = users;
    // recoil
    const [userInfo, setUserInfo] = useRecoilState(isUserInfoAtom);

    // 첫 진입 시에 entry api 사용
    useEffect(() => {

        const entryFn = async() => {
            const entryResponse = await getUserInfoWithToken(getToken());

            entryResponse?.role === "ROLE_GUEST" ? setIsFirst(true) : setIsFirst(false);
            console.log(entryResponse);
            // recoil 전역상태관리에 유저 정보(entry 응답값) 올림
            setUserInfo(entryResponse);
        }

        entryFn();
    }, []);

    return (
        <>
            <Container>
                {/* 헤더 */}
                <Header setIsChatContentActive={setIsChatContentActive} setIconsState={setIconsState} iconsState={iconsState} />
                {/* 톱니바퀴를 클릭하면 차트 페이지 / 유저아이콘이나 카톡 아이콘을 누르면 사람 목록 또는 채팅목록 활성화 */}
                {
                    iconsState === true ? (
                        users.map((iconState,idx) => <ChatListBox user={user} setChoosedUser={setChoosedUser} setIsChatContentActive={setIsChatContentActive} key={idx} />)
                    ) : (
                        users.map((user,idx) => <PeopleListBox user={user} setChoosedUser={setChoosedUser} setIsChatContentActive={setIsChatContentActive} key={idx}/>)
                    )
                }
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
            {
                isFirst && <AddInfoModal />
            }
        </>
    )
}


