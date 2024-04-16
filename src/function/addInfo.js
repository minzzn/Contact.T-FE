import { serverEndPoint } from "../constant/common.constant";
import { getToken } from "./common";

export const searchDB = async(schoolType) => {
    const INF = 5000;
    const url = `//www.career.go.kr/cnet/openapi/getOpenApi.json?apiKey=${process.env.REACT_APP_CAREERNET_KEY}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=${schoolType}&perPage=${INF}`;

    try {
        const response = await fetch(url, {
            method: "GET",
        });
        // 랜더링 횟수 체크용
        console.log(response.status);

        // 서버에 전송은 했는데 응답이 ok가 아니면 에러 문구 던지기
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }
        // 응답 상태가 200이면
        if(response.status === 200) {
            const jsonData = await response.json();
            const schoolsDataArray = await jsonData.dataSearch.content;

            return schoolsDataArray;  
        } else {
            console.log('200 상태가 아님');
        }
    } catch(error) {
        console.log('Error: ', error.message);
        throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
    }
}

export const POST = async (formattedExtraUserInfoObject) => {
    const BACK_API = `http://${serverEndPoint}/auth/add-info`;

    try {
        const response = await fetch(BACK_API, {
            method: "POST",
            headers: {
                // 유저 정보를 JSON형태로 보내기 위한 request임을 짐작해주세요
                "Content-Type": "application/json",
            },
            // 객체형태로 저희가 묶어낸 추가유저정보를 JSON 데이터 포맷으로 만들어서 바디에 실어줍니다.
            body: JSON.stringify(formattedExtraUserInfoObject),
        })

        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }

        console.log("추가 정보 전송 성공");
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export const getRole = async () => {
    const BACK_API = `http://${serverEndPoint}/auth/add-info`;

    try {
        const response = await fetch(BACK_API, {
            method: "GET",
            headers: {
                "Authorization": getToken()
            }
        });
        console.log(response);
    } catch(error) {
        console.log('Error: ', error.message);
    }
}