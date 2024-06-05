import { useRecoilState, useSetRecoilState } from "recoil";
import { StyledIcon } from "../../css/styled/Main/main.styled";
import { HeaderContainer } from "../../css/styled/common/header.styled";
import { IconsState } from "../../hooks/iconsState";
import { ChatActiveState } from "../../hooks/chatActiveState";
import { Bell } from "../Bell/Bell";
import HoverIcon from "./HoverIcon";
import { useState } from "react";
import { getRole} from "../../function/common";
import { getRoomInfo } from "../../function/room.info";
import { RoomsState } from "../../hooks/roomsState";
import img1 from "../../../public/assets/profile.png";
import defaultImg from "../../../public/assets/profile.png";
import Role from "./Role";
import { ToastifyError, ToastifySuccess } from "../../function/toast";

export const Header = () => {
    const [iconsState, setIconsState] = useRecoilState(IconsState);
    const setIsChatActive = useSetRecoilState(ChatActiveState);
    const [isHovered, setIsHovered] = useState(false);
    const setRoomsState = useSetRecoilState(RoomsState);
    const [isUpdatingNow, setIsUpdatingNow] = useState(false);
    const role = getRole() === "TEACHER" ? "선생님" : "학부모";

    const handleGetRoomInfo = async () => {
        try {
            setIsUpdatingNow(!isUpdatingNow);
            const roomInfos = await getRoomInfo();

            // UI 표현을 위해 억지로 timeout 걸기
            setTimeout(() => {
                setIsUpdatingNow(prevState => !prevState);
                
                if(!roomInfos.length) {
                    ToastifyError("연결된 사용자 목록이 없습니다");
                } else {
                    ToastifySuccess("사용자 목록 업데이트 성공!");
                }

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
                } else if (role === "PARENT" && roomInfos.length) {
                    const newRoomsState = roomInfos.map(roomInfo => ({                     
                                userId: roomInfo.teacherUserId,
                                name: roomInfo.teacherName,
                                roomId: roomInfo.roomId,
                                img: img1,
                                profileImg: defaultImg
                    }));
                    setRoomsState(newRoomsState);
                }
            }, 1500);
        } catch (error) {
            console.error("Error fetching room info:", error);
            setIsUpdatingNow(prevState => !prevState);
        }
    };

    function handleMouseEnterOrLeave() {
        setIsHovered(!isHovered);
    }

    return (
        <HeaderContainer>
            <div 
                className="temporary_wrapper" 
                style={{
                    whiteSpace: "nowrap",
                }}
            >
                <Role />
                <StyledIcon className="fas fa-user" size='30px' onClick={()=> {
                    setIsChatActive(false);
                    setIconsState(()=> ({
                        chatList: false,
                        peopleList: true,
                        setProfile: false,
                        house: false,
                        bell: false
                    }));
                }} $selected={iconsState["peopleList"] === true ? 'true' : 'false'} />
                <StyledIcon className="fas fa-comment" size="30px" onClick={()=> {
                    setIsChatActive(false);
                    setIconsState(()=> ({
                        chatList: true,
                        peopleList: false,
                        setProfile: false,
                        house: false,
                        bell: false
                    }));
                }} $selected={iconsState["chatList"] === true ? 'true' : 'false'} />
            </div>
        
            <div className="temporary_wrapper"  style={{
                position: "relative"
            }}>
                <HoverIcon isVisible={isHovered}/>
                <StyledIcon className="fa-solid fa-rotate" size="30px" onClick={() => handleGetRoomInfo()} 
                    onMouseEnter={handleMouseEnterOrLeave}
                    onMouseLeave={handleMouseEnterOrLeave}
                    $isUpdating={isUpdatingNow}
                />
            </div>

            <div className="temporary_wrapper" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Bell />

                {/* role이 선생님일때만 보이도록(근무 상태 설정 가능하도록) */}
                {role === "TEACHER" && (
                    <StyledIcon 
                        className="fa-solid fa-clock" 
                        size="30px" 
                        onClick={() => {
                            setIconsState(() => ({
                                chatList: false,
                                peopleList: false,
                                setProfile: true,
                                house: false,
                                bell: false
                            }));
                        }} 
                        $selected={iconsState["setProfile"] === true ? 'true' : 'false'}
                    />
                )}
    
                {/* 메인 공간 : 차트, 알림 등등 보여주기 */}
                <StyledIcon className="fa-solid fa-house" size="30px" onClick={() => {
                    setIconsState(()=> ({
                        chatList: false,
                        peopleList: false,
                        setProfile: false,
                        house: true,
                        bell: false
                    }));
                }} $selected={iconsState["house"] === true ? 'true' : 'false'}/>
            </div>   
        </HeaderContainer>
    )
}