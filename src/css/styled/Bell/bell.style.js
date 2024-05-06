import styled from "styled-components"

export const BellContainer = styled.div`
    width: min-content;
    height: min-content;
    position: relative;
    font-size: 2rem;
    color: var(--bg-original-white);
`

export const RedDot = styled.div`
    width: 10px;
    height: 10px;
    background-color: var(--bg-orangered);
    border-radius: 50%;

    position: absolute;
    bottom: ${(props) => props.$marginBottom};

    display: ${(props) => props.$isHavingAlarm === "true" ? "block" : "none" };
`