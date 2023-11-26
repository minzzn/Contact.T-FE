import { getNameThrough, getToken } from "./common";

export const sendChatData = async (text) => {

    const formattedChatData = {
        token: token,
        message: text,
        username: getNameThrough(getToken, 'chat'),
    };

    try {
        const response = await fetch(serverEndPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(formattedChatData)
        });
        // 전송은 했는데, 응답으로 ok가 안된 경우
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // 성공적으로 전송된 경우의 추가 로직을 써도 됩니다.
        const result = await response.json();
        console.log('전송 성공: ', result);
    } catch (error) {
        // 전송에 실패한 경우의 추가 로직을 써도 됩니다.
        console.error('전송 실패:', error.message);
    }
};