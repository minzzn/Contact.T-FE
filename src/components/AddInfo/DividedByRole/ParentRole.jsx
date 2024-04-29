import { ChildInfoWrapper, ExtraInfoInput, ExtraInfoLabel } from "../../../css/styled/Profile/AddInfo/addInfo.styled"

export const ParentRole = ({onChangeFn = f => f, extraInfo}) => {

    return (
        <>
            <ChildInfoWrapper>
                <ExtraInfoLabel htmlFor='childName'>자녀 이름</ExtraInfoLabel>
                <ExtraInfoInput required type='text' id='childName' name="childName" onChange={(e) => onChangeFn(e)} value={extraInfo.childName} placeholder='자녀 이름'/>
            </ChildInfoWrapper>
            <ChildInfoWrapper>
                <ExtraInfoLabel htmlFor='childCnt'>자녀 수</ExtraInfoLabel>
                <ExtraInfoInput required type='text' id='childCnt' name="childCnt" onChange={(e) => onChangeFn(e)} value={extraInfo.childCnt} placeholder='자녀 수'/>
            </ChildInfoWrapper>
            <ChildInfoWrapper>
                <ExtraInfoLabel htmlFor='teacherName'>교사 이름</ExtraInfoLabel>
                <ExtraInfoInput required type='text' id='teacherName' name='teacherName' onChange={(e) => onChangeFn(e)} placeholder='교사 이름' />
            </ChildInfoWrapper>
        </>
    )
}