import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { SetBox, DeleteIconWrap, ProfileImageBox, ProfileImage, IdentifyName, RealName, StateBox, DutyState, ChatState, DutyStateMark, ChatStateMark, ChatButton, displayStyle, customStyles, DeleteIcon } from "../../../css/styled/Main/People/peopleListBox.styled";
import { getDutyState } from "../../../function/setprofile.js";

const ProfileModal = ({ isOpen, onRequestClose, role, MyInfo, profileImg }) => {

    const myInfoName = MyInfo && MyInfo.name ? MyInfo.name : "아직 이름을 불러오지 못했어요";
    const [dutyStateInfo, setDutyStateInfo] = useState();
    const [isChatable, setIsChatable] = useState(false);

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
                const data = await getDutyState();
                console.log("Fetched duty state data:", data); // 디버깅용 로그
                setDutyStateInfo(data);
            } catch (error) {
                console.error("근무 상태 정보 가져오기 실패:", error);
            }
        };
    
        if (isOpen && role === "선생님") {
            fetchDutyState();
        }
    }, [isOpen]);

    // isChatable 상태가 변경될 때마다 실행됩니다.
    //useEffect(() => {
    //    console.log(isChatable);
    //}, [isChatable]);

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
                <IdentifyName>ㅇㅇ고 0-0 {role}</IdentifyName>
                <RealName><p>{myInfoName}</p></RealName>
                {role === "선생님" ? (
                    <StateBox>
                        <DutyState>
                            <DutyStateMark $duty={dutyStateInfo?.duty === true ? "true" : "false"}></DutyStateMark>
                            {dutyStateInfo?.duty ? "근무중" : "근무중 아님"}
                        </DutyState>
                        <ChatState>
                            <ChatStateMark $ischatable={isChatable === true ? "true" : "false"}></ChatStateMark>
                            {isChatable === true ? "연락 가능" : "연락 자제"}
                        </ChatState>
                    </StateBox>
                ) : null}
            </SetBox>
        </Modal>
    );
};

export default ProfileModal;
