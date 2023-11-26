import styled from "styled-components";

// modal에 먹이는 스타일 객체
export const customedStyle = {
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
        padding: '0 20px'
    }
}

export const ExtraInfoForm = styled.form`
    width: 100%;
    height: 100%;
    color: var(--bg-original-black);
`

export const ExtraInfoLabel = styled.label`
    display: block;
    font-weight: 600;
    font-size: 1.8rem;
    margin-bottom: 5px;
    margin-top: 1.8rem;
`

export const ExtraInfoInput = styled.input`
    width: ${(props) => props.$customizedWidth ? props.$customizedWidth : "100%"};
    height: 30px;
    padding: 20px 8px;
    font-size: 1.1rem;
    border-radius: 0.3rem;
    border: 1px solid orange;
    box-sizing: border-box;
`

export const RadioInputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
`

export const RadioInputWrapper = styled.div`
    display: inline-flex;
    font-weight: 500;
    font-size: 1.1rem;
`

export const ExtraInfoInputRadio = styled.input`
    margin-right: 5px;
`

export const SchoolInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SchoolDBWrapper = styled.div`
    width: 100%;
`