import { useState } from "react"
import { ErrorMsgContainer, FormInnerWrapper, LoginInput, LoginSubmitButton, LoginTitle, StyledForm, StyledLabel, StyledLink } from "../../css/styled/signin_up.styled";
import { useNavigate } from "react-router-dom";
import { EmailFormat } from "../../constant/user.constraints";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

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

    function onSubmit(e) {
        e.preventDefault();
        
        // 서버에 요청을 보내고 토큰을 저장하는 함수
        sendReqAndSaveToken(BACK_API_URL, 'POST', formattedUserData);

        // 변경 필요 : 인증되어야 main화면으로 넘어가요
        navigate('/main');
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
                {
                    error && error.length > 0 && (
                        <FormInnerWrapper>
                            <ErrorMsgContainer>{error}</ErrorMsgContainer>
                        </FormInnerWrapper>
                    )
                }
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
            </StyledForm>
        </>
    )
}