import { useState } from "react"
import { ErrorMsgContainer, FormInnerWrapper, LoginInput, LoginSubmitButton, LoginTitle, StyledForm, StyledLabel, StyledLink } from "../../css/styled/signin_up.styled";
import { EmailFormat } from "../../constant/user.constraints";
import { postLoginDataWith } from "../../function/login.register.js";
import { useNavigate } from "react-router-dom";
import { ToastifyWarn } from "../../function/toast.js";
import { ToastContainer } from 'react-toastify';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function onChange(e) {
      // deconstructed obj
        const {
          target: { name, value },
        } = e;

        switch(name) {
          case "email":
            setEmail(value);
          
            (!value?.match(EmailFormat)) ? setError("이메일 형식이 올바르지 않습니다") : setError("");           
            break;
          case "password":
            setPassword(value);
          
            (value?.length < 8) ? setError("비밀번호는 8자리 이상 입력해주세요") : setError("");
            break;
        }
      };
    
    //  로그인 버튼 누를때의 함수
    async function onSubmit(e) {
        e.preventDefault();

        // 서버로 데이터 보내는 로직 추가
        const loginData = {
            email: email,
            password: password,
        };

        // 제대로 입력하지 않으면 라우팅되는거 막기
        if(loginData.email === "" || loginData.password === "") {
            ToastifyWarn("회원가입을 해주시거나, 다시 시도해주세요");
            return;
        }
        
        // 유저 정보를 잘 넘기면 true반환
        const resultAfterPost = await postLoginDataWith(loginData,'auth/login')

        if(resultAfterPost) {
            navigate('/main');
        } else {
            ToastifyWarn("다시 작성해주세요");
            return;
        }
    }

    return (
        <>
            <StyledForm>
                <LoginTitle>로그인</LoginTitle>
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
                    계정이 없으신가요?
                    <StyledLink to="/register">
                        회원가입하기
                    </StyledLink>
                </FormInnerWrapper>
                <FormInnerWrapper>
                    <LoginSubmitButton
                        type="button"
                        value="login"
                        disabled={error?.length > 0}
                        onClick={onSubmit}
                    >로그인</LoginSubmitButton>
                </FormInnerWrapper>
                <div style={{
                    textAlign: "center",
                    color: "var(--bg-light-gray)",
                    marginTop: "5vh"
                }}>소셜 로그인 :</div>
            </StyledForm>
            <ToastContainer />
        </>
    )
}