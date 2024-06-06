import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    /* width, height는 내부 컴포넌트들의 사이즈로 결정 */
    min-width: 60vh;
    min-height: 80vh;
    width: 40%;
    height: 60%;
    margin: auto;
    margin-top: 5vh;
    padding: 50px;
    color: var(--bg-original-black);
    background-color: var(--bg-original-white);
    border-radius: 7%;
    filter: drop-shadow(5px 5px 3px var(--bg-main-green));
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
    border: 3px solid var(--bg-button-gray);
    box-sizing: border-box;
    width: 100%;
`

export const ErrorMsgContainer = styled.div`
    width: 100%;
    height: 20px;
    color: red;
    font-weight: 600;
    visibility: ${(props) => props.$visibleTrue ? 'visible' : 'hidden'};
`

export const StyledLink = styled(Link)`
    margin-left: 10px;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    color: var(--bg-original-black);
    transition: color 0.3s ease;

    &:hover, &:focus {
        color: var(--bg-main-green);
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
    color: var(--bg-original-white);
    background-color: var(--bg-original-black);
    border: none;
    transition: background-color 0.3s ease;

    &:focus, &:hover {
        background-color: var(--bg-main-green);
    }
    /* 버튼이 클릭되었다가 떼질 때 */
    &:active {
        background-color: var(--bg-main-green);
    }
`