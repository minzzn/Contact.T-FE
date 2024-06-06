import { useState } from "react";
import { ViewList } from "../../../components/Main/ViewList"
import { ChattingPane } from "../../../components/Main/Chat/ChattingPane";
import { UserAndChatContainer } from "../../../css/styled/Main/main.styled";
import { ToastContainer } from "react-toastify";

export const UserAndChat = () => {
    const [choosedUser, setChoosedUser] = useState(null);

    return (
        <>
            <UserAndChatContainer>
                <ViewList setChoosedUser={setChoosedUser} />
                <ChattingPane choosedUserRoomInfo={choosedUser} />
            </UserAndChatContainer>
            <ToastContainer />
        </>
    )
}

