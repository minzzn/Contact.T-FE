import { RequestContainer, RequestsContainer } from "../../css/styled/Bell/messages.style";
import { StyledIcon } from "../../css/styled/Main/main.styled";
import { getToken, getUserId } from "../../function/common";
import { createRoom } from "../../function/room.info";
import { RoomsState } from "../../hooks/roomsState";
import { sseEventState } from "../../hooks/sseEventState";
import { useRecoilState, useSetRecoilState } from "recoil";

export default function Messages({ isClicked }) {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;
    const [sseEvents, setSseEvents] = useRecoilState(sseEventState);
    const setRoomsState = useSetRecoilState(RoomsState);
    
    return (
        <>
        {/* position: absolute를 통해 Bell component를 기준으로 상대적 위치를 결정해줘야함 */}
            <RequestsContainer $isVisible={isClicked}>
                {
                    sseEvents.length > 0 ? (
                        sseEvents?.map((sseEvent, idx) => (
                            <RequestContainer key={idx}>
                                <h5>{sseEvent["parentName"]}</h5>
                                <StyledIcon className="fas fa-check" size="30px" $hoverColor="black" onClick={async () => {
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
                                            console.log(newData);

                                            return [...prevState, newData];
                                        });
                                    }
                                }} />
                            </RequestContainer>
                        ))
                    ) : (
                        <div style={{
                            width: "max-content",
                        }}>
                            <h6>더 이상 요청이 없습니다</h6>
                        </div>
                    )
                }
            </RequestsContainer>
        </>
    )
}