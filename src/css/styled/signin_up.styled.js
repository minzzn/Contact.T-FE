import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    /* width, height는 내부 컴포넌트들의 사이즈로 결정 */
    width: 40%;
    height: 60%;
    margin: auto;
    margin-top: 12vh;
`
export const LoginTitle = styled.h1`
    text-align: center;
    margin-bottom: 4px;
    font-size: 2.5rem;
`

export const FormInnerWrapper = styled.div`
    margin-top: 20px;
    width: 100%;
`

export const StyledLabel = styled.label`
    display: block;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 20px;
`

export const LoginInput = styled.input`
    height: 20px;
    padding: 20px 15px;
    font-size: 18px;
    border-radius: 0.3rem;
    border: 1px solid orange;
    box-sizing: border-box;
    width: 100%;
`

export const ErrorMsgContainer = styled.div`
    color: red;
    font-weight: 600;
`

export const StyledLink = styled(Link)`
    margin-left: 10px;
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: 600;

    &:hover, &:focus {
        color: orange;
    }
`

export const LoginSubmitButton = styled.button`
    width: 100%;
    height: 48px;
    font-weight: 600;
    padding: 10px;
    cursor: pointer;
    margin: 0 auto;
    font-size: 18px;
    color: white;
    background-color: black;
    border: none;


    &:focus, &:hover {
        background-color: orange;
    }
    /* 버튼이 클릭되었다가 떼질 때 */
    &:active {
        background-color: orangered;
    }
`