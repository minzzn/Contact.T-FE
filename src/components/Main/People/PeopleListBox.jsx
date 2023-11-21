import { useState } from "react"
import Modal from 'react-modal';
import { Container, ImgContainer, NameAndContentContainer, SetBox, DeleteIconWrap, ProfileImageBox, ProfileImage, IdentifyName, RealName, StateBox, DutyState, ChatState, StateMark, ChatButton, customStyles, DeleteIcon } from "../../../css/styled/Main/People/peopleListBox.styled"
import { ToastifyInfo } from './../../../function/toast';

export const PeopleListBox = ({user,}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
        console.log('Modal Open');
    };
    const closeModal = () => {
        setModalIsOpen(false);
        console.log('Modal Close'); 
    };

    function clickEventFn() {
        setModalIsOpen(false);
        console.log('Modal Close'); 
        ToastifyInfo();
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
            <Modal // 분리하거나 display 바꾸기
                display={modalIsOpen ? 'flex' : 'none'}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Pop up Profile"
                shouldCloseOnOverlayClick={false}>

                <SetBox>
                    <DeleteIconWrap>
                    <DeleteIcon className="fa-solid fa-xmark" size="30px" marginright="20px" onClick={closeModal}/>
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
            </Modal>
        </>
    )
}