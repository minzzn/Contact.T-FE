import styled from "styled-components"
import { darken, lighten } from 'polished';

export const MyProfileBox = styled.div`
  min-width: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* up - right - bottom - left */
  margin: 0 0 0.6vh 0;
  overflow: hidden;

`
export const Container = styled.div`
  min-width: 250px;
  width: 100%;
  // 콘텐츠 크기에 맞게끔 높이는 최대한 작게
  height: 11vh;
  display: flex;
  justify-content: space-between;
  align-items: start;
  /* vertical - horizontal */
  padding: 2vh 2vw;
  margin: 0 0 0.6vh 0;
  color: var(--bg-original-black);
  border-radius: 10px;
  background-color: white;

  &:hover {
      background-color: var(--bg-light-gray);
      cursor: pointer;
  }
  
`;

export const ImgContainer = styled.div`
    overflow: hidden;
    width: 55px;
    height: 55px;
    border-radius: 10%;
    margin-right: 7px;
`;

export const NameAndContentContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: end;
    // 최대한 왼쪽에 붙도록
    align-items: start;
    margin-top: 4px;
`;

export const Divider = styled.div`
    margin: 1.5vh;
    min-width: 250px;
    width: 100%;
    height: 0.5px;
    background: var(--bg-button-gray);
`
export const displayStyle = styled.div`
  display: ${(props) => props.display || none};
` 
/* customStyles의 색깔 변경 시 렌더링 안됨 - 왜그런지 이유를 모르겠음 */
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
    width: "49vh",
    height: "56vh",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    backgroundColor: "white",
    justifyContent: "center",
    overflow: "auto",
    border: "7px solid var(--bg-main-green)",
  },
};

export const SetBox = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: var(--bg-original-white);

  overflow: hidden;
  flex: initial;
`;
export const DeleteIconWrap = styled.div`
  width: 100%;
  display : flex;
  justify-content: flex-end;
`;
export const DeleteIcon = styled.div`
  font-size: 2vh;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ProfileImageBox = styled.div`
  box-sizing: border-box;
  display:flex;
  align-items:center;
  justify-content: center;
  width: 28vh;
  height: 28vh;
  overflow: hidden;
  flex: 4;
`;
export const ProfileImage = styled.img`
  box-sizing: border-box;
  width: 16vh;
  height: 16vh;
  background: var(--bg-original-white);
  border: 5px solid var(--bg-main-green);
  border-radius: 50%;

`;
export const IdentifyName = styled.div`
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content: center;
    box-sizing: border-box;
    width: 21vh;
    height: 41vh;
    margin-top: 18px;
    /* border: 1px solid #000000; */
    /* ㅇㅇ고 ㅇ-ㅇ 선생님 */
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-size: 2vh;
    color: var(--bg-original-black);
    text-align: center;

    overflow: hidden;
    flex: 1;

`;
export const RealName = styled.div`
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content: center;
    width: 20vh;
    height: 30vh;
    /* border: 1px solid #000000; */

    /* 김ㅇㅇ */
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.5vh;
    line-height: 29px;
    color: var(--bg-original-black);
    text-align: center;

    overflow: hidden;
    flex: 1;

`;
export const StateBox = styled.div`

    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content: center;
    width: 100%;
    height: 30vh;
    margin-top: 36px;
    /* border: 1px solid #000000; */

    overflow: hidden;
    flex: 1;

`;
export const StateMark = styled.div`

    width: 23px;
    height: 23px;
    margin-right: 10px;
    background: var(--bg-main-green);
    border-radius: 50%;

`;
export const DutyState = styled.div`

    box-sizing: border-box;
    display: flex;
    align-items:center;
    justify-content: center;
    width: 20vh;//340px
    height: 10vh;
    /* border: 1px solid #000000; */

    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-size: 2vh;
    color: var(--bg-original-black);

`;
export const ChatState = styled.div`

    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content: center;
    width: 20vh;//280px
    height: 10vh;
    /* border: 1px solid #000000; */

    /* 채팅 가능 시간 */
    font-family: 'Noto Sans KR', sans-serif;
    font-style: normal;
    font-size: 2vh;
    color: var(--bg-original-black);

`;
export const ChatButton = styled.button`

    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content: center;
    width: 25vh;
    height: 29vh;
    margin-top: 3vh;
    margin-bottom: 3vh;
    border-radius: 30px;
    border: none;
    background: var(--bg-main-green);
      &:hover {
          background: ${lighten(0.1, '#5CC095')};
      }
      &:active {
          background:  ${darken(0.1, '#5CC095')};
      }
    cursor: pointer;
    /* 채팅 하기 */
    font-family: 'Noto Sans KR', sans-serif;
    font-family: 'Inter';
    font-size: 2vh;
    color: var(--bg-original-black);

    overflow: hidden;
    flex: 1;

`;