import styled from "styled-components"

export const HeaderContainer = styled.div`
    min-width: 50vw;
    display: flex; 
    // 가로 중앙 정렬 */
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.4s linear;
    /* vertical - horizontal */
    padding: 2vh 2vw;
    /* vertical - horizontal */
    margin: 0.6vh 0;
    
    color: var(--bg-original-black);
    border-radius: 10px;
    background-color: var(--bg-original-white);
`;