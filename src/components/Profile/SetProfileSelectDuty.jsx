import React, { useState } from 'react';
import styled from 'styled-components';
import Select from "react-select"; //라이브러리 import

export const SelectDuty = () => {
    const onduty = [
        { value: "offduty", label: "근무중 아님" },
        { value: "onduty", label: "근무중" }
    ] //원래는 select 태그 안에 들어가는 애들을 배열로 만들어준다.

    const [selectOnduty, setSelectOnduty] = useState(onduty[0]);
    //안에 들어가는 값을 받아야해서 state 사용

    return(
        <>
            <Select options={onduty} //위에서 만든 배열을 select로 넣기
                onChange={setSelectOnduty} //값이 바뀌면 setState되게
                defaultValue={onduty[0]} /> 
        </>        
    ); //사용자가 값을 선택하지 않아도 기본 값으로 '온라인'=={online[0]}이 값으로 들어갈 수 있게
}