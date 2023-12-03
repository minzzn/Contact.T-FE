import { serverEndPoint } from "../constant/common.constant";
import { setToken } from "./common";

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
            body: JSON.stringify(userObj)
        });

        // 서버에 전송은 했는데 응답이 ok가 아니면 에러 문구 던지기
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }

        console.log("회원가입 성공");
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
            },
            body: JSON.stringify(userObj)
        });

        // 서버에 전송은 했는데 응답이 ok가 아니면 에러 문구 던지기
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }

        // 유저 정보
        const userAuthorizationToken = response.headers.get("Authorization");

        // 유저 정보 중 하나인 토큰은 따로 변수로 분리
        const token = userAuthorizationToken;
        if(token) {
            // 로컬스토리지에 토큰 저장
            setToken(token);
            console.log("로그인 성공 : 토큰 저장됨");
            console.log('token saved : ', token);

            return true;
        } else {
            console.error('토큰이 응답으로부터 발견되지 않음');
            return false;
        }

    } catch(error) {
        console.log('Error : ', error.message);
        return false;
    }
}