import React from 'react';
import { Navigate } from 'react-router-dom';
import { ToastifyError } from '../../function/toast';

export const PrivateRoute = ({ authenticated, component}) => {
  return (
    authenticated ? component : <Navigate to='/' {...ToastifyError("접근 불가. 로그인 먼저 해주세요")} />
  )
 };