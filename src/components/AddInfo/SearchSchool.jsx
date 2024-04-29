
export const SearchSchool = () => {

    return (
        <>
            <SearchSchoolContainer>
                <ExtraInfoLabel>학교 검색</ExtraInfoLabel>
                <RadioInputContainer>
                    <RadioInputWrapper>
                        <ExtraInfoInputRadio type='radio' value="elem_list" id='elementary' name='schoolType' onChange={(e) => onChange(e)} />
                        <TypeOfSchoolLabel htmlFor='elementary'>초등학교</TypeOfSchoolLabel>
                    </RadioInputWrapper>
                    <RadioInputWrapper>
                        <ExtraInfoInputRadio type='radio' value="midd_list" id='middle' name='schoolType' onChange={(e) => onChange(e)} />
                        <TypeOfSchoolLabel htmlFor='middle'>중학교</TypeOfSchoolLabel>
                    </RadioInputWrapper>
                    <RadioInputWrapper>
                        <ExtraInfoInputRadio type='radio' value="high_list" id='high' name='schoolType' onChange={(e) => onChange(e)} />
                        <TypeOfSchoolLabel htmlFor='high'>고등학교</TypeOfSchoolLabel>                          
                    </RadioInputWrapper>
                </RadioInputContainer>
                <ExtraInfoInput required id='schoolInfo' name="schoolInfo" type='text' value={extraInfo.schoolInfo} disabled={extraInfo.schoolType.length < 1} onChange={onChange} placeholder='학교 정보 입력'/>

                <SchoolsListWrapper>
                    <SchoolListBox schoolsListArray={schoolList} schoolInfo={extraInfo.schoolInfo} setExtraInfo={setExtraInfo}/>
                </SchoolsListWrapper>
            </SearchSchoolContainer>
        </>
    )
}