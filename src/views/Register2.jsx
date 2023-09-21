import styled from "styled-components"

export const Register2 = () => {
    return (
        <>
            <StyledContainer>
                <StyledRegisterWrapper>
                    <StyledH1>회원가입</StyledH1>
                    <StyledInputsWrapper>
                        <StyledInputBox>
                            <StyledLabel>이름</StyledLabel>
                            <StyledInput />
                        </StyledInputBox>
                    </StyledInputsWrapper>
                </StyledRegisterWrapper>
            </StyledContainer>
        </>
    )
}

const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;
const StyledRegisterWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledH1 = styled.h1`
  width: 100%;
  text-align: left;
  font-size: 40px;
`;
const StyledInputsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 15px;
`;
const StyledInputBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
`
const StyledLabel = styled.label`
  width  : 100%;
  font-size: 20px;
  font-weight: 500;
`;
const StyledInput = styled.input`
    width: 100%;
    height: 35px;
    font-size: 18px;
    font-weight: 500;
`;