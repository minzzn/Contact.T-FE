import { serverEndPoint } from "../constant/common.constant";
import { setToken } from "./common";

// 회원가입 함수
export const postRegisterDataWith = async (userObj) => {
    const BACK_API = `${serverEndPoint}signup`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                // 유저 정보를 JSON형태로 보내기 위한 request임을 짐작해주세요
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userObj)
        });

        // 서버에 전송은 했는데 응답이 ok가 아니면 에러 문구 던지기
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }

    } catch(error) {
        console.log('Error: ', error.message);
    }
}


// 로그인 함수
export const postLoginDataWith = async (userObj) => {
    const BACK_API = `${serverEndPoint}signin`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                // 유저 정보를 JSON형태로 보내기 위한 request임을 짐작해주세요
                'Content-type': 'application/json',
            },
            body: JSON.stringify(userObj)
        });

        // 서버에 전송은 했는데 응답이 ok가 아니면 에러 문구 던지기
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }
        // 유저 정보
        const userInfo = await response.json();
        // 유저 정보 중 하나인 토큰은 따로 변수로 분리
        const token = userInfo.token;
        
        if(token) {
            setToken(token);
            console.log('token saved : ', token);
        } else {
            console.error('토큰이 응답으로부터 발견되지 않음');
        }

    } catch(error) {
        console.log('Error: ', error.message);
    }
}