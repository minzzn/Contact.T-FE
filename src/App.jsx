import React from "react";
import "./css/public.css";
import { Route, Routes } from "react-router-dom";
import { Register } from "./views/Register";
import { Login } from "./views/Login";
import { Main } from "./views/Main";
import { SetProfile } from "./views/SetProfile";
import { ViewProfile } from "./views/ViewProfile";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/setprofile" element={<SetProfile />} />
      <Route path="/viewprofile" element={<ViewProfile />} />
    </Routes>
  );
}
