import styled from "styled-components";

// 전체를 감싸는 컨테이너-랩퍼
export const StyledContainerWrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
padding: 40px;
`;
// 인풋태그 여러개들을 묶어놓는 컨테이너
export const StyledContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
export const StyledH1 = styled.h1`
width: 100%;
text-align: left;
font-size: 40px;
`;
// 여러 인풋 wrapper들 전체를 묶음
export const StyledInputsWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 5px;
font-family: 'Noto Sans KR', sans-serif;
font-weight: 700;
`;
// label - inputbox 로 구성된 인풋 박스 하나를 묶음
export const StyledInputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
export const StyledLabel = styled.label`
width  : 100%;
font-size: 24px;
font-weight: 500;
`;
// icon - input 을 묶음
export const StyledInputBox = styled.div`
width: 100%;
align-items: center;
position: relative;
margin-top: 10px;
`;
// fontawesome icon 
export const StyledIcon = styled.i.attrs(({className}) => ({
    // className을 props로 전달 : 아이콘을 클래스명으로 처리하기 때문에
    className: `fa-solid ${className}`,
}))`
    font-size: 24px;
    // styledInputBox를 기준으로 배치
    position: absolute;
    top: 8.5px;
    left: 7px;
`;
// input tag 
export const StyledInput = styled.input.attrs(({type}) => ({
    type: type,
}))`
    width: 100%;
    height: 45px;
    font-size: 18px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    // outside section of border
    outline: none;
    border: none;
    border-bottom: 2px solid black;
    transition: border-bottom 0.5s;
    padding-left: 48px;
    &:focus {
        border-bottom: 2px solid orange;
    }
`;

export const StyledButton = styled.button`
width: 60%;
height: 60px;
padding: 10px;
font-size: 25px;
font-weight: 500;
margin-top: 25px;
background-color: orange;
color: black;
outline: none;
border: 2px solid #000;
border-radius: 7px;
cursor: pointer;
transition: all 0.5s;

&:hover {
    background-color: #fdbc43;
}
`;

export const StyledSelectWrapper = styled.div`
width: 100%;
display: flex;
margin-top: 10px;
align-items: center;
justify-content: space-between;
`;

export const StyledSelect = styled.select`
    width: 30%;
    padding: 10px;
    border-radius: 15px;
    border: none;
    transition: border linear 0.2s;
    outline: none;
    // option tag가 이 select box를 기준으로 배치될 에정
    position: relative;
    &:focus {
        border: 2px solid black;
    }
`;