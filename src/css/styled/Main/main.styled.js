import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  // 가로 정렬
  display: flex;
  overflow: hidden;
  justify-content: stretch;
  align-items: flex-start;
  padding: 2rem;
`;

export const ChatAndPeopleListContainer = styled.div`
    width: 100%;
    min-width: 300px;
    // 채팅목록 박스들이 세로로 쌓이도록
    display: flex;
    flex-direction: column;
    max-width: 50vw;
    max-height: 90vh;
    margin-left: 3vw;
    padding-right: 10px;

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
    color: ${(props) => props.$selected === "true" ? 'var(--bg-original-black)' : 'var(--bg-dark-gray)'};
    transition: all 0.2s linear;

    &:hover {
        color: var(--bg-light-gray);
        cursor: pointer;
    }
`;