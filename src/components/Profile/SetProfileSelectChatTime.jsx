import React, { useState } from 'react';
import styled from 'styled-components';
import Select from "react-select"; //라이브러리 import

export const SelectChatTime = () => {

    return(
        <>
            <Select
            width="120"
            height="40"
            chooseType={(e: any) => setTimeData(e)}
            isSearchable={false}
            options={TimeData}
            onFocus={onFocus}
            isDisabled={disabled}
            placeholder="00:00"
            value={value ? { target: value, label: value } : null}
            /> 
        </>
    );
}