import React from "react";
import "./css/public.css";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/LoginAndRegister/Register";
import { Login } from "./pages/LoginAndRegister/Login";
import { Main } from "./pages/Main/Main";
import { SetProfile } from "./components/Profile/SetProfile";
export default function App() {
  // const { setAccessToken } = useContext(UserContext);
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/main" element={<Main/>}/>
      <Route path="/Setprofile" element={<SetProfile />} />
    </Routes>
  );
}
// checkToken = () => {
//   const token = localStorage.getItem("token");
//   alert(token)
// }
// const config = {
//   headers: {
//     Authorization: `${localStorage.getItem("TOKEN",token)}`,
//     // localStorage에 token이 저장되어 있는지 확인하기
//   },
// };
// export async function checkToken() {
//   try(function() { // 성공
//     // localstorage에 저장된 토큰 확인에 성공하면 main으로 이동
//       window.location.href = "/main";
//   })
//   .catch(function() { // 실패
//     // localstorage에 저장된 토큰 확인에 실패하면 login 페이지로 이동
//     window.location.href = "/";
//   })
// }
// axios.get('/try', config)
