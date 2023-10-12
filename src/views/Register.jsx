import styled from "styled-components"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();

    // 값 상태관리
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [email, setEmail] = useState("");
    
    // 오류메시지 상태관리
    const [nameMsg, setNameMsg] = useState("");
    const [pwdMsg, setPwdMsg] = useState("");
    const [emailMsg, setEmailMsg] = useState("");

    // 유효성 검사 상태관리
    const [isValidName, setIsValidName] = useState(false);
    const [isValidPwd, setIsValidPwd] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);

    const onChangeName = (e) => {
        const currentName = e.target.value;
        setName(currentName);

        if(currentName.length < 2 || currentName.length > 11) {
            setNameMsg("이름은 2 글자 이상 10 글자 이하입니다.");
            setIsValidName(false);
        } else {
            setNameMsg("올바른 이름입니다.");
            setIsValidName(true);
        }
    }

    const onChangePwd = (e) => {
        const currentPwd = e.target.value;
        const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
        setPwd(currentPwd);

        if(!passwordRegExp.test(currentPwd)) {
            setPwdMsg("숫자+영문자+특수문자 조합의 8자리 이상 입력하세요");
            setIsValidPwd(false);
        } else {
            setPwdMsg("안전한 비밀번호입니다");
            setIsValidPwd(true);
        }
    }

    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
        // todo : 이메일 형식이 완벽하게 .com까지 입력되어야 사용가능한 이메일이라고 문구 뜨게 만들기
        setEmail(currentEmail);

        if(!emailRegExp.test(currentEmail)) {
            setEmailMsg("이메일 형식을 올바르게 작성해주세요");
            setIsValidEmail(false);
        } else {
            setEmailMsg("사용 가능한 이메일입니다.");
            setIsValidEmail(true);
        }
    }


    const onClick = (e) => {
        console.log('진입');
        if(isValidName && isValidPwd && isValidEmail) {
            navigate('/login');
            console.log('success');
        }
        e.preventDefault();
    }

    return (
        <>
            <StyledContainer>
                <StyledRegisterWrapper>
                    <StyledH1>회원가입</StyledH1>
                    {/* 여러 inputWrapper들을 묶기 위한 input's'Wrapper */}
                    <StyledInputsWrapper>
                        {/* 하나의 인풋 박스 형식 : styledInputWrapper*/}
                        {/* user-name */}
                        <StyledInputWrapper>  
                            <StyledLabel htmlFor="user">이름</StyledLabel>
                            {/* fontawesome icon과 인풋박스를 묶기 위한 styledInputBox */}
                            <StyledInputBox>
                                <StyledIcon className="fa-user"></StyledIcon>
                                <StyledInput type="text" onChange={onChangeName} value={name} id="user"/>
                                <p className="msg"> {nameMsg} </p>
                            </StyledInputBox>
                        </StyledInputWrapper>
                        {/* password */}
                        <StyledInputWrapper>  
                            <StyledLabel htmlFor="pwd">비밀번호</StyledLabel>
                            <StyledInputBox>
                                <StyledIcon className="fa-lock"></StyledIcon>
                                <StyledInput type="password" onChange={onChangePwd} value={pwd} id="pwd"/>
                                <p className="msg"> {pwdMsg} </p>
                            </StyledInputBox>
                        </StyledInputWrapper>
                        {/* email */}
                        <StyledInputWrapper>  
                            <StyledLabel htmlFor="email">이메일</StyledLabel>
                            <StyledInputBox>
                                <StyledIcon className="fa-envelope"></StyledIcon>
                                <StyledInput type="email" onChange={onChangeEmail} value={email} id="email"/>
                                <p className="msg"> {emailMsg} </p>
                            </StyledInputBox>
                        </StyledInputWrapper>
                        {/* 소속 학교 */}
                        <StyledInputWrapper>  
                            <StyledLabel htmlFor="school">소속 학교</StyledLabel>
                            <StyledInputBox>
                                <StyledIcon className="fa-school"></StyledIcon>
                                <StyledInput type="text" id="school"/>
                            </StyledInputBox>
                        </StyledInputWrapper>
                        {/* 학년 / 반 */}
                        <StyledInputWrapper>  
                            <StyledLabel htmlFor="class">학년 & 반</StyledLabel>
                            <StyledInputBox>
                                <StyledIcon className="fa-table"></StyledIcon>
                                <StyledInput type="text" id="class"/>
                            </StyledInputBox>
                        </StyledInputWrapper>       
                    </StyledInputsWrapper>
                    <StyledButton type="button" onClick={onClick}>회원가입</StyledButton>           
                </StyledRegisterWrapper>
            </StyledContainer>
        </>
    )
}

const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
`;
const StyledRegisterWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledH1 = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 40px;
`;
const StyledInputsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
`;
const StyledInputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
const StyledLabel = styled.label`
    width  : 100%;
    font-size: 24px;
    font-weight: 500;
`;
const StyledInputBox = styled.div`
    width: 100%;
    align-items: center;
    position: relative;
    margin-top: 10px;
`;
const StyledIcon = styled.i.attrs(({className}) => ({
    // className을 props로 전달 : 아이콘을 클래스명으로 처리하기 때문에
    className: `fa-solid ${className}`,
}))`
    font-size: 24px;
    // styledInputBox를 기준으로 배치
    position: absolute;
    top: 8.5px;
    left: 7px;
`;
const StyledInput = styled.input.attrs(({type}) => ({
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
const StyledButton = styled.button`
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