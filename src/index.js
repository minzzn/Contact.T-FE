import "./css/public.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "/src/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./AuthContext";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
