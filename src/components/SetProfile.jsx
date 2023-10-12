import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const SetProfile = () => {
  const navigate = useNavigate();

  return (
    <SetProfileBox>{/* 메인 컨테이너 박스 */}
      <Section>
        {/* 프로필 설정하기 설명 박스 */}
        <ExplainContainer></ExplainContainer>
        <SetContainer>
            <SetBox>
                {/* 프로필 설정하기 설명 박스 */}
                <ProfileImageBox>
                    <ProfileImage></ProfileImage>
                </ProfileImageBox>
                <InputBox>
                  <InputNickname type="text"/>
                  <InputIntroduce type="text"/>
                </InputBox>
                <StartButton>서비스 시작하기</StartButton>
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

const ExplainContainer = styled.div`
  box-sizing: border-box;
  display:flex;
  width: 697px;
  height: 124px;
  /* border: 1px solid #000000; */

  flex-basis: 200px;
`

const SetContainer = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  width: 697px;
  height: 816px;
  /* border: 1px solid #000000; */
`

const SetBox = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  width: 680px;
  height: 800px;
  background: #FFFFFF;
  border: 7px solid #B4B4B4;
  border-radius: 30px;
`

const ProfileImageBox = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  width: 250px;
  height: 250px;
  /* border: 1px solid #000000; */
`
const ProfileImage = styled.img`
  box-sizing: border-box;
  width: 230px;
  height: 230px;
  background: #FFFFFF;
  border: 5px solid #B4B4B4;
  border-radius: 50%;
`
// const Thing = styled.div`
//   color: blue;
//   //컴포넌트 중첩
//   ${Emoji} {
// 		&:hover {
// 			font-size: 100px;
// 		}
//   }

const InputBox = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  width: 560px;
  height: 299px;
  /* border: 1px solid #000000; */
`
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
  /* 서비스 시작하기 */
  text-align: center;
  font-weight: bold;
  font-size: 24px;

`
const InputNickname = styled.input`
  border: none;
  outline:none;
  border-bottom: 5px solid #B4B4B4;
  width: 480px;
  height: 50px;
  font-weight: bold;
  font-size: 24px;
`
const InputIntroduce = styled.input`
  border: none;
  outline:none;
  border-bottom: 5px solid #B4B4B4;
  width: 480px;
  height: 50px;
  font-weight: bold;
  font-size: 24px;
`