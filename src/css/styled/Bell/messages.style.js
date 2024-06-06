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

    z-index: 3;
`;
export const RequestContainer = styled.div` 
    width: 300px;
    transition: color ease 0.3s;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    color: white;
`;