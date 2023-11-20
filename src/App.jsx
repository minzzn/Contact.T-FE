import React from "react";
import "./css/public.css";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/LoginAndRegister/Register";
import { Login } from "./pages/LoginAndRegister/Login";
import { Main } from "./pages/Main/Main";
import { SetProfile } from "./components/Profile/SetProfile";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/main" element={<Main/>}/>
      <Route path="/Setprofile" element={<SetProfile />} />
    </Routes>
  );
}
