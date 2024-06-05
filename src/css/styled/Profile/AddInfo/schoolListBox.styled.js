import styled from "styled-components";

export const SchoolContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const SchoolDiv = styled.div`
    width: 100%;
    border: 2px solid var(--bg-main-green);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    /* vertical horizontal */
    margin: 5px 0;
    transition: all 0.2s ease;

    &:hover {
        cursor: pointer;
        background-color: var(--bg-main-green);
    }
`

export const SchoolName = styled.h3`
    font-size: 1.3rem;
    font-weight: 500;
`;

export const SchoolAddressP = styled.p`
    margin-top: 3px;
    font-size: 10px;
    color: var(--bg-original-black);
    font-weight: 400;
    opacity: 0.4;
    flex-wrap: wrap;
`