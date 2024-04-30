import { ExtraInfoWrapper, ExtraInfoInput, ExtraInfoLabel } from "../../../css/styled/Profile/AddInfo/addInfo.styled"

export const ParentRole = ({ onChange = f => f, childNum, childInfo }) => {

    return (
        <>
            <ExtraInfoWrapper>
                <ExtraInfoLabel htmlFor='childNum'>자녀 수</ExtraInfoLabel>
                <ExtraInfoInput required type='number' id='childNum' name="childNum" onChange={(e) => onChange(e)} value={childNum} />
            </ExtraInfoWrapper>
            <ExtraInfoWrapper>
                <ExtraInfoLabel htmlFor='childName'>자녀 이름</ExtraInfoLabel>
                <ExtraInfoInput required type='text' id='childName' name="childName" onChange={(e) => onChange(e)} value={childInfo.childName} placeholder='자녀 이름'/>
            </ExtraInfoWrapper>
                        <ExtraInfoWrapper>
                <ExtraInfoLabel htmlFor='class'>반</ExtraInfoLabel>
                <ExtraInfoInput required type='number' min='0' max='6' id='class' name='class' onChange={(e) => onChange(e)} value={childInfo.childClass} placeholder='반'></ExtraInfoInput>
            </ExtraInfoWrapper>
            <ExtraInfoWrapper>
                <ExtraInfoLabel htmlFor='teacherName'>교사 이름</ExtraInfoLabel>
                <ExtraInfoInput required type='text' id='teacherName' name='teacherName' onChange={(e) => onChange(e)} value={childInfo.teacherName} placeholder='교사 이름' />
            </ExtraInfoWrapper>
        </>
    )
}