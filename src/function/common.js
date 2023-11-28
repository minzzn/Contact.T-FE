import { serverEndPoint } from "../constant/common.constant";
import { useNavigate } from "react-router-dom";

export const getToken = () => localStorage.getItem("token");
export const setToken = (tokenValue) => localStorage.setItem("token", tokenValue);

// 토큰과 string으로 뒤에 추가적으로 붙는 url을 적어주세요
export const getUserInfoThrough = async (token, url) => {
    const username = "";
    const BACK_API = `${serverEndPoint}${url}`;

    try {
        const response = await fetch(BACK_API, {
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

        const jsonData = await response.json();
        // 유저 정보를 반환
        return jsonData;
    

    } catch(error) {
        // 전송에 실패한 경우의 추가 로직을 써도 됩니다. + 로딩중 추가하면 될듯 . . .
        console.error('전송 실패:', error.message);
    }
};