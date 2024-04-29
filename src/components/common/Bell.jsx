import { BellContainer, RedDot } from "../../css/styled/Main/House/bell.style"
import { StyledIcon } from "../../css/styled/Main/main.styled"

export const Bell = ({isHavingAlarm = true, marginBottom = '2vh'}) => {

    return (
        <>
            {/* position : absolute 걸려있음 : 이 태그 기준으로 배치 설정 */}
            <BellContainer>
                <StyledIcon className="fa-solid fa-bell" size="30px" $marginBottom={marginBottom} />
                <RedDot $isHavingAlarm={`${isHavingAlarm}`} $marginBottom={marginBottom} />
            </BellContainer>
        </>
    )
}