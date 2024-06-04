import { serverEndPoint } from "../constant/common.constant";
import { setRole, setToken, setUserId } from "./common";

// 회원가입 함수
export const postRegisterDataWith = async (userObj,url) => {
    const BACK_API = `http://${serverEndPoint}/${url}`;

    try {
        const response = await fetch(BACK_API, {
            method: "POST",
            headers: {
                // 유저 정보를 JSON형태로 보내기 위한 request임을 짐작해주세요
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userObj),
            // 캐시 방지
            cache: 'no-store',
            // 쿠키 방지
            credentials: 'omit'
        });

        // 서버에 전송은 했는데 응답이 ok가 아니면 에러 문구 던지기
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }

        return true;
    } catch(error) {
        console.log('Error : ', error.message);
        return false;
    }
}


// 로그인 함수
export const postLoginDataWith = async (userObj,url) => {
    const BACK_API = `http://${serverEndPoint}/${url}`;

    try {
        const response = await fetch(BACK_API, {
            method: "POST",
            headers: {
                // 유저 정보를 JSON형태로 보내기 위한 request임을 짐작해주세요
                "Content-Type": "application/json",
                "Cache-Control": "no-store", // 캐시 비활성화
            },
            body: JSON.stringify(userObj),
            // 캐시 방지
            cache: 'no-store',
            // 쿠키 방지
            credentials: 'omit'
        });

        // 서버에 전송은 했는데 응답이 ok가 아니면 에러 문구 던지기
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }

        // 유저 정보 중 하나인 토큰은 따로 변수로 분리
        const token = response.headers.get("Authorization");
        const { role, userId } = await response.json();

        if(token && role && userId) {   
            // 로컬스토리지에 토큰, role, userId(key) 저장
            setToken(token);
            setRole(role);
            setUserId(userId);

            return token;
        } else {
            return false;
        }

    } catch(error) {
        return false;
    }
}