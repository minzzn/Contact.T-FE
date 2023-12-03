import React, { useEffect } from "react";
import "./css/public.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Register } from "./pages/LoginAndRegister/Register";
import { Login } from "./pages/LoginAndRegister/Login";
import { Main } from "./pages/Main/Main";
import { SetProfile } from "./components/Profile/SetProfile";
import { AddInfoModal } from "./components/Profile/AddInfo/AddInfoModal";

export default function App() {

  return (
    // 우선 로그인으로 진입, 로그인 하고나면 나머지 라우팅 가능하도록 설정
    <>
      <Routes>
        <Route path="/" element={<Login /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<Main/>}/>
        <Route path="/Setprofile" element={<SetProfile />} />
        <Route path="/addInfo" element={<AddInfoModal />} />
        {/* default 경로 설정 */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}