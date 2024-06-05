import React, { useState } from 'react';
import Select from 'react-select';
import { dutyCustomStyles }from '../../css/styled/Profile/setProfile.styled';

export const SelectDuty = ({ onDutyChange }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const ondutyOptions = [
        { value: 'onduty', label: '근무중' },
        { value: 'offduty', label: '근무중 아님' }
    ];

    const handleOptionChange = (selected) => {
        setSelectedOption(selected);
        onDutyChange(selected.value); // 상위 컴포넌트로 선택된 값을 전달
    };

    return (
        <Select 
            options={ondutyOptions}
            onChange={handleOptionChange}
            value={selectedOption}
            styles={dutyCustomStyles(selectedOption)}
            isSearchable={false}
            isMulti={false}
            placeholder='근무 상태를 선택하세요'
        />
    );
}

