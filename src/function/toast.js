import { toast } from 'react-toastify';

export const ToastifyWarn = () => toast.warn('AI가 채팅을 분석하기 시작합니다🤖', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
});