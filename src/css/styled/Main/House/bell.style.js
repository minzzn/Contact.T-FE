import styled from "styled-components"

export const BellContainer = styled.div`
    width: min-content;
    height: min-content;

    position: absolute;
    top: 8vh;
    right: 1vw;
    font-size: 2rem;
    color: white;
`

export const BellIcon = styled.i.attrs(({className}) => ({
    className: `${className}`,
}))`
    &:hover {
        color: var(--bg-light-gray);
        cursor: pointer;
    }
`

export const RedDot = styled.div`
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;

    position: absolute;
    bottom: 0;
    left: 0;
`