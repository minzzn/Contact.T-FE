import { EtcContentWrapper, SchoolDiv, SchoolName, SchoolAddressP, SchoolContainer } from "../../../css/styled/Profile/AddInfo/schoolListBox.styled"

export const SchoolListBox = ({ schoolsListArray, schoolInfo, setSelected }) => {
    // schoolsListArray.map((school) => {
    //     console.log(school);
    //     console.log(`${school.schoolName}`);
    //     console.log(typeof `${school.schoolName}`);
    //     console.log(`${school.schoolName}`.indexOf(schoolInfo));
    // })

    function selectSchool(e, name) {
        e.preventDefault();
        
        console.log(name);
        // 값 할당(props값에)
        setSelected(name);
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