import React from "react";
import "./css/public.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Register } from "./pages/LoginAndRegister/Register";
import { Login } from "./pages/LoginAndRegister/Login";
import { Main } from "./pages/Main/Main";
import { SetProfile } from "./components/Profile/SetProfile";
import { AddInfoModal } from "./components/Profile/AddInfo/AddInfoModal";
import { PrivateRoute } from './pages/PrivateRoute/PrivateRoute';
import { getToken } from "./function/common";

export default function App() {

  return (
    // 우선 로그인으로 진입, 로그인 하고나면 나머지 라우팅 가능하도록 설정
    <>
      <Routes>
        {/* Public으로 접근 가능한 경로 */}
        <Route path="/" element={<Login /> } />
        <Route path="/register" element={<Register />} />

        {/* Private으로 접근 가능한 경로 */}
        <Route path="/main" element={<PrivateRoute authenticated={getToken()} component={<Main />}/>}/>
        <Route path="/Setprofile" element={<PrivateRoute authenticated={getToken()} component={<SetProfile />}/>}/>
        <Route path="/addInfo" element={<PrivateRoute authenticated={getToken()} component={<AddInfoModal />}/>}/>
        
        {/* default 경로 설정 */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}