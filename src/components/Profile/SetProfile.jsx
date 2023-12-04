import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { darken, lighten } from 'polished';
import { SelectDuty } from './SetProfileSelectDuty';
import { SelectChatTime } from './SetProfileSelectChatTime';
import { postSetProfileDataWith } from '../../function/setprofile.js';
import { iconState } from "../../pages/Main/Main";
import Modal from 'react-modal';

export const SetProfile = ({closeModal}) => {
  const navigate = useNavigate();

  // 근무중, 채팅 가능 시간 상태관리
  const [duty, setDuty] = useState("");
  const [selectstate, setSelectstate] = useState(false);
  const [isstartTime, setisStartTime] = useState("");
  const [isendTime, setisEndTime] = useState("");

  const handleStartTimeChange = (startTime) => {
    setisStartTime(startTime.toLocaleTimeString());
    console.log(isStartTime);
  };

  const handleEndTimeChange = (endTime) => {
    setisEndTime(endTime.toLocaleTimeString());
    console.log(isEndTime);
    setSelectstate(true);
  };

  // 모달 열고 닫기 상태관리
  const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
      <>

            <Modal
            $modalIsOpen={modalIsOpen}
            display={displayStyle}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}
            contentLabel="Pop up Profile"
            shouldCloseOnOverlayClick={false}>
                {/* 프로필 설정하기 설명 박스 */}
                <ProfileSetText>프로필 설정하기</ProfileSetText>
                <ProfileImageBox>
                    <ProfileImage></ProfileImage>
                </ProfileImageBox>
                <InputBox>
                  <SelectDuty></SelectDuty>
                  <SelectChatTime onStartTimeChange={handleStartTimeChange} onEndTimeChange={handleEndTimeChange}></SelectChatTime>
                </InputBox>
                <StartButton onClick={closeModal}>서비스 시작하기</StartButton>
        </Modal>
      </>  
  );
}
export const displayStyle = styled.div`
  display: ${(props) => props.display || none};
`
export const customStyles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
    backdropFilter: "blur(5px)",
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: "translate(-50%, -50%)",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "60vh",
    height: "72vh",
    background: "#FFFFFF",
    border: "${(props) => (props.selectstate === true ? '0.5vh solid #FF9634' : '0.5vh solid #B4B4B4')}",
    borderRadius: "3vh",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    overflow: "hidden",
    flex: "initial",
  }
}
export const ProfileSetText = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  width: 33vh;
  margin-bottom: 5vh;
  
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  text-align: 'center';
  font-size: 4vh;
`;
export const ExplainText = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  padding: 0.7vh;

  font-family: 'Noto Sans KR', sans-serif;
  text-align: 'center';
  font-weight: 400;
  font-size: 2.8vh;
`;
const SetContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68vh; //697px
  height: 80vh; //816px
`;
const SetBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 60vh;
  height: 72vh;
  background: #FFFFFF;
  border: ${(props) => (props.selectstate === true ? '0.5vh solid #FF9634' : "0.5vh solid #B4B4B4")};
  border-radius: 3vh;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;
const ProfileImageBox = styled.div`
  box-sizing: border-box;
  align-items:center;
  justify-content: center;
  width: 25vh;
  height: 25vh;
`;
export const ProfileImage = styled.img`
  box-sizing: border-box;
  width: 23vh;
  height: 23vh;
  background: #FFFFFF;
  border: 0.5vh solid #B4B4B4;
  border-radius: 50%;
`;
export const InputBox = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  width: 56vh;
  height: 25vh;
  /* border: 1px solid #000000; */
`;
export const StartButton = styled.button`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  margin-top: 1vh; 
  width: 45vh;
  height: 7vh;
  border-radius: 3vh;
  border: none;
  background: var(--bg-orange);
    &:hover {
      background: ${lighten(0.1, '#D65A31')};
    }
    &:active {
      background:  ${darken(0.1, '#D65A31')};
    }
  cursor: pointer;
  /* 서비스 시작하기 */
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 2.4vh;
`;