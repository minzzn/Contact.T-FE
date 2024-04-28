import { useState } from "react";
import { ViewList } from "../../../components/Main/ViewList"
import { ChattingPane } from "../../../components/Main/Chat/ChattingPane";
import styled from "styled-components"

export const UserAndChat = ({ setIsChatContentActive, isChatContentActive, USERS, iconsState }) => {
    const [choosedUser, setChoosedUser] = useState(null);

    return (
        <>
            <UserandchatContainer>
                <ViewList setIsChatContentActive={setIsChatContentActive} users={USERS} setChoosedUser={setChoosedUser} iconsState={iconsState} />
                {
                    isChatContentActive ? (
                        <ChattingPane className="right-pane" userdata={choosedUser}/>
                    ) : null
                }
            </UserandchatContainer>
        </>
    )
}

export const UserandchatContainer = styled.div`
    display: flex;
    flex-direction: row;
`