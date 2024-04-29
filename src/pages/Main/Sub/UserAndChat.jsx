import { useState } from "react";
import { ViewList } from "../../../components/Main/ViewList"
import { ChattingPane } from "../../../components/Main/Chat/ChattingPane";
import styled from "styled-components"

export const UserAndChat = () => {
    const [choosedUser, setChoosedUser] = useState(null);

    return (
        <>
            <UserandchatContainer>
                <ViewList setChoosedUser={setChoosedUser} />
                <ChattingPane userdata={choosedUser} />
            </UserandchatContainer>
        </>
    )
}

export const UserandchatContainer = styled.div`
    display: flex;
    flex-direction: row;
`