import React, { useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Select from "react-select";
import { darken, lighten } from 'polished';

export const SelectDuty = () => {
    // select 태그의 옵션들을 배열로 만들어준다.
    const onduty = [
        { value: "onduty", label: "근무중" },
        { value: "offduty", label: "근무중 아님" }
    ]

    //안에 들어가는 값을 받아야해서 state 사용, 기본 값 '온라인'=={online[0]}
    const [selectOnduty, setSelectOnduty] = useState(onduty[0]);

    //다음 datepicker 선택하거나 option의 값을 바꾸면 스타일 바꾸기
    const [selectedOption, setSelectedOption] = useState(null);
    const selectRef = useRef();

    const handleOptionChange = (selected) => {
        setSelectedOption(selected);
        console.log(selectRef);
    };

    return(
        <>
            <Select options={onduty}
                onChange={setSelectOnduty}
                components={{IndicatorSeparator: () => null,}}
                defaultValue={onduty[0]}
                styles={customStyles}
                isSearchable={false}
                isMulti={false}
                ref={selectRef}
                placeholder='근무 상태를 선택하세요' /> 
        </>        
    );
}

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        background: '#ffffff',
        width: '45vh',
        height: '7vh',
        paddingRight: '1.5vh',
        borderRadius: '2vh',
        marginBottom: '1vh',
        display: 'flex',
        textAlign: 'center',
        cursor: 'pointer',
        boxSizing: 'border-box',
        fontFamily: 'Noto Sans KR, sans-serif',
        fontWeight: state.isSelected? '800' : '400',
        fontSize: '2.4vh',
        color: '#000000',
        border: state.isSelected ? '0.5vh solid #5CC095' : '0.5vh solid #B4B4B4',
        '&:hover': {
            border: state.isSelected ? '0.5vh solid #5CC095' : '0.5vh solid #5CC095',
        },

    }),
    option: (provided, state) => ({
        ...provided,
        background: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        textAlign: 'center',
        fontFamily: 'Noto Sans KR, sans-serif',
        fontWeight: state.isFocused? '800' : '400',
        fontSize: '2.4vh',
        color: '#000000',
        
    })
};