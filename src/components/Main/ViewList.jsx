import { PeopleListBox } from "./PeopleListBox";
import { ChatListBox } from "./ChatListBox";
import { ChatAndPeopleListContainer } from "../../css/styled/Main/main.styled";

{/* index 값은 map함수의 파라미터, 사용할 데이터와 분리해서 적을것 */}
export const ViewList = ({ setIsChatContentActive, users, setChoosedUser, iconsState }) => {

    return (
        <ChatAndPeopleListContainer className="main-middle-pane">
            {
                iconsState["chatList"] ? (
                    users.map((user,idx) => <ChatListBox user={user} setChoosedUser={setChoosedUser} setIsChatContentActive={setIsChatContentActive} key={idx} />)
                ) : (
                    users.map((user,idx) => <PeopleListBox username={user.name} userimg={user.profileImg} key={idx}/>)
                )
            }
        </ChatAndPeopleListContainer>
    )
}