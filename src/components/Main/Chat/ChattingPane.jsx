import { ChatContainer } from "../../../css/styled/Main/Chat/chattingPane.style"
import { ChatHeader } from "./ChatHeader";
import { Chat } from "./Chat";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * ViewList(유저목록 or 채팅목록)로부터 채팅할 유저를 선택하면 이쪽으로 선택된 유저 정보 넘김
 * @param {object} userdata 
 * @returns <ChatHeader>, <Chat>
 */
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
            <ToastContainer />
        </>
    )
}