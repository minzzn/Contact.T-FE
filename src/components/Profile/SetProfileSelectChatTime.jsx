import React, { useState } from 'react';
import styled from 'styled-components';
import Select from "react-select"; //라이브러리 import
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

    // 현재 시간 기준 지나간 시간 선택 불가
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
    
        return currentDate.getTime() < selectedDate.getTime();
    };

    return(
        <>
            {/* <Select
            width="120"
            height="40"
            chooseType={(e: any) => setTimeData(e)}
            isSearchable={false}
            options={TimeData}
            onFocus={onFocus}
            isDisabled={disabled}
            placeholder="00:00"
            value={value ? { target: value, label: value } : null}
            />  */}
            <div><DatePicker
                filterTime={filterPassedTime}
                selected={startTime}
                onChange={onSelect}
                locale={ ko }
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                minTime={setHours(setMinutes(new Date(), 30), 9)}
                maxTime={setHours(setMinutes(new Date(), 0), 17)}
                timeCaption="Time"
                dateFormat="aa h:mm 시작"
                placeholderText="시작 시간"
                className="mt-4"
            /></div>

            {isSelected ? // 시작 시간을 선택해야 종료 시간 선택 가능
                <div><DatePicker
                filterTime={filterPassedTime}
                selected={endTime}
                onChange={(time) => setEndTime(time)}
                locale={ ko }
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                minTime={startTime}
                maxTime={setHours(setMinutes(new Date(), getMinutes(startTime)), getHours(startTime)+2)} // 시작 시간부터 2시간
                excludeTimes={[
                    // 시작 시간 제외
                    startTime,
                    // 5:00 선택 기준 최대 7:00까지 예외처리
                    setHours(setMinutes(new Date(), 0), 18),
                    setHours(setMinutes(new Date(), 30), 18),
                    setHours(setMinutes(new Date(), 0), 19)
                ]}
                timeCaption="Time"
                dateFormat="aa h:mm 종료"
                placeholderText="종료 시간"
                className="mt-3"
            /></div>
                
                : null 
            }
        </>
    );
}
// const StyledDataPickerWrapper = styled.section`
//     control: (provided, state) => ({
//         ...provided,
//         background: '#ffffff',
//         width: '45vh',
//         height: '7vh',
//         paddingRight: '1.5vh',
//         border: state.isFocused? '0.5vh solid #FF9634' : '0.5vh solid #B4B4B4',
//         '&:hover': { borderColor: '${lighten(0.1, #FF9634)}'},
//         borderRadius: '2vh',
//         marginBottom: '1vh',
//         display: 'flex',
//         textAlign: 'center',
//         cursor: 'pointer',

//         fontFamily: 'Noto Sans KR, sans-serif',
//         fontWeight: state.isFocused? '800' : '400',
//         fontSize: '2.4vh',
//         color: '#000000',

//     }),
//     option: (provided, state) => ({
//         ...provided,
//         background-color: #ffffff;
//         align-items: center;
//         justify-content: center;
//         display: flex;
//         text-align: center;

//         font-family: 'Noto Sans KR, sans-serif';
//         font-weight: state.isFocused? '800' : '400';
//         font-size: '2.4vh';
//         color: '#000000',
//     })
// `