import react, { useState } from "react"
import Modal from 'react-modal';
// import { Container, ImgContainer, NameAndContentContainer, SetBox, DeleteIconWrap, ProfileImageBox, ProfileImage, IdentifyName, RealName, StateBox, DutyState, ChatState, StateMark, ChatButton } from "../../css/styled/peopleListBox.styled"
import styled from "styled-components"
import { darken, lighten } from 'polished';

export const PeopleListBox = ({username, userimg, key}) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
        console.log('Modal Open');
    };
    const closeModal = () => {
        setModalIsOpen(false);
        console.log('Modal Close');
    };
    return ( //방법 1. 클릭한 컴포넌트와 해당 보여줄 컴포넌트의 인덱스 키값을 비교 ...?
        <>
            <Container onClick={openModal}> 
                
                <ImgContainer>
                    <img src={userimg} alt="user-img" style={{objectFit: "contain", width: "100%", height: "100%"}}/>
                </ImgContainer>
                <NameAndContentContainer>
                    <h2>{username}</h2>
                </NameAndContentContainer>
            </Container>
            <Modal // 분리하거나 display 바꾸기
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Pop up Profile"
                shouldCloseOnOverlayClick={false}>

                <SetBox>
                    <DeleteIconWrap>
                    <DeleteIcon className="fa-solid fa-xmark" size="30px" marginright="20px" onClick={closeModal}/>
                    </DeleteIconWrap>
                    <ProfileImageBox>
                        <ProfileImage></ProfileImage>
                    </ProfileImageBox>
                    <IdentifyName>ㅇㅇ고 0-0 선생님</IdentifyName>
                    <RealName><p>{username}</p></RealName>
                    <StateBox>
                        <DutyState>
                            <StateMark></StateMark>
                            근무중
                        </DutyState>
                        <ChatState>
                            <StateMark></StateMark>
                            채팅 가능 시간
                        </ChatState>
                    </StateBox>
                    <ChatButton>채팅하기</ChatButton>
                </SetBox>
            </Modal>
        </>
    )
}

const Container = styled.div`
    min-width: 250px;
    width: 100%;
    // 콘텐츠 크기에 맞게끔 높이는 최대한 작게
    height: 11vh;
    display: flex;
    justify-content: space-between;
    /* vertical - horizontal */
    padding: 2vh 2vw;
    /* vertical - horizontal */
    margin: 1.4vh 0;
    color: var(--bg-dark-gray);
    &:hover {
        color: var(--bg-black);
        text-shadow: 2px 2px 5px var(--bg-orange);
    }
`;

const ImgContainer = styled.div`
    overflow: hidden;
    flex: 1;
    border: 1px solid var(--bg-white);
    border-radius: 10%;
    margin-right: 2vw;
`;

const NameAndContentContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // 최대한 왼쪽에 붙도록
    align-items: start;
`;

const customStyles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
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
      border: "7px solid #FF9634",
      overflow: "auto",
    },
  };
  const SetBox = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    /* border: 7px solid #FF9634;
    border-radius: 30px; */
  
    overflow: hidden;
    flex: initial;
  `;
  const DeleteIconWrap = styled.div`
    width: 100%;
    display : flex;
    justify-content: flex-end;
  `;
  const DeleteIcon = styled.div`
    font-size: 2vh;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `;
  const ProfileImageBox = styled.div`
    box-sizing: border-box;
    display:flex;
    align-items:center;
    justify-content: center;
    width: 28vh;
    height: 28vh;
    overflow: hidden;
    flex: 4;
  `;
  const ProfileImage = styled.img`
    box-sizing: border-box;
    width: 16vh;
    height: 16vh;
    background: #FFFFFF;
    border: 5px solid #FF9634;
    border-radius: 50%;
  
  `;
  const IdentifyName = styled.div`
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
      width: 20vh;
      height: 30vh;
      /* border: 1px solid #000000; */
  
      /* 김ㅇㅇ */
      font-family: 'Noto Sans KR', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 1.5vh;
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
      width: 100%;
      height: 30vh;
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
      width: 20vh;//340px
      height: 10vh;
      /* border: 1px solid #000000; */
  
      font-family: 'Noto Sans KR', sans-serif;
      font-style: normal;
      font-size: 2vh;
      color: #000000;
  
  `;
  const ChatState = styled.div`
  
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
      color: #000000;
  
  `;
  const ChatButton = styled.button`
  
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
      background: #FF9634;
        &:hover {
            background: ${lighten(0.1, '#FF9634')};
        }
        &:active {
            background:  ${darken(0.1, '#FF9634')};
        }
      cursor: pointer;
      /* 채팅 하기 */
      font-family: 'Noto Sans KR', sans-serif;
      font-family: 'Inter';
      font-size: 2vh;
      color: #000000;
  
      overflow: hidden;
      flex: 1;
  
  `;