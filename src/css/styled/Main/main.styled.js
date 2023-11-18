import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  // 가로 정렬
  display: flex;
  overflow: hidden;
  background-color: var(--bg-light-gray);
`;

export const ChatIconsContainer = styled.div`
    width: min-content;
    height: 100vh;
    display: flex;
    // 세로로 쌓이도록
    flex-direction: column;
    // 가로 중앙 정렬
    align-items: center;
    transition: all 0.4s linear;
`;

export const ChatAndPeopleListContainer = styled.div`
    width: 100%;
    // 채팅목록 박스들이 세로로 쌓이도록
    display: flex;
    flex-direction: column;
    // 높이는 스크롤 가능하도록 무제한으로
    overflow-y: scroll;
    border-radius: 20px;
    background-color: var(--bg-white);

    max-width: 50vw;
    max-height: 60vh;
    margin: 6vh;
`;

export const IconsModalContainer = styled.div`
    width: min-content;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin: 6vh 1vw;
`

export const IconsWrapper = styled.div`
    background-color: var(--bg-white);
    padding: 20px;   
    border-radius: 20px;
    display: flex;
    flex-direction: ${(props) => props.$flexDirection ? props.$flexDirection : 'row'};
    align-items: center;
    justify-content: space-between;
`;

export const StyledIcon = styled.i.attrs(({className}) => ({
    className: `${className}`,
}))`
    font-size: ${(props) => props.size ? props.size : '16px'};
    margin-right: ${(props) => props.$marginright ? props.$marginright : 0};
    margin-bottom: ${(props) => props.$marginBottom ? props.$marginBottom : 0};
    color: ${(props) => props.$ischatlistactive === "true" ? 'var(--bg-black)' : 'var(--bg-dark-gray)'};
    transition: all 0.2s linear;

    &:hover {
        color: var(--bg-beige);
        cursor: pointer;
    }
`;