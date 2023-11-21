import styled from "styled-components"

export const HouseContainer = styled.div`
    /* 나머지 부분을 꽉 채우는 형태 */
    width: 100%;
    height: 100%;
    margin: 6.5vh 5vw 6.5vh 2vw;

    gap: 20px;

    /* 가로로 */
    display: flex;
    /* 최대한 길쭉하게 빼기 */
    justify-content: stretch;
`

export const InnerPane = styled.div`
    background-color: black;
    padding: 30px;
    border-radius: 15px;
    
    flex: 1;
    max-height: 870px;

    display: flex;
    flex-direction: column;
`