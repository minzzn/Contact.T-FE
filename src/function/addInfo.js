export const searchDB = async(schoolType, schoolInfo) => {
    const url = `//www.career.go.kr/cnet/openapi/getOpenApi.json?apiKey=${process.env.REACT_APP_CAREERNET_KEY}&svcType=api&svcCode=SCHOOL&contentType=json&gubun=${schoolType}`;

    // console.log('SchoolType: ', schoolType);
    // console.log('SchoolInfo: ', schoolInfo);

    try {
        const response = await fetch(url, {
            method: "GET",
        });

        const data = await response.json();

        // 서버에 전송은 했는데 응답이 ok가 아니면 에러 문구 던지기
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }

        console.log(data);
    } catch(error) {
        console.log('Error: ', error.message);
    }
}