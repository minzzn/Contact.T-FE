import { React, useState, useEffect } from 'react';
import Modal from 'react-modal';
import { SetBox, DeleteIconWrap, ProfileImageBox, ProfileImage, IdentifyName, RealName, StateBox, DutyState, ChatState, DutyStateMark, ChatStateMark, ChatButton, customStyles, DeleteIcon } from "../../../css/styled/Main/People/peopleListBox.styled";

const PeopleProfileModal = ({ isOpen, closeModal, user, peopleRole, clickEventFn }) => {
    const [isChatable, setIsChatable] = useState(false);
    const [chatState, setChatState] = useState('미설정'); // 채팅 가능 상태
  
    const parseTimeKST = (timeStr) => {
      const [period, time] = timeStr.split(' ');
      const [hours, minutes, seconds] = time.split(':').map(Number);
      let date = new Date();
      let hours24 = period === '오전' ? (hours % 12) : (hours % 12) + 12;
      date.setHours(hours24, minutes, seconds || 0, 0);
      return date;
    };
    
    {/* 채팅 가능 시간 체크 함수*/}
    const checkChatable = (workStart, workEnd) => {
      // 미설정 상태시, 초기값 상태 그대로 유지 (dutyState, setDutyState에 미설정 setIsChatable에 false)
      if (!workStart || !workEnd) {
        return;
      }
      const now = new Date();
      const start = parseTimeKST(workStart);
      const end = parseTimeKST(workEnd);
      if (start <= now && now <= end) {
        setIsChatable(true);
        setChatState('연락 가능');
      } else {
        setIsChatable(false);
        setChatState('연락 자제');
      }
    };
  
    useEffect(() => {
      if (isOpen) {
        const { workStart, workEnd } = user;
        checkChatable(workStart, workEnd);
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
        shouldCloseOnOverlayClick={false}
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
                <ChatButton onClick={clickEventFn}>채팅하기</ChatButton>
            </SetBox>
        </Modal>
    );
}

export default PeopleProfileModal;
