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
export const ChatListHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  // 세로 중앙 정렬
  align-items: center;
  // 끝과 끝으로 배치
  justify-content: center;
  // top - horizontal - bottom
  padding: 3vh 0 1svh;
  color: var(--bg-dark-gray);
`;

export const ChatListHeaderH1 = styled.h1`
    font-size: 40px;
    font-weight: 700;
    font-family: 'Noto Sans KR', sans-serif;
    margin-bottom: 5px;
`;

export const ChatListHeaderIconContainer = styled.div`
    width: min-content;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
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

export const ChatContents = styled.div`
    width: 100%;
    padding: 0 5px;
    overflow-y: scroll;
`;

export const ChatInputContainer = styled.div`
    width: 100%;
    background-color: var(--bg-white);
    display: flex;
    flex-direction: column;
`;

// 보낼 채팅 입력받는 input, 채팅 보내는 submit btn을 감싸는 div
export const ChatInputForm = styled.form`
    width: 100%;
    height: min-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;

export const ChatInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    padding: 15px;
    border-radius: 20px;
    background-color: var(--bg-white);
    margin-bottom: 10px;
    /* 스크롤 안 생기도록 막기 */
    &::-webkit-scrollbar {
        display: none;
    }
`;
export const ChatEtcContainer = styled.div`
    width: 100%;
    // 이하 자식 컴포넌트의 position은 이 녀석을 기준으로 설정됨
    position: relative;
    padding: 5px;
    // 가로 배치
    display: flex;
    align-items: center;
    // 양쪽 끝 배치
    justify-content: space-between;
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
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 5px 5px 10px var(--bg-dark-gray);
`

export const ChatInputBtn = styled.button`
    border: 3px solid var(--dark-gray);
    border-radius: 5px;
    // vertical - horizontal
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledIcon = styled.i.attrs(({className}) => ({
    className: `${className}`,
}))`
    font-size: ${(props) => props.size ? props.size : '16px'};
    margin-top: ${(props) => props.margintop ? props.margintop : 0};
    margin-bottom: ${(props) => props.marginbottom ? props.marginbottom : 0};
    margin-right: ${(props) => props.marginright ? props.marginright : 0};
    color: ${(props) => props.color ? props.color : 'var(--bg-dark-gray)'};
    transition: all 0.5s linear;

    &:hover {
        color: var(--bg-black);
        text-shadow: 2px 2px 5px var(--bg-orange);
    }
`;