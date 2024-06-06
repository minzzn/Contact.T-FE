import { ChatContainer } from "../../../css/styled/Main/Chat/chattingPane.style"
import { ChatHeader } from "./ChatHeader";
import { Chat } from "./Chat";
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilValue } from "recoil";
import { ChatActiveState } from "../../../hooks/chatActiveState";

export const ChattingPane = ({ choosedUserRoomInfo }) => {
    const isChatActive = useRecoilValue(ChatActiveState);

    return (
        <> 
            <>
                {/* 메인페이지 : 우측 : 채팅내역들과 채팅 입력 칸이 존재하는 공간 */}
                <ChatContainer $isChatActive={isChatActive}>
                    {/* 헤더 : 높이 10vh 설정 */}
                    <ChatHeader choosedUserRoomInfo={choosedUserRoomInfo} />
                    {/* 채팅 내역들이 보여지는 곳 : 높이 90vh로 설정 */}
                    <Chat choosedUserRoomInfo={choosedUserRoomInfo} />
                </ChatContainer >
            </>
        </>
    )
}