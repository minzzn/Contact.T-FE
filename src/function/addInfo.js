import { serverEndPoint } from "../constant/common.constant";

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
    const BACK_API = `http://${serverEndPoint}auth/add-info`;


}