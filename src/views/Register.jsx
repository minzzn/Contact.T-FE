import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Row } from "react-bootstrap";
import styled from "styled-components";

export const Register = () => {
  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    // form validation 탈락
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // validation 성공
    }

    setValidated(true);
    event.preventDefault();
    event.stopPropagation();
  };

  console.log(userName);
  console.log(password);
  console.log(email);

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
                />
                <StyledLabel>Name</StyledLabel>
                <StyledSpan />
              </StyledInnerWrapper>
              {/* todo : 에러메시지 */}
            </StyledFormGroup>

            <StyledFormGroup>
              <StyledInnerWrapper>
                <StyledFormControl
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <StyledLabel>Password</StyledLabel>
                <StyledSpan />
              </StyledInnerWrapper>
              {/* todo : 에러메시지 */}
            </StyledFormGroup>

            <StyledFormGroup>
              <StyledInnerWrapper>
                <StyledFormControl
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <StyledLabel>E-mail</StyledLabel>
                <StyledSpan />
              </StyledInnerWrapper>
              {/* todo : 에러메시지 */}
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
const StyledBtn = styled(Button).attrs({
  type: "button",
})`
  padding: 8px;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 20px;
  font-weight: 500;
  border: none;
  border-radius: 7px;

  &:hover,
  &:focus {
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
