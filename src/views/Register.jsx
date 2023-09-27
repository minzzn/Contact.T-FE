import styled from "styled-components"

export const Register = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useStae("");
    const [email, setEmail] = useStae("");

    const onSumbit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <StyledContainer>
                <StyledRegisterWrapper>
                    <StyledH1>회원가입</StyledH1>
                    {/* 여러 inputWrapper들을 묶기 위한 input's'Wrapper */}
                    <StyledInputsWrapper>
                        {/* 하나의 인풋 박스 형식 : styledInputWrapper*/}
                        {/* user-name */}
                        <StyledInputWrapper>  
                            <StyledLabel>이름</StyledLabel>
                            {/* fontawesome icon과 인풋박스를 묶기 위한 styledInputBox */}
                            <StyledInputBox>
                                <StyledIcon className="fa-user"></StyledIcon>
                                <StyledInput type="text" onChange={(e)=> setName(e.target.value)}/>
                            </StyledInputBox>
                        </StyledInputWrapper>
                        {/* password */}
                        <StyledInputWrapper>  
                            <StyledLabel>비밀번호</StyledLabel>
                            <StyledInputBox>
                                <StyledIcon className="fa-lock"></StyledIcon>
                                <StyledInput type="password" onChange={(e)=> setPassword(e.target.value)}/>
                            </StyledInputBox>
                        </StyledInputWrapper>
                        {/* email */}
                        <StyledInputWrapper>  
                            <StyledLabel>이메일</StyledLabel>
                            <StyledInputBox>
                                <StyledIcon className="fa-envelope"></StyledIcon>
                                <StyledInput type="email" onChange={(e)=> setEmail(e.target.value)}/>
                            </StyledInputBox>
                        </StyledInputWrapper>
                        {/* 소속 학교 */}
                        <StyledInputWrapper>  
                            <StyledLabel>소속 학교</StyledLabel>
                            <StyledInputBox>
                                <StyledIcon className="fa-school"></StyledIcon>
                                <StyledInput type="text"/>
                            </StyledInputBox>
                        </StyledInputWrapper>
                        {/* 학년 / 반 */}
                        <StyledInputWrapper>  
                            <StyledLabel>학년 & 반</StyledLabel>
                            <StyledInputBox>
                                <StyledIcon className="fa-table"></StyledIcon>
                                <StyledInput type="text"/>
                            </StyledInputBox>
                        </StyledInputWrapper>       
                    </StyledInputsWrapper>
                    <StyledButton onSubmit={onSumbit}>회원가입</StyledButton>           
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
    padding: 40px;
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
    margin-top: 5px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
`;
const StyledInputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
const StyledLabel = styled.label`
    width  : 100%;
    font-size: 24px;
    font-weight: 500;
`;
const StyledInputBox = styled.div`
    width: 100%;
    align-items: center;
    position: relative;
    margin-top: 10px;
`;
const StyledIcon = styled.i.attrs(({className}) => ({
    // className을 props로 전달 : 아이콘을 클래스명으로 처리하기 때문에
    className: `fa-solid ${className}`,
}))`
    font-size: 24px;
    // styledInputBox를 기준으로 배치
    position: absolute;
    top: 8.5px;
    left: 7px;
`;
const StyledInput = styled.input.attrs(({type}) => ({
    type: type,
}))`
    width: 100%;
    height: 45px;
    font-size: 18px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    // outside section of border
    outline: none;
    border: none;
    border-bottom: 2px solid black;
    transition: border-bottom 0.5s;
    padding-left: 48px;
    &:focus {
        border-bottom: 2px solid orange;
    }
`;
const StyledButton = styled.button`
    width: 60%;
    height: 60px;
    padding: 10px;
    font-size: 25px;
    font-weight: 500;
    margin-top: 25px;
    background-color: orange;
    color: black;
    outline: none;
    border: 2px solid #000;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        background-color: #fdbc43;
    }
`;