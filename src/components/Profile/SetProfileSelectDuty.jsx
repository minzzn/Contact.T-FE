import React, { useState } from 'react';
import Select from 'react-select';

export const SelectDuty = () => {
    const ondutyOptions = [
        { value: 'onduty', label: '근무중' },
        { value: 'offduty', label: '근무중 아님' }
    ];

    const [selectOnduty, setSelectOnduty] = useState(null);

    const handleOptionChange = (selected) => {
        setSelectOnduty(selected);
    };

    return (
        <Select 
            options={ondutyOptions}
            onChange={handleOptionChange}
            defaultValue={selectOnduty}
            styles={customStyles(selectOnduty)}
            isSearchable={false}
            isMulti={false}
            placeholder='근무 상태를 선택하세요'
        />
    );
}

const customStyles = (selectedOption) => ({
    control: (provided) => ({
        ...provided,
        background: '#ffffff',
        width: '45vh',
        height: '7vh',
        borderRadius: '2vh',
        marginBottom: '1vh',
        display: 'flex',
        textAlign: 'center',
        cursor: 'pointer',
        fontFamily: 'Noto Sans KR, sans-serif',
        fontWeight: selectedOption ? '800' : '400',
        fontSize: '2.4vh',
        color: '#000000',
        // 선택된 옵션이 있을 경우 테두리 색상을 초록색으로, 없을 경우 회색으로 설정
        border: selectedOption ? '0.5vh solid #5CC095' : '0.5vh solid #B4B4B4',
    }),
    option: (provided, state) => ({
        ...provided,
        background: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        textAlign: 'center',
        fontFamily: 'Noto Sans KR, sans-serif',
        fontWeight: state.isFocused ? '800' : '400',
        fontSize: '2.4vh',
        color: '#000000',
    })
});