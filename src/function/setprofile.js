import { getToken } from "./common";

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
  