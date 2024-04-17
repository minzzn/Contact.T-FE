import { useState } from "react";
import { ViewList } from "../../../components/Main/ViewList"
import { ChattingPane } from "../../../components/Main/Chat/ChattingPane";

export const UserAndChat = () => {
    const [choosedUser, setChoosedUser] = useState(null);

    return (
        <>
            <ViewList setChoosedUser={setChoosedUser} />
            <ChattingPane userdata={choosedUser} />
        </>
    )
}