import { useState } from "react";
import { ViewList } from "../../../components/Main/ViewList"
import { ChattingPane } from "../../../components/Main/ChattingPane";

export const UserAndChat = ({ isChatListActive, setIsChatContentActive, isChatContentActive, USERS }) => {
    const [choosedUser, setChoosedUser] = useState(null);

    return (
        <>
            <ViewList isChatListActive={isChatListActive} setIsChatContentActive={setIsChatContentActive} users={USERS} setChoosedUser={setChoosedUser} />
            {
                isChatContentActive ? (
                    <ChattingPane className="right-pane" userdata={choosedUser}/>
                ) : null
            }
        </>
    )
}