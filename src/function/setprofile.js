import { serverEndPoint } from "../constant/common.constant";
import { setToken } from "./common";

// 회원가입 함수
export const postSetProfileDataWith = async (userObj,url) => {
    const BACK_API = `http://${serverEndPoint}${url}`;

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

        console.log("프로필 설정");

    } catch(error) {
        console.log('Error: ', error.message);
    }
}
