import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Select from "react-select";
import { darken, lighten } from 'polished';

export const SelectDuty = () => {
    const onduty = [
        { value: "onduty", label: "근무중" },
        { value: "offduty", label: "근무중 아님" }
    ] //원래는 select 태그 안에 들어가는 애들을 배열로 만들어준다.

    const [selectOnduty, setSelectOnduty] = useState(onduty[0]);
    //안에 들어가는 값을 받아야해서 state 사용

    return(
        <>
            <Select options={onduty} //위에서 만든 배열을 select로 넣기
                onChange={setSelectOnduty} //값이 바뀌면 setState되게
                defaultValue={onduty[0]}
                styles={customStyles}
                isSearchable={false}
                isMulti={false}
                placeholder='근무 상태를 선택하세요' /> 
        </>        
    ); //사용자가 값을 선택하지 않아도 기본 값으로 '온라인'=={online[0]}이 값으로 들어갈 수 있게
}

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        background: '#ffffff',
        width: '45vh',
        height: '7vh',
        paddingRight: '1.5vh',
        border: state.isFocused? '0.5vh solid #FF9634' : '0.5vh solid #B4B4B4',
        '&:hover': { borderColor: '${lighten(0.1, #FF9634)}'},
        borderRadius: '2vh',
        marginBottom: '1vh',
        display: 'flex',
        textAlign: 'center',
        cursor: 'pointer',

        fontFamily: 'Noto Sans KR, sans-serif',
        fontWeight: state.isFocused? '800' : '400',
        fontSize: '2.4vh',
        color: '#000000',

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