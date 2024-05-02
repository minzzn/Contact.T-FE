import React from "react";

// 웹 스토리지에 저장된 토큰을 서버 쪽에 보내기
export const getToken = () => localStorage.getItem("token");
// 웹 스토리지에 토큰 저장
export const setToken = (tokenValue) => localStorage.setItem("token", tokenValue);

// 웹 스토리지에 role값 저장 : 서버 호출횟수 줄이기
export const setRole = (roleString) => localStorage.setItem("role", roleString);
// 웹 스토리지에 저장된 role정보 가져오기
export const getRole = () => localStorage.getItem("role");

// userId 관련 정보 획득 및 설정
export const getUserId = () => localStorage.getItem("userId");
export const setUserId = (userId) => localStorage.setItem("userId", userId);

export const IsBlankStringInObject = (object) => {
    let result = false;

    for(const value of Object.values(object)) {
        if(value === "") {
            result = true;
        }
    }
    
    return result;
}

export const WrappingReactFragment = (ReactNode, index) => (
    <React.Fragment key={index}>
        {ReactNode}
    </React.Fragment>
);


    {/* 방 열기- openChatRoom
    사용 방법 : const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;
    연결 시 openChatRoom(1); 와 같이 사용. */}
function openChatRoom(teacherUserId) {
    try {
        // SSE 연결을 위한 EventSource 생성
        const eventSource = new EventSource(`http://${BACKEND_URL}/notify/subscribe/${teacherUserId}`);

        // SSE 연결이 성공적으로 설정된 후에 호출되는 함수
        eventSource.onopen = function(event) {
            // 콘솔에 채팅방이 열렸음을 알리는 메시지 출력
            console.log('Chat room opened!');
        };

        // SSE 이벤트 수신 시 처리할 함수
        eventSource.addEventListener('sse', event  => {
            // 받은 이벤트 데이터는 파싱하지 않고 바로 출력합니다.
            console.log('sse connected message:', event.data);
        });

        // SSE 연결이 끊어졌을 때 처리할 함수
        eventSource.onerror = function(error) {
            // 오류 처리
            console.error('SSE 연결 오류:', error);
            // SSE 연결 오류 처리
        };
    } catch (error) {
        // 오류 처리
        console.error('Error opening chat room:', error);
    }
}

// SSE - 데이터 변동 알림, 학부모가 친구추가 요청을 보냈을 때 온 parentuserId를 사용하여 요청, 테스트 X
// 
async function sendFriendRequest(teacherUserId, requestData) {
    try {
        // 요청할 URL
        const url = `http://${BACKEND_URL}/notify/send-data/${teacherUserId}`;

        // post 요청 옵션
        const options = {
            method: 'POST',
            body: JSON.stringify({
                parentUserId: parentUserId,
            }) // 요청 데이터를 JSON 문자열로 변환
        };

        // POST 요청
        const response = await fetch(url, options);

        // 응답 확인
        if (response.ok) {
            console.log('친구 요청 성공');
        } else {
            console.error('친구 요청 실패:', response.statusText);
        }
    } catch (error) {
        console.error('친구 요청에 오류가 있음:', error);
    }
}

