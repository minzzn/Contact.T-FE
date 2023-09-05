import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Row } from "react-bootstrap";
import { auth } from "../firebase";
import styled from "styled-components";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
const SERVER_URL = "http://localhost:8080"; // 로컬로 임시 설정함 (배포시 변경)

export const Register = () => {
  // api 테스트 (axios, fetch)
  const [msg, setMsg] = useState(null);
  const fetchData = async () => {
    const response = await axios.get(SERVER_URL + "/api/msg");
    setMsg(response.data);
    //fetch()
    //  .then((response) => response.json())
    //  .then((data) => setMsg(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  // 전체 form validation 여부
  const [validated, setValidated] = useState(false);
  // 유저, 패스워드, 이메일 값 저장
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // 각각의 input값들이 유효한 값을 지니고 있는지 여부 확인 상태
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  // 구글 로그인 정보
  const [googleUserData, setGoogleUserData] = useState(null);

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    console.log("진입");
    event.preventDefault();
    event.stopPropagation();
    // form validation이 true
    if (checkValidity()) {
      // todo: data fetch 방식으로 변환
      setValidated(true);
      navigate("/login");
    } else {
      // 유효성 검사 실패한 경우
      console.log(isNameValid);
      setValidated(false);
    }
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setGoogleUserData(data.user);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    // todo : 화면 라우팅 : 메인 화면으로 이동
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
                  required
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  isValid={isNameValid}
                  isInvalid={!isNameValid}
                />
                <StyledLabel>Name</StyledLabel>
                <StyledSpan />
              </StyledInnerWrapper>
              {/* todo : 에러메시지 : 리액트 부트스트랩 Feedback 안 먹힘 */}
            </StyledFormGroup>

            <StyledFormGroup>
              <StyledInnerWrapper>
                <StyledFormControl
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  isValid={isPasswordValid}
                  isInvalid={!isPasswordValid}
                />
                <StyledLabel>Password</StyledLabel>
                <StyledSpan />
              </StyledInnerWrapper>
              {/* todo : 에러메시지 */}
            </StyledFormGroup>

            <StyledFormGroup>
              <StyledInnerWrapper>
                <StyledFormControl
                  required
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isValid={isEmailValid}
                  isInvalid={!isEmailValid}
                />
                <StyledLabel>E-mail</StyledLabel>
                <StyledSpan />
              </StyledInnerWrapper>
              {/* todo : 에러메시지 */}
            </StyledFormGroup>
          </Row>
          <StyledBtn type="submit">SIGN UP</StyledBtn>
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "black",
              marginTop: "30px",
            }}
          ></div>
          {/* todo : 구글 로그인 폼 */}
          <StyledGoogleBtn onClick={handleGoogleLogin}>
            <i
              className="fab fa-google"
              style={{
                fontSize: "1.2rem",
                lineHeight: "inherit",
                marginRight: "0.8rem",
                color: "orange",
              }}
            ></i>
            <span>SIGN IN WITH GOOGLE</span>
          </StyledGoogleBtn>
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
const StyledFormControl = styled(Form.Control)`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: solid #aaaaaa 1px;
  font-size: 16px;
  color: #222222;
  background: none;
  font-weight: 600;

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
const StyledGoogleBtn = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: #aaa;
  }
`;
