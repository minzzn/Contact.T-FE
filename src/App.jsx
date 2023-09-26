import React from "react";
import "./css/public.css";
import { Route, Routes } from "react-router-dom";
import { Register } from "./views/Register";
import { Login } from "./views/Login";
import { Socket } from "./views/Socket";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/socket" element={<Socket />} />
    </Routes>
  );
}
