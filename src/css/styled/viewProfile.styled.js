import styled from 'styled-components';

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
const SetContainer = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  width: 697px;
  height: 816px;
  /* border: 1px solid #000000; */

  flex:initial;
`;
const SetBox = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  width: 680px;
  height: 800px;
  background: #FFFFFF;
  border: 7px solid #FF9634;
  border-radius: 30px;

  overflow: hidden;
  flex: initial;
`;
const ProfileImageBox = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  width: 250px;
  height: 250px;
  /* border: 1px solid #000000; */

  overflow: hidden;
  flex: 4;
`;
const ProfileImage = styled.img`
  box-sizing: border-box;
  width: 230px;
  height: 230px;
  background: #FFFFFF;
  border: 5px solid #FF9634;
  border-radius: 50%;

`;
// const Thing = styled.div`
//   color: blue;
//   //컴포넌트 중첩
//   ${Emoji} {
// 		&:hover {
// 			font-size: 100px;
// 		}
//   }
const IdentifyName = styled.div`
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content: center;
    box-sizing: border-box;
    width: 300px;
    height: 59px;
    margin-top: 18px;
    /* border: 1px solid #000000; */
    /* ㅇㅇ고 ㅇ-ㅇ 선생님 */
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-size: 36px;
    color: #000000;
    text-align: center;

    overflow: hidden;
    flex: 1;

`;
const RealName = styled.div`
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content: center;
    width: 285px;
    height: 42px;
    /* border: 1px solid #000000; */

    /* 김ㅇㅇ */
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    text-align: center;

    overflow: hidden;
    flex: 1;

`;
const StateBox = styled.div`

    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content: center;
    width: 482px;
    height: 42px;
    margin-top: 36px;
    /* border: 1px solid #000000; */

    overflow: hidden;
    flex: 1;

`;
const StateMark = styled.div`

    width: 23px;
    height: 23px;
    margin-right: 10px;
    background: #FF9634;
    border-radius: 50%;

`;
const DutyState = styled.div`

    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content: center;
    width: 169px;
    height: 42px;
    /* border: 1px solid #000000; */

    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-size: 36px;
    line-height: 44px;
    color: #000000;

`;
const ChatState = styled.div`

    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content: center;
    width: 280px;
    height: 42px;
    /* border: 1px solid #000000; */

    /* 채팅 가능 시간 */
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-size: 36px;
    color: #000000;

`;
const ChatButton = styled.button`

    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content: center;
    width: 272px;
    height: 42px;
    margin-top: 92px;
    /* border: 1px solid #000000; */

    /* 채팅 하기 */
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Inter';
    font-size: 36px;
    color: #000000;

    overflow: hidden;
    flex: 1;

`;