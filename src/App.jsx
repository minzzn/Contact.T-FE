import React, { useEffect } from "react";
import "./css/public.css";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/LoginAndRegister/Register";
import { Login } from "./pages/LoginAndRegister/Login";
import { Main } from "./pages/Main/Main";
import { SetProfile } from "./components/Profile/SetProfile";
import { AddInfoModal } from "./components/Profile/AddInfo/AddInfoModal";
import { getToken, getUserInfoWithToken } from "./function/common.js";
import { isUserInfoAtom } from "./hooks/IsUserInfo.js";
import { useRecoilState } from 'recoil';

export default function App() {
  // getUserInfoThrough 값으로 인증 후 jsonData를 객체 형태로 받아와서 Atom에 넣어 전달
  // useRecoilState를 통해 값을 받아오고 변경하기 둘다 가능
  const [isUserInfo, setisUserInfo] = useRecoilState(isUserInfoAtom);
  
  useEffect(() => {
    const fetchData = async () => {
      // 토큰은 잘 넘어오는거 확인
      const token = getToken();
      // 토큰이 없는경우와 정의되지 않은 경우의 차이가 궁금함
      // 로그인만 안한경우와 회원가입도 안한경우인지 ^.^...?
      if(token !== undefined || token !== null) {
        try {
          const userJsonData = await getUserInfoWithToken(token);

          setisUserInfo({
            email: userJsonData.email,
            username: userJsonData.username,
          });
          // 콘솔에 유저정보 잘 왔는지 출력
          console.log(isUserInfo);
        } catch (error) {
          console.error('캐치 함수 내부:', error);
        }
      }
    };
    fetchData();
  }, []);

  return (
      // 받은 유저 정보가 존재할 경우 Main으로 이동, 아니면 Login으로 이동
      // 존재하면 Main으로 이동하고 아니면 Login으로 이동하는지 어케알쥐 ... 로그인 화면에 넣어놓은 함수 저건가 . .
      // 로그인 했을때 토큰이 존재하지 않아도 Main으로 이동함.
      <>
      <Routes>
        <Route path="/" element={isUserInfo ? <Main /> : <Login /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main/>}/>
        <Route path="/Setprofile" element={<SetProfile />} />
        <Route path="/addInfo" element={<AddInfoModal />} />
      </Routes>
    </>
  );
}