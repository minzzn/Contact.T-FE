import styled from "styled-components";

export const RequestsContainer = styled.div`
    position: absolute;
    top: 55px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: opacity linear 0.3s;
    opacity: ${props => props.$isVisible ? 1 : 0};
    background-color: var(--bg-main-green);
    border-radius: 10px;

    z-index: 5;
`;

export const RequestContainer = styled.div` 
    width: 260px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    color: var(--bg-original-white);
`;

export const StyleIconInMessage = styled.i`
    font-size: 0.67em;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
        color: var(--bg-deep-green);
    }
`