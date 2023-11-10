import React from "react";
import "./css/public.css";
import { Route, Routes } from "react-router-dom";
import { Register } from "./views/Register";
import { Login } from "./views/Login";
import { Main } from "./views/Main";
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
