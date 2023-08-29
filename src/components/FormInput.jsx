import { useState } from "react";
import styled from "styled-components";

export const FormInput = ({ placeholder, type }) => {
  // password 혹은 userName 혹은 email
  const [inputValue, setInputValue] = useState("");
  const ErrorMsgElement = document.querySelector(".ErrorMsg");

  const onChange = (e) => {
    // inputvalue값을 State에 변경
    setInputValue(e.target.value);

    // todo : inputValue가 없으면 error message 출력
    if (inputValue === "") {
      ErrorMsgElement.style.display = "block";
    }
  };

  return (
    <>
      <StyledFormInputContainer className="formInput">
        <StyledLabel htmlFor={placeholder}>{placeholder}</StyledLabel>
        <StyledInput
          required
          type={type}
          placeholder={placeholder}
          id={placeholder}
          value={inputValue}
          onChange={onChange}
        />
        <StyledErrMsg className="ErrorMsg">Error</StyledErrMsg>
      </StyledFormInputContainer>
    </>
  );
};

const StyledFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const StyledInput = styled.input`
  width: inherit;
  padding: 15px;
  /* 수평 수직 */
  margin: 10px 0;
`;

const StyledLabel = styled.label`
  font-size: 25px;
  font-weight: 700;
`;

const StyledErrMsg = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: red;
  display: none;
`;
