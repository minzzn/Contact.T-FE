import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  align-items: center;
  justify-content: center;
`;

export const StyledLoader = styled.span`
    // addinfo.styled.js : StyledButton의 font-size와 연동되어야함
    width: 1.2rem; height: 1.2rem;
    border: 5px solid #FFF;
    border-bottom-color: var(--bg-main-green);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 
`;