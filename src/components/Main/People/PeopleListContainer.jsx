import { useState } from "react"
import Modal from 'react-modal';
import { Container, ImgContainer, NameAndContentContainer, SetBox, DeleteIconWrap, ProfileImageBox, ProfileImage, IdentifyName, RealName, StateBox, DutyState, ChatState, DutyStateMark, ChatStateMark, ChatButton, displayStyle, customStyles, DeleteIcon } from "../../../css/styled/Main/People/peopleListBox.styled"
import { ToastifyInfo } from '../../../function/toast';
import { useSetRecoilState } from "recoil";
import { ChatActiveState } from "../../../hooks/chatActiveState";
import { getDutyState } from "../../../function/setprofile.js";

export const PeopleListContainer = ({ user, setChoosedUser }) => { // props로 user 객체를 전달
    const setIsChatActive = useSetRecoilState(ChatActiveState);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [dutyStateInfo, setDutyStateInfo] = useState(); // getDutyState로부터 받은 정보를 저장할 상태

    const openModal = () => {
        setModalIsOpen(true);
        getDutyState() // getDutyState 함수를 실행하여 사용자 상세 정보를 가져옵니다. user.id는 예시로 사용자의 고유 식별자를 나타냅니다.
            .then(data => {
                setDutyStateInfo(data); // 받아온 데이터로 상태 업데이트
                console.log(data);
            })
            .catch(error => {
                console.error("근무 상태 정보 가져오기 실패:", error);
            });
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
                                <DutyStateMark></DutyStateMark>
                                근무중
                            </DutyState>
                            <ChatState>
                                <ChatStateMark></ChatStateMark>
                                채팅 가능 시간
                            </ChatState>
                        </StateBox>
                        <ChatButton onClick={clickEventFn}>채팅하기</ChatButton>
                    </SetBox>
                </Modal>: null}
        </>
    )
}