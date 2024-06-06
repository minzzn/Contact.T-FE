import { RequestContainer, RequestsContainer, StyleIconInMessage } from "../../css/styled/Bell/messages.style";
import { getToken, getUserId } from "../../function/common";
import { createRoom } from "../../function/room.info";
import { ToastifySuccess, ToastifyWarn } from "../../function/toast";
import { IconsState } from "../../hooks/iconsState";
import { RoomsState } from "../../hooks/roomsState";
import { sseEventState } from "../../hooks/sseEventState";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function Messages() {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;
    const [sseEvents, setSseEvents] = useRecoilState(sseEventState);
    const [iconsState, setIconsState] = useRecoilState(IconsState);
    const setRoomsState = useSetRecoilState(RoomsState);

    async function handleAcceptFriend(sseEvent) {
        const response = await fetch(`http://${BACKEND_URL}/friends/accept`, {
            method: "POST",
            headers: {
                "Authorization": `${getToken()}`,
                // 유저 정보를 JSON형태로 보내기 위한 request
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                teacherUserId: getUserId(),
                parentUserId: sseEvent["parentId"]
            })
        });

        if(response) {
            setSseEvents(prevStates => prevStates.filter(state => state["parentId"] !== sseEvent["parentId"]));
            setRoomsState(async (prevState) => {
                const newData = await createRoom(sseEvent["parentId"]);

                return [...prevState, newData];
            });
            ToastifySuccess("추가 성공");
        }
    }

    function handleRefuseFriend(idxOfSseEvent) {
        const result = confirm("정말 거절하겠습니까?");

        if(result) {
            // 현재 지우고자 하는 유저의 인덱스에 해당하는거를 제외하고 새로운 상태로 갱신
            setSseEvents(prevSseEvent => prevSseEvent.filter((_, index) => index !== idxOfSseEvent));
            ToastifyWarn("삭제 성공");
        }
    }

    function handleCloseMessageModal() {
        setIconsState(prevIconsState => ({
            ...prevIconsState,
            bell: false
        }));
    }
    
    return (
        <>
        {/* position: absolute를 통해 Bell component를 기준으로 상대적 위치를 결정해줘야함 */}
            <RequestsContainer $isVisible={iconsState["bell"]}>
                {
                    sseEvents.length > 0 ? (
                        sseEvents?.map((sseEvent, idx) => (
                            <RequestContainer key={idx}>
                                <div>
                                    <StyleIconInMessage className="fa-solid fa-circle-check" onClick={() => handleAcceptFriend(sseEvent)} style={{
                                        marginRight: "15px"
                                    }}/>
                                    <StyleIconInMessage className="fa-solid fa-trash-can" onClick={() => handleRefuseFriend(idx)} />
                                </div>
                                <h6 style={{
                                    marginLeft: "35px",
                                    marginTop: "5px"
                                }}>{sseEvent["parentName"]}</h6>
                            </RequestContainer>
                        ))
                    ) : (
                        <RequestContainer>
                            <StyleIconInMessage className="fa-solid fa-circle-xmark" onClick={handleCloseMessageModal} />
                            <h6 style={{
                                marginLeft: "45px"
                            }}>요청이 없습니다</h6>
                        </RequestContainer>
                    )
                }
            </RequestsContainer>
        </>
    )
}