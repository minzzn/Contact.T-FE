import { PeopleListBox } from "./People/PeopleListBox";
import { ChatListBox } from "./Chat/ChatListBox";
import { ChatAndPeopleListContainer } from "../../css/styled/Main/main.styled";

{/* index 값은 map함수의 파라미터, 사용할 데이터와 분리해서 적을것 */}
export const ViewList = ({ setIsChatContentActive, users, setChoosedUser, iconsState }) => {

    return (
        <ChatAndPeopleListContainer className="main-middle-pane">
            {
                iconsState["chatList"] ? (
                    users.map((user,idx) => <ChatListBox user={user} setChoosedUser={setChoosedUser} setIsChatContentActive={setIsChatContentActive} key={idx} />)
                ) : (
                    users.map((user,idx) => <PeopleListBox user={user} setChoosedUser={setChoosedUser} setIsChatContentActive={setIsChatContentActive} key={idx}/>)
                )
            }
        </ChatAndPeopleListContainer>
    )
}