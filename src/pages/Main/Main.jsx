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
import { getRoomInfo } from "../../function/room.info";
import { openSseArea } from "../../function/addInfo";
import { sseEventState } from "../../hooks/sseEventState";
import { RoomsState } from "../../hooks/roomsState";
import img1 from "../../../public/assets/profile.png";
import defaultImg from "../../../public/assets/profile.png";
import { getDutyState } from '../../function/setprofile.js';


export const Main = () => {
    const [iconsState, setIconsState] = useRecoilState(IconsState);
    const [isFirst, setIsFirst] = useState(false);
    const setSseEventData = useSetRecoilState(sseEventState);
    const setRoomsState = useSetRecoilState(RoomsState);
    const [isUpdatingNow, setIsUpdatingNow] = useState(false);
    const [teachersDutyStates, setTeachersDutyStates] = useState([]); // 선생님들의 근무 상태 정보를 저장할 state
    const role = getRole() === "TEACHER" ? "선생님" : "학부모";

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
        if(getRole() === "TEACHER") {
            const eventSource = openSseArea(getUserId());

            // SSE 연결이 성공적으로 설정된 후에 호출되는 함수
            eventSource.onopen = function(event) {
                // 콘솔에 채팅방이 열렸음을 알리는 메시지 출력
                console.log('SSE event area opened!');
            };
            // SSE 이벤트 수신 시 처리할 함수
            eventSource.addEventListener('sse', event  => {
                // 받은 이벤트 데이터는 파싱하지 않고 바로 사용하면 됩니다.
                if (event.data.trim().startsWith('{')) {
                    // JSON 형식이라면 파싱하여 상태에 추가
                    setSseEventData(prevState => [...prevState, JSON.parse(event.data)]);
                } else {
                    // 첫 번째 더미데이터는 그냥 무시
                    console.log(event.data);
                }
            });

            // SSE 연결이 끊어졌을 때 처리할 함수
            eventSource.onerror = function(error) {
                // 오류 처리
                console.error('SSE 연결 오류:', error);
                // SSE 연결 오류 처리
            };
        }
    }, [isFirst]);

    useEffect(() => {
        const handleGetRoomInfo = async () => {
            try {
                setIsUpdatingNow(!isUpdatingNow);
                const roomInfos = await getRoomInfo();
    
                // UI 표현을 위해 억지로 timeout 걸기
                setTimeout(async () => { // 이 부분을 async 함수로 변경
                    setIsUpdatingNow(prevState => !prevState);
    
                    // 역할에 따라서 roomsState 업데이트
                    if (role === "선생님" && roomInfos.length) {
                        const newRoomsState = roomInfos.map(roomInfo => ({
                            userId: roomInfo.parentUserId,
                            name: roomInfo.parentName,
                            roomId: roomInfo.roomId,
                            img: img1,
                            profileImg: defaultImg
                        }));
                        setRoomsState(newRoomsState);
                    } else if (role === "학부모" && roomInfos.length) {
                        const newRoomsState = await Promise.all(roomInfos.map(async (roomInfo) => {
                            let duty = false; // 기본값 설정
                            let workStart = "";
                            let workEnd = "";
                            try {
                                const { duty: fetchedDuty, workStart: fetchedWorkStart, workEnd: fetchedWorkEnd } = await getDutyState(roomInfo.teacherUserId);
                                // 근무 상태 정보가 존재하는 경우에만 업데이트
                                if (fetchedDuty !== undefined) {
                                    duty = fetchedDuty;
                                    workStart = fetchedWorkStart || "";
                                    workEnd = fetchedWorkEnd || "";
                                }
                            } catch (err) {
                                console.error("근무 상태 가져오기 오류:", err);
                                // 오류 발생 시 기본값 유지
                            }
                            
                            return {
                                userId: roomInfo.teacherUserId,
                                name: roomInfo.teacherName,
                                roomId: roomInfo.roomId,
                                img: img1,
                                profileImg: defaultImg,
                                // 근무 상태 정보를 속성으로 추가
                                duty: duty,
                                workStart: workStart,
                                workEnd: workEnd,
                            };
                        }));
                        setRoomsState(newRoomsState);
                        console.log(newRoomsState); // 디버깅용 로그
                    }
                }, 1500);
            } catch (error) {
                console.error("Error fetching room info:", error);
                setIsUpdatingNow(prevState => !prevState);
            }
        };

        handleGetRoomInfo();
    }, []);

    return (    
        <>
            <Container>
                <HeaderAndListContainer>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }} className="temporary-header-wrapper">
                        <Header />
                    </div>
                    {/* 톱니바퀴를 클릭하면 차트 페이지 / 유저아이콘이나 카톡 아이콘을 누르면 사람 목록 또는 채팅목록 활성화 */}
                    {
                        Object.keys(iconsState).map((iconName,idx) => {
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


