import styled, { keyframes } from "styled-components"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();
    const classList = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
    const gradeList = ['1','2','3','4','5','6'];
    const genderList = ['남', '여'];
    
    // 값 상태관리
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [email, setEmail] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [grade, setGrade] = useState("");
    const [classNumber, setClassNumber] = useState("");
    const [gender, setGender] = useState("");

    // 오류메시지 상태관리
    const [nameMsg, setNameMsg] = useState("");
    const [pwdMsg, setPwdMsg] = useState("");
    const [emailMsg, setEmailMsg] = useState("");

    // 유효성 검사 상태관리
    const [isValidName, setIsValidName] = useState(false);
    const [isValidPwd, setIsValidPwd] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidSchoolName, setIsValidSchoolName] = useState(false);
    const [disabledSelectBox, setDisabledSelectBox] = useState(true);

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

    const onChangeSchoolName = (e) => {
        const currentSchoolName = e.target.value;
        setSchoolName(currentSchoolName);
        
        if(schoolName.length > 4) {
            setIsValidSchoolName(true);
            setDisabledSelectBox(false);
        } else {
            setIsValidSchoolName(false);
        }
    }

    const onChangeClassNumberSelect = (e) => {
        setClassNumber(e.target.value);
    }

    const onChangeGradeSelect = (e) => {
        setGrade(e.target.value);
    }

    const onChangeGenderSelect = (e) => {
        setGender(e.target.value);
    }

    const onClick = (e) => {
        console.log('진입');
        // 만약 모든 값들이 유효하다면 데이터를 서버에 전송하고 로그인 페이지로 이동
        if(isValidName && isValidPwd && isValidEmail) {
            // todo : 데이터를 서버에 전송해야함
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
                                <StyledInput type="text" id="school" value={schoolName} onChange={onChangeSchoolName}/>
                            </StyledInputBox>
                        </StyledInputWrapper>
                        {/* 학년 / 반 */}
                        <StyledInputWrapper>  
                            <StyledLabel>학년 & 반</StyledLabel>
                            <StyledSelectWrapper>
                                <StyledSelect name="학년" disabled={disabledSelectBox} value={grade} onChange={onChangeGradeSelect}>
                                    {
                                        gradeList.map(function(grade, idx) {
                                            return (
                                                <option key={idx} value={grade}>{`${grade}학년`}</option>
                                            )
                                        })
                                    }
                                </StyledSelect>
                                <StyledSelect name="반" disabled={disabledSelectBox} value={classNumber} onChange={onChangeClassNumberSelect}>
                                    {classList.map(function(item,idx) {
                                        return (
                                            <option key={idx} value={item}>{`${item}반`}</option>
                                        )
                                    })}
                                </StyledSelect>
                            </StyledSelectWrapper>
                        </StyledInputWrapper> 
                        {/* 성별 */}
                        <StyledInputWrapper>
                            <StyledLabel>성별</StyledLabel>
                            <StyledSelect name="성별" value={gender} onChange={onChangeGenderSelect} disabled={disabledSelectBox}>
                                {
                                    genderList.map(function(gender, idx) {
                                        return (
                                            <option key={idx} value={gender}>{`${gender}`}</option>
                                        )
                                    })
                                }
                            </StyledSelect>
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

const StyledSelectWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
`

const StyledSelect = styled.select`
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
`

// todo : option customize

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