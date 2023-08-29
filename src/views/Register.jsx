import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import styled from "styled-components";

export const Register = () => {
  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState("");

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

  return (
    <>
      <StyledWrapper>
        <StyledForm noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <StyledFormGroup>
              <StyledNameWrapper>
                <StyledFormControl
                  className="input"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <StyledLabel className="nameLabel">Name</StyledLabel>
                <StyledSpan className="nameSpan" />
              </StyledNameWrapper>
              <Form.Control.Feedback type="invalid">
                이름을 입력해주세요
              </Form.Control.Feedback>
            </StyledFormGroup>
          </Row>

          <Button type="submit">Submit form</Button>
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

const StyledNameWrapper = styled.div`
  height: 50px;
`;

// form 태그
const StyledForm = styled(Form)`
  width: max-content;
  padding: 40px;
  box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

// grouping 태그
const StyledFormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

// input 태그
const StyledFormControl = styled(Form.Control).attrs({
  required: true,
  type: "text",
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
  transition: all 0.2s;

  ${StyledFormControl}:focus + & {
    font-size: 16px;
    bottom: 40px;
    color: #666;
    font-weight: bold;
  }
  ${StyledFormControl}:valid + & {
    font-size: 16px;
    bottom: 40px;
    color: #666;
    font-weight: bold;
  }
`;

const StyledSpan = styled.span`
  display: block;
  width: 0;
  height: 2px;
  background-color: #666;
  border-radius: 2px;
  position: relative;
  top: -28px;
  transition: 0.5s;
`;
