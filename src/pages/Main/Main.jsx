import { useEffect, useState } from "react";
import { Container, HeaderAndListContainer } from "../../css/styled/Main/main.styled";
import { Header } from "../../components/common/Header";
import { UserAndChat } from "./Sub/UserAndChat";
import { House } from "./Sub/House";
import { AddInfoModal } from "../../components/AddInfo/AddInfoModal";
import { SetProfile } from "../../components/Profile/SetProfile";
import { IconsState } from "../../hooks/iconsState";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getRole, getUserId, WrappingReactFragment } from "../../function/common";
import { openSseArea } from "../../function/addInfo";
import { sseEventState } from "../../hooks/sseEventState";

export const Main = () => {
    const [iconsState, setIconsState] = useRecoilState(IconsState);
    const [isFirst, setIsFirst] = useState(false);
    const setSseEventData = useSetRecoilState(sseEventState);

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
        if(getRole() === "TEACHER" && !isFirst) {
            const eventSource = openSseArea(getUserId());

            // SSE 이벤트 수신 시 처리할 함수
            eventSource.addEventListener('sse', event  => {
                // 받은 이벤트 데이터는 파싱하지 않고 바로 사용하면 됩니다.
                setSseEventData(prevState => [...prevState, event.data]);
            });

            // SSE 연결이 끊어졌을 때 처리할 함수
            eventSource.onerror = function(error) {
                // 오류 처리
                console.error('SSE 연결 오류:', error);
                // SSE 연결 오류 처리
            };
        }
    }, []);

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


