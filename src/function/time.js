export const parseTimeKST = (timeStr) => {
    const [period, time] = timeStr.split(' ');
    const [hours, minutes, seconds] = time.split(':').map(Number);
    let date = new Date();
    let hours24 = period === '오전' ? (hours % 12) : (hours % 12) + 12;
    date.setHours(hours24, minutes, seconds || 0, 0);
    return date;
};

{/* 채팅 가능 시간 체크 함수*/}
export const checkChatable = (workStart, workEnd) => {
    // 미설정 상태시, 초기값 상태 그대로 유지 (dutyState, setDutyState에 미설정 setIsChatable에 false)
    if (!workStart || !workEnd) {
        return false;
    }
    const now = new Date();
    const start = parseTimeKST(workStart);
    const end = parseTimeKST(workEnd);
    if (start <= now && now <= end) {
        return true;
    } else {
        return false;
    }
};