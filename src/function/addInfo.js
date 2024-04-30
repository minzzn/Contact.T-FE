export const searchDB = async(schoolType) => {
    const INF = 7000;
    const url = `//www.career.go.kr/cnet/openapi/getOpenApi.json?apiKey=${process.env.REACT_APP_CAREERNET_KEY}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=${schoolType}&perPage=${INF}`;

    try {
        const response = await fetch(url, {
            method: "GET",
        });

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
};

export const postAddInfo = async(options) => {
    const url = `http://13.124.97.155:8080/add-info`;

    try {
        const response = await fetch(url, options);

        if(!response.ok) {
            throw new Error('Not 202 status');
        }

        const data = await response.body();
        if(data) {
            return true;
        } else {
            return false;
        }

    } catch(error) {
        console.log("Error : ", error.message);
    }
}