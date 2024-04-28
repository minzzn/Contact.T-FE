import styled from "styled-components"

export const ChatIconsContainer = styled.div`
    min-width: 250px;
    width: 50%;
    // 콘텐츠 크기에 맞게끔 높이는 최대한 작게
    height: 11vh;
    display: flex;
    /* // 세로로 쌓이도록
    flex-direction: row;
    justify-content: flex-start; 
    // 가로 중앙 정렬 */
    align-items: center;
    transition: all 0.4s linear;
    /* vertical - horizontal */
    padding: 2vh 2vw;
    /* vertical - horizontal */
    margin: 0.6vh 0;
    color: var(--bg-original-black);
    border-radius: 10px;
    background-color: var(--bg-original-white);
    margin-left: 2vh;
`;
export const IconsModalContainer = styled.div`
    width: min-content;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: var(--bg-original-white);
`