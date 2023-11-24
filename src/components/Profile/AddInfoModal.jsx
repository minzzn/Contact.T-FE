import { useState } from 'react';
import Modal from 'react-modal';
import { ExtraInfoInput, ExtraInfoForm, ExtraInfoLabel } from '../../css/styled/Profile/addInfo.styled';

export const AddInfoModal = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [childInfo, setChildInfo] = useState("");
    const [schoolInfo, setSchoolInfo] = useState("");

    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                style={customedStyle}
            >
                <ExtraInfoForm>
                    <ExtraInfoLabel htmlFor='child'>자녀 이름</ExtraInfoLabel>
                    <ExtraInfoInput required onChange={(e) => {
                        setChildInfo(e.target.value);
                    }} id='child' value={childInfo} />

                    <ExtraInfoLabel htmlFor='school'>학교 검색</ExtraInfoLabel>
                    <ExtraInfoInput required onChange={(e) => {
                        setSchoolInfo(e.target.value);
                    }} id='school' value={schoolInfo} />
                </ExtraInfoForm>
            </Modal>
        </>
    )
}

// modal에 먹이는 스타일 객체
const customedStyle = {
    // 모달창 뒷 배경 스타일 설정
    overlay: {
        backgroundColor: 'var(--bg-original-black)',
        width: "100vw",
        height: "100vh",
        zIndex: '10',
        position: 'fixed',
        top: '0',
        left: '0',
    },
    // 모달창 
    content: {
        // 내부 내용을 기반으로 동적으로 화면 크기 생성
        width: "40vw",
        height: "40vw",
        zIndex: '150',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
        borderRadius: "15px",
        backgroundColor: 'var(--bg-original-white)',
        overflow: "hidden",
        border: "5px solid var(--bg-orange)",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "stretch",
        alignItems: 'center',
    }
}
