import { useState, useEffect } from "react"
import Modal from 'react-modal';
import { Container, ImgContainer, NameAndContentContainer, SetBox, DeleteIconWrap, ProfileImageBox, ProfileImage, IdentifyName, RealName, StateBox, DutyState, ChatState, StateMark, ChatButton, displayStyle, customStyles, DeleteIcon } from "../../../css/styled/Main/People/peopleListBox.styled"
import { ToastifyInfo } from '../../../function/toast';
import { useSetRecoilState } from "recoil";
import { ChatActiveState } from "../../../hooks/chatActiveState";
import { getRole, getUserId } from '../../../function/common.js';
import { getRoomInfo } from '../../../function/room.info.js';
import { getDutyState } from '../../../function/setprofile.js';

export const PeopleListContainer = ({ user, setChoosedUser }) => { // props로 user 객체를 전달
    const setIsChatActive = useSetRecoilState(ChatActiveState);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [dutyState, setDutyState] = useState(null);
    const [isChatable, setIsChatable] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
 
    function clickEventFn() {
        setChoosedUser(user);
        setIsChatActive(true);
        setModalIsOpen(false);
        ToastifyInfo('AI가 채팅을 분석하기 시작합니다🤖');
    }

    const parseTimeKST = (timeStr) => {
        const [period, time] = timeStr.split(' ');
        const [hours, minutes, seconds] = time.split(':').map(Number);
        let date = new Date();
        let hours24 = period === '오전' ? (hours % 12) : (hours % 12) + 12;
        date.setHours(hours24, minutes, seconds || 0, 0);
        return date;
    };
    
    const checkChatable = (workStart, workEnd) => {
        const now = new Date();
        const start = parseTimeKST(workStart);
        const end = parseTimeKST(workEnd);
        if (start <= now && now <= end) {
            setIsChatable(true);
        } else {
            setIsChatable(false);
        }
    };

    useEffect(() => {
        const fetchDutyState = async () => {
            try {
                const role = getRole();
                let userId;
                // if (role === "TEACHER") {
                //     userId = getUserId();} 선생님의 친구 목록에는 어차피 학부모만 있을 것임
                if (role === "PARENT") {
                    const roomInfo = await getRoomInfo();
                    userId = roomInfo.teacherId; // 예를 들어 roomInfo에서 teacherId를 가져온다고 가정합니다. 실제 구조에 맞게 수정하세요.
                }// role이 학부모이면 roominfo에서 객체 배열을 받아와 각각의 객체들에서 teacherid를 매핑해서 가져옴

                if (userId) {
                    const duty = await getDutyState(userId);
                    setDutyState(duty);
                    console.log(dutyStateInfo);
                }
            } catch (error) {
                console.error("Error fetching duty state:", error);
            }
        };

        fetchDutyState();
    }, [user]);

    return (
        <>
            <Container onClick={openModal}>       
                <ImgContainer>
                    <img src={user.profileImg} alt="user-img" style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                </ImgContainer>
                <NameAndContentContainer>
                    <h2>{user.name}</h2>
                </NameAndContentContainer>
            </Container>
                {modalIsOpen === true ?
                    <Modal // 분리하거나 display 바꾸기
                    $modalIsOpen={modalIsOpen}
                    display={displayStyle}
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Pop up Profile"
                    shouldCloseOnOverlayClick={false}>

                    <SetBox>
                        <DeleteIconWrap>
                            <DeleteIcon className="fa-solid fa-xmark" size="30px" onClick={closeModal}/>
                        </DeleteIconWrap>
                        <ProfileImageBox>
                            <ProfileImage></ProfileImage>
                        </ProfileImageBox>
                        <IdentifyName>ㅇㅇ고 0-0 </IdentifyName>
                        <RealName><p>{user.name}</p></RealName>
                            <StateBox>
                                <DutyState>
                                    <DutyStateMark></DutyStateMark>
                                    근무중
                                </DutyState>
                                <ChatState>
                                    <ChatStateMark></ChatStateMark>
                                    채팅 가능 시간
                                </ChatState>
                            </StateBox>
                        <ChatButton onClick={clickEventFn}>채팅하기</ChatButton>
                    </SetBox>
                </Modal>: null}
        </>
    )
}