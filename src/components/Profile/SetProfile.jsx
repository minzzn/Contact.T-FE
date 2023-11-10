import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { darken, lighten } from 'polished';
import { SelectBox } from './SetProfileSelectBox';

export const SetProfile = () => {
  const navigate = useNavigate();

  // 근무중, 채팅 가능 시간 상태관리
  const [duty, setDuty] = useState("");
  const [chattime, setChattime] = useState("");
  const [profileimg, setProfileimg] = useState(""); // img 상태관리 

  {/* main으로 이동 함수 */}
  const goToMain = (e) => {
    console.log('go to main'); // main으로 이동하기 전 콘솔에 메시지 출력
    navigate('/');
    console.log('enter to main'); // main으로 이동 후 콘솔에 메시지 출력
    e.preventDefault(); // 이동 혹은 새로고침 방지, event handling 처리 시 명시적으로 호출
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
                  <SelectBox></SelectBox>
                  <SelectBox></SelectBox>
                </InputBox>
                <StartButton onClick={goToMain}>서비스 시작하기</StartButton>
            </SetBox>
        </SetContainer>
      </Section>  
    </SetProfileBox>
  );
}

const SetProfileBox = styled.div`
  @media only screen and (min-width: 430px) {
    width: 365px;
    margin: auto;
  }

  @media only screen and (max-width: 430px) {
    max-width: auto;
    margin: auto;
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  height: 100vh; /* 화면 높이 만큼 늘리기 */
`;
const ProfileSetText = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  width: 333px;
  /* border: 1px solid #000000; */

  //flex-basis: 200px;
  display: inline-block; 
  white-space: nowrap;

  /* 프로필 설정하기 */
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 600;
  text-align: 'center';
  font-size: 48px;
`;
const ExplainText = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;

  display: inline-block; 
  white-space: nowrap;

  /* 프로필 설정하기 */
  font-family: 'Noto Sans KR', sans-serif;
  text-align: 'center';
  font-weight: 400;
  font-size: 28px;
`;
const SetContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 697px;
  height: 816px;
  /* border: 1px solid #000000; */
`;
const SetBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 680px;
  height: 800px;
  background: #FFFFFF;
  border: 7px solid #B4B4B4;
  border-radius: 30px;
`;
const ProfileImageBox = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  width: 250px;
  height: 250px;
  /* border: 1px solid #000000; */
`;
const ProfileImage = styled.img`
  box-sizing: border-box;
  width: 230px;
  height: 230px;
  background: #FFFFFF;
  border: 5px solid #B4B4B4;
  border-radius: 50%;
`;
const InputBox = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  width: 560px;
  height: 299px;
  /* border: 1px solid #000000; */
`;
const StartButton = styled.button`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  margin-top: 10px; 
  width: 480px;
  height: 86px;
  background: #F8E792;
  border-radius: 30px;
  border: none;
  background: #F8E792;
  &:hover {
    background: ${lighten(0.1, '#F8E792')};
  }
  &:active {
    background:  ${darken(0.1, '#F8E792')};
  }
  /* 서비스 시작하기 */
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
`;
const InputNickname = styled.input`
  border: none;
  outline:none;
  border-bottom: 5px solid #B4B4B4;
  width: 480px;
  height: 50px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 24px;
`;
const InputIntroduce = styled.input`
  border: none;
  outline:none;
  border-bottom: 5px solid #B4B4B4;
  width: 480px;
  height: 50px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: bold;
  font-size: 24px;
`;