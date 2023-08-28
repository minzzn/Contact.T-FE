import React from "react";
import "./css/style.css";
import { Route, Routes } from "react-router-dom";
import { Register } from "./views/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
    </Routes>
  );
}
