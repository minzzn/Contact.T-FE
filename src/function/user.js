import { getToken } from "./common";

export async function getUserInfo() {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;
    let userInfoData = {};
  
    try {
        const response = await fetch(`http://${BACKEND_URL}/entry`, {
            method: "GET",
            headers: {
                "Authorization": `${getToken()}`,
                "Content-Type": "application/json"
            }
        });
  
        if(response.ok) {
          userInfoData = await response.json(); // 이름, 아이디 반환
        }
      } catch (error) {
        console.error(error);
      }
      // 결과값 예상 : 빈 배열 || 데이터가 존재하는 배열
      return userInfoData;
  }
  