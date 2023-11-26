import { BellContainer, BellIcon, RedDot } from "../../../css/styled/Main/House/bell.style"

export const Bell = ({isHavingAlarm = true}) => {

    return (
        <>
            {/* position : absolute 걸려있음 : 이 태그 기준으로 배치 설정 */}
            <BellContainer>
                <BellIcon className="fa-solid fa-bell" />
                <RedDot $isHavingAlarm={`${isHavingAlarm}`} />
            </BellContainer>
        </>
    )
}