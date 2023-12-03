import { EtcContentWrapper, SchoolDiv, SchoolName, SchoolAddressP, SchoolContainer } from "../../../css/styled/Profile/AddInfo/schoolListBox.styled"

export const SchoolListBox = ({ schoolsListArray, schoolInfo, setExtraInfo }) => {
    
    function selectSchool(e, schoolName) {
        e.preventDefault();
    
        // 값 할당(props값에)
        setExtraInfo((prevState) => ({ ...prevState, schoolInfo: schoolName }));
    }

    return (
        <>
            {
                schoolsListArray.map((school,idx) => (
                    <SchoolContainer key={idx}>
                        {
                            `${school.schoolName}`.indexOf(schoolInfo) === 0 ? (
                                <SchoolDiv name="school" onClick={(e) => selectSchool(e, school.schoolName)}>
                                    <SchoolName>{school.schoolName}</SchoolName>
                                    <EtcContentWrapper>
                                        <SchoolAddressP>{school.adres.length > 12 ? `${school.adres.substring(0,11)}...` : school.adres}</SchoolAddressP>
                                    </EtcContentWrapper>
                                </SchoolDiv>
                            ) : null
                        }
                    </SchoolContainer>
                ))
            }
        </>
    )
}