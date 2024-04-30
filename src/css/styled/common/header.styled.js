import styled from "styled-components"

export const HeaderContainer = styled.div`
    // 콘텐츠 크기에 맞게끔 높이는 최대한 작게
    height: 11vh;
    display: flex;
    // 가로 중앙 정렬 */
    align-items: center;
    justify-content: space-evenly;
    transition: background-color 0.4s linear;
    /* vertical - horizontal */
    padding: 2vh 2vw;
    /* vertical - horizontal */
    margin: 0.6vh 0;
    color: var(--bg-original-black);
    border-radius: 10px;
    background-color: var(--bg-original-white);
`;