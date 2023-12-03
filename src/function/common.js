import { serverEndPoint } from "../constant/common.constant";

// 웹 스토리지에 저장된 토큰을 서버 쪽에 보내기
export const getToken = () => localStorage.getItem("token");
// 웹 스토리지에 토큰 저장
export const setToken = (tokenValue) => localStorage.setItem("token", tokenValue);
export const getUserInfoObject = () => localStorage.getItem("entry");
/**
 * 로컬스토리지에 존재하는 유저Info객체를 뽑아내는 함수를 인자에 넣어주면 이메일만 뽑을 수 있습니다.
 * @param {function} getUserInfoObject 
 * @returns email
 */
export const getUserEmail = (getUserInfoObject) => getUserInfoObject.email;
/**
 * 로컬스토리지에 존재하는 유저Info객체를 뽑아내는 함수를 인자에 넣어주면 유저의 이름만 뽑을 수 있습니다.
 * @param {function} getUserInfoObject 
 * @returns username
 */
export const getUserName = (getUserInfoObject) => getUserInfoObject.username; 

// 토큰과 string으로 뒤에 추가적으로 붙는 url을 적어주세요
export const getUserInfoWithToken = async (token) => {
    const BACK_API = `http://${serverEndPoint}/entry`;

    try {
        const response = await fetch(BACK_API, {
            method: "GET",
            headers: {
                // 인증을 위한 request임을 짐작해주세요
                'Authorization': `${token}`,
            },
        })

        console.log(response);

        // 전송은 됐지만 응답이 제대로 안 넘어온 경우
        if(!response.ok) {
            const errorData = response.json();
            throw new Error(errorData.message || '유저 정보를 가져오는 데 실패함');
        }

        const jsonData = await response.json();
        // 유저 정보를 반환
        return jsonData;
    
    } catch(error) {
        // 전송에 실패한 경우의 추가 로직을 써도 됩니다. + 로딩중 추가하면 될듯 . . .
        console.error('전송 실패:', error.message);
    }
};