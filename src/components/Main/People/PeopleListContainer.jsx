import { useState } from "react";
import Modal from 'react-modal';
import { Container, ImgContainer, NameAndContentContainer } from "../../../css/styled/Main/People/peopleListBox.styled";
import { ToastifyInfo } from '../../../function/toast';
import { useSetRecoilState } from "recoil";
import { ChatActiveState } from "../../../hooks/chatActiveState";
import PeopleProfileModal from './PeopleProfileModal';
import { getRole } from '../../../function/common.js';

export const PeopleListContainer = ({ user, setChoosedUser }) => {
    const setIsChatActive = useSetRecoilState(ChatActiveState);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const role = getRole() === "TEACHER" ? "선생님" : "학부모";
    const peopleRole = role === "선생님" ? "학부모" : "선생님"; // 사용자의 role값에 따라 상대방의 role을 설정

    const openModal = () => {
        setModalIsOpen(true);
        // console.log(role); // 디버깅용 로그
        // console.log(peopleRole);
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
                    <p>{peopleRole}</p>
                </NameAndContentContainer>
            </Container>
            <PeopleProfileModal
                isOpen={modalIsOpen}
                closeModal={closeModal}
                user={user}
                clickEventFn={clickEventFn}
                peopleRole={peopleRole}
            />
        </>
    )
}