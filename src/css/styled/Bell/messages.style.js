import styled from "styled-components";

export const RequestsContainer = styled.div`
    position: absolute;
    top: 55px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: opacity linear 0.3s;
    opacity: ${props => props.$isVisible ? 1 : 0};
    background-color: var(--bg-main-green);
    border-radius: 10px;
`;

export const RequestContainer = styled.div` 
    width: 300px;
    transition: background-color linear 0.3s, color linear 0.3s;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;

    color: white;

    &:hover {
        background-color: var(--bg-deep-green);
        color: black;
    }
`;