import { useState } from "react"
import Modal from 'react-modal';
import { Container, ImgContainer, NameAndContentContainer, SetBox, DeleteIconWrap, ProfileImageBox, ProfileImage, IdentifyName, RealName, StateBox, DutyState, ChatState, StateMark, ChatButton, displayStyle, customStyles, DeleteIcon } from "../../../css/styled/Main/People/peopleListBox.styled"
import { ToastifyInfo } from '../../../function/toast';
import { useSetRecoilState } from "recoil";
import { ChatActiveState } from "../../../hooks/chatActiveState";

export const PeopleListContainer = ({ user, setChoosedUser }) => { // props로 user 객체를 전달
    const setIsChatActive = useSetRecoilState(ChatActiveState);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
 
    function clickEventFn() {
        setChoosedUser(user);
        setIsChatActive(true);
        setModalIsOpen(false);
        ToastifyInfo('AI가 채팅을 분석하기 시작합니다🤖');
    }

    return (
        <>
            <Container onClick={openModal}>       
                <ImgContainer>
                    <img src={user.profileImg} alt="user-img" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                </ImgContainer>
                <NameAndContentContainer>
                    <h2>{user.name}</h2>
                </NameAndContentContainer>
            </Container>
                {modalIsOpen === true ?
                    <Modal // 분리하거나 display 바꾸기
                    $modalIsOpen={modalIsOpen}
                    display={displayStyle}
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Pop up Profile"
                    shouldCloseOnOverlayClick={false}>

                    <SetBox>
                        <DeleteIconWrap>
                            <DeleteIcon className="fa-solid fa-xmark" size="30px" onClick={closeModal}/>
                        </DeleteIconWrap>
                        <ProfileImageBox>
                            <ProfileImage></ProfileImage>
                        </ProfileImageBox>
                        <IdentifyName>ㅇㅇ고 0-0 선생님</IdentifyName>
                        <RealName><p>{user.name}</p></RealName>
                        <StateBox>
                            <DutyState>
                                <StateMark></StateMark>
                                근무중
                            </DutyState>
                            <ChatState>
                                <StateMark></StateMark>
                                채팅 가능 시간
                            </ChatState>
                        </StateBox>
                        <ChatButton onClick={clickEventFn}>채팅하기</ChatButton>
                    </SetBox>
                </Modal>: null}
        </>
    )
}