import { ExtraInfoInput, ExtraInfoLabel, ExtraInfoWrapper } from "../../../css/styled/Profile/AddInfo/addInfo.styled"

export const TeacherRole = ({ onChange = f => f }) => {

    return (
        <>
            <ExtraInfoWrapper>
                <ExtraInfoLabel htmlFor='class'>반</ExtraInfoLabel>
                <ExtraInfoInput required type='number' min='0' max='6' id='class' name='class' onChange={(e) => onChange(e)} placeholder='반'></ExtraInfoInput>
            </ExtraInfoWrapper>
        </>
    )
}