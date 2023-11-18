import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  // 가로 정렬
  display: flex;
  overflow: hidden;
  background-color: var(--bg-light-gray);
`;

export const ChatAndPeopleListContainer = styled.div`
    width: 100%;
    // 채팅목록 박스들이 세로로 쌓이도록
    display: flex;
    flex-direction: column;
    max-width: 50vw;
    max-height: 91vh;
    margin: 6vh;

    // 높이는 스크롤 가능하도록 무제한으로
    overflow-y: scroll;
`;

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