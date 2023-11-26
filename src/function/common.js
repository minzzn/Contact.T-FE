import { serverEndPoint } from "../constant/common.constant";

export const getToken = () => localStorage.getItem("token");
export const setToken = (tokenValue) => localStorage.setItem("token", tokenValue);

// 토큰과 string으로 뒤에 추가적으로 붙는 url을 적어주세요
export const getUserInfoThrough = async (token) => {
    const username = "";
    const BACK_API = `${serverEndPoint}main`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                // 인증을 위한 request임을 짐작해주세요
                'Authorization': `Bearer ${token}`,
            },
        })

        // 전송은 됐지만 응답이 제대로 안 넘어온 경우
        if(!response.ok) {
            const errorData = response.json();
            throw new Error(errorData.message || '유저 정보를 가져오는 데 실패함');
        }
        // 유저 정보를 반환
        return response.json();
        // localstorage에 저장된 토큰 확인에 성공하면 main으로 이동
        window.location.href = "/main";

    } catch(error) {
        // 전송에 실패한 경우의 추가 로직을 써도 됩니다.
        console.error('전송 실패:', error.message);
        // localstorage에 저장된 토큰 확인에 실패하면 login 페이지로 이동
        window.location.href = "/";
    }
};