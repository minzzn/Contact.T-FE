import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  align-items: center;
  justify-content: center;
`;

export const StyledLoader = styled.span`
    width: 48px;
    height: 48px;
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