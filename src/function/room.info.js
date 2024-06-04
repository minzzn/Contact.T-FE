import { getToken } from "./common";

// findroomid - 방 id, 정보 알아내기
export async function getRoomInfo() {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;
    let roomInfos = [];
    try {
      // 서버로부터 날아오는 4xx 또는 5xx 응답으로 인한 콘솔창의 에러는, 프론트에서 해결할 수 없는 내용
      const response = await fetch(`http://${BACKEND_URL}/findRoomId`, {
          method: 'GET',
          headers: {
              // 토큰을 헤더에 추가함
              'Authorization': `${getToken()}`,

          }
      });

      // 서버로부터 응답을 받았을 경우
      if(response.ok) {
        roomInfos = await response.json(); // 채팅방 ID 및 이름 반환
      }
    } catch (error) {
      console.error(error);
    }
    // 결과값 예상 : 빈 배열 || 데이터가 존재하는 배열
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
