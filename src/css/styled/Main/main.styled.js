import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  // 가로 정렬
  display: flex;
  overflow: hidden;
`;

export const ChatListContainer = styled.div`
    width: min-content;
    height: 100vh;
    background-color: var(--bg-white);
    display: flex;
    // 세로로 쌓이도록
    flex-direction: column;
    // 가로 중앙 정렬
    align-items: center;
    transition: all 0.4s linear;
    border-right: 2px solid var(--bg-dark-gray);
`;

export const ChatListLiContainer = styled.div`
    width: 100%;
    // 높이는 스크롤 가능하도록 무제한으로
    // 채팅목록 박스들이 세로로 쌓이도록
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;

export const ChatContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: var(--bg-beige);
`;

export const IconsWrapper = styled.div`
    background-color: var(--bg-white);
    padding: 5px;
    display: flex;
    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'row'};
    align-items: center;
    justify-content: center;
`;

export const IconsModalWrapper = styled.div`
    width: min-content;
    padding: 5px;
    /* vertical horizontal */
    margin: 3vh 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 5px 5px 10px var(--bg-dark-gray);
`

export const StyledIcon = styled.i.attrs(({className}) => ({
    className: `${className}`,
}))`
    font-size: ${(props) => props.size ? props.size : '16px'};
    margin-right: ${(props) => props.$marginright ? props.$marginright : 0};
    color: ${(props) => props.$ischatlistactive === "true" ? 'var(--bg-black)' : 'var(--bg-dark-gray)'};
    transition: all 0.2s linear;

    &:hover {
        color: var(--bg-beige);
    }
`;