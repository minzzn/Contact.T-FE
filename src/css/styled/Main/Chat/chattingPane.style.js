import styled from "styled-components"

export const ChatContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 45vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--bg-original-white);
    border-radius: 15px;
    box-shadow: 10px 10px 10px #ceced1;
    transition: all 0.3s ease;

    opacity: ${props => props.$isChatActive ? 1 : 0};
`;