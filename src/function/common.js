import React from "react";

// 웹 스토리지에 저장된 토큰을 서버 쪽에 보내기
export const getToken = () => localStorage.getItem("token");
// 웹 스토리지에 토큰 저장
export const setToken = (tokenValue) => localStorage.setItem("token", tokenValue);

// 웹 스토리지에 role값 저장 : 서버 호출횟수 줄이기
export const setRole = (roleString) => localStorage.setItem("role", roleString);
// 웹 스토리지에 저장된 role정보 가져오기
export const getRole = () => localStorage.getItem("role");

// userId 관련 정보 획득 및 설정
export const getUserId = () => localStorage.getItem("userId");
export const setUserId = (userId) => localStorage.setItem("userId", userId);

export const WrappingReactFragment = (ReactNode, index) => (
    <React.Fragment key={index}>
        {ReactNode}
    </React.Fragment>
);