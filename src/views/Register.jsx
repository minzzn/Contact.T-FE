import { useState } from "react";
import { ErrorMsgContainer, FormInnerWrapper, LoginInput, LoginSubmitButton, LoginTitle, StyledForm, StyledLabel, StyledLink } from "../css/styled/signin_up.styled";
import { useNavigate } from "react-router-dom";
import { isRequired, MinimumLength, CantStartWithNumber, CantStartWithSpace, EmailFormat, SpecialText } from "../constant/user.constraints";

export const Register = () => {
    const navigate = useNavigate();
    const validRules = new Array(3).fill(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function validation(value, constraints) {
        console.log('검증 작업 함수 진입');
        const result = [];
        
        // 만약 제한 조건으로 들어온 값들 중에 false로 넘어온 값들이 있으면 그걸 배열에 다시 담습니다.
        constraints.map((constraint) => {
            if(constraint.rule.test(value) === false) {
                result.push(constraint.message);
            }
        })
        
        console.log(result);
        
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
                result = validation(value, [isRequired, MinimumLength(2), CantStartWithSpace, CantStartWithNumber]);
                if(result === null) {
                    validValues[0] = true;
                }
                break;
            case "email":
                setEmail(value);
                result = validation(value, [isRequired, CantStartWithSpace, CantStartWithNumber, EmailFormat]);
                if(result === null) {
                    validValues[1] = true;
                }
                break;
            case "password":
                setPassword(value);
                result = validation(value, [isRequired, MinimumLength(8), SpecialText]);
                if(result === null) {
                    validValues[2] = true;
                }
                break;
        }

        setError(result);
    }

    function onSubmit(event) {
        event.preventDefault();
        const isAllValid = validRules.filter((value) => value === true);
        console.log(isAllValid);

        if(isAllValid.length === 3) {
            // 로그인 페이지로
            console.log('로그인 페이지로 이동하는 지점 진입');
            navigate("/");
        }
        alert("모든 항목을 제대로 작성해주세요");
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
                {
                    error && error.length > 0 && (
                        <FormInnerWrapper>
                            <ErrorMsgContainer>{error}</ErrorMsgContainer>
                        </FormInnerWrapper>
                    )
                }
                <FormInnerWrapper>
                    이미 계정이 있으신가요?
                    <StyledLink to="/register">
                        로그인하기
                    </StyledLink>
                </FormInnerWrapper>
                <FormInnerWrapper>
                    <LoginSubmitButton
                        type="button"
                        value="register"
                        // disabled={error?.length > 0}
                        onClick={onSubmit}
                    >회원가입</LoginSubmitButton>
                </FormInnerWrapper>
            </StyledForm>  
        </>
    )
}

// todo : option customize