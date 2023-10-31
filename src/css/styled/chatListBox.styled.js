import styled from "styled-components"

export const Container = styled.div`
    min-width: 250px;
    width: 100%;
    // 콘텐츠 크기에 맞게끔 높이는 최대한 작게
    height: 11vh;
    display: flex;
    justify-content: space-between;
    /* vertical - horizontal */
    padding: 10px 8px;
    /* vertical - horizontal */
    margin: 1.4vh 0;
    color: var(--bg-dark-gray);
    transition: color 0.5s linear;

    &:hover {
        font-weight: 800;
        color: var(--bg-orange);
    }
`;

export const ImgContainer = styled.div`
    overflow: hiddden;
    flex: 1.5;
    border: 1px solid var(--bg-black);
    border-radius: 10%;
    margin-right: 7px;
    object-fit: cover;
`;

export const NameAndContentContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // 최대한 왼쪽에 붙도록
    align-items: start;
`;

export const DateContainer = styled.div`
    flex: 1;
    margin-top: 4px;
`;