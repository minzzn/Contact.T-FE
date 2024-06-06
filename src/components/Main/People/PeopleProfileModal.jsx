import { React, useState, useEffect } from 'react';
import Modal from 'react-modal';
import { SetBox, DeleteIconWrap, ProfileImageBox, ProfileImage, IdentifyName, RealName, StateBox, DutyState, ChatState, DutyStateMark, ChatStateMark, ChatButton, customStyles, DeleteIcon } from "../../../css/styled/Main/People/peopleListBox.styled";
import { checkChatable } from '../../../function/time';
import { ToastifyError, ToastifyWarn } from '../../../function/toast';
import { getRole } from '../../../function/common';

const PeopleProfileModal = ({ isOpen, closeModal, user, peopleRole, clickEventFn }) => {
    const [isChatable, setIsChatable] = useState(false);
    const [chatState, setChatState] = useState('미설정'); // 채팅 가능 상태
    const role = getRole();

    // ChatButton 클릭 핸들러
    const handleChatButtonClick = () => {
      if (isChatable) {
        clickEventFn();
      } else {
        if(role === "TEACHER") {
          ToastifyWarn("채팅 가능 시각 설정을 먼저해주세요");
        } else {
          ToastifyError('현재 채팅이 불가능합니다');
        }

        closeModal();
      }
    };

    useEffect(() => {
      if (isOpen) {
        if(user["isChatable"]) {
          setIsChatable(true);
          setChatState('연락 가능');
        } else {
          setIsChatable(false);
          setChatState('연락 자제');
        }
      }
      // console.log(user.workStart,user.workEnd,isChatable,chatState); // 디버깅용 로그
    }, [isOpen, user]);

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Pop up Profile"
        shouldCloseOnOverlayClick={true}
        >
            <SetBox>
                <DeleteIconWrap>
                    <DeleteIcon className="fa-solid fa-xmark" size="30px" onClick={closeModal}/>
                </DeleteIconWrap>
                <ProfileImageBox>
                    <ProfileImage src={user.profileImg} alt="프로필 이미지"/>
                </ProfileImageBox>
                <RealName><p>{user.name}</p></RealName>
                <IdentifyName>{peopleRole}</IdentifyName>
                {/* peopleRole이 선생님일 때만 보이도록  */}
                {peopleRole === "선생님" && (
                    <StateBox>
                        <ChatState>
                            <ChatStateMark $ischatable={isChatable === true ? "true" : "false"}></ChatStateMark>
                            {chatState}
                        </ChatState>
                    </StateBox>
                )}
                <ChatButton onClick={handleChatButtonClick}>채팅하기</ChatButton>
            </SetBox>
        </Modal>
    );
}

export default PeopleProfileModal;
