import { serverEndPoint } from "../constant/common.constant";
import { getToken } from "./common";

// 프로필 설정 함수
export const postSetProfileDataWith = async (userObj) => {
    const BACK_API = process.env.REACT_APP_BACKEND_API_URL;

    try {
        const response = await fetch(BACK_API, {
            method: "POST",
            headers: {
                // 유저 정보를 JSON형태로 보내기 위한 request
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userObj)
        });

        // 서버에 전송은 했는데 응답이 ok가 아니면 에러 문구 던지기
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }

        console.log("프로필 설정 성공");

    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export async function postDutyState(teacherUserId) {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;
    const url = `http://${BACKEND_URL}/status/${teacherUserId}`;

    try {
        const response = await fetch(url, options);

        if(!response.ok) {
            throw new Error('Not 202 status');
        }

        return true;
    } catch(error) {
        console.log("Error : ", error.message);
        return false;
    }
};

export async function getDutyState(teacherUserId) {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;
    let dutyData = {};
  
    try {
        const response = await fetch(`http://${BACKEND_URL}/status/${teacherUserId}`, {
            method: "GET",
            headers: {
                "Authorization": `${getToken()}`,
            }
        });
  
        if(response.ok) {
          dutyData = await response.json(); // 이름, 아이디 반환
        }
      } catch (error) {
        console.error(error);
      }
      // 결과값 예상 : 빈 배열 || 데이터가 존재하는 배열
      return userInfoData;
  }
  