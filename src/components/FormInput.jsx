import styled from "styled-components";

export const FormInput = ({ placeholder }) => {
  return (
    <>
      <StyledFormInputContainer className="formInput">
        <StyledLabel htmlFor={placeholder}>{placeholder}</StyledLabel>
        <StyledInput type="text" placeholder={placeholder} />
      </StyledFormInputContainer>
    </>
  );
};

const StyledInput = styled.input`
  width: inherit;
  padding: 15px;
  /* 수평 수직 */
  margin: 10px 0;
`;

const StyledFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const StyledLabel = styled.label`
  font-size: 25px;
  font-weight: 700;
`;
