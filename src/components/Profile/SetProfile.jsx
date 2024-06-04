import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectDuty } from './SetProfileSelectDuty';
import { SelectChatTime } from './SetProfileSelectChatTime';
import { postDutyState } from '../../function/setprofile.js';
import { ProfileSetText, ProfileImageBox, ProfileImage, InputBox, StartButton, customStyles } from '../../css/styled/Profile/setProfile.styled';
import { iconState } from "../../pages/Main/Main";
import Modal from 'react-modal';
import profileImg from '../../assets/profile.png';
import { ToastifyError, ToastifySuccess } from '../../function/toast';

export const SetProfile = ({ closeModal }) => {
  const navigate = useNavigate();

  // 상태 통합 관리 (duty를 boolean 값으로 초기화)
  const [profileState, setProfileState] = useState({
    duty: false, // duty 초기 상태를 false로 설정
    workStart: "",
    workEnd: "",
    disturbStart: "",
    disturbEnd: ""
  });

  // 직무 변경 처리
  const handleDutyChange = (selected) => {
    if (selected == "onduty") { // selected 값이 "onDuty"일 때
      setProfileState(prevState => ({ ...prevState, duty: true })); // duty 값을 true로 설정
    } else {
      setProfileState(prevState => ({ ...prevState, duty: false }));
    }
  };

  // 근무 시작 시간 변경 처리
  const handleStartTimeChange = (startTime) => {
    const formattedStartTime = startTime.toLocaleTimeString();
    setProfileState(prevState => ({ ...prevState, workStart: formattedStartTime, disturbStart: formattedStartTime }));
  };

  // 근무 종료 시간 변경 처리
  const handleEndTimeChange = (endTime) => {
    const formattedEndTime = endTime.toLocaleTimeString();
    setProfileState(prevState => ({ ...prevState, workEnd: formattedEndTime, disturbEnd: formattedEndTime }));
  };

  // 근무 상태 설정하고, 현재 프로필 상태를 콘솔에 출력하는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!profileState) {
      ToastifyError("모든 값을 선택해 주세요!");
      return; // 프로필 상태가 없으면 함수를 조기에 종료
    }
    
    // post 요청 옵션
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" // 유저 정보를 JSON형태로 보내기 위한 request
      },
      body: JSON.stringify(profileState),
    };

    // postDutyState 함수는 프라미스를 반환
    postDutyState(options) // options를 전달
      .then(response => {
        if (response === true) {
          ToastifySuccess("근무 상태 설정 완료");
        } else {
          // response가 true가 아닌 경우, 실패
          ToastifyError("근무 상태 설정 실패");
        }
      })
      .catch(error => {
        // 오류 처리
        ToastifyError("근무 상태 설정 에러");
      })
      .finally(() => {
        closeModal(); // 모든 조건부 처리 후에는, 모달 닫기
      });
  };
  // 모달 상태 관리
  const [modalIsOpen, setModalIsOpen] = useState(true);
  
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Pop up Profile"
        shouldCloseOnOverlayClick={true}>
        {/* 프로필 설정하기 설명 박스 */}
        <ProfileSetText>프로필 설정하기</ProfileSetText>
        <ProfileImageBox>
          <ProfileImage>
            <img src={profileImg} alt="user-img" style={{ objectFit: "cover", width: "100%", height: "115%" }} />
          </ProfileImage>
        </ProfileImageBox>
        <InputBox>
          <SelectDuty onDutyChange={handleDutyChange}></SelectDuty>
          <SelectChatTime handleStartTimeChange={handleStartTimeChange} handleEndTimeChange={handleEndTimeChange}></SelectChatTime>
        </InputBox>
        <StartButton onClick={handleSubmit}>근무 상태 설정하기</StartButton>
      </Modal>
    </>
  );
}