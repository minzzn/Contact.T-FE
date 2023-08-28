import styled from "styled-components";
import { FormInput } from "../components/FormInput";

export const Register = () => {
  return (
    <>
      <Wrapper className="register">
        <StyledForm>
          <FormInput placeholder="name" />
          <FormInput placeholder="password" />
          <FormInput placeholder="email" />
          <button>Submit</button>
        </StyledForm>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
