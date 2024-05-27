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

export const WrappingReactFragment = (ReactNode, index) => (
    <React.Fragment key={index}>
        {ReactNode}
    </React.Fragment>
);

// findroomid - 방 id, 정보 알아내기
export async function getRoomInfo() {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;
    let roomInfos = [];
    try {
      const response = await fetch(`http://${BACKEND_URL}/findRoomId`, {
          method: 'GET',
          headers: {
              // 토큰을 헤더에 추가함
              'Authorization': `${getToken()}`,

          }
      });
      // 서버로부터 응답을 받았을 경우
      roomInfos = await response.json(); // 채팅방 ID 및 이름 반환
      // 서버에서 반환된 채팅방 정보가 없는 경우
      if (!roomInfos || roomInfos.length === 0) {
          console.warn('서버로부터 채팅방 정보를 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error("Error : ", error);
    }
    return roomInfos;
}

export async function createRoom(parentUserId) {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;

    try {
        const response = await fetch(`http://${BACKEND_URL}/createRoom`, {
          method: 'POST',
          headers: {
            // 토큰을 헤더에 추가함
            'Authorization': `${getToken()}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            teacherUserId: `${getUserId()}`,
            parentUserId: parentUserId
          })
        });
        // 서버로부터 응답을 받았을 경우
        if (response.ok) {
          const data = await response.text();
          return data; // 채팅방 ID
        } 
        // 서버로부터 응답이 성공적이지 않은 경우
        else {
          throw new Error('createRoom 실패');
        }
      }
      catch (error) {
        console.error('요청에 오류가 있음');
      }
}