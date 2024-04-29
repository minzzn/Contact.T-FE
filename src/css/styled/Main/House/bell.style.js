import styled from "styled-components"

export const BellContainer = styled.div`
    width: min-content;
    height: min-content;

    position: relative;
    color: white;
`

export const RedDot = styled.div`
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;

    position: absolute;
    bottom: ${(props) => props.$marginBottom};

    display: ${(props) => props.$isHavingAlarm === "true" ? "block" : "none" };
`