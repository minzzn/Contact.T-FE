import { ChatListBox } from "../components/Main/ChatListBox";
import { useState } from "react";
import { ChatIconsContainer, ChatAndPeopleListContainer, Container, IconsModalContainer, IconsWrapper, StyledIcon } from "../css/styled/Main/main.styled";
import { ChattingPane } from "../components/Main/Chat/ChattingPane";
import { PeopleListBox } from "../components/Main/PeopleListBox";
import { users } from "../constant/user.data";

export const Main = () => {
    const [isChatListActive, setIsChatListActive] = useState(false);
    const [isChatContentActive, setIsChatContentActive] = useState(false);//
    
    // 서버로부터 받아온 데이터라고 가정
    const USERS = users;
    const choosedUser = USERS[0];
    
    
    const onClick = () => {//
        console.log('active');
        setIsChatContentActive(true);
    };

    return (
        <>
            <Container>

                {/* 채팅 목록: 왼쪽 영역 */}
                <ChatIconsContainer className="left-pane">
                    <IconsModalContainer>
                        {/* 처음 진입하거나 왼쪽부분 사이즈를 줄이고 싶을때 */}
                        <IconsWrapper $flexDirection="column">

                                <div className="temporary_wrapper">
                                    <StyledIcon className="fas fa-user" size='30px' $marginBottom="2vh" onClick={()=> {
                                        setIsChatListActive(false);
                                    }} $ischatlistactive={`${!isChatListActive}`} />
                                    <StyledIcon className="fas fa-comment" size="30px" $marginBottom="75vh" onClick={()=> {
                                        setIsChatListActive(true);
                                    }} $ischatlistactive={`${isChatListActive}`} />
                                </div>

                                <StyledIcon className="fa-solid fa-gear" size="30px"/>
                        </IconsWrapper>
                    </IconsModalContainer>
                    
                </ChatIconsContainer>
                
                {/* 채팅 목록 리스트 */}
                <ChatAndPeopleListContainer className="middle-pane">
                    
                    {
                        isChatListActive ? (//1.onClick이벤트를 ChatListBox에 전달 2.isChatContentActive의 props를 ChattingContainer에 전달
                            USERS.map(({name, profileImg},idx) => <ChatListBox username={name} profileimg={profileImg} key={idx} onClick={onClick}/>)
                        ) : (
                            USERS.map(({name, img}, idx) => <PeopleListBox   stBox username={name} userimg={img} key={idx}/>)
                        )
                    }
                </ChatAndPeopleListContainer> 

                {/* 채팅 치는 영역 */}
                {
                    isChatContentActive ? (
                        <ChattingPane className="right-pane" userdata={choosedUser}/>
                    ) : null
                }

            </Container>
        </>
    )
}


