import styled from "styled-components";

// modal에 먹이는 스타일 객체
export const customedStyle = {
    // 모달창 뒷 배경 스타일 설정
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(4px)', // backdrop-filter 설정
    },
    // 모달창 
    content: {
        // 내부 내용을 기반으로 동적으로 화면 크기 생성
        width: "50vw",
        height: "95vh",
        zIndex: '150',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
        borderRadius: "15px",
        backgroundColor: 'var(--bg-original-white)',
        overflow: "hidden",
        border: "5px solid var(--bg-main-green)",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "stretch",
        alignItems: 'center',
        padding: '30px',
        minWidth: '671px',
        minHeight: '671px',
    }
}

export const AllLayoutContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const RoleSelectContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const RoleSelectInput = styled.select`
    padding: 10px 15px;
    border: 2px solid var(--bg-main-green);
    border-radius: 5px;
    font-weight: 600;
    font-size: 1.5rem;

    &:hover {
        cursor: pointer;
    }
`

export const ExtraInfoForm = styled.form`
    width: 100%;
    height: 100%;
    color: var(--bg-original-black);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* 가장 위로 붙도록 */
    align-items: flex-start;
    /* 큰 두개의 레이아웃 사이 약간의 갭 */
    gap: 10px;
`

export const ExtraInfoContainer = styled.div`
    width: 100%;
    display: flex;
    /* 가로 방향 맨 앞으로 */
    justify-content: flex-start;
    /* 이 컨테이너 내부 컴포넌트들은 서로 갭을 둠 */
    gap: 20px;
`
export const SearchSchoolContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* 가로 방향 끝으로 */
    align-items: flex-start;
    gap: 10px;
`

export const ExtraInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* 가로 방향 맨 앞으로 */
    align-items: flex-start;
    gap: 5px;
`

export const ExtraInfoLabel = styled.label`
    display: block;
    font-weight: 600;
    font-size: 1.8rem;
`

export const ExtraInfoInput = styled.input`
    height: 30px;
    width: 100%;
    padding: 20px 8px;
    font-size: 1.1rem;
    box-sizing: border-box;
    border: 2px solid var(--bg-main-green);
    border-radius: 5px;

    &:focus {
        /* input태그 focus시 outline 제거 */
        outline: none; 
    }
`

export const RadioInputContainer = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-between;
`

export const RadioInputWrapper = styled.div`
    display: inline-flex;
    font-weight: 500;
    font-size: 1.1rem;
`

export const ExtraInfoInputRadio = styled.input`
    margin-right: 5px;
    accent-color: var(--bg-main-green);
    cursor: pointer;
    &:checked {
        border: none;
        outline: none;
    }
`

export const TypeOfSchoolLabel = styled.label`
    margin-right: 15px;
    font-weight: 500;
`

export const SchoolInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const SchoolsListWrapper = styled.div`
    width: 100%;
    max-height: 45vh;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    justify-content: flex-start;
`

export const StyledButton = styled.button`
    display: block;
    width: 100%;
    padding: 15px;

    background-color: var(--bg-main-green);
    color: var(--bg-original-white);
    font-size: 2.0rem;
    font-weight: 500;

    outline: none; border: none;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
        cursor: pointer;
        filter: drop-shadow(2px 2px 5px black);
    }
`