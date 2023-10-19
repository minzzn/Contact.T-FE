import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  // 가로 정렬
  display: flex;
`;

export const ChatListContainer = styled.div`
    width: 30vw;
    height: 100vh;
    background-color: var(--bg-orange);
    display: flex;
    // 세로로 쌓이도록
    flex-direction: column;
    // 가로 중앙 정렬
    align-items: center;
    border-right: 1px solid var(--bg-black);
`;
export const ChatListHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  // 세로 중앙 정렬
  align-items: center;
  // 끝과 끝으로 배치
  justify-content: space-between;
  // top - horizontal - bottom
  padding: 3vh 1vw 0;
  color: var(--bg-white);
`;

export const ChatListHeaderH1 = styled.h1`
    font-size: 40px;
    font-weight: 700;
    font-family: 'Noto Sans KR', sans-serif;
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
`;

export const ChatContainer = styled.div`
    width: 70vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const ChatContents = styled.div`
    width: 100%;
`;

// 보낼 채팅 입력받는 input, 채팅 보내는 submit btn을 감싸는 div
export const ChatInputForm = styled.form`
    width: 100%;
    height: min-content;
    display: flex;
    align-items: center;
    position: relative;
`;

export const ChatInputArea = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    outline: none;
    margin: 0 20px 20px 20px;
    // 상/우/하/좌
    padding: 13px 45px 13px 13px;
    border-radius: 20px;
    background-color: #f1f1f1;
    /* 스크롤 안 생기도록 막기 */
    &::-webkit-scrollbar {
        display: none;
    }
`;
export const ChatInputBtn = styled.button`
    width: min-content;
    height: min-content;
    position: absolute;
    right: 18px;
    top: -3px;
    margin: 10px 10px;
    border-radius: 50%;
    border: 3px solid black;
`;

export const ChatBtnIcon = styled.i`
    font-size: 20px;
    width: 20px;
    height: 20px;
`;

export const StyledIcon = styled.i.attrs(({className}) => ({
    className: `${className}`,
}))`
    font-size: 25px;
    margin-right: 1.5vw;
`;