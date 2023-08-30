import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Row } from "react-bootstrap";
import styled from "styled-components";

export const Register = () => {
  // 유저 정보 객체
  const user = {
    name: "",
    password: "",
    email: "",
  };

  const errorMsg = {
    name: "2글자 이상 적어주세요",
    password: "6글자 이상 적어주세요",
    email: "이메일 형식을 제대로 적어주세요",
  };

  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // form validation이 true
    if (checkValidity()) {
      console.log("유효성 확인했어요");
      setValidated(true);
      navigate("/login");
    }
    setValidated(true);
  };

  const checkValidity = () => {
    // 이름이 2글자 이상이면 true
    const nameValid = userName.length >= 2;
    // 비밀번호가 6글자 이상이면 true
    const pwdValid = password.length > 6;
    // 이메일 유효 여부 정규표현식 조건을 만족하면 true
    const emailValid = /^[a-z0-9%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(email);

    // 그렇다면 valid state들을 true로 변경
    setIsNameValid(nameValid);
    setIsPasswordValid(pwdValid);
    setIsEmailValid(emailValid);

    // 세 경우를 모두 만족해야 validity함수는 true반환
    return nameValid && pwdValid && emailValid;
  };

  return (
    <>
      <StyledWrapper>
        <StyledForm noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <StyledFormGroup>
              <StyledInnerWrapper>
                <StyledFormControl
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  isValid={isNameValid}
                />
                <StyledLabel>Name</StyledLabel>
                <StyledSpan />
              </StyledInnerWrapper>
              {/* todo : 에러메시지 */}
              {!isNameValid && (
                <StyledErrorMessage>{errorMsg.name}</StyledErrorMessage>
              )}
            </StyledFormGroup>

            <StyledFormGroup>
              <StyledInnerWrapper>
                <StyledFormControl
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isValid={isPasswordValid}
                />
                <StyledLabel>Password</StyledLabel>
                <StyledSpan />
              </StyledInnerWrapper>
              {/* todo : 에러메시지 */}
              {!isPasswordValid && (
                <StyledErrorMessage>{errorMsg.password}</StyledErrorMessage>
              )}
            </StyledFormGroup>

            <StyledFormGroup>
              <StyledInnerWrapper>
                <StyledFormControl
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isValid={isEmailValid}
                />
                <StyledLabel>E-mail</StyledLabel>
                <StyledSpan />
              </StyledInnerWrapper>
              {/* todo : 에러메시지 */}
              {!isEmailValid && (
                <StyledErrorMessage>{errorMsg.email}</StyledErrorMessage>
              )}
            </StyledFormGroup>
          </Row>
          <StyledBtn type="submit">Submit</StyledBtn>
        </StyledForm>
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  padding: 40px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledInnerWrapper = styled.div`
  height: 50px;
  max-width: 298px;
`;
// form 태그
const StyledForm = styled(Form)`
  width: max-content;
  padding: 40px;
  box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;
const StyledBtn = styled(Button)`
  padding: 8px;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-radius: 7px;

  &:hover {
    background-color: #aaa;
  }
`;
// grouping 태그
const StyledFormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
// input 태그
const StyledFormControl = styled(Form.Control).attrs({
  required: true,
})`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: solid #aaaaaa 1px;
  font-size: 16px;
  color: #222222;
  background: none;

  &::placeholder {
    color: #aaaaaa;
  }
  &:focus {
    outline: none;
  }
`;
const StyledLabel = styled.label`
  position: relative;
  font-size: 20px;
  color: #aaa;
  right: -9px;
  top: -33px;
  transition: all 0.5s;

  ${StyledFormControl}:focus + & {
    font-size: 20px;
    top: -57px;
    color: #666;
    font-weight: bold;
  }
  ${StyledFormControl}:valid + & {
    font-size: 20px;
    top: -57px;
    color: #666;
    font-weight: bold;
  }
`;
const StyledSpan = styled.span`
  display: block;
  position: relative;
  top: -28px;
  width: 0;
  height: 2px;
  /* 왼 -> 오 */
  left: 0;
  background-color: #666;
  border-radius: 2px;
  transition: all 0.5s;

  /* transition만 안 먹는 중 */
  ${StyledFormControl}:focus + ${StyledLabel} + & {
    width: 100%;
  }
  ${StyledFormControl}:valid + ${StyledLabel} + & {
    width: 100%;
  }
`;
const StyledErrorMessage = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: red;
`;
