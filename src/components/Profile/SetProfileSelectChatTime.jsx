import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import Select from "react-select"; 
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, getHours, getMinutes } from 'date-fns';

export const SelectChatTime = ({ handleStartTimeChange, handleEndTimeChange }) => {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [isSelected, setIsSelected] = useState(false);

    // 시작 시간이 선택되면 해당 시간 적용 및 isSelected를 true, endTime을 null로
    // 객체를 key값으로 쪼개서 시간 쪼개서 string 형태로 넣기
    const onSelect = (time) => {
        setStartTime(time);
        setIsSelected(true);
        setEndTime(null);
        handleStartTimeChange(time); // handleStartTimeChange 호출
    };

    const onSelectEnd = (time) => {
        setEndTime(time);
        handleEndTimeChange(time); // handleEndTimeChange 호출
    };

    // useEffect(() => {
    //     console.log(startTime);
    //     console.log(endTime);
    // }, [startTime, endTime]); // startTime이 업데이트될 때마다 useEffect가 실행됨

    return (
        <>
            <div>
                <StyledDatePicker
                    startTime={startTime}
                    endTime={endTime}
                    selected={startTime}
                    onChange={onSelect}
                    locale={ko}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={30}
                    minTime={setHours(setMinutes(new Date(), 30), 0)}
                    maxTime={setHours(setMinutes(new Date(), 0), 24)}
                    timeCaption="Time"
                    dateFormat="aa h:mm 시작"
                    placeholderText="시작 시간"
                />
            </div>

            {isSelected ? // 시작 시간을 선택해야 종료 시간 선택 가능
                <div>
                    <StyledDatePicker
                        startTime={startTime}
                        endTime={endTime}
                        selected={endTime}
                        onChange={onSelectEnd}
                        locale={ko}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        minTime={startTime}
                        // 시작 시간부터 24시간
                        maxTime={setHours(setMinutes(new Date(), getMinutes(startTime)), getHours(startTime) + 23)}
                        timeCaption="Time"
                        dateFormat="aa h:mm 종료"
                        placeholderText="종료 시간"
                    />
                </div>
                : null
            }
        </>
    );
}

const StyledDatePicker = styled(DatePicker)`
    width: 45vh;
    height: 7vh;
    padding-right: 1.5vh;
    border: ${(props) => (props.startTime !== null ? (props.endTime !== null ? '0.5vh solid #5CC095' : '0.5vh solid #B4B4B4') : "0.5vh solid #B4B4B4")};
    border-radius: 2vh;
    margin-bottom: 1vh;
    display: flex;
    text-align: center;
    cursor: pointer;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: ${(props) => (props.startTime !== null ? (props.endTime !== null ? '800' : '600') : "400")};
    font-size: 2.4vh;
    color: #000000;

    .react-datepicker__time-list-item {
        background-color: #ffffff;
        align-items: center;
        justify-content: center;
        display: flex;
        text-align: center;
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 2.4vh;
        color: #000000;
        &:hover {
            font-weight: 800;
            cursor: pointer;
        }
    }
`;