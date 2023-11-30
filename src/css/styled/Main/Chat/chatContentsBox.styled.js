import styled from "styled-components";

// 채팅 내역들 전체를 담는 div tag
export const ChatContentsContainer = styled.div`
    width: 100%;
    display: flex;
    // 내부 채팅 div들은 세로로 쌓이도록 만들기
    flex-direction: column;
    min-height: 540px;
`
// 실제 메시지 내용들이 담는 div tag의 wrapper
export const ChatContentDivWrapper = styled.div`
    width: 100%;
    height: min-content;
    padding: 10px;
    /* 메시지 내용 배치 결정 */
    display: flex;
    align-items: center;
    /* 가로 방향 메시지들 박스 배치 */
    justify-content: ${(props) => props.$ismine === "true" ? "flex-end" : "flex-start"}
`
export const ChatContentDiv = styled.div`
    height: min-content;
    padding: 10px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 600;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.$ismine === "true" ? 'orange' : 'yellow'};
    color: ${(props) => props.$ismine === "true" ? 'black' : 'white'};
`