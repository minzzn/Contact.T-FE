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
              <StyledFormControl
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
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

// form 태그
const StyledForm = styled(Form)`
  width: max-content;
  padding: 30px;

  box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`;

// grouping 태그
const StyledFormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

// input 태그
const StyledFormControl = styled(Form.Control).attrs({
  required: true,
  type: "text",
  placeholder: "User Name",
})`
  padding: 10px;
  border: none;
`;
