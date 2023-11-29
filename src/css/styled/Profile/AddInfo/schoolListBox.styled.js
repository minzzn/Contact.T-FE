import styled from "styled-components";

export const SchoolContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

export const SchoolDiv = styled.div`
    width: 100%;
    border: 1px solid orange;
    border-radius: 5px;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px 0;
    transition: all 0.2s linear;

    &:hover {
        cursor: pointer;
        background-color: orange;
    }
`

export const SchoolName = styled.h3`
    font-size: 1.2rem;
    font-weight: 500;
`;

export const EtcContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`
export const SchoolAddressP = styled.p`
    font-size: 10px;
    color: black;
    font-weight: 400;
    flex-wrap: wrap;
`