import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 90vh;
`

export const ChatContents = styled.div`
    width: 100%;
    height: auto;
    padding: 0 5px;
    overflow-y: scroll;
`;

export const ChatEtcContainer = styled.div`
    width: 100%;
    height: min-content;
    // 이하 자식 컴포넌트의 position은 이 녀석을 기준으로 설정됨
    position: relative;
    padding: 5px;
    // 가로 배치
    display: flex;
    align-items: center;
    // 양쪽 끝 배치
    justify-content: space-between;
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

export const ChatInputBtn = styled.button`
    border: 3px solid var(--dark-gray);
    border-radius: 5px;
    // vertical - horizontal
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ChatInputContainer = styled.div`
    width: 100%;
    background-color: var(--bg-white);
    display: flex;
    flex-direction: column;
    /* 왼쪽위 부터 시계방향 */
    border-radius: 0 0 15px 15px; 
`;

// 보낼 채팅 입력받는 input, 채팅 보내는 submit btn을 감싸는 div
export const ChatInputForm = styled.form`
    width: 100%;
    height: min-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    background-color: var(--bg-original-white);
    border-radius: 0 0 10px 10px;
`;