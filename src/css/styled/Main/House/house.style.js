import styled from "styled-components"

export const HouseContainer = styled.div`
    /* 나머지 부분을 꽉 채우는 형태 */
    width: 100vw;
    height: 100%;
    margin-left: 3vw; 

    gap: 20px;

    /* 가로로 */
    display: flex;
    /* 최대한 길쭉하게 빼기 */
    justify-content: stretch;
`

export const InnerPane = styled.div`
    background-color: orange;
    padding: 30px;

    display: flex;
`