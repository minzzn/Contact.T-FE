import styled from "styled-components";

export const RequestsContainer = styled.div`
    position: absolute;
    top: 55px;

    z-index: 999;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    opacity: ${props => props.$isVisible ? 1 : 0};
    background-color: var(--bg-main-green);
    border-radius: 10px;
`;

export const RequestContainer = styled.div` 
    width: 300px;
    transition: background-color linear 0.3s;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;

    color: white;
`;