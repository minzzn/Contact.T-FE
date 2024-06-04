import { SchoolDiv, SchoolName, SchoolAddressP, SchoolContainer } from "../../css/styled/Profile/AddInfo/schoolListBox.styled"

export const SchoolListBox = ({ role, schoolsListArray, schoolInfo, setter }) => {

    function selectSchool(e, schoolName) {
        e.preventDefault();
    
        // 값 할당(props값에)
        setter((prevState) => {
            const schoolKeyByRole = role === "TEACHER" ? "teacherSchool" : "childSchool";

            return { 
                ...prevState, 
                [schoolKeyByRole]: schoolName 
            }
        });
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
                                    <SchoolAddressP>{school.adres}</SchoolAddressP>
                                </SchoolDiv>
                            ) : null
                        }
                    </SchoolContainer>
                ))
            }
        </>
    )
}