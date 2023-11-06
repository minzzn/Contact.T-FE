import { ChatListBox } from "../components/Main/ChatListBox";
import { useState } from "react";
import { ChatListContainer, ChatListLiContainer, Container, IconsModalWrapper, IconsWrapper, StyledIcon } from "../css/styled/main.styled";
import { ChatMainContainer } from "../components/Main/ChatMainContainer";
import { PeopleListBox } from "../components/PeopleListBox";
import img1 from "../assets/userimg_01.png"
import img2 from "../assets/userimg_02.png"
import lion from "../assets/lion.jpeg"


export const Main = () => {
    const [isChatListActive, setIsChatListActive] = useState(false);
    const users = [
        {
            name: '민주',
            img: img2,
            profileImg: lion
        },
        {
            name: '민정',
            img: img1,
            profileImg: lion
        },
        {
            name: '동원',
            img: img2,
            profileImg: lion
        },
        {
            name: '재현',
            img: img1,
            profileImg: lion
        },
        {
            name: '세윤',
            img: img2,
            profileImg: lion
        },
        {
            name: '재원',
            img: img1,
            profileImg: lion
        },
        {
            name: '준호',
            img: img2,
            profileImg: lion
        },
        {
            name: '민기',
            img: img1,
            profileImg: lion
        },
        {
            name: '현기',
            img: img2,
            profileImg: lion
        },
        {
            name: '남주',
            img: img1,
            profileImg: lion
        },
    ];

    return (
        <>
            <Container>
                {/* 채팅 목록: 왼쪽 영역 */}
                <ChatListContainer className="left-pane">
                    <IconsModalWrapper>
                        {/* 처음 진입하거나 왼쪽부분 사이즈를 줄이고 싶을때 */}
                        <IconsWrapper>
                                <StyledIcon className="fas fa-user" size='30px' marginright="20px" onClick={()=> {
                                    setIsChatListActive(false);
                                }} />
                                <StyledIcon className="fas fa-comment" size="30px" onClick={()=> {
                                    setIsChatListActive(true);
                                }} />
                        </IconsWrapper>
                    </IconsModalWrapper>
                    {/* 채팅 목록 리스트 */}
                    <ChatListLiContainer> 
                        {/* components/ChatListBox.jsx */}
                        {
                            isChatListActive ? (
                                users.map(({name, profileImg},idx) => <ChatListBox username={name} profileimg={profileImg} key={idx}/>)
                            ) : (
                                users.map(({name, img},idx) => <PeopleListBox username={name} userimg={img} key={idx}/>)
                            )
                        }
                    </ChatListLiContainer>
                </ChatListContainer>
                
                {/* 채팅 치는 영역 */}
                <ChatMainContainer className="right-pane"/>
            </Container>
        </>
    )
}


