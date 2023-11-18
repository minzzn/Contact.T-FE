import { ChatContainer } from "../../../css/styled/Main/chattingPane.style"
import { ChatHeader } from "../ChatHeader";
import { Chat } from "./Chat";

// 선택된 유저 데이터를 props로 받으면
export const ChattingPane = ({userdata}) => {
    
    return (
        <>  
            {/* 메인페이지 : 우측 : 채팅내역들과 채팅 입력 칸이 존재하는 공간 */}
            <ChatContainer>
                {/* 헤더 : 높이 10vh 설정 */}
                <ChatHeader userdata={userdata} />
                {/* 채팅 내역들이 보여지는 곳 : 높이 90vh로 설정 */}
                <Chat />
            </ChatContainer>
        </>
    )
}