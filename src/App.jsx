import React from "react";
import "./css/public.css";
import { Route, Routes } from "react-router-dom";
import { Register2 } from "./views/Register2";
import { Login } from "./views/Login";
import { Main } from "./views/Main";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/register" element={<Register2 />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
