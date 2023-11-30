import React, { useState } from 'react';
import styled from 'styled-components';
import Select from "react-select"; 
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes, getHours, getMinutes } from 'date-fns';

export const SelectChatTime = () => {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [isSelected, setIsSelected] = useState(false);

    // 시작 시간이 선택되면 해당 시간 적용 및 isSelected를 true, endTime을 null로
    const onSelect = (time) => {
        setStartTime(time);
        setIsSelected(true);
        setEndTime(null);
    };

    return(
        <>
            <div><StyledDatePicker
                startTime={startTime}
                selected={startTime}
                onChange={onSelect}
                locale={ ko }
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                minTime={setHours(setMinutes(new Date(), 30), 0)}
                maxTime={setHours(setMinutes(new Date(), 0), 24)}
                timeCaption="Time"
                dateFormat="aa h:mm 시작"
                placeholderText="시작 시간"
            /></div>

            {isSelected ? // 시작 시간을 선택해야 종료 시간 선택 가능
                <div><StyledDatePicker
                endTime={endTime}
                selected={endTime}
                onChange={(time) => setEndTime(time)}
                locale={ ko }
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                minTime={startTime}
                // 시작 시간부터 24시간
                maxTime={setHours(setMinutes(new Date(), getMinutes(startTime)), getHours(startTime)+23)}
                timeCaption="Time"
                dateFormat="aa h:mm 종료"
                placeholderText="종료 시간"
            /></div>
                
                : null 
            }
        </>
    );
}
const StyledDatePicker = styled(DatePicker)`
    
    width: 45vh;
    height: 7vh;
    padding-right: 1.5vh;

    border: ${(props) => (props.startTime !== null && props.endTime !== null ? '0.5vh solid #FF9634' : "0.5vh solid #B4B4B4")};
    border-radius: 2vh;
    margin-bottom: 1vh;
    display: flex;
    text-align: center;
    cursor: pointer;
    font-family: 'Noto Sans KR', sans-serif;

    font-weight: ${(props) => (props.startTime !== null && props.endTime !== null ? '800' : "400")};
    font-size: 2.4vh;
    color: #000000;
    {
        
    }
    
    .react-datepicker__time-list-item {
        background-color: #ffffff;
        align-items: center;
        justify-content: center;
        display: flex;
        text-align: center;

        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 800;
        font-size: 2.4vh;
        color: #000000;
    }

`

