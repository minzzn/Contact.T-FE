import styled from "styled-components";

export const Container = styled.div`
  min-width: 250px;
  width: 100%;
  height: 100vh;
  // 가로 정렬
  display: flex;
  overflow: hidden;
  justify-content: stretch;
  align-items: flex-start;
  padding: 2rem;
`;

export const HeaderAndListContainer = styled.div`
    min-width: 250px;
    width: 100%;
    display: flex;
    // 내부 채팅 div들은 세로로 쌓이도록 만들기
    flex-direction: column;
    min-height: 520px;
`

export const ChatAndPeopleListContainer = styled.div`
    width: 100%;
    // 채팅목록 박스들이 세로로 쌓이도록
    display: flex;
    flex-direction: column;
    max-width: 45vw;
    max-height: 80vh;

    // 높이는 스크롤 가능하도록 무제한으로
    overflow-y: scroll;
`;

export const UserAndChatContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const IconsWrapper = styled.div`
    background-color: var(--bg-white);
    padding: 20px;   
    border-radius: 20px;
    display: flex;
    flex-direction: ${(props) => props.$flexDirection ? props.$flexDirection : 'row'};
    align-items: center;
    justify-content: center;
`;

export const StyledIcon = styled.i.attrs(({className}) => ({
    className: `${className}`,
}))`
    font-size: ${(props) => props.size ? props.size : '16px'};
    margin-right: ${(props) => props.$marginright ? props.$marginright : '2vh'};
    margin-bottom: ${(props) => props.$marginBottom ? props.$marginBottom : 0};
    color: ${(props) => props.$selected === "true" ? 'var(--bg-main-green)' : 'var(--bg-dark-gray)'};
    transition: all 0.2s linear;

    &:hover {
        color: ${props => props.$hoverColor ? props.$hoverColor : 'var(--bg-button-gray)'};
        cursor: pointer;
    }
`;