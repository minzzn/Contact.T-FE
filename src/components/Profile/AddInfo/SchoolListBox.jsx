import { EtcContentWrapper, SchoolDiv, SchoolName, SchoolAddressP, SchoolContainer } from "../../../css/styled/Profile/AddInfo/schoolListBox.styled"

export const SchoolListBox = ({schoolsListArray, schoolInfo}) => {
    schoolsListArray.map((school) => {
        console.log(school);
        console.log(`${school.schoolName}`);
        console.log(typeof `${school.schoolName}`);
        console.log(`${school.schoolName}`.indexOf(schoolInfo));
    })

    return (
        <>
            {
                schoolsListArray.map((school,idx) => (
                    <SchoolContainer key={idx}>
                        {
                            `${school.schoolName}`.indexOf(schoolInfo) === 0 ? (
                                <SchoolDiv>
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