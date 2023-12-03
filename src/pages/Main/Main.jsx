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

export const Main = () => {
    const [isFirst, setIsFirst] = useState(true);
    const [iconsState, setIconsState] = useState({
        setProfile: false,
        chatList: false,
        peopleList: true,
        house: false
    });
    // 채팅치는 공간 상태관리
    const [isChatContentActive, setIsChatContentActive] = useState(false);
    // 서버로부터 받아온 데이터라고 가정
    const USERS = users;
    // recoil
    const [, setUserInfo] = useRecoilState(isUserInfoAtom);

    // 첫 진입 시에 entry api 사용
    useEffect(() => {
        // 로그인 버튼 누를때 유저 정보 받아오려고 하면 서버와의 통신시간 딜레이가 존재해서 바로 안 받아와짐 -> 메인페이지 랜더링 되면 유저 정보를 토큰기반으로 들고옴
        const entryRequest = getUserInfoWithToken(getToken());
        // 만약 유저 정보가 존재하면, ROLE_GUEST인지 여부 확인 -> 맞으면 추가정보 입력 모달 띄우기
        entryRequest.then((entryResponse) => {
            console.log(entryResponse);
            if(entryResponse.role === "ROLE_GUEST") {
                setIsFirst(true);
            } else {
                setIsFirst(false);
            }
            // role여부와는 상관없이 entry api로 들어온 유저 정보는 recoil 상태관리에 올려두기
            setUserInfo(entryResponse);
        }).catch((error) => console.error(error));
    }, []);

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
            {
                isFirst && <AddInfoModal />
            }
        </>
    )
}


