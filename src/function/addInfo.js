import { getToken, getUserId } from "./common";

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
    const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;
    const url = `http://${BACKEND_URL}/auth/add-info`;

    try {
        const response = await fetch(url, options);

        if(!response.ok) {
            throw new Error('Not 202 status');
        }

        return true;
    } catch(error) {
        console.log("Error : ", error.message);
        return false;
    }
};

// *방 여는 게 아니라 선생님 id당 알림받을 구역을 열어놓는 func
// add-info 작성 후, sse구독을 위해선 notify/subscribe/{userId} api가 필요
export const openSseArea = (teacherUserId) => {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;

    try {
        // SSE 연결을 위한 EventSource 생성
        const eventSource = new EventSource(`http://${BACKEND_URL}/notify/subscribe/${teacherUserId}`);
        
        return eventSource;
    } catch (error) {
        // 오류 처리
        console.error('Error opening SSE area:', error);
    }
}

// SSE - 데이터 변동 알림, 학부모가 친구추가 요청을 보낼 떄 사용, 테스트 X
// 부모가 post 요청으로 선생님에게 친구요청 전송.
export async function sendFriendRequest(teacherUserId) {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;
    const parentUserId = getUserId();

    try {
        // 요청할 URL
        const url = `http://${BACKEND_URL}/notify/send-data/${teacherUserId}`;

        // post 요청 옵션
        const options = {
            method: 'POST',
            headers: {
                // 유저 정보를 JSON형태로 보내기 위한 request
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                parentUserId: parentUserId
            }) 
        };

        // POST 요청
        const response = await fetch(url, options);

        // 응답 확인
        if (response.ok) {
            console.log('친구 요청 성공');
        } else {
            console.error('친구 요청 실패:', response.statusText);
        }
    } catch (error) {
        console.error('친구 요청에 오류가 있음:', error);
    }
}

export async function findTeachers() {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_API_URL;
    const teacherIds = [];

    try {
        const response = await fetch(`http://${BACKEND_URL}/findTeachers`, {
            method: "GET",
            headers: {
                "Authorization": `${getToken()}`,
            }
        });
        const data = await response.json();

        if(data) {
            data.map(teacherObject => teacherIds.push(teacherObject["teacherId"]));
        } else {
            throw new Error("데이터가 안 넘어왔습니다.");
        }
    } catch(error) {
        console.log("Error : ", error);
    }


    return teacherIds;
}