import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { darken, lighten } from 'polished';
import { SelectDuty } from './SetProfileSelectDuty';
import { SelectChatTime } from './SetProfileSelectChatTime';
import { postSetProfileDataWith } from '../../function/setprofile.js';

export const SetProfile = ({startTime, endTime, time}) => {
  const navigate = useNavigate();

  // 근무중, 채팅 가능 시간 상태관리
  const [duty, setDuty] = useState("");
  const [chattime, setChattime] = useState("");
  const [selectstate, setSelectstate] = useState(false);

  // 값 전부 선택시 상태 바꾸기
  const onSelect = (time) => {
    { startTime && endTime ? setSelectstate(true)
        : null;
    }
    console.log(startTime);
    console.log(endTime);
};

  // 근무중 시간 둘다 설정하면(상태 바뀌면) 컴포넌트 테두리 주황색으로 바꾸기(setselectstate로 설정) - 이건 모르겠네 ... 다른파일 참고해야 할듯
  // 테두리 주황색으로 바뀌면(selectstate==true) 데이터 객체에 담고 콘솔에 입력한 데이터 찍어보기 - onSubmit 함수 ...??
  // 서비스 시작하기 누르면 post 요청 및 서버로 데이터 보내고 확인 - onSubmit 함수

  function onSubmit(e) {
    e.preventDefault();

    const setprofileData = {
      duty: duty,
      starttime: startTime,
      endtime: endTime,
    };

    postSetProfileDataWith(setprofileData,url);
    // url 추가 필요, setprofile에서 post 성공하면 넘기고 실패하면 오류메시지 띄우기
    
  }
  {/* main으로 이동 함수 */}
  const goToMain = (e) => {
    console.log('go to main'); // main으로 이동하기 전 콘솔에 메시지 출력
    navigate('/');
    console.log('enter to main'); // main으로 이동 후 콘솔에 메시지 출력
    e.preventDefault(); // 이동 혹은 새로고침 방지, event handling 처리 시 명시적 호출
  }
  return (
    <SetProfileBox>{/* 메인 컨테이너 박스 */}
      <Section>
        {/* 프로필 설정하기 설명 박스 */}
        <ProfileSetText>프로필 설정하기</ProfileSetText>
        <ExplainText>나중에도 언제든 변경할 수 있어요!</ExplainText>
        <SetContainer>
            <SetBox>
                <ProfileImageBox>
                    <ProfileImage></ProfileImage>
                </ProfileImageBox>
                <InputBox>
                  <SelectDuty></SelectDuty>
                  <SelectChatTime></SelectChatTime>
                </InputBox>
                <StartButton onClick={onSelect}>서비스 시작하기</StartButton>
            </SetBox>
        </SetContainer>
      </Section>  
    </SetProfileBox>
  );
}

const SetProfileBox = styled.div`
    width: 70vh;
    height: 85vh;
    z-index: 150;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    overflow: auto;
   
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex: initial;
`;
const ProfileSetText = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  width: 33vh;
  /* border: 1px solid #000000; */

  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  text-align: 'center';
  font-size: 4vh;
`;
const ExplainText = styled.div`
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
  /* border: 1px solid #000000; */
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
  border: 0.5vh solid #B4B4B4;
  border-radius: 3vh;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
`;
const ProfileImageBox = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  width: 25vh;
  height: 25vh;
  /* border: 1px solid #000000; */
`;
const ProfileImage = styled.img`
  box-sizing: border-box;
  width: 23vh;
  height: 23vh;
  background: #FFFFFF;
  border: 0.5vh solid #B4B4B4;
  border-radius: 50%;
`;
const InputBox = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  width: 56vh;
  height: 25vh;
  /* border: 1px solid #000000; */
`;
const StartButton = styled.button`
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