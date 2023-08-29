import React from "react";
import "./css/style.css";
import { Route, Routes } from "react-router-dom";
import { Register } from "./views/Register";
import { Socket } from "./views/Socket";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/socket" element={<Socket />} />
    </Routes>
  );
}
