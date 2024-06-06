import { getToken, getUserId } from "./common";

export const postDutyState = async(options) => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;
    const teacherUserId = getUserId();
    const url = `http://${BACKEND_URL}/status/${teacherUserId}`;

    try {
        // POST 요청
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`post 실패: ${response.status} ${response.statusText}`);
            return false;
        }

        return true;
    } catch (error) {
        console.log("Error: ", error.message);
        return false;
    }
};

export async function getDutyState(teacherUserId) {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;
    let dutyData = [];
  
    try {
        const response = await fetch(`http://${BACKEND_URL}/status/${teacherUserId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        });
  
        if(response.ok) {
          dutyData = await response.json(); // 선생님 근무 상태 반환
        }
      } catch (error) {
        console.error(error);
      }
      // 결과값 예상 : 빈 배열 || 데이터가 존재하는 배열
      return dutyData;
  }
  