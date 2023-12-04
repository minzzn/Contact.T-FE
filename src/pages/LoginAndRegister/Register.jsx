import { useState } from "react";
import { ErrorMsgContainer, FormInnerWrapper, LoginInput, LoginSubmitButton, LoginTitle, StyledForm, StyledLabel, StyledLink } from "../../css/styled/signin_up.styled";
import { useNavigate } from "react-router-dom";
import { isRequired, MinimumLength, CantContainSpace, EmailFormat, SpecialText } from "../../constant/user.constraints";
//import { sendReqAndSaveToken } from "../../function/login.register";
import { postRegisterDataWith } from "../../function/login.register";
import { ToastifyWarn } from "../../function/toast";
import { ToastContainer } from 'react-toastify';

export const Register = () => {
    const navigate = useNavigate();
    const BACK_API_URL = process.env.REACT_APP_BACKEND_API_URL;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [valid, setValid] = useState({
        name: false,
        email: false,
        password: false,
    });

    function validation(value, constraints) {
        const result = [];
        // 만약 제한 조건으로 들어온 값들 중에 false로 넘어온 값들이 있으면 그걸 배열에 다시 담습니다.
        constraints.map((constraint) => {
            if(constraint.rule.test(value) === false) {
                result.push(constraint.message);
            }
        })
        
        // 제한 조건에 해당 안 되는게 하나라도 있으면 배열 중 가장 앞 값을 반환
        return (result.length > 0) ? result[0] : null;
    }

    function onChange(event) {
        // deconstructed obj
        const {
            target: { name, value }
        } = event;
        let result = null;
    
        switch(name) {
            case "name":
                setName(value);
                result = validation(value, [isRequired, MinimumLength(2), CantContainSpace]);

                (result === null) ? setValid((prevState) => ({...prevState, name: true})) : setValid((prevState) => ({...prevState, name: false}));
                break;
            case "email":
                setEmail(value);
                result = validation(value, [isRequired, CantContainSpace, EmailFormat]);

                (result === null) ? setValid((prevState) => ({...prevState, email: true})) : setValid((prevState) => ({...prevState, email: false}));
                break;
            case "password":
                setPassword(value);
                result = validation(value, [isRequired, CantContainSpace, MinimumLength(8), SpecialText]);

                (result === null) ? setValid((prevState) => ({...prevState, password: true})) : setValid((prevState) => ({...prevState, password: false}));
                break;
        }
        setError(result);
    }

    async function onSubmit(event) {
        event.preventDefault();
        // 유효하지 않은 정보가 하나라도 있으면 안됨
        if(Object.values(valid).filter((value) => value === false).length > 0) {
            ToastifyWarn("모든 항목을 제대로 입력해주세요");
            return;
        }
        // 서버로 보낼 데이터 객체형태로 묶기
        const formattedUserData = {
            name: name,
            email: email,
            password: password,
        }

        const resultAfterPost = postRegisterDataWith(formattedUserData,'auth/sign-up');
        
        // 모두 유효하다면, 로그인 페이지로 : 토큰 저장하는 코드 지웠음, 유효성 검사 해야됨.
        if(resultAfterPost) {
            navigate("/");
        }
    }



    return (
        <>
            <StyledForm>
                <LoginTitle>회원가입</LoginTitle>
                <FormInnerWrapper>
                    <StyledLabel htmlFor="name">이름</StyledLabel>
                    <LoginInput 
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={name}
                        onChange={onChange}
                    />
                </FormInnerWrapper>
                <FormInnerWrapper>
                    <StyledLabel htmlFor="email">이메일</StyledLabel>
                    <LoginInput 
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={email}
                        onChange={onChange}
                    />
                </FormInnerWrapper>
                <FormInnerWrapper>
                    <StyledLabel htmlFor="password">비밀번호</StyledLabel>
                    <LoginInput 
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={password}
                        onChange={onChange}
                    />
                </FormInnerWrapper>
                
                <FormInnerWrapper>
                    <ErrorMsgContainer $visibleTrue={`${error?.length > 0}`}>{error}</ErrorMsgContainer>
                </FormInnerWrapper>

                <FormInnerWrapper>
                    이미 계정이 있으신가요?
                    <StyledLink to="/">
                        로그인하기
                    </StyledLink>
                </FormInnerWrapper>
                <FormInnerWrapper>
                    <LoginSubmitButton
                        type="button"
                        value="register"
                        disabled={error?.length > 0}
                        onClick={onSubmit}
                    >회원가입</LoginSubmitButton>
                </FormInnerWrapper>
            </StyledForm>  
            <ToastContainer />
        </>
    )
}