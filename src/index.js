import "./css/style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "/src/App.jsx";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
);
