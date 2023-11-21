// 로그인&회원가입에서 공통적으로 사용되는 서버로 요청을 보내는 비동기 함수
export async function sendReqAndSaveToken(url, method, data) {
    try{
        // 응답 내용 : 서버에 유저 데이터 전송하고 받아옴
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-type': 'application/json',
            },
            // 객체를 json형태로 변환해서 서버로 전송
            body: JSON.stringify(data),
        });
        // 응답이 ok가 아니면 에러 문구 던지기
        if(!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || '어딘가 잘못된 정보가 갔습니다');
        }
        // 응답으로 넘어온 객체에서 token키값 변수로 저장
        const token = await response.json().token;

        if(token) {
            localStorage.setItem('TOKEN', token);
            console.log('token saved : ', token);

            
        } else {
            console.error('토큰이 응답으로부터 발견되지 않음');
        }
    
    } catch(error) {
        console.log('Error: ', error.message);
    }
}