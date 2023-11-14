import react, { useState }  from "react"
import { PeopleListBox } from "../components/Main/PeopleListBox";
import { ChatListBox } from "../components/ChatListBox";

export const ViewList = ({isChatListActive, users, userInfo}) => { {/* index 값은 map함수의 파라미터, 사용할 데이터와 분리해서 적을것 */}
    return (
        <>
            {
                isChatListActive ? (
                    users.map((user,idx) => <ChatListBox username={user} key={idx}/>)
                ) : (
                    userInfo.map(({username, userimg},idx) => <PeopleListBox username={username} userimg={userimg} key={idx}/>)
                )
            }
        </>
    )
}