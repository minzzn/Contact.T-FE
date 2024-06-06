import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { SetBox, DeleteIconWrap, ProfileImageBox, ProfileImage, IdentifyName, RealName, StateBox, DutyState, ChatState, DutyStateMark, ChatStateMark, ChatButton, displayStyle, customStyles, DeleteIcon } from "../../../css/styled/Main/People/peopleListBox.styled";
import { getDutyState } from "../../../function/setprofile.js";
import { getUserId } from '../../../function/common.js';
import { checkChatable } from '../../../function/time.js';

const ProfileModal = ({ isOpen, onRequestClose, role, MyInfo, profileImg }) => {

    const myInfoName = MyInfo && MyInfo.name ? MyInfo.name : "아직 이름을 불러오지 못했어요";
    const [dutyStateInfo, setDutyStateInfo] = useState();
    const [isChatable, setIsChatable] = useState(null);

    useEffect(() => {
        // 동기 함수인 경우(localStorage에서 직접 값을 가져오는 경우), await 키워드 없이 직접 값을 할당할 수 있음
        const teacherUserId = getUserId(); 
        const fetchDutyState = async () => {
            try {
                const data = await getDutyState(teacherUserId);
                // console.log("Fetched duty state data:", data); // 디버깅용 로그
                setDutyStateInfo(data);
                // 근무 상태 정보를 바탕으로 isChatable 상태 업데이트
                if (data && data.workStart && data.workEnd) {
                    checkChatable(data.workStart, data.workEnd) ? setIsChatable(true) : setIsChatable(false);
                }
            } catch (error) {
                console.error("근무 상태 정보 가져오기 실패:", error);
            }
        };
    
        if (isOpen && role === "선생님") {
            fetchDutyState();
        }
    }, [isOpen, role]);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            ariaHideApp={false}
            contentLabel="Pop up Profile"
            shouldCloseOnOverlayClick={false}
        >
            <SetBox>
                <DeleteIconWrap>
                    <DeleteIcon className="fa-solid fa-xmark" size="30px" onClick={onRequestClose} />
                </DeleteIconWrap>
                <ProfileImageBox>
                    <ProfileImage src={profileImg} alt="프로필 이미지" />
                </ProfileImageBox>
                <RealName><p>{myInfoName}</p></RealName>
                <IdentifyName>{role}</IdentifyName>
                {/* role이 선생님일때만 보이도록 */}
                {role === "선생님" && (
                    <StateBox>
                        <ChatState>
                            <ChatStateMark $ischatable={isChatable === true ? "true" : "false"}></ChatStateMark>
                            {isChatable === true ? "연락 가능" : "연락 자제"}
                        </ChatState>
                    </StateBox>
                )}
            </SetBox>
        </Modal>
    );
};

export default ProfileModal;
